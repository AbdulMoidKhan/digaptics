/**
 * Blog articles.
 *
 * The reference site (/blogs/) publishes short abstracts only: each post is a
 * single standfirst paragraph with no body, and most topics appear twice under
 * duplicate slugs. The twelve unique topics are reproduced here as one article
 * each, with the body written for this site. Author names are omitted because
 * the reference site credits every post to "Mike Hardson", which appears to be
 * demo content rather than a real author.
 */
export const blogCategories = [
  { id: 'data-entry', label: 'Data Entry' },
  { id: 'finance-accounting', label: 'Finance & Accounting' },
  { id: 'digital-marketing', label: 'Digital Marketing' },
  { id: 'bpo', label: 'BPO' },
  { id: 'business', label: 'Business' },
];

export const articles = [
  {
    slug: 'automate-invoice-processing',
    title: 'How to automate invoice processing',
    categoryId: 'data-entry',
    publishedAt: '2024-12-26',
    readingMinutes: 6,
    featured: true,
    summary:
      'Manual invoice processing is slow, error-prone and expensive. Here is the order to automate it in, from capture through to payment.',
    body: [
      { type: 'paragraph', text: 'Most accounts payable teams do not have an invoice problem. They have a handling problem: the same document gets touched five or six times before anyone pays it. Automation is worth doing because it removes handling, not because it removes people.' },
      { type: 'heading', text: 'Start with capture' },
      { type: 'paragraph', text: 'Digitise invoices at the point they arrive. A dedicated inbox and a scanner for anything that still comes on paper is enough to begin. Optical character recognition then extracts the fields you care about: supplier, invoice number, date, line items and total.' },
      { type: 'heading', text: 'Then fix the approval path' },
      { type: 'paragraph', text: 'Automation fails when an approval rule is undocumented. Write down who approves what, at which value, and what happens when they are away. Only then encode it. A workflow tool makes a good process fast and a bad process fast.' },
      { type: 'list', items: ['Digitise invoices at arrival rather than at month end', 'Use OCR to extract fields, with a review queue for low-confidence reads', 'Match invoices against purchase orders and receipts automatically', 'Route approvals by value and cost centre, with explicit deputies', 'Push approved invoices into the accounting system without re-keying'] },
      { type: 'heading', text: 'Measure the right things' },
      { type: 'paragraph', text: 'Track cost per invoice, cycle time from receipt to approval, and the percentage of invoices processed without human touch. Those three numbers tell you whether the automation is actually paying for itself.' },
      { type: 'paragraph', text: 'If you would rather not build this internally, our finance and accounting teams run the process for you, including the exception handling that absorbs most of the effort.' },
    ],
  },
  {
    slug: 'cut-invoice-processing-costs',
    title: 'Six ways to start cutting invoice processing costs',
    categoryId: 'data-entry',
    publishedAt: '2024-12-26',
    readingMinutes: 5,
    summary:
      'Paper-based accounts payable quietly drains labour hours and creates error cost. Six practical changes that reduce both.',
    body: [
      { type: 'paragraph', text: 'Invoice processing rarely appears as a line item, which is exactly why it goes unexamined. The cost sits in labour hours, correction work, late payment penalties and missed discounts.' },
      { type: 'list', items: ['Automate repetitive steps: capture, matching and coding before approval', 'Eliminate paper, including internal printing for approval signatures', 'Standardise supplier submission so invoices arrive in a consistent format', 'Improve vendor communication so queries are resolved once, not repeatedly', 'Take early payment discounts, which requires a reliable approval cycle', 'Report on exceptions by supplier so the worst offenders get fixed'] },
      { type: 'heading', text: 'Do them in that order' },
      { type: 'paragraph', text: 'The order matters. Chasing early payment discounts while approvals still take eleven days produces nothing. Fix the cycle time first, then harvest the discount.' },
      { type: 'paragraph', text: 'None of this requires a single large project. Each change is independently useful, which also means each one is independently measurable.' },
    ],
  },
  {
    slug: 'ocr-invoice-processing-guide',
    title: 'OCR invoice processing: a practical guide',
    categoryId: 'data-entry',
    publishedAt: '2024-12-26',
    readingMinutes: 6,
    summary:
      'How optical character recognition turns paper and PDF invoices into structured data, and what to plan for before rolling it out.',
    body: [
      { type: 'paragraph', text: 'Optical character recognition converts paper and digital invoices into structured, searchable data. Instead of someone reading a PDF and typing numbers into a form, the software reads the document and populates the fields.' },
      { type: 'heading', text: 'How it works in practice' },
      { type: 'paragraph', text: 'The engine identifies text regions, recognises characters, then maps them to fields using templates or a trained model. Modern tools return a confidence score per field, which is the part most implementations ignore and then regret.' },
      { type: 'heading', text: 'Plan for the exceptions' },
      { type: 'paragraph', text: 'Expect a proportion of invoices to need human review: poor scans, unusual layouts, handwritten additions. Design the review queue from day one and staff it. A system that is 92% automated and has a clean queue for the rest beats one that claims 100% and silently mis-codes.' },
      { type: 'list', items: ['Agree the fields you actually need before configuring anything', 'Set a confidence threshold that routes uncertain reads to review', 'Validate against purchase orders and supplier master data', 'Keep the original document attached to the record for audit', 'Review accuracy monthly by supplier, not just in aggregate'] },
    ],
  },
  {
    slug: 'why-ocr-invoice-software-works',
    title: 'Why invoice scanning (OCR) software is effective',
    categoryId: 'data-entry',
    publishedAt: '2024-12-26',
    readingMinutes: 4,
    summary:
      'OCR works for accounts payable because invoices are structurally repetitive. That is also where its limits are.',
    body: [
      { type: 'paragraph', text: 'Invoice scanning software has become standard in accounts payable for a simple reason: invoices are repetitive documents. The same fields appear on nearly every one, which is exactly the condition machine extraction handles well.' },
      { type: 'heading', text: 'What you actually gain' },
      { type: 'list', items: ['Manual data entry removed for the majority of invoices', 'Fewer transcription errors, because nobody is retyping totals', 'Shorter approval cycles, because the data arrives complete', 'Better cash flow visibility, because liabilities are recorded sooner', 'Searchable invoice records instead of PDF archives'] },
      { type: 'heading', text: 'Where it still needs people' },
      { type: 'paragraph', text: 'Poor-quality scans, non-standard layouts and supplier-specific quirks still need a human. So does anything involving judgement: duplicate detection across slightly different references, or a credit note that does not match anything. Treat OCR as the first 90% rather than the whole job.' },
    ],
  },
  {
    slug: 'accounts-payable-outsourcing-guide',
    title: 'Accounts payable outsourcing: a complete guide',
    categoryId: 'finance-accounting',
    publishedAt: '2024-12-26',
    readingMinutes: 7,
    featured: true,
    summary:
      'What AP outsourcing covers, the real advantages and risks, and how to assess a provider before you hand over the ledger.',
    body: [
      { type: 'paragraph', text: 'Handling accounts payable in-house gets harder as invoice volume grows. AP outsourcing delegates invoice processing, approvals coordination and payment preparation to a specialist provider, usually at lower cost per invoice than internal headcount.' },
      { type: 'heading', text: 'What is typically included' },
      { type: 'list', items: ['Invoice capture, coding and data entry', 'Purchase order and receipt matching', 'Approval routing and chasing', 'Payment run preparation', 'Supplier statement reconciliation and query handling', 'Reporting on cycle time, exceptions and aged payables'] },
      { type: 'heading', text: 'The advantages' },
      { type: 'paragraph', text: 'Lower processing cost, predictable turnaround, and internal finance staff freed for analysis rather than data entry. Capacity also flexes: month-end and year-end peaks stop requiring overtime.' },
      { type: 'heading', text: 'The risks worth naming' },
      { type: 'paragraph', text: 'Loss of visibility, dependence on the provider, and control weakening around payment authorisation. All three are manageable, but only if you keep payment approval internal, insist on your own system of record, and agree reporting before go-live.' },
      { type: 'heading', text: 'Choosing a partner' },
      { type: 'paragraph', text: 'Ask for the error rate, not the headline cost. Ask who handles exceptions and where. Ask what happens in the first month, when supplier data is always messier than anyone expects. A provider who talks honestly about that transition is usually the one who has done it before.' },
    ],
  },
  {
    slug: 'ai-in-loan-processing-automation',
    title: 'The use of AI in loan processing automation',
    categoryId: 'finance-accounting',
    publishedAt: '2024-12-26',
    readingMinutes: 6,
    summary:
      'Where AI genuinely speeds up lending workflows, from application review to fraud detection, and where human decisions must stay.',
    body: [
      { type: 'paragraph', text: 'Lending is document-heavy, deadline-driven and heavily regulated, which makes it an obvious candidate for automation and a risky place to automate carelessly.' },
      { type: 'heading', text: 'Where it works well' },
      { type: 'list', items: ['Application intake: extracting and validating data from submitted documents', 'Document verification: checking completeness and flagging inconsistencies', 'Credit assessment support: assembling the evidence a decision needs', 'Fraud detection: pattern recognition across applications and histories', 'Status communication: keeping borrowers informed without manual chasing'] },
      { type: 'heading', text: 'What this changes for borrowers' },
      { type: 'paragraph', text: 'Mostly turnaround time. When intake and verification are automated, the queue in front of a human underwriter is shorter and better prepared, so decisions come back in days rather than weeks.' },
      { type: 'heading', text: 'Where humans stay' },
      { type: 'paragraph', text: 'Adverse decisions, edge cases and anything that must be explained to a regulator or a customer. Automation should make the decision faster to reach and easier to evidence, not harder to justify.' },
    ],
  },
  {
    slug: 'salesforce-crm-key-benefits',
    title: 'Ten benefits of Salesforce CRM, honestly assessed',
    categoryId: 'finance-accounting',
    publishedAt: '2024-12-26',
    readingMinutes: 7,
    summary:
      'Salesforce delivers real advantages, but only when it is configured around your sales process. The ten benefits that actually show up.',
    body: [
      { type: 'paragraph', text: 'Salesforce is a cloud CRM platform that can run sales, service and marketing operations from one data set. Its benefits are real, and almost all of them depend on configuration quality rather than licence tier.' },
      { type: 'list', items: ['One customer record shared across sales, service and marketing', 'Pipeline visibility that makes forecasting defensible', 'Automation of repetitive administrative steps', 'Better data management, with validation enforced at entry', 'Reporting and dashboards built without developer help', 'Mobile access for field and remote teams', 'An integration ecosystem covering most common business tools', 'Scalability as teams, regions and products are added', 'Service case management tied to the same customer record', 'Audit trails and permission control for regulated environments'] },
      { type: 'heading', text: 'The condition attached' },
      { type: 'paragraph', text: 'Every item on that list assumes the org reflects how you actually sell. Salesforce implementations fail for organisational reasons: fields nobody fills in, stages nobody agrees on, reports nobody trusts. Fix the process definition first and the platform follows.' },
    ],
  },
  {
    slug: 'what-is-a-bpo-company',
    title: 'What is a BPO company?',
    categoryId: 'bpo',
    publishedAt: '2024-12-26',
    readingMinutes: 5,
    summary:
      'A plain explanation of business process outsourcing: what providers do, which industries use them, and the trade-offs involved.',
    body: [
      { type: 'paragraph', text: 'A BPO (business process outsourcing) company is a third-party provider that runs specific business operations on behalf of another organisation. The work ranges from customer support and data entry through to finance, HR and IT functions.' },
      { type: 'heading', text: 'What they typically handle' },
      { type: 'list', items: ['Customer contact: voice, email, chat and social', 'Back office: data entry, document processing and records', 'Finance and accounting: bookkeeping, payables and receivables', 'HR and recruitment: sourcing, screening and administration', 'IT operations: help desk, monitoring and support', 'Specialist functions such as medical billing, coding and transcription'] },
      { type: 'heading', text: 'Who uses them' },
      { type: 'paragraph', text: 'Healthcare, insurance, financial services, logistics, retail and ecommerce are the heaviest users, mostly because all of them run high volumes of repeatable, documentable work.' },
      { type: 'heading', text: 'The trade-offs' },
      { type: 'paragraph', text: 'Lower cost and faster scaling on one side; less direct control, dependence on a provider, and the need for genuinely documented processes on the other. Outsourcing an undocumented process does not simplify it, it just moves the confusion.' },
    ],
  },
  {
    slug: 'hiring-the-best-candidate',
    title: 'Practical ways to hire a better candidate',
    categoryId: 'business',
    publishedAt: '2024-10-16',
    readingMinutes: 5,
    summary:
      'Hiring well is a process problem, not a luck problem. Clear descriptions, structured interviews and honest assessment of fit.',
    body: [
      { type: 'paragraph', text: 'Most bad hires trace back to a vague job description and an unstructured interview. Both are fixable before you ever see a CV.' },
      { type: 'heading', text: 'Write the role, not the wish list' },
      { type: 'paragraph', text: 'Describe what the person will actually do in the first ninety days and how success will be judged. That single change improves applicant quality more than any sourcing tactic.' },
      { type: 'heading', text: 'Structure the interview' },
      { type: 'list', items: ['Ask every candidate the same core questions, in the same order', 'Score answers against defined criteria rather than general impression', 'Include a realistic work sample rather than a puzzle', 'Involve the people the hire will work with daily', 'Check cultural fit against stated behaviours, not personal similarity'] },
      { type: 'heading', text: 'Use technology for throughput, not judgement' },
      { type: 'paragraph', text: 'Applicant tracking and screening tools remove administrative drag. They should not be making the decision, and candidates can usually tell when they are.' },
    ],
  },
  {
    slug: 'measure-influencer-marketing-success',
    title: 'How to measure influencer marketing success',
    categoryId: 'digital-marketing',
    publishedAt: '2024-06-14',
    readingMinutes: 6,
    featured: true,
    summary:
      'Likes are not a result. The KPIs that actually tell you whether an influencer campaign worked, matched to campaign objective.',
    body: [
      { type: 'paragraph', text: 'Launching an influencer campaign is the easy part. Knowing whether it worked requires deciding, before launch, what result you are buying.' },
      { type: 'heading', text: 'Match the metric to the objective' },
      { type: 'list', items: ['Brand awareness: reach, impressions, share of voice, branded search volume', 'Engagement: engagement rate per post, saves, shares, comment sentiment', 'Traffic: sessions from tracked links, landing page engagement, bounce behaviour', 'Conversion: tracked sales, discount code redemptions, cost per acquisition', 'Retention: repeat purchase rate among customers acquired through the campaign'] },
      { type: 'heading', text: 'Instrument before you launch' },
      { type: 'paragraph', text: 'Unique links, unique codes and agreed reporting access from each creator. Retrofitting measurement after a campaign has run produces guesses, not analysis.' },
      { type: 'heading', text: 'Compare against something' },
      { type: 'paragraph', text: 'A result only means something next to an alternative: your paid social cost per acquisition, your previous campaign, or a holdout period. Without a comparison, every campaign looks like a success.' },
    ],
  },
  {
    slug: 'benefits-of-micro-influencers',
    title: 'The benefits of working with micro-influencers',
    categoryId: 'digital-marketing',
    publishedAt: '2024-06-14',
    readingMinutes: 5,
    summary:
      'Creators with roughly 1,000 to 100,000 followers often outperform larger accounts on engagement, targeting and cost.',
    body: [
      { type: 'paragraph', text: 'In influencer marketing, bigger is not automatically better. Micro-influencers, typically defined as creators with between 1,000 and 100,000 followers, give brands access to engaged niche audiences.' },
      { type: 'heading', text: 'Why they work' },
      { type: 'list', items: ['Higher engagement rates than most large accounts', 'Audiences that are genuinely niche, so targeting is sharper', 'Lower cost per partnership, which makes testing affordable', 'More credible recommendations, because the account feels personal', 'Willingness to produce content you can also use in paid media'] },
      { type: 'heading', text: 'How to run it well' },
      { type: 'paragraph', text: 'Work with several creators rather than one, brief them on the message but not the wording, and agree usage rights upfront so strong content can be amplified. The portfolio approach is what makes micro-influencer programmes reliable.' },
    ],
  },
  {
    slug: 'influencer-marketing-vs-traditional-advertising',
    title: 'Influencer marketing vs traditional advertising',
    categoryId: 'digital-marketing',
    publishedAt: '2024-05-13',
    readingMinutes: 6,
    summary:
      'Cost, reach, credibility and measurability compared, so you can decide which belongs in your plan and in what proportion.',
    body: [
      { type: 'paragraph', text: 'Traditional advertising, television, print and outdoor, dominated marketing for decades. Influencer marketing has become a credible alternative, but the two differ in ways that matter to planning.' },
      { type: 'heading', text: 'Cost' },
      { type: 'paragraph', text: 'Traditional media carries high production and placement costs with a high minimum commitment. Influencer campaigns start small, which makes them testable, though the admin cost per partnership is real.' },
      { type: 'heading', text: 'Reach and targeting' },
      { type: 'paragraph', text: 'Traditional channels still deliver mass reach efficiently. Influencer marketing trades breadth for precision: smaller audiences, much better aligned to a specific interest.' },
      { type: 'heading', text: 'Credibility' },
      { type: 'paragraph', text: 'Audiences discount advertising and trust people. That is the central advantage of creator-led marketing, and it collapses the moment the partnership feels bought rather than genuine.' },
      { type: 'heading', text: 'Measurability' },
      { type: 'paragraph', text: 'Digital measurement is better but noisier. Traditional media measurement is coarse but stable. Most brands end up running both, using broad channels for awareness and creators for consideration.' },
    ],
  },
];

export const featuredArticles = articles.filter((a) => a.featured);

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug) ?? null;
}

export function getCategoryLabel(id) {
  return blogCategories.find((c) => c.id === id)?.label ?? 'Article';
}
