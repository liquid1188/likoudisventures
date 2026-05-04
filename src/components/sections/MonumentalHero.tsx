import Link from 'next/link';
import { OliveBranchInteractive } from '@/components/brand/OliveBranchInteractive';
import { WordReveal } from '@/components/ui/WordReveal';

/**
 * The new homepage hero.
 *
 * Layout: full-viewport navy section. Asymmetric.
 *   - Top-left: catalog header with year and seat
 *   - Center: monumental display headline, with WordReveal animation
 *   - Below the headline: the interactive olive branch (the centerpiece)
 *   - Bottom-right: scroll cue
 *   - Bottom-left: house lede
 *
 * The branch dominates. The headline gives context. Everything else is restraint.
 */
export function MonumentalHero() {
  return (
    <section className="ground-navy relative overflow-hidden min-h-[100svh] flex flex-col">
      {/* Atmospheric gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 15%, rgba(143, 184, 206, 0.18) 0%, transparent 55%), radial-gradient(ellipse at 5% 90%, rgba(143, 166, 125, 0.1) 0%, transparent 60%)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(143, 184, 206, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(143, 184, 206, 1) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
      />

      {/* Center stage — headline + branch */}
      <div className="container-tight relative z-10 flex-1 flex flex-col justify-center pt-32 lg:pt-36 pb-20 lg:pb-24">
        {/* Monumental headline */}
        <h1 className="text-center font-display text-monumental text-bone leading-none mb-12 lg:mb-16 mt-8 lg:mt-12">
          <span className="block">
            <WordReveal text="A house of considered" italicMatch="considered" staggerMs={90} />
          </span>
          <span className="block mt-1 lg:mt-2">
            <WordReveal text="enterprises." staggerMs={90} initialDelayMs={550} />
          </span>
        </h1>

        {/* The interactive olive branch — centerpiece */}
        <div className="relative max-w-7xl mx-auto w-full px-2 lg:px-0 mb-16 lg:mb-20">
          <OliveBranchInteractive theme="on-navy" />
        </div>

        {/* Lede + CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-5xl mx-auto w-full mt-8 lg:mt-12 stagger-fade">
          <div className="lg:col-span-7 lg:col-start-1">
            <p className="font-serif text-xl lg:text-2xl leading-[1.5] text-bone/85 font-light">
              Three brothers and two sisters, working in Baltimore under one family name. Web design, hospitality, original art, custom commissions, Greek wine and pantry, and curated objects. Six enterprises kept distinct on purpose. <span className="text-bone">One name on the door. The work has to be good enough to leave it there.</span>
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3 lg:items-end">
            <Link href="/contact" className="btn-olive-on-dark w-full lg:w-auto text-center">
              Begin a Project →
            </Link>
            <Link href="/about" className="btn-ghost-bone w-full lg:w-auto text-center">
              Read About the House
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
