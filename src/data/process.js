/** Short five-step process used on the home and services pages. */
export const processSteps = [
  {
    name: 'Discover',
    description:
      'Understand the business, the people involved, and what success looks like before proposing anything.',
  },
  {
    name: 'Plan',
    description: 'Agree on scope, priorities, and a phased plan with clear deliverables per phase.',
  },
  {
    name: 'Design',
    description: 'Shape structure, interface, and visual direction, reviewed before build starts.',
  },
  {
    name: 'Build',
    description: 'Deliver in working increments you can see and use on a staging environment.',
  },
  {
    name: 'Improve',
    description: 'Launch, measure what happens, and keep improving against a prioritized backlog.',
  },
];

/** Detailed phases used on the /process page. */
export const processPhases = [
  {
    id: 'conversation',
    number: '01',
    title: 'Initial conversation',
    summary:
      'A short call to understand what you are trying to do, what already exists, and whether we are the right fit.',
    youBring: [
      'The problem or opportunity in your own words',
      'Any deadlines or fixed constraints',
      'Access to the people who will use the result',
    ],
    weDeliver: [
      'An honest view of whether we can help',
      'Comparable types of work we have done',
      'A recommended next step and rough shape of effort',
    ],
    decisions:
      'You decide whether to move into a paid discovery step. Nothing is committed on either side after this call.',
  },
  {
    id: 'discovery',
    number: '02',
    title: 'Discovery and scope',
    summary:
      'A focused review of the current process, systems, and requirements, ending in a scope you can act on.',
    youBring: [
      'Access to current systems, analytics, and documentation',
      'Time from the people who know the process',
      'Decisions on priorities when trade-offs appear',
    ],
    weDeliver: [
      'Process and systems map',
      'Requirements with acceptance criteria',
      'Prioritized scope split into phases',
      'Risks and open questions documented',
    ],
    decisions:
      'Priorities are set together. Where requirements conflict, we document the trade-off and you make the call.',
  },
  {
    id: 'proposal',
    number: '03',
    title: 'Proposal and planning',
    summary:
      'Scope turns into a plan: phases, deliverables, timeline, assumptions, and what sits outside the agreement.',
    youBring: [
      'Review and feedback on the proposed phasing',
      'Internal approvals and budget confirmation',
      'A named decision-maker for the project',
    ],
    weDeliver: [
      'Phased proposal with deliverables and estimates',
      'Timeline with dependencies and review points',
      'Written assumptions and exclusions',
    ],
    decisions:
      'You approve phase by phase. Anything added later is quoted as a change rather than absorbed silently.',
  },
  {
    id: 'build',
    number: '04',
    title: 'Design and development',
    summary:
      'Work happens in short cycles with visible output: screens to react to, then working software on staging.',
    youBring: [
      'Timely feedback at agreed review points',
      'Content, assets, and access when scheduled',
      'A single channel for requests and decisions',
    ],
    weDeliver: [
      'Design reviews before build on each area',
      'Working increments on a staging environment',
      'Regular progress updates with what changed',
    ],
    decisions:
      'Small implementation choices are ours to make and explain. Anything affecting scope, cost, or timeline comes to you first.',
  },
  {
    id: 'review',
    number: '05',
    title: 'Review and refinement',
    summary:
      'Structured testing with the people who will actually use it, then fixes and adjustments before launch.',
    youBring: [
      'Reviewers from the teams who will use the result',
      'Consolidated feedback in one place',
      'Sign-off on what is required for launch',
    ],
    weDeliver: [
      'Test environment and review guidance',
      'Issue list triaged into must-fix and later',
      'Accessibility, responsive, and performance checks',
    ],
    decisions:
      'We agree together what is a launch blocker and what belongs in the next phase, so the release date stays realistic.',
  },
  {
    id: 'launch',
    number: '06',
    title: 'Launch and support',
    summary:
      'Deployment, handover, and a plan for the period after go-live when real usage surfaces real requirements.',
    youBring: [
      'Production accounts, domains, and approvals',
      'A plan for communicating the change internally',
      'An owner for ongoing decisions',
    ],
    weDeliver: [
      'Production deployment and launch checklist',
      'Documentation and handover walkthrough',
      'Support arrangement and improvement backlog',
    ],
    decisions:
      'You choose the level of ongoing involvement: full handover, scheduled support, or continuous improvement work.',
  },
];

export const processFaqs = [
  {
    q: 'How involved does our team need to be?',
    a: 'Most of the demand lands in discovery and at review points. Expect a couple of hours a week from a decision-maker during an active phase, more during discovery.',
  },
  {
    q: 'What if our priorities change mid-project?',
    a: 'Phases are deliberately short so change is manageable. We re-plan the remaining scope, show the effect on timeline and cost, and you decide what to do.',
  },
  {
    q: 'Do you work with our in-house developers?',
    a: 'Yes. We can lead, support, or cover a specific area, with agreed code standards, review process, and repository access.',
  },
  {
    q: 'How do you communicate during a project?',
    a: 'One shared channel for day-to-day questions, a tracked backlog for work items, and a written update at each review point so progress is never guesswork.',
  },
  {
    q: 'What happens if we want to stop?',
    a: 'Work is phased, so you can stop at the end of a phase with everything produced so far handed over: code, designs, documentation, and access.',
  },
];
