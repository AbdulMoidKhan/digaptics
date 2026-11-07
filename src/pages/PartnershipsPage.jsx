import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import CtaBand from '../components/ui/CtaBand.jsx';
import Icon from '../components/ui/Icon.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import useReveal from '../hooks/useReveal.js';
import { footerPartners } from '../data/site.js';
import './PartnershipsPage.css';

/** Based on digaptics.io/affiliations-partnerships/ plus the footer partner list. */
const programme = [
  {
    title: 'Customised marketing plans',
    body: 'Partner engagements start with a plan built for that partner\'s clients and market, not a reseller template.',
  },
  {
    title: 'Customised solutions',
    body: 'Scope and deliverables shaped around what the partner already does well, filling only the gaps.',
  },
  {
    title: 'Comprehensive support',
    body: 'Access to our delivery teams across marketing, development, print, media and outsourcing.',
  },
  {
    title: 'Proven delivery',
    body: 'Partners work with the same teams that run our direct client programmes.',
  },
];

const whiteLabel = [
  { title: 'Digital marketing', body: 'SEO, paid media, social and reputation programmes.', to: '/marketing' },
  { title: 'Web design and development', body: 'Custom builds and platform work on your clients\' behalf.', to: '/web-app-development' },
  { title: 'Digital strategy', body: 'Channel, platform and growth planning you can present as your own.', to: '/marketing' },
  { title: 'Technical SEO', body: 'Audits, crawl and performance work for sites you manage.', to: '/marketing/seo-audit' },
];

export default function PartnershipsPage() {
  useReveal();
  useDocumentMeta({
    title: 'Affiliations & Partnerships | Digaptics',
    description:
      'Partner with Digaptics for white-label digital marketing, web development, strategy and technical SEO, backed by our full delivery team.',
    image: '/images/gen/partnerships.jpg',
  });

  return (
    <>
      <PageHero
        eyebrow="Affiliations & partnerships"
        title="Transform your digital presence with a delivery partner behind you"
        lede="We build customised digital marketing strategies designed to produce measurable results. Partnering with us gives agencies, consultants and resellers access to delivery capacity across every service we run."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Partnerships' }]}
        actions={
          <Link to="/contact" className="btn">
            Join forces with us
          </Link>
        }
      />

      <section className="section section--tight">
        <div className="container partner-intro">
          <figure className="partner-figure reveal">
            <img
              src="/images/gen/partnerships.jpg"
              alt="Two professionals shaking hands in a bright office lobby"
              width="1586"
              height="992"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
          <div>
            <SectionHeading eyebrow="Why partner with us" title="Capacity without the headcount" />
            <p>
              Most agencies lose work because they cannot staff it, not because they cannot win it.
              A partnership gives you specialist teams on demand, across marketing, development,
              print, media production and outsourced operations.
            </p>
            <ul className="list-check">
              <li>Keep the client relationship and the brand in front of it</li>
              <li>Add services you do not currently deliver in-house</li>
              <li>Scale delivery up and down with demand rather than payroll</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="partner-services">
        <div className="container">
          <SectionHeading
            eyebrow="Services for partners"
            title="What we deliver on your behalf"
            id="partner-services"
          />
          <ul className="partner-grid grid grid--4">
            {whiteLabel.map((item) => (
              <li key={item.title} className="reveal">
                <Link to={item.to} className="partner-card">
                  <span className="partner-card__icon" aria-hidden="true">
                    <Icon name="layers" size={20} />
                  </span>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="partner-programme">
        <div className="container">
          <SectionHeading
            eyebrow="Partner programme"
            title="How the programme works"
            id="partner-programme"
          />
          <ul className="partner-grid grid grid--2">
            {programme.map((item) => (
              <li key={item.title} className="reveal">
                <article className="partner-point">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="partner-list">
        <div className="container">
          <SectionHeading
            eyebrow="Current partners"
            title="Organisations listed as Digaptics partners"
            lede="These names are published in the Digaptics site footer. The nature of each relationship is not described there, so none is characterised here."
            id="partner-list"
          />
          <ul className="partner-names">
            {footerPartners.map((partner) => (
              <li key={partner}>{partner}</li>
            ))}
          </ul>
          <p className="caption">
            Needs review: partner names are reproduced as published, without links, logos or a
            description of the relationship.
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Partnerships"
        title="Let's talk about working together"
        body="Tell us what your clients need and where your capacity runs out. We will propose how a partnership would work."
      />
    </>
  );
}
