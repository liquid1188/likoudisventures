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
  /** Where to anchor the portrait crop. Default 'top' to keep heads whole. */
  portraitFocus?: 'top' | 'center';
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
    title: 'A family business, plainly stated.',
    titleEmphasis: 'plainly stated',
    lede: 'Likoudis Ventures is the working life of three brothers and two sisters. The house is based in Baltimore; the family is rooted there, with one studio in Pittsburgh.',
  },

  origin: {
    heading: 'From Kefalonia, by way of upstate New York.',
    body: [
      'The Likoudis family came from Kefalonia, the largest of the Ionian islands. Three generations ago, the family crossed and settled in upstate New York near Ithaca, a city named after its Greek counterpart in the Ionian islands.',
      'The same family still has kin tending olive groves above a fishing village called Kioni on the island of Ithaca. A guesthouse with our family name still stands there, on a hill above the harbor.',
      'The olive branch on our mark carries five olives, one for each division of the house. The names are in Greek because that is what we came from. The work is here because this is where the family built a life. Ithaca House, the workshop, the studio, the easel, and a pantry that draws from both shores.',
    ],
  },

  philosophy: {
    heading: 'How we work.',
    body: [
      'Five divisions, one standard. Build the thing well and sign your name to it. That is the whole rule.',
    ],
  },

  family: {
    heading: 'Three brothers, two sisters, one family.',
    intro: 'The board is the family. Each sibling leads the division where their work and judgment live, and supports another where their second skill belongs.',
    members: [
      {
        id: 'andrew',
        name: 'Andrew Likoudis',
        role: 'Founder · Operational Director, The Studio · Experience Curator, Ithaca House',
        divisions: ['The Studio', 'Ithaca House', 'The Branch'],
        bio: 'Andrew runs operations on The Studio with Elena leading design. At Ithaca House, where Caroline leads hospitality, he curates the experiences side: Greek dinners in the house, market runs, basilica visits with breakfast to follow, museum routing, harbor sailing arrangements, and pre-arrival reading lists for guests on long stays. He also writes The Branch, the monthly letter from the family. A graduate of Towson University and Franciscan University of Steubenville. Separately, he founded the Likoudis Legacy Foundation, a Catholic research institute named for his late grandfather, where he edits The Kydones Review.',
        portrait: '/andrew-likoudis.jpg',
        siteLabel: 'andrewlikoudis.com',
        siteUrl: 'https://andrewlikoudis.com',
        order: 1,
      },
      {
        id: 'caroline',
        name: 'Caroline Likoudis',
        role: 'Director of Hospitality, Ithaca House · Lead Artist, Brush & Soul Studio',
        divisions: ['Ithaca House', 'The Easel'],
        bio: 'Caroline leads hospitality at Ithaca House and runs Brush & Soul Studio, one of two artist studios under The Easel. She paints in oil and watercolor. She works from Baltimore. A graduate of the Fashion Institute of Technology.',
        portrait: '/caroline-likoudis.jpg',
        siteLabel: 'brushandsoulstudio.com',
        siteUrl: 'https://www.brushandsoulstudio.com',
        order: 2,
      },
      {
        id: 'elena',
        name: 'Elena Likoudis',
        role: 'Creative Director, The Easel · Lead Designer, The Studio',
        divisions: ['The Easel', 'The Studio'],
        bio: 'Elena leads creative on The Easel and runs Elena Likoudis Art, one of two artist studios under that division. She also serves as Lead Designer at The Studio. A senior user-experience designer by trade. She works from Pittsburgh.',
        portrait: '/elena-likoudis.webp',
        siteLabel: 'elenalikoudisart.com',
        siteUrl: 'https://elenalikoudisart.com',
        order: 3,
      },
      {
        id: 'jake',
        name: 'Jake Likoudis',
        role: 'Operational Director, The Workshop · Sourcing Director, The Table',
        divisions: ['The Workshop', 'The Table'],
        bio: 'Jake leads operations at The Workshop and handles sourcing for The Table. Operations Specialist 3rd Class Petty Officer in the United States Coast Guard.',
        portrait: '/jake-likoudis.webp',
        order: 5,
      },
      {
        id: 'luke',
        name: 'Luke Likoudis',
        role: 'Operational Director, The Table · Sourcing Director, The Workshop',
        divisions: ['The Table', 'The Workshop'],
        bio: 'Luke leads operations at The Table and handles sourcing for The Workshop. Operations Specialist 3rd Class Petty Officer in the United States Coast Guard.',
        portrait: '/luke-likoudis.webp',
        order: 4,
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
