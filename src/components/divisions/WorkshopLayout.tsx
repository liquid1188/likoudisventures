import type { Division } from '@/content/divisions';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { InquirySection } from '@/components/sections/InquirySection';
import Link from 'next/link';

interface LayoutProps {
  division: Division;
}

/**
 * The Workshop — letterpress register.
 * Centered single-column, ornamental rules, classical typography,
 * the feel of a printed business card or trade announcement.
 */
export function WorkshopLayout({ division }: LayoutProps) {
  const paragraphs = division.longDescription.split('\n\n');

  return (
    <>
      {/* Hero — centered, classical */}
      <section className="ground-navy relative pt-32 lg:pt-44 pb-20 lg:pb-28 overflow-hidden">
        <div className="container-editorial relative z-10">
          <div className="flex items-center justify-between mb-12 text-bone/60 font-sans text-[10px] uppercase tracking-eyebrow border-b border-bone/15 pb-5">
            <Link href="/#divisions" className="hover:text-ochre transition-colors">
              ← Likoudis Ventures
            </Link>
            <span>By Appointment</span>
            <span className="text-ochre">{division.greek}</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="text-olive-glow opacity-70 mb-8 flex justify-center">
              <OliveBranchMark size={48} />
            </div>

            <div className="catalog-num text-bone/70 text-base mb-4">No. {division.number}</div>

            <div className="ornate-divider text-bone/30 my-3" />

            <h1 className="font-display text-editorial text-bone leading-[0.95] tracking-tight mb-6 lg:mb-8">
              {division.name}
            </h1>

            <p className="font-serif text-xl lg:text-2xl text-bone/80 leading-relaxed italic font-light mb-10">
              {division.tagline}
            </p>

            <div className="ornate-divider text-bone/30 my-3" />

            <div className="font-sans text-[10px] uppercase tracking-eyebrow text-bone/55">
              Established MMXXVI · Baltimore
            </div>
          </div>
        </div>
      </section>

      {/* Long-form prose — single centered column */}
      <section className="ground-cream py-24 lg:py-32">
        <div className="container-prose max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="catalog-num text-sm mb-2">§ I.</div>
              <div className="eyebrow-no-rule text-ochre-deep">On the Work</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="prose-editorial text-center">
              {paragraphs.map((para, i) => {
                if (i === 0) {
                  return (
                    <p key={i} className="text-2xl lg:text-3xl leading-relaxed text-navy first-letter:font-display first-letter:text-ochre first-letter:text-7xl first-letter:font-light first-letter:leading-none first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                      {para}
                    </p>
                  );
                }
                return <p key={i} className="text-xl lg:text-2xl">{para}</p>;
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="ornate-divider text-navy/30 my-20" />
          </ScrollReveal>

          {/* Offerings — list with traditional bullets (·) */}
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="catalog-num text-sm mb-2">§ II.</div>
              <div className="eyebrow-no-rule text-ochre-deep mb-3">Among the work</div>
              <h3 className="font-display text-display-md text-navy">
                What may be commissioned.
              </h3>
            </div>
          </ScrollReveal>

          <ul className="space-y-5 max-w-xl mx-auto">
            {division.offerings.map((offering, i) => (
              <ScrollReveal key={i} as="li" delay={i * 60}>
                <div className="text-center font-serif text-lg lg:text-xl leading-relaxed text-navy/90">
                  {offering}
                </div>
                {i < division.offerings.length - 1 && (
                  <div className="text-center text-ochre/40 my-4 text-base">·</div>
                )}
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal>
            <div className="ornate-divider text-navy/30 my-20" />
          </ScrollReveal>

          {/* Closing flourish */}
          <ScrollReveal>
            <div className="text-center">
              <p className="font-serif italic text-xl text-ochre-deep">
                Each project begins with a conversation.
              </p>
              <p className="font-serif italic text-base text-navy/60 mt-3">
                — The brothers, Baltimore
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <InquirySection
        defaultDivision={division.slug}
        heading={
          <>
            Open a <em className="italic text-ochre-deep">conversation</em>.
          </>
        }
        text="The Workshop accepts a small number of clients at any given time. Tell us briefly what you have in mind. We will respond personally."
      />
    </>
  );
}
