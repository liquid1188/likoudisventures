/**
 * The five divisions of Likoudis Ventures.
 * Each division has its own subpage at /divisions/[slug].
 *
 * Array order is meaningful: this is the order olives appear left-to-right
 * on the homepage interactive olive branch and the order divisions list
 * on the homepage. The middle division (index 2) sits at the apex of the
 * branch as the centerpiece olive.
 *
 * Order:
 *   0. Ithaca House  — far left (the family seat)
 *   1. The Workshop  — left
 *   2. The Studio    — centerpiece
 *   3. The Easel     — right
 *   4. The Table     — far right (the line we send out)
 *
 * To add or modify a division: edit this file. The site rebuilds automatically.
 */

export type DivisionStatus = 'active' | 'forthcoming';
export type FamilyMemberId = 'andrew' | 'caroline' | 'elena' | 'luke' | 'jake';

export interface DivisionLead {
  id: FamilyMemberId;
  /** Domain-specific role within this division, e.g., "Operational Director", "Director of Hospitality", "Lead Designer". */
  role: string;
}

export interface Division {
  slug: string;
  name: string;
  greek: string;
  greekTransliteration: string;
  greekTranslation: string;
  status: DivisionStatus;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  offerings: string[];
  ctaLabel: string;
  ctaType: 'inquiry' | 'notify';
  themeColor: 'navy' | 'olive' | 'sky' | 'ochre';
  notes?: string;
  notesLinks?: Array<{ label: string; href: string; descriptor?: string }>;
  /** Family members who lead this division. Each carries a domain-specific role for this division only. */
  leads: DivisionLead[];
}

