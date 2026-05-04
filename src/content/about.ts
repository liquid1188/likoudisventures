/**
 * Content for the /about page.
 * Edit this file to update family bios and house philosophy.
 *
 * On portraits:
 *   - `portrait` is an optional public-path image (e.g., '/andrew-likoudis.jpg').
 *   - When omitted, the page renders an elegant monogram card with the member's
 *     initials in the brand register. Swap in a real photograph by adding the file
 *     to /public and referencing it here.
 */

export interface FamilyMember {
  /** Stable slug-style id used to cross-reference from divisions.ts */
  id: 'andrew' | 'caroline' | 'elena' | 'luke' | 'jake';
  name: string;
  role: string;
  divisions: string[];
  bio: string;
  portrait?: string;
  /** Optional personal/professional site for this member */
  siteUrl?: string;
  /** Display label for the site link (e.g., 'brushandsoulstudio.com') */
  siteLabel?: string;
  /** Sort order on the family grid */
  order: number;
}

export const about = {
  hero: {
    eyebrow: 'About the House',
    title: 'A family, with our names on the door.',
    titleEmphasis: 'our names on the door',
    lede: 'Likoudis Ventures is the working life of three brothers and two sisters. The house is based in Baltimore; the family is rooted there, with one studio in Pittsburgh.',
  },

  origin: {
    heading: 'From Kefalonia, by way of upstate New York.',
    body: [
      "The Likoudis family came from Kefalonia, the largest of the Ionian islands. Three generations ago we crossed and settled in upstate New York. Greek by name, American by passport, and shaped by both.",
      'A few decades earlier, the same line tended olive groves above a fishing village called Kioni on the island of Ithaca. A family of the same name still keeps a guesthouse there, on a hill above the harbor. We have not yet traced the exact branching of the tree, but the name is small enough across two islands that the kinship is almost certainly real.',
      'The olive branch on our mark carries six olives, one for each division of the house. The branch will grow another olive when the house grows another division. The tree will keep its shape regardless.',
    ],
  },

  philosophy: {
    heading: 'How we work.',
    body: [
      'Six divisions, one standard. Build the thing well and sign your name to it. That is the whole rule.',
    ],
  },

  family: {
    heading: 'The Board.',
    intro: 'Likoudis Ventures is governed by its founding family. Three brothers and two sisters, each leading the divisions where their work and judgment live.',
    members: [
      {
        id: 'andrew',
        name: 'Andrew Likoudis',
        role: 'Founder · Operational Director, The Studio · Operational Director, Ithaca House',
        divisions: ['The Studio', 'Ithaca House', 'The Branch'],
        bio: 'Andrew runs operations on The Studio (with Elena leading creative) and Ithaca House (with Caroline leading hospitality). He also writes The Branch, the monthly letter from the family. A graduate of Towson University and Franciscan University of Steubenville. Separately, he founded the Likoudis Legacy Foundation, a Catholic research institute named for his late grandfather, where he edits The Kydones Review.',
        portrait: '/andrew-likoudis.jpg',
        siteLabel: 'andrewlikoudis.com',
        siteUrl: 'https://andrewlikoudis.com',
        order: 1,
      },
      {
        id: 'luke',
        name: 'Luke Likoudis',
        role: 'Operational Director, The Workshop · Operational Director, The Table · Curatorial Director, The Likoudis Collection',
        divisions: ['The Workshop', 'The Likoudis Collection', 'The Table'],
        bio: 'Luke runs operations across The Workshop, The Table, and The Likoudis Collection — the bespoke and high-ticket side of the house. An officer in the United States Coast Guard.',
        order: 2,
      },
      {
        id: 'jake',
        name: 'Jake Likoudis',
        role: 'Sourcing & Logistics Director, The Workshop · Sourcing Director, The Table · Acquisitions Director, The Likoudis Collection',
        divisions: ['The Workshop', 'The Likoudis Collection', 'The Table'],
        bio: 'Jake handles sourcing and supply across The Workshop, The Table, and The Likoudis Collection. He works the procurement side opposite his twin. Also an officer in the United States Coast Guard.',
        order: 3,
      },
      {
        id: 'caroline',
        name: 'Caroline Likoudis',
        role: 'Hospitality Director, Ithaca House · Lead Artist, Brush & Soul Studio',
        divisions: ['Ithaca House', 'The Easel'],
        bio: 'Caroline runs hospitality at Ithaca House and is the lead artist behind Brush & Soul Studio, one of two studios under The Easel. She works in oil and watercolor: paintings and limited prints. She works from Baltimore. A graduate of the Fashion Institute of Technology.',
        portrait: '/caroline-likoudis.jpg',
        siteLabel: 'brushandsoulstudio.com',
        siteUrl: 'https://www.brushandsoulstudio.com',
        order: 4,
      },
      {
        id: 'elena',
        name: 'Elena Likoudis',
        role: 'Creative Director, The Studio · Lead Artist, Elena Likoudis Art',
        divisions: ['The Studio', 'The Easel'],
        bio: 'Elena leads creative on The Studio and is the lead artist behind Elena Likoudis Art, one of two studios under The Easel. A senior user-experience designer by trade. She works from Pittsburgh.',
        portrait: '/elena-likoudis.webp',
        siteLabel: 'elenalikoudisart.com',
        siteUrl: 'https://elenalikoudisart.com',
        order: 5,
      },
    ] satisfies FamilyMember[],
  },
};

/**
 * Look up a family member by their stable id.
 * Used by division pages to render lead photo + name rows.
 */
export function getFamilyMember(id: FamilyMember['id']): FamilyMember | undefined {
  return about.family.members.find((m) => m.id === id);
}
