import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { InquirySection } from '@/components/sections/InquirySection';

export const metadata: Metadata = {
  title: 'The Likoudis Collection',
  description:
    'Curated objects, art, and editions from select makers and provenances. Hand-painted Byzantine icons, Greek ceramics, olive-wood pieces, textiles, komboloi, and antique pieces by appointment. Forthcoming.',
};

/**
 * /collection — The Likoudis Collection.
 *
 * Not a division of the house in the proper sense. Replaces the old /shop
 * directory: a single-page, footer-linked surface for the curated-objects
 * line. The page absorbs /shop's department-pattern infrastructure
 * (categories, status badges, "where to buy" routes) and adds sample
 * placeholder items per category so the catalogue reads as substantive
 * even before any item is live.
 *
 * Page composition:
 *   1. Hero
 *   2. Editorial intro (note on the Collection)
 *   3. Categories — each as a department block with sample items + routes
 *   4. Notify form
 */

interface Category {
  /** Display name */
  name: string;
  /** Greek descriptor (matching divisions vocabulary) */
  greek: string;
  /** Status badge */
  status: 'forthcoming' | 'by-appointment';
  /** Short prose description of what's in the category */
  description: string;
  /** Sample items — placeholder cards to give the page substance */
  samples: Array<{ name: string; detail: string; price?: string }>;
  /** Routes for the user to take action */
  routes: Array<{ label: string; href: string; external?: boolean }>;
}

const categories: Category[] = [
  {
    name: 'Hand-painted Byzantine Icons',
    greek: 'Εἰκόνες',
    status: 'forthcoming',
    description:
      'Commissioned from working icon-writers in the Athonite and Cretan traditions. Egg tempera on gessoed wood, gilded with patent leaf. Subjects, dimensions, and prosopography by request.',
    samples: [
      {
        name: 'Christ Pantocrator',
        detail: 'Egg tempera on wood, 24kt gilt halo, Athonite school. By commission.',
        price: 'Inquire',
      },
      {
        name: 'Theotokos Hodegetria',
        detail: '12 × 16 in., commissioned. Lead time approximately 12 weeks.',
        price: 'Inquire',
      },
      {
        name: 'St. Demetrios',
        detail: 'Cretan school. Standing portrait with martial attributes.',
        price: 'Inquire',
      },
    ],
    routes: [
      { label: 'Inquire about a commission', href: '/contact' },
    ],
  },
  {
    name: 'Greek Ceramics',
    greek: 'Κεραμικά',
    status: 'forthcoming',
    description:
      'Traditional and contemporary work from named producers. Tableware, decorative vessels, lighting. Pieces selected for provenance and made-to-keep quality.',
    samples: [
      {
        name: 'Sifnos terra-cotta tagine',
        detail: 'Hand-thrown, glazed interior. From a workshop on Sifnos.',
      },
      {
        name: 'Athenian black-figure amphora study',
        detail: 'Contemporary work in the classical idiom.',
      },
      {
        name: 'Mediterranean blue table set',
        detail: 'Six-piece dinnerware. Hand-painted, dishwasher safe.',
      },
    ],
    routes: [
      { label: 'Notify me when this opens', href: '#notify' },
    ],
  },
  {
    name: 'Olive-wood Objects',
    greek: 'Ξύλο Ἐλιᾶς',
    status: 'forthcoming',
    description:
      'Kitchen and table pieces turned and carved from olive wood. Cutting boards, salad servers, mortar-and-pestle sets, candlesticks, decorative bowls. Each piece keeps the grain it was given.',
    samples: [
      {
        name: 'Long-grain serving board',
        detail: 'Approx. 18 × 9 in. Finished with food-safe oil. Sourced from pruned heritage groves.',
      },
      {
        name: 'Mortar and pestle, large',
        detail: '6 in. diameter. Heavy-bottomed.',
      },
      {
        name: 'Candlesticks, pair',
        detail: 'Turned. Various heights.',
      },
    ],
    routes: [
      { label: 'Notify me when this opens', href: '#notify' },
    ],
  },
  {
    name: 'Handwoven Textiles',
    greek: 'Ὑφαντά',
    status: 'forthcoming',
    description:
      'Runners, throws, and table linens from weaving cooperatives across Greece. Wool, cotton, linen. Designs that hold their character through use.',
    samples: [
      {
        name: 'Wool throw, kilim register',
        detail: 'Heavy-weight, geometric pattern. From a Crete cooperative.',
      },
      {
        name: 'Linen runner, undyed',
        detail: 'Approx. 14 × 60 in. From a weaver in the Peloponnese.',
      },
      {
        name: 'Cotton table linens, set of four',
        detail: 'Napkins. Hand-finished edges.',
      },
    ],
    routes: [
      { label: 'Notify me when this opens', href: '#notify' },
    ],
  },
  {
    name: 'Komboloi & Small Heritage',
    greek: 'Κομπολόι',
    status: 'forthcoming',
    description:
      'Komboloi (worry beads), pocket icons, brass weights, votive plaques, evil-eye charms. Small things that carry weight beyond their size.',
    samples: [
      {
        name: 'Amber komboloi, 19 beads',
        detail: 'Genuine Baltic amber. Silk thread.',
      },
      {
        name: 'Silver pocket icon, hinged',
        detail: 'Approximately 2 × 3 in. Engraved reverse.',
      },
      {
        name: 'Bronze evil-eye plaque',
        detail: 'Wall-hung. Cast from a 19th-century pattern.',
      },
    ],
    routes: [
      { label: 'Notify me when this opens', href: '#notify' },
    ],
  },
  {
    name: 'Limited Editions & Original Art',
    greek: 'Ἐκδόσεις',
    status: 'forthcoming',
    description:
      'Limited print editions and selected original works from artists adjacent to the house. Signed and numbered. Curated, not aggregated.',
    samples: [
      {
        name: 'Signed lithograph, edition of 50',
        detail: 'From a contemporary Greek-American artist.',
      },
      {
        name: 'Original ink and wash, framed',
        detail: 'Single piece. Mediterranean coastal scene.',
      },
    ],
    routes: [
      { label: 'Notify me when this opens', href: '#notify' },
    ],
  },
  {
    name: 'Vintage & Antique',
    greek: 'Παλαιά',
    status: 'by-appointment',
    description:
      'Jewelry, watches, small furniture, decorative objects. Sourced piece by piece. By appointment with the collection, not browsed online.',
    samples: [
      {
        name: 'Mid-century Italian timepiece',
        detail: '1960s. Mechanical movement. Provenance documented.',
        price: 'By appointment',
      },
      {
        name: 'Greek diaspora jewelry, single estate',
        detail: 'Mixed lot. Inquire for current inventory.',
        price: 'By appointment',
      },
      {
        name: 'Walnut side table, late 19th c.',
        detail: 'Continental work. Refinished with care.',
        price: 'By appointment',
      },
    ],
    routes: [
      { label: 'Make an appointment', href: '/contact' },
    ],
  },
];

