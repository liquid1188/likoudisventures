import Link from 'next/link';
import { Wordmark } from '@/components/brand/Wordmark';
import { NewsletterSignup } from '@/components/forms/NewsletterSignup';
import { site, footer } from '@/content/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ground-navy">
      <div className="container-tight py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Wordmark size="lg" className="mb-4" />
            <p className="font-sans text-[15px] text-bone/70 max-w-sm mb-8">
              Based in Baltimore, with roots in Kefalonia and the Finger Lakes.
            </p>
            <div className="max-w-md">
              <NewsletterSignup variant="footer" />
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h2 className="font-sans text-[13px] font-medium tracking-[0.08em] uppercase text-olive-glow mb-4">The ventures</h2>
              <ul className="space-y-2">
                {footer.ventures.map((l) => (
                  <li key={l.href} className={'sub' in l && l.sub ? 'pl-4' : undefined}>
                    <Link href={l.href} className="font-sans text-[15px] text-bone/75 hover:text-bone transition-colors inline-block py-0.5">
                      {'sub' in l && l.sub ? <span aria-hidden className="text-bone/40 mr-1.5">↳</span> : null}
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-sans text-[13px] font-medium tracking-[0.08em] uppercase text-olive-glow mb-4">More</h2>
              <ul className="space-y-2">
                {footer.more.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="font-sans text-[15px] text-bone/75 hover:text-bone transition-colors inline-block py-0.5">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="font-sans text-[13px] font-medium tracking-[0.08em] uppercase text-olive-glow mb-4">Email</h2>
              <a href={`mailto:${site.email}`} className="font-sans text-[15px] text-bone/75 hover:text-bone transition-colors break-words">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="container-tight py-6 font-sans text-[13px] text-bone/55">
          © {year} {site.legalEntity}, doing business as {site.dba}.
        </div>
      </div>
    </footer>
  );
}
