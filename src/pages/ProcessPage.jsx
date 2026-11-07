import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import useReveal from '../hooks/useReveal.js';
import { processFaqs, processPhases } from '../data/process.js';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import FaqAccordion from '../components/ui/FaqAccordion.jsx';
import CtaBand from '../components/ui/CtaBand.jsx';
import './ProcessPage.css';

export default function ProcessPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Digaptics Project Delivery Methodology',
    description:
      'Step-by-step project delivery methodology used by Digaptics to deliver software, web platforms, mobile apps, and digital growth services.',
    step: processPhases.map((phase, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: phase.title,
      text: phase.summary,
    })),
  };

  useDocumentMeta({
    title: 'Our Project Delivery Process | Methodology & Milestones',
    description:
      'Discover how Digaptics delivers digital initiatives: initial consultation, in-depth discovery, transparent proposal, agile design and build, testing, and continuous support.',
    path: '/process',
    structuredData,
  });
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Delivery Methodology"
        title="A clear path from question to launch."
        lede="Six phases give a project its structure: understand the need, agree on the scope, create the work, review it, and plan the next step. Details and timing are agreed for each engagement."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Process' }]}
        actions={
          <>
            <Link to="/contact" className="btn">
              Start a conversation
            </Link>
            <a href="#phase-faq" className="btn btn--secondary">
              Review Process FAQs
            </a>
          </>
        }
        aside={
          <nav className="panel phase-jump" aria-label="Project phases">
            <p className="eyebrow">Six Structured Phases</p>
            <ol className="phase-jump__list">
              {processPhases.map((phase) => (
                <li key={phase.id}>
                  <a href={'#' + phase.id}>
                    <span>{phase.number}</span>
                    {phase.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        }
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="The Project Lifecycle"
            title="The right conversations at the right stage."
            lede="See what each phase involves, what your team contributes, and what is reviewed before moving forward."
          />

          <div className="phases">
            {processPhases.map((phase) => (
              <article className="phase reveal" id={phase.id} key={phase.id}>
                <div className="phase__head">
                  <span className="phase__number" aria-hidden="true">
                    {phase.number}
                  </span>
                  <div>
                    <h3>{phase.title}</h3>
                    <p className="phase__summary">{phase.summary}</p>
                  </div>
                </div>

                <div className="phase__cols">
                  <div>
                    <h4 className="phase__col-title">What you bring</h4>
                    <ul className="list-check">
                      {phase.youBring.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="phase__col-title">What we deliver</h4>
                    <ul className="list-check">
                      {phase.weDeliver.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="phase__decisions">
                    <h4 className="phase__col-title">How decisions are made</h4>
                    <p>{phase.decisions}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" id="phase-faq">
        <div className="container container--narrow">
          <SectionHeading eyebrow="FAQ" title="Questions about working together" align="center" />
          <FaqAccordion items={processFaqs} defaultOpen={[0]} />
        </div>
      </section>

      <CtaBand
        title="Ready for the first conversation?"
        body="Tell us what you are trying to accomplish and what already exists. We can discuss the appropriate starting point."
        secondaryLabel="Browse all services"
        secondaryTo="/sitemap"
      />
    </>
  );
}
