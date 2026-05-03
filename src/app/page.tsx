import { Hero } from '@/components/sections/Hero';
import { DivisionGrid } from '@/components/sections/DivisionGrid';
import { IntroProse } from '@/components/sections/IntroProse';
import { PassageBand } from '@/components/sections/PassageBand';
import { PhilosophyBand } from '@/components/sections/PhilosophyBand';
import { InquirySection } from '@/components/sections/InquirySection';
import { site } from '@/content/site';

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={`Est. ${site.foundedRoman} · ${site.seat.split(',')[0]}`}
        title={
          <>
            A house of <em className="italic text-sky">considered</em> enterprises.
          </>
        }
        lede="A family-held holding company operating across web design, hospitality, custom commissions, and forthcoming Greek goods. One name, six disciplines, one standard of work."
        primaryCta={{ label: 'Begin a Project', href: '/contact' }}
        secondaryCta={{ label: 'Our Divisions', href: '#divisions' }}
      />

      <DivisionGrid />

      <IntroProse />

      <PassageBand />

      <PhilosophyBand />

      <InquirySection />
    </>
  );
}
