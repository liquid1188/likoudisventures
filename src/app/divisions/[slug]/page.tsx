import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { divisions, getDivision } from '@/content/divisions';
import { DivisionHero } from '@/components/sections/DivisionHero';
import { DivisionDescription } from '@/components/sections/DivisionDescription';
import { DivisionOfferings } from '@/components/sections/DivisionOfferings';
import { DivisionNote } from '@/components/sections/DivisionNote';
import { DivisionCTA } from '@/components/sections/DivisionCTA';
import { OtherDivisions } from '@/components/sections/OtherDivisions';

interface DivisionPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate static paths for every division at build time.
 */
export function generateStaticParams() {
  return divisions.map((division) => ({
    slug: division.slug,
  }));
}

/**
 * Per-division metadata for SEO and OpenGraph.
 */
export async function generateMetadata({ params }: DivisionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const division = getDivision(slug);

  if (!division) {
    return { title: 'Not Found' };
  }

  return {
    title: division.name,
    description: division.tagline,
    openGraph: {
      title: division.name,
      description: division.tagline,
    },
  };
}

export default async function DivisionPage({ params }: DivisionPageProps) {
  const { slug } = await params;
  const division = getDivision(slug);

  if (!division) {
    notFound();
  }

  return (
    <>
      <DivisionHero division={division} />
      <DivisionDescription division={division} />
      <DivisionOfferings division={division} />
      <DivisionNote division={division} />
      <DivisionCTA division={division} />
      <OtherDivisions currentSlug={division.slug} />
    </>
  );
}
