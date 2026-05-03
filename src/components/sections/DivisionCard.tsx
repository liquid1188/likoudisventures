import Link from 'next/link';
import { clsx } from 'clsx';
import type { Division } from '@/content/divisions';

interface DivisionCardProps {
  division: Division;
}

const themeBorderClasses: Record<Division['themeColor'], string> = {
  navy: 'border-t-navy',
  olive: 'border-t-olive',
  sky: 'border-t-sky-deep',
  ochre: 'border-t-ochre',
};

/**
 * Division card — bone-white surface on sky-blue ground, top-border in division theme color,
 * hover-flips to navy ground with sky text.
 */
export function DivisionCard({ division }: DivisionCardProps) {
  return (
    <Link
      href={`/divisions/${division.slug}`}
      className={clsx(
        'group block bg-bone p-6 lg:p-7 transition-all duration-300',
        'border-t-[3px] border border-navy/10',
        themeBorderClasses[division.themeColor],
        'hover:bg-navy hover:-translate-y-1 hover:shadow-xl'
      )}
    >
      <div className="font-serif italic text-sm text-ochre-deep mb-3 group-hover:text-sky transition-colors">
        {division.number}.
      </div>

      <h3 className="font-serif text-xl lg:text-2xl leading-tight tracking-tight text-navy group-hover:text-bone mb-4 transition-colors">
        {division.name}
      </h3>

      <p className="font-serif text-sm text-navy/75 group-hover:text-bone/80 mb-5 leading-relaxed transition-colors min-h-[3em]">
        {division.tagline}
      </p>

      <div className="flex items-center justify-between">
        <span
          className={clsx(
            'inline-block text-[9px] uppercase tracking-tag px-2.5 py-1',
            division.status === 'active'
              ? 'bg-olive text-bone group-hover:bg-olive-glow group-hover:text-navy'
              : 'bg-navy text-olive-glow group-hover:bg-ochre group-hover:text-navy',
            'transition-colors'
          )}
        >
          {division.status === 'active' ? 'Active' : 'Forthcoming'}
        </span>
        <span className="font-serif text-lg text-navy/40 group-hover:text-sky group-hover:translate-x-1 transition-all">
          →
        </span>
      </div>
    </Link>
  );
}
