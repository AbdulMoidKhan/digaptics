import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import CtaBand from '../components/ui/CtaBand.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import useReveal from '../hooks/useReveal.js';
import { caseStudies, getCaseStudyBySlug } from '../data/caseStudies.js';
import './CaseStudiesPage.css';

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  useReveal();
  useDocumentMeta({
    title: study ? study.title + ' case study | Digaptics' : 'Not found | Digaptics',
    description: study ? study.summary : 'Page not found.',
    image: study?.image,
    noIndex: !study,
  });

  if (!study) return <NotFoundPage />;

  const others = caseStudies.filter((item) => item.slug !== study.slug);

  return (
    <>
      <PageHero
        eyebrow="Case study"
        title={study.title}
        lede={study.summary}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Case Studies', to: '/case-studies' },
          { label: study.title },
        ]}
        actions={
          <Link to="/contact" className="btn">
            Start a similar project
          </Link>
        }
      />

      <section className="section section--tight">
        <div className="container case-detail">
          <div>
            <figure className="case-detail__figure reveal">
              <img
                src={study.image}
                alt={study.imageAlt}
                width="1586"
                height="992"
                fetchPriority="high"
                decoding="async"
              />
            </figure>

            {study.detailPending ? (
              <div className="panel panel--outline reveal">
                <h2>Detail not yet published</h2>
                <p>
                  This case study is named on the Digaptics site but its page contains placeholder
                  text only, so there is nothing verified to republish. Rather than invent a
                  narrative or results, we have left it marked as pending.
                </p>
                <p>
                  If you would like to see comparable work, our{' '}
                  <Link to="/case-studies/halal-caters">Halal Caters case study</Link> covers a full
                  website, marketing and social media engagement.
                </p>
              </div>
            ) : (
              <>
                <SectionHeading eyebrow="Context" title="Where this started" />
                <p>{study.context}</p>

                <SectionHeading eyebrow="Approach" title="What we did" />
                <ul className="list-check">
                  {study.approach.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <SectionHeading eyebrow="Outcome" title="What changed" />
                <p>{study.outcomeStatement}</p>
              </>
            )}
          </div>

          <aside className="case-detail__aside" aria-label="Case study details">
            {study.client && (
              <div className="panel detail-aside__block">
                <p className="eyebrow">Client</p>
                <p>{study.client}</p>
              </div>
            )}
            {study.services.length > 0 && (
              <div className="panel detail-aside__block">
                <p className="eyebrow">Services used</p>
                <ul className="list-plain">
                  {study.services.map((service) => (
                    <li key={service.to}>
                      <Link to={service.to} className="link-arrow">
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="panel panel--outline detail-aside__block">
              <p className="eyebrow">Other case studies</p>
              <ul className="list-plain">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link to={'/case-studies/' + item.slug} className="link-arrow">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand secondaryLabel="All case studies" secondaryTo="/case-studies" />
    </>
  );
}
