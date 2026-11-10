# Broad Branding · Astro

A static Astro rebuild of [broadbranding.com](https://broadbranding.com/), preserving its original content, layout, grayscale palette, Satoshi font, logo, illustrations, and photography. Images and the font are served locally from `public/assets/`. The site does not require WordPress, Elementor, a database, or a server runtime.

## Run locally

Use Node.js 24 LTS (the minimum is 22.23.4).

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. To validate and preview the production output:

```sh
npm run check
npm run build
npm run verify
npm run preview
```

`check` validates Astro and TypeScript. `build` generates the static site in `dist/`. `verify` checks the generated pages and their local links and assets.

## Pages and editing

All nine original sitemap routes are retained:

| Page | Route |
| --- | --- |
| Home | `/` |
| About us | `/about-us/` |
| Contact us | `/contact-us/` |
| Project management | `/project-management/` |
| Marketing | `/marketing/` |
| Sustainability | `/sustainability/` |
| Business strategy | `/business-strategy/` |
| Cloud | `/cloud/` |
| Technology innovation | `/technology-innovation/` |

Page templates are in `src/pages/`, shared navigation and footer components in `src/components/`, service copy in `src/data/services.ts`, and styling in `src/styles/global.css`. Use the helpers in `src/lib/urls.ts` for internal links and asset paths so they respect Astro's `BASE_URL` when deployed in a subdirectory.

## Push to your new GitHub repository

Create an empty GitHub repository, then commit this project and connect that repository:

```sh
git add .
git commit -m "Rebuild Broad Branding in Astro"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the example URL with your repository URL. The lockfile and local assets should be committed; `node_modules/`, `dist/`, environment files, and the local source-capture directory are ignored.

## GitHub Pages

The included `.github/workflows/deploy.yml` checks, builds, verifies, and deploys the site on pushes to `main`, or manually from GitHub's Actions tab. In your repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

Set these repository variables under **Settings → Secrets and variables → Actions → Variables** before deploying:

| Hosting address | `SITE_URL` | `BASE_PATH` |
| --- | --- | --- |
| Custom domain | `https://broadbranding.com` | `/` |
| Project Pages | `https://YOUR-USERNAME.github.io` | `/YOUR-REPOSITORY` |
| User/organization Pages | `https://YOUR-USERNAME.github.io` | `/` |

The defaults are `SITE_URL=https://broadbranding.com` and `BASE_PATH=/`. For a project Pages URL, set **both** variables to the values in the table. The base path is included in navigation, images, styles, canonical URLs, and the generated sitemap.

The workflow does not set a custom domain or change DNS. Configure a custom domain separately in GitHub Pages when you are ready to move the live site. No `CNAME` file is included.

For a local build with a different address, pass environment variables directly:

```sh
SITE_URL=https://YOUR-USERNAME.github.io BASE_PATH=/YOUR-REPOSITORY npm run build
```

See the official [Astro deployment guide](https://docs.astro.build/en/guides/deploy/github/) for GitHub Pages setup.

## Other static hosts

Use `npm ci` to install dependencies, `npm run build` as the build command, and `dist` as the publish directory. Set `SITE_URL` to the final public origin and `BASE_PATH=/` for a domain-root deployment. The resulting files can also be uploaded directly to any static web host.
