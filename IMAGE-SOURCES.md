# Image sources

## Everything on this site is newly generated

All 34 photographs under `public/images/gen/` were generated for this project on
7 November 2026. **No photograph or illustration was copied from digaptics.io.** The previously
bundled Unsplash downloads were removed from `public/` in the same pass. The
only reused assets are the official Digaptics logo and favicon files, used at
the client's request (see **Logo** below).

### Generation rules applied to every prompt

- Photorealistic editorial look, soft directional light, shallow depth of field
- Muted palette with a consistent indigo/violet accent so the set reads as one library
- Landscape 16:10, delivered at 1586 x 992 and encoded as JPEG at quality 0.8
- **No text, letters, numbers, logos, brand marks or legible interface detail**
- No identifiable individuals; people are shown from behind, in profile or soft focus
- No fabricated dashboards, analytics figures or client screenshots

File sizes range from roughly 109 KB to 240 KB.

### The set

| File | Used on |
|---|---|
| `home-hero.jpg` | Homepage hero, default social sharing image |
| `marketing.jpg` | `/marketing` hub, ecommerce growth group |
| `web-app-development.jpg` | `/web-app-development` hub |
| `printing.jpg` | `/printing` hub |
| `industries.jpg` | `/industries` hub and regulated group |
| `photo-video.jpg` | `/photo-video` hub |
| `bpo.jpg` | `/bpo` hub |
| `ecommerce.jpg` | `/ecommerce` hub, industries commerce group |
| `seo.jpg`, `advertising.jpg`, `reputation.jpg`, `social-media.jpg` | Marketing groups and their 23 detail pages |
| `software.jpg`, `web-design.jpg`, `mobile-apps.jpg`, `platforms.jpg` | Web & app groups and their 29 detail pages |
| `print-collateral.jpg`, `signs-banners.jpg`, `trade-show.jpg`, `packaging.jpg` | Printing groups and their 69 detail pages |
| `photography.jpg`, `videography.jpg` | Photo & video groups and their 16 detail pages |
| `bpo-teams.jpg`, `bpo-roles.jpg`, `bpo-how-it-works.jpg`, `bpo-pricing.jpg` | BPO groups and their 50 detail pages |
| `ecommerce-platforms.jpg`, `marketplaces.jpg` | Ecommerce groups and their 23 detail pages |
| `about-team.jpg` | About page |
| `case-studies.jpg` | Case studies index, Halal Caters case study |
| `blog.jpg` | Blog index and article pages |
| `partnerships.jpg` | Partnerships page |
| `contact.jpg` | Contact page hero, homepage location section |
| `process.jpg` | Process page hero, pending case studies |

Images are assigned per category and group rather than per page, so a detail
page always shows an image that matches its subject area. Alt text is written
per image in `src/data/catalog/categories.js` and in the page that uses it.

## Logo

The official Digaptics brand assets are used, supplied by the client from
digaptics.io:

| File | Source | Use |
|---|---|---|
| `public/images/digaptics-logo.png` | `/wp-content/uploads/2025/10/cropped-Digaptics.png` | Header wordmark |
| `public/images/digaptics-footer-logo.png` | `/wp-content/uploads/2025/10/footer-logo.png` | Footer wordmark (white, for the dark footer) |
| `public/digaptics-icon-300.png` | `/wp-content/uploads/2024/08/digaptics-favicon-300x300.png` | 192px favicon and Apple touch icon |
| `public/favicon.png` | `/wp-content/uploads/2024/08/digaptics-favicon-150x150.png` | 32px favicon |

`public/social-card.svg` remains type-only.

## Performance and accessibility handling

- Lead images on each page use `fetchPriority="high"`; everything below the fold uses `loading="lazy"`.
- Every `<img>` declares intrinsic `width`/`height` (1586 x 992) so layout space is reserved.
- `object-fit: cover` with clamped heights keeps crops intentional from 390px to 1680px.
- All images have descriptive alt text; decorative icons are `aria-hidden`.
- No image is presented as a Digaptics office, employee, client or published result.
