/**
 * Real work shown on the homepage and the Studio and Easel pages.
 * Only completed projects and actual artworks. Titles and media are taken
 * from the artists' own shops; nothing here is invented.
 */

export interface Project {
  slug: string;
  name: string;
  kind: string;
  description: string;
  image: string;
  url: string;
  /** Matching case study on the Lickity Split portfolio. */
  caseUrl: string;
}

/** Completed Lickity Split websites (screenshots from the Lickity Split portfolio). */
export const projects: Project[] = [
  {
    slug: 'dcsocial',
    name: 'DC Social Collective',
    kind: 'Events and community',
    description:
      'A new website for a Washington events group, with event pages, ticketing links, videos, and photo albums from past nights.',
    image: '/work/dcsocial.webp',
    url: 'https://dcsocialcollective.com/',
    caseUrl: 'https://lickitysplitweb.com/work#dcsocial',
  },
  {
    slug: 'larocca',
    name: 'Frank La Rocca',
    kind: 'Composer',
    description:
      'A website for a composer of sacred music, with a catalog of 59 compositions, scores, recordings, and press information.',
    image: '/work/larocca.webp',
    url: 'https://www.franklarocca.com/',
    caseUrl: 'https://lickitysplitweb.com/work#larocca',
  },
  {
    slug: 'icjf',
    name: 'International Catholic Jurists Forum',
    kind: 'Nonprofit and research',
    description:
      'A redesign that brought over 99 pages and 535 news posts into a searchable site for the forum’s publications, conferences, and projects.',
    image: '/work/icjf.webp',
    url: 'https://icjurist.org/',
    caseUrl: 'https://lickitysplitweb.com/work#icjf',
  },
  {
    slug: 'brushsoul',
    name: 'Brush & Soul Studio',
    kind: 'Art and e-commerce',
    description: 'A Shopify store for original paintings, fine art prints, and commissions.',
    image: '/work/brushsoul.webp',
    url: 'https://brushandsoulstudio.com/',
    caseUrl: 'https://lickitysplitweb.com/work#brushsoul',
  },
  {
    slug: 'roxane',
    name: 'Roxane B. Salonen',
    kind: 'Author',
    description: 'An author website that brings together her books, columns, and more than 2,300 earlier blog posts.',
    image: '/work/roxane.webp',
    url: 'https://roxanesalonen.com/',
    caseUrl: 'https://lickitysplitweb.com/work#roxane',
  },
  {
    slug: 'adan',
    name: 'Adán Fernández',
    kind: 'Musician',
    description: 'A bilingual website for an organist and conductor, with recordings and a concert calendar.',
    image: '/work/adan.webp',
    url: 'https://adanfernandezmusic.com/',
    caseUrl: 'https://lickitysplitweb.com/work#adan',
  },
];

export interface Artwork {
  title: string;
  artist: 'Caroline' | 'Elena';
  /** Only what the artist's own listing states. */
  medium?: string;
  image: string;
  url: string;
}

export const artworks: Artwork[] = [
  {
    title: 'City of Moonlight',
    artist: 'Caroline',
    medium: 'Fine art print',
    image: '/art/caroline-city-of-moonlight.webp',
    url: 'https://brushandsoulstudio.com/products/city-of-moonlight-dreamlike-blue-gold-fine-art-print',
  },
  {
    title: 'Where the Light Lives',
    artist: 'Caroline',
    medium: 'Fine art print',
    image: '/art/caroline-where-the-light-lives.webp',
    url: 'https://brushandsoulstudio.com/products/where-the-light-lives-whimsical-city-fine-art-print',
  },
  {
    title: 'Persian Hospitality Constellation',
    artist: 'Caroline',
    medium: 'Ink and resin, four circular paintings',
    image: '/art/caroline-persian-hospitality-constellation.webp',
    url: 'https://brushandsoulstudio.com/products/persian-hospitality-constellation',
  },
  {
    title: 'Golden Reverie',
    artist: 'Elena',
    medium: 'Acrylic and gold leaf on canvas',
    image: '/art/elena-golden-reverie.webp',
    url: 'https://elenalikoudisart.com/shop-art/p/style-02-j3xte-3l3j4-rl57t',
  },
  {
    title: 'Double Vision',
    artist: 'Elena',
    medium: 'Acrylic on canvas',
    image: '/art/elena-double-vision.webp',
    url: 'https://elenalikoudisart.com/shop-art/p/style-02-j3xte-3l3j4',
  },
  {
    title: 'Blue',
    artist: 'Elena',
    image: '/art/elena-blue.webp',
    url: 'https://elenalikoudisart.com/shop-art/p/n06o3ayvyyhp5vk9r7g9ylezsfx8nw',
  },
];
