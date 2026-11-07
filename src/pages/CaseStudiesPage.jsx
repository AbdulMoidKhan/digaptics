import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import CtaBand from '../components/ui/CtaBand.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import useReveal from '../hooks/useReveal.js';
import { caseStudies, recognitions } from '../data/caseStudies.js';
import './CaseStudiesPage.css';

export default function CaseStudiesPage() {
  useReveal();
  useDocumentMeta({
    title: 'Case Studies | Digaptics',
    description:
      'Client work from Digaptics, including a full digital rebuild for Halal Caters. Published with the detail our clients have approved.',
    image: '/images/gen/case-studies.jpg',
  });

  const published = caseStudies.filter((study) => !study.detailPending);
  const pending = caseStudies.filter((study) => study.detailPending);

  return (
    <>
      <PageHero
        eyebrow="Client work"
        title="Real results, described accurately"
        lede="We publish case studies where we can describe the scope honestly. Where a client has not approved detail or figures, we say so rather than filling the gap with numbers."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Case Studies' }]}
        actions={
          <Link to="/contact" className="btn">
            Get in touch
          </Link>
        }
      />

      <section className="section section--tight">
        <div className="container">
          <SectionHeading eyebrow="Published" title="Case studies with published detail" />
          <ul className="case-list">
            {published.map((study) => (
              <li key={study.slug} className="reveal">
                <article className="case-card">
                  <figure>
                    <img
                      src={study.image}
                      alt={study.imageAlt}
                      width="1586"
                      height="992"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <div>
                    <h3>
                      <Link to={'/case-studies/' + study.slug}>{study.title}</Link>
                    </h3>
                    <p>{study.summary}</p>
                    <ul className="chip-row">
                      {study.scope.map((item) => (
                        <li key={item} className="chip chip--tint">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link to={'/case-studies/' + study.slug} className="link-arrow">
                      Read the case study
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {pending.length > 0 && (
        <section className="section section--tint">
          <div className="container">
            <SectionHeading
              eyebrow="In preparation"
              title="Named case studies awaiting content"
              lede="These two case studies are named on our previous site but have no published detail yet. They are listed here rather than hidden, and will be written up once the client-approved detail is available."
            />
            <ul className="case-pending">
              {pending.map((study) => (
                <li key={study.slug} className="reveal">
                  <h3>
                    <Link to={'/case-studies/' + study.slug}>{study.title}</Link>
                  </h3>
                  <p>{study.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="Recognition"
            title="Awards listed by Digaptics"
            lede="These recognitions appear on digaptics.io. They are reproduced here as the company's own claims and have not been independently verified."
          />
          <ul className="case-awards grid grid--4">
            {recognitions.map((item) => (
              <li key={item.title} className="reveal">
                <article className="case-award">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Want work like this for your business?"
        body="Tell us the outcome you need. We will tell you what it takes and whether we are the right team for it."
      />
    </>
  );
}
