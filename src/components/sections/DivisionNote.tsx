import type { Division } from '@/content/divisions';

interface DivisionNoteProps {
  division: Division;
}

/**
 * Navy-ground note band, only rendered if the division has a `notes` field.
 * Used for things like the Likoudis Villas acknowledgment on Ithaca House.
 */
export function DivisionNote({ division }: DivisionNoteProps) {
  if (!division.notes) return null;

  return (
    <section className="ground-navy py-16 lg:py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(143, 166, 125, 0.06) 0%, transparent 65%)',
        }}
      />

      <div className="container-tight relative">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 max-w-5xl mx-auto">
          <div>
            <div className="text-[11px] uppercase tracking-eyebrow text-olive-glow pt-3 border-t border-olive-glow inline-block">
              A Note
            </div>
          </div>
          <p className="font-serif italic text-xl lg:text-2xl leading-[1.5] text-bone/90 font-light">
            {division.notes}
          </p>
        </div>
      </div>
    </section>
  );
}
