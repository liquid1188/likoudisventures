import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { about } from '@/content/about';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'A family-held house of considered enterprises, with roots in Kefalonia and a working life in Baltimore.',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow={about.hero.eyebrow}
        title={
          <>
            A family, in <em className="italic text-sky">{about.hero.titleEmphasis}</em>.
          </>
        }
        lede={about.hero.lede}
      />

      {/* Origin section — cream ground */}
      <section className="ground-cream py-24 lg:py-28">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 max-w-5xl mx-auto">
            <div>
              <div className="text-[11px] uppercase tracking-eyebrow text-ochre-deep pt-3 border-t border-ochre-deep inline-block">
                Origin
              </div>
            </div>
            <div>
              <h2 className="font-serif font-normal text-display-md text-navy mb-10">
                {about.origin.heading}
              </h2>
              <div className="space-y-6 font-serif text-xl lg:text-[22px] leading-[1.55] text-navy/90">
                {about.origin.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Ithaca note — small, italic, in cream as a signature */}
              <p className="mt-10 pt-8 border-t border-ochre-deep/30 font-serif italic text-lg text-ochre-deep">
                {site.ithacaNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy section — navy ground, olive accents */}
      <section className="ground-navy py-24 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(143, 166, 125, 0.08) 0%, transparent 65%)',
          }}
        />
        <div className="container-tight relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-olive-glow mb-8 flex justify-center">
              <OliveBranchMark size={50} />
            </div>
            <div className="text-[11px] uppercase tracking-eyebrow text-olive-glow mb-7">
              {about.philosophy.heading}
            </div>
            <div className="space-y-6 font-serif text-2xl lg:text-3xl leading-[1.4] text-bone font-light">
              {about.philosophy.body.map((para, i) => (
                <p key={i}>
                  {i === about.philosophy.body.length - 1 ? (
                    <em className="italic text-olive-glow">{para}</em>
                  ) : (
                    para
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Family section — sky ground, list of family members */}
      <section className="ground-sky py-24 lg:py-28">
        <div className="container-tight">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
              <div>
                <div className="text-[11px] uppercase tracking-eyebrow text-navy mb-3.5">
                  The Family
                </div>
                <h2 className="font-serif font-normal text-display-md text-navy">
                  {about.family.heading}
                </h2>
              </div>
              <div className="font-serif italic text-lg text-navy/75 max-w-md self-end leading-relaxed">
                Three brothers, two sisters, working under one name. More to be named as the house grows.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {about.family.members.map((member) => (
                <div key={member.name} className="bg-bone p-8 border-t-[3px] border-t-ochre">
                  <div className="font-serif text-2xl text-navy mb-1">{member.name}</div>
                  <div className="text-[11px] uppercase tracking-eyebrow text-ochre-deep mb-5">
                    {member.role}
                  </div>
                  <p className="font-serif text-base text-navy/85 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Separation note — navy, restrained */}
      <section className="ground-navy py-20 lg:py-24">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 max-w-5xl mx-auto">
            <div>
              <div className="text-[11px] uppercase tracking-eyebrow text-olive-glow pt-3 border-t border-olive-glow inline-block">
                A Separation
              </div>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-bone mb-6 leading-tight">
                {about.separation.heading}
              </h3>
              <p className="font-serif text-lg lg:text-xl leading-[1.6] text-bone/85">
                {about.separation.body}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
