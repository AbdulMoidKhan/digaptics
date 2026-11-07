import { Link } from 'react-router-dom';
import { contactConfig } from '../../data/site.js';

/** Closing inquiry CTA used at the foot of every page. */
export default function CtaBand({
  eyebrow = 'Start a project',
  title = 'Tell us what you are trying to build.',
  body = 'Share the problem, the deadline, and what already exists. We will tell you whether we can help and what the first sensible step looks like.',
  primaryLabel = 'Start a Project',
  primaryTo = '/contact',
  secondaryLabel = 'See how we work',
  secondaryTo = '/process',
  tone = 'ink',
}) {
  return (
    <section className={'cta-band cta-band--' + tone + ' reveal'} aria-labelledby="cta-band-title">
      <div className="container cta-band__inner">
        <div className="cta-band__text">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id="cta-band-title">{title}</h2>
          <p className="lede">{body}</p>
          {contactConfig.responseWindow && (
            <p className="cta-band__note">{contactConfig.responseWindow}</p>
          )}
        </div>
        <div className="cta-band__actions">
          <Link to={primaryTo} className={'btn' + (tone === 'ink' ? ' btn--light' : '')}>
            {primaryLabel}
          </Link>
          {secondaryLabel && (
            <Link
              to={secondaryTo}
              className={'btn ' + (tone === 'ink' ? 'btn--on-dark' : 'btn--secondary')}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
