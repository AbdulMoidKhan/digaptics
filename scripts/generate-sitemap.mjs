/**
 * Regenerates public/sitemap.xml from the site's route list.
 * Run with: npm run sitemap
 *
 * Keep SITE_URL in step with `site.url` in src/data/site.js.
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { catalogEntries, catalogTree } from '../src/data/catalog/index.js';
import { caseStudies } from '../src/data/caseStudies.js';
import { articles } from '../src/data/blog.js';

const SITE_URL = 'https://digaptics.io';

const routes = [
  '/',
  '/about',
  '/process',
  '/case-studies',
  ...caseStudies.map((study) => '/case-studies/' + study.slug),
  '/blog',
  ...articles.map((article) => '/blog/' + article.slug),
  '/partnerships',
  '/contact',
  '/sitemap',
  ...catalogTree.map((category) => category.path),
  ...catalogEntries.map((entry) => entry.path),
  '/privacy',
  '/terms',
];

const today = new Date().toISOString().slice(0, 10);

const body = routes
  .map((route) => {
    const depth = route.split('/').filter(Boolean).length;
    const priority = route === '/' ? '1.0' : depth > 1 ? '0.7' : '0.8';
    return [
      '  <url>',
      '    <loc>' + SITE_URL + route + '</loc>',
      '    <lastmod>' + today + '</lastmod>',
      '    <changefreq>' + (route === '/' ? 'weekly' : 'monthly') + '</changefreq>',
      '    <priority>' + priority + '</priority>',
      '  </url>',
    ].join('\n');
  })
  .join('\n');

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  body +
  '\n</urlset>\n';

const here = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(here, '..', 'public', 'sitemap.xml');
await writeFile(target, xml);
console.log('Wrote ' + routes.length + ' URLs to public/sitemap.xml');
