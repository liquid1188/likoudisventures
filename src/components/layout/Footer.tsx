import Link from 'next/link';
import { Wordmark } from '@/components/brand/Wordmark';
import { NewsletterSignup } from '@/components/forms/NewsletterSignup';
import { site, footer } from '@/content/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-bone/70 border-t border-sky/10">
      {/* Main footer */}
      <div className="container-tight py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand + tagline + newsletter */}
          <div className="md:col-span-5">
            <Wordmark size="md" className="text-bone mb-5" />
            <p className="font-serif italic text-base leading-relaxed max-w-sm mb-8 text-bone/80">
              A family-held house of considered enterprises, headquartered in {site.seat}.
            </p>
            <div className="max-w-md">
              <NewsletterSignup variant="footer" />
            </div>
          </div>

          {/* Columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {footer.columns.map((column) => (
              <div key={column.heading}>
                <h4 className="text-[11px] uppercase tracking-eyebrow text-olive-glow font-medium mb-5">
                  {column.heading}
                </h4>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-serif text-base text-bone/70 hover:text-olive-glow transition-colors"
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
      <div className="container-tight border-t border-sky/10 py-7">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-[12px] tracking-tight text-bone/50">
          <div className="font-serif italic">
            © {year} {site.legalEntity}, doing business as {site.dba}.
            <span className="text-ochre ml-2 not-italic font-serif">{site.greekRootClassical}</span>
          </div>
          <div>{site.separationDisclaimer}</div>
        </div>
      </div>
    </footer>
  );
}
