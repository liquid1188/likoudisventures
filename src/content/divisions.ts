/**
 * The six divisions of Likoudis Ventures.
 * Each division has its own subpage at /divisions/[slug].
 *
 * To add or modify a division: edit this file. The site rebuilds automatically.
 */

export type DivisionStatus = 'active' | 'forthcoming';

export interface Division {
  slug: string;
  number: string; // Roman numeral display (i, ii, iii, iv, v, vi)
  name: string;
  greek: string;
  greekTransliteration: string;
  greekTranslation: string;
  status: DivisionStatus;
  tagline: string; // One-line summary, used in cards
  shortDescription: string; // 1-2 sentences, used on homepage division card hover
  longDescription: string; // 2-3 paragraph description for subpage hero
  offerings: string[]; // Bullet list of what this division offers
  ctaLabel: string; // "Begin a Project", "Inquire", "Notify Me", etc.
  ctaType: 'inquiry' | 'notify'; // Determines which form appears on subpage
  themeColor: 'navy' | 'olive' | 'sky' | 'ochre'; // Top border color on cards
  notes?: string; // Optional special notes for the subpage (e.g., partnership disclosure)
}

export const divisions: Division[] = [
  {
    slug: 'the-studio',
    number: 'i',
    name: 'The Studio',
    greek: 'Στούντιο',
    greekTransliteration: 'Stoúntio',
    greekTranslation: 'Studio',
    status: 'active',
    tagline: 'Web design, content creation, and brand identity.',
    shortDescription:
      'Hand-built websites and editorial work for businesses that have outgrown the template economy.',
    longDescription:
      "The Studio is where the digital work of the house is made. It contains Lickity Split Web Design as its productized line, alongside content creation, brand identity work, and editorial production for clients who want their digital presence to read like something written by a person.\n\nWe build websites that the client owns outright. No subscriptions, no platforms held hostage, no recurring license fees. The work is performance-tested, accessible, and yours.",
    offerings: [
      'Custom websites — full design and build (Lickity Split Web Design)',
      'Site rebuilds and migrations from page-builder platforms',
      'Brand identity, logo design, and visual systems',
      'Editorial writing and content production',
      'Newsletter and Substack design',
      'Ongoing maintenance and hosting (optional)',
    ],
    ctaLabel: 'Begin a Project',
    ctaType: 'inquiry',
    themeColor: 'navy',
  },
  {
    slug: 'the-workshop',
    number: 'ii',
    name: 'The Workshop',
    greek: 'Ἐργαστήριον',
    greekTransliteration: 'Ergastírion',
    greekTranslation: 'Workshop',
    status: 'active',
    tagline: 'Custom commissions, advisory, and one-off projects.',
    shortDescription:
      'For projects that do not fit the standard package. By appointment, by referral, by careful conversation.',
    longDescription:
      "The Workshop is where one-off projects come to be made. Custom curation, brokerage work, advisory engagements, bespoke commissions — anything that calls for a longer conversation than a standard service form can support.\n\nThis is the division that begins with a phone call rather than a price list. We work with a small number of clients at a time, on projects that warrant the attention.",
    offerings: [
      'Bespoke curation projects (private libraries, art acquisitions, gift sourcing)',
      'Brokerage services — sourcing specific items on a client\'s behalf',
      'Strategic advisory and consulting engagements',
      'Custom-built solutions outside the standard division offerings',
      'One-off projects, by appointment',
    ],
    ctaLabel: 'Open a Conversation',
    ctaType: 'inquiry',
    themeColor: 'olive',
  },
  {
    slug: 'ithaca-house',
    number: 'iii',
    name: 'Ithaca House',
    greek: 'Ἰθάκη',
    greekTransliteration: 'Ithakē',
    greekTranslation: 'Ithaca',
    status: 'active',
    tagline: 'Hospitality, properties, and stays.',
    shortDescription:
      'Short-term rentals operated to a hotel standard. Currently in Baltimore; expanding selectively.',
    longDescription:
      "Ithaca House is the hospitality division of the family. The name carries two anchors: the Greek island that sits beside our family's Kefalonia in the Ionian chain, and the upstate New York town near where our extended family settled when they came west.\n\nWe operate short-term rentals to a hotel standard — careful turnover, considered welcome, properties chosen for character rather than yield. Baltimore today; selective expansion along the Mid-Atlantic to follow.",
    offerings: [
      'Short-term rentals in Baltimore (Airbnb)',
      'Boutique property management',
      'Curated guest experiences and welcome provisions',
      'Future: small-portfolio expansion in the Mid-Atlantic',
      'Future: event hosting and small gatherings',
    ],
    ctaLabel: 'Inquire About a Stay',
    ctaType: 'inquiry',
    themeColor: 'sky',
    notes:
      'A note on the name: in Kioni, on the island of Ithaca itself, Likoudis Villas has welcomed travelers since 1998 — operated by relatives of our family line. We do not operate Likoudis Villas; bookings are made directly through them. We acknowledge them here as kin, not as a commercial partner.',
  },
  {
    slug: 'the-easel',
    number: 'iv',
    name: 'The Easel',
    greek: 'Καβαλέτο',
    greekTransliteration: 'Kavaléto',
    greekTranslation: 'Easel',
    status: 'active',
    tagline: 'Original drawings and art by the Likoudis sisters.',
    shortDescription:
      'Original work by Caroline and Elena Likoudis. Available by commission and through limited releases.',
    longDescription:
      "The Easel is the family's drawing studio, named for the tool that holds the work. Caroline and Elena Likoudis make original art — drawings primarily, with occasional editions and prints.\n\nThe word kavaléto came into Greek from Italian during the centuries of Venetian rule in the Ionian islands. It is, in that small way, a word our family already knew before it ever became part of Likoudis Ventures.",
    offerings: [
      'Original drawings — one-of-one works, signed',
      'Limited print editions',
      'Commissioned portraits and custom drawings',
      'Direct correspondence with the artists',
    ],
    ctaLabel: 'Inquire About Work',
    ctaType: 'inquiry',
    themeColor: 'ochre',
  },
  {
    slug: 'the-table',
    number: 'v',
    name: 'The Table',
    greek: 'Τράπεζα',
    greekTransliteration: 'Trápeza',
    greekTranslation: 'Table',
    status: 'forthcoming',
    tagline: 'Greek food and spirits, sourced and signed.',
    shortDescription:
      'A line of Greek consumables — olive oil, honey, olives, eventually wine and spirits — with our name on each label.',
    longDescription:
      "The Table is forthcoming. It will hold the family's line of Greek consumables: olive oil from single-estate producers, honey from Greek apiaries, olives in the Kefaloniote tradition, vinegars, and eventually feta, Greek wines, and traditional spirits.\n\nEvery product carries the Likoudis name and the story of where it came from. We are not blending, not generic-labeling, not selling whatever fills a shelf. We are sourcing carefully and putting our name on the label only when we can defend what is inside it.",
    offerings: [
      'Olive oil — single-estate, Kefalonia and beyond',
      'Honey — sourced from Greek apiaries',
      'Olives — table olives and martini olives, brined in the Kefaloniote tradition',
      'Vinegars and pantry staples',
      'Future: feta and refrigerated goods',
      'Future: Greek wines (Robola, Assyrtiko, Agiorgitiko)',
      'Future: spirits (ouzo, tsipouro, mastiha liqueur, Metaxa)',
    ],
    ctaLabel: 'Notify Me When This Launches',
    ctaType: 'notify',
    themeColor: 'olive',
  },
  {
    slug: 'the-likoudis-collection',
    number: 'vi',
    name: 'The Likoudis Collection',
    greek: 'Ἡ Συλλογή Λικούδη',
    greekTransliteration: 'Hē Syllogē Likoúdē',
    greekTranslation: 'The Likoudis Collection',
    status: 'forthcoming',
    tagline: 'Curated objects, art, and editions from select makers and provenances.',
    shortDescription:
      'Acquired and curated work — icons, ceramics, watches, antiques, art — assembled with a single curatorial intelligence behind it.',
    longDescription:
      "The Likoudis Collection is the curated luxury division. It is forthcoming.\n\nUnlike The Easel, which holds work made by the family, The Collection holds work the family has acquired and chosen to offer onward. Hand-painted Byzantine icons. Greek ceramics from named producers. Olive-wood objects. Worry beads. Limited art editions. Vintage and antique pieces by appointment.\n\nThe family name on the division is intentional. Galleries and collections trade on the curator's name — the Frick, the Phillips, the Wallace — and we wanted ours visible on the most discriminating part of the house.",
    offerings: [
      'Hand-painted Byzantine icons (commissioned from icon-writers)',
      'Greek ceramics — traditional and contemporary',
      'Olive-wood objects, kitchen pieces, and decorative work',
      'Textiles — handwoven runners, throws',
      'Worry beads (komboloi) and small heritage objects',
      'Limited edition art prints and original works from select artists',
      'Future: vintage and antique pieces (jewelry, watches, furniture) by appointment',
    ],
    ctaLabel: 'Notify Me When This Launches',
    ctaType: 'notify',
    themeColor: 'navy',
  },
];

// Helper to fetch a single division by slug
export function getDivision(slug: string): Division | undefined {
  return divisions.find((d) => d.slug === slug);
}

// Helper to get only active divisions (for some homepage logic)
export function getActiveDivisions(): Division[] {
  return divisions.filter((d) => d.status === 'active');
}

export function getForthcomingDivisions(): Division[] {
  return divisions.filter((d) => d.status === 'forthcoming');
}
