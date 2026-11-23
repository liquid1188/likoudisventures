'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { Wordmark } from '@/components/brand/Wordmark';
import { nav } from '@/content/site';

/**
 * Site navigation: The Ventures, The Family, and Get in Touch.
 * Transparent over the navy hero; solid navy once the page scrolls.
 */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav
      aria-label="Main"
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300 text-bone',
        scrolled || open ? 'bg-navy/95 backdrop-blur-md border-b border-bone/10' : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="container-tight flex items-center justify-between py-4 lg:py-5">
        <Wordmark size="md" />

        <div className="hidden md:flex items-center gap-8">
          {nav.primary.map((item) => (
            <Link key={item.href} href={item.href} className="font-sans text-[14px] font-medium tracking-[0.04em] text-bone/90 hover:text-olive-glow transition-colors py-2">
              {item.label}
            </Link>
          ))}
          <Link href={nav.cta.href} className="btn-olive-on-dark">
            {nav.cta.label}
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
            {open ? (
              <path d="M6 6L20 20M6 20L20 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M4 8h18M4 13h18M4 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div id="mobile-menu" className={clsx('md:hidden overflow-hidden transition-[max-height] duration-300', open ? 'max-h-[400px]' : 'max-h-0')}>
        <div className="container-tight pb-6 pt-2 flex flex-col">
          {nav.primary.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="font-sans text-base text-bone py-3 border-b border-bone/10">
              {item.label}
            </Link>
          ))}
          <Link href={nav.cta.href} onClick={() => setOpen(false)} className="btn-olive-on-dark mt-5 w-full">
            {nav.cta.label}
          </Link>
        </div>
      </div>
    </nav>
  );
}
