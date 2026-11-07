import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs.jsx';
import useIntro from '../../motion/useIntro.js';

const pagePhotos = {
  '/process': {
    src: '/images/gen/process.jpg',
    alt: 'Index cards arranged in columns on a glass wall during planning',
  },
  '/contact': {
    src: '/images/gen/contact.jpg',
    alt: 'A modern office reception area with warm lighting',
  },
};

export default function PageHero({ eyebrow, title, lede, breadcrumbs, actions = null, aside = null, support = null, tone = 'light' }) {
  const heroRef = useRef(null);
  const { pathname } = useLocation();
  const photo = pagePhotos[pathname];
  useIntro(heroRef, '.page-hero__intro > *, .page-hero__intro-aside');
  return <section ref={heroRef} className={'page-hero page-hero--' + tone + (photo ? ' page-hero--photographic' : '')}>
    <div className="container">
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      <div className={'page-hero__grid' + (photo || aside ? ' page-hero__grid--split' : '')}>
        <div className="page-hero__text page-hero__intro">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {lede && <p className="lede">{lede}</p>}
          {actions && <div className="btn-row">{actions}</div>}
        </div>
        {photo ? <figure className="page-hero__photograph page-hero__intro-aside"><img src={photo.src} alt={photo.alt} width="1000" height="750" decoding="async" /></figure> : aside && <div className="page-hero__aside page-hero__intro-aside">{aside}</div>}
      </div>
      {(support || (photo && aside)) && <div className="page-hero__support">{support || aside}</div>}
    </div>
  </section>;
}
