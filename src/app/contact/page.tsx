import type { Metadata } from 'next';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { InquirySection } from '@/components/sections/InquirySection';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Begin a conversation with Likoudis Ventures. We respond to every message, in order, by hand.',
};

export default function ContactPage() {
  return (
    <>
      {/* Bespoke contact hero — enlarged olive branch crowning the headline */}
      <section className="ground-navy relative overflow-hidden min-h-[80vh] flex flex-col">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 75% 20%, rgba(143, 184, 206, 0.24) 0%, transparent 55%), radial-gradient(ellipse at 5% 85%, rgba(143, 166, 125, 0.15) 0%, transparent 60%)',
          }}
        />

        <div className="container-editorial relative z-10 flex-1 flex flex-col justify-center items-center text-center pt-32 lg:pt-36 pb-16 lg:pb-24">
          {/* Enlarged olive branch — crowning the headline (overlapping downward) */}
          <div className="text-olive-glow opacity-85 -mb-6 lg:-mb-12 relative z-10 pointer-events-none">
            <OliveBranchMark size={180} className="lg:hidden" />
            <OliveBranchMark size={280} className="hidden lg:block" />
          </div>

          <h1 className="font-display text-editorial text-bone leading-[0.96] tracking-tight max-w-4xl">
            Begin a <em className="italic text-sky">conversation</em>.
          </h1>

          <p className="font-serif text-xl lg:text-2xl leading-relaxed text-bone/85 max-w-3xl font-light mt-9 lg:mt-12">
            For new engagements, partnership inquiries, press, or any question that warrants a longer note than email comfortably allows — write to us. We respond to every message, in order, by hand.
          </p>
        </div>
      </section>

      <InquirySection
        heading={
          <>
            Send a <em className="italic text-sky">message</em>.
          </>
        }
        text="Use the form below or write to us directly at the email listed. Either reaches us. We do not use chatbots, autoresponders, or canned replies."
      />
    </>
  );
}
