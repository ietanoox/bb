#!/usr/bin/env python3
"""Capture public Broad Branding design references and self-host the original assets."""
from concurrent.futures import ThreadPoolExecutor, as_completed
from html import unescape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, urlunsplit
from urllib.request import Request, urlopen
import hashlib, json, re, shutil, xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
REF = ROOT / '.reference'
PAGES = REF / 'pages'
ASSETS = REF / 'assets'
PUBLIC = ROOT / 'public/assets'
for directory in [PAGES, ASSETS, PUBLIC]: directory.mkdir(parents=True, exist_ok=True)
BASE = 'https://broadbranding.com/'
errors = []
manifest = {}

def canonical(url):
    url = unescape(url).strip()
    if url.startswith('//'): url = 'https:' + url
    parts = urlsplit(url)
    if parts.hostname and (parts.hostname == 'broadbranding.com' or parts.hostname.startswith('broadbranding.com.')):
        url = urlunsplit(('https', 'broadbranding.com', parts.path, parts.query, ''))
    return url

def fetch(url):
    with urlopen(Request(url, headers={'User-Agent': 'Mozilla/5.0 BroadBrandingMigration/1.0'}), timeout=45) as response:
        return response.read()

def capture_page(url):
    slug = urlsplit(url).path.strip('/') or 'index'
    path = PAGES / f'{slug}.html'
    if not path.exists(): path.write_bytes(fetch(url))
    return url, path.read_text()

sitemap_file = REF / 'sitemap.xml'
if not sitemap_file.exists(): sitemap_file.write_bytes(fetch(BASE + 'page-sitemap.xml'))
xml = ET.fromstring(sitemap_file.read_bytes())
urls = [x.text for x in xml.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url/{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
pages = dict(ThreadPoolExecutor(max_workers=6).map(capture_page, urls))

class Links(HTMLParser):
    def __init__(self): super().__init__(); self.styles=[]; self.media=[]
    def handle_starttag(self, tag, attributes):
        attrs=dict(attributes)
        if tag == 'link' and 'stylesheet' in attrs.get('rel',''): self.styles.append(attrs.get('href'))
        if tag in ('img','source','video'):
            for key in ('src','poster','data-src'):
                if attrs.get(key): self.media.append(attrs[key])
            for key in ('srcset','data-srcset'):
                self.media.extend(x.strip().split(' ')[0] for x in attrs.get(key,'').split(',') if x.strip())
        if tag == 'link' and ('icon' in attrs.get('rel','') or attrs.get('as') == 'font'):
            self.media.append(attrs.get('href'))

styles=set(); media=set()
for pageurl, html in pages.items():
    parser=Links(); parser.feed(html)
    styles.update(canonical(urljoin(pageurl,u)) for u in parser.styles if u)
    media.update(canonical(urljoin(pageurl,u)) for u in parser.media if u)
    media.update(canonical(u) for u in re.findall(r'''(?:https?:)?//[^\s"'<>]+?\.(?:webp|png|jpg|jpeg|svg|woff2?|ttf)(?:\?[^\s"'<>]*)?''', html))

names={}
def save_asset(url):
    url=canonical(url)
    parts=urlsplit(url)
    name=Path(parts.path).name
    # CSS names can overlap across plugins; keep a short source hash to avoid collisions.
    if name.endswith('.css'): name=f'{Path(name).stem}-{hashlib.sha1(parts.path.encode()).hexdigest()[:7]}.css'
    if not name: return None
    if name in names and names[name] != parts.path:
        name=f'{Path(name).stem}-{hashlib.sha1(parts.path.encode()).hexdigest()[:7]}{Path(name).suffix}'
    names[name]=parts.path
    target=ASSETS/name
    try:
        if not target.exists(): target.write_bytes(fetch(url))
        entry={'source':url,'reference':f'.reference/assets/{name}','bytes':target.stat().st_size}
        if target.suffix != '.css':
            shutil.copy2(target, PUBLIC/name)
            entry['local']=f'/assets/{name}'
        manifest[url]=entry
        return target
    except Exception as error:
        errors.append({'url':url,'error':str(error)})
        return None

cssfiles=[]
with ThreadPoolExecutor(max_workers=8) as pool:
    for path in pool.map(save_asset, sorted(styles)):
        if path: cssfiles.append(path)

# Include CSS background images and local custom-font declarations.
for path in cssfiles:
    text=path.read_text()
    source=next(k for k,v in manifest.items() if v['reference'] == f'.reference/assets/{path.name}')
    for raw in re.findall(r'''url\(\s*["']?([^\)"']+)''',text):
        if not raw.startswith('data:'):
            media.add(canonical(urljoin(source,raw)))

# Download the full original image for each used responsive variant as well.
for url in list(media):
    if re.search(r'-\d+x\d+\.(webp|png|jpg|jpeg)$',urlsplit(url).path):
        media.add(re.sub(r'-\d+x\d+(?=\.(?:webp|png|jpg|jpeg)(?:\?|$))','',url))
with ThreadPoolExecutor(max_workers=10) as pool:
    list(pool.map(save_asset,sorted(media)))

(REF/'asset-manifest.json').write_text(json.dumps({'pages':urls,'assets':manifest,'errors':errors},indent=2)+'\n')
print(json.dumps({'pages':len(pages),'assets':len(manifest),'total_bytes':sum(v['bytes'] for v in manifest.values()),'errors':errors},indent=2))
