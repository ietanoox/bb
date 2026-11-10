import type { APIRoute } from 'astro';
import { services } from '../data/services';
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const urls = ['', 'about-us/', 'contact-us/', ...services.map(service => `${service.slug}/`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(path => `<url><loc>${new URL(`${base}${path}`, site).href}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
