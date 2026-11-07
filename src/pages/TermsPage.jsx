import useDocumentMeta from '../hooks/useDocumentMeta.js';
import LegalLayout from '../components/ui/LegalLayout.jsx';

/**
 * Starter terms of use for the website itself. Commercial terms (payment,
 * cancellation, warranties) are deliberately not invented here: they belong in
 * a signed client agreement and are marked for legal drafting.
 */
const sections = [
  {
    id: 'acceptance',
    heading: '1. Acceptance of these terms',
    paragraphs: [
      'By using this website you agree to these terms of use. If you do not agree with them, please do not use the site.',
    ],
    placeholder: 'confirm the legal entity name and governing jurisdiction.',
  },
  {
    id: 'site-purpose',
    heading: '2. What this website is',
    paragraphs: [
      'This website describes the services Digaptics offers and provides a way to make contact. Nothing on it constitutes an offer, a quotation, or a commitment to provide services on particular terms.',
    ],
  },
  {
    id: 'no-contract',
    heading: '3. No agreement is formed here',
    paragraphs: [
      'Submitting the contact form does not create a contract. Any engagement begins only when a written agreement is signed by both parties.',
    ],
    placeholder:
      'reference the standard client services agreement once it has been drafted and approved.',
  },
  {
    id: 'content',
    heading: '4. Website content',
    paragraphs: [
      'Content on this site is provided for general information. We aim to keep it accurate and current, but we do not guarantee that every statement remains accurate at all times, and content may change without notice.',
    ],
  },
  {
    id: 'ip',
    heading: '5. Intellectual property',
    paragraphs: [
      'The Digaptics name, website design, text, and graphics are owned by Digaptics or its licensors. You may view and print pages for your own reference. Republishing, copying, or commercial reuse requires written permission.',
      'Ownership of work produced for clients is governed by the relevant client agreement, not by these website terms.',
    ],
  },
  {
    id: 'acceptable-use',
    heading: '6. Acceptable use',
    paragraphs: ['When using this site you agree not to:'],
    list: [
      'Attempt to gain unauthorized access to the site or its hosting infrastructure',
      'Use automated tools to scrape or overload the site',
      'Submit unlawful, misleading, or abusive content through the contact form',
      'Use the contact form to send unsolicited sales or marketing material',
    ],
  },
  {
    id: 'third-party',
    heading: '7. Third-party links',
    paragraphs: [
      'This site links to external profiles and resources, including our social media profiles. We are not responsible for the content, availability, or policies of third-party websites.',
    ],
  },
  {
    id: 'availability',
    heading: '8. Availability',
    paragraphs: [
      'We aim to keep the site available, but it may be unavailable during maintenance or because of issues outside our control. We do not guarantee uninterrupted access.',
    ],
  },
  {
    id: 'liability',
    heading: '9. Liability',
    paragraphs: [
      'To the extent permitted by law, Digaptics is not liable for loss arising from reliance on website content. Nothing in these terms limits liability that cannot be limited by law.',
    ],
    placeholder:
      'have the liability position drafted or reviewed by a qualified lawyer in the governing jurisdiction.',
  },
  {
    id: 'commercial-terms',
    heading: '10. Commercial terms',
    paragraphs: [
      'Payment schedules, cancellation rights, warranties, support levels, and similar commercial terms are not set out on this website. They are agreed in writing for each engagement.',
    ],
    placeholder:
      'link to the standard client agreement or statement of work template once it exists.',
  },
  {
    id: 'governing-law',
    heading: '11. Governing law',
    paragraphs: [
      'These terms are intended to be governed by the laws of the jurisdiction in which Digaptics is established.',
    ],
    placeholder: 'confirm the governing law and the courts that have jurisdiction.',
  },
  {
    id: 'changes',
    heading: '12. Changes to these terms',
    paragraphs: [
      'We may update these terms as the website or our services change. The version published here is the one that applies to your use of the site.',
    ],
  },
];

export default function TermsPage() {
  useDocumentMeta({
    title: 'Terms of Use | Digaptics Website Terms & Conditions',
    description:
      'Review the terms governing the use of the Digaptics website, intellectual property policies, acceptable use, and our relationship to signed client services agreements.',
    path: '/terms',
  });

  return (
    <LegalLayout
      title="Terms of Use"
      breadcrumbLabel="Terms of Use"
      lede="The terms that apply when you use this website. Commercial terms for projects are agreed separately in writing."
      notice="This is a starter document prepared with the website build. Highlighted items need business confirmation and legal review before launch. It is not legal advice."
      sections={sections}
      updated="Last reviewed: not yet published. Add the effective date once legal review is complete."
    />
  );
}
