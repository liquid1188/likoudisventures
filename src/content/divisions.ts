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
    tagline: 'Travel and stays, from Baltimore to the Ionian.',
    shortDescription:
      'The travel side of the house. Six family-run stays in Baltimore, experiences in the city, and travel notes for Kefalonia and Ithaka from the family that came from there.',
    longDescription:
      "Ithaca House is the travel side of the house. The name carries two anchors. One is the Greek island that sits beside our family's Kefalonia in the Ionian chain. The other is the upstate New York town near where our family settled when they came west.\n\nThe work runs in both directions. For people coming to Baltimore, we host six short-term rentals in Canton and Patterson Park, kept to a hotel standard, with experiences in the city alongside the stay. For people going out, we share the places we know first, starting with Kefalonia and Ithaka, where the family name still hangs on a guesthouse above the harbor at Kioni.\n\nA Morocco property is in early planning, the family's first stay abroad. Caroline, who leads the division, has lived in four countries and traveled to more than a dozen others. The travel side of Ithaca House draws on that.",
    offerings: [
      'Short-term rentals in Canton and Patterson Park, Baltimore',
      'Experiences in Baltimore, including Greek dinners, harbor kayaking, and basilica visits',
      'Travel notes for Kefalonia and Ithaka, with the family places we recommend',
      'Trip planning on request, for Greece and the Ionian islands',
      'Long-stay preparation, with reading lists, driving routes, and a stocked pantry',
      'Airbnb hosting consulting for other owners, covering setup, listing, and co-hosting',
      'A Morocco property, in early planning',
    ],
    ctaLabel: 'Plan a Stay or a Trip',
    ctaType: 'inquiry',
    themeColor: 'sky',
    notes:
      'In Kioni, on the north coast of Ithaka, two guesthouses carry the family name. Likoudis Villas has been run by Paul and Penelope Likoudis on a hillside above the harbor since 1998, and Likoudis Apartments is a smaller stone-and-wood building nearby. Across the channel in Argostoli, Melissa Likoudis is a patisserie selling the traditional sweets of the island (mantola, mantolato, pasteli) alongside local wines and honey. In Baltimore, we have built our own.',
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
    tagline: 'Consulting for founders, nonprofits, and small businesses.',
    shortDescription:
      'Nonprofit and business formation, strategic advisory, and marketing. By appointment, after a free first call.',
    longDescription:
      "The Workshop is the consulting arm of Likoudis Ventures. We help founders, small-business owners, ministries, and nonprofit leaders with nonprofit and business formation, strategic advisory, and marketing and brand strategy.\n\nAndrew Likoudis leads the work. He founded a Catholic research institute, took a second nonprofit through incorporation and IRS recognition, and built the family company and its web design studio.\n\nThis is the division that begins with a phone call rather than a price list. We work with a small number of clients at a time.",
    offerings: [
      'Nonprofit and business formation, from incorporation through IRS determination',
      'Strategic advisory for founders and nonprofit leaders',
      'Marketing and brand strategy, including positioning, campaigns, and outreach',
      'Grant research and application support',
      'One-off projects, by appointment',
    ],
    ctaLabel: 'Open a Conversation',
    ctaType: 'inquiry',
    themeColor: 'olive',
    leads: [
      { id: 'andrew', role: 'Principal' },
      { id: 'jake', role: 'Partner' },
      { id: 'luke', role: 'Partner' },
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
      "The Studio brings together Andrew’s work in web development and communications with Elena’s experience in user-experience and product design.\n\nThrough Lickity Split Web Design, Andrew offers affordable websites for small businesses and independent professionals. Elena operates her own design practice, specializing in UX, product design, and more extensive digital projects.\n\nWe also provide photography, writing, branding, and related creative services, depending on the needs of each project.\n\nOur approach emphasizes clear communication, functional design, and client ownership of the finished work.",
    offerings: [
      'Custom website design and development',
      'UX and product design',
      'Brand identity and visual design',
      'Photography for businesses, products, and editorial use',
      'Writing, editing, and digital content',
      'Website redesigns and migrations',
      'Newsletter and Substack design',
      'Optional maintenance and hosting',
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
      "The Table holds the family's pantry line. Wines from named Greek appellations and from the Finger Lakes country where the family settled three generations ago, along the long lakes that hold the wineries of upstate New York. The five of us grew up in that country. We know the lakes, the harvests, and the people who tend them. Spirits from traditional distillers. Olive oil from single-estate producers. Table olives in the Kefaloniote tradition. Honey from Greek apiaries. Vinegars rounding out the line. Shelf-stable by design. What travels well and what keeps.\n\nEvery product carries the Likoudis name beside the producer's, and a record of where it came from. We source from people we know, in places that raised us, and we put the name down on each label.",
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
