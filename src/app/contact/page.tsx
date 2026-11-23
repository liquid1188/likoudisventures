import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { site, inquiryTopics } from '@/content/site';

export const metadata: Metadata = {
  title: 'Get in Touch | Likoudis Ventures',
  description: 'Ask about a stay, discuss a project, inquire about artwork, or get in touch for another reason.',
  alternates: { canonical: '/contact' },
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const { topic } = await searchParams;
  const preset = topic && (inquiryTopics as readonly string[]).includes(topic) ? topic : 'General Inquiry';
  return (
    <>
      <PageHero title="Get in touch.">
        <p>If you&rsquo;d like to ask about a stay, discuss a project, inquire about artwork, or get in touch for another reason, send us a note.</p>
        <p>
          You can also write to{' '}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4 text-bone">{site.email}</a>.
        </p>
      </PageHero>
      <section className="ground-bone section">
        <div className="container-editorial max-w-3xl">
          <InquiryForm key={preset} defaultTopic={preset} />
        </div>
      </section>
    </>
  );
}
