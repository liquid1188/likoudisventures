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
              <h2 className="font-display text-display-xl text-navy">
                The work, <em className="italic text-ochre-deep">plainly</em>
                <br />
                stated.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 lg:pt-6">
              <p className="font-serif text-xl lg:text-2xl leading-relaxed text-navy/75 italic">
                Five siblings, each with their own skills and passions, contributing to one family brand. Caroline hosts and paints. Elena designs for the web. She paints, too. Andrew works on the web side with her, and curates experiences for guests. Luke and Jake run the wine and pantry, and the workshop where bespoke work begins, with Andrew on the advisory side.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="ornate-divider text-olive-deep mb-2" />
        </ScrollReveal>

        {/* Rows */}
        <div>
          {divisions.map((division, idx) => (
            <ScrollReveal key={division.slug} delay={idx * 80}>
              <DivisionRow
                slug={division.slug}
                name={division.name}
                greek={division.greek}
                tagline={division.tagline}
                status={division.status}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom rule */}
        <ScrollReveal>
          <div className="ornate-divider text-olive-deep mt-2" />
        </ScrollReveal>
      </div>
    </section>
  );
}

interface DivisionRowProps {
  slug: string;
  name: string;
  greek: string;
  tagline: string;
  status: 'active' | 'forthcoming';
}

function DivisionRow({ slug, name, greek, tagline, status }: DivisionRowProps) {
  return (
    <Link
      href={`/divisions/${slug}`}
      className="group block py-7 lg:py-9 border-b border-olive-glow/25 hover:border-olive transition-colors duration-300"
    >
      <div className="grid grid-cols-12 gap-4 lg:gap-8 items-baseline">
        {/* Name + Greek */}
        <div className="col-span-12 lg:col-span-6">
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
          <span className="font-display text-2xl lg:text-3xl text-navy/40 group-hover:text-sky-deep group-hover:translate-x-2 transition-all duration-500">
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
