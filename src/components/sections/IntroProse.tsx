import type { JSX } from 'react';

/**
 * The "Brief Word" navy band that follows the division grid on the homepage.
 * Olive lives here — drop cap, italics, the rule.
 */
export function IntroProse(): JSX.Element {
  return (
    <section className="ground-navy py-24 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(143, 166, 125, 0.08) 0%, transparent 65%)',
        }}
      />

      <div className="container-tight relative">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 max-w-5xl mx-auto">
          <div>
            <div className="text-[11px] uppercase tracking-eyebrow text-olive-glow pt-3 border-t border-olive-glow inline-block">
              A Brief Word
            </div>
          </div>
          <div className="font-serif text-2xl lg:text-[26px] leading-[1.45] font-light text-bone/95">
            <p className="mb-7">
              <span className="font-serif font-medium text-7xl text-olive-glow leading-[0.85] float-left mr-3 mt-2">
                W
              </span>
              e are brothers and sisters, and we work the way our grandparents worked.{' '}
              <em className="italic text-olive-glow">
                Patiently. With our names on the door.
              </em>{' '}
              The categories we have chosen are deliberately varied because the discipline beneath them is not.
            </p>
            <p>
              Each division earns its keep on its own terms. None of them are hobbies. All of them answer to the same standard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
