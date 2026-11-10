import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

// Validate the deployed artifact, including links under a GitHub Pages subpath.
const root = path.resolve('dist');
const base = `/${(process.env.BASE_PATH || '/').replace(/^\/+|\/+$/g, '')}`.replace(/\/$/, '');
const routes = ['', 'about-us', 'contact-us', 'project-management', 'marketing', 'sustainability', 'business-strategy', 'technology-innovation', 'cloud'];
const files = [];
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(filename);
    else files.push(filename);
  }
}
await walk(root);
const errors = [];
let links = 0;
for (const route of routes) assert.ok(files.includes(path.join(root, route, 'index.html')), `Missing /${route}`);
const htmlFiles = files.filter(file => file.endsWith('.html'));
async function checkUrl(raw, from) {
  const value = raw.replace(/&amp;/g, '&');
  if (/^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(value) || !value) return;
  const current = path.relative(root, from).split(path.sep).join('/');
  const url = new URL(value, `https://local.test${base}/${current}`);
  if (base && !(url.pathname === base || url.pathname.startsWith(`${base}/`))) { errors.push(`${current}: URL escapes BASE_PATH: ${value}`); return; }
  let relative = decodeURIComponent(url.pathname.slice(base.length)).replace(/^\//, '');
  let target = path.join(root, relative);
  try {
    const info = await stat(target);
    if (info.isDirectory()) target = path.join(target, 'index.html');
    await stat(target);
    if (url.hash && target.endsWith('.html')) {
      const targetHtml = await readFile(target, 'utf8');
      const id = decodeURIComponent(url.hash.slice(1));
      if (!new RegExp(`\\bid=["']${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`).test(targetHtml)) errors.push(`${current}: missing anchor ${value}`);
    }
  } catch { errors.push(`${current}: missing target ${value}`); }
  links++;
}
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const label = path.relative(root, file);
  if ((html.match(/<h1\b/g) || []).length !== 1) errors.push(`${label}: expected one h1`);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${label}: missing title`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) errors.push(`${label}: missing description`);
  if (/wp-content|wp-admin|wp-includes|__cf_email__|elementor-/.test(html)) errors.push(`${label}: legacy WordPress dependency`);
  for (const match of html.matchAll(/\b(?:href|src)="([^"]*)"/g)) await checkUrl(match[1], file);
  for (const match of html.matchAll(/\bsrcset="([^"]+)"/g)) for (const candidate of match[1].split(',')) await checkUrl(candidate.trim().split(/\s+/)[0], file);
  for (const match of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt="[^"]*"/.test(match[0])) errors.push(`${label}: image without alt text`);
}
const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, 9, 'Expected nine sitemap URLs');
if (base) assert.ok(sitemap.includes(`${base}/about-us/`), 'Sitemap must include BASE_PATH');
assert.ok((await readFile(path.join(root, 'robots.txt'), 'utf8')).includes('sitemap.xml'));
assert.deepEqual(errors, [], `Artifact verification failed:\n${errors.join('\n')}`);
console.log(`Verified ${routes.length} original routes, ${htmlFiles.length} HTML files and ${links} local links/assets${base ? ` under ${base}` : ''}.`);
