import Image from 'next/image';
import Link from 'next/link';
import { clsx } from 'clsx';
import type { FamilyMemberId } from '@/content/divisions';
import { getFamilyMember } from '@/content/about';

interface DivisionLeadsProps {
  leads: FamilyMemberId[];
  /** Visual theme — adjusts colors against light or dark grounds */
  theme?: 'light' | 'dark';
  /** Optional eyebrow label, e.g., 'Led by' (default), 'A note from', etc. */
  label?: string;
  /** Center vs. left alignment */
  align?: 'left' | 'center';
}

/**
 * Renders a small horizontal row of family members who lead a division.
 * Used near the top of each division subpage.
 *
 * Each lead: 56px circular portrait (or monogram if no photo) + name + division role.
 * Click a lead → goes to /about (anchored to the family grid).
 *
 * Themes: 'light' reads on cream/bone grounds (navy/ochre type); 'dark' reads on
 * navy grounds (bone/olive-glow type).
 */
export function DivisionLeads({
  leads,
  theme = 'light',
  label = 'Led by',
  align = 'left',
}: DivisionLeadsProps) {
  const members = leads.map(getFamilyMember).filter((m) => m !== undefined);
  if (members.length === 0) return null;

  const isDark = theme === 'dark';

  return (
    <div
      className={clsx(
        'flex items-center gap-5 lg:gap-7 flex-wrap',
        align === 'center' && 'justify-center'
      )}
    >
      <div
        className={clsx(
          'font-sans text-[10px] uppercase tracking-eyebrow',
          isDark ? 'text-bone/55' : 'text-navy/55'
        )}
      >
        {label}
      </div>

      <div className="flex items-center gap-4 lg:gap-5">
        {members.map((m) => (
          <Link
            key={m!.id}
            href="/about#family"
            className="group flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            {/* Avatar */}
            <div
              className={clsx(
                'relative w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden flex-shrink-0',
                isDark ? 'ring-1 ring-bone/20' : 'ring-1 ring-navy/15'
              )}
            >
              {m!.portrait ? (
                <Image
                  src={m!.portrait}
                  alt={m!.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              ) : (
                <Monogram name={m!.name} isDark={isDark} />
              )}
            </div>

            {/* Name */}
            <div className="leading-tight">
              <div
                className={clsx(
                  'font-display text-base lg:text-lg',
                  isDark ? 'text-bone' : 'text-navy'
                )}
              >
                {m!.name.split(' ')[0]}
              </div>
              <div
                className={clsx(
                  'font-sans text-[9px] uppercase tracking-tag mt-0.5',
                  isDark ? 'text-olive-glow/80' : 'text-ochre-deep'
                )}
              >
                {firstWord(m!.role)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Tiny monogram avatar fallback for members without a portrait.
 */
function Monogram({ name, isDark }: { name: string; isDark: boolean }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase() ?? '')
    .join('');
  return (
    <div
      className={clsx(
        'absolute inset-0 flex items-center justify-center font-display italic',
        isDark
          ? 'bg-navy-deep text-olive-glow'
          : 'bg-cream text-ochre-deep'
      )}
    >
      <span className="text-base lg:text-lg">{initials}</span>
    </div>
  );
}

/**
 * Pull the first word of the role string for the small caption.
 * "Founder & Chairman" -> "Founder"
 * "Artist · The Easel" -> "Artist"
 * "Partner · The Workshop & The Collection" -> "Partner"
 */
function firstWord(role: string): string {
  const cleaned = role.split('·')[0]?.split('&')[0]?.trim() ?? role;
  return cleaned.split(' ')[0] ?? role;
}
