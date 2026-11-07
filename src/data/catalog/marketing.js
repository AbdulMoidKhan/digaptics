/**
 * Marketing catalog entries.
 *
 * `source` records the reference page on digaptics.io that each entry is based
 * on, so facts can be re-checked. Copy is written for this site.
 */
export const marketingEntries = [
  // ---------------------------------------------------------------- SEO
  {
    slug: 'seo-audit',
    title: 'SEO Audit Services',
    group: 'seo',
    source: '/seo-audit-service/',
    blurb: 'A full technical, on-page, off-page and content audit with a prioritised fix list.',
    intro:
      'If a site is not ranking, the reason is usually measurable. We audit the technical foundations, the pages themselves, the backlink profile and the content, then hand over findings your team or ours can act on immediately.',
    h: [
      ['Technical SEO audit', 'Crawl errors, broken links and redirect chains, indexing and sitemap issues, site speed, mobile usability, Core Web Vitals, HTTPS and security checks.'],
      ['On-page review', 'Keyword and metadata analysis, URL structure and internal linking, heading hierarchy and alt text, duplicate or thin page detection.'],
      ['Off-page and backlink analysis', 'Backlink quality and domain authority, toxic link identification with disavow recommendations, anchor text profile review.'],
      ['Content quality assessment', 'Performance of existing SEO content, content gaps and keyword opportunities, readability and formatting improvements.'],
      ['Local SEO (optional)', 'Google Business Profile audit, directory citations, NAP consistency and a review strategy.'],
    ],
    points: [
      'Manual expert review combined with Google Search Console, Ahrefs, SEMrush and Screaming Frog data',
      'Clear reports with step-by-step recommendations your developers can implement',
      'Available as a one-off audit or as ongoing implementation and monitoring',
    ],
    faqs: [
      ['What does an SEO audit cover?', 'Technical health, on-page optimisation, backlink profile and content quality, plus local search signals if you serve a specific area.'],
      ['Do you implement the fixes?', 'Either way works. You can take the report to your own developers, or we can implement and monitor the changes as an ongoing engagement.'],
    ],
  },
  {
    slug: 'enterprise-seo',
    title: 'Enterprise SEO Services',
    group: 'seo',
    source: '/enterprise-seo-service/',
    blurb: 'SEO for large, complex sites: architecture, scale content and migrations.',
    intro:
      'Large sites fail at SEO for structural reasons: crawl waste, template-level issues, thin category pages, migrations handled badly. Enterprise SEO is about fixing those at the system level rather than page by page.',
    h: [
      ['Technical SEO at scale', 'Site architecture optimisation, crawl budget and indexation control, schema and structured data, mobile-first and Core Web Vitals work, migration and redesign SEO planning.'],
      ['Advanced keyword and competitor strategy', 'Keyword research mapped to search intent, SERP analysis across regions and languages, competitive gap analysis.'],
      ['Scalable content strategy', 'Enterprise content planning and production, content audits and refresh programmes, editorial SEO writing, localisation and multilingual SEO.'],
      ['High-authority link building', 'Strategic outreach, digital PR, content-led backlinks and brand authority work.'],
    ],
    points: [
      'Multi-location businesses and national brands',
      'Large ecommerce platforms and high-traffic publishers',
      'SaaS and technology companies',
      'In-house marketing and SEO teams needing extra capacity',
    ],
  },
  {
    slug: 'affordable-seo',
    title: 'Affordable SEO Services',
    group: 'seo',
    source: '/affordable-seo-service/',
    blurb: 'Scaled-down SEO packages for small businesses, startups and local teams.',
    intro:
      'You do not need an enterprise budget to compete in search. These packages cover the fundamentals properly, with transparent scope and pricing, and grow as results come in.',
    h: [
      ['Keyword research and strategy', 'A focused keyword set matched to what you actually sell and where you sell it.'],
      ['On-page optimisation', 'Titles, metadata, headings, internal links and page structure across priority pages.'],
      ['Technical SEO fixes', 'The crawl, speed and indexing issues holding the site back.'],
      ['SEO content creation (optional)', 'Written pages and articles targeting the gaps found in research.'],
      ['Link building and off-page SEO', 'Steady, relevant link acquisition rather than bulk purchases.'],
      ['Monthly reporting', 'What changed, what moved, and what comes next.'],
    ],
    points: [
      'Local businesses competing in their own area',
      'Startups building a digital presence from scratch',
      'Ecommerce brands that need more organic sales',
      'Anyone who wants value-driven SEO with transparent plans',
    ],
  },
  {
    slug: 'app-store-optimization',
    title: 'App Store Optimization',
    group: 'seo',
    source: '/app-store-optimization/',
    blurb: 'Rank higher in the app stores and convert more of the people who find you.',
    intro:
      'App store search is its own discipline. We optimise the metadata, creative and review signals that decide whether your app appears in results and whether people install it once it does.',
    h: [
      ['Keyword research and optimisation', 'Store-specific keyword sets, including long-tail terms competitors ignore.'],
      ['App title and description optimisation', 'Listing copy written for both the store algorithm and the person reading it.'],
      ['Icon, screenshot and video optimisation', 'Creative ordered and framed around the reasons people install.'],
      ['Ratings and reviews strategy', 'Prompt timing, response handling and sentiment tracking.'],
      ['Competitive analysis', 'Where rivals rank, what they target, and the gaps worth taking.'],
      ['Ongoing monitoring and reporting', 'Ranking, impression, install and conversion tracking over time.'],
    ],
    points: [
      'More organic installs without extra ad spend',
      'Better store rankings for commercial keywords',
      'Higher listing conversion rate',
      'Higher-intent users, which improves retention',
    ],
  },
  {
    slug: 'website-speed-optimization',
    title: 'Website Speed Optimization',
    group: 'seo',
    source: '/web-page-speed-optimization/',
    blurb: 'Core Web Vitals, front-end, image, caching and backend performance work.',
    intro:
      'Slow pages cost traffic, conversions and rankings. We measure where the time actually goes, then fix it across the front end, the images, the caching layer and the server.',
    h: [
      ['Performance analysis and audit', 'Core Web Vitals reporting (LCP, INP/FID, CLS) and hosting or server response-time evaluation.'],
      ['Front-end optimisation', 'Minifying CSS, JavaScript and HTML, reducing requests, lazy loading media and deferring offscreen resources.'],
      ['Image optimisation', 'Compression and resizing without visible quality loss, WebP conversion and CDN delivery.'],
      ['Caching and CDN setup', 'Browser caching and GZIP, server-side caching such as Redis or Varnish, and CDN configuration including Cloudflare.'],
      ['Database and backend tuning', 'Database cleanup, plugin audits on WordPress builds, PHP version upgrades and script control.'],
    ],
    points: [
      'Page speed is a confirmed Google ranking factor',
      'Faster pages typically improve conversion rate on the same traffic',
      'Mobile performance is measured separately and usually needs separate work',
    ],
    review: 'The reference page cites a statistic that 53% of users leave a site taking over three seconds to load. The underlying study is not named on the source page, so it is not repeated as a claim here.',
  },

  // -------------------------------------------------------- Advertising
  {
    slug: 'ppc-management',
    title: 'PPC Management Services',
    group: 'advertising',
    source: '/ppc-management-services/',
    blurb: 'Google, Meta, YouTube, Bing and LinkedIn campaigns managed for return, not clicks.',
    intro:
      'High spend with poor lead quality usually means the targeting, the ad message and the landing page are not telling the same story. We rebuild all three and manage the campaigns against conversion data.',
    h: [
      ['Google Ads management', 'Search, Shopping and Performance Max campaigns with proper negative keyword control.'],
      ['Meta and Instagram ads', 'Audience structures, creative testing and conversion tracking.'],
      ['YouTube ads', 'Video placements and sequencing for awareness through to action.'],
      ['Bing and LinkedIn ads', 'Lower-competition search inventory and B2B targeting by role and company.'],
      ['Remarketing and retargeting', 'Audiences segmented by what people actually did on site.'],
    ],
    points: [
      'In-depth keyword and competitor research',
      'High-converting ad copy and creative, plus A/B testing',
      'Landing page recommendations and conversion tracking setup',
      'Ongoing optimisation with transparent monthly reporting',
    ],
  },
  {
    slug: 'enterprise-ppc-management',
    title: 'Enterprise PPC Management',
    group: 'advertising',
    source: '/enterprise-ppc-management-services/',
    blurb: 'Multi-channel, multi-market paid media managed at scale.',
    intro:
      'Enterprise paid media has to handle many markets, large budgets, strict governance and detailed attribution. This engagement is built around that complexity rather than bolted onto a small-business process.',
    h: [
      ['Cross-platform PPC management', 'One strategy executed consistently across search, social, video and display.'],
      ['Custom strategy and campaign architecture', 'Account structures that match your business units, regions and reporting lines.'],
      ['Scalable budget and bid optimisation', 'Budget allocation and bidding rules that hold up as spend increases.'],
      ['Advanced audience targeting', 'First-party data, segmentation and suppression lists.'],
      ['Conversion tracking and attribution', 'Measurement that survives platform changes and consent requirements.'],
      ['Dedicated account team', 'A named team with scheduled reviews and agreed response times.'],
    ],
    points: [
      'Global or national brands with multiple business units',
      'Companies managing large, scrutinised ad budgets',
      'Brands running integrated cross-platform campaigns',
      'Marketing teams with detailed reporting and compliance needs',
    ],
  },
  {
    slug: 'social-media-advertising',
    title: 'Paid Social Media Advertising',
    group: 'advertising',
    source: '/social-media-paid-advertizing/',
    blurb: 'Facebook, Instagram, LinkedIn, TikTok, Pinterest and X campaigns.',
    intro:
      'Paid social is where a strong creative idea and precise targeting multiply each other. We plan, produce and run campaigns on the platforms your audience actually uses.',
    h: [
      ['Facebook advertising', 'Full-funnel campaigns from prospecting to retargeting.'],
      ['Instagram advertising', 'Feed, Stories and Reels placements built for the format.'],
      ['LinkedIn advertising', 'B2B targeting by job title, seniority, company and industry.'],
      ['TikTok advertising', 'Native-style creative made for sound-on, fast-scrolling feeds.'],
      ['Pinterest advertising', 'Product and inspiration-led placements for considered purchases.'],
      ['X (Twitter) advertising', 'Conversation and interest-based targeting.'],
    ],
    points: [
      'Maximise visibility while keeping production effort contained',
      'Grow followers and amplify organic posts that already perform',
      'Drive clicks, views and website conversions',
      'Attract qualified leads rather than cheap traffic',
    ],
  },
  {
    slug: 'addressable-geofencing',
    title: 'Addressable Geofencing',
    group: 'advertising',
    source: '/addressable-geofencing-services/',
    blurb: 'Serve ads to specific rooftops and locations rather than whole postcodes.',
    intro:
      'Addressable geofencing targets individual addresses instead of broad zip codes. You supply the address list, we draw a geofence around each property and serve ads to the devices inside those boundaries.',
    h: [
      ['Upload target addresses', 'Customer lists, prospect lists, competitor locations or purchased address data.'],
      ['Custom geofences per property', 'A boundary drawn around each rooftop rather than a radius around a postcode.'],
      ['Device capture', 'Devices seen inside those boundaries are added to the campaign audience.'],
      ['Cross-channel delivery', 'Ads appear across mobile apps, websites and streaming platforms.'],
      ['Attribution and measurement', 'Visit, engagement and conversion tracking, including foot traffic attribution.'],
    ],
    points: [
      'Address list import and geofence setup',
      'Optional ad creative development',
      'Cross-device targeting and retargeting',
      'Real-time analytics dashboard and campaign optimisation',
    ],
  },
  {
    slug: 'enterprise-social-advertising',
    title: 'Enterprise Social Media Advertising',
    group: 'advertising',
    source: '/enterprise-social-media-advertising-services/',
    blurb: 'Paid social for large brands with complex teams and approval chains.',
    intro:
      'Running paid social across business units, regions and compliance reviews needs a different operating model. We provide the strategy, creative volume and reporting discipline that scale requires.',
    h: [
      ['Strategy at scale', 'A single framework applied consistently across markets and business units.'],
      ['Advanced targeting', 'Segmentation, exclusion and first-party audience strategy.'],
      ['Creative that performs', 'Volume creative production with structured testing, not one-off assets.'],
      ['Data-driven optimisation', 'Decisions tied to conversion and value data rather than platform vanity metrics.'],
      ['Dedicated enterprise support', 'Named team, scheduled reviews and reporting built for stakeholders.'],
    ],
    points: [
      'Global or national brands with multiple business units',
      'Companies managing large ad budgets',
      'Brands with cross-platform, integrated campaigns',
      'Marketing teams that require detailed reporting and compliance',
    ],
  },

  // --------------------------------------------------------- Reputation
  {
    slug: 'review-management',
    title: 'Review Management',
    group: 'reputation',
    source: '/review-management/',
    blurb: 'Monitor, respond to and amplify reviews across every platform that matters.',
    intro:
      'Reviews are the last thing most buyers check. Review management means seeing every new review quickly, responding well, and making sure the good ones are visible where decisions get made.',
    h: [
      ['Multi-platform monitoring', 'Google, Facebook, Yelp and industry-specific sites watched in one place.'],
      ['Positive feedback amplification', 'Strong reviews surfaced on your site, listings and social channels.'],
      ['Negative review mitigation', 'Fast, professional responses and an internal escalation path.'],
      ['Centralised control', 'One dashboard rather than a dozen logins.'],
    ],
    points: [
      'Builds trust with buyers comparing options',
      'Supports conversion on pages where people are deciding',
      'Improves visibility in local search results',
    ],
  },
  {
    slug: 'business-listing-management',
    title: 'Business Listing Management',
    group: 'reputation',
    source: '/business-listing-management/',
    blurb: 'Consistent name, address and phone data across the directories that count.',
    intro:
      'Inconsistent listings quietly damage local search performance and send customers to wrong numbers and closed locations. We audit what exists, fix it, expand coverage and keep monitoring it.',
    h: [
      ['Audit', 'Find every existing listing, including duplicates and outdated entries.'],
      ['Optimise', 'Complete and correct categories, hours, services, descriptions and media.'],
      ['Expand', 'Claim the additional directories that matter in your sector and area.'],
      ['Monitor and adapt', 'Catch unauthorised edits and keep details current as the business changes.'],
    ],
    points: [
      'NAP consistency across platforms',
      'Optimised listings that drive calls and directions',
      'Review prompts integrated with listing profiles',
    ],
  },
  {
    slug: 'review-amplifier',
    title: 'Review Amplifier',
    group: 'reputation',
    source: '/review-amplifier/',
    blurb: 'Automated review requests, fast responses and showcased testimonials.',
    intro:
      'Review Amplifier turns satisfied customers into a steady flow of public proof. Requests go out automatically, feedback is routed to the right person, and the best reviews end up where buyers see them.',
    h: [
      ['Automated review requests', 'Email and SMS requests triggered after service delivery.'],
      ['Multi-platform monitoring', 'Google, Facebook, Yelp and more, tracked in one feed.'],
      ['Professional response handling', 'Negative feedback answered properly and on time.'],
      ['On-site and social display', 'Top reviews shown on your website and social channels.'],
      ['Monthly performance reporting', 'Volume, rating trend and sentiment over time.'],
    ],
    points: [
      'Local service businesses',
      'Restaurants, salons and retail stores',
      'Healthcare providers and clinics',
      'Ecommerce brands and product sellers',
      'Professionals and consultants who rely on reputation',
    ],
  },

  // ------------------------------------------------------ Social Media
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    group: 'social-media',
    source: '/social-media-management-services/',
    blurb: 'Strategy, content, publishing, community management and reporting.',
    intro:
      'Managed social media means someone owns the calendar, the content, the replies and the numbers. We start with your audience and competitors, then run the channels as a programme with monthly reporting.',
    h: [
      ['Strategy development', 'Channel selection, audience definition and competitive review before anything is posted.'],
      ['Content creation', 'Copy, graphics and short video produced for each platform.'],
      ['Content calendar and publishing', 'A planned calendar, scheduled and published on time.'],
      ['Community management', 'Comments, mentions and messages answered in your voice.'],
      ['Social media advertising', 'Paid amplification of the posts that earn it.'],
      ['Monthly reports', 'Reach, engagement, audience growth and lead or sale attribution.'],
    ],
    points: [
      'Dedicated account manager',
      'Platform coverage including Facebook, Instagram, X, LinkedIn, TikTok and YouTube',
      'Social media monitoring and presence optimisation',
      'Lead generation built into the content plan',
    ],
  },
  {
    slug: 'social-media-design',
    title: 'Social Media Design',
    group: 'social-media',
    source: '/social-media-design/',
    blurb: 'Templates, post graphics and campaign creative built for each platform.',
    intro:
      'Design made for social, not resized from print. Template systems so your team can publish quickly, plus campaign creative when something needs to stand out.',
    h: [
      ['Platform-sized templates', 'Feed, story, reel and cover formats set up correctly for each network.'],
      ['Campaign creative', 'Launches, promotions and seasonal sets designed as a family.'],
      ['Brand consistency', 'Type, colour and layout rules applied across every asset.'],
      ['Editable handover', 'Templates delivered so your team can reuse them without a designer.'],
    ],
  },
  {
    slug: 'facebook-page-management',
    title: 'Facebook Page Management',
    group: 'social-media',
    source: '/facebook-page-management/',
    blurb: 'Day-to-day management of your Facebook presence, content and community.',
    intro:
      'We run the page: content planning and production, scheduled publishing, comment and message handling, and reporting on what the page is actually contributing.',
    h: [
      ['Content planning and publishing', 'A calendar built around your offers, seasons and audience.'],
      ['Community management', 'Comments and messages answered promptly and in brand voice.'],
      ['Page optimisation', 'Complete profile, correct categories, call-to-action buttons and pinned content.'],
      ['Reporting', 'Reach, engagement and conversion contribution each month.'],
    ],
  },
  {
    slug: 'facebook-profile-optimization',
    title: 'Facebook Page & Profile Optimization',
    group: 'social-media',
    source: '/facebook-page-profile-optimization/',
    blurb: 'A one-off rebuild of your page so it is complete, searchable and credible.',
    intro:
      'A focused engagement rather than ongoing management: every field completed properly, visuals sized correctly, actions configured and the page structured so visitors immediately understand what you do.',
    h: [
      ['Profile completeness', 'Categories, about content, services, hours and contact details.'],
      ['Visual assets', 'Correctly sized profile and cover imagery.'],
      ['Call-to-action setup', 'Buttons and links pointing at the action you want.'],
      ['Searchability', 'Naming, username and keyword placement for discovery.'],
    ],
  },
  {
    slug: 'instagram-profile-optimization',
    title: 'Instagram Profile Optimization',
    group: 'social-media',
    source: '/social-media-instagram-optimization-for-profile-business/',
    blurb: 'Bio, highlights, grid and link setup for personal and business accounts.',
    intro:
      'Instagram profiles have seconds to convert a visitor into a follower or a click. We rework the bio, highlights, pinned posts and link destination so the profile does that job.',
    h: [
      ['Bio and name field', 'Clear positioning plus the keywords Instagram search uses.'],
      ['Highlights structure', 'Covers and groupings that answer common questions.'],
      ['Grid and pinned content', 'The first nine posts arranged to introduce the brand.'],
      ['Link strategy', 'Link destination and tracking set up properly.'],
    ],
  },
  {
    slug: 'linkedin-page-management',
    title: 'LinkedIn Profile & Page Management',
    group: 'social-media',
    source: '/linkedin-profile-management/',
    blurb: 'Company page and executive profile management for B2B visibility.',
    intro:
      'On LinkedIn, company pages and personal profiles work together. We manage both: content planning, publishing, engagement and the profile detail that makes people take a meeting.',
    h: [
      ['Company page management', 'Content calendar, publishing and page optimisation.'],
      ['Executive profile support', 'Positioning, headline and about copy, plus posting support for leaders.'],
      ['Engagement', 'Commenting and connection activity that builds reach without spam.'],
      ['Reporting', 'Follower growth, impressions and inbound enquiry tracking.'],
    ],
  },
  {
    slug: 'linkedin-page-optimization',
    title: 'LinkedIn Page Optimization',
    group: 'social-media',
    source: '/social-media-linkedin-optimization/',
    blurb: 'A structured audit and rebuild of your LinkedIn company presence.',
    intro:
      'A one-off optimisation pass: tagline, about section, specialities, products and media reworked so the page reads clearly to buyers and ranks inside LinkedIn search.',
    h: [
      ['Page fundamentals', 'Tagline, about section, specialities and industry fields.'],
      ['Keyword placement', 'Terms your buyers search, placed where LinkedIn indexes them.'],
      ['Visual and media assets', 'Banner, logo and featured content sized and chosen correctly.'],
      ['Conversion paths', 'Custom buttons and lead gen forms configured.'],
    ],
  },
  {
    slug: 'youtube-channel-management',
    title: 'YouTube Channel Management',
    group: 'social-media',
    source: '/youtube-channel-management/',
    blurb: 'Channel strategy, uploads, metadata, thumbnails and performance reporting.',
    intro:
      'YouTube rewards consistency and clear packaging. We handle the channel end to end: what to publish, how it is titled and thumbnailed, and what the numbers say to do next.',
    h: [
      ['Channel strategy', 'Content pillars, formats and publishing cadence.'],
      ['Upload and metadata management', 'Titles, descriptions, tags, chapters and end screens.'],
      ['Thumbnail design', 'Click-focused thumbnails tested against each other.'],
      ['Performance reporting', 'Retention, click-through rate and subscriber growth.'],
    ],
  },
  {
    slug: 'youtube-page-optimization',
    title: 'YouTube Page Optimization',
    group: 'social-media',
    source: '/social-media-youtube-page-optimization/',
    blurb: 'Channel-level setup: branding, sections, playlists and search metadata.',
    intro:
      'A focused optimisation of the channel itself rather than ongoing uploads: branding, layout, playlists, trailer and the metadata that decides whether your videos get surfaced.',
    h: [
      ['Channel branding', 'Banner, avatar, watermark and about section.'],
      ['Layout and sections', 'Featured video, playlists and shelf ordering for new visitors.'],
      ['Playlist architecture', 'Grouping that increases session time.'],
      ['Search metadata', 'Keyword research applied to titles, descriptions and tags.'],
    ],
  },
  {
    slug: 'tiktok-profile-management',
    title: 'TikTok Profile Management',
    group: 'social-media',
    source: '/tiktok-profile-management/',
    blurb: 'Short-form content production, publishing and trend monitoring.',
    intro:
      'TikTok rewards volume, native format and speed. We produce short-form content on a schedule, watch what the platform is pushing, and adjust week to week.',
    h: [
      ['Profile setup and optimisation', 'Bio, link, pinned content and category positioning.'],
      ['Short-form content production', 'Scripting, filming guidance or full production, plus editing and captions.'],
      ['Publishing and trend response', 'Consistent posting with fast reaction to relevant trends and sounds.'],
      ['Performance reporting', 'Views, watch time, follows and profile click-through.'],
    ],
  },
];
