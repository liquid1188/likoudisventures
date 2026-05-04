'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { divisions } from '@/content/divisions';
import { clsx } from 'clsx';

interface OliveBranchInteractiveProps {
  theme?: 'on-navy' | 'on-cream';
  animate?: boolean;
}

/**
 * The interactive olive branch — homepage centerpiece.
 *
 * DESIGN BRIEF
 *
 * This shares one visual vocabulary with the static OliveBranchMark used in
 * nav and footer. The mark establishes the language; this is the
 * mark-at-monumental-scale, with each olive made a tap target leading to a
 * division.
 *
 * Shared anatomy:
 *   - One graceful arc as the branch
 *   - Six olive nodes evenly spaced along the arc
 *   - At each node: a pair of mirrored lanceolate leaves (symmetric across
 *     the branch axis), and a single olive hanging just below
 *   - Single fill color (theme-resolved). No two-tone shading, no shadow
 *     olives, no calyx detail, no filler leaves, no annual-ring flourish.
 *     Botanical accuracy was actively reduced to make the mark read as a
 *     mark.
 *
 * Differences from the static mark:
 *   - Larger scale (viewBox 1200×560 vs 70×50)
 *   - Olives are tap targets with hover halos, scale-up on hover, color
 *     swap on hover, division name reveal on hover
 *   - Roman numeral always shown beneath each olive
 *   - Branch and olives animate in on mount (branch draws left to right;
 *     olives drop in sequence with stagger)
 */
