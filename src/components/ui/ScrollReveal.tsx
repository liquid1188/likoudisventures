'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'fade-up' | 'blur';
  delay?: number;
  className?: string;
  /**
   * Threshold for triggering reveal — 0 = top of element enters viewport, 1 = fully in.
   * Default 0.15 = 15% visible.
   */
  threshold?: number;
  as?: 'div' | 'section' | 'article' | 'li';
}

export function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  className,
  threshold = 0.15,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('is-visible'), delay);
            obs.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, threshold]);

  const variantClass = variant === 'blur' ? 'scroll-reveal-blur' : 'scroll-reveal';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const RefAny = ref as any;

  return (
    <Tag ref={RefAny} className={clsx(variantClass, className)}>
      {children}
    </Tag>
  );
}
