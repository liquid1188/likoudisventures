import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'The Likoudis Collection | A Project in Development',
  description: 'An idea we have been exploring alongside the Workshop: a small catalogue of selected books, art, ceramics, furnishings, and unusual objects. No public inventory yet.',
  alternates: { canonical: '/collection' },
};

export default function CollectionPage() {
  return (
    <>
      <PageHero kicker="Part of the Workshop" title="The Likoudis Collection" status="A project in development.">
        <p>The Collection is an idea we&rsquo;ve been exploring alongside the Workshop. It brings together our interests in books, art, ceramics, furnishings, and unusual objects worth seeking out.</p>
        <p>We hope to develop a small catalogue of selected pieces, with attention to their makers, origins, and history.</p>
        <p>For now, there is no public inventory. We&rsquo;ll introduce individual pieces once they&rsquo;re actually available.</p>
      </PageHero>
      <section className="ground-bone section">
        <div className="container-editorial max-w-3xl flex flex-col sm:flex-row gap-4 sm:items-center">
          <Link href="/contact?topic=The%20Collection" className="btn-primary">Ask About the Collection</Link>
          <Link href="/divisions/the-workshop" className="text-link">Back to the Workshop <span aria-hidden>→</span></Link>
        </div>
      </section>
    </>
  );
}
