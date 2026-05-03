import type { JSX } from 'react';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';

/**
 * The cream-ground band where ochre actually lives.
 * Used on homepage between IntroProse and PhilosophyBand.
 */
export function PassageBand(): JSX.Element {
  return (
    <section className="ground-cream py-24 lg:py-28 relative">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-ochre mb-8 flex justify-center">
            <OliveBranchMark size={44} />
          </div>

          <div className="text-[11px] uppercase tracking-eyebrow text-ochre-deep mb-6">
            From Kefalonia
          </div>

          <p className="font-serif text-3xl lg:text-[36px] leading-[1.3] text-navy font-normal mb-7">
            Six olives on a single branch — six disciplines, one name, <em className="italic text-ochre-deep">one tree</em>.
          </p>

          <div className="text-[10px] uppercase tracking-eyebrow text-ochre-deep">
            — The Mark
          </div>
        </div>
      </div>
    </section>
  );
}
