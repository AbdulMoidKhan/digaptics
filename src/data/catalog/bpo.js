/**
 * BPO catalog entries: managed teams, individual roles, engagement models and
 * pricing models.
 *
 * Cost-saving percentages, salary benchmarks and market-size figures quoted on
 * the reference site are attributed, not restated as our own guarantees.
 */
export const bpoEntries = [
  // -------------------------------------------------------------- Teams
  {
    slug: 'back-office',
    title: 'Back Office Outsourcing',
    group: 'teams',
    source: '/bpo-back-office/',
    blurb: 'A managed back office: payroll, employee data, admin, projects and IT.',
    intro:
      'Back-office outsourcing gives you skilled administrative capacity without building it internally. We provide the team, the office and the management layer, so you stay on the parts of the business only you can do.',
    h: [
      ['Office space solutions', 'Equipped office locations, sized to your back-office headcount.'],
      ['Payroll management', 'Pay rates, tax information, timesheets, tax forms and benefits records in one system.'],
      ['Employee data management', 'Accurate, current employee records with controlled access.'],
      ['Digital and IT solutions', 'Automation of repetitive back-office tasks to reduce manual error.'],
      ['Business and project management', 'Defined roles, responsibilities and reporting across administrative functions.'],
      ['Marketing assistance', 'Audience research and analytics-led marketing support.'],
      ['Legal counselling', 'Compliance-focused review of back-office processes.'],
    ],
    review: 'The reference page claims potential savings of up to 70% on costs. That figure is the source site\'s claim and depends entirely on role, location and scope, so it is not repeated as a promise here.',
  },
  {
    slug: 'finance-accounting',
    title: 'Finance & Accounting Team',
    group: 'teams',
    source: '/bpo-account-finance/',
    blurb: 'Bookkeeping, payables, receivables, payroll and management reporting.',
    intro:
      'A managed finance function covering the transactional work end to end, with reporting your accountant and your board can both use.',
    h: [
      ['Bookkeeping', 'Daily transaction recording and reconciliation.'],
      ['Accounts payable', 'Invoice processing, approval routing and payment runs.'],
      ['Accounts receivable', 'Invoicing, collections and aged debt reporting.'],
      ['Payroll processing', 'Payroll preparation and records management.'],
      ['Management reporting', 'Monthly reporting packs and variance analysis.'],
    ],
  },
  {
    slug: 'data-processing',
    title: 'Data Processing Team',
    group: 'teams',
    source: '/bpo-data-processing-solutions/',
    blurb: 'High-volume data entry, validation, cleansing and conversion.',
    intro:
      'Volume data work handled as a controlled process: documented rules, quality checks and measurable accuracy rather than best effort.',
    h: [
      ['Data entry at volume', 'Structured entry from documents, forms and scans.'],
      ['Validation and cleansing', 'Rule-based checking and de-duplication.'],
      ['Format conversion', 'Moving data between systems and formats.'],
      ['Quality assurance', 'Sampling and error-rate reporting.'],
    ],
  },
  {
    slug: 'data-visualization',
    title: 'Data Visualization Team',
    group: 'teams',
    source: '/bpo-data-visualization/',
    blurb: 'Dashboards, reporting and analysis built on your existing data.',
    intro:
      'A team that turns operational data into dashboards people actually open: defined metrics, reliable refreshes and reports built for the decision being made.',
    h: [
      ['Dashboard development', 'Operational and executive dashboards.'],
      ['Report automation', 'Scheduled reporting replacing manual spreadsheet work.'],
      ['Metric definition', 'Agreed definitions so numbers match across teams.'],
      ['Data preparation', 'Cleaning and modelling before visualisation.'],
    ],
  },
  {
    slug: 'human-resources',
    title: 'HR & Recruitment Team',
    group: 'teams',
    source: '/bpo-human-resource/',
    blurb: 'Recruitment support, onboarding, records and HR administration.',
    intro:
      'HR support for companies without a full internal function: sourcing and screening candidates, running onboarding and keeping employee records in order.',
    h: [
      ['Recruitment support', 'Sourcing, screening and interview coordination.'],
      ['Onboarding', 'Documentation, induction scheduling and systems access.'],
      ['Employee records', 'Accurate, compliant personnel records.'],
      ['HR administration', 'Leave, benefits and policy administration support.'],
    ],
  },
  {
    slug: 'cyber-security',
    title: 'Cyber Security Team',
    group: 'teams',
    source: '/bpo-cyber-security/',
    blurb: 'Threat detection, monitoring and tailored security operations support.',
    intro:
      'A security operations layer for organisations that cannot justify a full internal team: monitoring, detection and incident support.',
    h: [
      ['Advanced threat detection', 'Monitoring for suspicious activity across systems.'],
      ['Performance monitoring', 'Continuous review of security controls and alerts.'],
      ['Customised security solutions', 'Controls sized to your risk profile and budget.'],
      ['Collaborative protection', 'Working alongside your existing IT team and vendors.'],
    ],
  },
  {
    slug: 'health-information-management',
    title: 'Health Information Management Team',
    group: 'teams',
    source: '/bpo-health-information-management/',
    blurb: 'EHR handling, patient data management and privacy compliance support.',
    intro:
      'A specialist team for health information: electronic health records, patient data integrity and confidentiality obligations.',
    h: [
      ['EHR management', 'Electronic health record handling and maintenance.'],
      ['Patient data integrity', 'Validation, de-duplication and correction.'],
      ['Release of information', 'Records requests handled to policy.'],
      ['Privacy compliance support', 'Processes documented against healthcare privacy requirements.'],
    ],
  },
  {
    slug: 'lead-generation',
    title: 'Lead Generation Team',
    group: 'teams',
    source: '/bpo-lead-generation/',
    blurb: 'Targeted prospecting, outreach, qualification and pipeline reporting.',
    intro:
      'An outbound team that builds lists, runs outreach and qualifies responses, so your closers only speak to people worth speaking to.',
    h: [
      ['Targeted lead acquisition', 'List building against a defined ideal customer profile.'],
      ['Dedicated outreach', 'Multi-channel outreach sequences run consistently.'],
      ['Advanced data analytics', 'Response and conversion analysis by segment.'],
      ['Performance tracking', 'Pipeline contribution reported weekly.'],
    ],
  },
  {
    slug: 'creative-services',
    title: 'Creative Services Team',
    group: 'teams',
    source: '/bpo-creative-services/',
    blurb: 'Dedicated design, copy and production capacity on retainer.',
    intro:
      'A creative team you can brief daily: design, copy and production output at a predictable monthly cost rather than per project.',
    h: [
      ['Graphic design capacity', 'Marketing, social and print design production.'],
      ['Copywriting', 'Web, campaign and product copy.'],
      ['Production work', 'Resizing, versioning and template population at volume.'],
      ['Brand consistency', 'Work produced against your brand guidelines.'],
    ],
  },
  {
    slug: 'order-processing',
    title: 'Order Processing Team',
    group: 'teams',
    source: '/bpo-order-processing/',
    blurb: 'Order entry, validation, exception handling and customer updates.',
    intro:
      'Order processing handled accurately and on time, including the exceptions that take up most of the effort.',
    h: [
      ['Order entry and validation', 'Capture and verification across channels.'],
      ['Exception handling', 'Stock, pricing and address issues resolved before dispatch.'],
      ['Customer updates', 'Proactive status communication.'],
      ['Reporting', 'Volume, cycle time and error reporting.'],
    ],
  },
  {
    slug: 'contact-centre',
    title: 'Contact Centre Team',
    group: 'teams',
    source: '/bpo-contact-counter/',
    blurb: 'Inbound and outbound contact handling across voice, chat and email.',
    intro:
      'A managed contact team covering voice, chat and email, with scripting, quality monitoring and service-level reporting.',
    h: [
      ['Multichannel coverage', 'Voice, email, chat and social messaging.'],
      ['Quality monitoring', 'Call and ticket review against agreed standards.'],
      ['Service-level reporting', 'Response and resolution times reported.'],
      ['Scalable staffing', 'Headcount adjusted for seasonal volume.'],
    ],
  },
  {
    slug: 'digital-marketing-team',
    title: 'Digital Marketing Team',
    group: 'teams',
    source: '/bpo-digital-marketing/',
    blurb: 'A dedicated offshore marketing team running campaigns end to end.',
    intro:
      'An embedded marketing team rather than an agency retainer: your strategy, their execution capacity, reporting into your marketing lead.',
    h: [
      ['Comprehensive campaigns', 'Campaign build and execution across channels.'],
      ['Dedicated resources', 'Named team members working only on your account.'],
      ['Advanced data analytics', 'Performance analysis and reporting.'],
      ['Collaborative growth', 'Working inside your tools and planning cycles.'],
    ],
  },
  {
    slug: 'it-operations',
    title: 'IT Operations Team',
    group: 'teams',
    source: '/bpo-it-technologies-information/',
    blurb: 'Skilled IT personnel, 24/7 technical support and tailored IT strategy.',
    intro:
      'An offshore IT operations team providing support coverage, systems administration and additional technical capacity.',
    h: [
      ['Skilled IT personnel', 'Technicians and engineers matched to your stack.'],
      ['24/7 technical support', 'Round-the-clock coverage across time zones.'],
      ['Tailored IT strategies', 'Support model designed around your systems.'],
      ['Current technology solutions', 'Tooling and automation applied to support work.'],
    ],
  },
  {
    slug: 'why-outsource',
    title: 'Why Outsource',
    group: 'teams',
    source: '/bpo-why-outsource/',
    blurb: 'What BPO is, what it costs you, and what it gives back.',
    intro:
      'Outsourcing non-core tasks frees time and reduces cost, but only when the right work is handed over with the right controls. This page explains how we think about that.',
    h: [
      ['Cost reduction', 'Lower operating cost than building equivalent in-house capacity.'],
      ['Enhanced efficiency', 'Standardised processes and higher throughput.'],
      ['Expertise on demand', 'Access to specialists without permanent hires.'],
      ['Reliable support', 'Agreed coverage hours and escalation paths.'],
      ['Tailored solutions', 'Scope shaped around what you actually need handled.'],
      ['Technology', 'Tooling and automation included in the service.'],
    ],
  },

  // -------------------------------------------------------------- Roles
  { slug: 'virtual-assistant', title: 'Virtual Assistant', group: 'roles', source: '/bpo-virtual-assistant/', blurb: 'Calendar, email, research, travel and data support.', intro: 'A trained virtual assistant handling the administrative work that fills your day: scheduling, inbox, research, travel and document preparation.', h: [['Calendar management', 'Scheduling, confirmations and conflict resolution.'], ['Email management', 'Triage, drafting and follow-up tracking.'], ['Research assistance', 'Market, supplier and prospect research.'], ['Travel arrangements', 'Booking and itinerary management.'], ['Data entry and organisation', 'Document and record upkeep.']] },
  { slug: 'customer-service-representative', title: 'Customer Service Representative', group: 'roles', source: '/bpo-customer-service/', blurb: 'Enquiry handling and issue resolution across channels.', intro: 'Customer service specialists trained on your product and tone, handling enquiries and resolving issues across phone, email and chat.', h: [['Issue resolution', 'Ownership of cases through to closure.'], ['Product knowledge', 'Trained on your catalogue and policies.'], ['Multichannel handling', 'Phone, email and chat coverage.'], ['Quality monitoring', 'Reviewed against agreed service standards.']] },
  { slug: 'live-chat-agent', title: 'Live Chat Agent', group: 'roles', source: '/bpo-live-chat-agent/', blurb: 'Real-time website chat coverage and lead capture.', intro: 'Live chat agents who answer immediately, qualify enquiries and hand off genuine opportunities rather than leaving a form behind.', h: [['Real-time response', 'Fast first-reply times during agreed hours.'], ['Lead qualification', 'Enquiries screened before handover.'], ['Macros and knowledge base', 'Consistent answers from maintained responses.'], ['CRM logging', 'Conversations recorded against the customer record.']] },
  { slug: 'technical-support-specialist', title: 'Technical Support Specialist', group: 'roles', source: '/bpo-technical-support-specialist/', blurb: 'Hardware and software troubleshooting with remote assistance.', intro: 'Technical support staff who diagnose properly before escalating, covering hardware, software and remote assistance.', h: [['Troubleshooting', 'Structured diagnosis and resolution.'], ['Hardware and software support', 'Coverage across devices and applications.'], ['Remote assistance', 'Guided and remote-session support.'], ['Escalation handling', 'Clear handover to engineering when needed.']] },
  { slug: 'telemarketing-agent', title: 'Telemarketing Agent', group: 'roles', source: '/bpo-telemarketing/', blurb: 'Outbound calling for appointments, surveys and follow-up.', intro: 'Outbound callers working from your script and list, booking appointments and following up leads with call outcomes logged.', h: [['Appointment setting', 'Calls aimed at booked meetings, not raw dials.'], ['Follow-up calling', 'Systematic follow-up on existing leads.'], ['Survey and research calls', 'Structured data collection.'], ['Call logging', 'Outcomes recorded in your CRM.']] },
  { slug: 'sales-support', title: 'Sales Support Specialist', group: 'roles', source: '/bpo-sales-support/', blurb: 'Quotes, CRM hygiene, proposals and pipeline administration.', intro: 'Sales support that takes administration off your closers: quotes, proposals, CRM updates and pipeline reporting.', h: [['Quote and proposal preparation', 'Documents built from approved templates.'], ['CRM maintenance', 'Records, stages and activity kept current.'], ['Pipeline reporting', 'Weekly pipeline and forecast reporting.'], ['Order handover', 'Clean handover from sale to delivery.']] },
  { slug: 'reservation-booking-agent', title: 'Reservation & Booking Agent', group: 'roles', source: '/bpo-reservation-booking-agent/', blurb: 'Booking handling for travel, hospitality and appointments.', intro: 'Booking agents managing reservations, changes and cancellations across phone, email and online channels.', h: [['Booking management', 'Creation, change and cancellation handling.'], ['Availability coordination', 'Capacity and calendar management.'], ['Customer communication', 'Confirmations and reminders.'], ['System accuracy', 'Bookings reconciled against your platform.']] },
  { slug: 'data-entry-specialist', title: 'Data Entry Specialist', group: 'roles', source: '/bpo-data-entry-specialist/', blurb: 'Accurate, high-volume entry from documents and systems.', intro: 'Data entry specialists working to documented rules, with accuracy sampling rather than assumed quality.', h: [['Volume entry', 'Keying from documents, scans and forms.'], ['Accuracy checks', 'Sampling and error-rate reporting.'], ['Format handling', 'Entry across spreadsheets, CRMs and bespoke systems.'], ['Confidentiality', 'Access controls on sensitive records.']] },
  { slug: 'data-analyst', title: 'Data Analyst', group: 'roles', source: '/bpo-data-analyst-representative/', blurb: 'Reporting, analysis and dashboard support.', intro: 'An analyst who turns your operational data into reporting and answers, working inside your existing tooling.', h: [['Reporting and dashboards', 'Recurring reports and dashboard maintenance.'], ['Analysis', 'Investigating specific business questions.'], ['Data preparation', 'Cleaning and structuring source data.'], ['Metric governance', 'Consistent definitions across reports.']] },
  { slug: 'bookkeeper', title: 'Bookkeeper', group: 'roles', source: '/bpo-book-keeping/', blurb: 'Daily bookkeeping, reconciliation and month-end preparation.', intro: 'A dedicated bookkeeper maintaining your ledgers, reconciling accounts and preparing the month-end pack.', h: [['Transaction recording', 'Daily entry and categorisation.'], ['Bank reconciliation', 'Regular reconciliation across accounts.'], ['Month-end preparation', 'Schedules prepared for your accountant.'], ['Software proficiency', 'Work inside your existing accounting platform.']] },
  { slug: 'accounts-receivable', title: 'Accounts Receivable Specialist', group: 'roles', source: '/bpo-accounts-recievable/', blurb: 'Invoicing, collections and aged debt management.', intro: 'An AR specialist focused on getting invoices out accurately and cash in on time.', h: [['Invoice generation', 'Timely, accurate invoicing.'], ['Collections', 'Structured chasing with documented contact history.'], ['Aged debt reporting', 'Regular ageing analysis and escalation.'], ['Dispute handling', 'Query resolution with the customer.']] },
  { slug: 'admin-payable-services', title: 'Admin & Payable Office Services', group: 'roles', source: '/bpo-admin-and-payable-service/', blurb: 'Accounts payable and general office administration.', intro: 'Combined administrative and accounts payable support: invoice processing, approvals, filing and general office administration.', h: [['Invoice processing', 'Capture, coding and approval routing.'], ['Payment preparation', 'Payment runs prepared for approval.'], ['Supplier queries', 'Statement reconciliation and query handling.'], ['Office administration', 'Filing, records and general support tasks.']] },
  { slug: 'payroll-processor', title: 'Payroll Processor', group: 'roles', source: '/bpo-payroll-processor/', blurb: 'Payroll preparation, records and reporting support.', intro: 'Payroll specialists handling the cycle: timesheets, pay rates, deductions and records, prepared for your approval.', h: [['Payroll preparation', 'Timesheet collection through to pay run preparation.'], ['Records management', 'Pay rates, tax information and benefits records.'], ['Reporting', 'Payroll reports and reconciliations.'], ['Query handling', 'Employee pay queries answered.']],
    review: 'Payroll tax filing and statutory reporting obligations vary by jurisdiction. The reference site does not state which filings are included, so this needs confirming before sale.' },
  { slug: 'medical-billing-specialist', title: 'Medical Billing Specialist', group: 'roles', source: '/bpo-medical-billing-specialist/', blurb: 'Claim preparation, submission, follow-up and denial management.', intro: 'Medical billing specialists working your claim cycle: preparation, submission, follow-up and denial resolution.', h: [['Claim preparation and submission', 'Accurate claims submitted promptly.'], ['Denial management', 'Denials investigated, corrected and resubmitted.'], ['Payment posting', 'Remittance posting and reconciliation.'], ['Patient billing support', 'Statement queries handled.']] },
  { slug: 'medical-coder', title: 'Medical Coder', group: 'roles', source: '/bpo-medical-coder/', blurb: 'Diagnostic and procedural coding for claims and records.', intro: 'Coders assigning accurate diagnostic and procedural codes so claims are paid and records stay auditable.', h: [['Diagnostic and procedural coding', 'Accurate code assignment from clinical documentation.'], ['Coding audits', 'Internal review for accuracy and compliance.'], ['Documentation queries', 'Clarification requests to clinical staff.'], ['Compliance awareness', 'Work aligned to current coding standards.']] },
  { slug: 'medical-transcriptionist', title: 'Medical Transcriptionist', group: 'roles', source: '/bpo-medical-transcriptionist/', blurb: 'Accurate transcription of dictated clinical documentation.', intro: 'Transcriptionists converting voice-recorded medical reports into accurate written documentation within agreed turnaround times.', h: [['Clinical transcription', 'Dictation converted to structured documentation.'], ['Turnaround commitments', 'Agreed delivery windows.'], ['Terminology accuracy', 'Trained in clinical vocabulary.'], ['Confidentiality', 'Controlled handling of patient information.']] },
  { slug: 'seo-specialist', title: 'SEO Specialist', group: 'roles', source: '/bpo-seo-specialist/', blurb: 'Dedicated on-page, technical and content SEO capacity.', intro: 'A dedicated SEO specialist working your roadmap: technical fixes, on-page optimisation and content briefs.', h: [['Technical SEO', 'Crawl, indexing and performance work.'], ['On-page optimisation', 'Metadata, structure and internal linking.'], ['Content briefs', 'Keyword-led briefs for writers.'], ['Reporting', 'Ranking, traffic and conversion reporting.']] },
  { slug: 'sem-specialist', title: 'SEM Specialist', group: 'roles', source: '/bpo-sem-specialist/', blurb: 'Paid search campaign build, management and optimisation.', intro: 'A paid search specialist managing campaign structure, keywords, creative and bidding day to day.', h: [['Campaign build', 'Account structure and keyword sets.'], ['Ad copy and testing', 'Creative production and A/B testing.'], ['Bid and budget management', 'Daily optimisation against targets.'], ['Conversion tracking', 'Measurement setup and validation.']] },
  { slug: 'social-media-marketer', title: 'Social Media Marketer', group: 'roles', source: '/bpo-social-media-marketing/', blurb: 'Content planning, publishing and community management.', intro: 'A social media marketer running your channels day to day: calendar, content, publishing and engagement.', h: [['Content calendar', 'Planned, approved publishing schedule.'], ['Content production', 'Copy and basic graphics or short video.'], ['Community management', 'Comment and message handling.'], ['Reporting', 'Engagement and growth reporting.']] },
  { slug: 'digital-marketing-specialist', title: 'Digital Marketing Specialist', group: 'roles', source: '/bpo-digital-marketing-specialist/', blurb: 'Cross-channel campaign execution and reporting.', intro: 'A generalist marketing specialist who can execute across email, social, paid and content under your direction.', h: [['Campaign execution', 'Building and launching campaigns across channels.'], ['Email marketing', 'Template build, segmentation and sends.'], ['Analytics and reporting', 'Performance tracking and reporting.'], ['Content coordination', 'Managing the content calendar and assets.']] },
  { slug: 'copywriter', title: 'Copywriter', group: 'roles', source: '/bpo-copywriting-excellence/', blurb: 'Web, campaign, product and long-form copy.', intro: 'A copywriter briefed on your brand voice, producing web pages, campaign copy, product descriptions and long-form content.', h: [['Web and landing page copy', 'Conversion-focused page copy.'], ['Campaign and ad copy', 'Short-form copy for paid and social.'], ['Product descriptions', 'Catalogue copy at volume.'], ['Long-form content', 'Articles, guides and case studies.']] },
  { slug: 'graphic-designer', title: 'Graphic Designer', group: 'roles', source: '/bpo-graphic-design/', blurb: 'Marketing, social, print and production design capacity.', intro: 'A dedicated designer for day-to-day marketing output: social graphics, ads, decks, print collateral and production work.', h: [['Marketing design', 'Ads, social graphics and campaign assets.'], ['Print collateral', 'Brochures, flyers, cards and signage artwork.'], ['Presentation design', 'Decks built to brand templates.'], ['Production work', 'Resizing and versioning at volume.']] },
  { slug: 'ui-ux-designer', title: 'UI/UX Designer', group: 'roles', source: '/bpo-ui-ux-designer/', blurb: 'Product design capacity: wireframes, prototypes and UI systems.', intro: 'A product designer working in your tools: wireframes, prototypes, interface design and design-system maintenance.', h: [['Wireframes and prototypes', 'Structure and flow before visual design.'], ['Interface design', 'Screen design against a shared system.'], ['Design system upkeep', 'Components and documentation maintained.'], ['Developer handoff', 'Specs and assets prepared for build.']] },
  { slug: 'web-developer', title: 'Web Developer', group: 'roles', source: '/bpo-web-developer/', blurb: 'Front-end and CMS development capacity on your stack.', intro: 'A web developer added to your team for build and maintenance work across front-end and CMS platforms.', h: [['Front-end development', 'Responsive, accessible page build.'], ['CMS development', 'Theme, template and plugin work.'], ['Maintenance', 'Updates, fixes and performance work.'], ['Integration', 'Forms, tracking and third-party tools.']] },
  { slug: 'software-developer', title: 'Software Developer', group: 'roles', source: '/bpo-software-developer/', blurb: 'Application development capacity across common stacks.', intro: 'An application developer joining your team for feature delivery, integration work and maintenance.', h: [['Feature development', 'Delivery against your backlog.'], ['Integration work', 'APIs and system-to-system connections.'], ['Code review participation', 'Working within your review and release process.'], ['Maintenance and support', 'Bug fixing and technical debt reduction.']] },
  { slug: 'qa-specialist', title: 'QA Specialist', group: 'roles', source: '/bpo-qa-specialist/', blurb: 'Manual and automated testing across releases.', intro: 'A QA specialist building test coverage and running it consistently, so releases stop breaking things quietly.', h: [['Test planning', 'Test cases mapped to requirements.'], ['Manual testing', 'Functional, regression and cross-device testing.'], ['Automation', 'Automated coverage for critical paths.'], ['Defect reporting', 'Clear, reproducible defect reports.']] },
  { slug: 'salesforce-admin-developer', title: 'Salesforce Admin / Developer', group: 'roles', source: '/bpo-salesforce-admin-developer/', blurb: 'Salesforce administration, configuration and development.', intro: 'A Salesforce specialist to own your org: configuration, automation, reporting and development where configuration runs out.', h: [['Administration', 'Users, permissions and data management.'], ['Configuration and automation', 'Flows, validation and process automation.'], ['Development', 'Custom development where needed.'], ['Reporting and dashboards', 'Reports built for the business, not the admin.']] },
  { slug: 'project-manager', title: 'Project Manager (PMI Certified)', group: 'roles', source: '/bpo-project-manager/', blurb: 'Certified project management capacity for delivery programmes.', intro: 'A project manager to run delivery: plan, risks, dependencies, reporting and the discipline to keep all four current.', h: [['Planning and scheduling', 'Plans with real dependencies and critical path.'], ['Risk and issue management', 'Tracked, owned and escalated.'], ['Stakeholder reporting', 'Regular, honest status reporting.'], ['Delivery governance', 'Change control and acceptance management.']],
    review: 'The reference site advertises this role as PMI certified. Certification status of assigned staff should be confirmed per engagement.' },
  { slug: 'talent-acquisition-specialist', title: 'Talent Acquisition Specialist', group: 'roles', source: '/bpo-talent-acquisition-specialist/', blurb: 'Sourcing, screening and interview coordination.', intro: 'A recruiter working your open roles: sourcing candidates, screening, coordinating interviews and keeping the pipeline moving.', h: [['Sourcing', 'Active search across channels and boards.'], ['Screening', 'First-stage screening against role criteria.'], ['Interview coordination', 'Scheduling and candidate communication.'], ['Pipeline reporting', 'Funnel metrics per role.']] },

  // ------------------------------------------------------- How it works
  {
    slug: 'how-offshoring-works',
    title: 'How Offshoring Works',
    group: 'how-it-works',
    source: '/bpo-offshoring-business/',
    blurb: 'What business process offshoring is and how the models differ.',
    intro:
      'Offshoring means engaging a third-party provider in a different location to handle part of your operation. It is one form of business process outsourcing, and the location model matters as much as the provider.',
    h: [
      ['Offshore outsourcing', 'A provider in a distant country, usually chosen for cost and talent availability.'],
      ['Nearshore outsourcing', 'A provider in a nearby country, trading some cost saving for closer time zones.'],
      ['Onshore outsourcing', 'A provider in your own country, where regulation or language makes that necessary.'],
    ],
    points: [
      'Increased cost savings compared with equivalent in-house hiring',
      'Access to a broader talent pool',
      'Extended operating hours across time zones',
      'Capacity that flexes with demand',
    ],
  },
  {
    slug: 'is-bpo-for-you',
    title: 'Is BPO For You?',
    group: 'how-it-works',
    source: '/bpo-is-it-for-you/',
    blurb: 'An honest look at when outsourcing helps and when it does not.',
    intro:
      'BPO means delegating specific business functions to an external provider. It works well for defined, repeatable processes, and badly for work that depends on undocumented internal judgement.',
    h: [
      ['Cost efficiency', 'Lower operational cost and the ability to scale headcount up or down.'],
      ['Focus on core activities', 'Internal teams stay on the work that differentiates you.'],
      ['Access to expertise', 'Specialist knowledge and technology without permanent hires.'],
      ['Improved productivity', 'Streamlined, documented operations.'],
    ],
    points: [
      'Best fit: defined, documented, repeatable processes with measurable outputs',
      'Poor fit: work that relies on undocumented judgement or constant in-person context',
    ],
  },
  {
    slug: 'keys-to-success',
    title: 'The Key to Success',
    group: 'how-it-works',
    source: '/bpo-key-to-success/',
    blurb: 'Define objectives, pick the right partner, measure the right things.',
    intro:
      'Outsourcing engagements fail for predictable reasons: vague objectives, the wrong partner, and no measurement. Getting those three right is most of the work.',
    h: [
      ['Define your objectives', 'Decide whether you are reducing cost, adding capacity, improving customer experience or freeing internal focus.'],
      ['Reduce operational and labour costs', 'A cost objective implies different scope and metrics than a quality objective.'],
      ['Focus on core products and services', 'Hand over the work that does not differentiate you.'],
      ['Augment staffing', 'Use outsourcing to flex capacity rather than replace a function wholesale.'],
      ['Improve customer experience', 'Extended hours and faster response as the target outcome.'],
      ['Choose the right partner', 'Capability, communication and cultural fit, assessed before contracting.'],
    ],
    review: 'The reference page cites a global BPO market value of $232.32 billion without naming the source or year. The figure is noted here as a source claim rather than restated as fact.',
  },
  {
    slug: 'offshore-staffing',
    title: 'Offshore Staffing',
    group: 'how-it-works',
    source: '/bpo-offshore-staffing/',
    blurb: 'Three staffing models: individuals, teams and full programmes.',
    intro:
      'Offshore staffing reduces personnel and infrastructure cost by sourcing skilled people overseas. We offer it at three scales depending on how much you need to hand over.',
    h: [
      ['Offshore individuals', 'One specialist added to your existing team.'],
      ['Offshore teams', 'A managed group covering a function, with a team lead.'],
      ['Offshore programmes', 'A larger multi-team operation with its own management layer.'],
    ],
    points: [
      'Access to a broader talent pool at lower cost',
      'Equipped infrastructure provided as part of the service',
      'Follow-the-sun coverage across time zones',
    ],
  },

  // ----------------------------------------------------------- Pricing
  {
    slug: 'seat-leasing',
    title: 'Seat Leasing',
    group: 'pricing',
    source: '/bpo-seat-leasing/',
    blurb: 'Lease fully equipped office seats for your own offshore team.',
    intro:
      'Seat leasing suits companies that want their own offshore staff without signing a building lease. You get equipped workstations, connectivity and facilities; you keep direct control of the team.',
    h: [
      ['Fully equipped seats', 'Workstation, hardware, connectivity and facilities included.'],
      ['Flexible terms', 'Seat counts adjusted as the team grows or contracts.'],
      ['Ready infrastructure', 'No fit-out, procurement or lease negotiation.'],
      ['Optional staffing support', 'Recruitment and HR support available alongside the seats.'],
    ],
    review: 'Seat pricing, minimum terms and included hardware specifications are not published on the reference site and must be quoted per engagement.',
  },
  {
    slug: 'staffing-solutions',
    title: 'Virtual Staffing Solutions',
    group: 'pricing',
    source: '/bpo-staffing-solution/',
    blurb: 'Specialised virtual staffing with a structured hiring process.',
    intro:
      'We connect businesses with English-speaking professionals through a defined hiring process, so you interview a shortlist rather than sort through applications.',
    h: [
      ['Discovery call', 'Role requirements, working hours and success criteria agreed.'],
      ['Global talent search', 'Sourcing against the agreed specification.'],
      ['Profile verification', 'Background and skills verification before shortlisting.'],
      ['Interview and onboarding', 'You interview, we handle onboarding and setup.'],
    ],
    points: ['Flexible pricing models', 'Access to a network of English-speaking professionals'],
  },
  {
    slug: 'hourly-rates',
    title: 'Hourly Rates',
    group: 'pricing',
    source: '/bpo-hour-rates/',
    blurb: 'How hourly engagement pricing works, and what drives the rate.',
    intro:
      'Hourly engagement suits variable workloads and short projects. The rate depends on the role, the skill level, the coverage hours and the volume committed.',
    h: [
      ['What drives the rate', 'Role seniority, specialist skills, coverage hours and committed volume.'],
      ['When hourly fits', 'Variable workload, pilot engagements and short projects.'],
      ['When monthly fits better', 'Steady full-time workload, where a dedicated seat is cheaper per hour.'],
      ['Quoted per role', 'We quote against a written role specification.'],
    ],
    review: 'The reference page presents US call-centre wage ranges sourced from ZipRecruiter (quoted as roughly $10.82 to $25.00 per hour) rather than Digaptics rates. Third-party salary data is not reproduced here as our pricing; current rates must be quoted directly.',
  },
];
