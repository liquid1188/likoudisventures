'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

interface WordRevealProps {
  text: string;
  /** Optional inline content to highlight as italic — will be matched and styled */
  italicMatch?: string;
  className?: string;
  staggerMs?: number;
  initialDelayMs?: number;
}

/**
 * Splits text into individual words and reveals each one with a stagger delay.
 * If italicMatch is given, that substring is wrapped in <em>.
 */
export function WordReveal({
  text,
  italicMatch,
  className,
  staggerMs = 80,
  initialDelayMs = 200,
}: WordRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);

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
            setTimeout(() => el.classList.add('is-visible'), initialDelayMs);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [initialDelayMs]);

  // Split into words while preserving the italicMatch
  const renderContent = (): ReactNode[] => {
    if (!italicMatch) {
      return text.split(' ').map((word, i) => (
        <span key={i} style={{ transitionDelay: `${i * staggerMs}ms` }}>
          {word}
          {i < text.split(' ').length - 1 ? '\u00A0' : ''}
        </span>
      ));
    }

    const matchIndex = text.indexOf(italicMatch);
    if (matchIndex === -1) {
      return text.split(' ').map((word, i) => (
        <span key={i} style={{ transitionDelay: `${i * staggerMs}ms` }}>
          {word}
          {i < text.split(' ').length - 1 ? '\u00A0' : ''}
        </span>
      ));
    }

    const before = text.slice(0, matchIndex).trim();
    const after = text.slice(matchIndex + italicMatch.length).trim();
    const beforeWords = before ? before.split(' ') : [];
    const matchWords = italicMatch.split(' ');
    const afterWords = after ? after.split(' ') : [];

    let idx = 0;
    const out: ReactNode[] = [];

    beforeWords.forEach((word, i) => {
      out.push(
        <span key={`b-${i}`} style={{ transitionDelay: `${idx * staggerMs}ms` }}>
          {word}
          {'\u00A0'}
        </span>
      );
      idx++;
    });

    matchWords.forEach((word, i) => {
      out.push(
        <span
          key={`m-${i}`}
          className="italic text-sky"
          style={{ transitionDelay: `${idx * staggerMs}ms` }}
        >
          {word}
          {i < matchWords.length - 1 || afterWords.length > 0 ? '\u00A0' : ''}
        </span>
      );
      idx++;
    });

    afterWords.forEach((word, i) => {
      out.push(
        <span key={`a-${i}`} style={{ transitionDelay: `${idx * staggerMs}ms` }}>
          {word}
          {i < afterWords.length - 1 ? '\u00A0' : ''}
        </span>
      );
      idx++;
    });

    return out;
  };

  return (
    <span ref={ref} className={clsx('word-reveal inline-block', className)}>
      {renderContent()}
    </span>
  );
}
