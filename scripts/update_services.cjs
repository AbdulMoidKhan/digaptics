const fs = require('fs');

const servicesCode = `/**
 * Service content. Each entry powers both the /services overview and the
 * /services/:slug detail template, so adding a service only needs a new object
 * here plus (optionally) a new entry in \`serviceGroups\`.
 *
 * Sourced directly from digaptics.io service catalog.
 */
export const services = [
  {
    slug: 'software-development',
    title: 'Software Development',
    navLabel: 'Software Development',
    icon: 'code',
    group: 'software',
    image: '/images/services/software-development.jpg',
    imageAlt: 'Software engineering team collaborating on custom code and cloud architecture',
    tagline: 'Custom software built around how your business actually works.',
    summary:
      'We design and build custom software for teams that have outgrown spreadsheets, disconnected tools, or software that no longer fits. Work starts with the process, not the technology.',
    cardSummary:
      'Business software, internal tools, and web platforms designed around real operational requirements.',
    audience: [
      'Operations teams relying on spreadsheets and manual handoffs',
      'Companies running a business-critical tool that needs rebuilding',
      'Founders validating a product idea that needs to work in production',
      'Teams that need systems to exchange data reliably',
    ],
    subOfferings: [
      { title: 'Custom Web & Enterprise Applications', desc: 'Scalable cloud software tailored to core business processes.' },
      { title: 'Internal Portals & Admin Tools', desc: 'Secure operational dashboards, permissioned workflows, and team tools.' },
      { title: 'Database & Systems Architecture', desc: 'High-availability data pipelines, schema modeling, and cloud hosting.' },
      { title: 'API & Microservice Engineering', desc: 'Modern RESTful and GraphQL integrations linking distributed services.' },
    ],
    sections: [
      {
        heading: 'Discovery and requirements',
        body: 'We map the current process, the people involved, and the decisions being made before writing code. That produces a scope you can review, a shared list of requirements, and a plan for what gets built first.',
        points: [
          'Process and stakeholder mapping',
          'Requirement capture with clear acceptance criteria',
          'Prioritised scope split into releasable phases',
        ],
      },
      {
        heading: 'Business software and internal tools',
        body: 'Admin portals, dashboards, approval flows, inventory and billing tools, reporting views. The goal is software your team can use without training sessions and workarounds.',
        points: [
          'Role-based access and permissions',
          'Audit trails and record history where they matter',
          'Reporting and export views for day-to-day decisions',
        ],
      },
      {
        heading: 'Web-based platforms',
        body: 'Multi-user platforms with accounts, billing, content, and workflow. We build the architecture to carry additional features later instead of boxing you in after launch.',
        points: [
          'Authentication, accounts, and team structures',
          'Payment and subscription flows where required',
          'Architecture documented for the next development phase',
        ],
      },
      {
        heading: 'APIs and system integrations',
        body: 'Most software problems are really data problems. We build APIs and integrations so the systems you already pay for exchange information without someone copying fields by hand.',
        points: [
          'REST and webhook integrations between platforms',
          'Data mapping, validation, and error handling',
          'Retry and failure visibility so silent breakage is caught',
        ],
      },
      {
        heading: 'Modernising existing software',
        body: 'When a system still carries the business but is expensive to change, we review the codebase, document the risks, and plan an upgrade path that keeps it running while it improves.',
        points: [
          'Codebase and dependency review',
          'Incremental refactoring instead of a risky rewrite',
          'Handover documentation for your team',
        ],
      },
      {
        heading: 'Testing, launch, and ongoing improvement',
        body: 'Release work includes review builds, environment setup, and a plan for what happens after launch, because the first weeks of real usage always surface real requirements.',
        points: [
          'Staging environment and review cycles',
          'Launch checklist and rollback plan',
          'Post-launch iteration based on actual usage',
        ],
      },
    ],
    stages: [
      { name: 'Discovery', deliverable: 'Process map, requirements, prioritised scope' },
      { name: 'Architecture', deliverable: 'Data model, system design, delivery plan' },
      { name: 'Design', deliverable: 'Interface flows and reviewable screens' },
      { name: 'Build', deliverable: 'Working increments on a staging environment' },
      { name: 'Release', deliverable: 'Production launch, documentation, handover' },
      { name: 'Improve', deliverable: 'Iteration backlog and support cadence' },
    ],
    toolkit: {
      label: 'Typical building blocks',
      note: 'Technology choices are made per project during discovery. This list is maintained in src/data/services.js.',
      items: [
        'JavaScript and TypeScript',
        'React front ends',
        'Node.js services',
        'PHP / Laravel',
        'Relational and document databases',
        'REST and webhook APIs',
        'Automated test suites',
        'CI/CD deployment pipelines',
      ],
    },
    faqs: [
      {
        q: 'Do you work in fixed-price phases or on a retainer?',
        a: 'Phased projects are scoped against deliverables with fixed milestone pricing. Retainers are used for ongoing product development where priorities change every sprint.',
      },
      {
        q: 'Who owns the code and intellectual property?',
        a: 'You do. The repository, documentation, deployment credentials, and third-party accounts are transferred to your organisation as milestones complete.',
      },
      {
        q: 'Can you work alongside an internal developer?',
        a: 'Yes. We often partner with an internal technical lead, building alongside them or delivering a subsystem they can maintain afterward.',
      },
      {
        q: 'What happens after the software launches?',
        a: 'Every project includes a post-launch warranty period, documentation, and handover training. We also offer monthly support and feature iteration agreements.',
      },
    ],
  },
  {
    slug: 'website-development',
    title: 'Website Development',
    navLabel: 'Website Development',
    icon: 'browser',
    group: 'software',
    image: '/images/services/website-development.jpg',
    imageAlt: 'Modern responsive website designs displayed across desktop and laptop screens',
    tagline: 'Marketing and corporate websites engineered for clarity, speed, and conversion.',
    summary:
      'We design and develop fast, accessible websites that clearly present what you do, answer buyer questions, and give your team easy editing controls.',
    cardSummary:
      'Custom WordPress, Webflow, and bespoke front ends built for performance, accessibility, and straightforward content updates.',
    audience: [
      'Companies whose current website no longer matches their positioning',
      'Marketing teams blocked by brittle page builders or complex code',
      'Organisations needing clean accessibility and strong search fundamentals',
      'Firms launching a new service, brand identity, or market proposition',
    ],
    subOfferings: [
      { title: 'Custom WordPress Architecture', desc: 'Secure, modern WordPress sites built with clean block patterns and zero bloat.' },
      { title: 'Webflow Development & Migration', desc: 'Visually rich, responsive Webflow builds with tailored CMS collections.' },
      { title: 'Modern JAMstack & React Front Ends', desc: 'Ultra-fast Next.js and static web solutions for high-traffic brands.' },
      { title: 'Speed & Core Web Vitals Optimization', desc: 'Auditing, caching, asset optimization, and script tuning for sub-second loads.' },
    ],
    sections: [
      {
        heading: 'Structure, content, and wireframing',
        body: 'We organise your site navigation, key pages, and calls to action around buyer evaluation paths so visitors find what they need without friction.',
        points: [
          'Sitemap and page hierarchy definition',
          'Content wireframing focused on conversion copy',
          'Responsive layout blueprints for mobile and desktop',
        ],
      },
      {
        heading: 'Custom UI design and component systems',
        body: 'Your site is styled to express your unique brand identity, with reusable design components that maintain visual consistency as new pages are created.',
        points: [
          'Typography, color hierarchy, and brand tokens',
          'Component libraries for headers, cards, bands, and grids',
          'Interactive states and micro-interactions',
        ],
      },
      {
        heading: 'Clean, performant engineering',
        body: 'We write lean, standards-compliant HTML, CSS, and modern JavaScript with lightweight asset loading, responsive imagery, and clean semantics.',
        points: [
          'Semantic markup with WCAG 2.1 AA accessibility',
          'Sub-second first contentful paint and high Core Web Vitals',
          'Search engine friendly structured data and meta tags',
        ],
      },
      {
        heading: 'Simple CMS content governance',
        body: 'Editing your site should not require calling a developer. We configure clean CMS fields and block layouts tailored to your exact publishing workflow.',
        points: [
          'Structured CMS collections for team members, case studies, and insights',
          'Safeguarded styles so editors cannot accidentally break layouts',
          'Comprehensive video walkthroughs and editor guidelines',
        ],
      },
    ],
    stages: [
      { name: 'Architecture', deliverable: 'Sitemap, wireframes, content outlines' },
      { name: 'Design', deliverable: 'Figma mockups and responsive prototypes' },
      { name: 'Development', deliverable: 'Staging site build with CMS integration' },
      { name: 'QA & Review', deliverable: 'Cross-browser, accessibility, and speed testing' },
      { name: 'Deployment', deliverable: 'DNS migration, SSL configuration, live launch' },
    ],
    toolkit: {
      label: 'Supported platforms & technologies',
      note: 'We recommend the CMS or platform that best serves your team’s operating reality.',
      items: [
        'WordPress (custom block themes)',
        'Webflow',
        'React & modern front-end frameworks',
        'Tailored headless CMS architectures',
        'WCAG accessibility auditing tools',
        'Automated performance monitoring',
      ],
    },
    faqs: [
      {
        q: 'Can you migrate our existing content?',
        a: 'Yes. We audit your existing pages, map content to the new architecture, and migrate blog posts, case studies, and assets cleanly.',
      },
      {
        q: 'Will our team be able to edit pages easily?',
        a: 'Absolutely. We configure straightforward editorial fields and component blocks so your team can publish updates without touching code.',
      },
      {
        q: 'Do you manage hosting and domain DNS cutover?',
        a: 'We manage or coordinate the complete launch process, including DNS cutover, SSL verification, redirection rules, and post-launch verification.',
      },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    navLabel: 'Mobile App Development',
    icon: 'mobile',
    group: 'software',
    image: '/images/services/mobile-app-development.jpg',
    imageAlt: 'Mobile product user experience displayed across modern iOS and Android smartphones',
    tagline: 'Native and cross-platform mobile apps built for performance and intuitive use.',
    summary:
      'We build iOS and Android mobile applications that deliver smooth interactions, reliable offline capabilities, and seamless synchronization with your back-end APIs.',
    cardSummary:
      'iOS and Android mobile apps engineered with React Native, Flutter, and native toolkits from product definition to App Store approval.',
    audience: [
      'Businesses delivering customer-facing mobile self-service or account portals',
      'Field operations and logistics teams needing rugged mobile tools',
      'Startups launching an MVP app requiring rapid multi-platform validation',
      'Product companies adding companion mobile apps to existing platforms',
    ],
    subOfferings: [
      { title: 'Cross-Platform React Native & Flutter', desc: 'Single-codebase efficiency with native UI rendering on iOS and Android.' },
      { title: 'Native iOS (Swift) & Android (Kotlin)', desc: 'Uncompromised performance for hardware-intensive, camera, or spatial applications.' },
      { title: 'App Store & Google Play Launch Management', desc: 'Review guideline compliance, security review, and store listing optimization.' },
      { title: 'Push Notifications & Real-Time Sync', desc: 'Reliable background synchronization, offline data caches, and push alerts.' },
    ],
    sections: [
      {
        heading: 'Product scoping and technical architecture',
        body: 'We define the mobile core user journey, hardware permissions, offline sync strategies, and data models before building.',
        points: [
          'Feature prioritization for minimum viable launch',
          'Authentication and secure keychain token storage',
          'Offline caching and resilient data synchronization',
        ],
      },
      {
        heading: 'Intuitive mobile UI/UX design',
        body: 'Touch interactions, platform-native conventions, and accessible gestures designed for effortless one-handed smartphone use.',
        points: [
          'Human Interface Guidelines & Material Design adherence',
          'Dark mode, high contrast, and dynamic typography support',
          'Haptic feedback and fluid interactive transitions',
        ],
      },
      {
        heading: 'API integration and device capabilities',
        body: 'Connecting mobile screens to cloud back ends, camera hardware, geolocation services, biometrics, and push notifications.',
        points: [
          'Biometric Face ID / Touch ID authentication',
          'Camera, geolocation, and hardware sensor integration',
          'Silent background updates and push messaging',
        ],
      },
      {
        heading: 'App Store review and release management',
        body: 'Navigating Apple App Store and Google Play requirements, managing privacy declarations, and executing phased rollouts.',
        points: [
          'Apple & Google store compliance audits',
          'TestFlight and Google Play Internal testing tracks',
          'Release crash reporting and real-time observability',
        ],
      },
    ],
    stages: [
      { name: 'Blueprint', deliverable: 'User journeys, API contract, platform choice' },
      { name: 'Interface', deliverable: 'Clickable Figma prototypes and design kit' },
      { name: 'Sprint Builds', deliverable: 'Bi-weekly TestFlight / APK builds' },
      { name: 'Verification', deliverable: 'Device testing, offline audits, security checks' },
      { name: 'Submission', deliverable: 'Store approval and production rollout' },
    ],
    toolkit: {
      label: 'Core mobile technologies',
      note: 'Cross-platform or native architectures selected based on functionality requirements.',
      items: [
        'React Native',
        'Flutter',
        'iOS (Swift & SwiftUI)',
        'Android (Kotlin)',
        'Firebase / Supabase backend services',
        'Apple TestFlight & Google Play Console',
      ],
    },
    faqs: [
      {
        q: 'Should we build cross-platform or native?',
        a: 'For most business and workflow apps, React Native or Flutter offers identical feel with 40-50% lower maintenance overhead. Native is reserved for specialized hardware or heavy 3D rendering.',
      },
      {
        q: 'Do you guarantee App Store approval?',
        a: 'We design strictly against Apple and Google review guidelines, handle all submission metadata and review responses, and resolve any feedback until your app is live.',
      },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing & SEO',
    navLabel: 'Digital Marketing',
    icon: 'target',
    group: 'marketing',
    image: '/images/services/digital-marketing.jpg',
    imageAlt: 'Digital marketing analytics dashboards displaying SEO rankings, PPC return on ad spend, and conversion metrics',
    tagline: 'Measurable SEO, paid advertising, and reputation management that drive qualified pipeline.',
    summary:
      'We combine organic search engine optimization, high-intent Google PPC, social media advertising, and local reputation management to build dependable customer acquisition channels.',
    cardSummary:
      'Search engine optimization (SEO), PPC campaign management, addressable geofencing, and multi-channel social advertising.',
    audience: [
      'Companies needing consistent lead generation and higher search visibility',
      'Brands experiencing high ad spend with declining conversion rates',
      'Local and multi-location businesses needing dominant map rankings',
      'Organizations wanting transparent, metric-grounded campaign management',
    ],
    subOfferings: [
      { title: 'Search Engine Optimization (SEO)', desc: 'Affordable, enterprise, and technical SEO audits that drive organic search discovery.' },
      { title: 'Pay-Per-Click Advertising (PPC)', desc: 'Targeted Google Ads and PPC management engineered for measurable conversion and ROI.' },
      { title: 'Social Media Management & Ads', desc: 'Campaign strategies across Facebook, Instagram, LinkedIn, YouTube, and TikTok.' },
      { title: 'Online Reputation & Review Management', desc: 'Review amplification and business listing management across verified local channels.' },
      { title: 'Addressable Geofencing', desc: 'Location-targeted digital advertising reaching high-intent prospects at exact locations.' },
    ],
    sections: [
      {
        heading: 'Technical and on-page SEO audits',
        body: 'We identify and resolve crawl bottlenecks, indexing problems, page performance lags, and content gaps that suppress search rankings.',
        points: [
          'Full site crawl analysis and structural remediation',
          'Keyword intent mapping and on-page content optimization',
          'Structured data (Schema.org) markup implementation',
        ],
      },
      {
        heading: 'High-intent PPC campaign management',
        body: 'Building and tuning search ad campaigns focused strictly on buyers ready to act, backed by negative keyword lists and bid automation.',
        points: [
          'Competitor search volume and bid landscape analysis',
          'Dedicated landing page design and conversion tracking',
          'Negative keyword hygiene and budget pacing',
        ],
      },
      {
        heading: 'Addressable geofencing and localized ads',
        body: 'Reaching decision-makers at industry conferences, commercial campuses, competitor locations, or precise residential addresses.',
        points: [
          'Precision polygon boundary targeting',
          'Cross-device attribution and foot traffic conversion reporting',
          'Retargeting sequences across display and social networks',
        ],
      },
      {
        heading: 'Reputation management and review amplification',
        body: 'Systematizing verified client feedback to build social proof, protect brand perception, and boost local map pack discovery.',
        points: [
          'Google Business Profile and directory sync',
          'Automated review generation workflows',
          'Review monitoring, escalation, and response strategies',
        ],
      },
    ],
    stages: [
      { name: 'Audit', deliverable: 'Competitive benchmark, keyword inventory, account audit' },
      { name: 'Setup', deliverable: 'Conversion tracking, campaign structure, landing pages' },
      { name: 'Execution', deliverable: 'Campaign launch, content optimization, bid tuning' },
      { name: 'Reporting', deliverable: 'Bi-weekly dashboard review and pipeline attribution' },
    ],
    toolkit: {
      label: 'Campaign & analytics toolset',
      note: 'All client accounts and conversion data remain in client-owned properties.',
      items: [
        'Google Ads & Google Merchant Center',
        'Meta Business Suite & LinkedIn Campaign Manager',
        'Google Analytics 4 & Looker Studio',
        'Google Search Console & Ahrefs / SEMrush',
        'Addressable Geofencing DSPs',
      ],
    },
    faqs: [
      {
        q: 'How quickly does SEO produce results?',
        a: 'Technical fixes and local profile updates frequently show gains within 30 to 60 days, while competitive organic keyword movement typically compounds across 3 to 6 months.',
      },
      {
        q: 'Do you manage client ad accounts directly?',
        a: 'Yes, but always inside accounts that you own. You retain complete visibility into every dollar spent and every keyword bid.',
      },
    ],
  },
  {
    slug: 'ecommerce-solutions',
    title: 'E-Commerce Solutions',
    navLabel: 'E-Commerce',
    icon: 'shoppingCart',
    group: 'ecommerce',
    image: '/images/services/ecommerce-solutions.jpg',
    imageAlt: 'Modern e-commerce online store checkout and inventory management interface',
    tagline: 'High-converting online storefronts, marketplaces, and omnichannel operations.',
    summary:
      'We build and scale online stores across Shopify, WooCommerce, Magento, and BigCommerce, paired with marketplace management across Amazon, Walmart, and Target Plus.',
    cardSummary:
      'Shopify, WooCommerce, and BigCommerce store development, B2B wholesale portals, and Amazon marketplace management.',
    audience: [
      'Direct-to-consumer brands scaling checkout volume and average order value',
      'B2B manufacturers launching digital wholesale catalogs and ordering portals',
      'Retailers expanding onto Amazon, Walmart, Etsy, and third-party marketplaces',
      'Merchants migrating from legacy e-commerce platforms to modern Shopify setups',
    ],
    subOfferings: [
      { title: 'Shopify & Shopify Plus Development', desc: 'Custom theme architecture, app integrations, and conversion-optimized checkout experiences.' },
      { title: 'Amazon & Marketplace Management', desc: 'Comprehensive store setup, Amazon advertising, Etsy, Walmart, and Target Plus management.' },
      { title: 'WooCommerce, Magento & BigCommerce', desc: 'Flexible, enterprise-grade storefronts engineered for high-volume catalog processing.' },
      { title: 'B2B Ecommerce Enablement', desc: 'Wholesale portals, tier-based pricing models, and ERP backend synchronization.' },
      { title: 'Ecommerce SEO & Performance Marketing', desc: 'Product feed optimization, shopping ads, and transactional search marketing.' },
    ],
    sections: [
      {
        heading: 'Custom storefront development',
        body: 'Building fast, mobile-first shopping experiences that reduce friction, simplify discovery, and maximize checkout completion.',
        points: [
          'Custom theme development without code bloat',
          'Quick-buy, product bundling, and subscription workflows',
          'Cart drawer optimization and frictionless checkout flows',
        ],
      },
      {
        heading: 'Amazon and multi-channel marketplace scaling',
        body: 'Setting up brand stores, optimizing A+ content, managing catalog variations, and operating targeted Amazon PPC advertising.',
        points: [
          'Brand registry setup and storefront curation',
          'A+ content creation and conversion copywriting',
          'Sponsored Products and Sponsored Brands PPC campaigns',
        ],
      },
      {
        heading: 'B2B wholesale portals',
        body: 'Enabling business buyers to order in bulk with tiered customer pricing, credit terms, tax exemption verification, and purchase orders.',
        points: [
          'Gated wholesale access and registration approval flows',
          'Quantity pricing tiers and minimum order quantities',
          'Quick bulk reorder lists and CSV import ordering',
        ],
      },
      {
        heading: 'Inventory, ERP, and logistics integrations',
        body: 'Syncing product catalogs, warehouse stock levels, shipping carriers, and accounting systems automatically.',
        points: [
          'Real-time multi-warehouse inventory synchronization',
          'Shipping rate calculation and label generation APIs',
          'Accounting and ERP order reconciliation',
        ],
      },
    ],
    stages: [
      { name: 'Catalog Audit', deliverable: 'SKU architecture, platform selection, integration spec' },
      { name: 'UX Design', deliverable: 'Custom product page, collection, and checkout flows' },
      { name: 'Development', deliverable: 'Store build, app integrations, payment testing' },
      { name: 'Data Migration', deliverable: 'Customer, order, and SKU database migration' },
      { name: 'Go-Live', deliverable: 'DNS cutover, live transaction validation, handoff' },
    ],
    toolkit: {
      label: 'E-commerce stack',
      note: 'Chosen to fit inventory size, fulfillment workflows, and transaction volume.',
      items: [
        'Shopify & Shopify Plus',
        'WooCommerce / WordPress',
        'BigCommerce & Magento',
        'Amazon Seller Central & Advertising',
        'Klaviyo / Omnisend email flows',
        'Stripe & payment gateway integrations',
      ],
    },
    faqs: [
      {
        q: 'Can you migrate our products and customer history from our old store?',
        a: 'Yes. We migrate SKU variations, product descriptions, media, customer records, and order histories with proper 301 URL redirects.',
      },
      {
        q: 'Do you help with Amazon account suspensions or policy appeals?',
        a: 'We focus on proactive catalog compliance, optimization, and ad management. While we help rectify policy warnings, we do not operate as an account reinstatement legal service.',
      },
    ],
  },
  {
    slug: 'printing-collateral',
    title: 'Printing & Collateral',
    navLabel: 'Printing & Collateral',
    icon: 'printer',
    group: 'creative',
    image: '/images/services/printing-collateral.jpg',
    imageAlt: 'High-quality printed business stationery, brochures, corporate packaging, and collateral',
    tagline: 'High-impact print production, custom packaging, and large-format trade show collateral.',
    summary:
      'We take your brand into the physical world with precision color management, premium paper stocks, trade show signage, and custom retail packaging.',
    cardSummary:
      'Business cards, presentation folders, brochures, large-format event banners, and custom product packaging.',
    audience: [
      'Companies attending trade shows, conventions, and industry exhibitions',
      'Sales teams requiring polished physical presentation decks and leave-behinds',
      'Product brands developing custom retail packaging, labels, and boxes',
      'Corporate offices wanting consistent stationery, business cards, and signage',
    ],
    subOfferings: [
      { title: 'Business Cards & Stationery', desc: 'Premium business cards, letterheads, presentation pocket folders, and envelopes.' },
      { title: 'Marketing Collateral & Brochures', desc: 'Bi-fold and tri-fold brochures, flyers, digital mailers, bookmarks, and newsletters.' },
      { title: 'Large Format Signs & Banners', desc: 'Outdoor banners, flags, posters, trade show convention displays, and vinyl signage.' },
      { title: 'Labels, Stickers & Custom Packaging', desc: 'Product packaging, rigid boxes, custom die-cut stickers, and branded retail labels.' },
      { title: 'Promotional Items & Apparel', desc: 'Corporate apparel, branded promo merchandise, and custom promotional giveaways.' },
    ],
    sections: [
      {
        heading: 'Corporate stationery and sales collateral',
        body: 'High-touch tactile pieces that create a memorable first impression with prospective clients and partners.',
        points: [
          'Ultra-thick business cards with spot UV, foil, or emboss options',
          'Die-cut pocket presentation folders with business card slits',
          'Matching corporate letterheads, envelopes, and notepads',
        ],
      },
      {
        heading: 'Brochures, flyers, and direct mailers',
        body: 'Informative print materials formatted for readability, clear visual hierarchy, and compelling physical calls to action.',
        points: [
          'Tri-fold, z-fold, and gate-fold marketing brochures',
          'Every Door Direct Mail (EDDM) compliant postcards',
          'Product spec sheets, case study inserts, and newsletters',
        ],
      },
      {
        heading: 'Trade show exhibits and large-format displays',
        body: 'Eye-catching booth graphics, step-and-repeat backdrops, and durable retractable banners built to withstand repeated transport.',
        points: [
          'Retractable pull-up banners with travel cases',
          'Custom fabric pop-up displays and table throws',
          'Heavy-duty outdoor vinyl banners and teardrop flags',
        ],
      },
      {
        heading: 'Custom packaging and retail labels',
        body: 'Structural box design, rigid gift boxes, custom folding cartons, and waterproof die-cut product labels.',
        points: [
          'Dieline creation and structural box engineering',
          'Matte, gloss, and soft-touch laminations',
          'Roll labels with machine applicator compatibility',
        ],
      },
    ],
    stages: [
      { name: 'Specification', deliverable: 'Stock selection, dielines, finish specifications' },
      { name: 'Artwork Prep', deliverable: 'CMYK press-ready files with bleed and trim marks' },
      { name: 'Proofing', deliverable: 'Digital and physical hard proofs for sign-off' },
      { name: 'Production', deliverable: 'Commercial offset or digital print run' },
      { name: 'Delivery', deliverable: 'Direct delivery to your office or event venue' },
    ],
    toolkit: {
      label: 'Production capabilities',
      note: 'Sourced through verified commercial print facilities with calibrated color standards.',
      items: [
        'Commercial offset and digital press runs',
        'Large-format UV flatbed and roll printing',
        'Specialty finishes (Foil stamping, Spot UV, Emboss)',
        'FSC-certified and recycled paper stock options',
        'Custom dieline structural design in Adobe Illustrator',
      ],
    },
    faqs: [
      {
        q: 'Do you provide print proofs before the full production run?',
        a: 'Yes. We provide digital PDF proofs for copy verification and can supply physical contract proofs for critical color matching on high-volume runs.',
      },
      {
        q: 'Can you ship trade show displays directly to our conference venue?',
        a: 'Yes. We coordinate logistics and delivery windows directly to convention centers or corporate hotels with full tracking.',
      },
    ],
  },
  {
    slug: 'photography-videography',
    title: 'Photography & Videography',
    navLabel: 'Photo & Video',
    icon: 'camera',
    group: 'creative',
    image: '/images/services/photography-videography.jpg',
    imageAlt: 'Professional commercial camera production crew filming on location',
    tagline: 'High-caliber commercial video, corporate photography, and drone production.',
    summary:
      'We produce broadcast-quality commercial videos, executive portraits, product photography, licensed drone aerials, and motion graphics that elevate your brand story.',
    cardSummary:
      'Corporate headshots, commercial video production, product photography, licensed drone shoots, and live streaming.',
    audience: [
      'Companies upgrading their visual assets across websites and campaigns',
      'Leadership teams wanting polished executive headshots and team photos',
      'Brands needing high-resolution e-commerce product imagery',
      'Organizations hosting conventions or requiring multi-camera live streaming',
    ],
    subOfferings: [
      { title: 'Corporate & Executive Headshots', desc: 'Studio and on-location corporate photography capturing leadership teams and company culture.' },
      { title: 'Commercial Video Production', desc: 'Brand commercials, promotional films, client case studies, and testimonial videos.' },
      { title: 'Product & Food Photography', desc: 'High-resolution studio product staging, e-commerce catalog imagery, and food styling.' },
      { title: 'Drone & Aerial Footage', desc: 'Licensed FAA aerial videography and 4K mapping for real estate, construction, and events.' },
      { title: 'Live Streaming & Event Coverage', desc: 'Multi-camera conference broadcasting, trade show coverage, and graduation productions.' },
      { title: '2D/3D Motion Graphics & Animation', desc: 'Explainer videos, 3D product visualizations, and animated social content.' },
    ],
    sections: [
      {
        heading: 'Commercial video production',
        body: 'Full-service production from scriptwriting and storyboards to on-set directing, professional lighting, sound, and color grading.',
        points: [
          'Brand anthem films and company overview videos',
          'Customer case studies and authentic video testimonials',
          'Product demo videos and social campaign shorts',
        ],
      },
      {
        heading: 'Executive and team corporate photography',
        body: 'Consistent, modern portraits captured on-location at your office or in-studio, reflecting the authentic character of your leadership.',
        points: [
          'Mobile studio setup brought directly to your workplace',
          'Coached posing and real-time preview monitors',
          'Professional skin retouching and background treatment',
        ],
      },
      {
        heading: 'Drone aerial footage and mapping',
        body: 'FAA Part 107 certified aerial videography capturing commercial real estate, corporate facilities, civil projects, and outdoor events.',
        points: [
          'Cinematic 4K and 5.4K aerial cinematography',
          'FAA airspace authorization and compliant operations',
          'High-resolution orthomosaic facility imagery',
        ],
      },
      {
        heading: 'Studio product and food photography',
        body: 'Color-calibrated studio photography on seamless backgrounds or stylized contextual environments for retail, print, and web catalogs.',
        points: [
          'Glare-free product lighting for reflective surfaces',
          'Focus stacking for edge-to-edge sharpness',
          'Batch clipping paths and transparent PNG deliveries',
        ],
      },
    ],
    stages: [
      { name: 'Pre-Production', deliverable: 'Concept, storyboard, shot list, location scouting' },
      { name: 'Production', deliverable: 'On-set filming, photography, audio capture' },
      { name: 'Post-Production', deliverable: 'Editing, color grading, sound design, titles' },
      { name: 'Revisions', deliverable: 'Client review rounds via frame-accurate review links' },
      { name: 'Mastering', deliverable: 'Final 4K masters, web compressions, social cuts' },
    ],
    toolkit: {
      label: 'Production gear & software',
      note: 'Cinema-grade hardware and industry-standard post-production workflows.',
      items: [
        'Cinema cameras (RED, Sony FX, Canon Cinema)',
        'Wireless lavalier and boom audio capture',
        'FAA Part 107 certified commercial drones',
        'DaVinci Resolve studio color grading',
        'Adobe Premiere Pro & After Effects',
      ],
    },
    faqs: [
      {
        q: 'Do you travel for shoots outside of Chicago?',
        a: 'Yes. Our production teams travel nationwide for multi-location commercial shoots, corporate conferences, and client case study interviews.',
      },
      {
        q: 'Who owns the raw footage and photos?',
        a: 'Full commercial usage rights to the delivered final videos and edited photographs are included. Raw footage archives can be transferred upon request.',
      },
    ],
  },
  {
    slug: 'bpo-solutions',
    title: 'BPO & Operational Outsourcing',
    navLabel: 'BPO Services',
    icon: 'headset',
    group: 'bpo',
    image: '/images/services/bpo-solutions.jpg',
    imageAlt: 'Dedicated business process outsourcing professionals managing customer service and data workflows',
    tagline: 'Reliable back-office operations, dedicated customer support, and talent staffing.',
    summary:
      'We provide scalable Business Process Outsourcing (BPO) solutions, live chat agents, administrative data entry, finance processing, and offshore staffing teams that reduce overhead.',
    cardSummary:
      'Customer support, back-office operations, data entry, finance & accounting support, and dedicated offshore team staffing.',
    audience: [
      'Companies needing 24/7 customer support and live chat coverage',
      'Finance and operations teams with heavy invoice and data processing workloads',
      'Healthcare practices requiring HIPAA-compliant medical billing and coding',
      'Businesses seeking cost-effective offshore talent with US operational oversight',
    ],
    subOfferings: [
      { title: 'Customer Support & Live Chat', desc: '24/7 omnichannel assistance, live chat agents, and customer care ticket handling.' },
      { title: 'Back-Office Operations & Data Entry', desc: 'Data cleansing, data processing, order fulfillment, and administrative record maintenance.' },
      { title: 'Finance & Accounting Support', desc: 'Accounts receivable, accounts payable, bookkeeping, invoice reconciliation, and payroll processing.' },
      { title: 'Healthcare & Medical BPO', desc: 'HIPAA-compliant medical coding, billing specialists, and health information management.' },
      { title: 'Lead Generation & Sales Support', desc: 'B2B outreach, telemarketing, reservation booking, and CRM pipeline assistance.' },
      { title: 'Dedicated Tech & Creative Staffing', desc: 'Seat leasing and offshore dedicated developers, UI/UX designers, and QA specialists.' },
    ],
    sections: [
      {
        heading: 'Omnichannel customer support & live chat',
        body: 'Trained representatives handling inquiries via email, chat, phone, and ticketing systems with speed and empathy.',
        points: [
          '24/7 coverage across multiple time zones',
          'Standard operating procedures (SOPs) and response playbook creation',
          'CSAT and first-contact resolution SLA monitoring',
        ],
      },
      {
        heading: 'Back-office operations & data processing',
        body: 'Eliminating administrative bottlenecks through accurate data entry, document validation, order processing, and database cleaning.',
        points: [
          'High-accuracy manual and automated data entry',
          'Order verification and exceptions handling',
          'Health information management and secure record keeping',
        ],
      },
      {
        heading: 'Finance, accounts, and billing management',
        body: 'Systematizing accounting workflows, invoice reconciliation, vendor payable tracking, and accounts receivable collections.',
        points: [
          'Invoice matching and payable scheduling',
          'Accounts receivable follow-ups and ledger posting',
          'QuickBooks, Xero, and ERP system reconciliation',
        ],
      },
      {
        heading: 'Dedicated seat leasing & talent placement',
        body: 'Placing full-time offshore developers, digital marketers, designers, and project managers under your operational direction.',
        points: [
          'Rigorous technical vetting and cultural interview screening',
          'Secure workstations with hardware and network protections',
          'Transparent hourly and monthly staffing rates',
        ],
      },
    ],
    stages: [
      { name: 'Requirements', deliverable: 'Role definition, process mapping, SLA agreement' },
      { name: 'Recruitment', deliverable: 'Candidate shortlisting and client interviews' },
      { name: 'Training', deliverable: 'SOP walkthroughs and tooling setup' },
      { name: 'Ramp-up', deliverable: 'Supervised shadow processing and quality audits' },
      { name: 'Steady State', deliverable: 'Autonomous execution and monthly SLA reporting' },
    ],
    toolkit: {
      label: 'Operational systems & platforms',
      note: 'Our teams work natively in your existing enterprise software and security perimeter.',
      items: [
        'Zendesk, Freshdesk & Intercom',
        'Salesforce & HubSpot CRMs',
        'QuickBooks, NetSuite & Xero',
        'HIPAA-compliant data handling protocols',
        'SOC2-aligned remote workstation controls',
      ],
    },
    faqs: [
      {
        q: 'How do you ensure data security and privacy?',
        a: 'We operate under strict confidentiality agreements, role-based access restrictions, and secure virtual desktop or VPN configurations. Healthcare workflows adhere to HIPAA requirements.',
      },
      {
        q: 'How does onboarding and training work?',
        a: 'We document your current processes into clear SOPs, conduct rigorous initial training with mock scenarios, and run a dual-operator pilot phase before full handoff.',
      },
    ],
  },
  {
    slug: 'automation',
    title: 'Automation & Integrations',
    navLabel: 'Automation & Integrations',
    icon: 'workflow',
    group: 'operations',
    image: '/images/services/automation.jpg',
    imageAlt: 'System automation dashboard showing connected API integrations and workflow steps',
    tagline: 'Reliable automated workflows that eliminate manual re-keying between your software tools.',
    summary:
      'We link the applications your business already relies on, eliminating copy-paste errors, accelerating lead routing, and ensuring critical records stay in sync.',
    cardSummary:
      'CRM, ERP, and API integrations, webhook pipelines, and business process automation built with transparent error handling.',
    audience: [
      'Teams spending hours copying information between disconnected tools',
      'Sales and marketing teams losing leads to slow manual handoffs',
      'Finance teams dealing with mismatched records across billing systems',
      'Operations managers needing end-to-end visibility across workflows',
    ],
    subOfferings: [
      { title: 'CRM & ERP Synchronization', desc: 'Real-time data flow between HubSpot, Salesforce, and operational back ends.' },
      { title: 'Automated Invoice & Document Extraction', desc: 'AI-assisted OCR pipelines that extract invoice data and post to accounting.' },
      { title: 'Webhook & Event Pipelines', desc: 'Resilient event-driven automation with built-in retries and alert notifications.' },
      { title: 'Custom Middleware Development', desc: 'Lightweight microservices connecting legacy on-prem systems to modern clouds.' },
    ],
    sections: [
      {
        heading: 'Workflow mapping and bottleneck analysis',
        body: 'We identify repetitive human touchpoints that can be reliably handed to automation, creating a visible diagram of how data flows.',
        points: [
          'End-to-end process diagramming with error states',
          'Field-level data mapping and schema validation',
          'ROI estimate based on reclaimed team hours',
        ],
      },
      {
        heading: 'API and webhook integration',
        body: 'Connecting software tools with robust APIs, ensuring payload formats match and data is validated before changes commit.',
        points: [
          'Direct REST and GraphQL API communication',
          'Custom webhook receivers and payload parsing',
          'Rate-limit handling and token refresh security',
        ],
      },
      {
        heading: 'Resilience and failure visibility',
        body: 'Automations should not fail in silence. We build automated retry logic, dead-letter queues, and Slack/email alerts for edge cases.',
        points: [
          'Exponential backoff and retry rules',
          'Audit logs capturing every successful and failed run',
          'Instant notification channels when attention is needed',
        ],
      },
    ],
    stages: [
      { name: 'Audit', deliverable: 'Current tooling audit and workflow map' },
      { name: 'Design', deliverable: 'Data schema map and exception handling strategy' },
      { name: 'Build', deliverable: 'Pipeline development in staging environment' },
      { name: 'Testing', deliverable: 'Edge case testing and sandbox payload validation' },
      { name: 'Deployment', deliverable: 'Live execution, monitoring, and runbook' },
    ],
    toolkit: {
      label: 'Automation platforms & tools',
      note: 'We deploy code-based serverless functions or governance-first automation platforms.',
      items: [
        'Zapier & Make (Integromat)',
        'Node.js & Python AWS Lambda functions',
        'REST & Webhook protocols',
        'Salesforce & HubSpot automation engines',
        'Postman API testing suites',
      ],
    },
    faqs: [
      {
        q: 'What happens if a third-party API changes or goes down?',
        a: 'We engineer queueing mechanisms that hold incoming data during provider outages, retrying automatically when the remote service recovers so records are never lost.',
      },
    ],
  },
  {
    slug: 'video-production',
    title: 'Video Production & Motion',
    navLabel: 'Video Production',
    icon: 'video',
    group: 'creative',
    image: '/images/services/video-production.jpg',
    imageAlt: 'Video editor working on multi-track timeline and color grading in a digital editing suite',
    tagline: 'Strategic video content and animation tailored for web, campaigns, and conversions.',
    summary:
      'We produce brand films, product demos, explainer animations, and testimonial series that communicate complex offerings clearly in under two minutes.',
    cardSummary:
      'Commercials, customer story films, 2D/3D explainer animations, and product walkthroughs produced from strategy to delivery.',
    audience: [
      'Companies explaining a sophisticated technology or product offering',
      'Marketing teams needing video assets for landing pages and social campaigns',
      'Organisations wanting authentic video case studies with enterprise clients',
      'Brands refreshing their visual storytelling across public channels',
    ],
    subOfferings: [
      { title: 'Brand Story Films', desc: 'Cinematic corporate documentaries capturing core mission and leadership vision.' },
      { title: 'Product Walkthroughs & Explainer Videos', desc: 'Clarity-driven motion graphics and software screencast walkthroughs.' },
      { title: 'Customer Case Study Testimonials', desc: 'Credible, unscripted interviews with satisfied enterprise clients.' },
      { title: 'Social Video Ad Formats', desc: 'Vertical 9:16 and 1:1 cutdowns optimized for quick hooks and high engagement.' },
    ],
    sections: [
      {
        heading: 'Narrative development and scriptwriting',
        body: 'Great video starts with clear words. We craft messaging that focuses on the viewer’s problem before presenting your solution.',
        points: [
          'Audience-centric messaging outline',
          'Voiceover script and pacing timing',
          'Visual storyboard matching script beats',
        ],
      },
      {
        heading: 'Production and visual craft',
        body: 'Whether filming on location or building 2D/3D motion graphics, every frame is created to align with your brand visual standards.',
        points: [
          'Professional lighting and broadcast-grade microphone setups',
          'Motion design that adheres to your brand typography and palette',
          'Licensed commercial soundtracks and custom sound design',
        ],
      },
      {
        heading: 'Multi-platform mastering',
        body: 'Delivering final videos formatted for website heroes, YouTube 4K, LinkedIn feeds, and vertical mobile formats.',
        points: [
          'Subtitles and burned-in captions for sound-off viewing',
          'Export cuts in 16:9, 1:1, and 9:16 aspect ratios',
          'Compressed web assets optimized for fast site loading',
        ],
      },
    ],
    stages: [
      { name: 'Concept', deliverable: 'Creative brief, script, moodboard' },
      { name: 'Storyboard', deliverable: 'Style frames and scene-by-scene storyboard' },
      { name: 'Production', deliverable: 'Shoot day or animation build' },
      { name: 'Rough Cut', deliverable: 'First editorial pass for feedback' },
      { name: 'Master', deliverable: 'Final color, sound, and platform export deliverables' },
    ],
    toolkit: {
      label: 'Production & motion tools',
      note: 'All deliverables include full commercial licenses for music and voice talent.',
      items: [
        'Adobe After Effects & Premiere Pro',
        'DaVinci Resolve',
        'Cinema 4D / Blender for 3D elements',
        'High-bitrate 4K master delivery',
      ],
    },
    faqs: [
      {
        q: 'Do you provide professional voiceover talent?',
        a: 'Yes. We provide sample reels from vetted professional voice artists, manage the recording session, and include full commercial broadcast rights.',
      },
    ],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design & Branding',
    navLabel: 'Graphic Design',
    icon: 'palette',
    group: 'creative',
    image: '/images/services/graphic-design.jpg',
    imageAlt: 'Graphic designer creating brand style guides, color swatches, and typography layouts',
    tagline: 'Brand identity systems, marketing assets, and design collateral that stand out.',
    summary:
      'We design visual identity systems that give companies distinct market recognition, accompanied by versatile design toolkits your internal team can actually use.',
    cardSummary:
      'Brand identity systems, logo design, style guides, presentation decks, and marketing design collateral.',
    audience: [
      'Companies undergoing a rebrand, merger, or market repositioning',
      'Teams lacking coherent visual guidelines across web, print, and presentations',
      'Founders needing a memorable visual identity for a new business launch',
      'Marketing teams needing on-brand digital templates and collateral',
    ],
    subOfferings: [
      { title: 'Brand Identity & Logo Systems', desc: 'Memorable trademarks, color palettes, typographic scales, and brand tokens.' },
      { title: 'Brand Style Guidelines', desc: 'Clear rulebooks detailing proper usage, spatial margins, and photographic styles.' },
      { title: 'Presentation & Pitch Decks', desc: 'Custom PowerPoint and Keynote slide systems designed for enterprise sales and investors.' },
      { title: 'Digital & Social Template Suites', desc: 'Editable Figma and Canva templates for day-to-day marketing consistency.' },
    ],
    sections: [
      {
        heading: 'Brand positioning and visual direction',
        body: 'We research your market competitors and define aesthetic directions that help your business stand apart clearly.',
        points: [
          'Competitive visual landscape analysis',
          'Moodboards and design direction exploration',
          'Core visual concept presentations',
        ],
      },
      {
        heading: 'Identity system development',
        body: 'Crafting the logo mark, typographic pairings, secondary color palettes, and graphic motifs that comprise a cohesive brand.',
        points: [
          'Primary mark, secondary marks, and responsive favicons',
          'Curated typography hierarchy for digital and print',
          'Color systems tested for contrast and WCAG compliance',
        ],
      },
      {
        heading: 'Brand manuals and asset handoff',
        body: 'We provide structured documentation and organized vector asset libraries so anyone in your company can apply the brand correctly.',
        points: [
          'Comprehensive brand style guidelines manual',
          'Organized EPS, SVG, PNG, and PDF asset kits',
          'Ready-to-use template files for documents and presentations',
        ],
      },
    ],
    stages: [
      { name: 'Research', deliverable: 'Market audit, brand attributes, moodboards' },
      { name: 'Concepts', deliverable: '3 distinct design directions in context' },
      { name: 'Refinement', deliverable: 'Selected direction dialed in and tested' },
      { name: 'System', deliverable: 'Typography, colors, and layout guidelines' },
      { name: 'Asset Library', deliverable: 'Complete vector kit, templates, and style guide' },
    ],
    toolkit: {
      label: 'Design toolkit',
      note: 'All deliverables include full source files with commercial usage rights.',
      items: [
        'Figma & Adobe Creative Cloud (Illustrator, Photoshop, InDesign)',
        'Comprehensive vector exports (SVG, EPS, PDF)',
        'Web-safe font pairings and licensing guidance',
      ],
    },
    faqs: [
      {
        q: 'Do you just design logos, or full brand systems?',
        a: 'We design complete brand systems. A logo without supporting rules, typography, and color structure quickly loses cohesion in real-world use.',
      },
    ],
  },
];

/** Service groupings representing Digaptics\\' full public service catalog. */
export const serviceGroups = [
  {
    id: 'software',
    title: 'Software, Web & App Development',
    description:
      'Custom web platforms, mobile applications, and enterprise software engineered for security, speed, and real operational requirements.',
    serviceSlugs: ['software-development', 'website-development', 'mobile-app-development'],
    highlights: [
      'Custom React, Node.js, and Laravel cloud platforms',
      'Responsive WordPress and Webflow site architectures',
      'iOS and Android mobile app engineering',
      'Modern UI/UX interface design and design systems',
    ],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & Advertising',
    description:
      'Data-driven search engine optimization, pay-per-click advertising, addressable geofencing, and multi-channel social management that drive measurable pipeline.',
    serviceSlugs: ['digital-marketing'],
    highlights: [
      'Comprehensive SEO technical audits and local map ranking',
      'Targeted Google Ads and PPC campaign optimization',
      'Addressable geofencing for precision location targeting',
      'Online reputation and review amplification',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Marketplaces',
    description:
      'End-to-end storefront engineering, omnichannel marketplace management, and B2B wholesale ordering portals that increase revenue.',
    serviceSlugs: ['ecommerce-solutions'],
    highlights: [
      'Shopify & Shopify Plus theme and app development',
      'Amazon Seller Central, Walmart, and Target Plus management',
      'WooCommerce, Magento, and BigCommerce solutions',
      'B2B wholesale customer portals with tiered pricing',
    ],
  },
  {
    id: 'creative',
    title: 'Creative, Print & Media Production',
    description:
      'Commercial video production, corporate photography, licensed drone aerials, branding systems, and commercial print collateral.',
    serviceSlugs: ['video-production', 'graphic-design', 'photography-videography', 'printing-collateral'],
    highlights: [
      'Commercial video production and corporate headshots',
      'FAA Part 107 licensed drone photography and mapping',
      'Brand identity systems and executive presentation decks',
      'Premium business stationery, packaging, and event banners',
    ],
  },
  {
    id: 'bpo',
    title: 'BPO & Operational Outsourcing',
    description:
      'Omnichannel 24/7 customer support, back-office data processing, healthcare billing, and dedicated offshore team staffing.',
    serviceSlugs: ['bpo-solutions'],
    highlights: [
      '24/7 customer service and live chat agents',
      'High-accuracy back-office data processing',
      'Finance, accounting, and billing support',
      'Dedicated offshore staffing with US management',
    ],
  },
  {
    id: 'operations',
    title: 'Automation & Integrations',
    description:
      'Connecting existing business tools, automating data flow, and eliminating repetitive administrative work.',
    serviceSlugs: ['automation'],
    highlights: [
      'CRM, ERP, and API synchronization pipelines',
      'Automated invoice and document processing',
      'Webhook engineering with failure visibility',
      'Custom middleware and cloud automation',
    ],
  },
];

export const serviceCategoryLabels = {
  software: 'Software, Web & App Development',
  marketing: 'Digital Marketing & Advertising',
  ecommerce: 'E-Commerce & Marketplaces',
  creative: 'Creative, Print & Media Production',
  bpo: 'BPO & Operational Outsourcing',
  operations: 'Automation & Integrations',
  strategy: 'Strategy & Product',
};

export const industriesList = [
  { name: 'Healthcare & Medical', desc: 'HIPAA-aligned web development, patient portals, and healthcare BPO workflows.' },
  { name: 'Real Estate & Property', desc: 'Property search portals, virtual tours, drone videography, and localized geofencing.' },
  { name: 'Wholesale Trade & B2B', desc: 'Bulk catalog systems, ERP synchronization, and account-based wholesale ordering.' },
  { name: 'Financial & Insurance', desc: 'Secure web portals, lead generation, and compliant operational back-office processing.' },
  { name: 'Education & Academia', desc: 'Student enrollment marketing, campus event production, and accessible institutional web systems.' },
  { name: 'Hospitality & Restaurants', desc: 'Online ordering, table booking systems, food photography, and local search visibility.' },
  { name: 'Legal & Professional Services', desc: 'Reputation management, attorney branding, and high-conversion practice websites.' },
  { name: 'Construction & Trades', desc: 'Local geofencing, project portfolio showcases, and commercial signage.' },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

export const serviceNavLinks = services.map(({ slug, navLabel, cardSummary, icon }) => ({
  label: navLabel,
  to: '/services/' + slug,
  description: cardSummary,
  icon,
}));
`;

fs.writeFileSync('src/data/services.js', servicesCode, 'utf8');
console.log('Successfully updated src/data/services.js with comprehensive service catalog!');

