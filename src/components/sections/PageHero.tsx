import type { ReactNode } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';

interface PageHeroProps {
  /** Small line above the title, e.g. the venture name. */
  kicker?: string;
  /** Greek word shown beside the kicker (secondary detail). */
  greek?: string;
  title: string;
  children?: ReactNode;
  actions?: ReactNode;
  /** Status text for developing ventures. */
  status?: string;
  image?: { src: string; alt: string; width: number; height: number; position?: string };
  /** Optional illustration (existing brand artwork) instead of a photograph. */
  art?: ReactNode;
}

/**
 * Navy hero used on every inner page. Text on the left; a photograph or
 * existing brand illustration on the right when there is one.
 */
export function PageHero({ kicker, greek, title, children, actions, status, image, art }: PageHeroProps) {
  const hasMedia = !!(image || art);
  return (
    <section className="ground-navy pt-28 lg:pt-36 pb-14 lg:pb-20 overflow-hidden">
      <div className="container-editorial">
        <div className={clsx('grid gap-10 lg:gap-14 items-center', hasMedia ? 'lg:grid-cols-12' : '')}>
          <div className={clsx(hasMedia ? 'lg:col-span-7' : 'max-w-3xl')}>
            {(kicker || greek) && (
              <p className="flex flex-wrap items-baseline gap-x-3 mb-5">
                {kicker && <span className="kicker text-olive-glow">{kicker}</span>}
                {greek && <span lang="el" className="font-serif italic text-lg text-ochre">{greek}</span>}
              </p>
            )}
            <h1 className="font-display text-display-xl text-bone leading-[1.05]">{title}</h1>
            {status && <p className="mt-4 font-sans text-[15px] italic text-olive-glow">{status}</p>}
            {children && <div className="prose-body text-bone/85 mt-6 max-w-2xl">{children}</div>}
            {actions && <div className="flex flex-col sm:flex-row gap-3 mt-8">{actions}</div>}
          </div>
          {image && (
            <div className="lg:col-span-5">
              <div className="media-frame aspect-[4/5]">
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority className="w-full h-full object-cover" style={{ objectPosition: image.position ?? 'center' }} sizes="(min-width: 1024px) 40vw, 100vw" />
              </div>
            </div>
          )}
          {art && !image && <div className="lg:col-span-5 text-olive-glow">{art}</div>}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ title, intro, kicker, light = false, center = false }: { title: string; intro?: ReactNode; kicker?: string; light?: boolean; center?: boolean }) {
  return (
    <div className={clsx('mb-10 lg:mb-14 max-w-3xl', center && 'mx-auto text-center')}>
      {kicker && <p className={clsx('kicker mb-3', light ? 'text-olive-glow' : 'text-olive-deep')}>{kicker}</p>}
      <h2 className={clsx('font-display text-display-lg leading-tight', light ? 'text-bone' : 'text-navy')}>{title}</h2>
      {intro && <div className={clsx('prose-body mt-5', light ? 'text-bone/80' : 'text-navy/80')}>{intro}</div>}
    </div>
  );
}
