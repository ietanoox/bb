import { defineConfig } from 'astro/config';

// A custom domain uses '/'. For project GitHub Pages, set BASE_PATH=/repository-name.
export default defineConfig({
  site: process.env.SITE_URL || 'https://broadbranding.com',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
