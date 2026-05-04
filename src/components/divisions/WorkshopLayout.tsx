import type { Division } from '@/content/divisions';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { WorkshopBanner } from '@/components/brand/WorkshopBanner';
import { DivisionLeads } from '@/components/sections/DivisionLeads';
import { InquirySection } from '@/components/sections/InquirySection';
import Link from 'next/link';

interface LayoutProps {
  division: Division;
}

/**
 * The Workshop — letterpress register with a full-bleed shopfront banner.
 * Centered classical typography, ornamental rules, the feel of a 19th-century
 * trade announcement.
 */
export function WorkshopLayout({ division }: LayoutProps) {
  const paragraphs = division.longDescription.split('\n\n');

  return (
    <>
      {/* Full-bleed hero with shopfront banner */}
      <section className="relative min-h-[100svh] flex flex-col bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <WorkshopBanner className="w-full h-full object-cover opacity-95" />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(14, 27, 44, 0.55) 0%, rgba(14, 27, 44, 0.18) 30%, rgba(14, 27, 44, 0.1) 50%, rgba(14, 27, 44, 0.78) 100%)',
          }}
        />

        {/* Top masthead */}
        <div className="container-tight relative z-10 pt-32 lg:pt-36 pb-2">
          <div className="flex justify-between items-start text-bone font-sans text-[10px] uppercase tracking-eyebrow">
            <Link href="/#divisions" className="hover:text-ochre transition-colors">
              ← Likoudis Ventures
            </Link>
            <span>By Appointment</span>
            <span className="text-ochre">{division.greek}</span>
          </div>
        </div>

        {/* Bottom-anchored content — centered in classical register */}
        <div className="container-editorial relative z-10 mt-auto pb-20 lg:pb-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-olive-glow opacity-80 mb-6 flex justify-center">
              <OliveBranchMark size={42} />
            </div>
            <div className="ornate-divider text-bone/40 my-3" />
            <h1 className="font-display text-editorial text-bone leading-[0.95] tracking-tight mb-6 lg:mb-7">
              {division.name}
            </h1>
            <p className="font-serif text-xl lg:text-2xl text-bone/90 leading-relaxed italic font-light mb-8">
              {division.tagline}
            </p>
            <div className="ornate-divider text-bone/40 my-3" />
            <div className="font-sans text-[10px] uppercase tracking-eyebrow text-bone/70 mt-5">
              Established 2026 · Baltimore
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

      {/* Long-form prose — single centered column */}
      <section className="ground-cream py-24 lg:py-32">
        <div className="container-prose max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="eyebrow-no-rule text-ochre-deep">On the Work</div>
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
                return <p key={i} className="text-xl lg:text-2xl">{para}</p>;
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="ornate-divider text-navy/30 my-20" />
          </ScrollReveal>

          {/* Offerings — list with traditional bullets (·) */}
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="eyebrow-no-rule text-ochre-deep mb-3">Among the work</div>
              <h3 className="font-display text-display-md text-navy">
                What may be commissioned.
              </h3>
            </div>
          </ScrollReveal>

          <ul className="space-y-5 max-w-xl mx-auto">
            {division.offerings.map((offering, i) => (
              <ScrollReveal key={i} as="li" delay={i * 60}>
                <div className="text-center font-serif text-lg lg:text-xl leading-relaxed text-navy/90">
                  {offering}
                </div>
                {i < division.offerings.length - 1 && (
                  <div className="text-center text-ochre/40 my-4 text-base">·</div>
                )}
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal>
            <div className="ornate-divider text-navy/30 my-20" />
          </ScrollReveal>

          {/* Closing flourish */}
          <ScrollReveal>
            <div className="text-center">
              <p className="font-serif italic text-xl text-ochre-deep">
                Each project begins with a conversation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Engagement Types — three categories of work, sky ground for separation */}
      <section className="ground-sky py-24 lg:py-32 border-t border-navy/10">
        <div className="container-editorial">
          <ScrollReveal as="div" className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
            <div className="catalog-num text-sm mb-3">Engagement Types</div>
            <div className="eyebrow-no-rule text-ochre-deep mb-5 inline-block">Three Lines of Work</div>
            <h3 className="font-display text-display-xl text-navy leading-tight">
              The kinds of <em className="italic text-ochre-deep">work</em> we take on.
            </h3>
            <p className="font-serif italic text-lg lg:text-xl text-navy/65 mt-6 leading-relaxed">
              The Workshop accepts engagements in three formats. Each begins the same way. The shape of the work is set in conversation.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            <ScrollReveal as="div" delay={0}>
              <div className="bg-bone p-8 lg:p-10 h-full border-t-[3px] border-t-ochre">
                <div className="catalog-num text-xs text-ochre-deep mb-4">i.</div>
                <h4 className="font-display text-2xl lg:text-3xl text-navy leading-tight mb-5">
                  Strategic Advisory
                </h4>
                <p className="font-serif text-base lg:text-lg text-navy/75 leading-relaxed mb-5">
                  For founders, small-business owners, and nonprofit leaders working through positioning, naming, capital strategy, fundraising design, governance questions, or growth decisions. By the hour or by the project. The advisor brings institutional experience: Johns Hopkins University fellow in economic development; Goldman Sachs 10,000 Small Businesses fellow in marketing development; alum of McKinsey &amp; Company&rsquo;s Forward Program; supported a $5M capital campaign at the Cathedral of Mary Our Queen.
                </p>
                <div className="pt-4 border-t border-navy/10">
                  <div className="font-display text-base text-navy">Andrew Likoudis</div>
                  <div className="font-sans text-[10px] uppercase tracking-caps text-ochre-deep/70 mt-1">Strategic Advisor</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal as="div" delay={100}>
              <div className="bg-bone p-8 lg:p-10 h-full border-t-[3px] border-t-ochre">
                <div className="catalog-num text-xs text-ochre-deep mb-4">ii.</div>
                <h4 className="font-display text-2xl lg:text-3xl text-navy leading-tight mb-5">
                  Sourcing &amp; Brokerage
                </h4>
                <p className="font-serif text-base lg:text-lg text-navy/75 leading-relaxed mb-5">
                  For clients looking for specific objects. A particular bottle. A hard-to-find book. An antique piece. A gift built around a brief. We make the calls, we vet the seller, we handle the transaction. The work is finished when the object is in the right hands. Discreet, by appointment, fee scoped to the brief.
                </p>
                <div className="pt-4 border-t border-navy/10">
                  <div className="font-display text-base text-navy">Luke Likoudis</div>
                  <div className="font-sans text-[10px] uppercase tracking-caps text-ochre-deep/70 mt-1">Sourcing Director</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal as="div" delay={200}>
              <div className="bg-bone p-8 lg:p-10 h-full border-t-[3px] border-t-ochre">
                <div className="catalog-num text-xs text-ochre-deep mb-4">iii.</div>
                <h4 className="font-display text-2xl lg:text-3xl text-navy leading-tight mb-5">
                  Bespoke Curation
                </h4>
                <p className="font-serif text-base lg:text-lg text-navy/75 leading-relaxed mb-5">
                  For buyers building a private library, an art collection, a wine cellar, or a curated gift package. Engagements begin with the budget, the brief, and the room or shelf the work will land in. We propose, the client selects, we deliver. Provenance documented. Price agreed up front.
                </p>
                <div className="pt-4 border-t border-navy/10">
                  <div className="font-display text-base text-navy">Jake Likoudis</div>
                  <div className="font-sans text-[10px] uppercase tracking-caps text-ochre-deep/70 mt-1">Operational Director</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How We Work — process flow on cream */}
      <section className="ground-cream py-24 lg:py-32 border-t border-navy/10">
        <div className="container-editorial max-w-4xl">
          <ScrollReveal as="div" className="text-center mb-16 lg:mb-20">
            <div className="catalog-num text-sm mb-3">How We Work</div>
            <div className="eyebrow-no-rule text-ochre-deep mb-5 inline-block">By the conversation, not by the form</div>
            <h3 className="font-display text-display-xl text-navy leading-tight">
              From first call <em className="italic text-ochre-deep">to delivery</em>.
            </h3>
          </ScrollReveal>

          <div className="space-y-10 lg:space-y-12">
            <ScrollReveal as="div" delay={0}>
              <div className="grid grid-cols-12 gap-6 lg:gap-8">
                <div className="col-span-12 lg:col-span-2">
                  <div className="catalog-num text-2xl lg:text-3xl text-ochre-deep">i.</div>
                  <div className="font-sans text-[10px] uppercase tracking-tag text-navy/55 mt-1">First Conversation</div>
                </div>
                <div className="col-span-12 lg:col-span-10">
                  <p className="font-serif text-lg lg:text-xl leading-relaxed text-navy/85">
                    A phone call or a written exchange. We learn what the project is, what the constraint is, what the deadline is. No NDAs at this stage. The first call is on us.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal as="div" delay={80}>
              <div className="grid grid-cols-12 gap-6 lg:gap-8">
                <div className="col-span-12 lg:col-span-2">
                  <div className="catalog-num text-2xl lg:text-3xl text-ochre-deep">ii.</div>
                  <div className="font-sans text-[10px] uppercase tracking-tag text-navy/55 mt-1">Scoping</div>
                </div>
                <div className="col-span-12 lg:col-span-10">
                  <p className="font-serif text-lg lg:text-xl leading-relaxed text-navy/85">
                    We write back with a written scope. What we propose to do. What we propose not to do. The format of the deliverable. The lead Workshop sibling on the engagement.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal as="div" delay={160}>
              <div className="grid grid-cols-12 gap-6 lg:gap-8">
                <div className="col-span-12 lg:col-span-2">
                  <div className="catalog-num text-2xl lg:text-3xl text-ochre-deep">iii.</div>
                  <div className="font-sans text-[10px] uppercase tracking-tag text-navy/55 mt-1">Proposal</div>
                </div>
                <div className="col-span-12 lg:col-span-10">
                  <p className="font-serif text-lg lg:text-xl leading-relaxed text-navy/85">
                    A fixed fee where the work permits, an hourly rate where it does not. Stated up front. Half on kickoff, half on delivery. Rates and terms in writing before any work begins.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal as="div" delay={240}>
              <div className="grid grid-cols-12 gap-6 lg:gap-8">
                <div className="col-span-12 lg:col-span-2">
                  <div className="catalog-num text-2xl lg:text-3xl text-ochre-deep">iv.</div>
                  <div className="font-sans text-[10px] uppercase tracking-tag text-navy/55 mt-1">Kickoff</div>
                </div>
                <div className="col-span-12 lg:col-span-10">
                  <p className="font-serif text-lg lg:text-xl leading-relaxed text-navy/85">
                    Half the fee, signed agreement, calendar set. Weekly or biweekly check-ins, depending on the brief. The client is in the loop throughout.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal as="div" delay={320}>
              <div className="grid grid-cols-12 gap-6 lg:gap-8">
                <div className="col-span-12 lg:col-span-2">
                  <div className="catalog-num text-2xl lg:text-3xl text-ochre-deep">v.</div>
                  <div className="font-sans text-[10px] uppercase tracking-tag text-navy/55 mt-1">Delivery</div>
                </div>
                <div className="col-span-12 lg:col-span-10">
                  <p className="font-serif text-lg lg:text-xl leading-relaxed text-navy/85">
                    The deliverable, the second invoice, a brief debrief. If revisions were scoped, they are honored. If something fell short, we say so and make it right.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <p className="font-serif italic text-base text-navy/55 mt-16 text-center max-w-2xl mx-auto leading-relaxed">
              The Workshop takes on a small number of clients at any given time. We would rather decline than disappoint.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial — Rick Little, Julep Consulting (advisory work) */}
      <section className="ground-bone py-20 lg:py-28 border-t border-navy/10">
        <div className="container-editorial max-w-3xl">
          <ScrollReveal as="div" className="text-center">
            <div className="text-ochre mb-6 flex justify-center">
              <OliveBranchMark size={36} />
            </div>
            <div className="eyebrow-no-rule text-ochre-deep mb-8 inline-block">From a Past Supervisor</div>
            <blockquote className="font-display text-2xl lg:text-3xl text-navy leading-relaxed italic font-light">
              &ldquo;Andrew was a thoughtful and dependable collaborator. He took initiative, engaged seriously with the work, and consistently delivered quality research and analysis.&rdquo;
            </blockquote>
            <div className="mt-10 pt-6 border-t border-navy/15 max-w-md mx-auto">
              <div className="font-display text-lg text-navy">Rick Little</div>
              <div className="font-serif italic text-sm text-navy/65 mt-1">Principal, Julep Consulting</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <InquirySection
        defaultDivision={division.slug}
        heading={
          <>
            Open a <em className="italic text-ochre-deep">conversation</em>.
          </>
        }
        text="The Workshop accepts a small number of clients at any given time. Tell us briefly what you have in mind. We will respond personally."
      />
    </>
  );
}
