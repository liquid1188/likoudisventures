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
    'A family-held holding company operating across web design, hospitality, custom commissions, art, and forthcoming Greek goods. Baltimore, with roots in Kefalonia.',
  founded: 2026,
  foundedRoman: 'MMXXVI',
  seat: 'Baltimore, Maryland',
  greekRoot: 'Κεφαλονιά',
  greekRootClassical: 'ἐκ Κεφαλονιάς',
  url: 'https://likoudisventures.com',
  email: 'hello@likoudisventures.com',

  topRule: 'A Family-Held House of Enterprises · Baltimore, Maryland',

  // The line that appears once on the About page tying Ithaca NY to Ithaca, Greece
  ithacaNote:
    'Named for both the island that called our family home and the town that raised the next generation.',

  // Family separation language (legal)
  separationDisclaimer:
    'A separate enterprise from the Likoudis Legacy Foundation.',
} as const;

export const nav = {
  primary: [
    { label: 'Divisions', href: '/#divisions' },
    { label: 'About', href: '/about' },
    { label: 'The Branch', href: '/the-branch' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Begin', href: '/contact' },
} as const;

export const footer = {
  columns: [
    {
      heading: 'Divisions',
      links: [
        { label: 'The Studio', href: '/divisions/the-studio' },
        { label: 'The Workshop', href: '/divisions/the-workshop' },
        { label: 'Ithaca House', href: '/divisions/ithaca-house' },
        { label: 'The Easel', href: '/divisions/the-easel' },
        { label: 'The Table', href: '/divisions/the-table' },
        { label: 'The Likoudis Collection', href: '/divisions/the-likoudis-collection' },
      ],
    },
    {
      heading: 'The House',
      links: [
        { label: 'About', href: '/about' },
        { label: 'The Branch', href: '/the-branch' },
        { label: 'Press & Inquiry', href: '/contact' },
      ],
    },
    {
      heading: 'Correspondence',
      links: [
        { label: 'hello@likoudisventures.com', href: 'mailto:hello@likoudisventures.com' },
        { label: 'Begin a Project', href: '/contact' },
      ],
    },
  ],
} as const;
