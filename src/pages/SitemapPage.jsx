import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import CtaBand from '../components/ui/CtaBand.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import useReveal from '../hooks/useReveal.js';
import { catalogEntries, catalogTree } from '../data/catalog/index.js';
import { companyNavigation, legalNavigation } from '../data/site.js';
import { articles } from '../data/blog.js';
import { caseStudies } from '../data/caseStudies.js';
import './SitemapPage.css';

/** Human-readable index of every page on the site. */
export default function SitemapPage() {
  useReveal();
  useDocumentMeta({
    title: 'All pages | Digaptics',
    description:
      'A complete index of every page on the Digaptics site: service categories, individual services, industries, case studies and articles.',
  });

  const total =
    catalogEntries.length +
    catalogTree.length +
    companyNavigation.length +
    caseStudies.length +
    articles.length +
    legalNavigation.length;

  return (
    <>
      <PageHero
        eyebrow="Site index"
        title="Every page on this site"
        lede={`${catalogEntries.length} service, product and industry pages across ${catalogTree.length} categories, plus company pages, case studies and articles. Around ${total} pages in total.`}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'All pages' }]}
      />

      <section className="section section--tight">
        <div className="container">
          <SectionHeading eyebrow="Company" title="Company and contact" />
          <ul className="sitemap-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            {companyNavigation.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            {legalNavigation.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {catalogTree.map((category, index) => (
        <section
          key={category.id}
          className={'section section--tight' + (index % 2 === 0 ? ' section--tint' : '')}
        >
          <div className="container">
            <SectionHeading
              eyebrow={category.count + ' pages'}
              title={category.title}
              lede={category.summary}
              aside={
                <Link to={category.path} className="link-arrow">
                  {category.label} hub
                </Link>
              }
            />
            {category.groups.map((group) => (
              <div className="sitemap-group" key={group.id}>
                <h3 className="sitemap-group__title">{group.label}</h3>
                <ul className="sitemap-list">
                  {group.entries.map((entry) => (
                    <li key={entry.path}>
                      <Link to={entry.path}>{entry.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="section section--tight">
        <div className="container">
          <SectionHeading eyebrow="Case studies" title="Client work" />
          <ul className="sitemap-list">
            {caseStudies.map((study) => (
              <li key={study.slug}>
                <Link to={'/case-studies/' + study.slug}>{study.title}</Link>
              </li>
            ))}
          </ul>

          <SectionHeading eyebrow="Blog" title="Articles" />
          <ul className="sitemap-list">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link to={'/blog/' + article.slug}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
