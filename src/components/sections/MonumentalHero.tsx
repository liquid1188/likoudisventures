import Link from 'next/link';
import { OliveBranchInteractive } from '@/components/brand/OliveBranchInteractive';
import { site } from '@/content/site';

/**
 * Homepage hero: headline, supporting copy, two actions, and the interactive
 * olive branch as the main visual.
 */
export function MonumentalHero() {
  return (
    <section className="ground-navy relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse at 80% 10%, rgba(143, 184, 206, 0.18) 0%, transparent 55%), radial-gradient(ellipse at 5% 95%, rgba(143, 166, 125, 0.12) 0%, transparent 60%)',
        }}
      />
      <div className="container-tight relative z-10 pt-28 sm:pt-32 lg:pt-36 pb-14 lg:pb-20">
        <h1 className="fade-up text-center font-display text-monumental text-bone max-w-5xl mx-auto">
          {site.headline}
        </h1>

        <div className="relative max-w-6xl mx-auto w-full mt-10 sm:mt-12 lg:mt-14">
          <OliveBranchInteractive theme="on-navy" />
        </div>

        <div className="fade-up max-w-2xl mx-auto text-center mt-8 lg:mt-10" style={{ animationDelay: '0.2s' }}>
          <p className="font-sans text-[17px] lg:text-[19px] leading-relaxed text-bone/85">{site.intro}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link href="#ventures" className="btn-olive-on-dark">Explore the Ventures</Link>
            <Link href="/about" className="btn-ghost-bone">Meet the Family</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
