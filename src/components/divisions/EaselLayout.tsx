import type { Division } from '@/content/divisions';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { InquirySection } from '@/components/sections/InquirySection';

interface LayoutProps {
  division: Division;
}

/**
 * The Easel — gallery wall register.
 *
 * Two artists, two studios, two real online destinations:
 *   - Caroline Likoudis · Brush & Soul Studio (oil & watercolor)
 *   - Elena Likoudis · Elena Likoudis Art (vibrant portraits, prints, custom)
 *
 * Visitors get linked to the actual studios. The Easel page is the hub that
 * introduces them and explains how the two practices sit under one division.
 */
export function EaselLayout({ division }: LayoutProps) {
  const paragraphs = division.longDescription.split('\n\n');

  return (
    <>
      {/* Hero */}
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

      {/* The two studios */}
      <section className="ground-bone py-20 lg:py-28">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="text-center mb-14 lg:mb-20">
              <div className="catalog-num text-sm mb-3">§ I.</div>
              <div className="eyebrow text-ochre-deep mb-3 inline-block">The two studios</div>
              <h2 className="font-display text-display-lg text-navy mt-5 max-w-3xl mx-auto leading-tight">
                Two sisters, two practices,
                <br />
                <em className="italic text-ochre-deep">one shelf in the house</em>.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <ScrollReveal delay={0}>
              <StudioCard
                artist="Caroline Likoudis"
                studioName="Brush & Soul Studio"
                portrait="/caroline-likoudis.jpg"
                description="Oil and watercolor paintings, prints, and commissions. Bold color, soft curves, the colors of a life lived between continents. Caroline paints from her studio in Baltimore."
                medium="Painting · Limited prints · Commissions"
                href="https://www.brushandsoulstudio.com"
                hrefLabel="Visit Brush & Soul Studio"
              />
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <StudioCard
                artist="Elena Likoudis"
                studioName="Elena Likoudis Art"
                portrait="/elena-likoudis.webp"
                description="Vibrant, one-of-a-kind portraits and pieces shaped around energy, color, and expression. Elena also designs the digital practice of the house. She works from Pittsburgh."
                medium="Original art · Custom commissions · Prints"
                href="https://elenalikoudisart.com"
                hrefLabel="Visit Elena Likoudis Art"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* A note from the artists */}
      <section className="ground-cream py-24 lg:py-28">
        <div className="container-prose max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="catalog-num text-sm mb-2">§ II.</div>
              <div className="eyebrow-no-rule text-ochre-deep">A note on the division</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="prose-editorial text-center">
              {paragraphs.map((para, i) => {
                if (i === 0) {
                  return (
                    <p
                      key={i}
                      className="text-2xl lg:text-3xl leading-relaxed text-navy first-letter:font-display first-letter:text-ochre first-letter:text-7xl first-letter:font-light first-letter:leading-none first-letter:float-left first-letter:mr-3 first-letter:mt-1"
                    >
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
            <p className="mt-10 font-serif italic text-base text-navy/65">
              Both artists list current pieces directly on their sites. The form below reaches the family for commissions, group projects, or anything that does not fit a single shop.
            </p>
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
        text="Caroline and Elena answer correspondence directly. For shop inventory, follow the links to their studios; for a commission or a group project, write to us here."
      />
    </>
  );
}

interface StudioCardProps {
  artist: string;
  studioName: string;
  portrait: string;
  description: string;
  medium: string;
  href: string;
  hrefLabel: string;
}

function StudioCard({
  artist,
  studioName,
  portrait,
  description,
  medium,
  href,
  hrefLabel,
}: StudioCardProps) {
  return (
    <article className="group bg-cream overflow-hidden border-t-[3px] border-t-ochre transition-all duration-500 hover:-translate-y-1">
      {/* Portrait */}
      <div className="relative aspect-[4/3] bg-bone overflow-hidden">
        <Image
          src={portrait}
          alt={`Portrait of ${artist}`}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 60%, rgba(14, 27, 44, 0.1) 100%)',
          }}
        />
      </div>

      {/* Caption */}
      <div className="p-7 lg:p-9">
        <div className="font-sans text-[10px] uppercase tracking-eyebrow text-ochre-deep mb-2">
          {artist}
        </div>
        <div className="font-display text-2xl lg:text-3xl text-navy leading-tight mb-5">
          {studioName}
        </div>
        <p className="font-serif text-base lg:text-lg text-navy/85 leading-relaxed mb-5">
          {description}
        </p>
        <div className="font-serif italic text-sm text-navy/55 mb-7 pt-4 border-t border-navy/10">
          {medium}
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-caps text-navy hover:text-ochre-deep transition-colors group/cta"
        >
          <span>{hrefLabel}</span>
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover/cta:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </article>
  );
}
