import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { InquirySection } from '@/components/sections/InquirySection';

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'A directory of work for sale across the house — design packages, original art, Greek pantry goods, and curated objects.',
};

/**
 * /shop — the unified storefront directory.
 *
 * This is intentionally a shell: each department lists what is for sale
 * (or will be), where to buy it, and links to the relevant division page
 * or external studio. Real product cards (with prices, photos, "Add to
 * cart" mechanics) get added per department over time.
 */

interface Department {
  /** Department name */
  name: string;
  /** Greek heading, matching the divisions vocabulary */
  greek: string;
  /** Catalog letter (Roman numeral by department) */
  /** Short prose description of what's in the department */
  description: string;
  /** Status: 'live' if something can be bought now, 'forthcoming' if not */
  status: 'live' | 'forthcoming';
  /** What's available */
  what: string[];
  /** Where to actually buy */
  routes: Array<{ label: string; href: string; external?: boolean }>;
}

const departments: Department[] = [
  {
    name: 'Design Packages',
    greek: 'Στούντιο',
    description:
      'Hand-built websites and brand work from The Studio. Three set packages plus bespoke. Andrew and Elena run all delivery.',
    status: 'forthcoming',
    what: [
      'Letter package — single-page site, hand-coded, in two weeks',
      'Volume package — multi-page site with editorial structure',
      'House package — full brand identity, site, and email infrastructure',
      'Bespoke — by quote',
    ],
    routes: [
      { label: 'Read about The Studio', href: '/divisions/the-studio' },
      { label: 'Begin a project', href: '/contact' },
    ],
  },
  {
    name: 'Original Art',
    greek: 'Καβαλέτο',
    description:
      'Paintings, prints, and commissions from the two studios under The Easel. Caroline sells through Brush & Soul Studio. Elena sells through Elena Likoudis Art.',
    status: 'live',
    what: [
      'Oil and watercolor paintings (Caroline)',
      'Limited prints (Caroline)',
      'Vibrant portraits and original works (Elena)',
      'Custom commissions (both)',
    ],
    routes: [
      { label: 'Brush & Soul Studio', href: 'https://www.brushandsoulstudio.com', external: true },
      { label: 'Elena Likoudis Art', href: 'https://elenalikoudisart.com', external: true },
      { label: 'Read about The Easel', href: '/divisions/the-easel' },
    ],
  },
  {
    name: 'Greek Pantry',
    greek: 'Τράπεζα',
    description:
      'Greek wines from named appellations and traditional spirits, alongside single-estate olive oil, table olives, honey, vinegar, and pantry staples — all carrying our name beside the producer’s. Launching with the line in time; sign up to be told first.',
    status: 'forthcoming',
    what: [
      'Greek wines: Robola, Assyrtiko, Agiorgitiko',
      'Spirits: ouzo, tsipouro, mastiha liqueur, Metaxa',
      'Olive oil — single-estate from Kefalonia and beyond',
      'Olives — table and martini, Kefaloniote tradition',
      'Honey — from named Greek apiaries',
      'Vinegars and other pantry goods',
    ],
    routes: [
      { label: 'Read about The Table', href: '/divisions/the-table' },
      { label: 'Notify me when it launches', href: '/divisions/the-table#notify' },
    ],
  },
  {
    name: 'Curated Objects',
    greek: 'Ἡ Συλλογή',
    description:
      'Hand-painted Byzantine icons, Greek ceramics, olive-wood pieces, textiles, and select vintage items from The Likoudis Collection. By appointment as the catalog comes online.',
    status: 'forthcoming',
    what: [
      'Hand-painted Byzantine icons, commissioned',
      'Greek ceramics — traditional and contemporary',
      'Olive-wood objects',
      'Handwoven textiles',
      'Komboloi and small heritage pieces',
      'Vintage and antique pieces by appointment',
    ],
    routes: [
      { label: 'Read about The Collection', href: '/divisions/the-likoudis-collection' },
      { label: 'Notify me when it opens', href: '/divisions/the-likoudis-collection#notify' },
    ],
  },
  {
    name: 'Bespoke Commissions',
    greek: 'Ἐργαστήριον',
    description:
      'Custom and bespoke pieces from The Workshop — by appointment. Luke and Jake handle scoping, sourcing, and delivery for high-ticket and one-of-one work.',
    status: 'live',
    what: [
      'Custom commissions across categories',
      'Sourcing and procurement for specific pieces',
      'Advisory engagements',
    ],
    routes: [
      { label: 'Read about The Workshop', href: '/divisions/the-workshop' },
      { label: 'Inquire about a commission', href: '/contact' },
    ],
  },
  {
    name: 'Stays at Ithaca House',
    greek: 'Ἰθάκη',
    description:
      'Short-term rentals operated to a hotel standard. Currently Baltimore. Booking is direct; the page below has the calendar and rates.',
    status: 'live',
    what: [
      'Short-term rentals in Baltimore',
      'Selective property additions across the Mid-Atlantic',
      'Small private gatherings and events on request',
    ],
    routes: [
      { label: 'Read about Ithaca House', href: '/divisions/ithaca-house' },
      { label: 'Inquire about a stay', href: '/contact' },
    ],
  },
];

