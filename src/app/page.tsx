import type { Metadata } from 'next';
import { MonumentalHero } from '@/components/sections/MonumentalHero';
import { VenturesOverview, SomeOfTheWork, FamilyStory, StillInTheWorks, ClosingContact } from '@/components/sections/HomeSections';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: site.seoTitle,
  description: site.description,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <MonumentalHero />
      <VenturesOverview />
      <SomeOfTheWork />
      <FamilyStory />
      <StillInTheWorks />
      <ClosingContact />
    </>
  );
}
