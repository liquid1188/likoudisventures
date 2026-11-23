import Link from 'next/link';
import type { Division } from '@/content/divisions';
import { listings, aggregateRating, formatChecked, showAggregate } from '@/content/listings';
import { PageHero, SectionHeading } from '@/components/sections/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { IonianMap } from '@/components/brand/IonianMap';
import { TravelDeals } from '@/components/divisions/TravelDeals';

const experiences = [
  'A neighborhood recommendation for dinner or a walk',
  'Help organizing an outing in the city',
  'Suggestions for a longer stay',
  'Other ideas, such as a Greek dinner, a market visit, or time on the harbor',
];

export function IthacaLayout({ division }: { division: Division }) {
  const agg = aggregateRating();
  return (
    <>
      <PageHero
        kicker={division.name}
        greek={division.greek}
        title="Make yourself at home in Baltimore."
        image={{ src: listings[3].image, alt: listings[3].imageAlt, width: 1200, height: 800 }}
        actions={
          <>
            <Link href="#stays" className="btn-olive-on-dark">Explore the Stays</Link>
            <Link href="#hosting" className="btn-ghost-bone">Ask About Hosting Services</Link>
          </>
        }
      >
        <p>
          Ithaca House brings together six Airbnb listings in East Baltimore, near Patterson Park and Canton. Our accommodations range from private rooms in shared homes to guest spaces with their own facilities, each with its own character.
        </p>
        <p>We also help other hosts prepare their properties and manage the details that make a stay work.</p>
      </PageHero>

      <section id="stays" className="ground-bone section scroll-mt-20">
        <div className="container-editorial">
          <SectionHeading
            title="Our Baltimore stays"
            intro={
              <>
                <p>Each listing is available through Airbnb, where you can find current photographs, amenities, guest reviews, prices, and availability.</p>
                {showAggregate && (
                  <p className="font-sans text-[15px] text-navy/65">
                    Rated {agg.rating} out of 5 on average across the six listings, from {agg.reviews} Airbnb reviews (as of {formatChecked()}).
                  </p>
                )}
              </>
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {listings.map((l, i) => (
              <ScrollReveal key={l.id} delay={(i % 3) * 60}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col h-full bg-white/50 border border-navy/10 hover:border-olive-deep transition-colors">
                  <div className="media-frame aspect-[4/3]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.image} alt={l.imageAlt} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 lg:p-6 flex flex-col flex-1">
                    <h3 className="font-display text-xl text-navy leading-snug group-hover:text-olive-deep transition-colors">{l.title}</h3>
                    <p className="font-sans text-[15px] text-navy/75 mt-2 leading-relaxed">{l.description}</p>
                    <ul className="font-sans text-[14px] text-navy/70 mt-4 space-y-0.5">
                      <li>{l.room}</li>
                      <li>{l.bed} · {l.bath}</li>
                      <li>Hosted by {l.host}</li>
                    </ul>
                    <p className="mt-auto pt-5 flex items-center justify-between font-sans text-[14px]">
                      <span className="text-navy/65">★ {l.rating.toFixed(2)} · {l.reviews} reviews</span>
                      <span className="font-medium text-olive-deep">Book on Airbnb ↗</span>
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ground-cream section">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="font-display text-display-lg text-navy leading-tight mb-6">A little help getting to know the city</h2>
            <div className="prose-body text-navy/85">
              <p>We&rsquo;ve spent years welcoming visitors to Baltimore, and we&rsquo;re happy to share the places we know. Depending on the visit, that might mean a neighborhood recommendation, help organizing an outing, or suggestions for a longer stay.</p>
              <p>For guests interested in a more involved experience, we can discuss individual arrangements in advance.</p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-[15px] font-medium text-navy mb-3">What we can talk through</p>
            <ul className="divide-y divide-navy/10 border-y border-navy/10">
              {experiences.map((e) => (
                <li key={e} className="py-3.5 font-sans text-[16px] text-navy/80">{e}</li>
              ))}
            </ul>
            <p className="font-sans text-[14px] text-navy/60 mt-4">These are possibilities to discuss, not services you can book. Ask, and we&rsquo;ll tell you what we can arrange for your dates.</p>
            <Link href="/contact?topic=Ithaca%20House" className="text-link mt-5">Ask about your visit <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>

      <section id="hosting" className="ground-bone section scroll-mt-20">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <h2 className="font-display text-display-lg text-navy leading-tight mb-6">For other hosts</h2>
            <div className="prose-body text-navy/85">
              <p>Preparing an Airbnb listing involves more than taking photographs and making a bed. We help hosts think through furnishings, guest communication, listing presentation, amenities, and the practical routines involved in running a short-term rental.</p>
              <p>Our guidance draws on firsthand hosting experience in Baltimore.</p>
            </div>
            <Link href="/contact?topic=Ithaca%20House" className="btn-primary mt-8">Ask About Hosting Support</Link>
            <p className="font-sans text-[15px] text-navy/70 mt-8 max-w-md">
              For help furnishing or styling a guest space, see our Studio&rsquo;s work with small interiors and hospitality properties.
            </p>
            <Link href="/divisions/the-studio#interiors" className="text-link mt-2">Interior Styling at the Studio <span aria-hidden>→</span></Link>
          </div>
          <figure className="lg:col-span-6 bg-cream p-7 lg:p-9 border-l-2 border-olive-deep">
            <blockquote className="font-serif text-[21px] lg:text-[23px] leading-[1.5] text-navy">
              &ldquo;Andrew has been helping us set up our home for Airbnb short-term rental. We can&rsquo;t say enough good things about how organized and thorough he has been, and patient. From walking through the steps we need to take, providing links to the appropriate places and advising about what we need to do to get the place together. We couldn&rsquo;t endorse Andrew any more highly. He is honest and nice and you should work with him if you need assistance.&rdquo;
            </blockquote>
            <figcaption className="mt-5 font-sans text-[15px] text-navy/75">
              <span className="font-medium text-navy">Mark Krist</span>, Airbnb host, Maryland · August 2025
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ground-cream section">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <h2 className="font-display text-display-md text-navy leading-tight mb-5">Why Ithaca House</h2>
            <p className="font-sans text-[17px] lg:text-lg text-navy/85 leading-relaxed">
              Ithaca House takes its name from two places. One is Ithaka, the Greek island beside our ancestral Kefalonia. The other is Ithaca, New York, close to the Finger Lakes communities where we grew up.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 text-navy/80">
            <IonianMap />
          </div>
        </div>
      </section>

      <TravelDeals />
    </>
  );
}
