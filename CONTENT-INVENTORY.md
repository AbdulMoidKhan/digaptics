# Digaptics site: source inspection and page inventory

Reference site: **https://digaptics.io/** (WordPress + Elementor)
Inspected: 7 November 2026, via the live pages and the site's public WordPress REST API.

---

## 1. How the reference site was inspected

| Source | What it gave |
|---|---|
| `https://digaptics.io/sitemap.xml` | A sitemap index of 49 entries, many of which 404 (`/aa`, `/angular`, `/cloud-computing`, `/career`, `/cart`, `/b2b-ui-ux`, `/block-chain`, `/best-marketing-agency`, `/3-mobile`, `/case-study-inner`, `/amazon-web-services`, `/artificial-technologies`, `/augmented-reality-vr`, `/articles`). It is **not** a reliable index of the live site. |
| `wp-json/wp/v2/pages` | **245 published pages** — the authoritative live page list. |
| `wp-json/wp/v2/posts` | **20 posts** covering **12 unique topics** (each topic is published twice under duplicate slugs). |
| `wp-json/wp/v2/our-service`, `case-study` | 4 service summaries, 2 case studies. |
| Live HTML of `/contact-us/`, `/`, `/about-us/`, `/blogs/`, `/case-studies/` | Header mega menu (7 top-level categories with group structure), footer, contact details, awards, partner list. |
| Other custom post types (`service`, `bpo-service`, `industry-service`, `process`, `why-us`, `client-testimonail`) | Section components used inside pages, not standalone URLs. |

### Reference information architecture (mega menu)

1. **Marketing** — Search Engine Optimization, Advertisement, Reputation, Social Media Management, Ecommerce
2. **Web & App Development** — top-level link only; no submenu is rendered in the page HTML
3. **Printing** — Print & Collateral's, Signs & Banners, Trade Show Display, Product Packaging
4. **Industries** — 25 sector links
5. **Photo & Videography** — Photography, Videography, Others
6. **BPO** — Teams, Job Roles, How It Works, Pricing
7. **Ecommerce** — Ecommerce CMS, Ecommerce Products, Ecommerce Digital Marketing, Ecommerce Development

Company/footer links: About, Contact, Privacy, Terms, "Digaptics University", Affiliations / Partnerships, Blogs, Case Studies.

### Verified business facts carried across

- Phone: **+1 (630) 481-6122**; secondary number listed in header: **+1 (800) 462-0584**
- Email: **connect@digaptics.com**
- Address: **200 South Wacker Drive, Suite 3100, Chicago 60606**
- Social: Facebook, Instagram, LinkedIn (the reference footer also shows X, Pinterest and YouTube icons, but without working profile URLs in the markup, so only the three with verified URLs are linked)
- Awards claimed: Top SEO Agency 2019 (UpCity), Top React Native Developers Chicago 2020 (Clutch), Top Mobile App Development Company 2021 (GoodFirms), Best Social Media Marketing Agency 2021 (DesignRush)
- Footer partner names: Zabiha Food, Trade Show Realm, Samira Ghaniwala, Orbitus Solutions, Nabeel Palla, Halal Tummy, Halal Eaten, Halal Coffee Shops, Growth Tech 360, Coffee Shop List, Visioneer Tech

### Significant source-quality findings

- **227 of 245 pages contain Lorem Ipsum placeholder text**, usually in FAQ answers, feature-card bodies and CTA paragraphs.
- The homepage statistics counters are placeholders set to `0`, and the About page says "Founded in **[Year]**".
- Testimonials are all attributed to the same name ("Alisa Smith"); blog posts are all credited to "Mike Hardson".
- A "$199/month Boost" pricing block appears on many unrelated pages with benefits that do not match the page subject.
- Several pages carry copy from other pages or other companies (see §4).

None of the placeholder content, placeholder statistics or demo author/testimonial names were carried into the new site.

---

## 2. Page inventory of the new site

**270 routes total.** Every one is listed on `/sitemap` and in `public/sitemap.xml`.

### Core pages (10)

| New page | Sections | Source |
|---|---|---|
| `/` | Hero, 7 category grid, process, published case studies + awards, featured articles, location, CTA | `/` homepage, mega menu, footer |
| `/about` | Intro, who we are, 11 development capabilities, category breadth, location | `/about-us/` |
| `/process` | Phase-by-phase delivery detail and FAQs | Process sections repeated across service pages |
| `/case-studies` | Published studies, pending studies, awards | `/case-studies/`, `/halal-caters/`, homepage awards |
| `/blog` | Filterable index of 12 articles | `/blogs/` and the 20 posts |
| `/partnerships` | Partner value, white-label services, programme, partner list | `/affiliations-partnerships/` + footer partners |
| `/contact` | Inquiry form, contact details, social, next steps | `/contact-us/`, footer |
| `/sitemap` | Complete human-readable index | New (no equivalent on reference site) |
| `/privacy`, `/terms` | Legal pages | Existing project pages, retained |

