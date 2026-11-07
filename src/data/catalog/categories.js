/**
 * Catalog taxonomy.
 *
 * The seven top-level categories mirror the service families published on
 * digaptics.io (Marketing, Web & App Development, Printing, Industries,
 * Photo & Videography, BPO, Ecommerce). Each category owns a set of groups,
 * and every catalog entry belongs to exactly one group.
 *
 * Copy here is written for this site. Service names, platform names and
 * factual details are preserved from the reference site; wording is not.
 */

export const categories = [
  {
    id: 'marketing',
    path: '/marketing',
    label: 'Marketing',
    navLabel: 'Marketing',
    icon: 'trendingUp',
    title: 'Digital Marketing Services',
    kicker: 'Search, paid media, reputation and social',
    headline: 'Marketing that earns attention and keeps it',
    intro:
      'Search, paid media, reputation and social channels work best when they share one plan. We run them as a single programme: audits first, then the work that moves the numbers you actually report on.',
    summary: 'SEO, paid media, reputation management and social media programmes.',
    image: '/images/gen/marketing.jpg',
    imageAlt: 'Marketing team reviewing printed performance charts at a desk',
    groups: [
      {
        id: 'seo',
        label: 'Search Engine Optimization',
        desc: 'Technical, on-page and content work that makes a site easier to find.',
        image: '/images/gen/seo.jpg',
        imageAlt: 'Laptop and notebook on a desk in morning light during an SEO review',
      },
      {
        id: 'advertising',
        label: 'Advertising',
        desc: 'Paid search, paid social and address-level geofencing campaigns.',
        image: '/images/gen/advertising.jpg',
        imageAlt: 'Creative team reviewing printed advertising layouts pinned to a wall',
      },
      {
        id: 'reputation',
        label: 'Reputation',
        desc: 'Reviews, listings and the signals buyers check before they call.',
        image: '/images/gen/reputation.jpg',
        imageAlt: 'Hands holding a smartphone showing an abstract review interface',
      },
      {
        id: 'social-media',
        label: 'Social Media Management',
        desc: 'Channel strategy, content production, publishing and community care.',
        image: '/images/gen/social-media.jpg',
        imageAlt: 'Small content studio desk with ring light and phone on a tripod',
      },
    ],
  },
  {
    id: 'web-app-development',
    path: '/web-app-development',
    label: 'Web & App Development',
    navLabel: 'Web & App',
    icon: 'code',
    title: 'Web, Software & App Development',
    kicker: 'Software, websites, mobile apps and business platforms',
    headline: 'Software and websites built around how your business runs',
    intro:
      'From custom software and enterprise web platforms to mobile apps and CRM or ERP rollouts, we design, build, integrate and support the systems your team works in every day.',
    summary: 'Custom software, websites, mobile apps, UI/UX and business platform implementations.',
    image: '/images/gen/web-app-development.jpg',
    imageAlt: 'Developer workstation with two monitors showing code in a dim room',
    groups: [
      {
        id: 'software',
        label: 'Software Development',
        desc: 'Custom and enterprise applications, modernisation and integration.',
        image: '/images/gen/software.jpg',
        imageAlt: 'Engineers sketching a system architecture diagram on a whiteboard',
      },
      {
        id: 'web',
        label: 'Website Development',
        desc: 'Custom builds plus WordPress, Shopify, Webflow, Wix, Squarespace and Laravel.',
        image: '/images/gen/web-design.jpg',
        imageAlt: 'Designer sketching wireframes on paper next to a tablet',
      },
      {
        id: 'mobile',
        label: 'Mobile App Development',
        desc: 'Native iOS and Android, plus Flutter and React Native cross-platform builds.',
        image: '/images/gen/mobile-apps.jpg',
        imageAlt: 'Hands holding a smartphone showing an abstract application interface',
      },
      {
        id: 'design',
        label: 'UI/UX & Cloud',
        desc: 'Product design, research and cloud-native application engineering.',
        image: '/images/gen/web-design.jpg',
        imageAlt: 'Wireframe sketches and a tablet on a designer desk',
      },
      {
        id: 'platforms',
        label: 'Business Platforms',
        desc: 'CRM, ERP, POS and the SaaS platforms your operation already depends on.',
        image: '/images/gen/platforms.jpg',
        imageAlt: 'Laptop and tablet side by side on a conference table during a review',
      },
    ],
  },
  {
    id: 'printing',
    path: '/printing',
    label: 'Printing',
    navLabel: 'Printing',
    icon: 'printer',
    title: 'Design & Print',
    kicker: 'Collateral, signage, trade show and packaging',
    headline: 'Print that matches the brand you built online',
    intro:
      'Business cards through to retail packaging, designed and produced as one coordinated system. Every item can be set up from scratch or printed from files you already own.',
    summary: 'Printed collateral, signs and banners, trade show display and product packaging.',
    image: '/images/gen/printing.jpg',
    imageAlt: 'Printed sheets and colour swatch fans on a print shop worktable',
    groups: [
      {
        id: 'print-collateral',
        label: "Print & Collateral",
        desc: 'Cards, stationery, brochures, flyers, menus and invitations.',
        image: '/images/gen/print-collateral.jpg',
        imageAlt: 'Flat lay of blank business cards, letterhead and folded brochures',
      },
      {
        id: 'signs-banners',
        label: 'Signs & Banners',
        desc: 'Indoor and outdoor signage, banners, flags and table dressing.',
        image: '/images/gen/signs-banners.jpg',
        imageAlt: 'Large-format printer producing a wide blank banner roll',
      },
      {
        id: 'trade-show',
        label: 'Trade Show Display',
        desc: 'Portable display kit and branded giveaways for events.',
        image: '/images/gen/trade-show.jpg',
        imageAlt: 'Exhibition hall with blank modular display stands before opening',
      },
      {
        id: 'packaging',
        label: 'Product Packaging',
        desc: 'Boxes, pouches, labels, stickers and shipping materials.',
        image: '/images/gen/packaging.jpg',
        imageAlt: 'Blank product boxes, kraft pouches and label rolls on a studio backdrop',
      },
    ],
  },
  {
    id: 'industries',
    path: '/industries',
    label: 'Industries',
    navLabel: 'Industries',
    icon: 'briefcase',
    title: 'Industries We Serve',
    kicker: 'Sector-specific delivery teams',
    headline: 'Sector experience, not generic playbooks',
    intro:
      'Compliance, terminology and buying cycles differ by sector. These pages set out what we deliver for each industry and which of our teams carry the work.',
    summary: 'Industry programmes spanning healthcare, finance, real estate, trades, education and more.',
    image: '/images/gen/industries.jpg',
    imageAlt: 'Glass office towers in a city business district at golden hour',
    groups: [
      {
        id: 'regulated',
        label: 'Healthcare & Regulated',
        desc: 'Healthcare, medical, dental, insurance, financial and legal services.',
        image: '/images/gen/industries.jpg',
        imageAlt: 'City business district at golden hour',
      },
      {
        id: 'commerce',
        label: 'Commerce & Property',
        desc: 'E-commerce, wholesale, real estate, hospitality, food and events.',
        image: '/images/gen/ecommerce.jpg',
        imageAlt: 'Packing station with shipping boxes and a laptop',
      },
      {
        id: 'technical',
        label: 'Technical & Industrial',
        desc: 'IT, telecoms, media, construction, trades, transport and agriculture.',
        image: '/images/gen/software.jpg',
        imageAlt: 'Architecture diagram drawn on a whiteboard',
      },
      {
        id: 'organisations',
        label: 'Education & Organisations',
        desc: 'Education, non-profits, professional services, gaming and startups.',
        image: '/images/gen/about-team.jpg',
        imageAlt: 'Team talking in a bright office lounge',
      },
    ],
  },
  {
    id: 'photo-video',
    path: '/photo-video',
    label: 'Photo & Videography',
    navLabel: 'Photo & Video',
    icon: 'camera',
    title: 'Photography & Videography',
    kicker: 'Production, direction and post',
    headline: 'Owned imagery beats stock every time',
    intro:
      'Photography and video shot for your brand, your products and your people, then edited for the channels where it will actually run.',
    summary: 'Commercial photography, video production, animation, live streaming and post-production.',
    image: '/images/gen/photo-video.jpg',
    imageAlt: 'Cinema camera on a gimbal during a lit video shoot',
    groups: [
      {
        id: 'photography',
        label: 'Photography',
        desc: 'Events, property, food, product, corporate, medical, industrial and drone.',
        image: '/images/gen/photography.jpg',
        imageAlt: 'Photographer adjusting a softbox over a tabletop product set',
      },
      {
        id: 'videography',
        label: 'Videography',
        desc: 'Corporate video, documentary, weddings, animation and live streaming.',
        image: '/images/gen/videography.jpg',
        imageAlt: 'Editing suite with a colour-graded timeline on a wide monitor',
      },
    ],
  },
  {
    id: 'bpo',
    path: '/bpo',
    label: 'BPO',
    navLabel: 'BPO',
    icon: 'headset',
    title: 'Business Process Outsourcing',
    kicker: 'Teams, roles, models and pricing',
    headline: 'Offshore and managed teams that fit your process',
    intro:
      'Hire a managed team, a single specialist, or lease fully equipped seats. We cover back office, finance, healthcare administration, customer contact, creative and technical roles.',
    summary: 'Managed offshore teams, individual specialists, seat leasing and staffing models.',
    image: '/images/gen/bpo.jpg',
    imageAlt: 'Modern back-office operations floor with rows of desks and monitors',
    groups: [
      {
        id: 'teams',
        label: 'Teams',
        desc: 'Whole functions delivered as a managed team.',
        image: '/images/gen/bpo-teams.jpg',
        imageAlt: 'Small operations team gathered around a monitor',
      },
      {
        id: 'roles',
        label: 'Job Roles',
        desc: 'Individual specialists you can add to your existing team.',
        image: '/images/gen/bpo-roles.jpg',
        imageAlt: 'Back-office specialist working at a dual-monitor desk with a headset',
      },
      {
        id: 'how-it-works',
        label: 'How It Works',
        desc: 'Offshoring models, suitability and what makes engagements succeed.',
        image: '/images/gen/bpo-how-it-works.jpg',
        imageAlt: 'Modern office corridor with glass meeting rooms and motion blur',
      },
      {
        id: 'pricing',
        label: 'Pricing & Models',
        desc: 'Seat leasing, staffing solutions and hourly engagement rates.',
        image: '/images/gen/bpo-pricing.jpg',
        imageAlt: 'Minimal desk with a calculator, notepad and pen',
      },
    ],
  },
  {
    id: 'ecommerce',
    path: '/ecommerce',
    label: 'Ecommerce',
    navLabel: 'Ecommerce',
    icon: 'shoppingCart',
    title: 'Ecommerce Services',
    kicker: 'Storefronts, marketplaces and growth',
    headline: 'Storefronts and marketplaces, built and managed',
    intro:
      'Build on the platform that suits your catalogue, then grow it: marketplace management across Amazon, Walmart, Etsy and Target Plus, plus ecommerce SEO, paid media and B2B enablement.',
    summary: 'Store development, platform CMS work, marketplace management and ecommerce marketing.',
    image: '/images/gen/ecommerce.jpg',
    imageAlt: 'Product packing station with shipping boxes, tape and a laptop',
    groups: [
      {
        id: 'development',
        label: 'Ecommerce Development',
        desc: 'Store builds, design, strategy and consulting.',
        image: '/images/gen/ecommerce-platforms.jpg',
        imageAlt: 'Laptop on a white desk showing an abstract online store layout',
      },
      {
        id: 'cms',
        label: 'Ecommerce Platforms',
        desc: 'Shopify, WooCommerce, Magento, BigCommerce, Drupal, Laravel and HTML5.',
        image: '/images/gen/ecommerce-platforms.jpg',
        imageAlt: 'Abstract online store layout on a laptop screen',
      },
      {
        id: 'marketplaces',
        label: 'Marketplaces',
        desc: 'Amazon, Walmart, Etsy, Target Plus and Facebook Marketplace.',
        image: '/images/gen/marketplaces.jpg',
        imageAlt: 'Warehouse fulfilment aisle with stacked plain parcels',
      },
      {
        id: 'growth',
        label: 'Ecommerce Marketing',
        desc: 'Store SEO, PPC, paid social and B2B enablement.',
        image: '/images/gen/marketing.jpg',
        imageAlt: 'Hands reviewing printed performance charts',
      },
    ],
  },
];

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));

export function groupMeta(categoryId, groupId) {
  return categoryById[categoryId]?.groups.find((g) => g.id === groupId) ?? null;
}
