import type { Division } from '@/content/divisions';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { IonianSeascape } from '@/components/brand/IonianSeascape';
import { InquirySection } from '@/components/sections/InquirySection';
import { DivisionLeads } from '@/components/sections/DivisionLeads';

interface LayoutProps {
  division: Division;
}

/**
 * Ithaca House — full-bleed seascape, hospitality register.
 * Full-bleed illustrated background, text overlays in cream, generous breathing room.
 */
export function IthacaLayout({ division }: LayoutProps) {
  const paragraphs = division.longDescription.split('\n\n');

  return (
    <>
      {/* Full-bleed hero with seascape illustration */}
      <section className="relative min-h-[100svh] flex flex-col bg-navy overflow-hidden">
        {/* Seascape background */}
        <div className="absolute inset-0">
          <IonianSeascape variant="wide" className="w-full h-full object-cover opacity-95" />
        </div>

        {/* Gradient overlay for text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(14, 27, 44, 0.6) 0%, rgba(14, 27, 44, 0.15) 30%, rgba(14, 27, 44, 0.05) 50%, rgba(14, 27, 44, 0.7) 100%)',
          }}
        />

        {/* Top masthead */}
        <div className="container-tight relative z-10 pt-32 lg:pt-36 pb-2">
          <div className="flex justify-between items-start text-bone font-sans text-[10px] uppercase tracking-eyebrow">
            <Link href="/#divisions" className="hover:text-ochre transition-colors">
              ← Likoudis Ventures
            </Link>
            <span>Ithaca House</span>
            <span className="text-ochre">{division.greek}</span>
          </div>
        </div>

        {/* Bottom-anchored content */}
        <div className="container-editorial relative z-10 mt-auto pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <div className="text-olive-glow opacity-80 mb-6 inline-block">
              <OliveBranchMark size={36} />
            </div>
            <div className="font-serif italic text-ochre text-lg lg:text-xl mb-3">
              {division.greek} · the place you return to
            </div>
            <h1 className="font-display text-editorial text-bone leading-[0.95] tracking-tight mb-8">
              Ithaca <em className="italic">House</em>
            </h1>
            <p className="font-serif text-xl lg:text-2xl text-bone/95 leading-snug italic font-light max-w-2xl">
              {division.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Lead row */}
      <section className="ground-bone py-7 lg:py-9 border-y border-navy/10">
        <div className="container-editorial">
          <DivisionLeads leads={division.leads} theme="light" />
        </div>
      </section>

      {/* Long-form section */}
      <section className="ground-cream py-24 lg:py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <ScrollReveal as="div" className="lg:col-span-5">
              <div className="eyebrow-no-rule text-ochre-deep mb-6">On the name</div>
              <h2 className="font-display text-display-xl text-navy leading-tight">
                Two anchors, <em className="italic text-ochre-deep">one name</em>.
              </h2>
            </ScrollReveal>
            <ScrollReveal as="div" delay={150} className="lg:col-span-6 lg:col-start-7">
              <div className="prose-editorial">
                {paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Notes / family-in-Greece disclosure */}
          {division.notes && (
            <ScrollReveal as="div">
              <div className="mt-20 lg:mt-28 max-w-3xl mx-auto bg-bone p-8 lg:p-10 border-l-2 border-ochre">
                <div className="catalog-num text-sm mb-3">A Note</div>
                <p className="font-serif italic text-lg lg:text-xl leading-relaxed text-navy/85">
                  {division.notes}
                </p>
                {division.notesLinks && division.notesLinks.length > 0 && (
                  <div className="mt-7 pt-6 border-t border-navy/10">
                    <div className="font-sans text-[10px] uppercase tracking-eyebrow text-ochre-deep mb-4">
                      If you are in Greece
                    </div>
                    <ul className="space-y-3">
                      {division.notesLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-baseline gap-3 hover:text-olive-deep transition-colors"
                          >
                            <span className="font-display text-lg text-navy group-hover:text-olive-deep transition-colors">
                              {link.label}
                            </span>
                            {link.descriptor && (
                              <span className="font-serif italic text-sm text-navy/60">
                                {link.descriptor}
                              </span>
                            )}
                            <span aria-hidden className="text-xs text-ochre-deep transition-transform group-hover:translate-x-0.5">
                              ↗
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* By the numbers — combined hosting record across all six properties */}
      <section className="ground-bone py-16 lg:py-20 border-t border-navy/10">
        <div className="container-editorial">
          <ScrollReveal as="div" className="text-center mb-10 lg:mb-12">
            <div className="eyebrow-no-rule text-ochre-deep inline-block">By the numbers</div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <ScrollReveal as="div" delay={0}>
              <div className="text-center">
                <div className="font-display text-5xl lg:text-6xl text-navy leading-none">20</div>
                <div className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/60 mt-3">
                  Combined years hosting
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal as="div" delay={80}>
              <div className="text-center">
                <div className="font-display text-5xl lg:text-6xl text-navy leading-none">6</div>
                <div className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/60 mt-3">
                  Properties
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal as="div" delay={160}>
              <div className="text-center">
                <div className="font-display text-5xl lg:text-6xl text-navy leading-none">533</div>
                <div className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/60 mt-3">
                  Reviews on Airbnb
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal as="div" delay={240}>
              <div className="text-center">
                <div className="font-display text-5xl lg:text-6xl text-navy leading-none">
                  4.7<span className="text-ochre-deep">★</span>
                </div>
                <div className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/60 mt-3">
                  Combined rating
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <p className="font-serif italic text-sm text-navy/55 mt-12 text-center max-w-xl mx-auto leading-relaxed">
              Across both hosts, six properties, and a decade of work in Canton and Patterson Park.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Properties — six Airbnb listings in the Canton / Patterson Park neighborhood */}
      <section className="ground-sky py-24 lg:py-32 border-t border-navy/10">
        <div className="container-editorial">
          <ScrollReveal as="div" className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
            <div className="catalog-num text-sm mb-3">The Properties</div>
            <div className="eyebrow-no-rule text-ochre-deep mb-5 inline-block">Canton · Patterson Park</div>
            <h3 className="font-display text-display-xl text-navy leading-tight">
              Six rooms in the <em className="italic text-ochre-deep">quaint</em> Canton / Patterson Park neighborhood.
            </h3>
            <p className="font-serif italic text-lg lg:text-xl text-navy/65 mt-6 leading-relaxed">
              Run by the family. Each property listed directly on Airbnb &mdash; book through the platform you already trust.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {/* Caroline's three (longer tenure, higher rated, art-led aesthetic) */}

            {/* Master Suite (king, private bath, master bedroom) */}
            <ScrollReveal as="div" delay={0}>
              <a
                href="https://www.airbnb.com/rooms/45953387?unique_share_id=0d774be8-8d26-42ab-b84e-1779102b68b2&viralityEntryPoint=1&s=76"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-bone border border-navy/15 hover:border-ochre transition-colors h-full overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-navy/5 overflow-hidden">
                  <img
                    src="https://a0.muscache.com/im/pictures/airflow/Hosting-45953387/original/51871439-b848-4782-95af-cee4114a9119.jpg?im_w=720"
                    alt="Master Suite — king bedroom, private bath, Patterson Park rowhome"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <div className="catalog-num text-xs text-ochre-deep mb-2">Patterson Park · Master Suite</div>
                  <h4 className="font-display text-xl text-navy leading-snug mb-2 group-hover:text-ochre-deep transition-colors">
                    Relaxing Master Suite in a Colorful Home
                  </h4>
                  <p className="font-serif italic text-sm text-navy/70 leading-relaxed mb-4">
                    King bed, private bath, in an artist&rsquo;s rowhome filled with handmade art and original paintings.
                  </p>
                  <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-eyebrow text-navy/65">
                    <span>★ 4.66 &middot; 86 reviews</span>
                    <span className="text-ochre-deep group-hover:text-navy transition-colors">Book on Airbnb →</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-navy/10 font-sans text-[10px] uppercase tracking-eyebrow text-navy/45">
                    Caroline
                  </div>
                </div>
              </a>
            </ScrollReveal>

            {/* Lower-level bedroom (full bed, shared bath) */}
            <ScrollReveal as="div" delay={80}>
              <a
                href="https://www.airbnb.com/rooms/649048737097044142?unique_share_id=c05a57d9-df85-491e-89df-dd2fbe5fee06&viralityEntryPoint=1&s=76"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-bone border border-navy/15 hover:border-ochre transition-colors h-full overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-navy/5 overflow-hidden">
                  <img
                    src="https://a0.muscache.com/im/pictures/2599cc6f-15d1-4d5e-a690-e57cf9449a30.jpg?im_w=720"
                    alt="Lower-level bedroom — full bed, shared bath, Patterson Park rowhome"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <div className="catalog-num text-xs text-ochre-deep mb-2">Patterson Park · Garden Level</div>
                  <h4 className="font-display text-xl text-navy leading-snug mb-2 group-hover:text-ochre-deep transition-colors">
                    Relaxing Bedroom Convenient to Hopkins
                  </h4>
                  <p className="font-serif italic text-sm text-navy/70 leading-relaxed mb-4">
                    Full bed, shared bath, fully renovated lower level of an art-filled rowhome.
                  </p>
                  <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-eyebrow text-navy/65">
                    <span>★ 4.85 &middot; 71 reviews</span>
                    <span className="text-ochre-deep group-hover:text-navy transition-colors">Book on Airbnb →</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-navy/10 font-sans text-[10px] uppercase tracking-eyebrow text-navy/45">
                    Caroline
                  </div>
                </div>
              </a>
            </ScrollReveal>

            {/* Spacious Queen (queen, private bath) */}
            <ScrollReveal as="div" delay={160}>
              <a
                href="https://www.airbnb.com/rooms/44263588?unique_share_id=128fa5fb-1462-4403-938a-fc7537d6b761&viralityEntryPoint=1&s=76"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-bone border border-navy/15 hover:border-ochre transition-colors h-full overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-navy/5 overflow-hidden">
                  <img
                    src="https://a0.muscache.com/im/pictures/airflow/Hosting-44263588/original/ad47efd2-8fda-48d4-bd6f-7cfb211ebb79.jpg?im_w=720"
                    alt="Spacious Queen Bedroom — queen bed, private bath with skylight, Patterson Park"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <div className="catalog-num text-xs text-ochre-deep mb-2">Patterson Park · Queen Suite</div>
                  <h4 className="font-display text-xl text-navy leading-snug mb-2 group-hover:text-ochre-deep transition-colors">
                    Spacious Queen Bedroom &amp; Private Bath
                  </h4>
                  <p className="font-serif italic text-sm text-navy/70 leading-relaxed mb-4">
                    Queen bed, private bath with skylight and tub, in a vibrant townhome filled with cultural pieces from around the world.
                  </p>
                  <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-eyebrow text-navy/65">
                    <span>★ 4.81 &middot; 89 reviews</span>
                    <span className="text-ochre-deep group-hover:text-navy transition-colors">Book on Airbnb →</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-navy/10 font-sans text-[10px] uppercase tracking-eyebrow text-navy/45">
                    Caroline
                  </div>
                </div>
              </a>
            </ScrollReveal>

            {/* Andrew's three */}

            {/* Comfortable Oasis (queen, private bath) */}
            <ScrollReveal as="div" delay={240}>
              <a
                href="https://www.airbnb.com/rooms/16000758?unique_share_id=c9abbcfc-76ea-4a2b-9b1f-a918c702ab32&viralityEntryPoint=1&s=76"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-bone border border-navy/15 hover:border-ochre transition-colors h-full overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-navy/5 overflow-hidden">
                  <img
                    src="https://a0.muscache.com/im/pictures/f37e01f6-c234-4a69-a2f8-8257ac78a7a7.jpg?im_w=720"
                    alt="Comfortable Oasis — queen bedroom with private bath, near Hopkins"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <div className="catalog-num text-xs text-ochre-deep mb-2">Patterson Park · Comfortable Oasis</div>
                  <h4 className="font-display text-xl text-navy leading-snug mb-2 group-hover:text-ochre-deep transition-colors">
                    Comfortable Oasis Close to Hopkins
                  </h4>
                  <p className="font-serif italic text-sm text-navy/70 leading-relaxed mb-4">
                    Queen bed, dedicated bathroom, high ceilings and artistic touches. Two blocks to Patterson Park, less than a mile to Johns Hopkins Hospital.
                  </p>
                  <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-eyebrow text-navy/65">
                    <span>★ 4.67 &middot; 195 reviews</span>
                    <span className="text-ochre-deep group-hover:text-navy transition-colors">Book on Airbnb →</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-navy/10 font-sans text-[10px] uppercase tracking-eyebrow text-navy/45">
                    Andrew
                  </div>
                </div>
              </a>
            </ScrollReveal>

            {/* Convenient Oasis (private bath, smaller listing) */}
            <ScrollReveal as="div" delay={320}>
              <a
                href="https://www.airbnb.com/rooms/1009422679116749556?unique_share_id=365b84bd-520a-45f0-90c6-f0185838bf66&viralityEntryPoint=1&s=76"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-bone border border-navy/15 hover:border-ochre transition-colors h-full overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-navy/5 overflow-hidden">
                  <img
                    src="https://a0.muscache.com/im/pictures/hosting/Hosting-1009422679116749556/original/bb54e33b-4639-47f9-9b33-4360d11f1834.jpeg?im_w=720"
                    alt="Relaxing, Convenient Oasis — bedroom with private bath, Patterson Park"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <div className="catalog-num text-xs text-ochre-deep mb-2">Patterson Park · Convenient Oasis</div>
                  <h4 className="font-display text-xl text-navy leading-snug mb-2 group-hover:text-ochre-deep transition-colors">
                    Relaxing, Convenient Oasis
                  </h4>
                  <p className="font-serif italic text-sm text-navy/70 leading-relaxed mb-4">
                    Private bedroom with private attached bathroom, espresso machine, drip coffee. Townhome convenient to Hopkins, the park, and downtown.
                  </p>
                  <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-eyebrow text-navy/65">
                    <span>★ 4.20 &middot; 10 reviews</span>
                    <span className="text-ochre-deep group-hover:text-navy transition-colors">Book on Airbnb →</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-navy/10 font-sans text-[10px] uppercase tracking-eyebrow text-navy/45">
                    Andrew
                  </div>
                </div>
              </a>
            </ScrollReveal>

            {/* Relaxing Getaway (basement, walk-out, shared bath, lower entry) */}
            <ScrollReveal as="div" delay={400}>
              <a
                href="https://www.airbnb.com/rooms/582871859089019533?unique_share_id=5731f7e0-8398-43f1-bce6-eaf669fe36e0&viralityEntryPoint=1&s=76"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-bone border border-navy/15 hover:border-ochre transition-colors h-full overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-navy/5 overflow-hidden">
                  <img
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-582871859089019533/original/f40e4890-b125-43db-bf42-abfe4b992938.jpeg?im_w=720"
                    alt="Relaxing Getaway — finished basement room, walk-out, shared bath"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <div className="catalog-num text-xs text-ochre-deep mb-2">Patterson Park · Garden Walk-Out</div>
                  <h4 className="font-display text-xl text-navy leading-snug mb-2 group-hover:text-ochre-deep transition-colors">
                    Relaxing Getaway near Hopkins
                  </h4>
                  <p className="font-serif italic text-sm text-navy/70 leading-relaxed mb-4">
                    Finished basement room with walk-out, shared bath. Five minutes to Hopkins, ten to the harbor and Fells Point.
                  </p>
                  <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-eyebrow text-navy/65">
                    <span>★ 4.04 &middot; 23 reviews</span>
                    <span className="text-ochre-deep group-hover:text-navy transition-colors">Book on Airbnb →</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-navy/10 font-sans text-[10px] uppercase tracking-eyebrow text-navy/45">
                    Andrew
                  </div>
                </div>
              </a>
            </ScrollReveal>
          </div>

          <p className="font-serif italic text-sm text-navy/55 mt-10 lg:mt-12 text-center max-w-2xl mx-auto leading-relaxed">
            Six properties, run by the family, in one Baltimore neighborhood. Caroline hosts three; Andrew hosts three. Across all six, the family handles bookings, turnover, and welcome.
          </p>
        </div>
      </section>

      {/* Stays + offerings */}
      <section className="ground-navy py-24 lg:py-32">
        <div className="container-editorial">
          <ScrollReveal as="div" className="text-center mb-16">
            <div className="eyebrow-no-rule text-ochre mb-5 inline-block">What we offer</div>
            <h3 className="font-display text-display-xl text-bone leading-tight max-w-3xl mx-auto">
              Properties chosen for <em className="italic text-sky">character</em>, not yield.
            </h3>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <ul className="divide-y divide-bone/15">
              {division.offerings.map((offering, i) => (
                <ScrollReveal key={i} as="li" delay={i * 60} className="py-6 lg:py-7">
                  <span className="font-serif text-lg lg:text-xl leading-relaxed text-bone/90">
                    {offering}
                  </span>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experiences — olive ground, hospitality-side offerings beyond the stay */}
      <section className="ground-olive py-24 lg:py-32 relative overflow-hidden">
        <div className="container-editorial relative">
          <ScrollReveal as="div" className="text-center mb-16 lg:mb-20">
            <div className="eyebrow-no-rule text-navy mb-5 inline-block">Experiences</div>
            <h3 className="font-display text-display-xl text-navy leading-tight max-w-3xl mx-auto">
              The stay is the <em className="italic">beginning</em>.
            </h3>
            <p className="font-serif text-lg lg:text-xl italic text-navy/80 leading-relaxed max-w-2xl mx-auto mt-7">
              We arrange experiences alongside the stay, or on their own, for guests who want their visit to feel like a chapter, not a checkbox.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 max-w-6xl mx-auto">
            <ExperienceCard
              title="At the Table"
              kicker="Cooking & food"
              description="A Greek dinner hosted in the house, prepared or arranged. Provisioning runs to Cross Street Market or Lexington Market. If your stay overlaps with our monthly family Greek dinner, you are welcome to come."
              delay={0}
            />
            <ExperienceCard
              title="On the Water"
              kicker="Outdoors"
              description="Kayaking the harbor, sailing arrangements with local captains, slow walks through the neighborhoods nearest the house."
              delay={120}
            />
            <ExperienceCard
              title="Sacred & Civic"
              kicker="Cultural"
              description="A guided morning at the Baltimore Basilica with breakfast to follow. Mass and music when the calendar permits. Museum routing through the Walters, the BMA, and the Peabody Library."
              delay={240}
            />
            <ExperienceCard
              title="The Long Stay"
              kicker="Curated"
              description="Anniversaries, honeymoons, writing weeks, family reunions. Stays prepared in advance with a reading list, a driving route, a stocked pantry, a few introductions, and a quiet plan you can ignore."
              delay={360}
            />
          </div>
        </div>
      </section>

      {/* Testimonial — Mark Krist, Airbnb consulting client (hospitality advisory) */}
      <section className="ground-bone py-20 lg:py-28 border-t border-navy/10">
        <div className="container-editorial max-w-3xl">
          <ScrollReveal as="div" className="text-center">
            <div className="text-ochre mb-6 flex justify-center">
              <OliveBranchMark size={36} />
            </div>
            <div className="eyebrow-no-rule text-ochre-deep mb-8 inline-block">From a Hospitality Client</div>
            <blockquote className="font-display text-xl lg:text-2xl text-navy leading-relaxed italic font-light">
              &ldquo;Andrew has been helping us set up our home for Airbnb short-term rental. We can&rsquo;t say enough good things about how organized and thorough he has been, and patient. From walking through the steps we need to take, providing links to the appropriate places and advising about what we need to do to get the place together. We couldn&rsquo;t endorse Andrew any more highly. He is honest and nice and you should work with him if you need assistance.&rdquo;
            </blockquote>
            <div className="mt-10 pt-6 border-t border-navy/15 max-w-md mx-auto">
              <div className="font-display text-lg text-navy">Mark Krist</div>
              <div className="font-serif italic text-sm text-navy/65 mt-1">Airbnb Host, Maryland · August 2025</div>
            </div>
            <p className="font-serif italic text-sm text-navy/55 mt-8 max-w-xl mx-auto leading-relaxed">
              Beyond the six properties Ithaca House operates, Andrew advises individual hosts on setup, listing, and turnover practice. By referral.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <InquirySection
        defaultDivision={division.slug}
        heading={
          <>
            Inquire <em className="italic text-ochre-deep">about a stay</em>.
          </>
        }
        text="Tell us when you are visiting and what you are looking for. We will reply with availability and a few notes about the property and the city."
      />
    </>
  );
}

interface ExperienceCardProps {
  title: string;
  kicker: string;
  description: string;
  delay: number;
}

function ExperienceCard({ title, kicker, description, delay }: ExperienceCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <article className="bg-bone/95 p-7 lg:p-8 h-full border-t-[3px] border-t-navy transition-all duration-500 hover:-translate-y-1 hover:bg-bone">
        <div className="mb-4">
          <span className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/55">
            {kicker}
          </span>
        </div>
        <h4 className="font-display text-2xl lg:text-[26px] text-navy leading-tight mb-4">
          {title}
        </h4>
        <p className="font-serif text-[15px] lg:text-base text-navy/80 leading-relaxed">
          {description}
        </p>
      </article>
    </ScrollReveal>
  );
}
