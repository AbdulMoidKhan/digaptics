import { useEffect } from 'react';
import { smoothScrollTo } from '../motion/smoothScroll.js';

/**
 * Smooth scrolling for in-page anchor links (`href="#section"`), with the
 * header height accounted for. Reduced-motion visitors get an instant jump
 * instead, handled inside smoothScrollTo.
 *
 * One delegated listener instead of per-link handlers, so no extra work on
 * scroll and nothing to clean up per component.
 */
export default function useSmoothAnchors() {
  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      smoothScrollTo(target);
      // Keep the URL shareable and move focus for keyboard users.
      window.history.replaceState(null, '', hash);
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}
