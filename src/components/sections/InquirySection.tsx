import { InquiryForm } from '@/components/forms/InquiryForm';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { site } from '@/content/site';
import type { ReactNode } from 'react';

interface InquirySectionProps {
  heading?: ReactNode;
  text?: string;
  defaultDivision?: string;
  /**
   * When true, renders form-only — drops the left column with heading,
   * lede, contact details, and heritage signature. Use on the homepage
   * where the Inquiry section is a quick form CTA, not the main contact page.
   */
  compact?: boolean;
}

export function InquirySection({
  heading = (
    <>
      Begin a <em className="italic text-ochre-deep">conversation</em>.
    </>
  ),
  text = 'For new engagements, partnership inquiries, or press, write to us directly. Every message is read by a person and replied to in order, by hand.',
  defaultDivision,
  compact = false,
}: InquirySectionProps) {
  if (compact) {
    return (
      <section id="inquiry" className="ground-bone py-28 lg:py-36 relative">
        <div className="container-editorial">
          <ScrollReveal as="div" className="max-w-2xl mx-auto">
            <div className="bg-cream p-8 lg:p-12 relative editorial-frame text-navy">
              <div className="mb-8 pb-6 border-b border-navy/15">
                <div className="font-display text-2xl lg:text-3xl text-navy">
                  A note <em className="italic text-ochre-deep">from you</em>
                </div>
              </div>
              <InquiryForm defaultDivision={defaultDivision} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section id="inquiry" className="ground-bone py-28 lg:py-36 relative">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column — heading + correspondence details */}
          <ScrollReveal as="div" className="lg:col-span-5">
            <h2 className="font-display text-display-xl text-navy mb-7 leading-tight">
              {heading}
            </h2>
            <p className="font-serif text-xl lg:text-2xl leading-relaxed text-navy/80 italic mb-10">
              {text}
            </p>

            {/* Correspondence details — letterhead style */}
            <div className="space-y-5 max-w-md">
              <CorrespondenceLine label="By Email" value={site.email} href={`mailto:${site.email}`} />
              <CorrespondenceLine label="By Mail" value={site.seat} />
              <CorrespondenceLine label="By Hand" value="By appointment" />
            </div>

            {/* Heritage signature */}
            <div className="mt-12 pt-7 border-t border-navy/15">
              <div className="font-serif italic text-base text-ochre-deep">
                ἐκ Κεφαλονιάς
              </div>
            </div>
          </ScrollReveal>

          {/* Right column — form */}
          <ScrollReveal as="div" delay={200} className="lg:col-span-7">
            <div className="bg-cream p-8 lg:p-12 relative editorial-frame text-navy">
              {/* Form header */}
              <div className="mb-8 pb-6 border-b border-navy/15">
                <div className="font-display text-2xl lg:text-3xl text-navy">
                  A note <em className="italic text-ochre-deep">from you</em>
                </div>
              </div>
              <InquiryForm defaultDivision={defaultDivision} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

interface CorrespondenceLineProps {
  label: string;
  value: string;
  href?: string;
}

function CorrespondenceLine({ label, value, href }: CorrespondenceLineProps) {
  const content = (
    <div className="grid grid-cols-[110px_1fr] gap-5 items-baseline border-t border-navy/15 pt-4 group">
      <div className="font-sans text-[10px] uppercase tracking-caps text-ochre-deep">{label}</div>
      <div className="font-serif text-lg text-navy group-hover:text-ochre-deep transition-colors">
        {value}
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }
  return content;
}
