import Link from 'next/link';
import { divisions } from '@/content/divisions';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

/**
 * Editorial table-of-contents for the divisions.
 * Replaces the generic card grid with a more sophisticated listing —
 * each division as a row with a number, name, Greek script, status, tagline, and arrow.
 *
 * Hover any row → row expands slightly, the arrow slides, the row gets a thin underline.
 */
export function DivisionsContents() {
  return (
    <section id="divisions" className="ground-bone py-24 lg:py-32 relative">
      <div className="container-editorial relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 lg:mb-20">
            <div className="lg:col-span-4">
              <div className="eyebrow text-ochre-deep mb-5">Contents</div>
              <h2 className="font-display text-display-xl text-navy">
                The work, <em className="italic text-ochre-deep">plainly</em>
                <br />
                stated.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 lg:pt-6">
              <p className="font-serif text-xl lg:text-2xl leading-relaxed text-navy/75 italic">
                Six enterprises under one family name. Each runs on its own clock and its own customers, but the standard underneath is the same — the family name goes on each one, so each one has to be worth signing.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="ornate-divider text-navy mb-2" />
        </ScrollReveal>

        {/* Rows */}
        <div>
          {divisions.map((division, idx) => (
            <ScrollReveal key={division.slug} delay={idx * 80}>
              <DivisionRow
                slug={division.slug}
                number={division.number}
                name={division.name}
                greek={division.greek}
                tagline={division.tagline}
                status={division.status}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom small note */}
        <ScrollReveal>
          <div className="ornate-divider text-navy mt-2 mb-12" />
          <p className="text-center font-serif italic text-base lg:text-lg text-navy/55 max-w-2xl mx-auto">
            Each division opens onto its own subpage. Hover the olive branch above to navigate by image, or read by name below.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

interface DivisionRowProps {
  slug: string;
  number: string;
  name: string;
  greek: string;
  tagline: string;
  status: 'active' | 'forthcoming';
}

function DivisionRow({ slug, number, name, greek, tagline, status }: DivisionRowProps) {
  return (
    <Link
      href={`/divisions/${slug}`}
      className="group block py-7 lg:py-9 border-b border-navy/10 hover:border-navy transition-colors duration-300"
    >
      <div className="grid grid-cols-12 gap-4 lg:gap-8 items-baseline">
        {/* Roman numeral */}
        <div className="col-span-1 catalog-num text-base lg:text-lg pt-1">
          {number}.
        </div>

        {/* Name + Greek */}
        <div className="col-span-11 lg:col-span-5">
          <div className="font-display text-3xl lg:text-5xl text-navy leading-tight tracking-tight transition-all duration-500 group-hover:translate-x-1">
            {name}
          </div>
          <div className="font-serif italic text-base lg:text-lg text-ochre-deep mt-1.5">
            {greek}
          </div>
        </div>

        {/* Tagline (desktop only) */}
        <div className="hidden lg:block lg:col-span-4 font-serif italic text-base lg:text-lg text-navy/65 leading-relaxed">
          {tagline}
        </div>

        {/* Status + arrow */}
        <div className="col-span-12 lg:col-span-2 flex items-center justify-between lg:justify-end gap-4 pt-3 lg:pt-0">
          <span
            className={
              status === 'active'
                ? 'inline-block font-sans text-[9px] uppercase tracking-tag px-2.5 py-1 bg-olive text-bone'
                : 'inline-block font-sans text-[9px] uppercase tracking-tag px-2.5 py-1 bg-navy text-olive-glow'
            }
          >
            {status === 'active' ? 'Active' : 'Forthcoming'}
          </span>
          <span className="font-display text-2xl lg:text-3xl text-navy/40 group-hover:text-ochre-deep group-hover:translate-x-2 transition-all duration-500">
            →
          </span>
        </div>

        {/* Mobile-only tagline */}
        <div className="lg:hidden col-span-12 -mt-2 font-serif italic text-base text-navy/65 leading-relaxed pl-12">
          {tagline}
        </div>
      </div>
    </Link>
  );
}
