import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollOffset, smoothScrollTo } from '../../motion/smoothScroll.js';

/**
 * Resets scroll on route change, and moves to an in-page anchor when one is
 * present so links like /services#faq behave as expected in a SPA.
 *
 * Route changes jump instantly (a long animated scroll between pages feels
 * sluggish); anchors within an already-loaded page scroll smoothly via
 * useSmoothAnchors.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        const y = window.scrollY + target.getBoundingClientRect().top - scrollOffset();
        smoothScrollTo(Math.max(y, 0), { immediate: true });
        return;
      }
    }
    smoothScrollTo(0, { immediate: true });
  }, [pathname, hash]);

  return null;
}
