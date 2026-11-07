/**
 * Travel partner links for Ithaca House.
 *
 * Every outbound booking link on the travel page runs through affiliateUrl().
 * Until a partner's ID is filled in below, links go out clean (no tracking),
 * so the page works today and starts earning the day each ID is added.
 *
 * To turn a partner on: sign up, get approved, paste the ID into `id`.
 * Approximate rates, for planning only (check each program's terms):
 *   Booking.com     hotels, about 4% via Travelpayouts, more direct
 *   Expedia         hotels / flights / cars, up to about 6% hotels, low on flights
 *   GetYourGuide    tours, about 8%
 *   Ferryhopper     ferries, about 1 to 1.6% (Awin)
 *   DiscoverCars    car rental, about 6%
 * Airbnb has no open affiliate program, so Airbnb stays are not linked here.
 * Our own six listings earn more than any commission and stay up top.
 */

export type PartnerId = 'booking' | 'expedia' | 'getyourguide' | 'ferryhopper' | 'discovercars';

interface Partner {
  name: string;
  /** Query parameter the partner reads for the affiliate ID, if it uses one. */
  param?: string;
  /** Your affiliate ID. Leave empty until approved. */
  id: string;
  /** For networks that wrap the destination URL instead (e.g. Awin). Use {url} and {id}. */
  wrap?: string;
}

export const partners: Record<PartnerId, Partner> = {
  booking: { name: 'Booking.com', param: 'aid', id: '' },
  // Expedia Group Affiliate Program issues tracked links from its dashboard.
  // Once approved, set param/id (or wrap) to match the link format it gives you.
  expedia: { name: 'Expedia', param: '', id: '' },
  getyourguide: { name: 'GetYourGuide', param: 'partner_id', id: '' },
  // Ferryhopper US runs on Awin. After approval, set id to your Awin publisher ID
  // and replace MID with Ferryhopper's Awin merchant ID.
  ferryhopper: {
    name: 'Ferryhopper',
    id: '',
    wrap: 'https://www.awin1.com/cread.php?awinmid=MID&awinaffid={id}&ued={url}',
  },
  discovercars: { name: 'DiscoverCars', param: 'a_aid', id: '' },
};

export function affiliateUrl(partner: PartnerId, url: string): string {
  const p = partners[partner];
  if (!p || !p.id) return url;
  if (p.wrap) return p.wrap.replace('{id}', p.id).replace('{url}', encodeURIComponent(url));
  if (!p.param) return url;
  try {
    const u = new URL(url);
    u.searchParams.set(p.param, p.id);
    return u.toString();
  } catch {
    return url;
  }
}

/** Standing "book your trip" links shown under the deals. */
export const bookingLinks: Array<{
  label: string;
  kicker: string;
  description: string;
  partner: PartnerId;
  url: string;
}> = [
  {
    kicker: 'Hotels',
    label: 'Stays on Kefalonia',
    description: 'Hotels, apartments, and guesthouses across the island.',
    partner: 'booking',
    url: 'https://www.booking.com/searchresults.html?ss=Kefalonia%2C+Greece',
  },
  {
    kicker: 'Hotels',
    label: 'Stays on Ithaka',
    description: 'Hotels and guesthouses on the smaller island. Book ahead for summer.',
    partner: 'booking',
    url: 'https://www.booking.com/searchresults.html?ss=Ithaca%2C+Greece',
  },
  {
    kicker: 'Flights',
    label: 'Fly to Athens',
    description: 'Search fares from Baltimore and Washington.',
    partner: 'expedia',
    url: 'https://www.expedia.com/Flights',
  },
  {
    kicker: 'Ferries',
    label: 'Sami to Ithaka, and more',
    description: 'Ferry times and tickets across the Ionian islands.',
    partner: 'ferryhopper',
    url: 'https://www.ferryhopper.com/',
  },
  {
    kicker: 'Tours',
    label: 'Things to do on Kefalonia',
    description: 'Boat trips, caves, wineries, and island tours.',
    partner: 'getyourguide',
    url: 'https://www.getyourguide.com/s/?q=Kefalonia',
  },
  {
    kicker: 'Cars',
    label: 'Rent a car',
    description: 'The best way to see Kefalonia. Pick up at the airport.',
    partner: 'discovercars',
    url: 'https://www.discovercars.com/',
  },
];
