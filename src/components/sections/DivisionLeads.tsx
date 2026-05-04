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
  /** When true, the final lead in the array is rendered on its own row below
   *  the others — used for divisions like Workshop where the final entry is an
   *  advisor or secondary lead and the visual hierarchy should reflect that. */
  secondaryLast?: boolean;
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
  secondaryLast = false,
}: DivisionLeadsProps) {
  const resolved = leads
    .map((lead) => {
      const member = getFamilyMember(lead.id);
      return member ? { member, role: lead.role } : null;
    })
    .filter((entry): entry is { member: NonNullable<ReturnType<typeof getFamilyMember>>; role: string } => entry !== null);

  if (resolved.length === 0) return null;

  const isDark = theme === 'dark';

  // When secondaryLast is on (and there are 2+ leads), split the rendering:
  // primary leads on top row, the final lead on its own row below, both rows
  // sharing the same left edge. Otherwise, everything goes in one flex row.
  const useSplit = secondaryLast && resolved.length >= 2;
  const primaryLeads = useSplit ? resolved.slice(0, -1) : resolved;
  const secondaryLead = useSplit ? resolved[resolved.length - 1] : null;

  const renderLead = (entry: { member: NonNullable<ReturnType<typeof getFamilyMember>>; role: string }) => (
    <Link
      key={entry.member.id}
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
        {entry.member.portrait ? (
          <Image
            src={entry.member.portrait}
            alt={entry.member.name}
            fill
            className="object-cover"
            sizes="56px"
          />
        ) : (
          <Monogram name={entry.member.name} isDark={isDark} />
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
          {entry.member.name.split(' ')[0]}
        </div>
        <div
          className={clsx(
            'font-sans text-[9px] uppercase tracking-tag mt-0.5',
            isDark ? 'text-olive-glow/80' : 'text-ochre-deep'
          )}
        >
          {entry.role}
        </div>
      </div>
    </Link>
  );

  return (
    <div
      className={clsx(
        'flex items-start gap-5 lg:gap-7 flex-wrap',
        align === 'center' && 'justify-center'
      )}
    >
      <div
        className={clsx(
          'font-sans text-[10px] uppercase tracking-eyebrow pt-3.5 lg:pt-4',
          isDark ? 'text-bone/55' : 'text-navy/55'
        )}
      >
        {label}
      </div>

      {useSplit ? (
        /* Two-row stack: primaries on top, secondary on its own row below. */
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 lg:gap-5 flex-wrap gap-y-4">
            {primaryLeads.map(renderLead)}
          </div>
          {secondaryLead && (
            <div className="flex items-center gap-4 lg:gap-5 flex-wrap gap-y-4">
              {renderLead(secondaryLead)}
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-4 lg:gap-5 flex-wrap gap-y-4">
          {resolved.map(renderLead)}
        </div>
      )}
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
