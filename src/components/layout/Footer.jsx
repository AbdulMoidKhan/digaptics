import { Link } from 'react-router-dom';
import {
  contactConfig,
  footerNavigation,
  footerPartners,
  legalNavigation,
  site,
  socialLinks,
} from '../../data/site.js';
import Icon from '../ui/Icon.jsx';
import Logo from './Logo.jsx';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const telHref = 'tel:' + contactConfig.phone.replace(/[^+\d]/g, '');

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Logo onDark />
          <p className="site-footer__about">
            Digaptics is a Chicago digital agency. We cover marketing, web, software and app
            development, design and print, photography and video, business process outsourcing and
            ecommerce, so one team can carry a programme end to end.
          </p>
          <p className="site-footer__location">
            {contactConfig.streetAddress}
            <br />
            {contactConfig.addressLocality}, {contactConfig.addressRegion}{' '}
            {contactConfig.postalCode}
            <br />
            {site.serviceArea}
          </p>
          <ul className="site-footer__social">
            {socialLinks.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={'Digaptics on ' + social.label}
                >
                  <Icon name={social.icon} size={18} />
                  <span>{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          {footerNavigation.map((group) => (
            <div className="site-footer__col" key={group.title}>
              <h2 className="site-footer__heading">{group.title}</h2>
              <ul className="list-plain">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="site-footer__col site-footer__col--cta">
            <h2 className="site-footer__heading">Start a project</h2>
            <p>{contactConfig.responseWindow}</p>
            <p>
              <a href={'mailto:' + contactConfig.email}>{contactConfig.email}</a>
            </p>
            <p>
              <a href={telHref}>{contactConfig.phone}</a>
            </p>
            <Link to="/contact" className="btn btn--light btn--sm">
              Contact Digaptics
            </Link>
          </div>
        </nav>
      </div>

      <div className="container site-footer__partners">
        <h2 className="site-footer__heading">Partners</h2>
        <p>
          {footerPartners.map((partner, index) => (
            <span key={partner}>
              {partner}
              {index < footerPartners.length - 1 && <span aria-hidden="true"> &middot; </span>}
            </span>
          ))}
        </p>
      </div>

      <div className="container site-footer__bottom">
        <p>
          &copy; {year} {site.legalName}. All rights reserved.
        </p>
        <ul className="site-footer__legal">
          {legalNavigation.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
