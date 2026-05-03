import Link from 'next/link';
import type { ReactNode } from 'react';
import { site } from '@/content/site';

interface HeroProps {
  eyebrow?: string;
  showGreekEyebrow?: boolean;
  title: ReactNode;
  lede?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

/**
 * Standard navy hero with Santorini sky atmosphere.
 * Used on homepage and division subpages.
 */
export function Hero({
  eyebrow,
  showGreekEyebrow = true,
  title,
  lede,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="ground-navy relative overflow-hidden hero-atmosphere">
      <div className="container-tight relative z-10 py-20 lg:py-28">
        <div className="fade-up-stagger">
          {eyebrow && (
            <div className="eyebrow text-sky mb-7">
              <span>{eyebrow}</span>
              {showGreekEyebrow && (
                <span className="text-ochre normal-case font-serif italic tracking-normal text-sm ml-1.5">
                  · {site.greekRoot}
                </span>
              )}
            </div>
          )}

          <h1 className="font-serif font-normal text-display-xl text-bone max-w-4xl">
            {title}
          </h1>

          {lede && (
            <p className="font-serif font-light text-xl lg:text-2xl leading-relaxed text-bone/85 max-w-2xl mt-8">
              {lede}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-3.5 mt-11">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-primary text-center">
                  {primaryCta.label} →
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-secondary text-center">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
