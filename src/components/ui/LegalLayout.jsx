import PageHero from './PageHero.jsx';
import Icon from './Icon.jsx';
import CtaBand from './CtaBand.jsx';
import useReveal from '../../hooks/useReveal.js';
import '../../pages/LegalPage.css';

/** Shared layout for the Privacy Policy and Terms of Use starter documents. */
export default function LegalLayout({ title, lede, breadcrumbLabel, notice, sections, updated }) {
  // Legal pages render through this layout, so the scroll reveals are wired up
  // here rather than in each page component.
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        lede={lede}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: breadcrumbLabel }]}
      />

      <section className="legal">
        <div className="container legal__layout">
          <nav className="legal__toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={'#' + section.id}>{section.heading}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal__content">
            <div className="legal__notice">
              <Icon name="shield" size={18} />
              <p>{notice}</p>
            </div>

            {sections.map((section) => (
              <section key={section.id} id={section.id} className="reveal">
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.placeholder && (
                  <p>
                    <span className="legal__placeholder">To complete: {section.placeholder}</span>
                  </p>
                )}
              </section>
            ))}

            <p className="legal__updated">{updated}</p>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Questions"
        title="Need something clarified before you get in touch?"
        body="Ask about how we handle project information, contracts, or ownership of the work. We will answer plainly."
        primaryLabel="Contact Digaptics"
        secondaryLabel="About us"
        secondaryTo="/about"
      />
    </>
  );
}
