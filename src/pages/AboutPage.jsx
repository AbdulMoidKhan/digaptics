import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import CtaBand from '../components/ui/CtaBand.jsx';
import Icon from '../components/ui/Icon.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import useReveal from '../hooks/useReveal.js';
import { catalogTree } from '../data/catalog/index.js';
import { contactConfig, site } from '../data/site.js';
import './AboutPage.css';

/**
 * About page.
 *
 * Based on digaptics.io/about-us/. The reference page states "Founded in
 * [Year]" (an unfilled placeholder), so no founding date, team size or client
 * count is claimed here.
 */
const capabilities = [
  {
    title: 'Web development',
    body: 'Marketing sites through to web applications, built to be fast, secure and responsive.',
    to: '/web-app-development/custom-web-development',
  },
  {
    title: 'Custom website development',
    body: 'Bespoke design and functionality where a template cannot carry the brand or the content.',
    to: '/web-app-development/custom-web-development',
  },
  {
    title: 'Software development',
    body: 'Custom software built around specific business problems rather than generic workflows.',
    to: '/web-app-development/custom-software-development',
  },
  {
    title: 'Mobile app development',
    body: 'iOS, Android and cross-platform apps designed for engagement and real-world use.',
    to: '/web-app-development/flutter-development',
  },
  {
    title: 'UI/UX design',
    body: 'Research-led interface design: intuitive structure, user-centred flows, usable detail.',
    to: '/web-app-development/ui-ux-design',
  },
  {
    title: 'Cloud and DevOps',
    body: 'Cloud-native architecture, CI/CD pipelines and deployment you can rely on.',
    to: '/web-app-development/cloud-application-development',
  },
  {
    title: 'Ecommerce solutions',
    body: 'Storefronts built for the shopping experience, including secure payment handling.',
    to: '/ecommerce/ecommerce-development',
  },
  {
    title: 'Web application development',
    body: 'Scalable, user-friendly applications taken from concept through to deployment.',
    to: '/web-app-development/enterprise-web-development',
  },
  {
    title: 'Content management systems',
    body: 'CMS platforms your team can update without needing a developer for every change.',
    to: '/web-app-development/wordpress-development',
  },
  {
    title: 'Maintenance and support',
    body: 'Regular updates, security checks and performance monitoring after launch.',
    to: '/contact',
  },
  {
    title: 'SEO and performance optimisation',
    body: 'Search visibility and page speed treated as engineering work, not an afterthought.',
    to: '/marketing/seo-audit',
  },
];

export default function AboutPage() {
  useReveal();
  useDocumentMeta({
    title: 'About Digaptics | Chicago Digital Agency',
    description:
      'Digaptics is a full-service web, software and mobile app development company in Chicago, also delivering marketing, print, video and outsourced teams.',
    image: '/images/gen/about-team.jpg',
  });

  return (
    <>
      <PageHero
        eyebrow="Get to know us"
        title="Turning ideas into digital reality"
        lede="We specialise in turning ambitious ideas into working digital products. As a full-service web, software and mobile app development company, we help businesses of every size operate with scalable, secure and intuitive technology."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        actions={
          <>
            <Link to="/contact" className="btn">
              Start a Project
            </Link>
            <Link to="/case-studies" className="btn btn--secondary">
              See our work
            </Link>
          </>
        }
      />

      <section className="section section--tight">
        <div className="container about-intro">
          <figure className="about-figure reveal">
            <img
              src="/images/gen/about-team.jpg"
              alt="A team talking informally in a bright office lounge"
              width="1586"
              height="992"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
          <div className="about-intro__text">
            <SectionHeading eyebrow="Who we are" title="Developers, designers and strategists" />
            <p>
              We are a team of developers, designers and strategic thinkers with one shared goal:
              turning ideas into digital products that work. The focus is user experience,
              performance and scalability, so what we build looks right and behaves properly on
              every device.
            </p>
            <p>
              Whether you are building from scratch or replacing something that has stopped
              serving you, we combine current technology with practical strategy so the result
              matches the business objective rather than just the brief.
            </p>
            <p className="caption">
              Note: our older site states a founding year as an unfilled placeholder. We have left
              founding date, team size and client numbers off this page until they can be confirmed.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="about-what">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Core development capabilities"
            lede="These are the capabilities described on our development side. The wider catalog also covers marketing, print, photo and video, outsourced teams and ecommerce."
            id="about-what"
          />
          <ul className="about-capabilities grid grid--3">
            {capabilities.map((item) => (
              <li key={item.title} className="reveal">
                <Link to={item.to} className="about-capability">
                  <span className="about-capability__icon" aria-hidden="true">
                    <Icon name="check" size={16} />
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                    <span>{item.body}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="about-breadth">
        <div className="container">
          <SectionHeading
            eyebrow="Breadth"
            title="Why clients consolidate with us"
            lede="A campaign usually needs a site, creative, print, imagery and someone to run it afterwards. Having those in one place removes the handoffs where work normally stalls."
            id="about-breadth"
          />
          <ul className="about-categories grid grid--4">
            {catalogTree.map((category) => (
              <li key={category.id} className="reveal">
                <Link to={category.path} className="about-category">
                  <span className="about-category__icon" aria-hidden="true">
                    <Icon name={category.icon} size={20} />
                  </span>
                  <strong>{category.label}</strong>
                  <span>{category.count} pages</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="about-where">
        <div className="container panel panel--tint about-where">
          <div>
            <SectionHeading eyebrow="Where we are" title="Chicago, Illinois" id="about-where" />
            <p>
              {contactConfig.streetAddress}
              <br />
              {contactConfig.addressLocality}, {contactConfig.addressRegion}{' '}
              {contactConfig.postalCode}
            </p>
            <p>{site.serviceArea}</p>
          </div>
          <ul className="list-plain about-where__contact">
            <li>
              <a href={'mailto:' + contactConfig.email}>{contactConfig.email}</a>
            </li>
            <li>
              <a href={'tel:' + contactConfig.phone.replace(/[^+\d]/g, '')}>
                {contactConfig.phone}
              </a>
            </li>
            <li>
              <a href={'tel:' + contactConfig.altPhone.replace(/[^+\d]/g, '')}>
                {contactConfig.altPhone}
              </a>
            </li>
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
