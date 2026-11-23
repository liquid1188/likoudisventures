import Image from 'next/image';
import type { Division } from '@/content/divisions';
import { artworks, type Artwork } from '@/content/work';
import { PageHero } from '@/components/sections/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const artists = [
  {
    key: 'Caroline' as const,
    name: 'Caroline Likoudis',
    studio: 'Brush & Soul Studio',
    text: 'Caroline works in oil and watercolor, producing original paintings and commissioned pieces from her studio in Baltimore. Her artwork also appears in some of the family’s guest accommodations.',
    action: 'Explore Brush & Soul Studio',
    url: 'https://brushandsoulstudio.com/',
    contact: 'https://brushandsoulstudio.com/pages/contact',
    portrait: '/caroline-likoudis.jpg',
    position: '50% 18%',
  },
  {
    key: 'Elena' as const,
    name: 'Elena Likoudis',
    studio: 'Elena Likoudis Art',
    text: 'Elena creates original paintings and portraits, with an interest in color, movement, and expressive compositions. Her artwork includes commissioned pieces and works available through her own studio.',
    action: 'Explore Elena Likoudis Art',
    url: 'https://elenalikoudisart.com/',
    contact: 'https://elenalikoudisart.com/our-services',
    portrait: '/elena-likoudis.webp',
    position: '50% 30%',
  },
];

function Work({ a }: { a: Artwork }) {
  return (
    <figure>
      <a href={a.url} target="_blank" rel="noopener noreferrer" className="group block">
        <div className="media-frame aspect-[4/5] bg-linen">
          <Image src={a.image} alt={`${a.title}, by ${a.artist} Likoudis`} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="object-contain p-5" />
        </div>
        <figcaption className="mt-3">
          <span className="block font-display text-lg text-navy group-hover:text-olive-deep transition-colors">{a.title}</span>
          {a.medium && <span className="block font-sans text-[14px] text-navy/65">{a.medium}</span>}
        </figcaption>
      </a>
    </figure>
  );
}

export function EaselLayout({ division }: { division: Division }) {
  return (
    <>
      <PageHero
        kicker={division.name}
        greek={division.greek}
        title="Two artists. Two different ways of seeing."
        image={{ src: '/art/elena-golden-reverie.webp', alt: 'Golden Reverie, by Elena Likoudis', width: 1052, height: 1600, position: '50% 35%' }}
      >
        <p>The Easel brings together original artwork by Caroline and Elena Likoudis. Each has her own studio and artistic approach, with paintings, prints, and commissions available through her independent practice.</p>
      </PageHero>

      {artists.map((artist, idx) => (
        <section key={artist.key} className={idx === 0 ? 'ground-bone section' : 'ground-cream section'}>
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-10 lg:mb-14">
              <div className="lg:col-span-2 hidden lg:block">
                <div className="media-frame aspect-[3/4]">
                  <Image src={artist.portrait} alt={`Portrait of ${artist.name}`} fill sizes="160px" className="object-cover" style={{ objectPosition: artist.position }} />
                </div>
              </div>
              <div className="lg:col-span-7">
                <h2 className="font-display text-display-lg text-navy leading-tight">{artist.name}</h2>
                <p className="font-sans text-[16px] text-olive-deep mt-1">{artist.studio}</p>
                <p className="font-sans text-[17px] lg:text-lg text-navy/80 leading-relaxed mt-4 max-w-[60ch]">{artist.text}</p>
              </div>
              <div className="lg:col-span-3 lg:text-right">
                <a href={artist.url} target="_blank" rel="noopener noreferrer" className="btn-primary whitespace-nowrap shrink-0">{artist.action}</a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {artworks
                .filter((a) => a.artist === artist.key)
                .map((a, i) => (
                  <ScrollReveal key={a.title} delay={i * 60}>
                    <Work a={a} />
                  </ScrollReveal>
                ))}
            </div>
          </div>
        </section>
      ))}

      <section className="ground-bone section">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="media-frame aspect-[2/3] max-w-sm bg-linen">
              <Image src="/our-lady-collaboration.jpg" alt="Our Lady, a painting by Caroline and Elena Likoudis" fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-contain" />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-display text-display-md text-navy leading-tight">A painting made together</h2>
            <p className="font-sans text-[17px] text-navy/80 leading-relaxed mt-4">
              The two sisters painted this image of Mary together. The original was donated to a school fundraiser, and prints are available through Brush &amp; Soul Studio.
            </p>
            <a href="https://brushandsoulstudio.com/products/virgin-mary-art-print-blue-gold-celestial-madonna" target="_blank" rel="noopener noreferrer" className="text-link mt-5">
              See the print <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="ground-navy section">
        <div className="container-editorial max-w-3xl">
          <h2 className="font-display text-display-lg text-bone leading-tight">Interested in a commission?</h2>
          <p className="font-sans text-[17px] lg:text-lg text-bone/85 leading-relaxed mt-5">
            Both artists consider commissioned work. For details about subjects, sizes, pricing, and availability, contact the relevant studio directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a href={artists[0].contact} target="_blank" rel="noopener noreferrer" className="btn-olive-on-dark">Contact Caroline</a>
            <a href={artists[1].contact} target="_blank" rel="noopener noreferrer" className="btn-ghost-bone">Contact Elena</a>
          </div>
        </div>
      </section>
    </>
  );
}
