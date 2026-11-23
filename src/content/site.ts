/**
 * Site-wide configuration for Likoudis Ventures.
 * Edit this file to update site metadata, navigation, and global content.
 */

export const site = {
  name: 'Likoudis Ventures',
  legalEntity: 'Likoudis Legacy LLC',
  dba: 'Likoudis Ventures',
  headline: 'A few things run in the family.',
  intro:
    "Likoudis Ventures brings together our work in hospitality, design, art, and consulting, along with a few ideas we're still developing. Based in Baltimore, with roots in Kefalonia and the Finger Lakes.",
  seoTitle: 'Likoudis Ventures | Hospitality, Design, Art & Consulting',
  description:
    'Family ventures based in Baltimore, with roots in Kefalonia and the Finger Lakes. Explore hospitality, design, original art, consulting, and developing projects.',
  seat: 'Baltimore',
  greekRoot: 'Κεφαλονιά',
  /** Final production domain. Canonical URLs use this. */
  url: 'https://likoudisventures.com',
  email: 'hello@likoudisventures.com',
} as const;

export const nav = {
  primary: [
    { label: 'The Ventures', href: '/#ventures' },
    { label: 'The Family', href: '/about' },
  ],
  cta: { label: 'Get in Touch', href: '/contact' },
} as const;

export const footer = {
  ventures: [
    { label: 'Ithaca House', href: '/divisions/ithaca-house' },
    { label: 'The Studio', href: '/divisions/the-studio' },
    { label: 'The Easel', href: '/divisions/the-easel' },
    { label: 'The Workshop', href: '/divisions/the-workshop' },
    { label: 'The Collection', href: '/collection', sub: true },
    { label: 'The Table', href: '/divisions/the-table' },
  ],
  more: [
    { label: 'About the family', href: '/about' },
    { label: 'The Branch', href: '/the-branch' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

/** Choices for "What is this about?" on the contact form. */
export const inquiryTopics = [
  'Ithaca House',
  'The Studio',
  'The Easel',
  'The Workshop',
  'The Table',
  'The Collection',
  'General Inquiry',
] as const;
