import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import ServiceVisual from './ServiceVisual.jsx';

/** Service preview card used on the home page and services overview. */
export default function ServiceCard({ service, detailed = false }) {
  return (
    <article className="service-card reveal">
      {service.image && (
        <div className="service-card__image-wrap">
          <ServiceVisual service={service} />
        </div>
      )}
      <div className="service-card__top">
        <span className="service-card__icon">
          <Icon name={service.icon} size={22} />
        </span>
        <h3 className="service-card__title">
          <Link to={'/services/' + service.slug}>{service.title}</Link>
        </h3>
      </div>
      <p className="service-card__summary">
        {detailed ? service.summary : service.cardSummary}
      </p>

      {detailed && service.audience?.length > 0 && (
        <div className="service-card__meta">
          <p className="service-card__meta-label">Suited to</p>
          <ul className="list-check">
            {service.audience.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <Link to={'/services/' + service.slug} className="link-arrow service-card__link">
        <span className="visually-hidden">{service.title}: </span>Explore this service
      </Link>
    </article>
  );
}
