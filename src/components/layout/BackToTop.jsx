import { useEffect, useState } from 'react';
import Icon from '../ui/Icon.jsx';
import './BackToTop.css';

/** Appears only once the visitor is well down a long page. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 1200);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    const main = document.getElementById('main');
    if (main) main.focus?.();
  };

  if (!visible) return null;

  return (
    <button type="button" className="back-to-top" onClick={scrollUp}>
      <Icon name="arrowUp" size={18} />
      <span className="visually-hidden">Back to top</span>
    </button>
  );
}
