import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { catalogTree } from '../data/catalog/index.js';
import Icon from '../components/ui/Icon.jsx';
import useIntro from '../motion/useIntro.js';
import './NotFoundPage.css';

/**
 * Branded 404. Also used when a /services/:slug value does not match a service,
 * with a slightly different message.
 */
export default function NotFoundPage({ reason }) {
  useDocumentMeta({
    title: reason === 'service' ? 'Service Not Found | Digaptics' : 'Page Not Found (404) | Digaptics',
    description:
      'The requested page or service could not be located. Explore Digaptics digital services, technical capabilities, or contact our team directly.',
    noIndex: true,
  });

  const introRef = useRef(null);
  useIntro(introRef, '.notfound__inner > *');

  return (
    <section className="notfound" ref={introRef}>
      <div className="container notfound__inner">
        <p className="eyebrow">Error 404 &middot; Page Not Found</p>
        <h1>
          {reason === 'service'
            ? 'That service page could not be located'
            : 'We could not locate that page'}
        </h1>
        <p className="lede">
          {reason === 'service'
            ? 'The URL may have moved or been updated. Our complete service catalog is accessible below.'
            : 'The requested link may be broken or outdated. Use the navigation links below to find what you are looking for.'}
        </p>

        <div className="btn-row">
          <Link to="/" className="btn">
            Return to Home
          </Link>
          <Link to="/sitemap" className="btn btn--secondary">
            Browse all pages
          </Link>
          <Link to="/contact" className="btn btn--secondary">
            Contact Support
          </Link>
        </div>

        <div className="notfound__services">
          <h2>Digaptics Service Catalog</h2>
          <ul className="list-plain">
            {catalogTree.map((service) => (
              <li key={service.path}>
                <Link to={service.path}>
                  <Icon name={service.icon} size={18} />
                  <span>{service.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
