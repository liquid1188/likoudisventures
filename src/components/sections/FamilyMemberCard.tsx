import Image from 'next/image';
import { clsx } from 'clsx';
import type { FamilyMember } from '@/content/about';

interface FamilyMemberCardProps {
  member: FamilyMember;
}

/**
 * Family member card. Renders either a real portrait (when `member.portrait` is set)
 * or an elegant monogram fallback in the brand register. The monogram uses the
 * member's initials in display serif on a paper-textured cream surface, surrounded
 * by a thin ochre frame.
 *
 * Layout: portrait on top (3:4 portrait orientation), name + role + bio below.
 * Hover lifts the card subtly.
 */
export function FamilyMemberCard({ member }: FamilyMemberCardProps) {
  const initials = member.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase() ?? '')
    .join('');

  return (
    <article className="group bg-bone overflow-hidden border-t-[3px] border-t-ochre transition-all duration-500 hover:-translate-y-1">
      {/* Portrait area (3:4) */}
      <div className="relative aspect-[3/4] bg-sky-light overflow-hidden">
        {member.portrait ? (
          <Image
            src={member.portrait}
            alt={`Portrait of ${member.name}`}
            fill
            className={clsx(
              'object-cover transition-transform duration-700 group-hover:scale-105',
              member.portraitFocus === 'center' && 'object-center',
              member.portraitFocus === 'top' && 'object-top',
              !member.portraitFocus && 'object-top'
            )}
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
          />
        ) : (
          <Monogram initials={initials} />
        )}

        {/* Subtle vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, transparent 60%, rgba(14, 27, 44, 0.06) 100%)',
          }}
        />
      </div>

      {/* Caption */}
      <div className="p-6 lg:p-7">
        <div className="font-display text-xl lg:text-2xl text-navy leading-tight mb-1">
          {member.name}
        </div>
        <div className="font-sans text-[10px] uppercase tracking-eyebrow text-ochre-deep mb-4">
          {member.role}
        </div>
        <p className="font-serif text-[15px] text-navy/85 leading-[1.55]">{member.bio}</p>

        {/* Personal site link, if any */}
        {member.siteUrl && member.siteLabel && (
          <div className="mt-4">
            <a
              href={member.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-serif italic text-sm text-ochre-deep hover:text-navy transition-colors"
            >
              <span>{member.siteLabel}</span>
              <span aria-hidden className="text-xs">↗</span>
            </a>
          </div>
        )}

        {/* Divisions tags */}
        {member.divisions.length > 0 && (
          <div className="mt-5 pt-4 border-t border-navy/10 flex flex-wrap gap-1.5">
            {member.divisions.map((d) => (
              <span
                key={d}
                className="font-sans text-[9px] uppercase tracking-tag text-navy/60 bg-cream px-2 py-1"
              >
                {d}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

interface MonogramProps {
  initials: string;
}

/**
 * Elegant monogram placeholder for members without a photograph.
 * Cream paper, large serif initials in ochre, thin double-rule frame.
 */
function Monogram({ initials }: MonogramProps) {
  return (
    <div
      className={clsx(
        'absolute inset-0 flex items-center justify-center',
        'bg-cream'
      )}
    >
      {/* Paper texture */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='m'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.05 0 0 0 0 0.05 0 0 0 0 0.05 0 0 0 0.04 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23m)'/%3E%3C/svg%3E\")",
          mixBlendMode: 'multiply',
        }}
      />

      {/* Double-rule frame */}
      <div className="absolute inset-5 border border-ochre/40" />
      <div className="absolute inset-7 border border-ochre/15" />

      {/* Olive sprig top */}
      <svg
        className="absolute top-8 left-1/2 -translate-x-1/2 text-ochre opacity-60"
        width="44"
        height="20"
        viewBox="0 0 44 20"
      >
        <path
          d="M 4 12 Q 22 4, 40 12"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="14" cy="10" rx="1.5" ry="2.2" fill="currentColor" transform="rotate(-15 14 10)" />
        <ellipse cx="22" cy="8" rx="1.5" ry="2.2" fill="currentColor" />
        <ellipse cx="30" cy="10" rx="1.5" ry="2.2" fill="currentColor" transform="rotate(15 30 10)" />
      </svg>

      {/* Initials */}
      <div className="font-display italic font-light text-ochre-deep" style={{ fontSize: 'clamp(64px, 9vw, 96px)' }}>
        {initials}
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-7 left-0 right-0 text-center font-serif italic text-xs text-ochre-deep/70">
        Likoudis · Ventures
      </div>
    </div>
  );
}
