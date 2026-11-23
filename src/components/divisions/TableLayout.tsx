import type { Division } from '@/content/divisions';
import { PageHero } from '@/components/sections/PageHero';
import { IonianMap } from '@/components/brand/IonianMap';
import { FingerLakesSketch } from '@/components/brand/FingerLakesSketch';
import { NotifyForm } from '@/components/forms/NotifyForm';

/**
 * Areas of interest only. Nothing here is inventory: no producers, labels,
 * prices, or availability until they are confirmed. No online wine or spirits
 * sales until licensing, fulfillment, age verification, and shipping rules are
 * in place.
 */
const categories = [
  { name: 'Wine', text: 'Greek wines, including those of Kefalonia, and selected wines from the Finger Lakes.' },
  { name: 'Olive Oil & Olives', text: 'Olive products from the Ionian Islands and other Greek growing regions.' },
  { name: 'Honey & Pantry', text: 'Honey, preserves, condiments, and other shelf-stable products connected with regional food traditions.' },
];

export function TableLayout({ division }: { division: Division }) {
  return (
    <>
      <PageHero kicker={division.name} greek={division.greek} title="From Kefalonia to the Finger Lakes." status="In development">
        <p>The Table is a developing project centered on wines and pantry goods connected to two regions that have shaped our family&rsquo;s history.</p>
        <p>We are exploring products from the Ionian Islands and the Finger Lakes, with particular interest in wine, olive oil, olives, honey, and other goods associated with these places.</p>
      </PageHero>

      <section className="ground-bone section">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <h2 className="font-display text-display-lg text-navy leading-tight mb-6">Two places we know</h2>
            <div className="prose-body text-navy/85">
              <p>Kefalonia and the wider Ionian Islands have long traditions of winemaking, olive cultivation, and regional food production. The Finger Lakes, where we grew up, have their own wine culture, particularly around Riesling and other cool-climate varieties.</p>
              <p>The Table is our attempt to explore what might be possible between those two places, beginning with a small and carefully selected range.</p>
            </div>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 text-navy/80">
            <figure className="bg-cream p-5">
              <IonianMap />
              <figcaption className="font-sans text-[13px] text-navy/60 mt-2 text-center">The Ionian Islands</figcaption>
            </figure>
            <figure className="bg-cream p-5">
              <FingerLakesSketch />
              <figcaption className="font-sans text-[13px] text-navy/60 mt-2 text-center">The Finger Lakes</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="ground-cream section">
        <div className="container-editorial max-w-3xl">
          <h2 className="font-display text-display-md text-navy leading-tight mb-5">Wine experience</h2>
          <p className="font-sans text-[17px] lg:text-lg text-navy/85 leading-relaxed">
            Andrew&rsquo;s experience in hospitality includes work at Wagner Vineyards in the Finger Lakes and Charleston Restaurant in Baltimore. Charleston received the James Beard Foundation&rsquo;s 2025 award for Outstanding Wine and Other Beverages Program. That experience helped cultivate his interest in wine service and the producers behind it.
          </p>
        </div>
      </section>

      <section className="ground-bone section">
        <div className="container-editorial">
          <div className="mb-10 max-w-3xl">
            <h2 className="font-display text-display-lg text-navy leading-tight">What we&rsquo;re looking at</h2>
            <p className="font-sans text-[17px] text-navy/75 mt-4">Areas of interest, not products for sale.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            {categories.map((c) => (
              <div key={c.name} className="border-t border-navy/15 pt-5">
                <h3 className="font-display text-2xl text-navy">{c.name}</h3>
                <p className="font-sans text-[16px] text-navy/80 leading-relaxed mt-3">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="notify" className="ground-cream section scroll-mt-20">
        <div className="container-editorial max-w-3xl">
          <h2 className="font-display text-display-lg text-navy leading-tight">The Table is still taking shape.</h2>
          <p className="font-sans text-[17px] text-navy/80 leading-relaxed mt-5">
            We&rsquo;re working through the products, producers, and practical arrangements that would make this venture possible.
          </p>
          <p className="font-sans text-[17px] text-navy/80 leading-relaxed mt-4 mb-8">
            If you&rsquo;d like to hear when we have something ready to share, leave your email below.
          </p>
          <NotifyForm />
        </div>
      </section>
    </>
  );
}
