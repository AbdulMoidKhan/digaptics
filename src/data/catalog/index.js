/**
 * Catalog index.
 *
 * Normalises every entry into one shape, derives routes, and exposes lookup
 * helpers plus the navigation tree used by the header, footer and sitemap.
 */
import { categories, categoryById, groupMeta } from './categories.js';
import { marketingEntries } from './marketing.js';
import { webappEntries } from './webapp.js';
import { printingEntries } from './printing.js';
import { industriesEntries } from './industries.js';
import { photoVideoEntries } from './photovideo.js';
import { bpoEntries } from './bpo.js';
import { ecommerceEntries } from './ecommerce.js';

const raw = [
  ['marketing', marketingEntries],
  ['web-app-development', webappEntries],
  ['printing', printingEntries],
  ['industries', industriesEntries],
  ['photo-video', photoVideoEntries],
  ['bpo', bpoEntries],
  ['ecommerce', ecommerceEntries],
];

function normalise(categoryId, entry) {
  const category = categoryById[categoryId];
  const group = groupMeta(categoryId, entry.group);
  return {
    ...entry,
    categoryId,
    categoryLabel: category.label,
    categoryPath: category.path,
    groupId: entry.group,
    groupLabel: group?.label ?? category.label,
    path: `${category.path}/${entry.slug}`,
    highlights: (entry.h ?? []).map(([title, desc]) => ({ title, desc })),
    points: entry.points ?? [],
    faqs: (entry.faqs ?? []).map(([q, a]) => ({ q, a })),
    image: entry.image ?? group?.image ?? category.image,
    imageAlt: entry.imageAlt ?? group?.imageAlt ?? category.imageAlt,
    review: entry.review ?? null,
  };
}

export const catalogEntries = raw.flatMap(([categoryId, entries]) =>
  entries.map((entry) => normalise(categoryId, entry)),
);

export const entriesByPath = Object.fromEntries(catalogEntries.map((e) => [e.path, e]));

export function findEntry(categoryId, slug) {
  return catalogEntries.find((e) => e.categoryId === categoryId && e.slug === slug) ?? null;
}

export function entriesFor(categoryId) {
  return catalogEntries.filter((e) => e.categoryId === categoryId);
}

export function entriesForGroup(categoryId, groupId) {
  return catalogEntries.filter((e) => e.categoryId === categoryId && e.groupId === groupId);
}

/** Category + grouped children, used for mega menu, hubs and the sitemap page. */
export const catalogTree = categories.map((category) => ({
  ...category,
  count: entriesFor(category.id).length,
  groups: category.groups
    .map((group) => ({
      ...group,
      path: `${category.path}#${group.id}`,
      entries: entriesForGroup(category.id, group.id),
    }))
    .filter((group) => group.entries.length > 0),
}));

/** Related entries: same group first, then same category. */
export function relatedEntries(entry, limit = 4) {
  const sameGroup = catalogEntries.filter(
    (e) => e.categoryId === entry.categoryId && e.groupId === entry.groupId && e.slug !== entry.slug,
  );
  const sameCategory = catalogEntries.filter(
    (e) => e.categoryId === entry.categoryId && e.groupId !== entry.groupId,
  );
  return [...sameGroup, ...sameCategory].slice(0, limit);
}

/** Every entry that flagged a source problem needing review. */
export const entriesNeedingReview = catalogEntries.filter((e) => e.review);

export { categories, categoryById, groupMeta };