### Catalog (7 hubs + 238 detail pages)

| Hub | Pages | Groups | Source pages |
|---|---|---|---|
| `/marketing` | 23 | SEO (5), Advertising (5), Reputation (3), Social Media (10) | `seo-audit-service`, `enterprise-seo-service`, `affordable-seo-service`, `app-store-optimization`, `web-page-speed-optimization`, `ppc-management-services`, `enterprise-ppc-management-services`, `addressable-geofencing-services`, `social-media-paid-advertizing`, `enterprise-social-media-advertising-services`, `review-management`, `business-listing-management`, `review-amplifier`, `social-media-management-services`, `social-media-design`, `facebook-page-management`, `facebook-page-profile-optimization`, `social-media-instagram-optimization-for-profile-business`, `linkedin-profile-management`, `social-media-linkedin-optimization`, `youtube-channel-management`, `social-media-youtube-page-optimization`, `tiktok-profile-management` |
| `/web-app-development` | 29 | Software (3), Website (8), Mobile (5), UI/UX & Cloud (2), Platforms (11) | `custom-software-development`, `enterprise-software-development`, `asp-net`, `custom-web-development`, `enterprise-web-development`, `wordpress-website-development`, `shopify-website-development`, `laravel-website-development`, `webflow`, `wix-website`, `squarespace-website-development`, `android-app-development`, `ios-app-development`, `flutter-development`, `react-native-development`, `cross-platform-app-development`, `ui-ux-development`, `cloud-application-development`, `crm`, `software-erp`, `pos`, `software-emr`, `salesforce-management`, `hubspot-management`, `zoho-app-development`, `net-suite`, `monday`, `pipe-drive`, `information-and-technology-solutions` |
| `/printing` | 69 | Print & Collateral (29), Signs & Banners (11), Trade Show (2), Packaging (27) | All 69 `design-print-*` pages |
| `/industries` | 28 | Healthcare & Regulated (6), Commerce & Property (8), Technical & Industrial (9), Education & Organisations (5) | 17 `industries-*` pages plus `real-estate`, `legal-service`, `food-industry`, `telecommunications`, `media-and-communication`, `construction-renovation-industry`, `plumbing-sewerage-industry`, `lawn-landscaping-services`, `tradeshow-conference-conventions`, `information-and-technology-solutions`, `startup-journey` |
| `/photo-video` | 16 | Photography (9), Videography (7) | 9 `photography-*`, 6 `videography-photography-*`, `corporate-videography-services` |
| `/bpo` | 50 | Teams (14), Job Roles (29), How It Works (4), Pricing (3) | All 50 `bpo-*` pages |
| `/ecommerce` | 23 | Development (4), Platforms (8), Marketplaces (7), Growth (4) | 21 `ecommerce-*` pages plus `laravel-ecommerce-development`, `facebook-market-place` |

### Case studies (3) and articles (12)

- `/case-studies/halal-caters` — from `/halal-caters/`, the only reference case page with real content.
- `/case-studies/the-strategy`, `/case-studies/solving-problem` — named on the reference site, placeholder content only, published here as explicitly pending.
- `/blog/*` — 12 unique topics from the 20 duplicated reference posts, written out in full for this site.

### Repeated content handled once

| Repeated element | Handled by |
|---|---|
| "Schedule Consultation" / "Request a Quote" CTA on every service page | `CtaBand` component plus a per-page contact panel in the detail template |
| Contact phone, email and address repeated on dozens of pages | `contactConfig` in `src/data/site.js` |
| "Why us" / "Our process" blocks repeated across pages | Detail template highlight grid plus a single `/process` page |
| Mega menu repeated per page | Generated from `src/data/catalog/*` so menu, hubs, sitemap and footer can never drift apart |
| Lorem Ipsum FAQ blocks | Dropped. FAQs appear only where the reference site had a real question and answer |

---

## 3. Source pages deliberately not reproduced

| Source | Reason |
|---|---|
| `/extra-page/` | A fragment of video-service "why us" copy with no page identity. Its content is covered by `/photo-video/video-production`. |
| `/blogs/` tabs "Press Release", "eBook", "Videos", "Articles" | Rendered as empty tabs on the reference site with no content behind them. |
| "Digaptics University" (footer link) | Links to `/digaptics-university`, which returns 404 on the reference site. |
| "Featured eBook / Download Now" mega-menu promos | No downloadable asset is attached on the reference site. |
| Testimonials | All attributed to one placeholder name with placeholder bodies. |
| `$199/month` plan blocks | No plan detail published, and the listed benefits do not match the pages they appear on. |

