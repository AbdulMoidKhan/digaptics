import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DURATION,
  EASE,
  STAGGER,
  ScrollTrigger,
  gsap,
  isSmallScreen,
  prefersReducedMotion,
} from '../motion/gsap.js';

/**
 * Scroll-triggered entrance for every `.reveal` element on the current page.
 *
 * One batched ScrollTrigger per page rather than one per element, so grouped
 * cards animate together with a small stagger. Everything runs inside a
 * gsap.context that is reverted on route change, which kills the triggers and
 * removes inline styles so animations never stack up after navigation.
 */
export default function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const nodes = gsap.utils.toArray('.reveal');
    if (!nodes.length) return undefined;

    // Reduced motion: show everything immediately, animate nothing.
    if (prefersReducedMotion()) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      gsap.set(nodes, { clearProps: 'all' });
      return undefined;
    }

    const distance = isSmallScreen() ? 14 : 24;

    const ctx = gsap.context(() => {
      gsap.set(nodes, { y: distance, willChange: 'transform' });

      ScrollTrigger.batch(nodes, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: DURATION.reveal,
            ease: EASE.out,
            stagger: STAGGER,
            overwrite: true,
            onComplete: () => {
              batch.forEach((el) => {
                el.classList.add('is-visible');
                el.style.willChange = 'auto';
              });
            },
          }),
      });
    });

    // Late-loading fonts can shift trigger positions.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);
    if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener('load', onLoad);
      ctx.revert();
      nodes.forEach((node) => node.classList.add('is-visible'));
    };
  }, [pathname]);
}
