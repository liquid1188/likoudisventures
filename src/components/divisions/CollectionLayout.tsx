import type { Division } from '@/content/divisions';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { CollectionBanner } from '@/components/brand/CollectionBanner';
import { DivisionLeads } from '@/components/sections/DivisionLeads';
import { NotifyForm } from '@/components/forms/NotifyForm';

interface LayoutProps {
  division: Division;
}

/**
 * The Likoudis Collection — auction-house catalog register.
 * Full-bleed viewing-room banner, then numbered lots, restrained type,
 * the formal feel of a Christie's catalog.
 */
export function CollectionLayout({ division }: LayoutProps) {
  const paragraphs = division.longDescription.split('\n\n');

  return (
    <>
      {/* Full-bleed hero with viewing-room banner */}
      <section className="relative min-h-[100svh] flex flex-col bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <CollectionBanner className="w-full h-full object-cover opacity-95" />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(14, 27, 44, 0.55) 0%, rgba(14, 27, 44, 0.1) 30%, rgba(14, 27, 44, 0.05) 50%, rgba(14, 27, 44, 0.78) 100%)',
          }}
        />

        {/* Top masthead — auction-catalog style */}
        <div className="container-tight relative z-10 pt-32 lg:pt-36 pb-2">
          <div className="grid grid-cols-3 items-center text-bone font-sans text-[10px] uppercase tracking-eyebrow">
            <Link href="/#divisions" className="hover:text-ochre transition-colors">
              ← Likoudis Ventures
            </Link>
            <div className="text-center font-serif italic text-base text-ochre normal-case tracking-normal">
              {division.greek}
            </div>
            <div className="text-right">Catalogue No. {division.number.toUpperCase()}</div>
          </div>
        </div>

        {/* Bottom-anchored content */}
        <div className="container-editorial relative z-10 mt-auto pb-20 lg:pb-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-olive-glow opacity-85 mb-6 flex justify-center">
              <OliveBranchMark size={42} />
            </div>
            <div className="font-sans text-[10px] uppercase tracking-eyebrow text-bone/75 mb-5">
              The Likoudis Collection
            </div>
            <h1 className="font-display text-editorial text-bone leading-[0.95] tracking-tight mb-7">
              <em className="italic text-ochre">Curated</em> objects
              <br />
              and editions.
            </h1>
            <div className="ornate-divider text-bone/40 my-7" />
            <p className="font-serif text-xl lg:text-2xl text-bone/90 italic font-light leading-relaxed max-w-2xl mx-auto">
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
      <section className="ground-bone py-7 lg:py-9 border-b border-navy/10">
        <div className="container-editorial">
          <DivisionLeads leads={division.leads} theme="light" />
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
