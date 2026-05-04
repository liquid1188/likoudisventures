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
 * Design register: clean, symmetric, logo-quality. Not botanically accurate.
 * The static `OliveBranchMark` (nav, footer, divisions) is the simplified
 * version of THIS composition — same arc, same leaf grammar, same olive
 * grammar, fewer details. Both should read as the same olive branch at
 * different scales.
 *
 * Composition:
 *   - viewBox 1200 × 560.
 *   - Single graceful upward-curving arc from left edge to right edge.
 *     Symmetric about the vertical center axis (x=600).
 *   - Six olives evenly spaced along the arc.
 *   - Each olive has a matched pair of leaves: one growing up-and-out,
 *     one growing down-and-out, mirrored across the branch.
 *   - Olives are simple two-tone (body + highlight), not heavily shaded.
 *   - All animation, hover, and label behavior is preserved from the
 *     prior version.
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

  // Theme-resolved colors
  const branchColor = isOnNavy ? '#A6B594' : '#5C7251';
  const oliveFill = isOnNavy ? '#8FA67D' : '#5C7251';
  const oliveHoverFill = isOnNavy ? '#FAF6EC' : '#0E1B2C';
  const oliveStem = isOnNavy ? '#7A8B5F' : '#3F5236';
  const leafFill = isOnNavy ? '#B5C4A2' : '#7A8B5F';
  const leafVein = isOnNavy ? '#7A8B5F' : '#5C7251';
  const labelTextColor = isOnNavy ? 'text-bone' : 'text-navy';
  const labelGreekColor = isOnNavy ? 'text-ochre' : 'text-ochre-deep';
  const labelTaglineColor = isOnNavy ? 'text-bone/60' : 'text-navy/60';

  /**
   * Branch: single upward-curving arc, symmetric about x=600.
   * Quadratic bezier from (80, 280) → control (600, 160) → (1120, 280).
   *
   * Sampling and tangent helpers for placing olives and leaves on the curve.
   */
  const P0 = { x: 80, y: 280 };
  const P1 = { x: 600, y: 160 };
  const P2 = { x: 1120, y: 280 };

  function sampleBezier(t: number) {
    const u = 1 - t;
    const x = u * u * P0.x + 2 * u * t * P1.x + t * t * P2.x;
    const y = u * u * P0.y + 2 * u * t * P1.y + t * t * P2.y;
    const dx = 2 * u * (P1.x - P0.x) + 2 * t * (P2.x - P1.x);
    const dy = 2 * u * (P1.y - P0.y) + 2 * t * (P2.y - P1.y);
    return { x, y, tangent: Math.atan2(dy, dx) };
  }

  /**
   * Six olives evenly spaced. Symmetric: indices 0–5 mirror around the center
   * (t = 0.5). Each olive hangs straight down from the branch via a short stem.
   */
  const oliveTs = [0.1, 0.26, 0.42, 0.58, 0.74, 0.9];
  const STEM_LENGTH = 32;

  const oliveNodes = oliveTs.map((t) => {
    const onBranch = sampleBezier(t);
    // Hang straight down (regardless of branch tangent) for symmetric look
    const x = onBranch.x;
    const y = onBranch.y + STEM_LENGTH;
    return {
      branchX: onBranch.x,
      branchY: onBranch.y,
      tangent: onBranch.tangent,
      x,
      y,
    };
  });

  /**
   * Two leaves at each olive node. Growing up-and-out and down-and-out at
   * mirrored angles, attached to the branch (not the olive stem) at
   * roughly 30° above and below the perpendicular.
   *
   * For symmetry: leaves on olives in the left half (t < 0.5) lean leftward;
   * leaves on olives in the right half (t > 0.5) lean rightward. The
   * composition mirrors across the center.
   */
  const LEAF_LENGTH = 56;

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 1200 560"
        className="w-full h-auto select-none"
        style={{
          filter: isOnNavy
            ? 'drop-shadow(0 12px 36px rgba(143, 184, 206, 0.18))'
            : 'drop-shadow(0 6px 20px rgba(14, 27, 44, 0.1))',
          overflow: 'visible',
        }}
        role="group"
        aria-label="Six divisions of Likoudis Ventures, arranged on an olive branch"
      >
        {/* The branch — single graceful arc, symmetric about x=600 */}
        <path
          d={`M ${P0.x} ${P0.y} Q ${P1.x} ${P1.y} ${P2.x} ${P2.y}`}
          stroke={branchColor}
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

        {/* End flourishes — small symmetric curls at both ends */}
        <path
          d={`M ${P0.x} ${P0.y} q -22 -4, -32 8`}
          stroke={branchColor}
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          opacity={0.8}
          style={{
            opacity: isMounted ? 0.8 : 0,
            transition: 'opacity 0.6s ease-out 1.2s',
          }}
        />
        <path
          d={`M ${P2.x} ${P2.y} q 22 -4, 32 8`}
          stroke={branchColor}
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          opacity={0.8}
          style={{
            opacity: isMounted ? 0.8 : 0,
            transition: 'opacity 0.6s ease-out 1.2s',
          }}
        />

        {/* Six olive groups */}
        {oliveNodes.map((node, i) => {
          const division = divisions[i];
          if (!division) return null;
          const isHovered = hoveredIdx === i;
          const growDelay = 0.7 + i * 0.13;

          // Mirror leaf direction for left vs right half
          const leftHalf = i < 3;
          const leafLeanX = leftHalf ? -1 : 1;

          // Up-and-out leaf — growing above the branch
          const upLeafTipX = node.branchX + leafLeanX * 0.55 * LEAF_LENGTH;
          const upLeafTipY = node.branchY - 0.85 * LEAF_LENGTH;

          // Down-and-out leaf — growing below the branch (but above the olive)
          const downLeafTipX = node.branchX - leafLeanX * 0.4 * LEAF_LENGTH;
          const downLeafTipY = node.branchY + 0.6 * LEAF_LENGTH;

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
                {/* Generous invisible hit target */}
                <circle cx={node.x} cy={node.y} r="62" fill="transparent" />

                {/* Hover halo */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isHovered ? 70 : 50}
                  fill={oliveFill}
                  opacity={isHovered ? 0.16 : 0}
                  style={{
                    transition:
                      'r 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out',
                  }}
                />

                {/* Up-and-out leaf */}
                <g
                  style={{
                    opacity: isMounted ? 1 : 0,
                    transition: `opacity 0.7s ease-out ${growDelay - 0.1}s, transform 0.4s ease-out`,
                    transformOrigin: `${node.branchX}px ${node.branchY}px`,
                    transform: isHovered ? 'scale(1.18)' : 'scale(1)',
                  }}
                >
                  <Lanceolate
                    baseX={node.branchX}
                    baseY={node.branchY}
                    tipX={upLeafTipX}
                    tipY={upLeafTipY}
                    halfWidth={11}
                    fill={leafFill}
                    veinColor={leafVein}
                  />
                </g>

                {/* Down-and-out leaf */}
                <g
                  style={{
                    opacity: isMounted ? 1 : 0,
                    transition: `opacity 0.7s ease-out ${growDelay - 0.05}s, transform 0.4s ease-out`,
                    transformOrigin: `${node.branchX}px ${node.branchY}px`,
                    transform: isHovered ? 'scale(1.18)' : 'scale(1)',
                  }}
                >
                  <Lanceolate
                    baseX={node.branchX}
                    baseY={node.branchY}
                    tipX={downLeafTipX}
                    tipY={downLeafTipY}
                    halfWidth={11}
                    fill={leafFill}
                    veinColor={leafVein}
                  />
                </g>

                {/* Olive stem — short woody connector */}
                <line
                  x1={node.branchX}
                  y1={node.branchY}
                  x2={node.x}
                  y2={node.y - 26}
                  stroke={oliveStem}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity={0.85}
                  style={{
                    opacity: isMounted ? 0.85 : 0,
                    transition: `opacity 0.5s ease-out ${growDelay - 0.05}s`,
                  }}
                />

                {/* Olive — main body */}
                <ellipse
                  cx={node.x}
                  cy={node.y}
                  rx={isHovered ? 30 : 26}
                  ry={isHovered ? 40 : 35}
                  fill={isHovered ? oliveHoverFill : oliveFill}
                  style={{
                    transition:
                      'rx 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), ry 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), fill 0.4s ease-out, opacity 0.7s ease-out',
                    opacity: isMounted ? 1 : 0,
                    animation: isMounted
                      ? `oliveGrow 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) ${growDelay}s backwards`
                      : 'none',
                    transformOrigin: `${node.x}px ${node.y}px`,
                  }}
                />

                {/* Highlight — single soft catch on the upper left */}
                <ellipse
                  cx={node.x - 7}
                  cy={node.y - 12}
                  rx="5"
                  ry="9"
                  fill="white"
                  opacity={isHovered ? 0.4 : 0.25}
                  style={{
                    transition: 'opacity 0.4s ease-out',
                    pointerEvents: 'none',
                  }}
                  transform={`rotate(-15 ${node.x - 7} ${node.y - 12})`}
                />

                {/* Division name — below the olive, always visible */}
                <text
                  x={node.x}
                  y={node.y + 78}
                  textAnchor="middle"
                  fontSize="14"
                  fill={isOnNavy ? '#FAF6EC' : '#0E1B2C'}
                  fontFamily="var(--font-inter), sans-serif"
                  letterSpacing="0.18em"
                  opacity={isHovered ? 1 : 0.75}
                  style={{
                    transition: 'opacity 0.4s ease-out',
                    pointerEvents: 'none',
                  }}
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
            Hover over an olive
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
            <div className={clsx('font-display text-sm leading-tight', labelTextColor)}>
              {d.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Lanceolate (lance-shaped) leaf — pointed at base and tip, curved sides.
 * The shared leaf grammar between the interactive branch and the static
 * `OliveBranchMark`. Two-tone via stroked vein in a darker shade.
 */
interface LanceolateProps {
  baseX: number;
  baseY: number;
  tipX: number;
  tipY: number;
  halfWidth?: number;
  fill: string;
  veinColor: string;
}

function Lanceolate({
  baseX,
  baseY,
  tipX,
  tipY,
  halfWidth = 8,
  fill,
  veinColor,
}: LanceolateProps) {
  const midX = (baseX + tipX) / 2;
  const midY = (baseY + tipY) / 2;
  const angleRad = Math.atan2(tipY - baseY, tipX - baseX);
  const perpAngle = angleRad + Math.PI / 2;
  const bx1 = midX + Math.cos(perpAngle) * halfWidth;
  const by1 = midY + Math.sin(perpAngle) * halfWidth;
  const bx2 = midX - Math.cos(perpAngle) * halfWidth;
  const by2 = midY - Math.sin(perpAngle) * halfWidth;

  return (
    <g>
      <path
        d={`M ${baseX} ${baseY} Q ${bx1} ${by1}, ${tipX} ${tipY} Q ${bx2} ${by2}, ${baseX} ${baseY} Z`}
        fill={fill}
        stroke={veinColor}
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
      <line
        x1={baseX}
        y1={baseY}
        x2={tipX}
        y2={tipY}
        stroke={veinColor}
        strokeWidth="0.8"
        opacity="0.55"
        strokeLinecap="round"
      />
    </g>
  );
}
