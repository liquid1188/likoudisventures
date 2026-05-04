import Link from 'next/link';
import type { Division } from '@/content/divisions';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { StudioBanner } from '@/components/brand/StudioBanner';
import { InquirySection } from '@/components/sections/InquirySection';
import { site } from '@/content/site';

interface LayoutProps {
  division: Division;
}

/**
 * The Studio — editorial blog/magazine register.
 * Full-bleed banner hero (editor's desk illustration), then two-column
 * marginalia layout, ornamental rules, generous prose.
 */
export function StudioLayout({ division }: LayoutProps) {
  const paragraphs = division.longDescription.split('\n\n');

  return (
    <>
      {/* Full-bleed hero with editor's-desk banner */}
      <section className="relative min-h-[100svh] flex flex-col bg-navy overflow-hidden">
        {/* Banner background */}
        <div className="absolute inset-0">
          <StudioBanner className="w-full h-full object-cover opacity-95" />
        </div>

        {/* Gradient overlay for text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(14, 27, 44, 0.55) 0%, rgba(14, 27, 44, 0.15) 30%, rgba(14, 27, 44, 0.1) 50%, rgba(14, 27, 44, 0.78) 100%)',
          }}
        />

        {/* Top masthead */}
        <div className="container-tight relative z-10 pt-32 lg:pt-36 pb-2">
          <div className="flex justify-between items-start text-bone font-sans text-[10px] uppercase tracking-eyebrow">
            <Link href="/#divisions" className="hover:text-ochre transition-colors">
              ← Likoudis Ventures
            </Link>
            <span>No. {division.number} · The Studio</span>
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
              {division.greek} · digital craft
            </div>
            <h1 className="font-display text-editorial text-bone leading-[0.95] tracking-tight mb-7">
              {division.name}
            </h1>
            <p className="font-serif text-2xl lg:text-3xl text-bone/90 leading-tight italic font-light max-w-3xl">
              {division.tagline}
            </p>
            <div className="mt-8">
              <span
                className={
                  division.status === 'active'
                    ? 'inline-block font-sans text-[9px] uppercase tracking-tag px-2.5 py-1 bg-olive text-bone'
                    : 'inline-block font-sans text-[9px] uppercase tracking-tag px-2.5 py-1 bg-ochre text-bone'
                }
              >
                {division.status === 'active' ? 'Active' : 'Forthcoming'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Long-form prose section — editorial register */}
      <section className="ground-bone py-24 lg:py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            {/* Marginalia column */}
            <ScrollReveal as="div" className="col-span-12 lg:col-span-3 lg:pt-4">
              <div className="catalog-num text-sm mb-2">§ I.</div>
              <div className="eyebrow-no-rule text-ochre-deep mb-4">The Work</div>
              <p className="marginalia hidden lg:block">
                Lickity Split Web Design is the productized line of {division.name}. Custom builds, bespoke and well-tuned, hosted under your own ownership.
              </p>
            </ScrollReveal>

            {/* Prose */}
            <ScrollReveal as="div" delay={150} className="col-span-12 lg:col-span-7 lg:col-start-5">
              <div className="prose-editorial">
                {paragraphs.map((para, i) => {
                  if (i === 0) {
                    const firstChar = para.charAt(0);
                    const rest = para.slice(1);
                    return (
                      <p key={i}>
                        <span className="font-display text-7xl lg:text-8xl text-ochre float-left mr-3 mt-1 leading-[0.85] font-light">
                          {firstChar}
                        </span>
                        {rest}
                      </p>
                    );
                  }
                  return <p key={i}>{para}</p>;
                })}
              </div>
            </ScrollReveal>
          </div>

          <div className="ornate-divider text-navy/30 my-20" />

          {/* Offerings — numbered list, magazine feel */}
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <ScrollReveal as="div" className="col-span-12 lg:col-span-3">
              <div className="catalog-num text-sm mb-2">§ II.</div>
              <div className="eyebrow-no-rule text-ochre-deep mb-4">In Particulars</div>
              <h3 className="font-display text-display-md text-navy">
                What we offer.
              </h3>
            </ScrollReveal>
            <div className="col-span-12 lg:col-span-7 lg:col-start-5">
              <ul className="divide-y divide-navy/15">
                {division.offerings.map((offering, i) => (
                  <ScrollReveal key={i} as="li" delay={i * 60} className="py-5 lg:py-6 grid grid-cols-[40px_1fr] gap-6 items-baseline">
                    <span className="catalog-num text-base">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-serif text-lg lg:text-xl leading-relaxed text-navy/90">
                      {offering}
                    </span>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <InquirySection
        defaultDivision={division.slug}
        heading={
          <>
            Begin a <em className="italic text-ochre-deep">project</em>
            <br />with The Studio.
          </>
        }
        text={`For ${division.name.toLowerCase()} engagements specifically — site builds, brand work, content, anything in between — write to us directly. ${site.email}.`}
      />
    </>
  );
}
