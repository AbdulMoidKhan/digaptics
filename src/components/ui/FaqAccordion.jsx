import { useId, useState } from 'react';
import Icon from './Icon.jsx';

/**
 * Accessible FAQ accordion. Buttons control their panels with aria-expanded and
 * aria-controls; `allowMultiple` lets several answers stay open at once.
 */
export default function FaqAccordion({ items, allowMultiple = true, defaultOpen = [] }) {
  const baseId = useId();
  const [openItems, setOpenItems] = useState(() => new Set(defaultOpen));

  const toggle = (index) => {
    setOpenItems((previous) => {
      const next = new Set(allowMultiple ? previous : []);
      if (previous.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  if (!items?.length) return null;

  return (
    <div className="faq">
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
        const buttonId = baseId + '-q-' + index;
        const panelId = baseId + '-a-' + index;
        return (
          <div className={'faq__item' + (isOpen ? ' is-open' : '')} key={item.q}>
            <h3 className="faq__question">
              <button
                type="button"
                id={buttonId}
                className="faq__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span>{item.q}</span>
                <span className="faq__marker" aria-hidden="true">
                  <Icon name={isOpen ? 'minus' : 'plus'} size={18} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="faq__answer"
              hidden={!isOpen}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
