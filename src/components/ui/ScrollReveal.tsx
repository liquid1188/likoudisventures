'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li';
}

/**
 * A light fade as a block enters the viewport. Content is only hidden once
 * JavaScript has marked the page (html.js), so it never stays invisible.
 */
export function ScrollReveal({ children, delay = 0, className, as: Tag = 'div' }: ScrollRevealProps) {
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const RefAny = ref as any;
  return (
    <Tag ref={RefAny} className={clsx('scroll-reveal', className)}>
      {children}
    </Tag>
  );
}
