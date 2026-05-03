import type { Division } from '@/content/divisions';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { InquirySection } from '@/components/sections/InquirySection';

interface LayoutProps {
  division: Division;
}

/**
 * The Easel — gallery wall register.
 * Cream walls, framed "artwork" placeholders in a salon-style hang,
 * artist names beneath. Reads like a small gallery catalog.
 */
export function EaselLayout({ division }: LayoutProps) {
  const paragraphs = division.longDescription.split('\n\n');

  return (
    <>
      {/* Hero — cream gallery feel */}
      <section className="ground-cream relative pt-32 lg:pt-40 pb-20 lg:pb-24">
        <div className="container-editorial relative z-10">
          <div className="flex items-center justify-between mb-12 text-navy/55 font-sans text-[10px] uppercase tracking-eyebrow border-b border-navy/15 pb-5">
            <Link href="/#divisions" className="hover:text-ochre-deep transition-colors">
              ← Likoudis Ventures
            </Link>
            <span>The Easel · No. {division.number}</span>
            <span className="text-ochre-deep italic font-serif">{division.greek}</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="text-ochre opacity-80 mb-7 flex justify-center">
              <OliveBranchMark size={42} />
            </div>
            <div className="font-serif italic text-ochre-deep text-lg mb-5">
              Καβαλέτο · the easel
            </div>
            <h1 className="font-display text-editorial text-navy leading-[0.95] tracking-tight mb-8">
              The <em className="italic text-ochre-deep">Easel</em>
            </h1>
            <p className="font-serif text-xl lg:text-2xl text-navy/80 italic font-light leading-relaxed max-w-xl mx-auto">
              {division.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery wall — salon-style hang */}
      <section className="ground-bone py-20 lg:py-28">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="catalog-num text-sm mb-3">§ I.</div>
              <div className="eyebrow text-ochre-deep mb-3 inline-block">From the studio</div>
            </div>
          </ScrollReveal>

          {/* Salon-style hang */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <ArtworkFrame
              colSpan="col-span-6 lg:col-span-4"
              aspect="aspect-[3/4]"
              title="Untitled, No. I"
              artist="Caroline Likoudis"
              year="2026"
              delay={0}
            />
            <ArtworkFrame
              colSpan="col-span-6 lg:col-span-3 lg:mt-12"
              aspect="aspect-square"
              title="Study"
              artist="Elena Likoudis"
              year="2026"
              delay={120}
            />
            <ArtworkFrame
              colSpan="col-span-12 lg:col-span-5"
              aspect="aspect-[4/3]"
              title="Conversation"
              artist="Caroline Likoudis"
              year="2026"
              delay={240}
            />
            <ArtworkFrame
              colSpan="col-span-6 lg:col-span-4 lg:col-start-2"
              aspect="aspect-[3/4]"
              title="Sister"
              artist="Elena Likoudis"
              year="2026"
              delay={360}
            />
            <ArtworkFrame
              colSpan="col-span-6 lg:col-span-4"
              aspect="aspect-square"
              title="Untitled, No. II"
              artist="Caroline Likoudis"
              year="2026"
              delay={480}
            />
          </div>
        </div>
      </section>

      {/* Artists' note */}
      <section className="ground-cream py-24 lg:py-28">
        <div className="container-prose max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="catalog-num text-sm mb-2">§ II.</div>
              <div className="eyebrow-no-rule text-ochre-deep">A note from the artists</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="prose-editorial text-center">
              {paragraphs.map((para, i) => {
                if (i === 0) {
                  return (
                    <p key={i} className="text-2xl lg:text-3xl leading-relaxed text-navy first-letter:font-display first-letter:text-ochre first-letter:text-7xl first-letter:font-light first-letter:leading-none first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                      {para}
                    </p>
                  );
                }
                return <p key={i}>{para}</p>;
              })}
            </div>

            <div className="ornate-divider text-navy/30 my-14" />

            <p className="font-serif italic text-lg text-ochre-deep text-center">
              — Caroline & Elena Likoudis
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Offerings */}
      <section className="ground-bone py-20 lg:py-24">
        <div className="container-prose max-w-xl text-center">
          <ScrollReveal>
            <div className="catalog-num text-sm mb-2">§ III.</div>
            <div className="eyebrow-no-rule text-ochre-deep mb-3">Available work</div>
            <h3 className="font-display text-display-md text-navy mb-10">
              How to <em className="italic text-ochre-deep">acquire</em>.
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

      <InquirySection
        defaultDivision={division.slug}
        heading={
          <>
            Inquire about <em className="italic text-ochre-deep">a piece</em>.
          </>
        }
        text="Caroline and Elena answer correspondence directly. Tell us briefly what catches your eye — a particular work, or a commission you have in mind."
      />
    </>
  );
}

interface ArtworkFrameProps {
  colSpan: string;
  aspect: string;
  title: string;
  artist: string;
  year: string;
  delay: number;
}

function ArtworkFrame({ colSpan, aspect, title, artist, year, delay }: ArtworkFrameProps) {
  return (
    <ScrollReveal delay={delay} variant="blur" className={colSpan}>
      <figure className="group">
        {/* Frame */}
        <div className={`${aspect} relative bg-cream border border-navy/15 transition-all duration-500 group-hover:border-ochre overflow-hidden`}>
          {/* Inner mat */}
          <div className="absolute inset-3 bg-bone/60 flex items-center justify-center">
            {/* Sketch placeholder — minimal pencil lines */}
            <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 opacity-30 text-navy">
              <path d="M 20 70 Q 40 30, 60 50 Q 70 60, 80 40" stroke="currentColor" strokeWidth="0.6" fill="none" strokeLinecap="round" />
              <circle cx="35" cy="40" r="1" fill="currentColor" />
              <circle cx="65" cy="55" r="1" fill="currentColor" />
              <path d="M 25 80 L 75 80" stroke="currentColor" strokeWidth="0.4" />
            </svg>
          </div>
          {/* Hover veil */}
          <div className="absolute inset-0 bg-ochre/0 group-hover:bg-ochre/5 transition-colors" />
        </div>
        {/* Caption */}
        <figcaption className="mt-4 text-center">
          <div className="font-display italic text-base text-navy">{title}</div>
          <div className="font-sans text-[10px] uppercase tracking-eyebrow text-ochre-deep mt-1.5">
            {artist} · {year}
          </div>
        </figcaption>
      </figure>
    </ScrollReveal>
  );
}
