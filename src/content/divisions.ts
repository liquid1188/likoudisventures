/**
 * The five ventures of Likoudis Ventures.
 * Each has its own page at /divisions/[slug].
 *
 * Array order is meaningful. It is the order of the olives on the homepage
 * branch (left to right) and of the venture rows on the homepage: the three
 * established ventures first, then the two that are still developing.
 *
 * Status model
 *   status   'established' | 'developing'   what kind of activity this is
 *   inquiry  'open'        takes inquiries and bookings
 *            'selected'    developing, but accepts selected inquiries
 *            'launch-interest'  takes launch-notice signups only, no purchases
 *
 * The Likoudis Collection is a subordinate developing project under the
 * Workshop (see `collection` below), not a sixth venture.
 */

export type VentureStatus = 'established' | 'developing';
export type InquiryAvailability = 'open' | 'selected' | 'launch-interest';

export interface Division {
  slug: string;
  name: string;
  greek: string;
  greekTransliteration: string;
  status: VentureStatus;
  inquiry: InquiryAvailability;
  /** Short line shown with the olive on the homepage branch. */
  label: string;
  /** Text shown beneath the label for developing ventures. */
  statusNote?: string;
  /** Homepage card description (approved copy). */
  cardDescription: string;
  /** Homepage card action label. */
  cardAction: string;
  /** Page metadata. */
  seoTitle: string;
  seoDescription: string;
}

export const divisions: Division[] = [
  {
    slug: 'ithaca-house',
    name: 'Ithaca House',
    greek: 'Ἰθάκη',
    greekTransliteration: 'Ithakē',
    status: 'established',
    inquiry: 'open',
    label: 'Baltimore stays and hospitality',
    cardDescription:
      'Short-term stays in Baltimore, local hospitality, and practical assistance for fellow hosts.',
    cardAction: 'Explore Ithaca House',
    seoTitle: 'Ithaca House | Baltimore Stays and Hospitality',
    seoDescription:
      'Six Airbnb listings in East Baltimore, near Patterson Park and Canton, plus local hospitality and practical help for other hosts.',
  },
  {
    slug: 'the-studio',
    name: 'The Studio',
    greek: 'Στούντιο',
    greekTransliteration: 'Stoúntio',
    status: 'established',
    inquiry: 'open',
    label: 'Design, writing, and creative work',
    cardDescription:
      'Websites, user-experience design, writing, photography, graphic design, and interior styling.',
    cardAction: 'Visit the Studio',
    seoTitle: 'The Studio | Web Design, Writing, and Creative Work',
    seoDescription:
      'Web design, user-experience design, writing, photography, graphic design, and selected interior projects, including Lickity Split Web Design.',
  },
  {
    slug: 'the-easel',
    name: 'The Easel',
    greek: 'Καβαλέτο',
    greekTransliteration: 'Kavaléto',
    status: 'established',
    inquiry: 'open',
    label: 'Original art and commissions',
    cardDescription:
      'Original paintings, prints, and commissions by Caroline and Elena Likoudis, each working through her own artistic practice.',
    cardAction: 'See the Art',
    seoTitle: 'The Easel | Original Art by Caroline and Elena Likoudis',
    seoDescription:
      'Original paintings, prints, and commissions by Caroline Likoudis of Brush & Soul Studio and Elena Likoudis of Elena Likoudis Art.',
  },
  {
    slug: 'the-workshop',
    name: 'The Workshop',
    greek: 'Ἐργαστήριον',
    greekTransliteration: 'Ergastírion',
    status: 'developing',
    inquiry: 'selected',
    label: 'Consulting and research',
    statusNote: 'Developing',
    cardDescription:
      'Consulting, research, communications, and organizational support for businesses, nonprofits, and special projects.',
    cardAction: 'Explore the Workshop',
    seoTitle: 'The Workshop | Consulting and Research',
    seoDescription:
      'Research, consulting, communications, and practical support for businesses, nonprofit organizations, and individuals working through particular projects.',
  },
  {
    slug: 'the-table',
    name: 'The Table',
    greek: 'Τράπεζα',
    greekTransliteration: 'Trápeza',
    status: 'developing',
    inquiry: 'launch-interest',
    label: 'Wine and pantry goods',
    statusNote: 'In development',
    cardDescription:
      'A developing collection of wines and pantry goods inspired by Kefalonia and the Finger Lakes.',
    cardAction: "See What's Planned",
    seoTitle: 'The Table | Wine and Pantry Goods in Development',
    seoDescription:
      'A developing project centered on wines and pantry goods connected to Kefalonia, the Ionian Islands, and the Finger Lakes.',
  },
];

/** Supporting label shown on the homepage card for developing ventures. */
export const cardStatusLabel: Record<string, string> = {
  'the-workshop': 'Developing. Selected inquiries welcome.',
  'the-table': 'In development.',
};

/**
 * The Likoudis Collection: a subordinate developing project under the Workshop.
 * Not a venture. Keeps its /collection page.
 */
export const collection = {
  name: 'The Likoudis Collection',
  href: '/collection',
  parent: 'the-workshop',
  status: 'developing' as VentureStatus,
  inquiry: 'selected' as InquiryAvailability,
  /**
   * Internal content model for future development. Not displayed.
   * No individual objects are shown until they are actually available.
   */
  futureCategories: ['Books', 'Ceramics', 'Decorative objects', 'Antiques', 'Art', 'Furnishings'],
};

export function getDivision(slug: string): Division | undefined {
  return divisions.find((d) => d.slug === slug);
}

export function getEstablished(): Division[] {
  return divisions.filter((d) => d.status === 'established');
}

export function getDeveloping(): Division[] {
  return divisions.filter((d) => d.status === 'developing');
}
