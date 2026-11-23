/**
 * Content for the /about page (approved copy, Nov 2026 memo).
 */

export interface FamilyMember {
  id: 'andrew' | 'caroline' | 'elena' | 'luke' | 'jake';
  name: string;
  role: string;
  bio: string;
  portrait?: string;
  /** CSS object-position for the portrait crop, so faces sit in the same place. */
  portraitPosition?: string;
  links?: Array<{ label: string; href: string }>;
  order: number;
}

export const about = {
  hero: {
    title: 'A family with a few different interests.',
    body: [
      'The Likoudis name has its roots in the Ionian Islands of Greece. Later generations made their home in upstate New York, and our own work has since taken us in several directions.',
      'Likoudis Ventures is where some of those interests and businesses come together.',
    ],
  },

  heritage: {
    heading: 'From Kefalonia to the Finger Lakes',
    body: [
      "Our family's roots are in Kefalonia, one of the Ionian islands of Greece. Later generations settled in upstate New York, in the Finger Lakes region, where we grew up.",
      'The Likoudis name can still be found in the Ionian Islands, including on neighboring Ithaka. Those connections to place and history are part of why Greece continues to figure in our interests, from travel and hospitality to art and food.',
      'Today our work is based principally in the United States, although the family has taken its interests and professions in different directions.',
    ],
  },

  family: {
    heading: 'The people involved',
    intro:
      'Five of us are associated with Likoudis Ventures, although not all in the same way. Some develop and operate its projects, while others have independent practices that we feature or work alongside.',
    members: [
      {
        id: 'andrew',
        name: 'Andrew Likoudis',
        role: 'Founder, Likoudis Ventures',
        bio: "Andrew's work includes hospitality, web design, writing, publishing, and consulting. He has hosted guests in Baltimore since 2017 and operates Lickity Split Web Design, building websites for authors, businesses, and organizations. His professional experience includes economic development, nonprofit operations, communications, and editorial work. He oversees the development of Likoudis Ventures and its existing projects.",
        portrait: '/andrew-likoudis.webp',
        portraitPosition: '50% 20%',
        links: [
          { label: 'andrewlikoudis.com', href: 'https://andrewlikoudis.com' },
          { label: 'lickitysplitweb.com', href: 'https://lickitysplitweb.com' },
        ],
        order: 1,
      },
      {
        id: 'caroline',
        name: 'Caroline Likoudis',
        role: 'Hospitality and Art',
        bio: 'Caroline works in hospitality and painting. Her Baltimore accommodations reflect her interest in travel, welcoming spaces, and the visual arts. Through Brush & Soul Studio, she creates original works in oil and watercolor. Her independently operated work is featured through Ithaca House and the Easel.',
        portrait: '/caroline-likoudis.jpg',
        portraitPosition: '50% 18%',
        links: [{ label: 'brushandsoulstudio.com', href: 'https://brushandsoulstudio.com' }],
        order: 2,
      },
      {
        id: 'elena',
        name: 'Elena Likoudis',
        role: 'Art and UX Design',
        bio: 'Elena is a designer and artist whose professional work includes user experience, digital products, and visual design. She also creates original paintings, portraits, and commissioned artwork through her independent artistic practice. Her work is featured through the Studio and the Easel.',
        portrait: '/elena-likoudis.webp',
        portraitPosition: '50% 30%',
        links: [
          { label: 'elenalikoudisdesign.com', href: 'https://www.elenalikoudisdesign.com' },
          { label: 'elenalikoudisart.com', href: 'https://elenalikoudisart.com' },
        ],
        order: 3,
      },
      {
        id: 'jake',
        name: 'Jake Likoudis',
        role: 'Developing Projects',
        bio: 'Jake is involved in developing projects associated with Likoudis Ventures, with interests in operations, sourcing, and graphic design. His experience in the United States Coast Guard provides a professional background in coordination and operational work. His design interests may also contribute to future Studio projects.',
        portrait: '/jake-likoudis.webp',
        portraitPosition: '50% 20%',
        order: 4,
      },
      {
        id: 'luke',
        name: 'Luke Likoudis',
        role: 'Developing Projects',
        bio: 'Luke is involved in developing the Workshop and Table projects, including prospective sourcing and operations. He also serves in the United States Coast Guard. The Table remains in development while the family’s ideas for its eventual product offerings are refined.',
        portrait: '/luke-likoudis.webp',
        portraitPosition: '50% 20%',
        order: 5,
      },
    ] satisfies FamilyMember[],
  },

  closing: {
    heading: 'Where the work stands',
    body: "Some of the ventures featured here have established clients, guests, and completed work. Others are new projects. We want the website to reflect both, giving people a way to see what we're doing now and what we're preparing for the future.",
  },
};

export function getFamilyMember(id: FamilyMember['id']): FamilyMember | undefined {
  return about.family.members.find((m) => m.id === id);
}
