import { DURATION, EASE, gsap, prefersReducedMotion } from './gsap.js';

/** Header height plus breathing room, so anchored sections are not hidden. */
export function scrollOffset() {
  const header = document.querySelector('.site-header');
  return (header ? header.getBoundingClientRect().height : 72) + 16;
}

/**
 * Smoothly scrolls to a target. Falls back to an instant jump when the visitor
 * prefers reduced motion, so nothing animates against their setting.
 *
 * @param {Element|number} target element or Y position
 */
export function smoothScrollTo(target, { immediate = false } = {}) {
  const reduce = prefersReducedMotion();
  if (reduce || immediate) {
    const y =
      typeof target === 'number'
        ? target
        : window.scrollY + target.getBoundingClientRect().top - scrollOffset();
    window.scrollTo({ top: Math.max(y, 0), behavior: 'auto' });
    return;
  }

  gsap.to(window, {
    duration: DURATION.ui * 2,
    ease: EASE.inOut,
    overwrite: true,
    scrollTo: {
      y: target,
      offsetY: typeof target === 'number' ? 0 : scrollOffset(),
      autoKill: true,
    },
  });
}
