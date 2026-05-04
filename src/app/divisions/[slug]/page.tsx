import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { divisions, getDivision } from '@/content/divisions';
import { DivisionShell } from '@/components/sections/DivisionShell';
import { StudioLayout } from '@/components/divisions/StudioLayout';
import { WorkshopLayout } from '@/components/divisions/WorkshopLayout';
import { IthacaLayout } from '@/components/divisions/IthacaLayout';
import { EaselLayout } from '@/components/divisions/EaselLayout';
import { TableLayout } from '@/components/divisions/TableLayout';

interface DivisionPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: DivisionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const division = getDivision(slug);
  if (!division) return { title: 'Not Found' };
  return {
    title: division.name,
    description: division.tagline,
    openGraph: { title: division.name, description: division.tagline },
  };
}

export default async function DivisionPage({ params }: DivisionPageProps) {
  const { slug } = await params;
  const division = getDivision(slug);
  if (!division) notFound();

  // Dispatch each division to its own register
  const Body = (() => {
    switch (division.slug) {
      case 'the-studio':
        return <StudioLayout division={division} />;
      case 'the-workshop':
        return <WorkshopLayout division={division} />;
      case 'ithaca-house':
        return <IthacaLayout division={division} />;
      case 'the-easel':
        return <EaselLayout division={division} />;
      case 'the-table':
        return <TableLayout division={division} />;
      default:
        return <StudioLayout division={division} />;
    }
  })();

  return <DivisionShell division={division}>{Body}</DivisionShell>;
}
