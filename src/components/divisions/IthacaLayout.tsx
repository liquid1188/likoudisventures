import type { Division } from '@/content/divisions';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { IonianSeascape } from '@/components/brand/IonianSeascape';
import { InquirySection } from '@/components/sections/InquirySection';

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

          {/* Notes / partnership disclosure */}
          {division.notes && (
            <ScrollReveal as="div">
              <div className="mt-20 lg:mt-28 max-w-3xl mx-auto bg-bone p-8 lg:p-10 border-l-2 border-ochre">
                <div className="catalog-num text-sm mb-3">A Note</div>
                <p className="font-serif italic text-lg lg:text-xl leading-relaxed text-navy/85">
                  {division.notes}
                </p>
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
