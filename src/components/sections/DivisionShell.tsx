import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Division } from '@/content/divisions';
import { divisions } from '@/content/divisions';

/** Frame for every venture page: the page body, then links to the neighbouring ventures. */
export function DivisionShell({ division, children }: { division: Division; children: ReactNode }) {
  const idx = divisions.findIndex((d) => d.slug === division.slug);
  const prev = divisions[(idx - 1 + divisions.length) % divisions.length];
  const next = divisions[(idx + 1) % divisions.length];

  return (
    <>
      {children}
      <nav aria-label="Other ventures" className="ground-bone border-t border-navy/10">
        <div className="container-editorial py-10 lg:py-12 grid grid-cols-3 gap-4 items-center">
          <Link href={`/divisions/${prev.slug}`} className="group">
            <span className="block font-sans text-[14px] text-navy/60">← Previous</span>
            <span className="block font-display text-lg sm:text-2xl text-navy group-hover:text-olive-deep transition-colors">{prev.name}</span>
          </Link>
          <Link href="/#ventures" className="text-center font-sans text-[15px] font-medium text-olive-deep underline underline-offset-4">
            All ventures
          </Link>
          <Link href={`/divisions/${next.slug}`} className="group text-right">
            <span className="block font-sans text-[14px] text-navy/60">Next →</span>
            <span className="block font-display text-lg sm:text-2xl text-navy group-hover:text-olive-deep transition-colors">{next.name}</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
