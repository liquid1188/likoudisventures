'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Wordmark } from '@/components/brand/Wordmark';
import { nav } from '@/content/site';
import { clsx } from 'clsx';

interface NavProps {
  /** Initial theme — 'dark' for navy-hero pages, 'light' for cream/sky-start pages */
  theme?: 'dark' | 'light';
}

export function Nav({ theme = 'dark' }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isDark = theme === 'dark';

  const wrapperClass = clsx(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
    scrolled
      ? isDark
        ? 'bg-navy/85 backdrop-blur-md border-b border-olive-glow/15'
        : 'bg-bone/90 backdrop-blur-md border-b border-navy/10'
      : isDark
        ? 'bg-transparent border-b border-transparent'
        : 'bg-transparent border-b border-transparent'
  );

  const textClass = isDark ? 'text-bone' : 'text-navy';
  const accentClass = isDark ? 'text-sky' : 'text-ochre-deep';

  return (
    <nav className={wrapperClass}>
      <div className="container-tight flex items-center justify-between py-5 lg:py-6">
        <Wordmark size="md" className={textClass} />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {nav.primary.map((item) => (
            <NavLink key={item.href} href={item.href} className={textClass} accentClass={accentClass}>
              {item.label}
            </NavLink>
          ))}
          <Link
            href={nav.cta.href}
            className={
              isDark
                ? 'btn-ghost-bone'
                : 'inline-block px-7 py-3.5 bg-transparent text-olive-deep font-sans text-[11px] uppercase tracking-caps border border-olive-deep/50 transition-all duration-300 hover:border-olive-deep hover:bg-olive-deep hover:text-bone'
            }
          >
            {nav.cta.label}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={clsx('md:hidden p-1', textClass)}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            {mobileOpen ? (
              <path d="M6 6L20 20M6 20L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 8h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4 13h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-500 ease-out',
          mobileOpen ? 'max-h-[500px]' : 'max-h-0'
        )}
      >
        <div
          className={clsx(
            'border-t px-6 py-7',
            isDark ? 'bg-navy border-olive-glow/15' : 'bg-bone border-navy/10'
          )}
        >
          <div className="flex flex-col gap-5">
            {nav.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={clsx('font-sans text-[13px] uppercase tracking-eyebrow', textClass)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={nav.cta.href}
              onClick={() => setMobileOpen(false)}
              className={
                isDark
                  ? 'btn-ghost-bone w-fit mt-2'
                  : 'inline-block w-fit px-7 py-3.5 bg-transparent text-olive-deep font-sans text-[11px] uppercase tracking-caps border border-olive-deep/50 mt-2'
              }
            >
              {nav.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  className: string;
  accentClass: string;
  children: React.ReactNode;
}

function NavLink({ href, className, accentClass, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'group relative font-sans text-[12px] uppercase tracking-eyebrow transition-colors',
        className
      )}
    >
      {children}
      {/* Animated underline */}
      <span
        className={clsx(
          'absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100',
          accentClass.replace('text-', 'bg-')
        )}
        aria-hidden
      />
    </Link>
  );
}
