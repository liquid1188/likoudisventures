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
      "The Likoudis family came from Kefalonia, the largest of the Ionian islands on Greece's western coast. Three generations ago, the family crossed and settled in upstate New York. We are now a quarter Greek by blood and entirely Greek in name — the heritage is real, but it is not a costume.",
      'The line that raised us is the same line that, a few decades earlier, tended olive groves above a fishing village called Kioni on the island of Ithaca. A family of the same name still keeps a guesthouse there, perched on a hill overlooking the harbor. We have not yet traced the exact branching, but the name is small enough across two islands that the kinship is almost certainly real.',
      'The olive branch on our mark carries six olives — one for each division of the house. The branch will grow another olive when the house grows another division. The tree will keep its shape regardless.',
    ],
  },

  philosophy: {
    heading: 'How we work.',
    body: [
      'We work the way our grandfathers worked. Patiently. With our names on the door.',
      'The six divisions of the house are deliberately varied because the discipline beneath them is not. A website built well, a guest welcomed properly, a drawing finished with care, a jar of olive oil sourced honestly, an icon acquired with a record of where it came from — these are the same act in different mediums.',
      'We do not sign our names to work we cannot defend. That sentence is the entire philosophy.',
    ],
  },

  family: {
    heading: 'The Board.',
    intro: 'Likoudis Ventures is governed by its founding family. The board is the family — three brothers and two sisters — and each director leads the divisions where their work and judgment live. In practice we work for each other across the house, because that is how families build things that last.',
    members: [
      {
        id: 'andrew',
        name: 'Andrew Likoudis',
        role: 'Founder, Chairman & Director · The Studio · Ithaca House · The Branch',
        divisions: ['The Studio', 'Ithaca House', 'The Branch'],
        bio: 'Andrew leads The Studio with Elena, oversees Ithaca House, and writes The Branch — the monthly letter from the family. A graduate of Towson University and Franciscan University of Steubenville, he is the founder of the Likoudis Legacy Foundation, a separate Catholic research institute named for his late grandfather, where he edits The Kydones Review — a journal named for the 14th-century Greek scholar Demetrios Kydones.',
        portrait: '/andrew-likoudis.jpg',
        siteLabel: 'andrewlikoudis.com',
        siteUrl: 'https://andrewlikoudis.com',
        order: 1,
      },
      {
        id: 'luke',
        name: 'Luke Likoudis',
        role: 'Director · The Workshop · The Likoudis Collection · The Table',
        divisions: ['The Workshop', 'The Likoudis Collection', 'The Table'],
        bio: 'Luke leads The Workshop and The Likoudis Collection — the high-ticket and bespoke side of the house — and works with his twin Jake on The Table. An officer in the United States Coast Guard, his sense of standards, sourcing, and quiet professionalism shapes the divisions where the margins for error are smallest.',
        order: 2,
      },
      {
        id: 'jake',
        name: 'Jake Likoudis',
        role: 'Director · The Workshop · The Likoudis Collection · The Table',
        divisions: ['The Workshop', 'The Likoudis Collection', 'The Table'],
        bio: 'Jake works alongside his twin Luke on The Workshop, The Collection, and The Table. Also an officer in the United States Coast Guard, he brings a logistician’s discipline to the divisions that depend on real-world supply chains, single-estate sourcing, and quietly excellent execution.',
        order: 3,
      },
      {
        id: 'caroline',
        name: 'Caroline Likoudis',
        role: 'Director · The Easel',
        divisions: ['The Easel'],
        bio: 'Caroline is one of two artists behind The Easel and the hand behind Brush & Soul Studio. Her work is in oil and watercolor — paintings and limited prints carrying the colors of a life lived between continents. She paints from her studio in Baltimore.',
        portrait: '/caroline-likoudis.jpg',
        siteLabel: 'brushandsoulstudio.com',
        siteUrl: 'https://www.brushandsoulstudio.com',
        order: 4,
      },
      {
        id: 'elena',
        name: 'Elena Likoudis',
        role: 'Director · The Easel · The Studio',
        divisions: ['The Easel', 'The Studio'],
        bio: 'Elena is the second artist behind The Easel and partners with Andrew on The Studio. A senior user-experience designer by training and the operator of her own art line at elenalikoudisart.com, she brings interface, brand, and design judgment to both the digital practice and the studio’s print work. She works from Pittsburgh.',
        portrait: '/elena-likoudis.webp',
        siteLabel: 'elenalikoudisart.com',
        siteUrl: 'https://elenalikoudisart.com',
        order: 5,
      },
    ] satisfies FamilyMember[],
  },

  separation: {
    heading: 'A note on the Foundation.',
    body: 'The Likoudis Legacy Foundation is a separate 501(c)(3) Catholic ecumenical research institute, established in 2024 in memory of James Likoudis (1928–2024). The Foundation and Likoudis Ventures share a family but no commercial activity, board, or financial flow. Each operates under its own governance, its own donors or customers, and its own books.',
  },
};

/**
 * Look up a family member by their stable id.
 * Used by division pages to render lead photo + name rows.
 */
export function getFamilyMember(id: FamilyMember['id']): FamilyMember | undefined {
  return about.family.members.find((m) => m.id === id);
}
