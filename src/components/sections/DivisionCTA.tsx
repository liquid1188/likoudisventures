import type { Division } from '@/content/divisions';
import { InquirySection } from './InquirySection';
import { NotifyForm } from '@/components/forms/NotifyForm';

interface DivisionCTAProps {
  division: Division;
}

/**
 * Renders the appropriate call-to-action for a division based on its status:
 * - Active divisions get the full InquirySection with form
 * - Forthcoming divisions get a NotifyForm in a navy-ground band
 */
export function DivisionCTA({ division }: DivisionCTAProps) {
  if (division.status === 'active') {
    return (
      <InquirySection
        defaultDivision={division.slug}
        heading={
          <>
            Begin a <em className="italic text-sky">conversation</em> with{' '}
            <span className="italic text-sky">{division.name}</span>.
          </>
        }
        text={`For ${division.name.toLowerCase()} engagements specifically — or anything related — write to us directly. We respond to every message, in order, by hand.`}
      />
    );
  }

  // Forthcoming division — show notify form on navy ground
  return (
    <section className="ground-navy py-24 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 30%, rgba(143, 184, 206, 0.1) 0%, transparent 55%)',
        }}
      />

      <div className="container-tight relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto items-start">
          <div>
            <div className="text-[11px] uppercase tracking-eyebrow text-ochre mb-5">
              Forthcoming
            </div>
            <h2 className="font-serif font-normal text-display-md text-bone mb-7">
              {division.name} is{' '}
              <em className="italic text-sky">on the way</em>.
            </h2>
            <p className="font-serif text-lg lg:text-xl leading-relaxed text-bone/80">
              We are sourcing carefully and will not launch this division until we can defend what it offers.
              Leave your email and we will write to you when {division.name} is ready —
              and not before, and not for any other reason.
            </p>
          </div>

          <NotifyForm divisionName={division.name} divisionSlug={division.slug} />
        </div>
      </div>
    </section>
  );
}
