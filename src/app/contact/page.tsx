import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { InquirySection } from '@/components/sections/InquirySection';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Begin a conversation with Likoudis Ventures. We respond to every message, in order, by hand.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Correspondence"
        title={
          <>
            Begin a <em className="italic text-sky">conversation</em>.
          </>
        }
        lede="For new engagements, partnership inquiries, press, or any question that warrants a longer note than email comfortably allows — write to us. We respond to every message, in order, by hand."
      />
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
