import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import CtaBand from '../components/ui/CtaBand.jsx';
import Icon from '../components/ui/Icon.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import useReveal from '../hooks/useReveal.js';
import { catalogTree } from '../data/catalog/index.js';
import './CategoryPage.css';

/**
 * Hub page for one of the seven catalog categories. Group sections are anchored
 * so the header mega menu and in-page jump links can link straight to them.
 */
export default function CategoryPage() {
  const { category: categorySlug } = useParams();
  const category = useMemo(
    () => catalogTree.find((c) => c.path === '/' + categorySlug) ?? null,
    [categorySlug],
  );

  useReveal();
  useDocumentMeta({
    title: category ? category.title + ' | Digaptics' : 'Not found | Digaptics',
    description: category ? category.summary : 'Page not found.',
    image: category?.image,
    noIndex: !category,
  });

  if (!category) return <NotFoundPage />;

  return (
    <>
      <PageHero
        eyebrow={category.kicker}
        title={category.headline}
        lede={category.intro}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: category.label }]}
        actions={
          <>
            <Link to="/contact" className="btn">
              Start a Project
            </Link>
            <Link to="/process" className="btn btn--secondary">
              How we work
            </Link>
          </>
        }
      />

      <section className="section section--tight">
        <div className="container">
          <figure className="category-banner reveal">
            <img
              src={category.image}
              alt={category.imageAlt}
              width="1586"
              height="992"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
          <nav className="category-jump reveal" aria-label={category.label + ' sections'}>
            <p className="eyebrow">
              {category.count} {category.count === 1 ? 'service page' : 'service pages'} in{' '}
              {category.label}
            </p>
            <ul>
              {category.groups.map((group) => (
                <li key={group.id}>
                  <a href={'#' + group.id} className="chip chip--tint">
                    {group.label} <span aria-hidden="true">({group.entries.length})</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {category.groups.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          className={'section' + (index % 2 === 1 ? ' section--tint' : '')}
          aria-labelledby={group.id + '-title'}
        >
          <div className="container">
            <SectionHeading eyebrow={category.label} title={group.label} lede={group.desc} id={group.id + '-title'} />
            <ul className="catalog-grid grid grid--3">
              {group.entries.map((entry) => (
                <li key={entry.path} className="reveal">
                  <article className="catalog-card">
                    <h3 className="catalog-card__title">
                      <Link to={entry.path}>{entry.title}</Link>
                    </h3>
                    <p className="catalog-card__blurb">{entry.blurb}</p>
                    <span className="catalog-card__cue" aria-hidden="true">
                      <Icon name="arrowRight" size={16} />
                    </span>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="section section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="Other categories"
            title="Work that usually runs alongside this"
            lede="Most engagements cross more than one category. These are the ones that pair most often."
          />
          <ul className="grid grid--3 category-related">
            {catalogTree
              .filter((c) => c.id !== category.id)
              .map((other) => (
                <li key={other.id} className="reveal">
                  <Link to={other.path} className="category-related__card">
                    <span className="category-related__icon">
                      <Icon name={other.icon} size={20} />
                    </span>
                    <span>
                      <strong>{other.label}</strong>
                      <span className="category-related__desc">{other.summary}</span>
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={'Need help choosing within ' + category.label + '?'}
        body="Tell us the outcome you are after and we will point you at the right service, or tell you it is not us."
      />
    </>
  );
}
