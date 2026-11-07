/**
 * Central site configuration.
 *
 * Contact details are the ones published on digaptics.io (footer and contact
 * page). `formEndpoint` stays null until a real submission target exists, so the
 * contact form never pretends to have sent anything.
 */
import { catalogTree } from './catalog/index.js';

export const site = {
  name: 'Digaptics',
  legalName: 'Digaptics',
  url: 'https://digaptics.io',
  shortDescription:
    'Digaptics is a Chicago digital agency covering marketing, web and app development, design and print, photo and video, business process outsourcing and ecommerce.',
  locality: 'Chicago',
  region: 'Illinois',
  regionCode: 'IL',
  country: 'United States',
  serviceArea: 'Chicago-based, working with clients nationwide.',
  tagline: 'Chicago & nationwide',
};

/** Verified from the digaptics.io footer and contact page. */
export const contactConfig = {
  email: 'connect@digaptics.com',
  phone: '+1 (630) 481-6122',
  altPhone: '+1 (800) 462-0584',
  streetAddress: '200 South Wacker Drive, Suite 3100',
  addressLocality: 'Chicago',
  addressRegion: 'IL',
  postalCode: '60606',
  /** POST target for the contact form. Null = validate and show a clear "not connected" notice. */
  formEndpoint: null,
  responseWindow: 'Fill in the form and our team will come back to you within 24 hours.',
};

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/digaptics-chicago-local-digital-web-development-firm',
    icon: 'linkedin',
  },
  { label: 'Instagram', href: 'https://www.instagram.com/digaptics/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/Digaptics/', icon: 'facebook' },
];

/** Company pages that sit outside the service catalog. */
export const companyNavigation = [
  { label: 'About', to: '/about' },
  { label: 'Our Process', to: '/process' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Partnerships', to: '/partnerships' },
  { label: 'Contact', to: '/contact' },
];

/** Header navigation: one entry per catalog category, plus a company menu. */
export const mainNavigation = [
  { label: 'Home', to: '/', exact: true },
  ...catalogTree.map((category) => ({
    label: category.navLabel,
    to: category.path,
    categoryId: category.id,
    hasMegaMenu: true,
  })),
  { label: 'Company', to: '/about', companyMenu: true },
];

export const footerNavigation = [
  {
    title: 'Services',
    links: catalogTree.map((category) => ({ label: category.label, to: category.path })),
  },
  {
    title: 'Company',
    links: companyNavigation,
  },
  {
    title: 'Popular',
    links: [
      { label: 'Custom Software Development', to: '/web-app-development/custom-software-development' },
      { label: 'WordPress Development', to: '/web-app-development/wordpress-development' },
      { label: 'Shopify Development', to: '/web-app-development/shopify-development' },
      { label: 'SEO Audit Services', to: '/marketing/seo-audit' },
      { label: 'PPC Management', to: '/marketing/ppc-management' },
      { label: 'Business Cards', to: '/printing/business-cards' },
      { label: 'Back Office Outsourcing', to: '/bpo/back-office' },
      { label: 'Amazon Store Management', to: '/ecommerce/amazon-store-management' },
    ],
  },
];

export const legalNavigation = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Use', to: '/terms' },
  { label: 'All pages', to: '/sitemap' },
];

/**
 * Partner organisations listed in the digaptics.io footer. Names only: the
 * reference site links them as text without describing the relationship.
 */
export const footerPartners = [
  'Zabiha Food',
  'Trade Show Realm',
  'Samira Ghaniwala',
  'Orbitus Solutions',
  'Nabeel Palla',
  'Halal Tummy',
  'Halal Eaten',
  'Halal Coffee Shops',
  'Growth Tech 360',
  'Coffee Shop List',
  'Visioneer Tech',
];
