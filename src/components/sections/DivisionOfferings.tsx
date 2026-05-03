import type { Division } from '@/content/divisions';

interface DivisionOfferingsProps {
  division: Division;
}

/**
 * Sky-blue band listing the offerings of the division.
 * Each offering is a row with a number, separator, and the offering text.
 */
export function DivisionOfferings({ division }: DivisionOfferingsProps) {
  return (
    <section className="ground-sky py-20 lg:py-24">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-12">
          <div>
            <div className="text-[11px] uppercase tracking-eyebrow text-navy mb-3.5">
              What we offer
            </div>
            <h2 className="font-serif font-normal text-display-md text-navy">
              The work, <em className="italic text-navy-deep">in particulars.</em>
            </h2>
          </div>
        </div>

        <div className="max-w-4xl">
          <ul className="divide-y divide-navy/20">
            {division.offerings.map((offering, i) => (
              <li key={i} className="grid grid-cols-[40px_1fr] gap-6 py-5 lg:py-6">
                <div className="font-serif italic text-navy/60 text-lg pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="font-serif text-lg lg:text-xl leading-relaxed text-navy">
                  {offering}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
