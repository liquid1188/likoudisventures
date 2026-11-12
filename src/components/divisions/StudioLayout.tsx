import Image from 'next/image';
import Link from 'next/link';
import type { Division } from '@/content/divisions';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { StudioBanner } from '@/components/brand/StudioBanner';
import { DivisionLeads } from '@/components/sections/DivisionLeads';
import { InquirySection } from '@/components/sections/InquirySection';

const STUDIO_PROJECTS = [
  {
    name: 'Frank La Rocca',
    kind: 'Composer | Sacred Music',
    body: 'A website for a composer of sacred and concert music, featuring his works, recordings, and news.',
    href: 'https://www.franklarocca.com',
    image: '/work-frank-la-rocca.webp',
  },
  {
    name: 'Brush & Soul Studio',
    kind: 'Artist | Online Shop',
    body: 'An online shop and studio site for a painter, with original paintings, prints, and commissions.',
    href: 'https://www.brushandsoulstudio.com',
    image: '/work-brush-and-soul.webp',
  },
  {
    name: 'Likoudis Legacy Foundation',
    kind: 'Nonprofit | Baltimore',
    body: 'A website for a Catholic nonprofit, featuring its programs, publications, events, and opportunities for supporters to contribute.',
    href: 'https://likoudislegacy.com',
    image: '/work-likoudis-legacy.webp',
  },
  {
    name: 'AndrewLikoudis.com',
    kind: 'Author | Personal Website',
    body: 'An editorial-style portfolio bringing together publications, speaking engagements, media appearances, and professional information.',
    href: 'https://andrewlikoudis.com',
    image: '/work-andrew-likoudis.webp',
  },
];

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
              'linear-gradient(to bottom, rgba(14, 27, 44, 0.55) 0%, rgba(14, 27, 44, 0.15) 30%, rgba(14, 27, 44, 0.1) 50%, rgba(14, 27, 44, 0.6) 72%, rgba(14, 27, 44, 0.92) 100%)',
          }}
        />

        {/* Top masthead */}
        <div className="container-tight w-full relative z-10 pt-32 lg:pt-36 pb-2">
          <div className="flex justify-between items-start text-bone font-sans text-[10px] uppercase tracking-eyebrow">
            <Link href="/#divisions" className="hover:text-ochre transition-colors">
              ← Likoudis Ventures
            </Link>
            <span className="hidden sm:inline">The Studio</span>
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
              {division.greek} · Web Design &amp; Creative Services
            </div>
            <h1 className="font-display text-editorial text-bone leading-[0.95] tracking-tight mb-7">
              {division.name}
            </h1>
            <p className="font-serif text-2xl lg:text-3xl text-bone/90 leading-tight italic font-light max-w-3xl">
              Websites, digital design, photography, branding, and content for businesses and individuals.
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
              <div className="eyebrow-no-rule text-ochre-deep mb-4">About the Studio</div>
              <p className="marginalia hidden lg:block">
                Led by Andrew Likoudis and Elena Likoudis.
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
              <div className="eyebrow-no-rule text-ochre-deep mb-4">Services</div>
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

      {/* § II.5 — Two practices, side-by-side. Mirrors the Easel page's
          "Original art, from two studios" pattern. Typographic only for now —
          logo files come later, when Andrew has them in hand. */}
      <section className="ground-bone py-16 lg:py-20 border-t border-navy/10">
        <div className="container-editorial">
          <ScrollReveal as="div" className="text-center mb-10 lg:mb-12">
            <h2 className="font-display text-display-md text-navy max-w-3xl mx-auto leading-tight">
              Two Design <em className="italic text-ochre-deep">Practices</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
            <ScrollReveal delay={0}>
              <PracticeCard
                designer="Andrew Likoudis"
                practiceName="Lickity Split Web Design"
                tagline="Andrew Likoudis"
                description="Lickity Split builds affordable, custom websites for small businesses and independent professionals. Projects are priced by scope, with a written estimate, clear deliverables, and turnaround times agreed before work begins. Sites are developed with responsive layouts, search-engine fundamentals, and straightforward navigation. Clients own their completed website files and are not required to maintain a subscription to a proprietary website builder."
                shape="Clear Pricing | Fast Turnaround | Client-Owned Websites"
                href="https://lickitysplitweb.com"
                hrefLabel="Visit Lickity Split"
              />
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <PracticeCard
                designer="Elena Likoudis"
                practiceName="Elena Likoudis Design"
                tagline="Elena Likoudis"
                description="Elena specializes in user-experience design, digital products, and design systems. Her work includes research, interface design, prototyping, and the development of consistent visual and functional systems across digital products. She works with clients whose projects require more extensive planning, research, or customization. Her portfolio and case studies are available through her independent design practice."
                shape="UX Design | Product Design | Design Systems"
                href="https://elenalikoudisdesign.com"
                hrefLabel="Visit Elena Likoudis Design"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* § III — Lickity Split packages (real prices, from lickitysplitweb.com/pricing) */}
      <section className="ground-cream py-24 lg:py-32 border-t border-navy/10">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-12 lg:mb-16">
            <ScrollReveal as="div" className="col-span-12 lg:col-span-3">
              <div className="eyebrow-no-rule text-ochre-deep mb-4">Lickity Split</div>
              <h3 className="font-display text-display-md text-navy leading-[1.05]">
                Website<br/>Packages
              </h3>
            </ScrollReveal>
            <ScrollReveal as="div" delay={150} className="col-span-12 lg:col-span-7 lg:col-start-5">
              <p className="font-serif text-lg lg:text-xl leading-relaxed text-navy/85">
                Most sites land between $500 and $1,000. Starter sites from $200, and larger builds run $1,000 to $2,500.
              </p>
              <a
                href="https://lickitysplitweb.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 font-sans text-[10px] uppercase tracking-eyebrow text-ochre-deep hover:text-ochre transition-colors"
              >
                Visit Lickity Split →
              </a>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {PACKAGES.map((pkg, i) => (
              <ScrollReveal key={pkg.name} as="div" delay={i * 80}>
                <PackageCard {...pkg} />
              </ScrollReveal>
            ))}
          </div>

          <p className="font-serif italic text-sm text-navy/65 mt-8 lg:mt-10 text-center max-w-2xl mx-auto leading-relaxed">
            Every custom or full build starts with a free call and an estimate you agree to. The $500 to get started counts toward your total.
          </p>
        </div>
      </section>

      {/* Endorsements, verbatim from lickitysplitweb.com */}
      <section className="ground-bone py-24 lg:py-32 border-t border-navy/10">
        <div className="container-editorial">
          <ScrollReveal as="div" className="text-center mb-12 lg:mb-16">
            <div className="eyebrow-no-rule text-ochre-deep mb-4">Lickity Split Clients</div>
            <h3 className="font-display text-display-md text-navy leading-tight">
              In Their <em className="italic text-ochre-deep">Words</em>
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {ENDORSEMENTS.map((t, i) => (
              <ScrollReveal key={t.name} as="div" delay={i * 80}>
                <figure className="bg-cream border-t-[3px] border-t-ochre p-6 lg:p-8 h-full flex flex-col">
                  <blockquote className="font-serif text-base lg:text-lg text-navy/85 leading-relaxed italic flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 pt-4 border-t border-navy/10">
                    <div className="font-display text-lg text-navy">{t.name}</div>
                    <div className="font-sans text-[10px] uppercase tracking-eyebrow text-ochre-deep mt-1">{t.role}</div>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* § III.5 — Elena Likoudis Design (the Studio's bespoke / systems line) */}
      <section className="ground-bone py-24 lg:py-32 border-t border-navy/10">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <ScrollReveal as="div" className="col-span-12 lg:col-span-3">
              <div className="eyebrow-no-rule text-ochre-deep mb-4">Elena Likoudis Design</div>
              <h3 className="font-display text-display-md text-navy leading-[1.05]">
                Systems<br/>and UX.
              </h3>
            </ScrollReveal>
            <ScrollReveal as="div" delay={150} className="col-span-12 lg:col-span-7 lg:col-start-5">
              <p className="font-serif text-lg lg:text-xl leading-relaxed text-navy/85">
                Elena keeps her own design studio at elenalikoudisdesign.com. Product design, design systems, and end-to-end user experience. She approaches design through empathy, research, and collaboration, building structure that is intuitive, consistent, and made for real-world use. Her case studies live there.
              </p>
              <p className="font-serif italic text-sm text-navy/65 mt-5 leading-relaxed">
                Elena leads design at The Studio. Lickity Split is Andrew&rsquo;s line for small businesses; Elena&rsquo;s practice is the systems and bespoke side, drawn on for higher-end engagements.
              </p>
              <a
                href="https://www.elenalikoudisdesign.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 font-sans text-[10px] uppercase tracking-eyebrow text-ochre-deep hover:text-ochre transition-colors"
              >
                Visit Elena Likoudis Design →
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* § IV — Recent Work */}
      <section className="ground-bone py-24 lg:py-32 border-t border-navy/10">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-12 lg:mb-16">
            <ScrollReveal as="div" className="col-span-12 lg:col-span-3">
              <div className="eyebrow-no-rule text-ochre-deep mb-4">Recent Work</div>
              <h3 className="font-display text-display-md text-navy leading-[1.05]">
                Selected Website<br/>Projects
              </h3>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {STUDIO_PROJECTS.map((proj, i) => (
              <ScrollReveal as="div" key={proj.name} delay={(i % 2) * 120}>
                <a
                  href={proj.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-cream border border-navy/15 h-full hover:border-ochre transition-colors group overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-navy/10 bg-bone">
                    <Image
                      src={proj.image}
                      alt={`Home page of ${proj.name}`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-6 lg:p-7">
                    <div className="catalog-num text-xs text-ochre-deep mb-2">{proj.kind}</div>
                    <h4 className="font-display text-2xl text-navy mb-3 group-hover:text-ochre-deep transition-colors">{proj.name}</h4>
                    <p className="font-serif text-sm text-navy/85 leading-relaxed mb-5">{proj.body}</p>
                    <div className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/65 group-hover:text-ochre-deep transition-colors">
                      View live site →
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <InquirySection
        defaultDivision={division.slug}
        heading={
          <>
            Start a <em className="italic text-ochre-deep">Project</em>
          </>
        }
        text="Whether you need a straightforward business website, a more extensive digital project, or assistance with your brand and content, we’d be happy to discuss what you’re planning. Tell us about the project, your timeline, and any particular requirements. We’ll help you determine which services are appropriate."
      />
    </>
  );
}

interface PracticeCardProps {
  designer: string;
  practiceName: string;
  tagline: string;
  description: string;
  shape: string;
  href: string;
  hrefLabel: string;
}

function PracticeCard({
  designer,
  practiceName,
  tagline,
  description,
  shape,
  href,
  hrefLabel,
}: PracticeCardProps) {
  return (
    <article className="group bg-cream overflow-hidden border-t-[3px] border-t-ochre transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
      {/* Typographic header — stands in for a logo until logo files are ready */}
      <div className="aspect-[5/2] bg-bone flex items-center justify-center px-6 relative overflow-hidden">
        <div className="text-center">
          <div className="font-display text-2xl lg:text-[1.75rem] text-navy leading-tight tracking-tight">
            {practiceName}
          </div>
          <div className="font-serif italic text-xs lg:text-sm text-navy/55 mt-1.5">
            {tagline}
          </div>
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 60%, rgba(14, 27, 44, 0.06) 100%)',
          }}
        />
      </div>

      {/* Caption */}
      <div className="p-5 lg:p-6 flex flex-col flex-1">
        <div className="font-sans text-[10px] uppercase tracking-eyebrow text-ochre-deep mb-2">
          {designer}
        </div>
        <p className="font-serif text-sm lg:text-base text-navy/85 leading-relaxed mb-4">
          {description}
        </p>
        <div className="font-serif italic text-xs text-navy/55 mb-5 pt-3 border-t border-navy/10">
          {shape}
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-caps text-navy hover:text-ochre-deep transition-colors group/cta mt-auto"
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

interface Package {
  name: string;
  price: string;
  per?: string;
  note: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

const PACKAGES: Package[] = [
  {
    name: 'Starter Site',
    price: '$200–$500',
    note: 'One page, or a few basic pages. Live in about 48 hours.',
    features: [
      'Who you are, what you offer, and how to reach you',
      'Custom-coded, mobile-first responsive design',
      'Contact form and click-to-call',
      'Google Maps, hours, and location',
      'Social links and SEO basics',
      'You own the files outright',
    ],
    cta: 'Get started',
  },
  {
    name: 'Custom Website',
    price: '$500–$1,000',
    note: 'Most sites land here. About a one-week turnaround.',
    features: [
      'Everything in Starter, plus:',
      'Original design built around your work',
      'As many pages as your story needs',
      'Press kit, catalog, gallery, or online store',
      'Migration off Wix, Squarespace, or WordPress',
      'Self-serve editor for your own updates',
      'One revision round',
      '30 days of the Care Plan after launch',
    ],
    featured: true,
    cta: 'Get started',
  },
  {
    name: 'Full Build',
    price: '$1,000–$2,500',
    note: 'Where the price lands depends on what we build. About two weeks.',
    features: [
      'Everything in Custom Website, plus:',
      'E-commerce or donation system',
      'Large archives brought over and made searchable',
      'Pages that update themselves when you publish',
      'Google Analytics and advanced SEO',
      'Two revision rounds',
      '30 days of the Care Plan after launch',
    ],
    cta: 'Get started',
  },
  {
    name: 'Monthly Plans',
    price: '$19.99',
    per: '/mo',
    note: 'Optional. Most clients need neither.',
    features: [
      'Edits Plan, $19.99/mo: one round of edits a month',
      'Care Plan, $49.99/mo: three rounds of edits a month, uptime monitoring, priority turnaround',
      'One-time edits from $25',
      'Cancel anytime',
    ],
    cta: 'Ask about a plan',
  },
];

function PackageCard({ name, price, per, note, features, featured, cta }: Package) {
  return (
    <div
      className={
        featured
          ? 'bg-navy text-bone border border-navy p-6 lg:p-7 h-full flex flex-col relative'
          : 'bg-bone border border-navy/15 p-6 lg:p-7 h-full flex flex-col'
      }
    >
      {featured && (
        <div className="absolute -top-3 left-6 bg-ochre text-navy font-sans text-[9px] uppercase tracking-tag px-2.5 py-1">
          Most Popular
        </div>
      )}
      <div className={`catalog-num text-xs mb-3 ${featured ? 'text-ochre' : 'text-ochre-deep'}`}>{name}</div>
      <div className={`font-display text-3xl lg:text-[2rem] mb-1 whitespace-nowrap ${featured ? 'text-bone' : 'text-navy'}`}>
        {price}
        {per && <span className={`text-xl ${featured ? 'text-bone/60' : 'text-navy/55'}`}>{per}</span>}
      </div>
      <div className={`font-serif italic text-sm mb-5 ${featured ? 'text-bone/60' : 'text-navy/55'}`}>{note}</div>
      <ul className={`font-serif text-sm leading-relaxed space-y-1.5 mb-6 flex-1 ${featured ? 'text-bone/90' : 'text-navy/85'}`}>
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <a
        href="https://lickitysplitweb.com/contact"
        target="_blank"
        rel="noopener noreferrer"
        className={`font-sans text-[10px] uppercase tracking-eyebrow transition-colors ${featured ? 'text-ochre hover:text-bone' : 'text-navy hover:text-ochre'}`}
      >
        {cta} →
      </a>
    </div>
  );
}

const ENDORSEMENTS = [
  {
    name: 'Christopher Byrne',
    role: 'Founder & President, DC Social Collective',
    quote:
      'Andrew is incredibly talented at what he does. He rebuilt the entire DC Social Collective website and has been a huge asset in making it more functional and user-friendly. He’s extremely technically skilled, fast, and reliable, and whenever we need something changed or added, he gets it done. It’s been great having someone we can consistently count on as our website continues to grow. I’d highly recommend Andrew to anyone looking for a skilled and dependable web developer.',
  },
  {
    name: 'Frank La Rocca',
    role: 'Composer',
    quote:
      'My website has been transformed thanks to the excellent design and building services of Andrew Likoudis. Any other Catholic creatives looking to build or refresh their online presence should consider his services. The cost was very reasonable and his customer service was exemplary.',
  },
  {
    name: 'Roxane B. Salonen',
    role: 'Author & Speaker',
    quote:
      'Andrew was a gem to work with! I’d been putting off updating my website, dreading the weeks it might take to get it right. But Andrew accomplished the goal over a single weekend… He asked the right questions and applied my vision well, and yes, lickety split. I’m very pleased with the results and would definitely recommend him to other authors and creatives.',
  },
  {
    name: 'Adán Alejándro Fernández',
    role: 'Organist & Conductor',
    quote:
      'Andrew’s work reminds me of music composition. Every part of the website he built for me feels chosen with purpose. The result is a site where visitors want to stay a while, because the layout feels natural and intuitive. He works quickly and with real dedication, and he was a joy to work with.',
  },
];
