import type { JSX } from 'react';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';

/**
 * Sky-blue band with the house philosophy quote.
 * Used on homepage between Passage and Inquiry sections.
 */
export function PhilosophyBand(): JSX.Element {
  return (
    <section className="ground-sky py-24 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 100%, rgba(14, 27, 44, 0.1) 0%, transparent 55%)',
        }}
      />

      <div className="container-tight relative text-center">
        <div className="text-navy mb-8 flex justify-center">
          <OliveBranchMark size={50} />
        </div>

        <p className="font-serif italic font-light text-3xl lg:text-[42px] leading-[1.2] text-navy max-w-4xl mx-auto mb-7">
          &ldquo;Build the thing well, sign your name to it, and the{' '}
          <em className="italic text-navy-deep font-normal">rest takes care of itself</em>.&rdquo;
        </p>

        <div className="text-[11px] uppercase tracking-eyebrow text-navy">
          — House Rule
        </div>
      </div>
    </section>
  );
}
