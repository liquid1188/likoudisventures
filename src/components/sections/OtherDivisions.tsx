import Link from 'next/link';
import { divisions, type Division } from '@/content/divisions';

interface OtherDivisionsProps {
  currentSlug: string;
}

/**
 * Bottom navigation strip showing the other divisions a visitor might want to explore.
 * Cream ground, restrained typography.
 */
export function OtherDivisions({ currentSlug }: OtherDivisionsProps) {
  const others = divisions.filter((d) => d.slug !== currentSlug);

  return (
    <section className="ground-cream py-16 lg:py-20 border-t border-navy/10">
      <div className="container-tight">
        <div className="text-[11px] uppercase tracking-eyebrow text-ochre-deep mb-8 text-center">
          The other divisions
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {others.map((division) => (
            <DivisionLink key={division.slug} division={division} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DivisionLink({ division }: { division: Division }) {
  return (
    <Link
      href={`/divisions/${division.slug}`}
      className="group block p-5 bg-bone border border-navy/10 hover:border-navy hover:-translate-y-0.5 transition-all"
    >
      <div className="font-serif italic text-xs text-ochre-deep mb-2">
        No. {division.number}
      </div>
      <div className="font-serif text-lg text-navy leading-tight group-hover:text-ochre-deep transition-colors">
        {division.name}
      </div>
      <div className="text-[9px] uppercase tracking-tag text-navy/50 mt-2">
        {division.status === 'active' ? 'Active' : 'Forthcoming'}
      </div>
    </Link>
  );
}
