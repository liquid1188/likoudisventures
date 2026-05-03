import { divisions } from '@/content/divisions';
import { DivisionCard } from './DivisionCard';

export function DivisionGrid() {
  return (
    <section id="divisions" className="ground-sky py-20 lg:py-24 relative">
      <div className="container-tight">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-12 lg:mb-16">
          <div>
            <div className="text-[11px] uppercase tracking-eyebrow text-navy mb-3.5">
              Six Divisions
            </div>
            <h2 className="font-serif font-normal text-display-md text-navy">
              The work, <em className="italic text-navy-deep">plainly stated.</em>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-serif italic text-base lg:text-lg text-navy/75 leading-relaxed">
              Each enterprise operates with its own team, its own clientele, its own standards. What unites them is a refusal to ship anything we would not put our name on.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {divisions.map((division) => (
            <DivisionCard key={division.slug} division={division} />
          ))}
        </div>
      </div>
    </section>
  );
}