export default function CollectionPage() {
  return (
    <>
      <Hero
        eyebrow="The Collection"
        title={
          <>
            The Likoudis <em className="italic text-sky">Collection</em>.
          </>
        }
        lede="Curated objects, art, and editions, assembled with a single curatorial intelligence behind it. Hand-painted icons, ceramics, textiles, olive-wood, and small heritage pieces. Most categories forthcoming. Vintage by appointment."
      />

      {/* Editorial intro — note on the Collection */}
      <section className="ground-cream py-24 lg:py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <ScrollReveal as="div" className="lg:col-span-2">
              <div className="text-olive-glow mb-3">
                <OliveBranchMark size={36} />
              </div>
              <div className="eyebrow-no-rule text-ochre-deep">A Note</div>
            </ScrollReveal>

            <ScrollReveal as="div" delay={150} className="lg:col-span-9">
              <div className="prose-editorial">
                <p>
                  The Collection holds work the family has acquired and chosen to offer onward. Hand-painted Byzantine icons. Greek ceramics from named producers. Olive-wood objects. Worry beads. Limited art editions. Vintage and antique pieces by appointment.
                </p>
                <p>
                  This is not a division of the house in the proper sense. It runs adjacent to the five divisions, on its own slower clock. The catalogue is forthcoming. What follows is the shape of what will be there.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Categories — department blocks with sample items */}
      <section className="ground-bone py-20 lg:py-28 border-t border-olive-glow/20">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-14 lg:mb-20 max-w-3xl">
              <div className="eyebrow-no-rule text-sky mb-4">The Catalogue</div>
              <h2 className="font-display text-display-xl text-navy leading-tight">
                Seven categories, <em className="italic text-ochre-deep">forthcoming</em>.
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-16 lg:space-y-24">
            {categories.map((cat, idx) => (
              <ScrollReveal key={cat.name} delay={idx * 60}>
                <article className="border-t-2 border-olive-glow/30 pt-8 lg:pt-10">
                  {/* Category header */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-8 lg:mb-10">
                    <div className="lg:col-span-5">
                      <div className="font-serif italic text-base text-ochre-deep mb-2">
                        {cat.greek}
                      </div>
                      <h3 className="font-display text-3xl lg:text-4xl text-navy leading-tight mb-4">
                        {cat.name}
                      </h3>
                      <span
                        className={`inline-block font-sans text-[10px] uppercase tracking-tag px-3 py-1 ${
                          cat.status === 'forthcoming'
                            ? 'bg-navy text-olive-glow'
                            : 'bg-sky/20 text-navy border border-sky/40'
                        }`}
                      >
                        {cat.status === 'forthcoming' ? 'Forthcoming' : 'By Appointment'}
                      </span>
                    </div>
                    <div className="lg:col-span-7 lg:pt-2">
                      <p className="font-serif text-lg lg:text-xl leading-relaxed text-navy/85">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Sample items grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-8">
                    {cat.samples.map((item) => (
                      <div
                        key={item.name}
                        className="bg-cream/60 border border-navy/10 p-6 hover:border-sky/40 hover:bg-cream transition-colors"
                      >
                        <div className="font-display text-lg text-navy leading-tight mb-2">
                          {item.name}
                        </div>
                        <div className="font-serif text-sm text-navy/65 leading-relaxed mb-3">
                          {item.detail}
                        </div>
                        {item.price && (
                          <div className="font-sans text-[10px] uppercase tracking-tag text-ochre-deep pt-2 border-t border-navy/10">
                            {item.price}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Action routes */}
                  <div className="flex flex-wrap gap-3 lg:gap-4">
                    {cat.routes.map((route) => (
                      <Link
                        key={route.label}
                        href={route.href}
                        className="inline-block font-sans text-[11px] uppercase tracking-caps text-olive-deep hover:text-navy border-b border-olive-glow/40 hover:border-navy pb-1 transition-colors"
                        {...(route.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {route.label} →
                      </Link>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notify form */}
      <div id="notify">
        <InquirySection
          heading={
            <>
              Notify <em className="italic text-ochre-deep">me</em>.
            </>
          }
          text="Subscribers receive the inaugural Likoudis Collection catalogue in advance of any public release. Not a newsletter. Only the catalogue, when it is ready, and only once it is."
        />
      </div>
    </>
  );
}
