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
 * Composition:
 *   - viewBox: 1200 × 520 (wide aspect for room above branch + below for label)
 *   - A single curved branch arcs gently across the canvas
 *   - Six olives sit ON the curve, evenly spaced along its length, hanging from short stems
 *   - Each olive has a leaf or two pointing up/away from the branch
 *   - Roman numerals appear below each olive as a permanent label
 *   - Hover/focus an olive: it grows, rotates slightly, leaf lifts, and a label panel
 *     appears below the branch with the division name + Greek + tagline
 *   - On mobile, hover doesn't apply: a 2×3 grid below the branch lists each
 *     division as a tap target
 *
 * Rendering rules:
 *   - All six olives are clearly visible and contained within the viewBox
 *   - Branch and olives use stroke + fill in currentColor or theme-resolved colors
 *   - Animation: branch draws in left-to-right, olives drop into place in sequence
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
  const branchColor = isOnNavy ? '#C9D7B8' : '#5E6E47'; // olive-glow on navy, olive-deep on cream
  const oliveFill = isOnNavy ? '#8FA67D' : '#5E6E47'; // medium olive
  const oliveHoverFill = isOnNavy ? '#FAF6EC' : '#0E1B2C'; // bone on navy, navy on cream
  const leafColor = isOnNavy ? '#B5C4A2' : '#7A8B5F';
  const numeralColor = isOnNavy ? '#C8A24A' : '#8E6420'; // ochre / ochre-deep
  const labelTextColor = isOnNavy ? 'text-bone' : 'text-navy';
  const labelGreekColor = isOnNavy ? 'text-ochre' : 'text-ochre-deep';
  const labelTaglineColor = isOnNavy ? 'text-bone/60' : 'text-navy/60';

  /**
   * Six olive positions, computed to sit ON the branch curve.
   * Branch curve: a single quadratic bezier from (80, 240) -> (1120, 240)
   * with control point (600, 80), giving a gentle upward arc.
   *
   * I sample the curve at six evenly-spaced t values and snap olives there.
   *
   * Quadratic bezier formula: B(t) = (1-t)²·P0 + 2(1-t)t·P1 + t²·P2
   *
   * P0 = (80, 240), P1 = (600, 80), P2 = (1120, 240)
   *
   * Tangent angle at each t determines the olive's natural rotation
   * (so the olive hangs perpendicular to the branch).
   */
  const olivePositions = [0.1, 0.26, 0.42, 0.58, 0.74, 0.9].map((t) => {
    const x = (1 - t) * (1 - t) * 80 + 2 * (1 - t) * t * 600 + t * t * 1120;
    const y = (1 - t) * (1 - t) * 240 + 2 * (1 - t) * t * 80 + t * t * 240;
    // Tangent: derivative of bezier
    const dx = 2 * (1 - t) * (600 - 80) + 2 * t * (1120 - 600);
    const dy = 2 * (1 - t) * (80 - 240) + 2 * t * (240 - 80);
    // Olive hangs DOWN from branch (perpendicular to tangent, pointing south-ish)
    const tangentAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
    // Olive rotation: perpendicular to tangent + 90 to point downward, then small variance
    const oliveAngle = tangentAngle + 90;
    return { branchX: x, branchY: y, oliveAngle, t };
  });

  // Olive sits at the end of a short stem hanging off the branch
  const STEM_LENGTH = 28;
  const oliveCenters = olivePositions.map((p) => {
    const rad = (p.oliveAngle * Math.PI) / 180;
    return {
      ...p,
      x: p.branchX + Math.cos(rad) * STEM_LENGTH,
      y: p.branchY + Math.sin(rad) * STEM_LENGTH,
    };
  });

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 1200 560"
        className="w-full h-auto select-none"
        style={{
          filter: isOnNavy
            ? 'drop-shadow(0 8px 32px rgba(143, 184, 206, 0.2))'
            : 'drop-shadow(0 4px 16px rgba(14, 27, 44, 0.08))',
          overflow: 'visible',
        }}
        role="group"
        aria-label="Six divisions of Likoudis Ventures, arranged on an olive branch"
      >
        {/* Branch */}
        <path
          d="M 80 240 Q 600 80 1120 240"
          stroke={branchColor}
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          opacity={0.9}
          style={{
            strokeDasharray: 1500,
            strokeDashoffset: isMounted ? 0 : 1500,
            transition: 'stroke-dashoffset 1.8s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        />

        {/* Branch tip — a slight curl at each end */}
        <path
          d="M 80 240 Q 60 230, 50 245"
          stroke={branchColor}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity={0.7}
          style={{ opacity: isMounted ? 0.7 : 0, transition: 'opacity 0.6s ease-out 1s' }}
        />
        <path
          d="M 1120 240 Q 1140 232, 1155 246"
          stroke={branchColor}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          style={{ opacity: isMounted ? 0.7 : 0, transition: 'opacity 0.6s ease-out 1s' }}
        />

        {/* Six olive groups */}
        {oliveCenters.map((pos, i) => {
          const division = divisions[i];
          if (!division) return null;
          const isHovered = hoveredIdx === i;
          const growDelay = 0.5 + i * 0.12;

          // Stem from branch attachment to olive
          const stemDx = pos.x - pos.branchX;
          const stemDy = pos.y - pos.branchY;

          // Leaf positions — on either side of the stem, near the top
          const stemMidX = pos.branchX + stemDx * 0.35;
          const stemMidY = pos.branchY + stemDy * 0.35;
          // Leaf direction perpendicular to stem
          const stemAngle = Math.atan2(stemDy, stemDx);
          const perpAngle = stemAngle - Math.PI / 2;
          const leafSize = 22;
          const leafLeft = {
            tipX: stemMidX + Math.cos(perpAngle) * leafSize,
            tipY: stemMidY + Math.sin(perpAngle) * leafSize - 6,
          };
          const leafRight = {
            tipX: stemMidX + Math.cos(perpAngle + Math.PI) * leafSize,
            tipY: stemMidY + Math.sin(perpAngle + Math.PI) * leafSize - 6,
          };

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
                <circle cx={pos.x} cy={pos.y} r="46" fill="transparent" />

                {/* Hover halo */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isHovered ? 52 : 38}
                  fill={oliveFill}
                  opacity={isHovered ? 0.18 : 0}
                  style={{
                    transition: 'r 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out',
                  }}
                />

                {/* Stem */}
                <line
                  x1={pos.branchX}
                  y1={pos.branchY}
                  x2={pos.x}
                  y2={pos.y - 18}
                  stroke={branchColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity={0.75}
                  style={{
                    opacity: isMounted ? 0.75 : 0,
                    transition: `opacity 0.5s ease-out ${growDelay - 0.1}s`,
                  }}
                />

                {/* Two leaves at the stem mid-point */}
                <g
                  style={{
                    opacity: isMounted ? 1 : 0,
                    transition: `opacity 0.7s ease-out ${growDelay + 0.05}s, transform 0.4s ease-out`,
                    transformOrigin: `${stemMidX}px ${stemMidY}px`,
                    transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                  }}
                >
                  {/* Left lanceolate leaf */}
                  <Lanceolate
                    baseX={stemMidX}
                    baseY={stemMidY}
                    tipX={leafLeft.tipX}
                    tipY={leafLeft.tipY}
                    fill={leafColor}
                  />
                  {/* Right lanceolate leaf */}
                  <Lanceolate
                    baseX={stemMidX}
                    baseY={stemMidY}
                    tipX={leafRight.tipX}
                    tipY={leafRight.tipY}
                    fill={leafColor}
                  />
                </g>

                {/* The olive itself */}
                <ellipse
                  cx={pos.x}
                  cy={pos.y}
                  rx={isHovered ? 22 : 19}
                  ry={isHovered ? 30 : 26}
                  fill={isHovered ? oliveHoverFill : oliveFill}
                  style={{
                    transition: `
                      rx 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                      ry 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                      fill 0.4s ease-out,
                      opacity 0.7s ease-out,
                      transform 0.4s ease-out
                    `,
                    opacity: isMounted ? 1 : 0,
                    animation: isMounted
                      ? `oliveGrow 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) ${growDelay}s backwards`
                      : 'none',
                    transformOrigin: `${pos.x}px ${pos.y}px`,
                  }}
                />

                {/* Highlight */}
                <ellipse
                  cx={pos.x - 5}
                  cy={pos.y - 8}
                  rx="3.5"
                  ry="6"
                  fill="white"
                  opacity={isHovered ? 0.4 : 0.22}
                  style={{ transition: 'opacity 0.4s ease-out', pointerEvents: 'none' }}
                />

                {/* Roman numeral label below the olive */}
                <text
                  x={pos.x}
                  y={pos.y + 60}
                  textAnchor="middle"
                  fontSize="20"
                  fontStyle="italic"
                  fill={numeralColor}
                  fontFamily="var(--font-cormorant), Georgia, serif"
                  opacity={isHovered ? 1 : 0.85}
                  style={{
                    transition: 'opacity 0.4s ease-out, font-weight 0.3s',
                    pointerEvents: 'none',
                  }}
                >
                  {division.number}
                </text>

                {/* Subtle name label below numeral, only shown on hover */}
                <text
                  x={pos.x}
                  y={pos.y + 82}
                  textAnchor="middle"
                  fontSize="11"
                  fill={isOnNavy ? '#FAF6EC' : '#0E1B2C'}
                  fontFamily="var(--font-inter), sans-serif"
                  letterSpacing="0.18em"
                  opacity={isHovered ? 0.85 : 0}
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
 * Lanceolate (lance-shaped) leaf — the actual silhouette of an olive leaf.
 * Real olive leaves are long, narrow, and pointed at both ends, with a
 * visible central vein. This helper draws one from a base attachment point
 * outward to a tip.
 */
interface LanceolateProps {
  baseX: number;
  baseY: number;
  tipX: number;
  tipY: number;
  fill: string;
}

function Lanceolate({ baseX, baseY, tipX, tipY, fill }: LanceolateProps) {
  const midX = (baseX + tipX) / 2;
  const midY = (baseY + tipY) / 2;
  const angleRad = Math.atan2(tipY - baseY, tipX - baseX);
  const perpAngle = angleRad + Math.PI / 2;
  // Width of the leaf at its widest (mid-belly)
  const halfWidth = 4.2;
  const bx1 = midX + Math.cos(perpAngle) * halfWidth;
  const by1 = midY + Math.sin(perpAngle) * halfWidth;
  const bx2 = midX - Math.cos(perpAngle) * halfWidth;
  const by2 = midY - Math.sin(perpAngle) * halfWidth;

  return (
    <g>
      {/* Leaf body — pointed at base, pointed at tip, curved sides */}
      <path
        d={`M ${baseX} ${baseY} Q ${bx1} ${by1}, ${tipX} ${tipY} Q ${bx2} ${by2}, ${baseX} ${baseY} Z`}
        fill={fill}
        stroke={fill}
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      {/* Central vein — runs the length of the leaf */}
      <line
        x1={baseX}
        y1={baseY}
        x2={tipX}
        y2={tipY}
        stroke={fill}
        strokeWidth="0.6"
        opacity="0.4"
        strokeLinecap="round"
      />
    </g>
  );
}
