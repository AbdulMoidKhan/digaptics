import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout.jsx';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import RouteFallback from './components/ui/RouteFallback.jsx';

// Route-level code splitting: each page ships as its own chunk.
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const CategoryPage = lazy(() => import('./pages/CategoryPage.jsx'));
const CatalogDetailPage = lazy(() => import('./pages/CatalogDetailPage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const ProcessPage = lazy(() => import('./pages/ProcessPage.jsx'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage.jsx'));
const CaseStudyDetailPage = lazy(() => import('./pages/CaseStudyDetailPage.jsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage.jsx'));
const PartnershipsPage = lazy(() => import('./pages/PartnershipsPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const SitemapPage = lazy(() => import('./pages/SitemapPage.jsx'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage.jsx'));
const TermsPage = lazy(() => import('./pages/TermsPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

/** Wraps a lazy page in the shared suspense fallback. */
const page = (Component) => (
  <Suspense fallback={<RouteFallback />}>
    <Component />
  </Suspense>
);

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={page(HomePage)} />

          <Route path="/about" element={page(AboutPage)} />
          <Route path="/process" element={page(ProcessPage)} />
          <Route path="/case-studies" element={page(CaseStudiesPage)} />
          <Route path="/case-studies/:slug" element={page(CaseStudyDetailPage)} />
          <Route path="/blog" element={page(BlogPage)} />
          <Route path="/blog/:slug" element={page(BlogPostPage)} />
          <Route path="/partnerships" element={page(PartnershipsPage)} />
          <Route path="/contact" element={page(ContactPage)} />
          <Route path="/sitemap" element={page(SitemapPage)} />
          <Route path="/privacy" element={page(PrivacyPage)} />
          <Route path="/terms" element={page(TermsPage)} />

          {/* Legacy paths from the previous build of this site. */}
          <Route path="/services" element={<Navigate to="/sitemap" replace />} />
          <Route path="/work" element={<Navigate to="/case-studies" replace />} />
          <Route path="/insights" element={<Navigate to="/blog" replace />} />
          <Route path="/blogs" element={<Navigate to="/blog" replace />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/contact-us" element={<Navigate to="/contact" replace />} />

          {/* Catalog: one hub per category, one detail page per entry. Unknown
              slugs fall through to the 404 rendered inside these components. */}
          <Route path="/:category" element={page(CategoryPage)} />
          <Route path="/:category/:slug" element={page(CatalogDetailPage)} />

          <Route path="*" element={page(NotFoundPage)} />
        </Route>
      </Routes>
    </>
  );
}
