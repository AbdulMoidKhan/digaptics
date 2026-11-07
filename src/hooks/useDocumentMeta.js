import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../data/site.js';

function upsertMeta(attribute, key, content) {
  if (!content) return;
  let tag = document.head.querySelector('meta[' + attribute + '="' + key + '"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

/**
 * Per-route document title, description, canonical URL, and social metadata.
 * Kept as a tiny hook instead of a metadata dependency to avoid extra bundle weight.
 *
 * @param {{title: string, description: string, path?: string, noIndex?: boolean,
 *          structuredData?: object | null, image?: string}} meta
 */
export default function useDocumentMeta({
  title,
  description,
  path,
  noIndex = false,
  structuredData = null,
  image,
}) {
  const location = useLocation();
  const routePath = path || location.pathname;

  useEffect(() => {
    const fullTitle = title ? (/digaptics/i.test(title) ? title : title + ' | ' + site.name) : site.name;
    const canonical = site.url.replace(/\/$/, '') + (routePath === '/' ? '/' : routePath);
    const socialImage = (image || '/images/gen/home-hero.jpg').startsWith('http')
      ? image
      : site.url.replace(/\/$/, '') + (image || '/images/gen/home-hero.jpg');

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertCanonical(canonical);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:type', routePath.startsWith('/insights/') ? 'article' : 'website');
    upsertMeta('property', 'og:image', socialImage);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', socialImage);

    // Only pages that should stay out of the index set this (e.g. 404).
    let robots = document.head.querySelector('meta[name="robots"]');
    if (noIndex) {
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'noindex, follow');
    } else if (robots) {
      robots.remove();
    }

    // Route-level JSON-LD, removed on unmount so pages never inherit each other's data.
    let script = null;
    if (structuredData) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.route = 'true';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      if (script && script.parentNode) script.parentNode.removeChild(script);
    };
  }, [title, description, routePath, noIndex, structuredData, image]);
}