---

## 4. Items that need your confirmation

### Business-level

1. **Founding year, team size and client counts** — the reference About page has an unfilled `[Year]` placeholder and the homepage counters are zeroed, so none are stated on the new site.
2. **Awards** — the four recognitions are reproduced as Digaptics' own published claims and labelled as unverified. Confirm the awarding bodies and years if you want them presented as fact.
3. **Second phone number** `+1 (800) 462-0584` — published in the reference header; confirm whether it is still in service.
4. **Social profiles** — X/Twitter, Pinterest and YouTube icons appear in the reference footer without usable URLs. Supply the URLs if those profiles exist.
5. **Partner relationships** — the 11 partner names are published without links or any description of the relationship.
6. **Testimonials** — none published; supply real, attributable quotes if you want a testimonial section.
7. **Case studies** — "The Strategy" and "Solving Problem" need real content, or should be removed.
8. **Contact form endpoint** — `contactConfig.formEndpoint` is `null`, so the form validates and then prepares an email instead of silently failing. Supply an API, CRM or form-service endpoint to enable real submissions.
9. **Pricing** — no prices are published anywhere on the new site (see the `$199/month` note above, and BPO pricing below).

### Page-level flags (22, all rendered on the page itself under "Needs confirmation")

| Page | Flag |
|---|---|
| `/marketing/website-speed-optimization` | Source cites "53% of users leave after 3 seconds" with no named study. |
| `/web-app-development/android-app-development` | Source Android page reuses iOS headings and tools (Xcode, Swift, TestFlight). |
| `/web-app-development/ui-ux-design` | Source copy names a different company ("Intellectsoft"). |
| `/web-app-development/emr-systems` | Source page body is enterprise marketing copy, not EMR detail; scope unverified. |
| `/printing/post-cards` | EDDM postal rates, eligibility and permits not published. |
| `/printing/cosmetic-labels` | Cosmetic labelling compliance requirements not covered. |
| `/printing/food-packaging-labels` | Food labelling rules vary by market and are not covered. |
| `/printing/checkout-page-roll-label`, `/printing/checkout-return-address-label` | Source pages are placeholder-only; intended product unclear. |
| `/industries/food-industry-operations` | Duplicates `/industries/food-industry`; consider merging. |
| `/industries/tradeshow-services` | Duplicates `/industries/tradeshow-conferences`; consider merging. |
| `/industries/telecommunications` | "99.999% network availability" published with no SLA basis. |
| `/photo-video/medical-photography` | Patient consent and privacy requirements unstated. |
| `/photo-video/drone-photography` | Drone licensing and airspace permissions unstated. |
| `/bpo/back-office` | "Up to 70% cost saving" is a source claim, not reproduced as a promise. |
| `/bpo/payroll-processor` | Which statutory payroll filings are included is unstated. |
| `/bpo/project-manager` | "PMI certified" advertised; certification per engagement unconfirmed. |
| `/bpo/keys-to-success` | "$232.32 billion global BPO market" quoted without source or year. |
| `/bpo/seat-leasing` | Seat pricing, minimum term and hardware spec not published. |
| `/bpo/hourly-rates` | Source page shows ZipRecruiter US wage data, not Digaptics rates. |
| `/ecommerce/walmart-marketplace-management` | Source page reuses paid-social hero copy. |
| `/ecommerce/ecommerce-social-advertising` | Source CTA shows a placeholder phone number (123-456-7890). |
| `/partnerships` | Partner names published without relationship detail. |

---

## 5. Where things live in the codebase

```
src/data/catalog/categories.js   7 categories, their groups, images and alt text
src/data/catalog/{marketing,webapp,printing,industries,photovideo,bpo,ecommerce}.js
                                 238 entries, each with a `source` field pointing at the reference URL
src/data/catalog/index.js        normalisation, lookups, nav tree, review flags
src/data/site.js                 contact details, navigation, partners
src/data/blog.js                 12 articles
src/data/caseStudies.js          3 case studies + awards
src/pages/CategoryPage.jsx       hub template (7 routes)
src/pages/CatalogDetailPage.jsx  detail template (238 routes)
scripts/check-links.mjs          inventory + internal link check (`node scripts/check-links.mjs`)
scripts/generate-sitemap.mjs     regenerates public/sitemap.xml (`npm run sitemap`)
```
