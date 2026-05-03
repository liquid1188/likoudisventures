import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Division } from '@/content/divisions';
import { divisions } from '@/content/divisions';

interface DivisionShellProps {
  division: Division;
  children: ReactNode;
}

/**
 * Shared frame for every division page — top breadcrumb and bottom navigation
 * to other divisions. The body of the page (between header and footer) is
 * specific to the division and lives in its own layout component.
 */
export function DivisionShell({ division, children }: DivisionShellProps) {
  // Find prev/next divisions for the bottom navigation
  const idx = divisions.findIndex((d) => d.slug === division.slug);
  const prev = idx > 0 ? divisions[idx - 1] : divisions[divisions.length - 1];
  const next = idx < divisions.length - 1 ? divisions[idx + 1] : divisions[0];

  return (
    <>
      {children}

      {/* Bottom navigation — prev / index / next, like book pagination */}
      <section className="ground-bone py-16 lg:py-20 border-t border-navy/10">
        <div className="container-editorial">
          <div className="grid grid-cols-3 gap-6 items-center">
            <Link
              href={`/divisions/${prev.slug}`}
              className="group block text-left"
            >
              <div className="font-sans text-[10px] uppercase tracking-eyebrow text-ochre-deep mb-2">
                ← Previous
              </div>
              <div className="font-display text-xl lg:text-2xl text-navy group-hover:text-ochre-deep transition-colors">
                {prev.name}
              </div>
              <div className="font-serif italic text-sm text-navy/55 mt-1">{prev.greek}</div>
            </Link>

            <Link
              href="/#divisions"
              className="text-center group"
            >
              <div className="font-sans text-[10px] uppercase tracking-eyebrow text-navy/50 mb-2">
                ◆
              </div>
              <div className="font-display italic text-base lg:text-lg text-navy group-hover:text-ochre-deep transition-colors">
                Index of divisions
              </div>
            </Link>

            <Link
              href={`/divisions/${next.slug}`}
              className="group block text-right"
            >
              <div className="font-sans text-[10px] uppercase tracking-eyebrow text-ochre-deep mb-2">
                Next →
              </div>
              <div className="font-display text-xl lg:text-2xl text-navy group-hover:text-ochre-deep transition-colors">
                {next.name}
              </div>
              <div className="font-serif italic text-sm text-navy/55 mt-1">{next.greek}</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
