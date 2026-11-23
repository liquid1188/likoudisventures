'use client';

import { useState } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { divisions } from '@/content/divisions';

interface OliveBranchInteractiveProps {
  theme?: 'on-navy' | 'on-cream';
}

/**
 * The interactive olive branch, the homepage centerpiece.
 *
 * Five olives, one per venture, in the order of `divisions`. The three
 * established ventures are full, mature olives. The two developing ventures
 * are slightly smaller and lighter, with a fine outline, and carry a status
 * line in text beneath their names (so color is never the only signal).
 *
 * Every olive is a real link: one click or one tap goes to the venture page.
 * Hover and keyboard focus both reveal the same short description.
 * The branch draws itself once with CSS (no JavaScript needed to see it),
 * and the reduced-motion rule in globals.css switches the animation off.
 */
export function OliveBranchInteractive({ theme = 'on-navy' }: OliveBranchInteractiveProps) {
  const [shownIdx, setShownIdx] = useState<number | null>(null);
  const isOnNavy = theme === 'on-navy';

  const branchColor = isOnNavy ? '#A6B594' : '#5C7251';
  const matureFill = isOnNavy ? '#8FA67D' : '#5C7251';
  const youngFill = isOnNavy ? '#C9D7B8' : '#B5C4A2';
  const youngStroke = isOnNavy ? '#8FA67D' : '#5C7251';
  const activeFill = isOnNavy ? '#FAF6EC' : '#0E1B2C';
  const stemColor = isOnNavy ? '#7A8B5F' : '#3F5236';
  const leafFill = isOnNavy ? '#B5C4A2' : '#7A8B5F';
  const leafVein = isOnNavy ? '#7A8B5F' : '#5C7251';
  const textColor = isOnNavy ? '#FAF6EC' : '#0E1B2C';
  const statusColor = isOnNavy ? '#C9D7B8' : '#5C7251';

  // Quadratic arc, symmetric about x = 600
  const P0 = { x: 80, y: 250 };
  const P1 = { x: 600, y: 130 };
  const P2 = { x: 1120, y: 250 };
  const sample = (t: number) => {
    const u = 1 - t;
    return {
      x: u * u * P0.x + 2 * u * t * P1.x + t * t * P2.x,
      y: u * u * P0.y + 2 * u * t * P1.y + t * t * P2.y,
    };
  };

  const oliveTs = [0.1, 0.3, 0.5, 0.7, 0.9];
  const STEM = 32;
  const LEAF = 56;
  const nodes = oliveTs.map((t) => {
    const b = sample(t);
    return { branchX: b.x, branchY: b.y, x: b.x, y: b.y + STEM };
  });

  const shown = shownIdx !== null ? divisions[shownIdx] : null;

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 60 1200 360"
        className="w-full h-auto select-none olive-branch"
        style={{ overflow: 'visible' }}
        role="group"
        aria-label="The five Likoudis Ventures, arranged on an olive branch"
      >
        <path
          className="olive-branch-draw"
          d={`M ${P0.x} ${P0.y} Q ${P1.x} ${P1.y} ${P2.x} ${P2.y}`}
          stroke={branchColor}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <path className="olive-fade" style={{ animationDelay: '1.2s' }} d={`M ${P0.x} ${P0.y} q -22 -4, -32 8`} stroke={branchColor} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path className="olive-fade" style={{ animationDelay: '1.2s' }} d={`M ${P2.x} ${P2.y} q 22 -4, 32 8`} stroke={branchColor} strokeWidth="3.5" fill="none" strokeLinecap="round" />

        {nodes.map((node, i) => {
          const d = divisions[i];
          if (!d) return null;
          const developing = d.status === 'developing';
          const active = shownIdx === i;
          const delay = 0.7 + i * 0.13;
          const lean = i < 2 ? -1 : i > 2 ? 1 : 0;
          const rx = (developing ? 21 : 26) + (active ? 3 : 0);
          const ry = (developing ? 29 : 35) + (active ? 4 : 0);

          return (
            <Link
              key={d.slug}
              href={`/divisions/${d.slug}`}
              aria-label={`${d.name}: ${d.label}${d.statusNote ? `. ${d.statusNote}` : ''}`}
              className="olive-link"
              onMouseEnter={() => setShownIdx(i)}
              onMouseLeave={() => setShownIdx(null)}
              onFocus={() => setShownIdx(i)}
              onBlur={() => setShownIdx(null)}
            >
              <g>
                {/* Large invisible hit target */}
                <rect x={node.x - 70} y={node.branchY - 40} width="140" height="230" fill="transparent" />

                {/* Focus ring for keyboard users */}
                <circle className="olive-focus" cx={node.x} cy={node.y} r="52" fill="none" stroke={isOnNavy ? '#C8A24A' : '#A6822E'} strokeWidth="3" />

                <circle cx={node.x} cy={node.y} r="58" fill={matureFill} opacity={active ? 0.16 : 0} style={{ transition: 'opacity 0.3s ease-out' }} />

                <g className="olive-fade" style={{ animationDelay: `${delay - 0.1}s` }}>
                  <Leaf baseX={node.branchX} baseY={node.branchY} tipX={node.branchX + lean * 0.55 * LEAF} tipY={node.branchY - 0.85 * LEAF} fill={leafFill} vein={leafVein} />
                  <Leaf baseX={node.branchX} baseY={node.branchY} tipX={node.branchX - lean * 0.4 * LEAF} tipY={node.branchY + 0.6 * LEAF} fill={leafFill} vein={leafVein} />
                  <line x1={node.branchX} y1={node.branchY} x2={node.x} y2={node.y - ry + 6} stroke={stemColor} strokeWidth="2.5" strokeLinecap="round" opacity={0.85} />
                </g>

                <g className="olive-grow" style={{ animationDelay: `${delay}s`, transformOrigin: `${node.x}px ${node.y}px` }}>
                  <ellipse
                    cx={node.x}
                    cy={node.y}
                    rx={rx}
                    ry={ry}
                    fill={active ? activeFill : developing ? youngFill : matureFill}
                    fillOpacity={developing && !active ? 0.55 : 1}
                    stroke={developing ? youngStroke : 'none'}
                    strokeWidth={developing ? 1.5 : 0}
                    style={{ transition: 'rx 0.3s ease-out, ry 0.3s ease-out, fill 0.3s ease-out' }}
                  />
                  <ellipse cx={node.x - 7} cy={node.y - 11} rx="4.5" ry="8" fill="white" opacity={developing ? 0.3 : 0.25} transform={`rotate(-15 ${node.x - 7} ${node.y - 11})`} />
                </g>

                {/* Always-visible name (desktop and tablet; phones use the list below) */}
                <text className="hidden sm:inline" x={node.x} y={node.y + 72} textAnchor="middle" fontSize="19" fill={textColor} fontFamily="var(--font-fraunces), serif" opacity={active ? 1 : 0.9}>
                  {d.name}
                </text>
                {developing && d.statusNote && (
                  <text className="hidden sm:inline" x={node.x} y={node.y + 97} textAnchor="middle" fontSize="14" fill={statusColor} fontFamily="var(--font-inter), sans-serif" fontStyle="italic">
                    {d.statusNote}
                  </text>
                )}
              </g>
            </Link>
          );
        })}
      </svg>

      {/* Description of the hovered or focused olive */}
      <p className={clsx('hidden sm:block text-center font-sans text-[15px] mt-2 min-h-[1.6em] transition-opacity duration-300', isOnNavy ? 'text-bone/80' : 'text-navy/75', shown ? 'opacity-100' : 'opacity-0')} aria-live="polite">
        {shown ? `${shown.name}: ${shown.label}` : ' '}
      </p>

      {/* Phones: a compact list with large tap targets */}
      <ul className="sm:hidden mt-2 divide-y divide-bone/10 border-y border-bone/10">
        {divisions.map((d) => (
          <li key={d.slug}>
            <Link href={`/divisions/${d.slug}`} className="flex items-center justify-between gap-4 py-3.5 min-h-[56px]">
              <span className="flex items-center gap-3">
                <span aria-hidden className={clsx('inline-block rounded-full', d.status === 'developing' ? 'w-3 h-4 border border-olive bg-olive-glow/50' : 'w-3.5 h-[18px] bg-olive')} />
                <span>
                  <span className="block font-display text-lg text-bone leading-tight">{d.name}</span>
                  <span className="block font-sans text-sm text-bone/70">
                    {d.label}
                    {d.statusNote ? <em className="not-italic text-olive-glow"> · {d.statusNote}</em> : null}
                  </span>
                </span>
              </span>
              <span aria-hidden className="text-olive-glow">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Leaf({ baseX, baseY, tipX, tipY, fill, vein }: { baseX: number; baseY: number; tipX: number; tipY: number; fill: string; vein: string }) {
  const mx = (baseX + tipX) / 2;
  const my = (baseY + tipY) / 2;
  const a = Math.atan2(tipY - baseY, tipX - baseX) + Math.PI / 2;
  const w = 11;
  return (
    <g>
      <path d={`M ${baseX} ${baseY} Q ${mx + Math.cos(a) * w} ${my + Math.sin(a) * w}, ${tipX} ${tipY} Q ${mx - Math.cos(a) * w} ${my - Math.sin(a) * w}, ${baseX} ${baseY} Z`} fill={fill} stroke={vein} strokeWidth="0.6" strokeLinejoin="round" />
      <line x1={baseX} y1={baseY} x2={tipX} y2={tipY} stroke={vein} strokeWidth="0.8" opacity="0.55" strokeLinecap="round" />
    </g>
  );
}
