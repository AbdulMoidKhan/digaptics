import { useGSAP } from '@gsap/react';
import { DURATION, EASE, STAGGER, gsap, prefersReducedMotion } from './gsap.js';

/**
 * Shared page-intro animation: the elements matched by `selector` inside
 * `scopeRef` rise once, immediately after mount.
 *
 * Used by every page header so the first screen of each route moves the same
 * way. useGSAP reverts the tween on unmount, so nothing is left behind after a
 * route change.
 *
 * @param {import('react').RefObject<HTMLElement>} scopeRef
 * @param {string} selector children to animate
 */
export default function useIntro(scopeRef, selector = '.intro-item') {
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const targets = gsap.utils.toArray(selector);
      if (!targets.length) return;
      gsap.from(targets, {
        y: 16,
        duration: DURATION.reveal,
        ease: EASE.out,
        stagger: STAGGER,
        clearProps: 'all',
      });
    },
    { scope: scopeRef },
  );
}
