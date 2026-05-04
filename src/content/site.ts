/**
 * Site-wide configuration for Likoudis Ventures.
 * Edit this file to update site metadata, navigation, and global content.
 */

export const site = {
  name: 'Likoudis Ventures',
  legalEntity: 'Likoudis Legacy LLC',
  dba: 'Likoudis Ventures',
  tagline: 'A house of considered enterprises.',
  description:
    'A family business in Baltimore. Five siblings working under one name across hospitality, services and advisory, web design, original art, and a pantry from the Ionian islands and the Finger Lakes.',
  founded: 2026,
  seat: 'Baltimore',
  greekRoot: 'Κεφαλονιά',
  greekRootClassical: 'ἐκ Κεφαλονιάς',
  url: 'https://likoudisventures.com',
  email: 'hello@likoudisventures.com',

  // The line that appears once on the About page tying Ithaca NY to Ithaca, Greece
  ithacaNote:
    'Named for both the island that called our family home and the town that raised the next generation.',
} as const;

export const nav = {
  primary: [
    { label: 'Divisions', href: '/#divisions' },
    { label: 'About', href: '/about' },
    { label: 'The Branch', href: '/the-branch' },
  ],
  cta: { label: 'Begin', href: '/contact' },
} as const;

export const footer = {
  columns: [
    {
      heading: 'Divisions',
      links: [
        { label: 'Ithaca House', href: '/divisions/ithaca-house' },
        { label: 'The Workshop', href: '/divisions/the-workshop' },
        { label: 'The Studio', href: '/divisions/the-studio' },
        { label: 'The Easel', href: '/divisions/the-easel' },
        { label: 'The Table', href: '/divisions/the-table' },
      ],
    },
    {
      heading: 'The House',
      links: [
        { label: 'About', href: '/about' },
        { label: 'The Collection', href: '/collection' },
        { label: 'The Branch', href: '/the-branch' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      heading: 'Correspondence',
      links: [
        { label: 'hello@likoudisventures.com', href: 'mailto:hello@likoudisventures.com' },
      ],
    },
  ],
} as const;
