/**
 * The six Ithaca House listings on Airbnb.
 *
 * Every rating and review count below was read from the listing page on the
 * date in `ratingsChecked`. The aggregate shown on the site is calculated from
 * these numbers, so update all six together (same day) and change the date.
 * If they can't be re-checked together, set `showAggregate` to false.
 *
 * All six are private rooms, not entire homes. Bathroom arrangements differ.
 */

export interface Listing {
  id: string;
  href: string;
  image: string;
  imageAlt: string;
  /** Listing title as it appears on Airbnb (emoji removed). */
  title: string;
  room: string;
  bed: string;
  bath: string;
  /** Short description drawn from the listing. */
  description: string;
  host: 'Caroline' | 'Andrew';
  rating: number;
  reviews: number;
}

export const ratingsChecked = '2026-11-23';
export const showAggregate = true;

export const listings: Listing[] = [
  {
    id: '45953387',
    href: 'https://www.airbnb.com/rooms/45953387',
    image:
      'https://a0.muscache.com/im/pictures/airflow/Hosting-45953387/original/51871439-b848-4782-95af-cee4114a9119.jpg?im_w=1200',
    imageAlt: 'King bedroom in the Relaxing Master Suite listing',
    title: 'Relaxing Master Suite in Colorful Home',
    room: 'Private room in a townhouse',
    bed: 'King bed',
    bath: 'Private attached bathroom',
    description: "A king bedroom with its own bathroom, in a rowhome filled with handmade art and original paintings.",
    host: 'Caroline',
    rating: 4.67,
    reviews: 96,
  },
  {
    id: '649048737097044142',
    href: 'https://www.airbnb.com/rooms/649048737097044142',
    image: 'https://a0.muscache.com/im/pictures/2599cc6f-15d1-4d5e-a690-e57cf9449a30.jpg?im_w=1200',
    imageAlt: 'Lower-level bedroom in the Relaxing Bedroom listing',
    title: 'Relaxing bedroom convenient to Hopkins & downtown',
    room: 'Private room in a townhouse',
    bed: 'Full bed',
    bath: 'Shared bathroom',
    description: 'A renovated lower-level bedroom in an art-filled rowhome.',
    host: 'Caroline',
    rating: 4.81,
    reviews: 75,
  },
  {
    id: '44263588',
    href: 'https://www.airbnb.com/rooms/44263588',
    image:
      'https://a0.muscache.com/im/pictures/airflow/Hosting-44263588/original/ad47efd2-8fda-48d4-bd6f-7cfb211ebb79.jpg?im_w=1200',
    imageAlt: 'Queen bedroom in the Spacious Queen Bedroom listing',
    title: 'Spacious Queen Bedroom & Private Bath',
    room: 'Private room in a townhouse',
    bed: 'Queen bed',
    bath: 'Private attached bathroom',
    description: 'A queen bedroom with a TV and desk, in a townhome filled with pieces collected from around the world.',
    host: 'Caroline',
    rating: 4.79,
    reviews: 97,
  },
  {
    id: '16000758',
    href: 'https://www.airbnb.com/rooms/16000758',
    image: 'https://a0.muscache.com/im/pictures/f37e01f6-c234-4a69-a2f8-8257ac78a7a7.jpg?im_w=1200',
    imageAlt: 'Queen bedroom in the Comfortable Oasis listing',
    title: 'Comfortable Oasis close to Hopkins & Downtown',
    room: 'Private room in a home',
    bed: 'Queen bed',
    bath: 'Private bathroom, dedicated to the guest',
    description: 'High ceilings and artistic touches, two blocks from Patterson Park.',
    host: 'Andrew',
    rating: 4.66,
    reviews: 196,
  },
  {
    id: '1009422679116749556',
    href: 'https://www.airbnb.com/rooms/1009422679116749556',
    image:
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1009422679116749556/original/bb54e33b-4639-47f9-9b33-4360d11f1834.jpeg?im_w=1200',
    imageAlt: 'Bedroom in the Relaxing, Convenient Oasis listing',
    title: 'Relaxing, Convenient Oasis',
    room: 'Private room in a home',
    bed: 'One bed',
    bath: 'Private attached bathroom',
    description: 'A private bedroom with its own bathroom, convenient to Hopkins, the park, and downtown.',
    host: 'Andrew',
    rating: 4.2,
    reviews: 10,
  },
  {
    id: '582871859089019533',
    href: 'https://www.airbnb.com/rooms/582871859089019533',
    image:
      'https://a0.muscache.com/im/pictures/miso/Hosting-582871859089019533/original/f40e4890-b125-43db-bf42-abfe4b992938.jpeg?im_w=1200',
    imageAlt: 'Walk-out lower-level room in the Relaxing Getaway listing',
    title: 'Relaxing getaway near Hopkins & Downtown',
    room: 'Private room in a rental unit',
    bed: 'One bed',
    bath: 'Shared bathroom',
    description: 'A finished lower-level room with a walk-out, close to Hopkins, the harbor, and Fells Point.',
    host: 'Andrew',
    rating: 4.14,
    reviews: 28,
  },
];

/** Review-weighted average rating, rounded to one decimal place. */
export function aggregateRating(): { rating: string; reviews: number } {
  const reviews = listings.reduce((n, l) => n + l.reviews, 0);
  const weighted = listings.reduce((n, l) => n + l.rating * l.reviews, 0) / reviews;
  return { rating: weighted.toFixed(1), reviews };
}

export function formatChecked(): string {
  const d = new Date(ratingsChecked + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}
