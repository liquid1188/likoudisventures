import Link from 'next/link';
import Image from 'next/image';
import { clsx } from 'clsx';
import { divisions, cardStatusLabel, type Division } from '@/content/divisions';
import { listings } from '@/content/listings';
import { projects, artworks } from '@/content/work';
import { about } from '@/content/about';
import { IonianMap } from '@/components/brand/IonianMap';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/sections/PageHero';

const ventureImage: Record<string, { src: string; alt: string; remote?: boolean; position?: string }> = {
  'ithaca-house': { src: listings[0].image, alt: listings[0].imageAlt, remote: true },
  'the-studio': { src: '/work/larocca.webp', alt: 'The Frank La Rocca website, built by Lickity Split', position: 'top' },
  'the-easel': { src: '/art/caroline-city-of-moonlight.webp', alt: 'City of Moonlight, by Caroline Likoudis', position: '50% 30%' },
};

/** A young olive with the venture's Greek name: the image for developing ventures. */
function DevelopingArt({ d }: { d: Division }) {
  return (
    <div className="w-full h-full bg-navy flex flex-col items-center justify-center gap-4 text-center p-6">
      <svg viewBox="0 0 120 80" className="w-24 h-auto" aria-hidden>
        <path d="M 8 30 Q 60 8, 112 30" stroke="#A6B594" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 60 19 Q 52 2, 44 0 Q 50 12, 60 19 Z" fill="#B5C4A2" />
        <path d="M 60 19 Q 70 4, 78 2 Q 71 14, 60 19 Z" fill="#B5C4A2" />
        <line x1="60" y1="19" x2="60" y2="34" stroke="#7A8B5F" strokeWidth="1.6" />
        <ellipse cx="60" cy="52" rx="13" ry="18" fill="#C9D7B8" fillOpacity="0.55" stroke="#8FA67D" strokeWidth="1.2" />
      </svg>
      <span lang="el" className="font-serif italic text-3xl text-ochre">{d.greek}</span>
    </div>
  );
}

