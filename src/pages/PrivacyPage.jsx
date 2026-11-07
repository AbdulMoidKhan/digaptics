import useDocumentMeta from '../hooks/useDocumentMeta.js';
import LegalLayout from '../components/ui/LegalLayout.jsx';

/**
 * Starter privacy policy. Statements describe only what this website currently
 * does. Items that depend on business decisions are marked as placeholders for
 * legal review rather than filled in with assumptions.
 */
const sections = [
  {
    id: 'scope',
    heading: '1. Scope of this policy',
    paragraphs: [
      'This policy explains how Digaptics handles information collected through this website. It does not cover information handled under a separate client agreement, which is governed by the terms of that agreement.',
    ],
    placeholder:
      'confirm the legal entity name, registered jurisdiction, and whether a separate client data processing agreement applies.',
  },
  {
    id: 'what-we-collect',
    heading: '2. Information this website collects',
    paragraphs: [
      'The inquiry form currently prepares a message in your browser. No delivery endpoint is configured, so the form itself does not transmit your details. The fields include your name, email, company, selected services, optional budget and timeline, and project details.',
      'The site does not currently run advertising trackers, behavioral profiling, or third-party marketing scripts. Fonts are requested from Google Fonts, which means your browser contacts that service to download the font files.',
    ],
  },
  {
    id: 'how-we-use',
    heading: '3. How the information is used',
    paragraphs: ['Information submitted through the contact form is used to evaluate your business inquiry, prepare requested technical proposals, and, if an engagement follows, administer client services.'],
    list: [
      'Responding to your initial project inquiry or consultation request',
      'Preparing custom scopes of work, architecture proposals, and milestone estimates',
      'Maintaining administrative records for contractual and communication purposes',
    ],
    placeholder:
      'state whether inquiry details are added to a CRM or mailing list, and on what legal basis.',
  },
  {
    id: 'storage',
    heading: '4. Storage and delivery',
    paragraphs: [
      'This website is a static front end without a connected form delivery service. If you choose to open your email app and send the prepared inquiry, your email provider handles delivery. The website itself does not maintain a database of submissions.',
    ],
    placeholder:
      'name the email, form, or CRM provider used to receive submissions, the hosting region, and the retention period.',
  },
  {
    id: 'cookies',
    heading: '5. Cookies and local storage',
    paragraphs: [
      'The website does not set marketing or analytics cookies in its current form. If analytics or chat tools are added later, this section must be updated and a consent mechanism added where required.',
    ],
    placeholder: 'confirm the final analytics and consent configuration before launch.',
  },
  {
    id: 'sharing',
    heading: '6. Sharing with third parties',
    paragraphs: [
      'We do not sell personal information. Information may be processed by trusted infrastructure service providers used to operate the website and securely transmit project inquiries, or disclosed where required by applicable law.',
    ],
    placeholder: 'list the processors used, with links to their own privacy terms.',
  },
  {
    id: 'rights',
    heading: '7. Your rights',
    paragraphs: [
      'Depending on where you live, you may have the right to access, correct, delete, or restrict use of your personal information, and to object to certain processing. We will respond to requests within the period required by applicable law.',
    ],
    placeholder:
      'confirm which frameworks apply (for example state privacy laws in the US, or the GDPR for visitors in Europe) and the contact route for requests.',
  },
  {
    id: 'security',
    heading: '8. Security',
    paragraphs: [
      'We take reasonable measures to protect information submitted through the site, including serving the site over HTTPS and limiting access to enquiry data to the people who need it.',
    ],
  },
  {
    id: 'children',
    heading: '9. Children',
    paragraphs: [
      'This website is intended for business use and is not directed at children. We do not knowingly collect information from children.',
    ],
  },
  {
    id: 'changes',
    heading: '10. Changes to this policy',
    paragraphs: [
      'This policy may be updated as the website and our tooling change. Material changes will be reflected on this page with a revised date.',
    ],
  },
  {
    id: 'contact',
    heading: '11. Contacting us about privacy',
    paragraphs: [
      'Privacy questions and rights requests can be directed to connect@digaptics.com by email. Our physical mailing address is Digaptics Inc, 200 South Wacker Dr, Chicago, Illinois.',
    ],
    placeholder: 'publish a dedicated privacy contact address and, if required, a designated data protection officer.',
  },
];

export default function PrivacyPage() {
  useDocumentMeta({
    title: 'Privacy Policy | Digaptics Data Governance & Transparency',
    description:
      'Understand how Digaptics handles information collected through this website, including contact form submissions, cookies, and your privacy rights.',
    path: '/privacy',
  });

  return (
    <LegalLayout
      title="Privacy Policy"
      breadcrumbLabel="Privacy Policy"
      lede="How information submitted through this website is collected, used, and stored."
      notice="This is a starter policy prepared alongside the website build. Highlighted items need business confirmation and legal review before launch. It is not legal advice."
      sections={sections}
      updated="Last reviewed: not yet published. Add the effective date once legal review is complete."
    />
  );
}
