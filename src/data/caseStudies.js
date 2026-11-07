/**
 * Case studies.
 *
 * The reference site lists two case studies ("The Strategy" and "Solving
 * Problem") on /case-studies/, but both detail pages contain only placeholder
 * text, and the headline statistics on the homepage are placeholder counters set
 * to zero. No numbers are invented here: entries with no published detail are
 * marked `detailPending` and rendered as such.
 *
 * The Halal Caters page on the reference site does describe a real engagement,
 * so it is published as a case study with the scope the source states and no
 * added metrics.
 */
export const caseStudies = [
  {
    slug: 'halal-caters',
    title: 'Halal Caters',
    client: 'Halal Caters',
    source: '/halal-caters/',
    detailPending: false,
    summary:
      'A full digital rebuild for a catering brand: new website, plus ongoing digital marketing and social media management.',
    scope: ['Website design and build', 'Digital marketing', 'Social media management'],
    services: [
      { label: 'Custom Web Development', to: '/web-app-development/custom-web-development' },
      { label: 'Social Media Management', to: '/marketing/social-media-management' },
      { label: 'Food Industry', to: '/industries/food-industry' },
    ],
    context:
      'Halal Caters needed a digital presence that matched the quality of the catering operation behind it, and a marketing programme to keep it active rather than static.',
    approach: [
      'Designed and built a new website for the brand',
      'Took on digital marketing delivery across channels',
      'Ran social media strategy and day-to-day channel management',
    ],
    outcomeStatement:
      'The reference site describes improved online presence, brand visibility and customer engagement as the result of this work. No figures are published, so none are quoted here.',
    image: '/images/gen/case-studies.jpg',
    imageAlt: 'Two people reviewing printed project results on a glass table',
  },
  {
    slug: 'the-strategy',
    title: 'The Strategy',
    client: null,
    source: '/case-study/the-strategy/',
    detailPending: true,
    summary:
      'A named case study on the reference site. The published page contains placeholder copy only, so the detail still needs to be supplied.',
    scope: [],
    services: [],
    context: null,
    approach: [],
    outcomeStatement: null,
    image: '/images/gen/process.jpg',
    imageAlt: 'Index cards arranged in columns on a glass wall during planning',
  },
  {
    slug: 'solving-problem',
    title: 'Solving Problem',
    client: null,
    source: '/case-study/solving-problem/',
    detailPending: true,
    summary:
      'A named case study on the reference site. The published page contains placeholder copy only, so the detail still needs to be supplied.',
    scope: [],
    services: [],
    context: null,
    approach: [],
    outcomeStatement: null,
    image: '/images/gen/software.jpg',
    imageAlt: 'Engineers working through a problem on a whiteboard',
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((c) => c.slug === slug) ?? null;
}

/**
 * Awards and recognitions listed on the reference site homepage. Reproduced as
 * attributed claims; none have been independently verified.
 */
export const recognitions = [
  { title: 'Top SEO Agency 2019', body: 'Recognised by UpCity as a top digital agency.' },
  { title: 'Top React Native Developers Chicago 2020', body: 'Recognised by Clutch as a top software services company.' },
  { title: 'Top Mobile App Development Company 2021', body: 'Recognised by GoodFirms as a top mobile app development company.' },
  { title: 'Best Social Media Marketing Agency 2021', body: 'Recognised by DesignRush as a best social media marketing company.' },
];
