import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { IonianMap } from '@/components/brand/IonianMap';

/**
 * "A Brief Word" — short orientation block.
 * Asymmetric grid: small marginalia label on the left, prose in the center,
 * generous Ionian map on the right. Drop cap on the opening paragraph.
 *
 * The prose is intentionally short. The PhilosophyBand directly below this
 * section carries the house rule, so we do not state it twice.
 */
export function EditorialIntro() {
  return (
    <section className="ground-olive py-28 lg:py-36 relative">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Marginalia — small left label */}
          <ScrollReveal as="div" className="col-span-12 lg:col-span-1 lg:pt-3">
            <div className="eyebrow-no-rule text-ochre-deep mb-4">A Brief Word</div>
          </ScrollReveal>

          {/* Main prose — center, generous measure */}
          <ScrollReveal as="div" delay={150} className="col-span-12 lg:col-span-6">
            <div className="prose-editorial">
              <p className="drop-cap-style">
                <span className="font-display text-7xl lg:text-8xl text-ochre float-left mr-3 mt-1 leading-[0.85] font-light">W</span>
                e come from Kefalonia by way of upstate New York. Today we work in Baltimore under one family name. Five divisions of unrelated work on the surface, the same standard underneath.
              </p>
            </div>
          </ScrollReveal>

          {/* Ionian map illustration — enlarged */}
          <ScrollReveal as="div" delay={300} variant="blur" className="col-span-12 lg:col-span-5 lg:pt-2">
            <div className="text-navy editorial-frame">
              <IonianMap />
            </div>
            <p className="marginalia mt-4 text-center lg:text-left">
              Kefalonia, the family&apos;s island. Ithaca beside it.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
