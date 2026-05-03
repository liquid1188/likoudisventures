import type { Division } from '@/content/divisions';

interface DivisionDescriptionProps {
  division: Division;
}

/**
 * Cream-ground band with the division's long-form description.
 * Two-column layout: label on left, prose on right.
 */
export function DivisionDescription({ division }: DivisionDescriptionProps) {
  // Split the long description on \n\n into paragraphs
  const paragraphs = division.longDescription.split('\n\n');

  return (
    <section className="ground-cream py-20 lg:py-24">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 max-w-5xl mx-auto">
          <div>
            <div className="text-[11px] uppercase tracking-eyebrow text-ochre-deep pt-3 border-t border-ochre-deep inline-block">
              The Work
            </div>
          </div>
          <div className="space-y-6 font-serif text-xl lg:text-[22px] leading-[1.55] text-navy/90">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
