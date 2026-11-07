/**
 * Ecommerce catalog entries.
 *
 * The reference site advertises a "$199/month" plan block on many ecommerce and
 * development pages, but the benefits listed under it do not match the page
 * subject and no plan detail is published. No pricing is reproduced here.
 */
export const ecommerceEntries = [
  // ------------------------------------------------------- Development
  {
    slug: 'ecommerce-development',
    title: 'Ecommerce Development Services',
    group: 'development',
    source: '/ecommerce-development-services/',
    blurb: 'Custom store design, platform development, integration and support.',
    intro:
      'A full store build: design, platform development, the integrations that connect stock and orders to the rest of your business, and support once it is live.',
    h: [
      ['Custom store design', 'Storefront design built around your catalogue and customers.'],
      ['Robust platform development', 'Platform chosen for your catalogue size and operational needs.'],
      ['Seamless integration', 'Payments, shipping, ERP, accounting and marketing tools connected.'],
      ['Mobile optimisation', 'Checkout and browsing tested on real devices.'],
      ['Performance optimisation', 'Speed work across templates, images and third-party scripts.'],
      ['Ongoing support and maintenance', 'Updates, fixes and incremental improvement after launch.'],
    ],
  },
  {
    slug: 'ecommerce-design',
    title: 'Ecommerce Design Services',
    group: 'development',
    source: '/ecommerce-design-services/',
    blurb: 'Conversion-focused store design through a structured design process.',
    intro:
      'Store design judged on conversion, not just appearance. We follow a defined process from discovery through to handover, with your feedback built into each stage.',
    h: [
      ['Discovery', 'Understand the brand, the audience and the market.'],
      ['Planning', 'Define design objectives and produce wireframes.'],
      ['Design development', 'Visual and UX design aligned to your brand.'],
      ['Review and refinement', 'Feedback incorporated and design finalised.'],
      ['Delivery and support', 'Handover to build, with design support through development.'],
    ],
    points: ['User-centred approach, responsive layouts and conversion-driven design decisions'],
  },
  {
    slug: 'ecommerce-strategy-consulting',
    title: 'Ecommerce Strategy & Consulting',
    group: 'development',
    source: '/ecommerce-strategy-consulting/',
    blurb: 'Independent advice on platform, channel and growth strategy.',
    intro:
      'Consulting for retailers deciding what to do next: which platform, which channels, what to fix first, and what the numbers say about all three.',
    h: [
      ['Data-driven insights', 'Analysis of your current store and channel performance.'],
      ['Platform and channel advice', 'Recommendations based on catalogue, margin and operations.'],
      ['Performance optimisation', 'Prioritised list of the changes worth making first.'],
      ['Expert guidance', 'Access to specialists for specific questions.'],
      ['Collaborative delivery', 'We can implement the plan or hand it to your team.'],
    ],
  },
  {
    slug: 'b2b-ecommerce-enablement',
    title: 'B2B Ecommerce Enablement',
    group: 'development',
    source: '/ecommerce-b2b/',
    blurb: 'Customer portals, trade pricing, bulk ordering and B2B payments.',
    intro:
      'B2B commerce is not retail with bigger orders. It needs account-specific pricing, approval flows, bulk ordering and purchase-order payment, all tied to your inventory.',
    h: [
      ['Strategic platform integration', 'Store connected to ERP, stock and accounting systems.'],
      ['Customised user experience', 'Account-specific catalogues and pricing.'],
      ['Personalised customer portals', 'Order history, reordering and documentation per account.'],
      ['Efficient inventory management', 'Stock visibility across the ordering process.'],
      ['Secure B2B payment gateways', 'Account terms, purchase orders and card payment.'],
      ['Data-driven analytics', 'Account-level reporting on ordering behaviour.'],
    ],
  },

  // -------------------------------------------------------- Platforms
  {
    slug: 'shopify-store-development',
    title: 'Shopify Store Development',
    group: 'cms',
    source: '/ecommerce-shopify-store-development/',
    blurb: 'Custom Shopify storefronts with secure payment and mobile-first design.',
    intro:
      'Shopify builds that go beyond installing a theme: custom storefront design, product presentation that suits your catalogue, and tested checkout.',
    h: [
      ['Custom ecommerce solutions', 'Storefront built for your products rather than a demo catalogue.'],
      ['Product showcase and navigation', 'Collection structure and filtering that matches how people shop.'],
      ['Mobile-optimised storefronts', 'Designed mobile-first and tested on devices.'],
      ['Secure payment gateway integration', 'Payment methods configured and tested end to end.'],
      ['SEO-optimised structure', 'Clean URLs, metadata and structured data.'],
      ['Ongoing support and maintenance', 'Theme, app and performance maintenance.'],
    ],
  },
  {
    slug: 'shopify-cms',
    title: 'Shopify CMS Development',
    group: 'cms',
    source: '/ecommerce-digital-marketing-ecommerce-cms-shopify/',
    blurb: 'Shopify as a content and merchandising system, not just a checkout.',
    intro:
      'Shopify CMS work focuses on how your team manages the store day to day: content structure, merchandising tools and templates editors can use safely.',
    h: [
      ['CMS website design', 'Templates designed around editable content blocks.'],
      ['CMS website development', 'Build with editor-safe sections and settings.'],
      ['CMS customisation', 'Metafields and sections tailored to your catalogue.'],
      ['Custom CMS integration', 'Connecting external content and data sources.'],
      ['CMS migration', 'Moving content from an existing platform.'],
      ['CMS support and maintenance', 'Ongoing changes and fixes.'],
    ],
  },
  {
    slug: 'woocommerce-development',
    title: 'WooCommerce Development',
    group: 'cms',
    source: '/ecommerce-digital-marketing-ecommerce-cms-woocommerce/',
    blurb: 'WooCommerce stores on WordPress, built for flexibility.',
    intro:
      'WooCommerce suits stores that need WordPress content alongside commerce, and the flexibility to customise without platform limits.',
    h: [
      ['CMS website design', 'Store design integrated with your WordPress content.'],
      ['CMS website development', 'Theme and plugin development for store functionality.'],
      ['CMS customisation', 'Custom product types, fields and checkout behaviour.'],
      ['Custom integration', 'Payments, shipping, tax and ERP connections.'],
      ['CMS migration', 'Moving from another platform to WooCommerce.'],
      ['Support and maintenance', 'Updates, security and performance work.'],
    ],
  },
  {
    slug: 'magento-store-development',
    title: 'Magento Store Development',
    group: 'cms',
    source: '/ecommerce-magento-store-development/',
    blurb: 'Magento builds for large catalogues and complex requirements.',
    intro:
      'Magento earns its complexity on large catalogues, multi-store setups and detailed pricing rules. We build, extend and maintain it.',
    h: [
      ['Bespoke ecommerce solutions', 'Custom Magento development to specification.'],
      ['Efficient product showcase and navigation', 'Layered navigation and search tuned for big catalogues.'],
      ['SEO-optimised architecture', 'URL, metadata and structured data configuration.'],
      ['Responsive design', 'Consistent experience across devices.'],
      ['Secure payment gateway integration', 'Multiple payment methods configured.'],
      ['Continuous maintenance and support', 'Patching, upgrades and performance work.'],
    ],
  },
  {
    slug: 'bigcommerce-development',
    title: 'BigCommerce Development',
    group: 'cms',
    source: '/ecommerce-big-commerce-store-development/',
    blurb: 'BigCommerce store builds, migrations and ongoing support.',
    intro:
      'BigCommerce combines hosted convenience with fewer transaction restrictions. We build, migrate and maintain stores on the platform.',
    h: [
      ['Tailored ecommerce solutions', 'Custom storefront build on BigCommerce.'],
      ['Product showcase and navigation', 'Catalogue structure and filtering.'],
      ['SEO-optimised structure', 'Technical SEO configured in-platform.'],
      ['Responsive design', 'Mobile-first storefront delivery.'],
      ['Secure payments', 'Gateway setup and checkout testing.'],
      ['Migration support', 'Moving an existing store onto BigCommerce.'],
    ],
  },
  {
    slug: 'drupal-commerce-development',
    title: 'Drupal Commerce Development',
    group: 'cms',
    source: '/ecommerce-digital-marketing-drupal-ecommerce-cms-mastery/',
    blurb: 'Drupal-based commerce for content-heavy, security-conscious stores.',
    intro:
      'Drupal Commerce suits organisations with substantial content requirements and strict access or security needs alongside their store.',
    h: [
      ['CMS website design and development', 'Commerce built on a Drupal content foundation.'],
      ['CMS customisation', 'Custom entities, fields and workflows.'],
      ['Enhanced security', 'Granular permissions and access control.'],
      ['Custom integration', 'Connections to external systems and data.'],
      ['Migration', 'Content and catalogue migration into Drupal.'],
      ['Support and maintenance', 'Module updates and ongoing development.'],
    ],
  },
  {
    slug: 'laravel-commerce-development',
    title: 'Laravel Ecommerce Development',
    group: 'cms',
    source: '/laravel-ecommerce-development/',
    blurb: 'Custom Laravel commerce applications for non-standard requirements.',
    intro:
      'When your commerce model does not fit a packaged platform (unusual pricing, subscriptions, configurators, marketplaces) Laravel gives you full control.',
    h: [
      ['Custom CMS and commerce build', 'Application built to your commercial model.'],
      ['CMS customisation', 'Admin and catalogue tooling designed for your team.'],
      ['Custom integration', 'Payments, logistics and internal systems.'],
      ['Scalable architecture', 'Built to handle catalogue and traffic growth.'],
      ['Secure and reliable', 'Framework-level security configured properly.'],
      ['Support and maintenance', 'Ongoing development and upgrades.'],
    ],
  },
  {
    slug: 'html5-commerce-development',
    title: 'HTML5 Ecommerce Development',
    group: 'cms',
    source: '/ecommerce-digital-marketing-ecommerce-cms-html/',
    blurb: 'Lightweight, front-end-led stores built on modern web standards.',
    intro:
      'A front-end-first approach for stores that need maximum speed and design freedom, with commerce functionality supplied through APIs.',
    h: [
      ['Advanced front-end development', 'Fast, standards-based storefront build.'],
      ['Custom solutions', 'Design and behaviour not constrained by platform themes.'],
      ['Responsive design', 'Built mobile-first across breakpoints.'],
      ['API integration', 'Headless commerce, payment and inventory APIs.'],
      ['Migration', 'Replacing an existing storefront layer.'],
      ['Support and maintenance', 'Ongoing front-end development.'],
    ],
  },

  // ----------------------------------------------------- Marketplaces
  {
    slug: 'amazon-store-management',
    title: 'Amazon Store Management',
    group: 'marketplaces',
    source: '/ecommerce-amazon-store/',
    blurb: 'Listing optimisation, inventory, advertising, reviews and reporting.',
    intro:
      'Managed Amazon selling: listings optimised for search and conversion, inventory monitored, advertising run against margin, and performance reported honestly.',
    h: [
      ['Optimised product listings', 'Titles, bullets, backend keywords and imagery.'],
      ['Strategic inventory management', 'Stock monitoring to avoid both stockouts and storage fees.'],
      ['Promotion and advertising campaigns', 'Sponsored campaigns managed against target return.'],
      ['Review and rating enhancement', 'Compliant review generation and issue response.'],
      ['Competitor analysis and strategy', 'Pricing and positioning against the category.'],
      ['Performance analytics', 'Sales, ad spend and profitability reporting.'],
    ],
  },
  {
    slug: 'amazon-advertising-management',
    title: 'Amazon Advertising Management',
    group: 'marketplaces',
    source: '/ecommerce-amazon-advertizing-management/',
    blurb: 'Amazon PPC campaign management with keyword and ad-spend control.',
    intro:
      'Amazon advertising focused on profitable growth: keyword management, bid control, listing alignment and clear reporting on where the budget went.',
    h: [
      ['PPC advertising management', 'Sponsored Products, Brands and Display campaigns.'],
      ['Product listing optimisation', 'Listings aligned to the keywords being bid on.'],
      ['Keyword performance tracking', 'Search term analysis with negative keyword control.'],
      ['Competitive analysis', 'Competitor keyword and pricing monitoring.'],
      ['Inventory and order management', 'Advertising paused or scaled against stock position.'],
      ['Brand building and protection', 'Brand registry, content and listing protection.'],
    ],
  },
  {
    slug: 'open-an-amazon-store',
    title: 'How to Open an Amazon Store',
    group: 'marketplaces',
    source: '/ecommerce-how-to-open-an-amazon-storefront/',
    blurb: 'A four-step launch process, from seller account to managed sales.',
    intro:
      'Opening an Amazon store gives you access to an established customer base. The process is straightforward; the work is in doing each step properly.',
    h: [
      ['Set up your seller account', 'Account type, verification and tax configuration.'],
      ['Select and source products', 'Product and supplier selection against demand and margin.'],
      ['Create and optimise listings', 'Listing creation with search-ready content and imagery.'],
      ['Launch and manage sales', 'Launch, advertising, review generation and ongoing management.'],
    ],
    points: [
      'Expand reach to Amazon\'s existing customer base',
      'Use Amazon fulfilment and seller tooling',
      'Test demand with lower upfront risk than a standalone store',
    ],
  },
  {
    slug: 'walmart-marketplace-management',
    title: 'Walmart Marketplace Management',
    group: 'marketplaces',
    source: '/ecommerce-wallmart-store/',
    blurb: 'Walmart listing, inventory, advertising and review management.',
    intro:
      'Walmart Marketplace is less saturated than Amazon but stricter on performance metrics. We manage listings, inventory, advertising and account health.',
    h: [
      ['Optimised product listings', 'Content and imagery to Walmart requirements.'],
      ['Strategic inventory management', 'Stock and fulfilment settings maintained.'],
      ['Promotion and advertising campaigns', 'Sponsored placements managed to target.'],
      ['Review and rating enhancement', 'Review generation and issue resolution.'],
      ['Competitor analysis and strategy', 'Pricing and buy-box monitoring.'],
    ],
    review: 'The reference page for Walmart uses the hero copy from the paid-social page ("No Hype, Just Results"), so some of its framing appears to be a template error on the source site.',
  },
  {
    slug: 'etsy-store-management',
    title: 'Etsy Store Management',
    group: 'marketplaces',
    source: '/ecommerce-etsy-store-management/',
    blurb: 'Etsy listing optimisation, promotion, reviews and analytics.',
    intro:
      'Etsy rewards good listing craft and consistent activity. We manage listings, promotion, reviews and pricing so the shop keeps surfacing in search.',
    h: [
      ['Optimised product listings', 'Titles, tags and photography for Etsy search.'],
      ['Strategic inventory management', 'Stock, variations and renewals managed.'],
      ['Promotion and advertising campaigns', 'Etsy Ads and off-site promotion.'],
      ['Review management', 'Review generation and response handling.'],
      ['Competitive pricing strategies', 'Pricing reviewed against comparable shops.'],
      ['Performance analytics', 'Traffic, conversion and revenue reporting.'],
    ],
  },
  {
    slug: 'target-plus-management',
    title: 'Target Plus Marketplace Management',
    group: 'marketplaces',
    source: '/ecommerce-target-plus-marketplace-management/',
    blurb: 'End-to-end management for Target\'s invitation-only marketplace.',
    intro:
      'Target Plus is a curated, invitation-based marketplace, which makes compliance and listing quality unusually important. We manage the account end to end.',
    h: [
      ['Product listing optimisation', 'Listings built to Target content standards.'],
      ['Inventory management', 'Stock and availability maintenance.'],
      ['Advertising and promotion', 'Promotional placement management.'],
      ['Marketplace compliance', 'Meeting Target\'s operational and content requirements.'],
      ['Customer service support', 'Buyer enquiry and issue handling.'],
      ['Performance analytics', 'Sales and account health reporting.'],
    ],
  },
  {
    slug: 'facebook-marketplace-management',
    title: 'Facebook Marketplace Management',
    group: 'marketplaces',
    source: '/facebook-market-place/',
    blurb: 'Listing, promotion, enquiry handling and performance monitoring.',
    intro:
      'Facebook Marketplace reaches buyers already in the app. We handle account setup, listings, targeted promotion and the enquiry volume it generates.',
    h: [
      ['Account setup and optimisation', 'Commerce account and catalogue configuration.'],
      ['Product listing', 'Listings created and refreshed on schedule.'],
      ['Inventory management', 'Availability kept accurate across listings.'],
      ['Targeted advertising', 'Paid promotion to relevant local and interest audiences.'],
      ['Customer support', 'Message and enquiry handling.'],
      ['Performance monitoring', 'Views, enquiries and sales reporting.'],
    ],
  },

  // ----------------------------------------------------------- Growth
  {
    slug: 'ecommerce-seo',
    title: 'Ecommerce SEO Services',
    group: 'growth',
    source: '/ecommerce-seo-services/',
    blurb: 'Category, product and technical SEO for online stores.',
    intro:
      'Store SEO is different: thousands of similar pages, faceted navigation and product churn. We fix the structural issues first, then work the categories that carry the revenue.',
    h: [
      ['Holistic site analysis', 'Technical audit across templates, not just sample pages.'],
      ['Product-focused keyword optimisation', 'Keyword mapping across categories and product pages.'],
      ['Technical excellence', 'Crawl control, faceted navigation handling and structured data.'],
      ['Content and conversion strategy', 'Category content that ranks and still sells.'],
      ['Visual optimisation', 'Image sizing, naming and alt text at catalogue scale.'],
    ],
  },
  {
    slug: 'ecommerce-ppc',
    title: 'Ecommerce PPC Services',
    group: 'growth',
    source: '/ecommerce-ppc-services/',
    blurb: 'Shopping, search and retargeting campaigns run against margin.',
    intro:
      'Paid campaigns for stores of any size, structured around product margin and stock rather than overall account averages.',
    h: [
      ['Strategic ad campaigns', 'Campaign architecture built around your catalogue.'],
      ['Keyword precision', 'Keyword and search-term control to cut wasted spend.'],
      ['Compelling ad copy', 'Copy and creative tested systematically.'],
      ['Visual ad appeal', 'Shopping and display creative built for the format.'],
      ['Budget optimisation', 'Spend allocated to products that actually return.'],
      ['Continuous performance tweaks', 'Ongoing optimisation with reporting.'],
    ],
  },
  {
    slug: 'ecommerce-digital-marketing',
    title: 'Ecommerce Digital Marketing',
    group: 'growth',
    source: '/ecommerce-digital-marketing-services/',
    blurb: 'Full-funnel store marketing: strategy, creative, paid, email and CRO.',
    intro:
      'A complete store marketing programme where strategy, design, paid media, email, landing pages and conversion work run together rather than in separate silos.',
    h: [
      ['Strategic online campaigns', 'A single plan across channels.'],
      ['Data-driven audience targeting', 'Segmentation built from your own customer data.'],
      ['Content creation', 'Creative produced for each placement.'],
      ['Conversion-driven ad copywriting', 'Copy written against the offer, not the brand brief.'],
      ['Budget-smart promotions', 'Promotional calendar planned around margin.'],
      ['Analytics-backed optimisation', 'Decisions tied to measured performance.'],
    ],
  },
  {
    slug: 'ecommerce-social-advertising',
    title: 'Ecommerce Social Media Advertising',
    group: 'growth',
    source: '/ecommerce-social-media/',
    blurb: 'Paid social campaigns built around product creative and audiences.',
    intro:
      'Paid social for stores: creative built for the feed, audiences built from your customer data, and reporting that ties spend back to orders.',
    h: [
      ['Strategic campaign crafting', 'Campaign structure built for prospecting and retargeting.'],
      ['Audience targeting precision', 'Customer-data and behaviour-based audiences.'],
      ['Captivating visual content', 'Product creative produced for each platform.'],
      ['Compelling ad copywriting', 'Offer-led copy tested against alternatives.'],
      ['Budget-savvy promotions', 'Spend concentrated where return is proven.'],
      ['Performance analytics and optimisation', 'Reporting against revenue, not reach.'],
    ],
    review: 'The reference page lists a placeholder phone number (123-456-7890) in its call to action. Our published contact number is used instead.',
  },
];
