import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { FamilyMemberCard } from '@/components/sections/FamilyMemberCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { about } from '@/content/about';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'A family-held house of considered enterprises, with roots in Kefalonia and a working life in Baltimore.',
};

export default function AboutPage() {
  // Sort members by their `order` field
  const members = [...about.family.members].sort((a, b) => a.order - b.order);

  return (
    <>
      <Hero
        crownMark
        title={
          <>
            A family,
            <br />
            <em className="italic text-sky">with our names</em>
            <br />
            on the door.
          </>
        }
        lede={about.hero.lede}
      />

      {/* Origin section */}
      <section className="ground-cream py-24 lg:py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-5xl mx-auto">
            <ScrollReveal as="div" className="lg:col-span-3">
              <div className="eyebrow-no-rule text-ochre-deep mb-5">Origin</div>
            </ScrollReveal>
            <ScrollReveal as="div" delay={150} className="lg:col-span-9">
              <h2 className="font-display text-display-xl text-navy mb-10 leading-tight">
                {about.origin.heading}
              </h2>
              <div className="prose-editorial">
                {about.origin.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <p className="mt-10 pt-8 border-t border-ochre-deep/30 font-serif italic text-lg text-ochre-deep">
                {site.ithacaNote}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy section — navy ground */}
      <section className="ground-navy py-24 lg:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(143, 166, 125, 0.16) 0%, transparent 60%)',
          }}
        />
        <div className="container-editorial relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-olive-glow mb-8 flex justify-center">
                <OliveBranchMark size={50} />
              </div>
              <div className="eyebrow-no-rule text-olive-glow mb-7 inline-block">
                {about.philosophy.heading}
              </div>
              <div className="space-y-6 font-display text-2xl lg:text-3xl leading-[1.3] text-bone font-light">
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
          </ScrollReveal>
        </div>
      </section>

      {/* Family section */}
      <section className="ground-bone py-24 lg:py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-14 lg:mb-20">
            <ScrollReveal as="div" className="lg:col-span-5">
              <div className="eyebrow-no-rule text-ochre-deep mb-5">The Board</div>
              <h2 className="font-display text-display-xl text-navy leading-tight">
                {about.family.heading}
              </h2>
            </ScrollReveal>
            <ScrollReveal as="div" delay={150} className="lg:col-span-6 lg:col-start-7 lg:pt-3">
              <p className="font-serif text-xl lg:text-2xl text-navy/80 italic leading-relaxed">
                {about.family.intro}
              </p>
            </ScrollReveal>
          </div>

          {/* Member grid: 1 column mobile, 2 columns sm, 3 columns lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {members.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 80}>
                <FamilyMemberCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
