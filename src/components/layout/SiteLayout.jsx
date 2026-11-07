import { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import BackToTop from './BackToTop.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import useSmoothAnchors from '../../hooks/useSmoothAnchors.js';
import { DURATION, EASE, gsap, prefersReducedMotion } from '../../motion/gsap.js';
import '../ui/ui.css';

/** Shared chrome for every route: header, main landmark, footer, back-to-top. */
export default function SiteLayout() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);

  useSmoothAnchors();

  // Short cross-fade on route change. It runs after navigation has already
  // happened, so it never delays the new page.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        mainRef.current,
        { y: 8 },
        { y: 0, duration: DURATION.ui, ease: EASE.out, clearProps: 'all' },
      );
    },
    { dependencies: [pathname], scope: mainRef },
  );

  return (
    <>
      <Header />
      <main id="main" className="main-content" data-page={pathname} ref={mainRef}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
