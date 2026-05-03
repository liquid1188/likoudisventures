import Link from 'next/link';
import type { ReactNode } from 'react';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { site } from '@/content/site';

interface HeroProps {
  eyebrow?: string;
  showGreekEyebrow?: boolean;
  title: ReactNode;
  lede?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /**
   * Catalog-style section number, e.g. "§ II" or "No. 1"
   */
  sectionNumber?: string;
}

/**
 * Editorial sub-page hero. Navy ground, asymmetric layout,
 * large display headline, optional eyebrow + ledger header.
 */
export function Hero({
  eyebrow,
  showGreekEyebrow = false,
  title,
  lede,
  primaryCta,
  secondaryCta,
  sectionNumber,
}: HeroProps) {
  return (
    <section className="ground-navy relative overflow-hidden min-h-[80vh] flex flex-col">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 75% 20%, rgba(143, 184, 206, 0.18) 0%, transparent 55%), radial-gradient(ellipse at 5% 85%, rgba(143, 166, 125, 0.1) 0%, transparent 60%)',
        }}
      />
      {/* Catalog header */}
      <div className="container-tight relative z-10 pt-32 lg:pt-36 pb-2">
        <div className="flex justify-between items-start text-bone/55 font-sans text-[10px] uppercase tracking-eyebrow">
          <div>
            <div>Likoudis Ventures</div>
            {sectionNumber && <div className="mt-1 text-bone/40">{sectionNumber}</div>}
          </div>
          <div className="text-right">
            <div>Est. {site.foundedRoman}</div>
            <div className="mt-1 text-bone/40">{site.seat}</div>
          </div>
        </div>
      </div>

      {/* Center content */}
      <div className="container-editorial relative z-10 flex-1 flex flex-col justify-center py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-2 lg:pt-3">
            <span className="text-olive-glow opacity-70 inline-block">
              <OliveBranchMark size={36} />
            </span>
          </div>

          <div className="lg:col-span-9">
            {eyebrow && (
              <div className="font-serif italic text-ochre text-base lg:text-lg mb-5 stagger-fade">
                {eyebrow}
                {showGreekEyebrow && <span className="ml-2">· {site.greekRoot}</span>}
              </div>
            )}

            <h1 className="font-display text-editorial text-bone leading-[0.96] mb-9 lg:mb-12 tracking-tight">
              {title}
            </h1>

            {lede && (
              <p className="font-serif text-xl lg:text-2xl leading-relaxed text-bone/85 max-w-3xl font-light">
                {lede}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row gap-3.5 mt-12">
                {primaryCta && (
                  <Link href={primaryCta.href} className="btn-bone">
                    {primaryCta.label} →
                  </Link>
                )}
                {secondaryCta && (
                  <Link href={secondaryCta.href} className="btn-ghost-bone">
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="container-tight relative z-10 pb-6">
        <div className="border-t border-bone/10 pt-5 flex justify-between items-center text-bone/40 font-sans text-[10px] uppercase tracking-eyebrow">
          <div>↓ Continued below</div>
          <div className="text-right">ἐκ Κεφαλονιάς</div>
        </div>
      </div>
    </section>
  );
}
