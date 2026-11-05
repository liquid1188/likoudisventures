import deals from '@/content/deals.json';
import { affiliateUrl, bookingLinks, type PartnerId } from '@/content/affiliates';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

/**
 * Travel deals for Ithaca House.
 * Data lives in src/content/deals.json and is refreshed daily by a scheduled task
 * (see docs/TRAVEL-DEALS.md). Every outbound link runs through affiliateUrl().
 */

type Hotel = (typeof deals.hotels)[number];
type Flight = (typeof deals.flights)[number];

const REGIONS = ['Kefalonia', 'Ithaka', 'Baltimore', 'Athens'];

function fmtDate(iso: string) {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

function fmtYear(iso: string) {
  return new Date(iso + 'T12:00:00Z').getUTCFullYear();
}

function money(n: number) {
  return '$' + Math.round(n).toLocaleString('en-US');
}

export function TravelDeals() {
  const hotels = [...deals.hotels].sort(
    (a, b) => REGIONS.indexOf(a.region) - REGIONS.indexOf(b.region),
  );
  const updated = new Date(deals.updated + 'T12:00:00Z').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <section id="deals" className="ground-bone py-24 lg:py-32 border-t border-navy/10 scroll-mt-20">
      <div className="container-editorial">
        <ScrollReveal as="div" className="text-center mb-14 lg:mb-16 max-w-3xl mx-auto">
          <div className="catalog-num text-sm mb-3">Deals</div>
          <div className="eyebrow-no-rule text-ochre-deep mb-5 inline-block">Updated {updated}</div>
          <h2 className="font-display text-display-xl text-navy leading-tight">
            What is on sale <em className="italic text-ochre-deep">right now</em>.
          </h2>
          <p className="font-serif italic text-lg lg:text-xl text-navy/65 mt-6 leading-relaxed">
            Every morning we compare hotel and flight prices for Kefalonia, Ithaka, and Baltimore across booking sites, then post the best rates and the cheapest place to book them. Prices move, so check the final price before you book.
          </p>
        </ScrollReveal>

        {deals.flights.length > 0 && (
          <div className="max-w-5xl mx-auto mb-12">
            <div className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/55 mb-4">Flights</div>
            <div className="grid grid-cols-1 gap-4">
              {deals.flights.map((f, i) => (
                <FlightRow key={i} flight={f} delay={i * 80} />
              ))}
            </div>
          </div>
        )}

        {hotels.length > 0 && (
          <div className="max-w-5xl mx-auto">
            <div className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/55 mb-4">Hotels</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {hotels.map((h, i) => (
                <HotelCard key={h.name} hotel={h} delay={(i % 3) * 80} />
              ))}
            </div>
          </div>
        )}

        {/* Standing booking links */}
        <div className="max-w-5xl mx-auto mt-20 lg:mt-24">
          <ScrollReveal as="div" className="text-center mb-10">
            <div className="eyebrow-no-rule text-ochre-deep mb-4 inline-block">Book the trip</div>
            <h3 className="font-display text-3xl lg:text-4xl text-navy leading-tight">
              Everything else <em className="italic text-ochre-deep">you will need</em>.
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {bookingLinks.map((l, i) => (
              <ScrollReveal key={l.label} delay={(i % 3) * 80}>
                <a
                  href={affiliateUrl(l.partner, l.url)}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="group block bg-cream p-6 h-full border border-navy/10 hover:border-ochre transition-colors"
                >
                  <div className="font-sans text-[10px] uppercase tracking-eyebrow text-ochre-deep mb-3">{l.kicker}</div>
                  <div className="font-display text-xl text-navy leading-snug mb-2 group-hover:text-ochre-deep transition-colors">
                    {l.label} <span aria-hidden className="text-sm">↗</span>
                  </div>
                  <p className="font-serif text-[15px] text-navy/75 leading-relaxed">{l.description}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <p className="font-serif italic text-sm text-navy/55 mt-14 text-center max-w-2xl mx-auto leading-relaxed">
          Some links on this page are partner links. If you book through them, Likoudis Ventures may earn a small commission at no extra cost to you.
        </p>
      </div>
    </section>
  );
}

type Offer = { partner: string; total: number; was?: number; url: string };

const PARTNER_NAMES: Record<string, string> = {
  booking: 'Booking.com',
  expedia: 'Expedia',
};

function HotelCard({ hotel: h, delay }: { hotel: Hotel; delay: number }) {
  const offers = [...(h.offers as Offer[])].sort((a, b) => a.total - b.total);
  const best = offers[0];
  const priciest = offers[offers.length - 1];
  // Reference price: the highest other site, or the site's own strikeout price
  const ref = Math.max(priciest.total, best.was ?? 0);
  const save = ref > best.total ? ref - best.total : 0;
  const pct = save ? Math.round((save / ref) * 100) : 0;
  const nights = Math.round(
    (Date.parse(h.checkOut) - Date.parse(h.checkIn)) / 86_400_000,
  );
  const vsLabel =
    offers.length > 1 && priciest.total > best.total
      ? `vs ${PARTNER_NAMES[priciest.partner] ?? priciest.partner}`
      : 'off';

  return (
    <ScrollReveal delay={delay}>
      <a
        href={affiliateUrl(best.partner as PartnerId, best.url)}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group flex flex-col bg-cream p-6 h-full border-t-[3px] border-t-sky-deep hover:border-t-ochre transition-colors"
      >
        <div className="flex items-baseline justify-between mb-3">
          <span className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/60">{h.region}</span>
          {pct > 0 ? (
            <span className="font-sans text-[10px] uppercase tracking-eyebrow text-ochre-deep">
              {pct}% {vsLabel === 'off' ? 'off' : 'less'}
            </span>
          ) : (
            <span className="font-sans text-[10px] uppercase tracking-eyebrow text-olive-deep">Top rated</span>
          )}
        </div>
        <h4 className="font-display text-xl text-navy leading-snug mb-2 group-hover:text-ochre-deep transition-colors">
          {h.name}
        </h4>
        <div className="font-serif italic text-sm text-navy/60 mb-5">
          {h.stars ? `${h.stars}★ · ` : ''}
          {h.rating.toFixed(1)}/10 from {h.reviews.toLocaleString('en-US')} reviews
        </div>
        <div className="mt-auto pt-4 border-t border-navy/15">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-display text-2xl text-navy">{money(best.total)}</span>
            {save > 0 && <span className="font-serif text-sm text-navy/45 line-through">{money(ref)}</span>}
            <span className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/55">
              on {PARTNER_NAMES[best.partner] ?? best.partner}
            </span>
          </div>
          {save > 0 && vsLabel !== 'off' && (
            <div className="font-serif italic text-sm text-ochre-deep mt-1">
              Save {money(save)} {vsLabel}
            </div>
          )}
          <div className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/55 mt-2">
            {fmtDate(h.checkIn)} to {fmtDate(h.checkOut)}, {fmtYear(h.checkOut)} · 2 guests · {money(best.total / nights)}/night
          </div>
        </div>
      </a>
    </ScrollReveal>
  );
}

function FlightRow({ flight: f, delay }: { flight: Flight; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <a
        href={affiliateUrl(f.partner as PartnerId, f.url)}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-navy text-bone p-6 lg:p-7 hover:bg-navy/90 transition-colors"
      >
        <div className="md:w-56 shrink-0">
          <div className="font-display text-2xl">
            {f.from} <span className="text-ochre">→</span> {f.to}
          </div>
          <div className="font-serif italic text-sm text-bone/65">
            {f.fromCity} to {f.toCity}
          </div>
        </div>
        <div className="flex-grow font-serif text-[15px] text-bone/80 leading-relaxed">
          {f.airline}, {f.stops}. Round trip {fmtDate(f.depart)} to {fmtDate(f.return)}, {fmtYear(f.return)}.
          {f.note && <span className="block text-bone/60 italic mt-1">{f.note}</span>}
        </div>
        <div className="md:text-right shrink-0">
          <div className="font-display text-3xl text-ochre">{money(f.price)}</div>
          <div className="font-sans text-[10px] uppercase tracking-eyebrow text-bone/60">round trip · per person</div>
        </div>
      </a>
    </ScrollReveal>
  );
}
