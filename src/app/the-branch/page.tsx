import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { NewsletterSignup } from '@/components/forms/NewsletterSignup';

export const metadata: Metadata = {
  title: 'The Branch | An Occasional Note from the Likoudis Family',
  description: 'News from the businesses, new projects, and a few things we have been reading, visiting, making, or finding interesting. Subscribe by email.',
  alternates: { canonical: '/the-branch' },
};

/**
 * The Branch newsletter. No archive is shown until real issues exist; when
 * they do, add them beneath the signup.
 */
export default function TheBranchPage() {
  return (
    <>
      <PageHero kicker="The Branch" title="An occasional note from the family.">
        <p>Every so often, we&rsquo;ll share news from the businesses, new projects, and a few things we&rsquo;ve been reading, visiting, making, or finding interesting.</p>
        <p>The Branch is a place for those updates, without requiring everything to become an announcement or a sales pitch.</p>
      </PageHero>
      <section className="ground-bone section">
        <div className="container-editorial max-w-2xl">
          <h2 className="font-display text-display-md text-navy leading-tight mb-3">Subscribe</h2>
          <p className="font-sans text-[17px] text-navy/80 mb-6">Subscribe to receive future notes by email.</p>
          <NewsletterSignup variant="standalone" />
        </div>
      </section>
    </>
  );
}
