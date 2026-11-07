/**
 * Static link + inventory check.
 *
 * Verifies that every catalog entry has a unique route, that every hard-coded
 * internal link in the data layer resolves to a real route, and prints the
 * page inventory counts used in the content inventory document.
 */
import { catalogEntries, catalogTree, entriesNeedingReview } from '../src/data/catalog/index.js';
import { footerNavigation, companyNavigation, legalNavigation } from '../src/data/site.js';
import { caseStudies } from '../src/data/caseStudies.js';
import { articles } from '../src/data/blog.js';

const staticRoutes = new Set([
  '/',
  '/about',
  '/process',
  '/case-studies',
  '/blog',
  '/partnerships',
  '/contact',
  '/sitemap',
  '/privacy',
  '/terms',
]);

const routes = new Set([
  ...staticRoutes,
  ...catalogTree.map((c) => c.path),
  ...catalogEntries.map((e) => e.path),
  ...caseStudies.map((c) => '/case-studies/' + c.slug),
  ...articles.map((a) => '/blog/' + a.slug),
]);

let failures = 0;

// 1. Duplicate routes
const seen = new Map();
for (const entry of catalogEntries) {
  if (seen.has(entry.path)) {
    console.error('DUPLICATE ROUTE: ' + entry.path);
    failures += 1;
  }
  seen.set(entry.path, entry);
}

// 2. Internal links declared in data must resolve
const declaredLinks = [
  ...footerNavigation.flatMap((g) => g.links.map((l) => l.to)),
  ...companyNavigation.map((l) => l.to),
  ...legalNavigation.map((l) => l.to),
  ...caseStudies.flatMap((c) => c.services.map((s) => s.to)),
];

for (const link of declaredLinks) {
  const base = link.split('#')[0];
  if (!routes.has(base)) {
    console.error('BROKEN DATA LINK: ' + link);
    failures += 1;
  }
}

// 3. Every entry needs the fields the template renders
for (const entry of catalogEntries) {
  if (!entry.title || !entry.blurb || !entry.intro) {
    console.error('INCOMPLETE ENTRY: ' + entry.path);
    failures += 1;
  }
  if (!entry.image) {
    console.error('MISSING IMAGE: ' + entry.path);
    failures += 1;
  }
}

console.log('--- Inventory ---');
for (const category of catalogTree) {
  console.log(
    category.path.padEnd(24) +
      String(category.count).padStart(3) +
      '  [' +
      category.groups.map((g) => g.id + ':' + g.entries.length).join(', ') +
      ']',
  );
}
console.log('Catalog pages:      ' + catalogEntries.length);
console.log('Category hubs:      ' + catalogTree.length);
console.log('Case studies:       ' + caseStudies.length);
console.log('Articles:           ' + articles.length);
console.log('Static pages:       ' + staticRoutes.size);
console.log('Total routes:       ' + routes.size);
console.log('Entries flagged for review: ' + entriesNeedingReview.length);

if (failures) {
  console.error('\n' + failures + ' problem(s) found.');
  process.exit(1);
}
console.log('\nAll checks passed.');
