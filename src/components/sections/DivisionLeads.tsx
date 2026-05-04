import Image from 'next/image';
import Link from 'next/link';
import { clsx } from 'clsx';
import type { DivisionLead } from '@/content/divisions';
import { getFamilyMember } from '@/content/about';

interface DivisionLeadsProps {
  leads: DivisionLead[];
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
 * Each lead: 56px circular portrait (or monogram if no photo) + name + per-division role.
 * The role text comes from the division's own leads entry, not the member's general
 * board role — so a person can show as "Operational Director" on one division and
 * "Hospitality Director" on another.
 *
 * Click a lead → goes to /about (anchored to the family grid).
 */
export function DivisionLeads({
  leads,
  theme = 'light',
  label = 'Led by',
  align = 'left',
}: DivisionLeadsProps) {
  const resolved = leads
    .map((lead) => {
      const member = getFamilyMember(lead.id);
      return member ? { member, role: lead.role } : null;
    })
    .filter((entry): entry is { member: NonNullable<ReturnType<typeof getFamilyMember>>; role: string } => entry !== null);

  if (resolved.length === 0) return null;

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
        {resolved.map(({ member, role }) => (
          <Link
            key={member.id}
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
              {member.portrait ? (
                <Image
                  src={member.portrait}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              ) : (
                <Monogram name={member.name} isDark={isDark} />
              )}
            </div>

            {/* Name + per-division role */}
            <div className="leading-tight">
              <div
                className={clsx(
                  'font-display text-base lg:text-lg',
                  isDark ? 'text-bone' : 'text-navy'
                )}
              >
                {member.name.split(' ')[0]}
              </div>
              <div
                className={clsx(
                  'font-sans text-[9px] uppercase tracking-tag mt-0.5',
                  isDark ? 'text-olive-glow/80' : 'text-ochre-deep'
                )}
              >
                {role}
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
