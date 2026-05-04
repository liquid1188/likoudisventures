import type { Division } from '@/content/divisions';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { WorkshopBanner } from '@/components/brand/WorkshopBanner';
import { DivisionLeads } from '@/components/sections/DivisionLeads';
import { InquirySection } from '@/components/sections/InquirySection';
import Link from 'next/link';

interface LayoutProps {
  division: Division;
}

/**
 * The Workshop — letterpress register with a full-bleed shopfront banner.
 * Centered classical typography, ornamental rules, the feel of a 19th-century
 * trade announcement.
 */
export function WorkshopLayout({ division }: LayoutProps) {
  const paragraphs = division.longDescription.split('\n\n');

  return (
    <>
      {/* Full-bleed hero with shopfront banner */}
      <section className="relative min-h-[100svh] flex flex-col bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <WorkshopBanner className="w-full h-full object-cover opacity-95" />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(14, 27, 44, 0.55) 0%, rgba(14, 27, 44, 0.18) 30%, rgba(14, 27, 44, 0.1) 50%, rgba(14, 27, 44, 0.78) 100%)',
          }}
        />

        {/* Top masthead */}
        <div className="container-tight relative z-10 pt-32 lg:pt-36 pb-2">
          <div className="flex justify-between items-start text-bone font-sans text-[10px] uppercase tracking-eyebrow">
            <Link href="/#divisions" className="hover:text-ochre transition-colors">
              ← Likoudis Ventures
            </Link>
            <span>By Appointment</span>
            <span className="text-ochre">{division.greek}</span>
          </div>
        </div>

        {/* Bottom-anchored content — centered in classical register */}
        <div className="container-editorial relative z-10 mt-auto pb-20 lg:pb-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-olive-glow opacity-80 mb-6 flex justify-center">
              <OliveBranchMark size={42} />
            </div>
            <div className="ornate-divider text-bone/40 my-3" />
            <h1 className="font-display text-editorial text-bone leading-[0.95] tracking-tight mb-6 lg:mb-7">
              {division.name}
            </h1>
            <p className="font-serif text-xl lg:text-2xl text-bone/90 leading-relaxed italic font-light mb-8">
              {division.tagline}
            </p>
            <div className="ornate-divider text-bone/40 my-3" />
            <div className="font-sans text-[10px] uppercase tracking-eyebrow text-bone/70 mt-5">
              Established 2026 · Baltimore
            </div>
          </div>
        </div>
      </section>

      {/* Lead row */}
      <section className="ground-bone py-7 lg:py-9 border-b border-navy/10">
        <div className="container-editorial">
          <DivisionLeads leads={division.leads} theme="light" />
        </div>
      </section>

      {/* Long-form prose — single centered column */}
      <section className="ground-cream py-24 lg:py-32">
        <div className="container-prose max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-12">
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
