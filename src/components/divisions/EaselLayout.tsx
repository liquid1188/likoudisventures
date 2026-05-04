import type { Division } from '@/content/divisions';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { EaselBanner } from '@/components/brand/EaselBanner';
import { DivisionLeads } from '@/components/sections/DivisionLeads';
import { InquirySection } from '@/components/sections/InquirySection';

interface LayoutProps {
  division: Division;
}

/**
 * The Easel — gallery wall register.
 *
 * Full-bleed gallery banner hero, then two studio cards leading visitors to
 * Caroline (Brush & Soul Studio) and Elena (Elena Likoudis Art).
 */
export function EaselLayout({ division }: LayoutProps) {
  const paragraphs = division.longDescription.split('\n\n');

  return (
    <>
      {/* Full-bleed hero with gallery banner */}
      <section className="relative min-h-[100svh] flex flex-col bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <EaselBanner className="w-full h-full object-cover opacity-95" />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(14, 27, 44, 0.5) 0%, rgba(14, 27, 44, 0.12) 30%, rgba(14, 27, 44, 0.08) 50%, rgba(14, 27, 44, 0.78) 100%)',
          }}
        />

        {/* Top masthead */}
        <div className="container-tight relative z-10 pt-32 lg:pt-36 pb-2">
          <div className="flex justify-between items-start text-bone font-sans text-[10px] uppercase tracking-eyebrow">
            <Link href="/#divisions" className="hover:text-ochre transition-colors">
              ← Likoudis Ventures
            </Link>
            <span>The Easel</span>
            <span className="text-ochre">{division.greek}</span>
          </div>
        </div>

        {/* Bottom-anchored content */}
        <div className="container-editorial relative z-10 mt-auto pb-20 lg:pb-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-olive-glow opacity-80 mb-6 flex justify-center">
              <OliveBranchMark size={42} />
            </div>
            <div className="font-serif italic text-ochre text-lg lg:text-xl mb-4">
              Καβαλέτο · the easel
            </div>
            <h1 className="font-display text-editorial text-bone leading-[0.95] tracking-tight mb-7">
              The <em className="italic text-ochre">Easel</em>
            </h1>
            <p className="font-serif text-xl lg:text-2xl text-bone/90 italic font-light leading-relaxed max-w-xl mx-auto">
              {division.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Lead row */}
      <section className="ground-bone py-7 lg:py-9 border-b border-navy/10">
        <div className="container-editorial">
          <DivisionLeads leads={division.leads} theme="light" />
        </div>
      </section>

      {/* The two studios */}
      <section className="ground-bone py-20 lg:py-28">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="text-center mb-14 lg:mb-20">
              <h2 className="font-display text-display-lg text-navy max-w-3xl mx-auto leading-tight">
                Original art,
                <br />
                <em className="italic text-ochre-deep">from two studios</em>.
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

      {/* Featured work — showcase a few pieces from each artist with placeholder
          scaffolding ready to receive real artwork. When real images are
          provided, swap the placeholder div for an Image component. */}
      <section className="ground-cream py-20 lg:py-28 border-t border-olive-glow/20">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="text-center mb-14 lg:mb-16 max-w-2xl mx-auto">
              <h3 className="font-display text-display-lg text-navy leading-tight">
                A few <em className="italic text-ochre-deep">pieces</em>.
              </h3>
              <p className="font-serif italic text-lg lg:text-xl text-navy/70 mt-5 leading-relaxed">
                Selected work. For full inventory, visit each studio directly.
              </p>
            </div>
          </ScrollReveal>

          {/* Collaborative work — Our Lady, by Caroline and Elena together. Featured first
              as the page anchor — both artists' hands, the most finished work on the page. */}
          <div className="mb-20 lg:mb-24">
            <ScrollReveal>
              <div className="text-center mb-8">
                <div className="catalog-num text-sm mb-2">A Collaboration</div>
                <div className="eyebrow-no-rule text-ochre-deep mb-4 inline-block">Caroline &amp; Elena, together</div>
                <h4 className="font-display text-display-md text-navy leading-tight">
                  Our Lady.
                </h4>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} variant="blur">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* The painting itself — large feature image */}
                <div className="lg:col-span-7 lg:col-start-1">
                  <div className="relative bg-navy/5 border border-navy/10 overflow-hidden">
                    <Image
                      src="/our-lady-collaboration.jpg"
                      alt="Our Lady — a collaborative painting by Caroline and Elena Likoudis. Mary in a Guadalupean register, painted on a mosaic-style ground with a rayed gold halo."
                      width={1126}
                      height={1687}
                      className="w-full h-auto"
                      priority={false}
                    />
                  </div>
                </div>

                {/* Caption block — runs alongside the painting on desktop, below on mobile */}
                <div className="lg:col-span-5 lg:pt-6">
                  <div className="prose-editorial">
                    <p className="font-serif text-lg lg:text-xl leading-relaxed text-navy/85">
                      A Marian image in a Guadalupean register. Painted by Caroline and Elena together. Mosaic ground, gold-leaf rays, Mary in oil.
                    </p>
                    <p className="font-serif text-base lg:text-lg leading-relaxed text-navy/70 mt-5">
                      The original was donated to a school fundraiser raffle. Prints will be available.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-navy/15">
                    <div className="font-sans text-[10px] uppercase tracking-tag text-ochre-deep/80">
                      Original · Donated
                    </div>
                    <div className="font-serif italic text-sm text-navy/55 mt-2">
                      Prints forthcoming.
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Caroline's row */}
          <div className="mb-16 lg:mb-20">
            <ScrollReveal>
              <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-navy/15">
                <div>
                  <div className="font-display text-2xl lg:text-3xl text-navy leading-tight">
                    Caroline Likoudis
                  </div>
                  <div className="font-serif italic text-sm text-ochre-deep mt-1">
                    Brush &amp; Soul Studio
                  </div>
                </div>
                <a
                  href="https://www.brushandsoulstudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[11px] uppercase tracking-caps text-olive-deep hover:text-navy border-b border-olive-glow/40 hover:border-navy pb-1 transition-colors"
                >
                  Visit Brush &amp; Soul →
                </a>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7">
              <ScrollReveal delay={0}>
                <FeaturedWorkPlaceholder caption="Featured oil painting" />
              </ScrollReveal>
              <ScrollReveal delay={120}>
                <FeaturedWorkPlaceholder caption="Featured watercolor" />
              </ScrollReveal>
            </div>
          </div>

          {/* Elena's row */}
          <div>
            <ScrollReveal>
              <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-navy/15">
                <div>
                  <div className="font-display text-2xl lg:text-3xl text-navy leading-tight">
                    Elena Likoudis
                  </div>
                  <div className="font-serif italic text-sm text-ochre-deep mt-1">
                    Elena Likoudis Art
                  </div>
                </div>
                <a
                  href="https://elenalikoudisart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[11px] uppercase tracking-caps text-olive-deep hover:text-navy border-b border-olive-glow/40 hover:border-navy pb-1 transition-colors"
                >
                  Visit Elena Likoudis Art →
                </a>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7">
              <ScrollReveal delay={0}>
                <FeaturedWorkPlaceholder caption="Featured portrait" />
              </ScrollReveal>
              <ScrollReveal delay={120}>
                <FeaturedWorkPlaceholder caption="Featured original" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* A note from the artists */}
      <section className="ground-cream py-24 lg:py-28">
        <div className="container-prose max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-12">
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

