import { MonumentalHero } from '@/components/sections/MonumentalHero';
import { DivisionsContents } from '@/components/sections/DivisionsContents';
import { EditorialIntro } from '@/components/sections/EditorialIntro';
import { PhilosophyBand } from '@/components/sections/PhilosophyBand';
import { InquirySection } from '@/components/sections/InquirySection';

export default function HomePage() {
  return (
    <>
      <MonumentalHero />
      <DivisionsContents />
      <EditorialIntro />
      <PhilosophyBand />
      <InquirySection compact />
    </>
  );
}
