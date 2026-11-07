import { useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import CtaBand from '../components/ui/CtaBand.jsx';
import Icon from '../components/ui/Icon.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import useReveal from '../hooks/useReveal.js';
import useIntro from '../motion/useIntro.js';
import { catalogTree } from '../data/catalog/index.js';
import { caseStudies, recognitions } from '../data/caseStudies.js';
import { featuredArticles, getCategoryLabel } from '../data/blog.js';
import { processSteps } from '../data/process.js';
import { contactConfig, site } from '../data/site.js';
import './HomePage.css';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Digaptics',
  url: 'https://digaptics.io/',
  telephone: '+1-630-481-6122',
  email: 'connect@digaptics.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '200 South Wacker Drive, Suite 3100',
    addressLocality: 'Chicago',
    addressRegion: 'IL',
    postalCode: '60606',
    addressCountry: 'US',
  },
};

export default function HomePage() {
  const heroRef = useRef(null);
  useIntro(heroRef, '.home-hero__text > *, .home-hero__figure');
  useReveal();
  useDocumentMeta({
    title: 'Digaptics | Digital Agency in Chicago',
    description:
      'Digaptics is a Chicago digital agency: marketing, web and app development, design and print, photo and video, business process outsourcing and ecommerce.',
    image: '/images/gen/home-hero.jpg',
    structuredData,
  });

  const publishedStudies = caseStudies.filter((study) => !study.detailPending);

  return (
    <>
      <section className="home-hero" ref={heroRef}>
        <div className="container home-hero__grid">
          <div className="home-hero__text">
            <p className="eyebrow">{site.tagline}</p>
            <h1 className="display">
              One agency for the digital work your business actually needs
            </h1>
            <p className="lede">
              Marketing, software, websites, apps, print, photography, video, outsourced teams and
              ecommerce. Seven service families under one roof, so a programme does not have to be
              stitched together from five suppliers.
            </p>
            <div className="btn-row">
              <Link to="/contact" className="btn">
                Start a Project
              </Link>
              <Link to="/sitemap" className="btn btn--secondary">
                Browse all services
              </Link>
            </div>
            <ul className="home-hero__facts">
              <li>
                <strong>{catalogTree.reduce((sum, c) => sum + c.count, 0)}</strong>
                <span>service, product and industry pages</span>
              </li>
              <li>
                <strong>7</strong>
                <span>service categories under one team</span>
              </li>
              <li>
                <strong>Chicago</strong>
                <span>based, working nationwide</span>
              </li>
            </ul>
          </div>
          <figure className="home-hero__figure">
            <img
              src="/images/gen/home-hero.jpg"
              alt="Designers and developers collaborating around a large table in an open-plan studio"
              width="1586"
              height="992"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="home-services">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Seven categories, one point of contact"
            lede="Each category runs as its own practice with its own specialists. Most clients start in one and pull in a second once the first is working."
            id="home-services"
          />
          <ul className="home-categories grid grid--3">
            {catalogTree.map((category) => (
              <li key={category.id} className="reveal">
                <article className="home-category">
                  <div className="home-category__media">
                    <img
                      src={category.image}
                      alt={category.imageAlt}
                      width="1586"
                      height="992"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="home-category__body">
                    <span className="home-category__icon" aria-hidden="true">
                      <Icon name={category.icon} size={18} />
                    </span>
                    <h3>
                      <Link to={category.path}>{category.label}</Link>
                    </h3>
                    <p>{category.summary}</p>
                    <p className="home-category__count">
                      {category.count} pages &middot;{' '}
                      {category.groups.map((group) => group.label).join(', ')}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="home-process">
        <div className="container">
          <SectionHeading
            eyebrow="How we work"
            title="A sequence, not a surprise"
            lede="Every engagement follows the same shape, whether it is a print run or a platform build."
            id="home-process"
            aside={
              <Link to="/process" className="link-arrow">
                The full process
              </Link>
            }
          />
          <ol className="home-steps">
            {processSteps.map((step, index) => (
              <li key={step.name} className="reveal">
                <span className="home-steps__number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.name}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="home-work">
        <div className="container">
          <SectionHeading
            eyebrow="Client work"
            title="Published case studies"
            lede="We only publish work we can describe accurately. Two further case studies are named on our older site but have no published detail yet."
            id="home-work"
            aside={
              <Link to="/case-studies" className="link-arrow">
                All case studies
              </Link>
            }
          />
          <ul className="home-work grid grid--2">
            {publishedStudies.map((study) => (
              <li key={study.slug} className="reveal">
                <article className="home-work__card">
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    width="1586"
                    height="992"
                    loading="lazy"
                    decoding="async"
                  />
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
                  </div>
                </article>
              </li>
            ))}
            <li className="reveal">
              <div className="home-work__aside panel panel--outline">
                <h3>Recognition</h3>
                <ul className="list-plain home-recognition">
                  {recognitions.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}</strong>
                      <span>{item.body}</span>
                    </li>
                  ))}
                </ul>
                <p className="caption">
                  These awards are listed on digaptics.io. They are reproduced as the company&rsquo;s
                  own claims and have not been independently verified.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="home-blog">
        <div className="container">
          <SectionHeading
            eyebrow="Blog"
            title="Recent writing"
            lede="Practical notes on automation, outsourcing and marketing measurement."
            id="home-blog"
            aside={
              <Link to="/blog" className="link-arrow">
                All articles
              </Link>
            }
          />
          <ul className="home-articles grid grid--3">
            {featuredArticles.map((article) => (
              <li key={article.slug} className="reveal">
                <article className="home-article">
                  <p className="eyebrow">{getCategoryLabel(article.categoryId)}</p>
                  <h3>
                    <Link to={'/blog/' + article.slug}>{article.title}</Link>
                  </h3>
                  <p>{article.summary}</p>
                  <p className="caption">{article.readingMinutes} min read</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="home-contact">
        <div className="container home-contact">
          <div>
            <SectionHeading
              eyebrow="Where we are"
              title="Chicago, working nationwide"
              lede="Our office is on South Wacker Drive. Most work runs remotely, with on-site time where a shoot, a print run or a workshop needs it."
              id="home-contact"
            />
            <ul className="list-plain home-contact__details">
              <li>
                {contactConfig.streetAddress}, {contactConfig.addressLocality},{' '}
                {contactConfig.addressRegion} {contactConfig.postalCode}
              </li>
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
          <figure className="home-contact__figure reveal">
            <img
              src="/images/gen/contact.jpg"
              alt="Modern office reception area with warm lighting"
              width="1586"
              height="992"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
