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
            <span>No. {division.number} · Ithaca House</span>
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
              <div className="catalog-num text-sm mb-3">§ I.</div>
              <div className="eyebrow text-ochre-deep mb-6">On the name</div>
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
                      Find them in Kioni
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

      {/* Stays + offerings */}
      <section className="ground-navy py-24 lg:py-32">
        <div className="container-editorial">
          <ScrollReveal as="div" className="text-center mb-16">
            <div className="catalog-num text-sm mb-3 text-bone/70">§ II.</div>
            <div className="eyebrow text-ochre mb-5 inline-block">What we offer</div>
            <h3 className="font-display text-display-xl text-bone leading-tight max-w-3xl mx-auto">
              Properties chosen for <em className="italic text-sky">character</em>, not yield.
            </h3>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <ul className="divide-y divide-bone/15">
              {division.offerings.map((offering, i) => (
                <ScrollReveal key={i} as="li" delay={i * 60} className="py-6 lg:py-7 grid grid-cols-[40px_1fr_40px] gap-6 items-center">
                  <span className="catalog-num text-base text-ochre">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-serif text-lg lg:text-xl leading-relaxed text-bone/90">
                    {offering}
                  </span>
                  <span className="text-bone/40 text-right">·</span>
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
            <div className="catalog-num text-sm mb-3 text-navy/70">§ III.</div>
            <div className="eyebrow text-navy mb-5 inline-block">Experiences</div>
            <h3 className="font-display text-display-xl text-navy leading-tight max-w-3xl mx-auto">
              The stay is the <em className="italic">beginning</em>.
            </h3>
            <p className="font-serif text-lg lg:text-xl italic text-navy/80 leading-relaxed max-w-2xl mx-auto mt-7">
              We arrange experiences — alongside the stay or on their own — for guests who want their visit to feel like a chapter, not a checkbox.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 max-w-6xl mx-auto">
            <ExperienceCard
              number="01"
              title="At the Table"
              kicker="Cooking & food"
              description="Greek dinners hosted in the house, walking tours of the markets, an evening of wine and small plates with notes on what is in front of you."
              delay={0}
            />
            <ExperienceCard
              number="02"
              title="On the Water"
              kicker="Outdoors"
              description="Kayaking the harbor, sailing arrangements with local captains, slow walks through the neighborhoods nearest the house."
              delay={120}
            />
            <ExperienceCard
              number="03"
              title="Sacred & Civic"
              kicker="Cultural"
              description="A guided morning at the Baltimore Basilica, sacred-music concerts when the calendar permits, museum and gallery routing tailored to the visit."
              delay={240}
            />
            <ExperienceCard
              number="04"
              title="The Long Stay"
              kicker="Curated"
              description="Anniversaries, honeymoons, writing weeks, family reunions. Stays prepared in advance — a stocked pantry, a few introductions, a quiet plan you can ignore."
              delay={360}
            />
          </div>
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
  number: string;
  title: string;
  kicker: string;
  description: string;
  delay: number;
}

function ExperienceCard({ number, title, kicker, description, delay }: ExperienceCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <article className="bg-bone/95 p-7 lg:p-8 h-full border-t-[3px] border-t-navy transition-all duration-500 hover:-translate-y-1 hover:bg-bone">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="catalog-num text-sm text-ochre-deep">{number}</span>
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
