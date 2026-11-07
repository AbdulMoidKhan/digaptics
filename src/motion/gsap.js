/**
 * Central GSAP setup and motion tokens.
 *
 * Everything animated on the site imports from here so timing, easing, and
 * plugin registration stay consistent and happen exactly once.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

if (typeof window !== 'undefined' && !window.__digapticsGsapReady) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  gsap.defaults({ ease: 'power2.out', duration: 0.6 });
  // CSS only hides reveal elements once JS is running, so content stays
  // visible if JavaScript fails or is blocked.
  document.documentElement.classList.add('js-motion');
  window.__digapticsGsapReady = true;
}

/** Shared durations (seconds). */
export const DURATION = {
  micro: 0.18, // hover / focus level feedback handled in CSS
  ui: 0.28, // menus, page transitions
  reveal: 0.55, // section and card entrances
  hero: 0.7, // first-paint hero sequence
};

/** Shared easing. */
export const EASE = {
  out: 'power2.out',
  inOut: 'power2.inOut',
  soft: 'power1.out',
};

/** Stagger used for grouped cards and list items. */
export const STAGGER = 0.08;

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function isSmallScreen() {
  return typeof window !== 'undefined' && window.innerWidth < 760;
}

export { gsap, ScrollTrigger, ScrollToPlugin };
