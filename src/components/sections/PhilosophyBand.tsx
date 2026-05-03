'use client';

import { useEffect, useRef, useState } from 'react';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { clsx } from 'clsx';

/**
 * Full-bleed navy band with the house philosophy quote.
 * The quote reveals line-by-line as it enters the viewport.
 */
export function PhilosophyBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const lines = [
    { text: 'Build the thing well,', delay: 0 },
    { text: 'sign your name to it,', delay: 380 },
    { text: 'and the rest', delay: 760, italic: true },
    { text: 'takes care of itself.', delay: 1100, italic: true, accent: true },
  ];

  return (
    <section ref={ref} className="ground-navy py-32 lg:py-40 relative">
      <div className="container-editorial relative">
        {/* Mark above */}
        <div
          className={clsx(
            'flex justify-center mb-12 lg:mb-16 text-olive-glow transition-all duration-1000',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <OliveBranchMark size={56} />
        </div>

        {/* Eyebrow */}
        <div
          className={clsx(
            'text-center mb-10 lg:mb-12 transition-all duration-700',
            visible ? 'opacity-100' : 'opacity-0'
          )}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="font-serif italic text-ochre text-sm tracking-wide">
            — The House Rule
          </div>
        </div>

        {/* The quote, line by line */}
        <div className="text-center max-w-4xl mx-auto">
          <blockquote className="font-display text-bone leading-[1.05] tracking-tight">
            {lines.map((line, i) => (
              <span
                key={i}
                className={clsx(
                  'block transition-all duration-1000',
                  'text-display-xl lg:text-editorial',
                  line.italic && 'italic',
                  line.accent && 'text-sky',
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 blur-sm'
                )}
                style={{ transitionDelay: `${line.delay + 600}ms` }}
              >
                {line.text}
              </span>
            ))}
          </blockquote>
        </div>

        {/* Bottom mark */}
        <div
          className={clsx(
            'flex justify-center mt-16 lg:mt-20 transition-all duration-700',
            visible ? 'opacity-60' : 'opacity-0'
          )}
          style={{ transitionDelay: '1700ms' }}
        >
          <div className="font-sans text-[10px] uppercase tracking-eyebrow text-bone/50">
            ◆ ◆ ◆
          </div>
        </div>
      </div>
    </section>
  );
}
