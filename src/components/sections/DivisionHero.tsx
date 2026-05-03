import Link from 'next/link';
import type { Division } from '@/content/divisions';

interface DivisionHeroProps {
  division: Division;
}

/**
 * Navy hero specifically for division subpages.
 * Shows division number, Greek subtitle, status, name, long description, and CTA.
 */
export function DivisionHero({ division }: DivisionHeroProps) {
  const statusLabel = division.status === 'active' ? 'Active' : 'Forthcoming';

  return (
    <section className="ground-navy relative overflow-hidden hero-atmosphere">
      <div className="container-tight relative z-10 py-20 lg:py-28">
        <div className="fade-up-stagger max-w-4xl">
          {/* Breadcrumb / division marker */}
          <div className="flex items-center gap-4 mb-7">
            <Link
              href="/#divisions"
              className="text-[11px] uppercase tracking-eyebrow text-sky hover:text-bone transition-colors"
            >
              ← Divisions
            </Link>
            <span className="text-bone/30">·</span>
            <span className="font-serif italic text-base text-ochre">
              No. {division.number}
            </span>
            <span className="text-bone/30">·</span>
            <span
              className={
                division.status === 'active'
                  ? 'text-[10px] uppercase tracking-tag px-2.5 py-1 bg-olive text-bone'
                  : 'text-[10px] uppercase tracking-tag px-2.5 py-1 bg-ochre text-bone'
              }
            >
              {statusLabel}
            </span>
          </div>

          {/* Name + Greek subtitle */}
          <h1 className="font-serif font-normal text-display-xl text-bone mb-4">
            {division.name}
          </h1>
          <div className="font-serif italic text-2xl lg:text-3xl text-ochre mb-8">
            {division.greek}
            <span className="text-ochre/60 text-lg ml-3">
              ({division.greekTransliteration})
            </span>
          </div>

          {/* Tagline */}
          <p className="font-serif font-light text-2xl lg:text-3xl leading-tight text-bone/90 max-w-2xl">
            {division.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
