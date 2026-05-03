import { InquiryForm } from '@/components/forms/InquiryForm';
import { site } from '@/content/site';

interface InquirySectionProps {
  /**
   * Override the default heading. Defaults to homepage copy.
   */
  heading?: React.ReactNode;
  text?: string;
  /**
   * If set, the inquiry form will pre-select this division in the dropdown.
   */
  defaultDivision?: string;
}

/**
 * Navy-ground inquiry section with cream form card.
 * Used on homepage and as the inquiry section on division subpages.
 */
export function InquirySection({
  heading = (
    <>
      Begin a <em className="italic text-sky">conversation.</em>
    </>
  ),
  text = 'For new engagements, partnership inquiries, or press, write to us directly. We respond to every message, in order, by hand.',
  defaultDivision,
}: InquirySectionProps) {
  return (
    <section id="inquiry" className="ground-navy py-24 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 30%, rgba(143, 184, 206, 0.1) 0%, transparent 55%)',
        }}
      />

      <div className="container-tight relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto items-start">
          <div>
            <h2 className="font-serif font-normal text-display-md text-bone mb-7">
              {heading}
            </h2>
            <p className="font-serif text-lg lg:text-xl leading-relaxed text-bone/80 mb-9">
              {text}
            </p>

            <div className="space-y-4 max-w-sm">
              <div className="grid grid-cols-[110px_1fr] gap-5 pt-4 border-t border-sky/25">
                <div className="text-[10px] uppercase tracking-caps text-sky">By Email</div>
                <div className="font-serif text-base text-bone">{site.email}</div>
              </div>
              <div className="grid grid-cols-[110px_1fr] gap-5 pt-4 border-t border-sky/25">
                <div className="text-[10px] uppercase tracking-caps text-sky">By Mail</div>
                <div className="font-serif text-base text-bone">{site.seat}</div>
              </div>
              <div className="grid grid-cols-[110px_1fr] gap-5 pt-4 border-t border-sky/25">
                <div className="text-[10px] uppercase tracking-caps text-sky">By Hand</div>
                <div className="font-serif text-base text-bone">By appointment</div>
              </div>
            </div>
          </div>

          <div className="bg-cream p-8 lg:p-10">
            <InquiryForm defaultDivision={defaultDivision} />
          </div>
        </div>
      </div>
    </section>
  );
}
