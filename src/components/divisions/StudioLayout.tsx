import Link from 'next/link';
import type { Division } from '@/content/divisions';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { InquirySection } from '@/components/sections/InquirySection';
import { site } from '@/content/site';

interface LayoutProps {
  division: Division;
}

/**
 * The Studio — editorial blog/magazine register.
 * Two-column layout, marginalia, ornamental rules, generous prose.
 */
export function StudioLayout({ division }: LayoutProps) {
  const paragraphs = division.longDescription.split('\n\n');

  return (
    <>
      {/* Editorial hero — navy with masthead feel */}
      <section className="ground-navy relative pt-32 lg:pt-40 pb-20 lg:pb-24 overflow-hidden">
        <div className="container-editorial relative z-10">
          {/* Masthead bar */}
          <div className="flex items-center justify-between mb-12 text-bone/60 font-sans text-[10px] uppercase tracking-eyebrow border-b border-bone/15 pb-5">
            <Link href="/#divisions" className="hover:text-ochre transition-colors">
              ← Likoudis Ventures
            </Link>
            <span>The Studio · No. {division.number}</span>
            <span className="text-ochre">{division.greek}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Margin column — section number + status */}
            <div className="lg:col-span-2 lg:pt-3">
              <span className="text-olive-glow opacity-70 inline-block mb-5">
                <OliveBranchMark size={32} />
              </span>
              <div className="catalog-num text-bone/70 text-base mb-3">{division.number}.</div>
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

            {/* Headline column */}
            <div className="lg:col-span-9">
              <div className="font-serif italic text-ochre text-lg mb-4">
                {division.greek} · digital craft
              </div>
              <h1 className="font-display text-editorial text-bone leading-[0.95] tracking-tight mb-8">
                {division.name}
              </h1>
              <p className="font-serif text-2xl lg:text-3xl text-bone/85 leading-tight italic font-light max-w-3xl">
                {division.tagline}
              </p>
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
