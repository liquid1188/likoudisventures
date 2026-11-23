import Link from 'next/link';
import Image from 'next/image';
import type { Division } from '@/content/divisions';
import { projects } from '@/content/work';
import { listings } from '@/content/listings';
import { PageHero, SectionHeading } from '@/components/sections/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const services = [
  {
    name: 'Websites & Digital Design',
    text: 'Websites for individuals, businesses, authors, and organizations. From straightforward professional sites to larger projects involving archives, catalogs, publication systems, and custom functionality.',
  },
  {
    name: 'UX & Product Design',
    text: "Research, interface design, prototyping, and the organization of digital products. Elena's independent design practice provides specialist experience in this area.",
  },
  {
    name: 'Writing & Content',
    text: 'Website copy, editing, ghostwriting, newsletters, publication design, and written materials for businesses and organizations.',
  },
  {
    name: 'Photography & Graphic Design',
    text: 'Photography for websites, properties, products, and editorial use, alongside visual identities, promotional graphics, and print or digital design.',
  },
  {
    name: 'Interiors & Styling',
    text: 'Furniture selection, room layouts, artwork placement, and practical styling for small homes, short-term rentals, and commercial spaces.',
    note: 'This is about interior presentation and decoration, not architectural design, engineering, structural alterations, or licensed construction services.',
    link: { href: '/divisions/ithaca-house', label: 'See the Ithaca House rooms' },
  },
];

/** Current prices from lickitysplitweb.com/pricing, checked November 23, 2026. */
const pricing = [
  { name: 'Starter Site', price: '$300–$500', text: 'A single page or a few basic pages for a professional online presence.' },
  { name: 'Custom Website', price: '$500–$1,200', text: "A more complete website designed around the client's work. Most projects fall in this range." },
  { name: 'Full Build', price: '$1,200–$2,500', text: 'Larger websites with archives, catalogs, event systems, online stores, or other specialized functionality.' },
];

export function StudioLayout({ division }: { division: Division }) {
  const rooms = [listings[0], listings[2]];
  return (
    <>
      <PageHero
        kicker={division.name}
        greek={division.greek}
        title="Design, words, and the spaces between."
        image={{ src: '/work/dcsocial.webp', alt: 'The DC Social Collective website, built by Lickity Split', width: 1280, height: 853, position: 'top' }}
        actions={
          <>
            <Link href="#work" className="btn-olive-on-dark">See Our Work</Link>
            <Link href="/contact?topic=The%20Studio" className="btn-ghost-bone">Discuss a Project</Link>
          </>
        }
      >
        <p>The Studio brings together web design, user-experience design, writing, photography, graphic design, and selected interior projects.</p>
        <p>Some of this work happens through our individual businesses. Other projects benefit from bringing several disciplines together.</p>
      </PageHero>

      <section className="ground-bone section">
        <div className="container-editorial">
          <SectionHeading title="What the Studio does" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {services.map((s) => (
              <div key={s.name} className="border-t border-navy/15 pt-5">
                <h3 className="font-display text-2xl text-navy leading-snug">{s.name}</h3>
                <p className="font-sans text-[16px] text-navy/80 leading-relaxed mt-3">{s.text}</p>
                {s.note && <p className="font-sans text-[14px] text-navy/60 leading-relaxed mt-3">{s.note}</p>}
                {s.link && (
                  <Link href={s.link.href} className="text-link mt-3">{s.link.label} <span aria-hidden>→</span></Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ground-cream section">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <h2 className="font-display text-display-lg text-navy leading-tight mb-6">Lickity Split Web Design</h2>
            <div className="prose-body text-navy/85">
              <p>Lickity Split builds custom websites for authors, artists, small businesses, nonprofits, and other clients whose work deserves a clear and attractive online presentation.</p>
              <p>Projects range from simple starter sites to larger websites with archives, publications, events, and other specialized features.</p>
              <p>The work is handled directly by Andrew Likoudis, including design, development, and assistance with the written content.</p>
            </div>
            <a href="https://lickitysplitweb.com/" target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">Visit Lickity Split</a>
          </div>
          <div className="lg:col-span-6">
            <ul className="divide-y divide-navy/10 border-y border-navy/10">
              {pricing.map((p) => (
                <li key={p.name} className="py-5 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-6 gap-y-1">
                  <h3 className="font-display text-xl text-navy">{p.name}</h3>
                  <p className="font-display text-xl text-olive-deep sm:text-right">{p.price}</p>
                  <p className="sm:col-span-2 font-sans text-[15px] text-navy/75">{p.text}</p>
                </li>
              ))}
            </ul>
            <a href="https://lickitysplitweb.com/pricing" target="_blank" rel="noopener noreferrer" className="text-link mt-5">
              See Full Pricing and Services <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="ground-bone section scroll-mt-20">
        <div className="container-editorial">
          <SectionHeading title="Recent websites" intro={<p>Completed projects from Lickity Split Web Design.</p>} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
            {projects.map((p, i) => (
              <ScrollReveal key={p.slug} delay={(i % 3) * 60}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="media-frame aspect-[3/2] border border-navy/10">
                    <Image src={p.image} alt={`The ${p.name} website`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-top" />
                  </div>
                  <p className="font-sans text-[14px] text-olive-deep mt-4">{p.kind}</p>
                  <h3 className="font-display text-xl text-navy mt-1 group-hover:text-olive-deep transition-colors">{p.name}</h3>
                  <p className="font-sans text-[15px] text-navy/75 mt-2 leading-relaxed">{p.description}</p>
                  <p className="font-sans text-[14px] font-medium text-olive-deep mt-3">Visit the website ↗</p>
                </a>
                <a href={p.caseUrl} target="_blank" rel="noopener noreferrer" className="inline-block font-sans text-[14px] text-navy/60 underline underline-offset-2 mt-1">
                  Read the project notes
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ground-navy section">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-display text-display-lg text-bone leading-tight mb-6">Design by Elena Likoudis</h2>
            <p className="font-sans text-[17px] lg:text-lg text-bone/85 leading-relaxed">
              Elena works in user-experience and product design, including interface research, prototyping, and design systems. Her independent practice handles projects requiring more extensive digital-product work.
            </p>
            <a href="https://www.elenalikoudisdesign.com/" target="_blank" rel="noopener noreferrer" className="btn-olive-on-dark mt-8">Explore Elena&rsquo;s Design Work</a>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="media-frame aspect-[4/5] max-w-xs">
              <Image src="/elena-likoudis.webp" alt="Portrait of Elena Likoudis" fill sizes="320px" className="object-cover" style={{ objectPosition: '50% 30%' }} />
            </div>
          </div>
        </div>
      </section>

      <section id="interiors" className="ground-cream section scroll-mt-20">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-display text-display-lg text-navy leading-tight mb-6">Interiors that work for the people using them</h2>
            <div className="prose-body text-navy/85">
              <p>We also take an interest in how physical spaces are arranged and presented, particularly small hospitality properties and business interiors.</p>
              <p>Our work may include furniture and artwork selection, room styling, photography preparation, and making better use of an existing space.</p>
            </div>
            <Link href="/contact?topic=The%20Studio" className="btn-primary mt-8">Ask About an Interior Project</Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {rooms.map((r) => (
              <figure key={r.id}>
                <div className="media-frame aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.image} alt={r.imageAlt} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <figcaption className="font-sans text-[14px] text-navy/65 mt-2">
                  {r.title}, an Ithaca House listing hosted by {r.host}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
