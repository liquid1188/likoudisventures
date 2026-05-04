import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { NewsletterSignup } from '@/components/forms/NewsletterSignup';

export const metadata: Metadata = {
  title: 'The Branch',
  description: 'A monthly note from the house. News from the divisions, a recommendation, a heritage piece. Free, no more than once a month.',
};

export default function TheBranchPage() {
  return (
    <>
      <Hero
        crownMark
        eyebrow="The Branch · Ὁ Κλάδος"
        showGreekEyebrow={false}
        title={
          <>
            A monthly note <em className="italic text-sky">from the house</em>.
          </>
        }
        lede="Once a month, a short letter from the five of us. News from the divisions, one curated recommendation — a wine, a book, a place — and a small note on heritage. Free, no more than once a month, ever."
      />

      {/* Signup card — cream ground */}
      <section className="ground-sky py-24 lg:py-28">
        <div className="container-tight">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-ochre mb-8 flex justify-center">
              <OliveBranchMark size={48} />
            </div>

            <h2 className="font-serif font-normal text-display-md text-navy mb-6">
              Subscribe to <em className="italic text-ochre-deep">The Branch</em>.
            </h2>
            <p className="font-serif italic text-lg lg:text-xl text-navy/80 leading-relaxed mb-10">
              No advertising. No tracking pixels. No referral programs. Just a letter, when there is something worth saying.
            </p>

            <div className="bg-bone p-8 lg:p-10 text-left max-w-lg mx-auto">
              <NewsletterSignup variant="standalone" />
            </div>
          </div>
        </div>
      </section>

      {/* Issue status — sets expectation about cadence and current state */}
      <section className="ground-bone py-16 lg:py-20 border-y border-navy/10">
        <div className="container-tight">
          <div className="max-w-2xl mx-auto text-center">
            <div className="catalog-num text-sm mb-4">Status</div>
            <div className="eyebrow-no-rule text-ochre-deep mb-6 inline-block">Issue 01 · Forthcoming</div>
            <p className="font-serif text-lg lg:text-xl leading-relaxed text-navy/80">
              The first issue of <em className="italic">The Branch</em> is in preparation. Subscribe and we will send it the day it ships.
            </p>
            <p className="font-serif italic text-base text-navy/55 mt-5">
              Until then, the form above is the only thing we will ask of you.
            </p>
          </div>
        </div>
      </section>

      {/* What's in it — cream ground, three columns */}
      <section className="ground-cream py-20 lg:py-24">
        <div className="container-tight">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="text-[11px] uppercase tracking-eyebrow text-navy mb-4">
                What is in each issue
              </div>
              <h2 className="font-serif font-normal text-display-md text-navy">
                Three things, <em className="italic text-navy-deep">briefly</em>.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <BranchColumn
                num="i."
                title="A note"
                body="A few hundred words from the five of us about what is happening in the house. What shipped, what is coming, what was learned."
              />
              <BranchColumn
                num="ii."
                title="A recommendation"
                body="One thing worth your attention this month. A bottle of wine. A book. A place to visit. Something we put our name behind."
              />
              <BranchColumn
                num="iii."
                title="A heritage piece"
                body="A short note on Kefalonia, on the Ionian, on Greek tradition, or on the idea of building things slowly under a family name."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface BranchColumnProps {
  num: string;
  title: string;
  body: string;
}

function BranchColumn({ num, title, body }: BranchColumnProps) {
  return (
    <div className="bg-bone p-7 lg:p-8 border-t-[3px] border-t-ochre">
      <div className="font-serif italic text-base text-ochre-deep mb-3">{num}</div>
      <h3 className="font-serif text-2xl text-navy mb-4 leading-tight">{title}</h3>
      <p className="font-serif text-base text-navy/80 leading-relaxed">{body}</p>
    </div>
  );
}
