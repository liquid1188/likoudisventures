'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Wordmark } from '@/components/brand/Wordmark';
import { nav } from '@/content/site';

interface NavProps {
  /**
   * Color theme — "dark" for navy hero contexts, "light" for cream/sky contexts.
   * Defaults to "dark" since most pages start with a navy hero.
   */
  theme?: 'dark' | 'light';
}

export function Nav({ theme = 'dark' }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isDark = theme === 'dark';
  const bgClass = isDark
    ? 'bg-navy/95 backdrop-blur-sm border-b border-olive-glow/15'
    : 'bg-bone/95 backdrop-blur-sm border-b border-navy/10';
  const textClass = isDark ? 'text-bone' : 'text-navy';
  const linkHoverClass = isDark ? 'hover:text-sky' : 'hover:text-ochre-deep';

  return (
    <nav className={`sticky top-0 z-50 ${bgClass}`}>
      <div className="container-tight flex items-center justify-between py-5">
        <Wordmark size="md" className={textClass} />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9">
          {nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[12px] uppercase tracking-eyebrow ${textClass} ${linkHoverClass} transition-colors`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={nav.cta.href}
            className={
              isDark
                ? 'inline-block px-5 py-2.5 border border-olive-glow text-olive-glow text-[11px] uppercase tracking-caps transition-colors hover:bg-olive-glow hover:text-navy'
                : 'inline-block px-5 py-2.5 border border-navy text-navy text-[11px] uppercase tracking-caps transition-colors hover:bg-navy hover:text-bone'
            }
          >
            {nav.cta.label}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden ${textClass}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {mobileOpen ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className={`md:hidden border-t ${isDark ? 'border-olive-glow/15 bg-navy' : 'border-navy/10 bg-bone'} px-6 py-6`}>
          <div className="flex flex-col gap-5">
            {nav.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[13px] uppercase tracking-eyebrow ${textClass} ${linkHoverClass}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={nav.cta.href}
              onClick={() => setMobileOpen(false)}
              className={
                isDark
                  ? 'inline-block w-fit px-5 py-2.5 border border-olive-glow text-olive-glow text-[11px] uppercase tracking-caps mt-2'
                  : 'inline-block w-fit px-5 py-2.5 border border-navy text-navy text-[11px] uppercase tracking-caps mt-2'
              }
            >
              {nav.cta.label}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