export default function ShopPage() {
  return (
    <>
      <Hero
        eyebrow="The Shop"
        title={
          <>
            Everything for sale,
            <br />
            <em className="italic text-sky">under one roof</em>.
          </>
        }
        lede="A directory of the work the family has put its name on. Some departments link out to the studios that already sell directly. Others are still being stocked."
        sectionNumber="§ Shop"
      />

      {/* Departments grid */}
      <section className="ground-bone py-24 lg:py-32">
        <div className="container-editorial">
          <ul className="divide-y divide-navy/10 max-w-5xl mx-auto">
            {departments.map((dept, i) => (
              <ScrollReveal key={dept.name} as="li" delay={i * 60}>
                <DepartmentRow dept={dept} />
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing inquiry */}
      <InquirySection
        heading={
          <>
            Looking for something <em className="italic text-ochre-deep">not yet on the shelves</em>?
          </>
        }
        text="We take requests. If a piece, a package, or a category isn't here yet, write — we may be working on it, or we may be willing to."
      />
    </>
  );
}

interface DepartmentRowProps {
  dept: Department;
}

function DepartmentRow({ dept }: DepartmentRowProps) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 py-12 lg:py-14">
      {/* Left: olive + status + greek */}
      <div className="lg:col-span-3">
        <div className="mb-5">
          <OliveBranchMark size={32} className="text-olive-deep" />
        </div>
        <div className="font-serif italic text-ochre-deep text-base mb-3">
          {dept.greek}
        </div>
        <span
          className={
            dept.status === 'live'
              ? 'inline-block font-sans text-[9px] uppercase tracking-tag px-2.5 py-1 bg-olive-deep text-bone'
              : 'inline-block font-sans text-[9px] uppercase tracking-tag px-2.5 py-1 bg-ochre text-bone'
          }
        >
          {dept.status === 'live' ? 'Now selling' : 'Forthcoming'}
        </span>
      </div>

      {/* Center: name + description + offerings */}
      <div className="lg:col-span-6">
        <h2 className="font-display text-display-md text-navy leading-tight mb-4">
          {dept.name}
        </h2>
        <p className="font-serif text-lg text-navy/85 leading-relaxed mb-5">
          {dept.description}
        </p>
        <ul className="font-serif text-base text-navy/70 leading-relaxed space-y-1.5 pl-4">
          {dept.what.map((item, i) => (
            <li key={i} className="relative pl-1 before:content-['—'] before:absolute before:-left-4 before:text-ochre-deep">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: routes / actions */}
      <div className="lg:col-span-3 flex flex-col gap-3 lg:items-end">
        {dept.routes.map((route) =>
          route.external ? (
            <a
              key={route.href}
              href={route.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-caps text-olive-deep hover:text-navy transition-colors group/cta"
            >
              <span>{route.label}</span>
              <span aria-hidden className="transition-transform group-hover/cta:translate-x-0.5">
                ↗
              </span>
            </a>
          ) : (
            <Link
              key={route.href}
              href={route.href}
              className="inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-caps text-navy/75 hover:text-olive-deep transition-colors group/cta"
            >
              <span>{route.label}</span>
              <span aria-hidden className="transition-transform group-hover/cta:translate-x-0.5">
                →
              </span>
            </Link>
          )
        )}
      </div>
    </article>
  );
}
