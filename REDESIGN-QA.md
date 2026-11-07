# Build and QA record

Date: 7 November 2026
Stack: Vite 8 + React 19 + React Router 7 (the project's existing setup, unchanged)

## What was rebuilt

| Area | Result |
|---|---|
| Information architecture | Rebuilt around the reference site's 7 mega-menu categories instead of the previous 6 invented services |
| Routes | 270 (was 20) |
| Catalog | 238 data-driven service, product and industry pages in `src/data/catalog/` |
| Navigation | Per-category mega menus, grouped mobile accordion, grouped footer, `/sitemap` index |
| Content | Every page written for this site; no Lorem Ipsum, no placeholder stats, no invented metrics |
| Images | 34 newly generated photographs; all previously downloaded assets removed |
| Legacy URLs | `/services`, `/work`, `/insights`, `/blogs`, `/about-us`, `/contact-us` redirect in-app and in `public/_redirects` |

## Automated checks

```
node scripts/check-links.mjs      # inventory + internal link resolution
node scripts/generate-sitemap.mjs # public/sitemap.xml (270 URLs)
npm run build                     # production build
npm run lint                      # eslint, clean
```

`check-links.mjs` verifies: no duplicate catalog routes, every hard-coded
internal link in the data layer resolves to a real route, and every entry has a
title, blurb, intro and image. Last run: **all checks passed**, 0 problems.

## Browser checks

- **All 270 routes** were navigated in the dev server and checked for: a rendered `<h1>`, a unique document title, a non-empty meta description, and zero failed image loads. **0 problems.**
- Accessibility spot checks on 10 representative pages (home, a hub, a service detail, a BPO pricing page, an article, a case study, partnerships, about, contact, sitemap): single `<h1>` each, no skipped heading levels, no images missing alt text, no unnamed links or buttons, `lang="en"`, `<main id="main">` present with a working skip link.
- Keyboard: mega menus open from a disclosure button with `aria-expanded`/`aria-controls`, close on Escape and return focus to the trigger; the mobile panel traps Tab and restores focus on close.
- Responsive: verified at 390px (mobile), 834px (tablet, mobile nav), and 1440px+ (desktop, mega menus). Images use intrinsic sizing so there is no layout shift.
- Motion respects `prefers-reduced-motion` through the existing GSAP helpers.

## Known trade-offs

- The main JS chunk is ~368 KB (125 KB gzipped) because the catalog data powers the header on every route. Splitting the catalog per category is the obvious next optimisation if that matters.
- Images are assigned per category/group rather than per individual page. With 238 catalog pages, per-page photography would need a much larger shoot or generation budget; group-level imagery keeps every page visually relevant without fabricating product-specific photos.
- The contact form has no live endpoint (`contactConfig.formEndpoint === null`), so it validates input and prepares an email instead of pretending to submit.

## Outstanding items

See `CONTENT-INVENTORY.md` §4 for the full list of facts that need confirmation,
including 22 page-level flags that are also displayed on the pages themselves.