export const divisions: Division[] = [
  {
    slug: 'ithaca-house',
    name: 'Ithaca House',
    greek: 'Ἰθάκη',
    greekTransliteration: 'Ithakē',
    greekTranslation: 'Ithaca',
    status: 'active',
    tagline: 'Hospitality and stays, kept to a hotel standard.',
    shortDescription:
      'Short-term rentals operated to a hotel standard. Currently in Baltimore. Selective expansion along the Mid-Atlantic to follow.',
    longDescription:
      "Ithaca House is the hospitality division of the house. The name carries two anchors: the Greek island that sits beside our family's Kefalonia in the Ionian chain, and the upstate New York town near where our family settled when they came west.\n\nWe operate short-term rentals to a hotel standard. Careful turnover, considered welcome, properties chosen for character rather than yield. Baltimore today; selective expansion along the Mid-Atlantic to follow.",
    offerings: [
      'Short-term rentals in Baltimore',
      'Boutique property management',
      'Curated guest welcomes and provisioning',
      'Experiences (Greek dinners, kayaking, basilica visits, and more)',
      'Selective portfolio expansion across the Mid-Atlantic',
      'Small private gatherings and events on request',
    ],
    ctaLabel: 'Inquire About a Stay',
    ctaType: 'inquiry',
    themeColor: 'sky',
    notes:
      'A note on the name. In Kioni, a small village on the north coast of Ithaka, two Likoudis-named guesthouses already welcome travelers: Likoudis Villas, run by Paul and Penelope Likoudis on a hillside above the harbor since 1998, and Likoudis Apartments, a smaller stone-and-wood building nearby. Across the channel in Argostoli, the capital of Kefalonia, Melissa Likoudis is a patisserie selling traditional sweets of the island (mantola, mantolato, pasteli) alongside local wines and honey. We do not operate any of them. We acknowledge them here as kin. If your trip takes you to the Ionian instead of Baltimore, find them.',
    notesLinks: [
      {
        label: 'Likoudis Villas',
        href: 'https://www.facebook.com/likoudisVillas.gr/',
        descriptor: 'Paul & Penelope · Kioni, Ithaka',
      },
      {
        label: 'Likoudis Apartments',
        href: 'https://www.ionianislandholidays.com/property/likoudis-apartments',
        descriptor: 'via Ionian & Aegean Island Holidays · Kioni, Ithaka',
      },
      {
        label: 'Melissa Likoudis',
        href: 'https://greece.terrabook.com/kefalonia/page/melissa-likoudis/',
        descriptor: 'Patisserie · Argostoli, Kefalonia',
      },
    ],
    leads: [
      { id: 'caroline', role: 'Director of Hospitality' },
      { id: 'andrew', role: 'Experience Curator' },
    ],
  },
  {
    slug: 'the-workshop',
    name: 'The Workshop',
    greek: 'Ἐργαστήριον',
    greekTransliteration: 'Ergastírion',
    greekTranslation: 'Workshop',
    status: 'active',
    tagline: 'Services, advisory, and custom commissions.',
    shortDescription:
      'For projects that do not fit a standard package. By appointment, by referral, by careful conversation.',
    longDescription:
      "The Workshop is the family's services arm. Advisory engagements, brokerage and sourcing work, custom curation, bespoke commissions. Anything that calls for a longer conversation than a standard service form can support.\n\nThis is the division that begins with a phone call rather than a price list. We work with a small number of clients at a time, on projects that warrant the attention.",
    offerings: [
      'Strategic advisory and consulting engagements',
      "Brokerage services (sourcing specific items on a client's behalf)",
      'Bespoke curation projects (private libraries, art acquisitions, gift sourcing)',
      'Custom-built solutions outside the standard division offerings',
      'One-off projects, by appointment',
    ],
    ctaLabel: 'Open a Conversation',
    ctaType: 'inquiry',
    themeColor: 'olive',
    leads: [
      { id: 'jake', role: 'Operational Director' },
      { id: 'luke', role: 'Sourcing Director' },
    ],
  },
  {
    slug: 'the-studio',
    name: 'The Studio',
    greek: 'Στούντιο',
    greekTransliteration: 'Stoúntio',
    greekTranslation: 'Studio',
    status: 'active',
    tagline: 'Web design, photography, and content creation.',
    shortDescription:
      'Web design, photography, and content creation for businesses that have outgrown the template economy.',
    longDescription:
      "The Studio is the digital and visual practice of the house. Three disciplines under one roof: web design and build, photography for editorial and brand use, and content creation. Writing, design systems, identity work, and the small craft of making a brand sound like a person.\n\nWebsites are built to be owned outright by the client. No subscriptions, no platforms held hostage, no recurring license fees. Performance-tested, accessible, and yours.",
    offerings: [
      'Custom websites, full design and build, owned outright by the client',
      'Photography for editorial, product, and brand portraiture',
      'Content creation, writing, editorial design, and visual systems',
      'Brand identity, logo design, and design systems',
      'Site rebuilds and migrations from page-builder platforms',
      'Newsletter and Substack design',
      'Ongoing maintenance and hosting (optional)',
    ],
    ctaLabel: 'Begin a Project',
    ctaType: 'inquiry',
    themeColor: 'navy',
    leads: [
      { id: 'andrew', role: 'Operational Director' },
      { id: 'elena', role: 'Lead Designer' },
    ],
  },
  {
    slug: 'the-easel',
    name: 'The Easel',
    greek: 'Καβαλέτο',
    greekTransliteration: 'Kavaléto',
    greekTranslation: 'Easel',
    status: 'active',
    tagline: 'Original art by Caroline and Elena Likoudis.',
    shortDescription:
      'Paintings, drawings, and prints from two sister studios. Available through each artist directly, with commissions arranged through the house.',
    longDescription:
      "The Easel is the family's drawing-and-painting studio, named for the tool that holds the work. Caroline and Elena Likoudis make original art under the same family name but in distinct practices. Caroline at Brush & Soul Studio, painting in oil and watercolor. Elena at Elena Likoudis Art, working in vibrant portraits, prints, and custom commissions.\n\nThe word kavaléto came into Greek from Italian during the centuries of Venetian rule in the Ionian islands. It is, in that small way, a word our family already knew before it ever became part of Likoudis Ventures.",
    offerings: [
      'Original paintings, oil and watercolor (Caroline)',
      'Original works, vibrant portraits and pieces (Elena)',
      'Limited print editions from both artists',
      'Commissioned portraits and custom pieces',
      'Direct correspondence with each artist',
    ],
    ctaLabel: 'Inquire About Work',
    ctaType: 'inquiry',
    themeColor: 'ochre',
    leads: [
      { id: 'elena', role: 'Creative Director' },
      { id: 'caroline', role: 'Lead Artist, Brush & Soul Studio' },
    ],
  },
  {
    slug: 'the-table',
    name: 'The Table',
    greek: 'Τράπεζα',
    greekTransliteration: 'Trápeza',
    greekTranslation: 'Table',
    status: 'forthcoming',
    tagline: 'Wine and pantry, with origin.',
    shortDescription:
      'A line of pantry goods, mostly Greek, occasionally from upstate New York. Wine, olive oil, olives, honey, vinegar, with our name beside the producer’s.',
    longDescription:
      "The Table holds the family's pantry line. Wines from named Greek appellations and from the Finger Lakes country where the family settled three generations ago. Spirits from traditional distillers. Olive oil from single-estate producers. Table olives in the Kefaloniote tradition. Honey from Greek apiaries. Vinegars rounding out the line. Shelf-stable by design. What travels well and what keeps.\n\nEvery product carries the Likoudis name beside the producer's, and a record of where it came from. We source from people we know, in places that raised us, and we put the name down on each label.",
    offerings: [
      'Greek wines: Robola, Assyrtiko, Agiorgitiko',
      'Finger Lakes wines: Riesling, Cabernet Franc, and others from upstate New York',
      'Spirits: ouzo, tsipouro, mastiha liqueur, Metaxa',
      'Olive oil, single-estate, from Kefalonia and beyond',
      'Olives, table and martini, brined in the Kefaloniote tradition',
      'Honey, sourced from named Greek apiaries',
      'Vinegars and other pantry goods',
    ],
    ctaLabel: 'Notify Me When This Launches',
    ctaType: 'notify',
    themeColor: 'olive',
    leads: [
      { id: 'luke', role: 'Operational Director' },
      { id: 'jake', role: 'Sourcing Director' },
    ],
  },
];

// Helper to fetch a single division by slug
export function getDivision(slug: string): Division | undefined {
  return divisions.find((d) => d.slug === slug);
}

// Helper to get only active divisions
export function getActiveDivisions(): Division[] {
  return divisions.filter((d) => d.status === 'active');
}

export function getForthcomingDivisions(): Division[] {
  return divisions.filter((d) => d.status === 'forthcoming');
}
