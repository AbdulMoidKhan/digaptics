import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import useReveal from '../hooks/useReveal.js';
import { contactConfig, site, socialLinks } from '../data/site.js';
import ContactForm from '../components/forms/ContactForm.jsx';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import Icon from '../components/ui/Icon.jsx';
import useIntro from '../motion/useIntro.js';
import './ContactPage.css';

export default function ContactPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Digaptics',
    url: 'https://digaptics.io/contact',
    description:
      'Contact Digaptics to discuss custom software development, web engineering, mobile apps, digital marketing, or BPO outsourcing services.',
    mainEntity: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
      telephone: '+1-630-481-6122',
      email: 'connect@digaptics.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '200 South Wacker Dr',
        addressLocality: 'Chicago',
        addressRegion: 'IL',
        addressCountry: 'US',
      },
    },
  };

  useDocumentMeta({
    title: 'Contact Digaptics | Start a Software, Web or Marketing Project',
    description:
      'Initiate a digital initiative with Digaptics. Connect with our Chicago team to discuss custom software development, web engineering, mobile apps, SEO, or BPO operations.',
    path: '/contact',
    structuredData,
  });
  useReveal();

  const heroRef = useRef(null);
  useIntro(heroRef, '.contact-hero__grid > *');

  return (
    <>
      <section className="contact-hero" ref={heroRef}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
          <div className="contact-hero__grid">
            <div>
              <p className="eyebrow">Start a Project</p>
              <h1>What’s your next move?</h1>
              <p className="lede">
                Tell us what you’re working on, what needs to change, and what matters most. Start with the context, not a finished brief.
              </p>
              <p className="contact-hero__meta">
                {site.locality}, {site.region}
              </p>
            </div>
            <figure className="contact-photograph"><img src="/images/gen/contact.jpg" alt="A modern office reception area with warm lighting" width="1586" height="992" loading="lazy" decoding="async" /><figcaption>Start with the challenge. Explore the next step.</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-form-wrap">
            <h2 className="contact-form-wrap__title">Project inquiry</h2>
            <ContactForm />
          </div>

          <aside className="contact-aside">
            <div className="panel">
              <h2 className="contact-aside__title">Contact details</h2>
              {contactConfig.email || contactConfig.phone ? (
                <ul className="list-plain contact-details">
                  {contactConfig.email && (
                    <li>
                      <Icon name="mail" size={18} />
                      <a href={'mailto:' + contactConfig.email}>{contactConfig.email}</a>
                    </li>
                  )}
                  {contactConfig.phone && (
                    <li>
                      <Icon name="mobile" size={18} />
                      <a href={'tel:' + contactConfig.phone.replace(/[\s()-]/g, '')}>
                        {contactConfig.phone}
                      </a>
                    </li>
                  )}
                  {contactConfig.streetAddress && (
                    <li>
                      <Icon name="compass" size={18} />
                      <span>{contactConfig.streetAddress}</span>
                    </li>
                  )}
                </ul>
              ) : (
                <p className="caption">
                  We publish contact details only once they are verified. For now the form above and
                  the profiles below are the reliable ways to reach us.
                </p>
              )}
              <p className="caption contact-location">
                {site.locality}, {site.region}, {site.country}. {site.serviceArea}
              </p>
            </div>

            <div className="panel">
              <h2 className="contact-aside__title">Find us elsewhere</h2>
              <ul className="list-plain contact-social">
                {socialLinks.map((social) => (
                  <li key={social.href}>
                    <a href={social.href} target="_blank" rel="noreferrer noopener">
                      <Icon name={social.icon} size={18} />
                      <span>{social.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel panel--tint">
              <h2 className="contact-aside__title">Not ready to talk yet?</h2>
              <p>
                Have a look at how projects run, or read what each service actually includes before
                getting in touch.
              </p>
              <div className="btn-row">
                <Link to="/process" className="btn btn--secondary btn--sm">
                  Our process
                </Link>
                <Link to="/sitemap" className="btn btn--secondary btn--sm">
            All services
          </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
