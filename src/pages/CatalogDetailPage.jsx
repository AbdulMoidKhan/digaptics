import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import CtaBand from '../components/ui/CtaBand.jsx';
import FaqAccordion from '../components/ui/FaqAccordion.jsx';
import Icon from '../components/ui/Icon.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import useReveal from '../hooks/useReveal.js';
import { categoryById, findEntry, relatedEntries } from '../data/catalog/index.js';
import { contactConfig, site } from '../data/site.js';
import './CatalogDetailPage.css';

/** Detail template shared by every catalog service, product and industry page. */
export default function CatalogDetailPage() {
  const { category: categorySlug, slug } = useParams();
  const categoryId = useMemo(
    () => Object.values(categoryById).find((c) => c.path === '/' + categorySlug)?.id ?? null,
    [categorySlug],
  );
  const entry = categoryId ? findEntry(categoryId, slug) : null;
  const related = useMemo(() => (entry ? relatedEntries(entry) : []), [entry]);

  const structuredData = useMemo(() => {
    if (!entry) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: entry.title,
      serviceType: entry.groupLabel,
      description: entry.blurb,
      provider: {
        '@type': 'Organization',
        name: site.name,
        url: site.url,
      },
      areaServed: site.country,
    };
  }, [entry]);

  useReveal();
  useDocumentMeta({
    title: entry ? entry.title + ' | Digaptics' : 'Not found | Digaptics',
    description: entry ? entry.blurb : 'Page not found.',
    image: entry?.image,
    structuredData,
    noIndex: !entry,
  });

  if (!entry) return <NotFoundPage />;

  const category = categoryById[entry.categoryId];

  return (
    <>
      <PageHero
        eyebrow={entry.groupLabel}
        title={entry.title}
        lede={entry.intro}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: category.label, to: category.path },
          { label: entry.title },
        ]}
        actions={
          <>
            <Link to="/contact" className="btn">
              Request a quote
            </Link>
            <a href={'tel:' + contactConfig.phone.replace(/[^+\d]/g, '')} className="btn btn--secondary">
              Call {contactConfig.phone}
            </a>
          </>
        }
      />

      <section className="section section--tight">
        <div className="container detail-layout">
          <div className="detail-main">
            <figure className="detail-figure reveal">
              <img
                src={entry.image}
                alt={entry.imageAlt}
                width="1586"
                height="992"
                fetchPriority="high"
                decoding="async"
              />
            </figure>

            {entry.highlights.length > 0 && (
              <>
                <SectionHeading
                  eyebrow="What is included"
                  title={'What you get with ' + entry.title}
                />
                <ul className="detail-highlights">
                  {entry.highlights.map((item) => (
                    <li key={item.title} className="reveal">
                      <span className="detail-highlights__icon" aria-hidden="true">
                        <Icon name="check" size={16} />
                      </span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {entry.points.length > 0 && (
              <div className="panel panel--tint reveal detail-points">
                <h2>Good to know</h2>
                <ul className="list-check">
                  {entry.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {entry.faqs.length > 0 && (
              <div className="detail-faqs">
                <SectionHeading eyebrow="Questions" title="Frequently asked" />
                <FaqAccordion items={entry.faqs} defaultOpen={[0]} />
              </div>
            )}

            {entry.review && (
              <aside className="detail-note reveal" aria-label="Source information needing review">
                <h2>Needs confirmation</h2>
                <p>{entry.review}</p>
              </aside>
            )}
          </div>

          <aside className="detail-aside" aria-label="Related pages and contact">
            <div className="panel panel--outline detail-aside__block">
              <p className="eyebrow">Talk to us</p>
              <p>
                Tell us what you need and we will come back with scope, approach and a price.
              </p>
              <Link to="/contact" className="btn btn--block">
                Start a Project
              </Link>
              <ul className="detail-contact">
                <li>
                  <a href={'mailto:' + contactConfig.email}>{contactConfig.email}</a>
                </li>
                <li>
                  <a href={'tel:' + contactConfig.phone.replace(/[^+\d]/g, '')}>
                    {contactConfig.phone}
                  </a>
                </li>
              </ul>
            </div>

            {related.length > 0 && (
              <div className="panel detail-aside__block">
                <p className="eyebrow">Related</p>
                <ul className="list-plain detail-related">
                  {related.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path} className="link-arrow">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to={category.path} className="link-arrow">
                  All {category.label}
                </Link>
              </div>
            )}
          </aside>
        </div>
      </section>

      <CtaBand
        eyebrow={entry.groupLabel}
        title={'Ready to move on ' + entry.title.toLowerCase() + '?'}
        body="Send the brief, the deadline and anything that already exists. You will get a straight answer on scope and cost."
        secondaryLabel={'Back to ' + category.label}
        secondaryTo={category.path}
      />
    </>
  );
}
