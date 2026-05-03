'use client';

import { usePathname } from 'next/navigation';
import { Nav } from './Nav';
import { Footer } from './Footer';

/**
 * Conditionally renders the global Nav and Footer.
 * Hides them on /admin/* routes so the admin pages get a clean chrome-less surface.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin') ?? false;

  if (isAdmin) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