export function OliveBranchInteractive({
  theme = 'on-navy',
  animate = true,
}: OliveBranchInteractiveProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!animate) {
      setIsMounted(true);
      return;
    }
    const t = setTimeout(() => setIsMounted(true), 80);
    return () => clearTimeout(t);
  }, [animate]);

  const isOnNavy = theme === 'on-navy';

  // Single theme-resolved color for the whole figure. The mark is
  // monochromatic by intent; the only color shifts are during hover, where
  // an olive briefly swaps to a contrasting tone to signal interactivity.
  const figureColor = isOnNavy ? '#C9D7B8' : '#5C7251';
  const oliveHoverFill = isOnNavy ? '#FAF6EC' : '#0E1B2C';
  const oliveHoverHalo = isOnNavy ? '#8FA67D' : '#5C7251';
  const numeralColor = isOnNavy ? '#C8A24A' : '#8E6420';
  const labelTextColor = isOnNavy ? 'text-bone' : 'text-navy';
  const labelGreekColor = isOnNavy ? 'text-ochre' : 'text-ochre-deep';
  const labelTaglineColor = isOnNavy ? 'text-bone/60' : 'text-navy/60';

  // Branch: a clean quadratic arc from lower-left to right, apex slightly
  // past midpoint. Same shape language as the static mark, scaled to the
  // 1200×560 viewBox.
  const P0 = { x: 80, y: 360 };
  const P1 = { x: 600, y: 140 };
  const P2 = { x: 1120, y: 240 };

  function sampleBezier(t: number) {
    const u = 1 - t;
    const x = u * u * P0.x + 2 * u * t * P1.x + t * t * P2.x;
    const y = u * u * P0.y + 2 * u * t * P1.y + t * t * P2.y;
    const dx = 2 * u * (P1.x - P0.x) + 2 * t * (P2.x - P1.x);
    const dy = 2 * u * (P1.y - P0.y) + 2 * t * (P2.y - P1.y);
    return { x, y, tangent: Math.atan2(dy, dx) };
  }

  // Six evenly-spaced olive nodes along the branch.
  const nodeTs = [0.12, 0.28, 0.44, 0.6, 0.76, 0.92];

  // Geometry constants. Tuned so leaves at each node are clearly visible
  // and the olive is well below the branch with a visible stem.
  const LEAF_LENGTH = 95;
  const LEAF_HALF_WIDTH = 22;
  const LEAF_FORWARD_LEAN = 0.55; // radians of lean toward the branch tip
  const OLIVE_RX = 22;
  const OLIVE_RY = 30;
  const OLIVE_DROP = 56; // distance the olive hangs below the branch node

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 1200 560"
        className="w-full h-auto select-none"
        style={{
          filter: isOnNavy
            ? 'drop-shadow(0 8px 32px rgba(143, 184, 206, 0.18))'
            : 'drop-shadow(0 4px 16px rgba(14, 27, 44, 0.08))',
          overflow: 'visible',
        }}
        role="group"
        aria-label="Six divisions of Likoudis Ventures, arranged on an olive branch"
      >
        {/* The branch — one clean stroked arc, drawn in left-to-right */}
        <path
          d={`M ${P0.x} ${P0.y} Q ${P1.x} ${P1.y}, ${P2.x} ${P2.y}`}
          stroke={figureColor}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          opacity={0.95}
          style={{
            strokeDasharray: 1500,
            strokeDashoffset: isMounted ? 0 : 1500,
            transition: 'stroke-dashoffset 1.8s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        />

        {/* Six olive groups — each is a Link to a division */}
        {nodeTs.map((t, i) => {
          const division = divisions[i];
          if (!division) return null;
          const isHovered = hoveredIdx === i;
          const growDelay = 0.6 + i * 0.13;

          const node = sampleBezier(t);
          const perp = node.tangent + Math.PI / 2;

          // Mirror pair of lanceolate leaves at this node
          const upperAngle = node.tangent - Math.PI / 2 + LEAF_FORWARD_LEAN;
          const lowerAngle = node.tangent + Math.PI / 2 - LEAF_FORWARD_LEAN;
          const upperTip = {
            x: node.x + Math.cos(upperAngle) * LEAF_LENGTH,
            y: node.y + Math.sin(upperAngle) * LEAF_LENGTH,
          };
          const lowerTip = {
            x: node.x + Math.cos(lowerAngle) * LEAF_LENGTH,
            y: node.y + Math.sin(lowerAngle) * LEAF_LENGTH,
          };

          // Olive position
          const oliveCx = node.x + Math.cos(perp) * OLIVE_DROP;
          const oliveCy = node.y + Math.sin(perp) * OLIVE_DROP;
          const oliveAngleDeg = (perp * 180) / Math.PI - 90;

          return (
            <Link
              key={division.slug}
              href={`/divisions/${division.slug}`}
              aria-label={`${division.name} — ${division.tagline}`}
            >
              <g
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                onFocus={() => setHoveredIdx(i)}
                onBlur={() => setHoveredIdx(null)}
                tabIndex={0}
                style={{ cursor: 'pointer', outline: 'none' }}
                className="group"
              >
                {/* Generous invisible hit target around the whole node */}
                <circle cx={oliveCx} cy={oliveCy} r="60" fill="transparent" />

                {/* Hover halo */}
                <circle
                  cx={oliveCx}
                  cy={oliveCy}
                  r={isHovered ? 60 : 42}
                  fill={oliveHoverHalo}
                  opacity={isHovered ? 0.16 : 0}
                  style={{
                    transition:
                      'r 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out',
                  }}
                />

                {/* Mirror pair of leaves */}
                <g
                  style={{
                    opacity: isMounted ? 1 : 0,
                    transition: `opacity 0.7s ease-out ${growDelay - 0.1}s, transform 0.4s ease-out`,
                    transformOrigin: `${node.x}px ${node.y}px`,
                    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                  }}
                >
                  <Lanceolate
                    baseX={node.x}
                    baseY={node.y}
                    tipX={upperTip.x}
                    tipY={upperTip.y}
                    halfWidth={LEAF_HALF_WIDTH}
                    fill={figureColor}
                  />
                  <Lanceolate
                    baseX={node.x}
                    baseY={node.y}
                    tipX={lowerTip.x}
                    tipY={lowerTip.y}
                    halfWidth={LEAF_HALF_WIDTH}
                    fill={figureColor}
                  />
                </g>

                {/* Olive stem */}
                <line
                  x1={node.x}
                  y1={node.y}
                  x2={oliveCx}
                  y2={oliveCy}
                  stroke={figureColor}
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity={0.9}
                  style={{
                    opacity: isMounted ? 0.9 : 0,
                    transition: `opacity 0.5s ease-out ${growDelay - 0.05}s`,
                  }}
                />

                {/* Olive */}
                <ellipse
                  cx={oliveCx}
                  cy={oliveCy}
                  rx={isHovered ? OLIVE_RX + 4 : OLIVE_RX}
                  ry={isHovered ? OLIVE_RY + 5 : OLIVE_RY}
                  fill={isHovered ? oliveHoverFill : figureColor}
                  transform={`rotate(${oliveAngleDeg} ${oliveCx} ${oliveCy})`}
                  style={{
                    transition:
                      'rx 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), ry 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), fill 0.4s ease-out, opacity 0.7s ease-out',
                    opacity: isMounted ? 1 : 0,
                    animation: isMounted
                      ? `oliveGrow 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) ${growDelay}s backwards`
                      : 'none',
                    transformOrigin: `${oliveCx}px ${oliveCy}px`,
                  }}
                />

                {/* Roman numeral — always shown beneath the olive */}
                <text
                  x={oliveCx}
                  y={oliveCy + 60}
                  textAnchor="middle"
                  fontSize="22"
                  fontStyle="italic"
                  fill={numeralColor}
                  fontFamily="var(--font-cormorant), Georgia, serif"
                  opacity={isHovered ? 1 : 0.85}
                  style={{
                    transition: 'opacity 0.4s ease-out',
                    pointerEvents: 'none',
                  }}
                >
                  {division.number}
                </text>

                {/* Division name — only shown on hover */}
                <text
                  x={oliveCx}
                  y={oliveCy + 84}
                  textAnchor="middle"
                  fontSize="12"
                  fill={isOnNavy ? '#FAF6EC' : '#0E1B2C'}
                  fontFamily="var(--font-inter), sans-serif"
                  letterSpacing="0.18em"
                  opacity={isHovered ? 0.9 : 0}
                  style={{ transition: 'opacity 0.4s ease-out', pointerEvents: 'none' }}
                >
                  {division.name.toUpperCase()}
                </text>
              </g>
            </Link>
          );
        })}
      </svg>

      {/* Tagline panel beneath the branch (desktop hover state) */}
      <div
        className="hidden md:block absolute left-0 right-0 -bottom-2 lg:bottom-0 pointer-events-none"
        aria-live="polite"
      >
        <div
          className={clsx(
            'transition-all duration-500 text-center',
            hoveredIdx !== null ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
        >
          {hoveredIdx !== null && divisions[hoveredIdx] && (
            <div className={clsx('font-serif italic text-base lg:text-lg', labelGreekColor)}>
              {divisions[hoveredIdx].greek}
              <span className={clsx('ml-3', labelTaglineColor)}>
                {divisions[hoveredIdx].tagline}
              </span>
            </div>
          )}
        </div>
        <div
          className={clsx(
            'transition-all duration-500 text-center mt-1',
            hoveredIdx === null && isMounted ? 'opacity-60' : 'opacity-0'
          )}
        >
          <span
            className={clsx(
              'font-sans text-[10px] uppercase tracking-eyebrow',
              labelTextColor
            )}
          >
            Hover an olive · six divisions
          </span>
        </div>
      </div>

      {/* Mobile: explicit grid of all six divisions as tap targets */}
      <div className="md:hidden mt-4 grid grid-cols-3 gap-2 px-2">
        {divisions.map((d) => (
          <Link
            key={d.slug}
            href={`/divisions/${d.slug}`}
            className={clsx(
              'block text-center py-3 px-1 border transition-colors',
              isOnNavy
                ? 'border-bone/15 active:border-ochre active:bg-bone/5'
                : 'border-navy/15 active:border-ochre active:bg-navy/5'
            )}
          >
            <div
              className={clsx(
                'font-serif italic text-[11px]',
                isOnNavy ? 'text-ochre' : 'text-ochre-deep'
              )}
            >
              {d.number}.
            </div>
            <div className={clsx('font-display text-sm leading-tight mt-0.5', labelTextColor)}>
              {d.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Lanceolate (lance-shaped) leaf — single solid fill, no central vein, no
 * underside shading. The shared leaf shape used by both the static mark
 * and this interactive version.
 */
interface LanceolateProps {
  baseX: number;
  baseY: number;
  tipX: number;
  tipY: number;
  halfWidth: number;
  fill: string;
}

function Lanceolate({ baseX, baseY, tipX, tipY, halfWidth, fill }: LanceolateProps) {
  const midX = (baseX + tipX) / 2;
  const midY = (baseY + tipY) / 2;
  const angleRad = Math.atan2(tipY - baseY, tipX - baseX);
  const perp = angleRad + Math.PI / 2;
  const bx1 = midX + Math.cos(perp) * halfWidth;
  const by1 = midY + Math.sin(perp) * halfWidth;
  const bx2 = midX - Math.cos(perp) * halfWidth;
  const by2 = midY - Math.sin(perp) * halfWidth;
  return (
    <path
      d={`M ${baseX.toFixed(1)} ${baseY.toFixed(1)} Q ${bx1.toFixed(1)} ${by1.toFixed(1)}, ${tipX.toFixed(1)} ${tipY.toFixed(1)} Q ${bx2.toFixed(1)} ${by2.toFixed(1)}, ${baseX.toFixed(1)} ${baseY.toFixed(1)} Z`}
      fill={fill}
    />
  );
}
