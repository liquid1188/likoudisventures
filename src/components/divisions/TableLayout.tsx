import type { Division } from '@/content/divisions';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { NotifyForm } from '@/components/forms/NotifyForm';

interface LayoutProps {
  division: Division;
}

/**
 * The Table — market-stall register.
 * Warm cream tones, food/drink illustration glyphs, recipe-card feel.
 */
export function TableLayout({ division }: LayoutProps) {
  const paragraphs = division.longDescription.split('\n\n');

  return (
    <>
      {/* Hero — cream/ochre warmth */}
      <section className="ground-cream relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
        {/* Decorative warm gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 80% 20%, rgba(200, 162, 74, 0.18) 0%, transparent 55%), radial-gradient(ellipse at 5% 85%, rgba(143, 166, 125, 0.15) 0%, transparent 60%)',
          }}
        />

        <div className="container-editorial relative z-10">
          <div className="flex items-center justify-between mb-12 text-navy/55 font-sans text-[10px] uppercase tracking-eyebrow border-b border-navy/15 pb-5">
            <Link href="/#divisions" className="hover:text-ochre-deep transition-colors">
              ← Likoudis Ventures
            </Link>
            <span>The Table · No. {division.number}</span>
            <span className="text-ochre-deep italic font-serif">{division.greek}</span>
          </div>

          {/* Asymmetric layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="text-ochre opacity-90 mb-6 inline-block">
                <OliveBranchMark size={42} />
              </div>
              <div className="font-serif italic text-ochre-deep text-lg lg:text-xl mb-5">
                {division.greek} · come to the table
              </div>
              <h1 className="font-display text-editorial text-navy leading-[0.92] tracking-tight mb-6">
                The <em className="italic text-ochre-deep">Table</em>
              </h1>
              <p className="font-serif text-2xl lg:text-3xl text-navy/85 italic leading-tight font-light max-w-xl">
                {division.tagline}
              </p>
            </div>

            {/* Decorative product line-up */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-4 lg:gap-6">
              <ProductGlyph icon="oil" label="Oil" />
              <ProductGlyph icon="honey" label="Honey" />
              <ProductGlyph icon="olives" label="Olives" />
              <ProductGlyph icon="wine" label="Wine" />
              <ProductGlyph icon="vinegar" label="Vinegar" />
              <ProductGlyph icon="spirit" label="Spirits" />
            </div>
          </div>
        </div>
      </section>

      {/* Forthcoming notice */}
      <section className="ground-bone py-16 lg:py-20 border-y border-navy/10">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto">
            <div className="catalog-num text-sm mb-3">A note</div>
            <p className="font-serif italic text-2xl lg:text-3xl text-navy leading-snug">
              The Table is <em className="italic text-ochre-deep">forthcoming</em>.
            </p>
            <p className="font-serif text-lg text-navy/65 mt-5 leading-relaxed">
              We are sourcing from Kefalonia and from named producers across Greece. We will not launch this division — and we will not put our name on a single label — until what is on the shelf is something we would serve at our own table.
            </p>
          </div>
        </div>
      </section>

      {/* Long-form prose */}
      <section className="ground-cream py-24 lg:py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <ScrollReveal as="div" className="lg:col-span-4">
              <div className="catalog-num text-sm mb-3">§ I.</div>
              <div className="eyebrow text-ochre-deep mb-5">On sourcing</div>
              <h2 className="font-display text-display-lg text-navy leading-tight">
                One label, <em className="italic text-ochre-deep">one defense</em>.
              </h2>
            </ScrollReveal>
            <ScrollReveal as="div" delay={150} className="lg:col-span-7 lg:col-start-6">
              <div className="prose-editorial">
                {paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The list */}
      <section className="ground-bone py-20 lg:py-28">
        <div className="container-editorial">
          <ScrollReveal as="div" className="text-center mb-14">
            <div className="catalog-num text-sm mb-3">§ II.</div>
            <div className="eyebrow text-ochre-deep mb-4 inline-block">The list, in order</div>
            <h3 className="font-display text-display-md text-navy">
              What is coming to <em className="italic text-ochre-deep">the table</em>.
            </h3>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <ul className="divide-y divide-navy/15">
              {division.offerings.map((offering, i) => (
                <ScrollReveal key={i} as="li" delay={i * 50} className="py-4 lg:py-5 grid grid-cols-[40px_1fr] gap-5 items-baseline">
                  <span className="catalog-num text-base">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-serif text-lg lg:text-xl text-navy/90 leading-relaxed">
                    {offering}
                  </span>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Notify section */}
      <section className="ground-navy py-24 lg:py-28">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto items-start">
            <div>
              <div className="catalog-num text-sm text-bone/70 mb-3">§ III.</div>
              <div className="eyebrow text-ochre mb-5">Forthcoming</div>
              <h2 className="font-display text-display-xl text-bone mb-7 leading-tight">
                Be the <em className="italic text-sky">first</em> to sit down.
              </h2>
              <p className="font-serif text-lg lg:text-xl text-bone/85 leading-relaxed">
                Leave your email and we will write when the first products land — usually honey or oil, the easiest things to source and ship well. We will not write you for any other reason.
              </p>
            </div>
            <NotifyForm divisionName={division.name} divisionSlug={division.slug} />
          </div>
        </div>
      </section>
    </>
  );
}

interface ProductGlyphProps {
  icon: 'oil' | 'honey' | 'olives' | 'wine' | 'vinegar' | 'spirit';
  label: string;
}

function ProductGlyph({ icon, label }: ProductGlyphProps) {
  return (
    <div className="aspect-square bg-bone border border-navy/10 flex flex-col items-center justify-center p-4 text-navy hover:border-ochre transition-colors group">
      <div className="text-ochre-deep mb-2 group-hover:scale-110 transition-transform">
        <ProductIcon icon={icon} />
      </div>
      <div className="font-display italic text-sm">{label}</div>
    </div>
  );
}

function ProductIcon({ icon }: { icon: ProductGlyphProps['icon'] }) {
  const stroke = 'currentColor';
  const sw = 1.4;
  switch (icon) {
    case 'oil':
      return (
        <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
          <path d="M 16 8 L 24 8 L 24 12 L 26 14 L 26 32 Q 26 36, 22 36 L 18 36 Q 14 36, 14 32 L 14 14 L 16 12 Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
          <line x1="14" y1="20" x2="26" y2="20" stroke={stroke} strokeWidth={sw * 0.7} />
        </svg>
      );
    case 'honey':
      return (
        <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
          <path d="M 12 14 L 28 14 L 28 32 Q 28 36, 24 36 L 16 36 Q 12 36, 12 32 Z" stroke={stroke} strokeWidth={sw} />
          <path d="M 14 14 L 14 11 L 26 11 L 26 14" stroke={stroke} strokeWidth={sw} />
          <path d="M 16 22 L 24 22 L 24 28 L 16 28 Z" stroke={stroke} strokeWidth={sw * 0.8} fill="none" />
        </svg>
      );
    case 'olives':
      return (
        <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
          <ellipse cx="14" cy="22" rx="3.5" ry="5" fill={stroke} transform="rotate(-15 14 22)" />
          <ellipse cx="22" cy="20" rx="3.5" ry="5" fill={stroke} transform="rotate(5 22 20)" />
          <ellipse cx="29" cy="22" rx="3.5" ry="5" fill={stroke} transform="rotate(20 29 22)" />
          <path d="M 8 28 Q 20 24, 32 28" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap="round" />
          <path d="M 18 14 Q 17 11, 19 9" stroke={stroke} strokeWidth={sw * 0.7} fill="none" />
        </svg>
      );
    case 'wine':
      return (
        <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
          <path d="M 14 8 L 26 8 Q 28 16, 26 22 Q 24 26, 20 26 Q 16 26, 14 22 Q 12 16, 14 8 Z" stroke={stroke} strokeWidth={sw} />
          <line x1="20" y1="26" x2="20" y2="34" stroke={stroke} strokeWidth={sw} />
          <line x1="14" y1="34" x2="26" y2="34" stroke={stroke} strokeWidth={sw} />
        </svg>
      );
    case 'vinegar':
      return (
        <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
          <path d="M 17 8 L 23 8 L 23 14 Q 27 16, 27 22 L 27 34 Q 27 36, 25 36 L 15 36 Q 13 36, 13 34 L 13 22 Q 13 16, 17 14 Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
          <line x1="13" y1="24" x2="27" y2="24" stroke={stroke} strokeWidth={sw * 0.7} />
        </svg>
      );
    case 'spirit':
      return (
        <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
          <path d="M 16 8 L 24 8 L 24 14 L 26 16 L 26 34 Q 26 36, 24 36 L 16 36 Q 14 36, 14 34 L 14 16 L 16 14 Z" stroke={stroke} strokeWidth={sw} />
          <rect x="16" y="22" width="8" height="6" stroke={stroke} strokeWidth={sw * 0.8} fill="none" />
        </svg>
      );
  }
}
