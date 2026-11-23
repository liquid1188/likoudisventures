import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { about } from '@/content/about';
import { PageHero, SectionHeading } from '@/components/sections/PageHero';
import { IonianMap } from '@/components/brand/IonianMap';
import { FingerLakesSketch } from '@/components/brand/FingerLakesSketch';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'The Family | Likoudis Ventures',
  description:
    'The Likoudis family, with roots in Kefalonia and the Finger Lakes, and the five siblings associated with Likoudis Ventures.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="The family" greek="Κεφαλονιά" title={about.hero.title}>
        {about.hero.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </PageHero>

      <section className="ground-bone section">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-display-lg text-navy leading-tight mb-6">{about.heritage.heading}</h2>
            <div className="prose-body text-navy/85 max-w-[62ch]">
              {about.heritage.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <figure className="bg-cream p-6 sm:p-8 text-navy/80">
              <IonianMap />
              <figcaption className="font-sans text-[14px] text-navy/65 mt-4 text-center">Kefalonia and Ithaka, in the Ionian Sea</figcaption>
            </figure>
            <figure className="bg-cream p-6 sm:p-8 text-navy/80">
              <FingerLakesSketch />
              <figcaption className="font-sans text-[14px] text-navy/65 mt-4 text-center">The Finger Lakes, upstate New York</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="ground-cream section">
        <div className="container-editorial">
          <SectionHeading title={about.family.heading} intro={<p>{about.family.intro}</p>} />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {about.family.members.map((m, i) => (
              <ScrollReveal as="li" key={m.id} delay={i * 50}>
                <div className="media-frame aspect-[4/5] mb-5">
                  <Image src={m.portrait!} alt={`Portrait of ${m.name}`} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="object-cover" style={{ objectPosition: m.portraitPosition }} />
                </div>
                <h3 className="font-display text-2xl text-navy leading-tight">{m.name}</h3>
                <p className="font-sans text-[15px] text-olive-deep mt-1">{m.role}</p>
                <p className="font-sans text-[16px] text-navy/80 leading-relaxed mt-3">{m.bio}</p>
                {m.links && (
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                    {m.links.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-link">
                          {l.label} <span aria-hidden>↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="ground-navy section">
        <div className="container-editorial max-w-3xl text-center">
          <h2 className="font-display text-display-lg text-bone leading-tight">{about.closing.heading}</h2>
          <p className="font-sans text-[17px] lg:text-lg text-bone/80 mt-5 leading-relaxed">{about.closing.body}</p>
          <Link href="/#ventures" className="btn-olive-on-dark mt-8">Explore the Ventures</Link>
        </div>
      </section>
    </>
  );
}