export function VenturesOverview() {
  return (
    <section id="ventures" className="ground-bone section scroll-mt-20">
      <div className="container-editorial">
        <SectionHeading
          title="The ventures"
          intro={<p>Some of these businesses have been part of our working lives for years. Others are newer ideas that we&rsquo;re developing. Here is what each one does.</p>}
        />
        <ul className="divide-y divide-navy/10 border-y border-navy/10">
          {divisions.map((d) => {
            const img = ventureImage[d.slug];
            return (
              <li key={d.slug}>
                <ScrollReveal>
                  <Link href={`/divisions/${d.slug}`} className="group grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-8 py-7 lg:py-9 items-center">
                    <div className="sm:col-span-4 lg:col-span-3">
                      <div className="media-frame aspect-[4/3]">
                        {img ? (
                          img.remote ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" style={{ objectPosition: img.position ?? 'center' }} />
                          ) : (
                            <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw" className="object-cover" style={{ objectPosition: img.position ?? 'center' }} />
                          )
                        ) : (
                          <DevelopingArt d={d} />
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-9 grid lg:grid-cols-9 gap-3 lg:gap-8 items-baseline">
                      <h3 className="lg:col-span-3 font-display text-3xl lg:text-4xl text-navy leading-tight group-hover:text-olive-deep transition-colors">{d.name}</h3>
                      <div className="lg:col-span-6">
                        <p className="font-sans text-[17px] text-navy/80 leading-relaxed">{d.cardDescription}</p>
                        {cardStatusLabel[d.slug] && <p className="status-note mt-2">{cardStatusLabel[d.slug]}</p>}
                        <p className="mt-4"><span className="text-link">{d.cardAction} <span aria-hidden>→</span></span></p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function SomeOfTheWork() {
  const stay = listings[2];
  const site = projects[0];
  const caroline = artworks.find((a) => a.artist === 'Caroline' && a.title === 'Where the Light Lives')!;
  const elena = artworks.find((a) => a.artist === 'Elena' && a.title === 'Golden Reverie')!;
  const items = [
    { href: stay.href, external: true, img: stay.image, remote: true, alt: stay.imageAlt, label: 'Ithaca House', title: stay.title, note: 'Book on Airbnb' },
    { href: '/divisions/the-studio#work', external: false, img: site.image, remote: false, alt: `The ${site.name} website`, label: 'The Studio · Lickity Split', title: site.name, note: 'See the Studio’s work', position: 'top' },
    { href: caroline.url, external: true, img: caroline.image, remote: false, alt: `${caroline.title}, by Caroline Likoudis`, label: 'The Easel · Caroline Likoudis', title: caroline.title, note: 'Brush & Soul Studio', contain: true },
    { href: elena.url, external: true, img: elena.image, remote: false, alt: `${elena.title}, by Elena Likoudis`, label: 'The Easel · Elena Likoudis', title: elena.title, note: 'Elena Likoudis Art', contain: true },
  ];
  return (
    <section className="ground-cream section">
      <div className="container-editorial">
        <SectionHeading title="Some of the work" intro={<p>A few examples from the businesses and independent practices connected with Likoudis Ventures.</p>} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {items.map((it, i) => (
            <ScrollReveal key={it.title} delay={i * 60}>
              <a href={it.href} {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="group block">
                <div className={clsx('media-frame aspect-[4/5]', it.contain && 'bg-linen')}>
                  {it.remote ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={it.img} alt={it.alt} loading="lazy" className="w-full h-full object-cover" />
                  ) : (
                    <Image src={it.img} alt={it.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className={it.contain ? 'object-contain p-4' : 'object-cover'} style={{ objectPosition: it.position ?? 'center' }} />
                  )}
                </div>
                <p className="font-sans text-[14px] text-olive-deep mt-4">{it.label}</p>
                <h3 className="font-display text-xl text-navy leading-snug mt-1 group-hover:text-olive-deep transition-colors">{it.title}</h3>
                <p className="font-sans text-[14px] text-navy/60 mt-1">{it.note}{it.external ? ' ↗' : ' →'}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FamilyStory() {
  const people = about.family.members;
  return (
    <section className="ground-bone section">
      <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-7">
          <h2 className="font-display text-display-lg text-navy leading-tight mb-6">The family behind the work</h2>
          <div className="prose-body text-navy/85">
            <p>We come from a large family, and we&rsquo;ve ended up doing rather different things. There are people among us who work in hospitality, design, art, publishing, and business. Some of those interests have become established businesses. Others are still taking shape.</p>
            <p>Likoudis Ventures gives a few of them a common home, without requiring every project to become the same sort of business.</p>
            <p>The name comes from our family, whose roots are in Kefalonia. We grew up in upstate New York, and today our work takes us to Baltimore and beyond.</p>
          </div>
          <ul className="grid grid-cols-5 gap-2 sm:gap-3 mt-10 max-w-lg" aria-label="The five of us">
            {people.map((m) => (
              <li key={m.id}>
                <div className="media-frame aspect-[3/4]">
                  <Image src={m.portrait!} alt={m.name} fill sizes="120px" className="object-cover" style={{ objectPosition: m.portraitPosition }} />
                </div>
                <p className="font-sans text-[13px] text-navy/70 mt-1.5 leading-tight">{m.name.split(' ')[0]}</p>
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-primary mt-10">Meet the Family</Link>
        </div>
        <div className="lg:col-span-5 text-navy/80 lg:pt-4">
          <div className="bg-cream p-6 sm:p-8">
            <IonianMap />
            <p className="font-sans text-[14px] text-navy/65 mt-4 text-center">Kefalonia and Ithaka, in the Ionian Sea</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StillInTheWorks() {
  const dev = divisions.filter((d) => d.status === 'developing');
  return (
    <section className="ground-cream section">
      <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <h2 className="font-display text-display-lg text-navy leading-tight mb-5">Still in the works</h2>
          <p className="prose-body font-sans text-[17px] lg:text-lg text-navy/80 leading-relaxed">
            We&rsquo;re also working on a consulting practice and a prospective line of wines and pantry goods. Neither is a finished undertaking, but both have a place here as we work through the details.
          </p>
        </div>
        <ul className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dev.map((d) => (
            <li key={d.slug}>
              <Link href={`/divisions/${d.slug}`} className="group block border border-navy/15 hover:border-olive-deep p-6 h-full transition-colors bg-bone/60">
                <p className="status-note">{d.statusNote}</p>
                <h3 className="font-display text-2xl text-navy mt-3 group-hover:text-olive-deep transition-colors">{d.name}</h3>
                <p className="font-sans text-[15px] text-navy/70 mt-2">{d.label.replace(' in development', '')}</p>
                <p className="mt-4"><span className="text-link">{d.cardAction} <span aria-hidden>→</span></span></p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ClosingContact() {
  return (
    <section className="ground-navy section">
      <div className="container-editorial text-center max-w-2xl">
        <h2 className="font-display text-display-lg text-bone leading-tight">Have something in mind?</h2>
        <p className="font-sans text-[17px] lg:text-lg text-bone/80 mt-5 leading-relaxed">
          Whether you&rsquo;re looking for a place to stay, a website, a painting, or help with a project, we&rsquo;d be glad to hear from you.
        </p>
        <Link href="/contact" className="btn-olive-on-dark mt-8">Get in Touch</Link>
      </div>
    </section>
  );
}
