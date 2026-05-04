import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { IonianMap } from '@/components/brand/IonianMap';

/**
 * "A Brief Word" — reimagined as an editorial spread.
 * Asymmetric grid: marginalia on the left, prose in the center, Ionian map illustration
 * on the right. Drop cap on the opening paragraph. Cream paper feel.
 */
export function EditorialIntro() {
  return (
    <section className="ground-cream py-28 lg:py-36 relative">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {/* Marginalia — left column, runs alongside prose */}
          <ScrollReveal as="div" className="col-span-12 lg:col-span-2 lg:pt-3">
            <div className="catalog-num text-sm mb-2">§ I.</div>
            <div className="eyebrow-no-rule text-ochre-deep mb-4">A Brief Word</div>
            <p className="marginalia hidden lg:block">
              Posted from the house in Canton, Baltimore, on the day this site was first set live.
            </p>
          </ScrollReveal>

          {/* Main prose — center, generous measure */}
          <ScrollReveal as="div" delay={150} className="col-span-12 lg:col-span-7">
            <div className="prose-editorial">
              <p className="drop-cap-style">
                <span className="font-display text-7xl lg:text-8xl text-ochre float-left mr-3 mt-1 leading-[0.85] font-light">W</span>
                e are three brothers and two sisters, and we work the way our grandparents worked. Patiently. With our names on the door. The six divisions on this site are unrelated on the surface and identical underneath: every one of them is the same act in a different medium.
              </p>
              <p>
                A website built carefully. A guest welcomed properly. A painting finished with care. A jar of olive oil sourced from a press whose owner you can name. An icon hung with a record of where it came from. None of it is hard, exactly. It just takes attention.
              </p>
              <p className="text-navy">
                <em className="italic text-ochre-deep">Build it well, sign your name to it, and the rest takes care of itself.</em> That is the whole rule. Everything else on this site is a footnote to it.
              </p>
            </div>

            {/* House mark + signature */}
            <div className="mt-10 pt-7 border-t border-ochre/30 flex items-center justify-between">
              <div className="flex items-center gap-4 text-navy/60">
                <div className="font-serif italic text-base">— The family, Baltimore</div>
              </div>
              <div className="font-serif italic text-base text-ochre-deep">
                ἐκ Κεφαλονιάς
              </div>
            </div>
          </ScrollReveal>

          {/* Ionian map illustration */}
          <ScrollReveal as="div" delay={300} variant="blur" className="col-span-12 lg:col-span-3 lg:pt-2">
            <div className="text-navy editorial-frame">
              <IonianMap />
            </div>
            <p className="marginalia mt-4 text-center lg:text-left">
              Kefalonia, the family's island. Ithaca beside it — the destination at the end of every long journey home.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
