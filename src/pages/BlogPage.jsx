import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import CtaBand from '../components/ui/CtaBand.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import useReveal from '../hooks/useReveal.js';
import { articles, blogCategories, getCategoryLabel } from '../data/blog.js';
import './BlogPage.css';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  useReveal();
  useDocumentMeta({
    title: 'Blog | Digaptics',
    description:
      'Articles on invoice automation, accounts payable outsourcing, BPO, CRM and influencer marketing measurement from the Digaptics team.',
    image: '/images/gen/blog.jpg',
  });

  const visible = useMemo(
    () =>
      activeCategory === 'all'
        ? articles
        : articles.filter((article) => article.categoryId === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <PageHero
        eyebrow="Insights from our agency"
        title="Blog"
        lede="Practical writing on the things clients ask us about most: automating finance admin, outsourcing sensibly, choosing a CRM, and measuring marketing honestly."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]}
      />

      <section className="section section--tight">
        <div className="container">
          <figure className="blog-banner reveal">
            <img
              src="/images/gen/blog.jpg"
              alt="An open notebook, laptop and coffee on a wooden desk by a window"
              width="1586"
              height="992"
              fetchPriority="high"
              decoding="async"
            />
          </figure>

          <div className="blog-filters" role="group" aria-label="Filter articles by category">
            <button
              type="button"
              className={'chip' + (activeCategory === 'all' ? ' is-active' : '')}
              aria-pressed={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
            >
              All ({articles.length})
            </button>
            {blogCategories.map((category) => {
              const count = articles.filter((a) => a.categoryId === category.id).length;
              if (!count) return null;
              return (
                <button
                  key={category.id}
                  type="button"
                  className={'chip' + (activeCategory === category.id ? ' is-active' : '')}
                  aria-pressed={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label} ({count})
                </button>
              );
            })}
          </div>

          <SectionHeading
            eyebrow={visible.length + (visible.length === 1 ? ' article' : ' articles')}
            title={
              activeCategory === 'all' ? 'All articles' : getCategoryLabel(activeCategory)
            }
          />

          <ul className="blog-grid grid grid--3">
            {visible.map((article) => (
              <li key={article.slug} className="reveal">
                <article className="blog-card">
                  <p className="eyebrow">{getCategoryLabel(article.categoryId)}</p>
                  <h3>
                    <Link to={'/blog/' + article.slug}>{article.title}</Link>
                  </h3>
                  <p className="blog-card__summary">{article.summary}</p>
                  <p className="caption">
                    <time dateTime={article.publishedAt}>
                      {dateFormatter.format(new Date(article.publishedAt))}
                    </time>{' '}
                    &middot; {article.readingMinutes} min read
                  </p>
                </article>
              </li>
            ))}
          </ul>

          <p className="caption blog-note">
            Our previous site published most of these topics twice under duplicate URLs, and
            credited every post to a placeholder author name. Each topic appears once here, without
            an invented byline.
          </p>
        </div>
      </section>

      <CtaBand
        title="Want this applied to your own operation?"
        body="We can audit the process, automate it, or run it for you with a managed team."
      />
    </>
  );
}
