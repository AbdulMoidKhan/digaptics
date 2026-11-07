const fs = require('fs');

// We have the categorized services from digaptics.io
const cat = JSON.parse(fs.readFileSync('categorized_services.json', 'utf8'));

// Build detailed sub-offerings list for each category
const subOfferings = {
  marketing: [
    { title: 'Search Engine Optimization (SEO)', desc: 'Affordable, enterprise, and technical SEO audits that drive organic search discovery.' },
    { title: 'Pay-Per-Click Advertising (PPC)', desc: 'Targeted Google Ads and PPC management engineered for measurable conversion and ROI.' },
    { title: 'Social Media Management & Ads', desc: 'Campaign strategies across Facebook, Instagram, LinkedIn, YouTube, and TikTok.' },
    { title: 'Online Reputation & Review Management', desc: 'Review amplification and business listing management across verified local channels.' },
    { title: 'Addressable Geofencing', desc: 'Location-targeted digital advertising reaching high-intent prospects at exact locations.' }
  ],
  ecommerce: [
    { title: 'Shopify & Shopify Plus Development', desc: 'Custom theme architecture, app integrations, and conversion-optimized checkout experiences.' },
    { title: 'Amazon & Marketplace Management', desc: 'Comprehensive store setup, Amazon advertising, Etsy, Walmart, and Target Plus management.' },
    { title: 'WooCommerce, Magento & BigCommerce', desc: 'Flexible, enterprise-grade storefronts engineered for high-volume catalog processing.' },
    { title: 'B2B Ecommerce Enablement', desc: 'Wholesale portals, tier-based pricing models, and ERP backend synchronization.' },
    { title: 'Ecommerce SEO & Performance Marketing', desc: 'Product feed optimization, shopping ads, and transactional search marketing.' }
  ],
  printCollateral: [
    { title: 'Business Cards & Stationery', desc: 'Premium business cards, letterheads, presentation pocket folders, and envelopes.' },
    { title: 'Marketing Collateral & Brochures', desc: 'Bi-fold and tri-fold brochures, flyers, digital mailers, bookmarks, and newsletters.' },
    { title: 'Large Format Signs & Banners', desc: 'Outdoor banners, flags, posters, trade show convention displays, and vinyl signage.' },
    { title: 'Labels, Stickers & Custom Packaging', desc: 'Product packaging, rigid boxes, custom die-cut stickers, and branded retail labels.' },
    { title: 'Promotional Items & Apparel', desc: 'Corporate apparel, branded promo merchandise, and custom promotional giveaways.' }
  ],
  photographyVideography: [
    { title: 'Corporate & Executive Headshots', desc: 'Studio and on-location corporate photography capturing leadership teams and company culture.' },
    { title: 'Commercial Video Production', desc: 'Brand commercials, promotional films, client case studies, and testimonial videos.' },
    { title: 'Product & Food Photography', desc: 'High-resolution studio product staging, e-commerce catalog imagery, and food styling.' },
    { title: 'Drone & Aerial Footage', desc: 'Licensed FAA aerial videography and 4K mapping for real estate, construction, and events.' },
    { title: 'Live Streaming & Event Coverage', desc: 'Multi-camera conference broadcasting, trade show coverage, and graduation productions.' },
    { title: '2D/3D Motion Graphics & Animation', desc: 'Explainer videos, 3D product visualizations, and animated social content.' }
  ],
  bpo: [
    { title: 'Customer Support & Live Chat', desc: '24/7 omnichannel assistance, live chat agents, and customer care ticket handling.' },
    { title: 'Back-Office Operations & Data Entry', desc: 'Data cleansing, data processing, order fulfillment, and administrative record maintenance.' },
    { title: 'Finance & Accounting Support', desc: 'Accounts receivable, accounts payable, bookkeeping, invoice reconciliation, and payroll processing.' },
    { title: 'Healthcare & Medical BPO', desc: 'HIPAA-compliant medical coding, billing specialists, and health information management.' },
    { title: 'Lead Generation & Sales Support', desc: 'B2B outreach, telemarketing, reservation booking, and CRM pipeline assistance.' },
    { title: 'Dedicated Tech & Creative Staffing', desc: 'Seat leasing and offshore dedicated developers, UI/UX designers, and QA specialists.' }
  ],
  industries: [
    { title: 'Healthcare & Life Sciences', desc: 'HIPAA-aligned web development, patient portals, and healthcare BPO workflows.' },
    { title: 'Real Estate & Property Management', desc: 'Property listings, virtual tours, drone videography, and real estate marketing.' },
    { title: 'Wholesale Trade & B2B Distribution', desc: 'Bulk catalog systems, ERP integration, and account-based sales enablement.' },
    { title: 'Financial & Insurance Services', desc: 'Secure web portals, lead generation, and compliant operational back-office processing.' },
    { title: 'Education & Academia', desc: 'Student enrollment marketing, campus event production, and accessible institutional web systems.' },
    { title: 'Hospitality, Restaurants & Tourism', desc: 'Booking systems, menu collateral, food photography, and local search visibility.' },
    { title: 'Legal & Professional Services', desc: 'Reputation management, attorney branding, and high-conversion practice websites.' },
    { title: 'Construction, Renovation & Trades', desc: 'Local geofencing, project portfolio showcases, and commercial signage.' }
  ]
};

console.log('Built sub-offerings map');
fs.writeFileSync('sub_offerings.json', JSON.stringify(subOfferings, null, 2));

