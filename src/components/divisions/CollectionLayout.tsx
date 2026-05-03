import type { Division } from '@/content/divisions';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { NotifyForm } from '@/components/forms/NotifyForm';

interface LayoutProps {
  division: Division;
}

/**
 * The Likoudis Collection — auction-house catalog register.
 * Numbered lots, restrained type, marble white, ink-blue,
 * the formal feel of a Christie's catalog.
 */
export function CollectionLayout({ division }: LayoutProps) {
  const paragraphs = division.longDescription.split('\n\n');

  return (
    <>
      {/* Hero — formal, ink-on-marble */}
      <section className="ground-bone relative pt-32 lg:pt-40 pb-20 lg:pb-24">
        <div className="container-editorial relative z-10">
          {/* Catalog masthead */}
          <div className="border-y-2 border-double border-navy/30 py-6 mb-12">
            <div className="grid grid-cols-3 items-center text-navy text-[10px] uppercase tracking-eyebrow">
              <Link href="/#divisions" className="hover:text-ochre-deep transition-colors">
                ← Likoudis Ventures
              </Link>
              <div className="text-center font-serif italic text-base text-ochre-deep normal-case tracking-normal">
                {division.greek}
              </div>
              <div className="text-right">Catalogue No. {division.number}</div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <div className="text-ochre opacity-90 mb-7 flex justify-center">
              <OliveBranchMark size={42} />
            </div>
            <div className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/60 mb-5">
              The Likoudis Collection
            </div>
            <h1 className="font-display text-editorial text-navy leading-[0.95] tracking-tight mb-8">
              <em className="italic text-ochre-deep">Curated</em> objects
              <br />
              and editions.
            </h1>
            <div className="ornate-divider text-navy/30 my-10" />
            <p className="font-serif text-xl lg:text-2xl text-navy/80 italic font-light leading-relaxed max-w-2xl mx-auto">
              {division.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Curatorial note */}
      <section className="ground-cream py-24 lg:py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <ScrollReveal as="div" className="lg:col-span-3">
              <div className="catalog-num text-sm mb-3">Lot 0</div>
              <div className="eyebrow text-ochre-deep mb-5">Curatorial Note</div>
              <p className="marginalia">
                The family name on the division is intentional. Galleries and collections trade on the curator's name. Ours is now visible on the most discriminating part of the house.
              </p>
            </ScrollReveal>
            <ScrollReveal as="div" delay={150} className="lg:col-span-7 lg:col-start-5">
              <div className="prose-editorial">
                {paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The lots — auction-style listing */}
      <section className="ground-bone py-24 lg:py-32 border-t border-navy/15">
        <div className="container-editorial">
          <ScrollReveal as="div" className="text-center mb-16">
            <div className="catalog-num text-sm mb-3">The Catalogue</div>
            <div className="eyebrow text-ochre-deep mb-5 inline-block">Categories within</div>
            <h2 className="font-display text-display-xl text-navy leading-tight">
              What the Collection <em className="italic text-ochre-deep">will hold</em>.
            </h2>
            <p className="font-serif italic text-lg text-navy/55 mt-6 max-w-xl mx-auto">
              Categories are listed below; specific lots will be added as the Collection acquires them.
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {division.offerings.map((offering, i) => (
              <ScrollReveal key={i} as="div" delay={i * 60}>
                <CatalogLot number={i + 1} description={offering} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="ornate-divider text-navy/30 my-16" />
            <p className="text-center font-serif italic text-base text-navy/55">
              All acquisitions accompanied by full provenance documentation.
              <br />
              Insured shipping worldwide. By appointment for in-person viewing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Notify — formal */}
      <section className="ground-navy py-24 lg:py-28">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto items-start">
            <div>
              <div className="catalog-num text-sm text-bone/70 mb-3">Forthcoming</div>
              <div className="eyebrow text-ochre mb-5">Catalogue One</div>
              <h2 className="font-display text-display-xl text-bone mb-7 leading-tight">
                The first catalogue is <em className="italic text-sky">in preparation</em>.
              </h2>
              <p className="font-serif text-lg lg:text-xl text-bone/85 leading-relaxed">
                Subscribers receive the inaugural Likoudis Collection catalogue in advance of any public release. Not a newsletter — only the catalogue, when it is ready, and only once it is.
              </p>
            </div>
            <NotifyForm divisionName={division.name} divisionSlug={division.slug} />
          </div>
        </div>
      </section>
    </>
  );
}

interface CatalogLotProps {
  number: number;
  description: string;
}

function CatalogLot({ number, description }: CatalogLotProps) {
  return (
    <div className="grid grid-cols-12 gap-4 lg:gap-8 py-6 lg:py-7 border-b border-navy/15 last:border-b-0 group hover:bg-cream/50 transition-colors">
      <div className="col-span-2 lg:col-span-1">
        <div className="catalog-num text-base lg:text-lg">
          {String(number).padStart(2, '0')}.
        </div>
      </div>
      <div className="col-span-10 lg:col-span-9">
        <div className="font-serif text-lg lg:text-xl text-navy leading-relaxed">
          {description}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-2 lg:text-right flex lg:justify-end items-baseline">
        <span className="font-sans text-[9px] uppercase tracking-tag text-ochre-deep">
          Forthcoming
        </span>
      </div>
    </div>
  );
}
