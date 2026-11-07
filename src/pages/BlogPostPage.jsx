import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/ui/PageHero.jsx';
import CtaBand from '../components/ui/CtaBand.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import useReveal from '../hooks/useReveal.js';
import { articles, getArticleBySlug, getCategoryLabel } from '../data/blog.js';
import { site } from '../data/site.js';
import './BlogPage.css';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

function Block({ block }) {
  if (block.type === 'heading') return <h2>{block.text}</h2>;
  if (block.type === 'list')
    return (
      <ul className="list-check">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  if (block.type === 'quote')
    return (
      <blockquote>
        <p>{block.text}</p>
      </blockquote>
    );
  return <p>{block.text}</p>;
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  const structuredData = useMemo(() => {
    if (!article) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.summary,
      datePublished: article.publishedAt,
      publisher: { '@type': 'Organization', name: site.name, url: site.url },
      mainEntityOfPage: site.url + '/blog/' + article.slug,
    };
  }, [article]);

  useReveal();
  useDocumentMeta({
    title: article ? article.title + ' | Digaptics' : 'Not found | Digaptics',
    description: article ? article.summary : 'Page not found.',
    image: '/images/gen/blog.jpg',
    structuredData,
    noIndex: !article,
  });

  if (!article) return <NotFoundPage />;

  const related = articles
    .filter((item) => item.slug !== article.slug && item.categoryId === article.categoryId)
    .slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={getCategoryLabel(article.categoryId)}
        title={article.title}
        lede={article.summary}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Blog', to: '/blog' },
          { label: article.title },
        ]}
      />

      <section className="section section--tight">
        <div className="container article-layout">
          <article className="article-body">
            <p className="article-meta">
              <time dateTime={article.publishedAt}>
                {dateFormatter.format(new Date(article.publishedAt))}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{article.readingMinutes} min read</span>
              <span aria-hidden="true">&middot;</span>
              <span>{getCategoryLabel(article.categoryId)}</span>
            </p>
            {article.body.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </article>

          <aside className="article-aside" aria-label="Related reading">
            {related.length > 0 && (
              <div className="panel detail-aside__block">
                <p className="eyebrow">More in {getCategoryLabel(article.categoryId)}</p>
                <ul className="list-plain">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link to={'/blog/' + item.slug} className="link-arrow">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="panel panel--outline detail-aside__block">
              <p className="eyebrow">Need this done for you?</p>
              <p>We run these processes as managed services, or help your team automate them.</p>
              <Link to="/contact" className="btn btn--block">
                Talk to us
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand secondaryLabel="All articles" secondaryTo="/blog" />
    </>
  );
}