/**
 * Placeholder slot for a featured artwork. Renders a 3:4 aspect-ratio frame with
 * a subtle texture, a small "forthcoming" mark, and a caption beneath. When real
 * artwork is provided, swap the inner div for an Image component pointed at the
 * artwork file in /public, and remove the placeholder marks.
 */
function FeaturedWorkPlaceholder({ caption }: { caption: string }) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] bg-sky-light border border-navy/10 overflow-hidden">
        {/* Inner double-rule frame, gallery register */}
        <div className="absolute inset-4 border border-ochre/30" />
        <div className="absolute inset-6 border border-ochre/10" />

        {/* Center mark — small olive */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            width="56"
            height="28"
            viewBox="0 0 70 35"
            fill="none"
            className="text-ochre/55"
            aria-hidden
          >
            <path
              d="M 5 22 Q 35 8, 65 22"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="20" cy="20" rx="2.4" ry="3.2" fill="currentColor" />
            <ellipse cx="35" cy="14" rx="2.4" ry="3.2" fill="currentColor" />
            <ellipse cx="50" cy="20" rx="2.4" ry="3.2" fill="currentColor" />
          </svg>
        </div>

        {/* Forthcoming label */}
        <div className="absolute bottom-5 left-0 right-0 text-center">
          <span className="font-sans text-[10px] uppercase tracking-tag text-ochre-deep/70 bg-sky-light px-3 py-1">
            Forthcoming
          </span>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-3 font-serif italic text-sm text-navy/65 text-center">
        {caption}
      </div>
    </div>
  );
}
