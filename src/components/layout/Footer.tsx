import Link from 'next/link';
import { Wordmark } from '@/components/brand/Wordmark';
import { NewsletterSignup } from '@/components/forms/NewsletterSignup';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';
import { site, footer } from '@/content/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ground-navy relative">
      {/* Top section */}
      <div className="container-tight relative z-10 py-20 lg:py-24">
        {/* Pre-footer marker */}
        <div className="flex items-center justify-center gap-5 mb-16 lg:mb-20">
          <span className="h-px flex-1 max-w-[200px] bg-bone/15" />
          <span className="text-olive-glow opacity-80">
            <OliveBranchMark size={32} />
          </span>
          <span className="h-px flex-1 max-w-[200px] bg-bone/15" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand + tagline + newsletter */}
          <div className="lg:col-span-5">
            <Wordmark size="lg" className="text-bone mb-5" />
            <p className="font-serif italic text-lg lg:text-xl leading-relaxed max-w-md mb-10 text-bone/75">
              Three brothers and two sisters, working under one name from {site.seat}.
            </p>
            <div className="max-w-md">
              <NewsletterSignup variant="footer" />
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10">
            {footer.columns.map((column) => (
              <div key={column.heading}>
                <h4 className="font-sans text-[10px] uppercase tracking-eyebrow text-ochre mb-5 font-medium">
                  {column.heading}
                </h4>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-serif text-base text-bone/70 hover:text-ochre hover:translate-x-0.5 inline-block transition-all duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="border-t border-bone/10 relative z-10">
        <div className="container-tight py-7 lg:py-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-[12px] tracking-tight text-bone/45">
            <div className="font-serif italic">
              © {year} {site.legalEntity}, doing business as {site.dba}.
              <span className="text-ochre ml-2 not-italic">{site.greekRootClassical}</span>
            </div>
            <div className="font-sans text-[10px] uppercase tracking-eyebrow">
              {site.separationDisclaimer}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
