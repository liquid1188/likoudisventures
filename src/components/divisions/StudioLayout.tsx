import Link from 'next/link';
import type { Division } from '@/content/divisions';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { StudioBanner } from '@/components/brand/StudioBanner';
import { DivisionLeads } from '@/components/sections/DivisionLeads';
import { InquirySection } from '@/components/sections/InquirySection';
import { site } from '@/content/site';

interface LayoutProps {
  division: Division;
}

/**
 * The Studio — editorial blog/magazine register.
 * Full-bleed banner hero (editor's desk illustration), then two-column
 * marginalia layout, ornamental rules, generous prose.
 */
export function StudioLayout({ division }: LayoutProps) {
  const paragraphs = division.longDescription.split('\n\n');

  return (
    <>
      {/* Full-bleed hero with editor's-desk banner */}
      <section className="relative min-h-[100svh] flex flex-col bg-navy overflow-hidden">
        {/* Banner background */}
        <div className="absolute inset-0">
          <StudioBanner className="w-full h-full object-cover opacity-95" />
        </div>

        {/* Gradient overlay for text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(14, 27, 44, 0.55) 0%, rgba(14, 27, 44, 0.15) 30%, rgba(14, 27, 44, 0.1) 50%, rgba(14, 27, 44, 0.78) 100%)',
          }}
        />

        {/* Top masthead */}
        <div className="container-tight relative z-10 pt-32 lg:pt-36 pb-2">
          <div className="flex justify-between items-start text-bone font-sans text-[10px] uppercase tracking-eyebrow">
            <Link href="/#divisions" className="hover:text-ochre transition-colors">
              ← Likoudis Ventures
            </Link>
            <span>The Studio</span>
            <span className="text-ochre">{division.greek}</span>
          </div>
        </div>

        {/* Bottom-anchored content */}
        <div className="container-editorial relative z-10 mt-auto pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <div className="text-olive-glow opacity-80 mb-6 inline-block">
              <OliveBranchMark size={36} />
            </div>
            <div className="font-serif italic text-ochre text-lg lg:text-xl mb-3">
              {division.greek} · digital craft
            </div>
            <h1 className="font-display text-editorial text-bone leading-[0.95] tracking-tight mb-7">
              {division.name}
            </h1>
            <p className="font-serif text-2xl lg:text-3xl text-bone/90 leading-tight italic font-light max-w-3xl">
              {division.tagline}
            </p>
            <div className="mt-8">
              <span
                className={
                  division.status === 'active'
                    ? 'inline-block font-sans text-[9px] uppercase tracking-tag px-2.5 py-1 bg-olive text-bone'
                    : 'inline-block font-sans text-[9px] uppercase tracking-tag px-2.5 py-1 bg-ochre text-bone'
                }
              >
                {division.status === 'active' ? 'Active' : 'Forthcoming'}
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

      {/* Long-form prose section — editorial register */}
      <section className="ground-bone py-24 lg:py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            {/* Marginalia column */}
            <ScrollReveal as="div" className="col-span-12 lg:col-span-3 lg:pt-4">
              <div className="eyebrow-no-rule text-ochre-deep mb-4">The Work</div>
              <p className="marginalia hidden lg:block">
                Lickity Split Web Design is the productized line of {division.name}. Custom builds, bespoke and well-tuned, hosted under your own ownership.
              </p>
            </ScrollReveal>

            {/* Prose */}
            <ScrollReveal as="div" delay={150} className="col-span-12 lg:col-span-7 lg:col-start-5">
              <div className="prose-editorial">
                {paragraphs.map((para, i) => {
                  if (i === 0) {
                    const firstChar = para.charAt(0);
                    const rest = para.slice(1);
                    return (
                      <p key={i}>
                        <span className="font-display text-7xl lg:text-8xl text-ochre float-left mr-3 mt-1 leading-[0.85] font-light">
                          {firstChar}
                        </span>
                        {rest}
                      </p>
                    );
                  }
                  return <p key={i}>{para}</p>;
                })}
              </div>
            </ScrollReveal>
          </div>

          <div className="ornate-divider text-navy/30 my-20" />

          {/* Offerings — numbered list, magazine feel */}
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <ScrollReveal as="div" className="col-span-12 lg:col-span-3">
              <div className="eyebrow-no-rule text-ochre-deep mb-4">In Particulars</div>
              <h3 className="font-display text-display-md text-navy">
                What we offer.
              </h3>
            </ScrollReveal>
            <div className="col-span-12 lg:col-span-7 lg:col-start-5">
              <ul className="divide-y divide-navy/15">
                {division.offerings.map((offering, i) => (
                  <ScrollReveal key={i} as="li" delay={i * 60} className="py-5 lg:py-6">
                    <span className="font-serif text-lg lg:text-xl leading-relaxed text-navy/90">
                      {offering}
                    </span>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* § III — Lickity Split packages */}
      <section className="ground-cream py-24 lg:py-32 border-t border-navy/10">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-12 lg:mb-16">
            <ScrollReveal as="div" className="col-span-12 lg:col-span-3">
              <div className="eyebrow-no-rule text-ochre-deep mb-4">Lickity Split</div>
              <h3 className="font-display text-display-md text-navy leading-[1.05]">
                Productized<br/>web design.
              </h3>
            </ScrollReveal>
            <ScrollReveal as="div" delay={150} className="col-span-12 lg:col-span-7 lg:col-start-5">
              <p className="font-serif text-lg lg:text-xl leading-relaxed text-navy/85">
                Lickity Split is The Studio&rsquo;s productized line — fast, fixed-price websites for Baltimore small businesses. Hand-coded, no platform fees, sub-second load times, and you own the files outright. A Starter site goes live in 48 hours.
              </p>
              <a
                href="https://liquid1188.github.io/web-services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 font-sans text-[10px] uppercase tracking-eyebrow text-ochre-deep hover:text-ochre transition-colors"
              >
                Visit Lickity Split →
              </a>
            </ScrollReveal>
          </div>

          {/* Package cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {/* Starter */}
            <ScrollReveal as="div" delay={0}>
              <div className="bg-bone border border-navy/15 p-6 lg:p-7 h-full flex flex-col">
                <div className="catalog-num text-xs text-ochre-deep mb-3">Starter</div>
                <div className="font-display text-4xl text-navy mb-1">$499</div>
                <div className="font-serif italic text-sm text-navy/55 mb-5">48-hour turnaround</div>
                <ul className="font-serif text-sm text-navy/85 leading-relaxed space-y-1.5 mb-6 flex-1">
                  <li>One-page responsive site</li>
                  <li>Services, hours, location</li>
                  <li>Google Maps embed</li>
                  <li>Contact form</li>
                  <li>Mobile-first design</li>
                  <li>Basic SEO setup</li>
                </ul>
                <a
                  href="https://liquid1188.github.io/web-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[10px] uppercase tracking-eyebrow text-navy hover:text-ochre transition-colors"
                >
                  Get started →
                </a>
              </div>
            </ScrollReveal>

            {/* Growth — featured */}
            <ScrollReveal as="div" delay={80}>
              <div className="bg-navy text-bone border border-navy p-6 lg:p-7 h-full flex flex-col relative">
                <div className="absolute -top-3 left-6 bg-ochre text-navy font-sans text-[9px] uppercase tracking-tag px-2.5 py-1">
                  Most Popular
                </div>
                <div className="catalog-num text-xs text-ochre mb-3">Growth</div>
                <div className="font-display text-4xl text-bone mb-1">$999</div>
                <div className="font-serif italic text-sm text-bone/60 mb-5">5-day turnaround</div>
                <ul className="font-serif text-sm text-bone/90 leading-relaxed space-y-1.5 mb-6 flex-1">
                  <li>Three pages: Home, Services, Contact</li>
                  <li>Photo or portfolio gallery</li>
                  <li>SEO optimization</li>
                  <li>Google Maps + directions</li>
                  <li>Social media integration</li>
                  <li>Contact form + hours display</li>
                  <li>One revision round included</li>
                </ul>
                <a
                  href="https://liquid1188.github.io/web-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[10px] uppercase tracking-eyebrow text-ochre hover:text-bone transition-colors"
                >
                  Get started →
                </a>
              </div>
            </ScrollReveal>

            {/* Full Build */}
            <ScrollReveal as="div" delay={160}>
              <div className="bg-bone border border-navy/15 p-6 lg:p-7 h-full flex flex-col">
                <div className="catalog-num text-xs text-ochre-deep mb-3">Full Build</div>
                <div className="font-display text-4xl text-navy mb-1">$1,999</div>
                <div className="font-serif italic text-sm text-navy/55 mb-5">2-week turnaround</div>
                <ul className="font-serif text-sm text-navy/85 leading-relaxed space-y-1.5 mb-6 flex-1">
                  <li>Multi-page site (7+ pages)</li>
                  <li>Booking or order integration</li>
                  <li>Full photo or portfolio gallery</li>
                  <li>Bilingual support (EN/ES)</li>
                  <li>Google Analytics setup</li>
                  <li>Advanced SEO optimization</li>
                  <li>Two revision rounds</li>
                  <li>30-day post-launch support</li>
                </ul>
                <a
                  href="https://liquid1188.github.io/web-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[10px] uppercase tracking-eyebrow text-navy hover:text-ochre transition-colors"
                >
                  Get started →
                </a>
              </div>
            </ScrollReveal>

            {/* Retainer */}
            <ScrollReveal as="div" delay={240}>
              <div className="bg-bone border border-navy/15 p-6 lg:p-7 h-full flex flex-col">
                <div className="catalog-num text-xs text-ochre-deep mb-3">Retainer</div>
                <div className="font-display text-4xl text-navy mb-1">$150<span className="text-xl text-navy/55">/mo</span></div>
                <div className="font-serif italic text-sm text-navy/55 mb-5">Month-to-month</div>
                <ul className="font-serif text-sm text-navy/85 leading-relaxed space-y-1.5 mb-6 flex-1">
                  <li>Up to 3 edit sessions/month</li>
                  <li>Priority 24-hour turnaround</li>
                  <li>Site monitoring + uptime checks</li>
                  <li>Text, photo, hours updates</li>
                  <li>Minor layout tweaks included</li>
                  <li>Direct line — no ticketing</li>
                </ul>
                <a
                  href="https://liquid1188.github.io/web-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[10px] uppercase tracking-eyebrow text-navy hover:text-ochre transition-colors"
                >
                  Start retainer →
                </a>
              </div>
            </ScrollReveal>
          </div>

          <p className="font-serif italic text-sm text-navy/65 mt-8 lg:mt-10 text-center max-w-2xl mx-auto leading-relaxed">
            Bespoke and higher-end engagements quoted directly through The Studio. Lickity Split is the fixed-price line for Baltimore small businesses.
          </p>
        </div>
      </section>

      {/* § IV — Recent Work */}
      <section className="ground-bone py-24 lg:py-32 border-t border-navy/10">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-12 lg:mb-16">
            <ScrollReveal as="div" className="col-span-12 lg:col-span-3">
              <div className="eyebrow-no-rule text-ochre-deep mb-4">Recent Work</div>
              <h3 className="font-display text-display-md text-navy leading-[1.05]">
                Three live<br/>sites.
              </h3>
            </ScrollReveal>
            <ScrollReveal as="div" delay={150} className="col-span-12 lg:col-span-7 lg:col-start-5">
              <p className="font-serif text-lg lg:text-xl leading-relaxed text-navy/85">
                A restaurant, a nonprofit, and a personal brand. Real Baltimore clients, real live URLs. No mockups.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Ana Restaurant */}
            <ScrollReveal as="div" delay={0}>
              <a
                href="https://liquid1188.github.io/ana-restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-cream border border-navy/15 p-6 lg:p-7 h-full hover:border-ochre transition-colors group"
              >
                <div className="catalog-num text-xs text-ochre-deep mb-2">Restaurant · Highlandtown</div>
                <h4 className="font-display text-2xl text-navy mb-3 group-hover:text-ochre-deep transition-colors">Ana Restaurant</h4>
                <p className="font-serif text-sm text-navy/85 leading-relaxed mb-5">
                  Dominican cuisine in East Baltimore. Full build with bilingual menu, photo gallery, Google Maps, and online ordering. From invisible to #1 on Google in 48 hours.
                </p>
                <div className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/65 group-hover:text-ochre-deep transition-colors">
                  View live site →
                </div>
              </a>
            </ScrollReveal>

            {/* Likoudis Legacy Foundation */}
            <ScrollReveal as="div" delay={120}>
              <a
                href="https://likoudislegacy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-cream border border-navy/15 p-6 lg:p-7 h-full hover:border-ochre transition-colors group"
              >
                <div className="catalog-num text-xs text-ochre-deep mb-2">Nonprofit · Baltimore</div>
                <h4 className="font-display text-2xl text-navy mb-3 group-hover:text-ochre-deep transition-colors">Likoudis Legacy Foundation</h4>
                <p className="font-serif text-sm text-navy/85 leading-relaxed mb-5">
                  Catholic ecumenical scholarship nonprofit. Full organizational site with programs, publications, conference listings, and donor pathways. 12&times; faster than the previous WordPress build.
                </p>
                <div className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/65 group-hover:text-ochre-deep transition-colors">
                  View live site →
                </div>
              </a>
            </ScrollReveal>

            {/* AndrewLikoudis.com */}
            <ScrollReveal as="div" delay={240}>
              <a
                href="https://andrewlikoudis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-cream border border-navy/15 p-6 lg:p-7 h-full hover:border-ochre transition-colors group"
              >
                <div className="catalog-num text-xs text-ochre-deep mb-2">Personal Brand · Author</div>
                <h4 className="font-display text-2xl text-navy mb-3 group-hover:text-ochre-deep transition-colors">AndrewLikoudis.com</h4>
                <p className="font-serif text-sm text-navy/85 leading-relaxed mb-5">
                  Author and scholar portfolio. Writing, speaking, media, and press — editorial design built to establish credibility and drive speaking and publishing inquiries.
                </p>
                <div className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/65 group-hover:text-ochre-deep transition-colors">
                  View live site →
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <InquirySection
        defaultDivision={division.slug}
        heading={
          <>
            Begin a <em className="italic text-ochre-deep">project</em>
            <br />with The Studio.
          </>
        }
        text={`For ${division.name.toLowerCase()} engagements specifically — site builds, brand work, content, anything in between — write to us directly. ${site.email}.`}
      />
    </>
  );
}
