import type { Division } from '@/content/divisions';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { TableBanner } from '@/components/brand/TableBanner';
import { DivisionLeads } from '@/components/sections/DivisionLeads';
import { NotifyForm } from '@/components/forms/NotifyForm';

interface LayoutProps {
  division: Division;
}

/**
 * The Table — market-stall register with a Mediterranean still-life banner.
 * Warm cream tones, recipe-card feel.
 */
export function TableLayout({ division }: LayoutProps) {
  const paragraphs = division.longDescription.split('\n\n');

  return (
    <>
      {/* Full-bleed hero with still-life banner */}
      <section className="relative min-h-[100svh] flex flex-col bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <TableBanner className="w-full h-full object-cover opacity-95" />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(14, 27, 44, 0.5) 0%, rgba(14, 27, 44, 0.12) 30%, rgba(14, 27, 44, 0.08) 50%, rgba(14, 27, 44, 0.78) 100%)',
          }}
        />

        <div className="container-tight relative z-10 pt-32 lg:pt-36 pb-2">
          <div className="flex justify-between items-start text-bone font-sans text-[10px] uppercase tracking-eyebrow">
            <Link href="/#divisions" className="hover:text-ochre transition-colors">
              ← Likoudis Ventures
            </Link>
            <span>No. {division.number} · The Table</span>
            <span className="text-ochre">{division.greek}</span>
          </div>
        </div>

        <div className="container-editorial relative z-10 mt-auto pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <div className="text-olive-glow opacity-85 mb-6 inline-block">
              <OliveBranchMark size={42} />
            </div>
            <div className="font-serif italic text-ochre text-lg lg:text-xl mb-4">
              {division.greek} · come to the table
            </div>
            <h1 className="font-display text-editorial text-bone leading-[0.92] tracking-tight mb-6">
              The <em className="italic text-ochre">Table</em>
            </h1>
            <p className="font-serif text-2xl lg:text-3xl text-bone/90 italic leading-tight font-light max-w-2xl">
              {division.tagline}
            </p>
            <div className="mt-7">
              <span className="inline-block font-sans text-[9px] uppercase tracking-tag px-2.5 py-1 bg-ochre text-bone">
                Forthcoming
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Lead row */}
      <section className="ground-cream py-7 lg:py-9 border-b border-navy/10">
        <div className="container-editorial">
          <DivisionLeads leads={division.leads} theme="light" />
        </div>
      </section>

      {/* On the table — opening line */}
      <section className="ground-bone py-16 lg:py-20 border-y border-navy/10">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto">
            <div className="catalog-num text-sm mb-3">On the table</div>
            <p className="font-serif italic text-2xl lg:text-3xl text-navy leading-snug">
              Every label tells you <em className="italic text-ochre-deep">where it came from</em>.
            </p>
            <p className="font-serif text-lg text-navy/65 mt-5 leading-relaxed">
              The Table sources from Kefalonia and from named producers across Greece. Each product comes with the name of the estate, the apiary, the press — and ours, beside theirs, on the front of the bottle.
            </p>
          </div>
        </div>
      </section>

      {/* Long-form description */}
      <section className="ground-cream py-24 lg:py-28">
        <div className="container-prose max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="catalog-num text-sm mb-2">§ I.</div>
              <div className="eyebrow-no-rule text-ochre-deep">A note from the kitchen</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="prose-editorial">
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The line — visual category grid */}
      <section className="ground-cream py-20 lg:py-24 border-t border-navy/10">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="catalog-num text-sm mb-2">§ II.</div>
              <div className="eyebrow-no-rule text-ochre-deep mb-3">The categories</div>
              <h3 className="font-display text-display-md text-navy max-w-2xl mx-auto leading-tight">
                Six families of <em className="italic text-ochre-deep">good things</em>.
              </h3>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5 max-w-3xl mx-auto">
              <ProductGlyph icon="oil" label="Oil" />
              <ProductGlyph icon="honey" label="Honey" />
              <ProductGlyph icon="olives" label="Olives" />
              <ProductGlyph icon="wine" label="Wine" />
              <ProductGlyph icon="vinegar" label="Vinegar" />
              <ProductGlyph icon="spirit" label="Spirits" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Offerings list */}
      <section className="ground-bone py-20 lg:py-24">
        <div className="container-prose max-w-xl text-center">
          <ScrollReveal>
            <div className="catalog-num text-sm mb-2">§ III.</div>
            <div className="eyebrow-no-rule text-ochre-deep mb-3">The line</div>
            <h3 className="font-display text-display-md text-navy mb-10">
              What we will <em className="italic text-ochre-deep">be selling</em>.
            </h3>
            <ul className="space-y-4">
              {division.offerings.map((offering, i) => (
                <li key={i} className="font-serif text-lg text-navy/85">
                  {offering}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Notify form */}
      <section className="ground-navy py-24 lg:py-28">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-olive-glow mb-6 flex justify-center">
                <OliveBranchMark size={42} />
              </div>
              <div className="catalog-num text-sm mb-2 text-bone/70">§ IV.</div>
              <div className="eyebrow text-olive-glow mb-5 inline-block">
                When the line opens
              </div>
              <h3 className="font-display text-display-lg text-bone mb-6 leading-tight">
                Be the first to <em className="italic text-olive-glow">come to the table</em>.
              </h3>
              <p className="font-serif text-lg text-bone/85 leading-relaxed mb-10">
                Leave your address and we'll write when the first products are ready to ship.
              </p>
              <NotifyForm divisionName={division.name} divisionSlug={division.slug} />
            </div>
          </ScrollReveal>
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
