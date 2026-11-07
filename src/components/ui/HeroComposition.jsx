import Icon from './Icon.jsx';
import './HeroComposition.css';

/**
 * Home hero visual. Drawn with CSS and inline icons rather than images: it
 * stays sharp at any size, costs no extra network requests, and contains no
 * stock photography or invented product screenshots.
 */
export default function HeroComposition() {
  return (
    <div className="hero-art" role="img" aria-label="Illustration combining a product dashboard, code, an automation workflow, and brand design assets">
      <div className="hero-art__panel hero-art__panel--app">
        <div className="hero-art__bar">
          <span className="hero-art__dot" />
          <span className="hero-art__dot" />
          <span className="hero-art__dot" />
          <span className="hero-art__bar-label">Operations dashboard</span>
        </div>
        <div className="hero-art__app-body">
          <div className="hero-art__metrics">
            <div className="hero-art__metric">
              <span className="hero-art__metric-label">Active jobs</span>
              <span className="hero-art__metric-bar" style={{ '--fill': '72%' }} />
            </div>
            <div className="hero-art__metric">
              <span className="hero-art__metric-label">Synced records</span>
              <span className="hero-art__metric-bar" style={{ '--fill': '88%' }} />
            </div>
            <div className="hero-art__metric">
              <span className="hero-art__metric-label">Open requests</span>
              <span className="hero-art__metric-bar" style={{ '--fill': '45%' }} />
            </div>
          </div>
          <div className="hero-art__chart">
            {[38, 56, 44, 72, 60, 84, 68].map((height, index) => (
              <span key={index} className="hero-art__column" style={{ '--h': height + '%' }} />
            ))}
          </div>
        </div>
      </div>

      <div className="hero-art__panel hero-art__panel--code">
        <span className="hero-art__panel-tag">
          <Icon name="code" size={14} /> component
        </span>
        <pre className="hero-art__code">
          <code>{'<ServiceCard\n  service={service}\n  variant="detailed"\n/>'}</code>
        </pre>
      </div>

      <div className="hero-art__panel hero-art__panel--flow">
        <span className="hero-art__panel-tag">
          <Icon name="workflow" size={14} /> automation
        </span>
        <ul className="hero-art__flow">
          <li>Form submitted</li>
          <li>CRM record created</li>
          <li>Owner notified</li>
        </ul>
      </div>

      <div className="hero-art__panel hero-art__panel--brand">
        <span className="hero-art__panel-tag">
          <Icon name="palette" size={14} /> brand
        </span>
        <div className="hero-art__swatches">
          <span style={{ background: '#5731BA' }} />
          <span style={{ background: '#30166F' }} />
          <span style={{ background: '#F1ECFF' }} />
          <span style={{ background: '#17151D' }} />
        </div>
        <div className="hero-art__reel">
          <Icon name="video" size={16} />
          <span>16:9 · 9:16 · 1:1</span>
        </div>
      </div>
    </div>
  );
}
