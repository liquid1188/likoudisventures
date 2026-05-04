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
 * REDRAW NOTES
 *
 * Earlier versions read as a generic curved sprig. This version commits more
 * fully to the olive-branch idiom:
 *
 * - The branch is no longer a single stroked arc. It's a filled silhouette
 *   that varies in thickness — thick at the cut end, tapering to slender at
 *   the tip — drawn as two parallel curves filled in olive tone with a darker
 *   centerline running through it. This is what real olive branches look like:
 *   woody, organic, not symmetrical.
 *
 * - The branch curve has been made more sculptural via cubic bezier with two
 *   control points, giving it an asymmetric profile (rises, dips, then rises
 *   again toward the tip) rather than a single graceful arc.
 *
 * - Six olives are placed at irregular spacing along the branch — clustered
 *   in two groups of three rather than evenly distributed. Real olive
 *   branches grow this way; the previous even spacing was the most generic
 *   visual choice.
 *
 * - Olives are now substantially larger (rx 28 / ry 38 vs former 19/26),
 *   two-tone with a darker shadow on one side and oil-shine highlight on the
 *   other, and connected to the branch by a visible woody stem nub.
 *
 * - Each olive node has ONE primary leaf, alternating above and below the
 *   branch line as you go from base to tip — the natural alternate-leaf
 *   pattern of real olive trees. Two additional "filler" leaves grow at
 *   non-olive points along the branch so the foliage isn't bunched only at
 *   the fruit.
 *
 * - Leaves themselves are larger lanceolates with a two-tone effect: top
 *   surface in lighter olive, underside (the side facing away from the
 *   light source) suggested with a darker centerline.
 *
 * Composition: viewBox 1200 × 560. The branch travels from lower-left to
 * upper-right, dipping in the middle under the visual weight of the olive
 * clusters, then rising again toward the tip.
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
  const branchLight = isOnNavy ? '#A6B594' : '#7A8B5F'; // olive-medium light side
  const branchDark = isOnNavy ? '#5C7251' : '#3F5236'; // olive-deep shadow side
  const oliveFill = isOnNavy ? '#8FA67D' : '#5C7251';
  const oliveShadow = isOnNavy ? '#5C7251' : '#3F5236';
  const oliveHoverFill = isOnNavy ? '#FAF6EC' : '#0E1B2C';
  const oliveStem = isOnNavy ? '#7A8B5F' : '#3F5236';
  const leafTop = isOnNavy ? '#B5C4A2' : '#7A8B5F';
  const leafUnder = isOnNavy ? '#7A8B5F' : '#5C7251';
  const numeralColor = isOnNavy ? '#C8A24A' : '#8E6420';
  const labelTextColor = isOnNavy ? 'text-bone' : 'text-navy';
  const labelGreekColor = isOnNavy ? 'text-ochre' : 'text-ochre-deep';
  const labelTaglineColor = isOnNavy ? 'text-bone/60' : 'text-navy/60';

  /**
   * Branch curve as a cubic bezier (two control points) for a more sculpted
   * shape. The branch starts thick at the lower-left cut end (P0 ≈ 60, 380),
   * sweeps up through the middle of the canvas, dips slightly under the
   * weight of the central olive cluster, and tapers to a thin tip at upper
   * right (P3 ≈ 1140, 220).
   */
  const P0 = { x: 60, y: 380 };
  const P1 = { x: 360, y: 140 };
  const P2 = { x: 820, y: 360 };
  const P3 = { x: 1140, y: 220 };

  /** Sample position and tangent on the cubic bezier at parameter t. */
  function sampleBezier(t: number) {
    const u = 1 - t;
    const x =
      u * u * u * P0.x +
      3 * u * u * t * P1.x +
      3 * u * t * t * P2.x +
      t * t * t * P3.x;
    const y =
      u * u * u * P0.y +
      3 * u * u * t * P1.y +
      3 * u * t * t * P2.y +
      t * t * t * P3.y;
    // Derivative for tangent
    const dx =
      3 * u * u * (P1.x - P0.x) +
      6 * u * t * (P2.x - P1.x) +
      3 * t * t * (P3.x - P2.x);
    const dy =
      3 * u * u * (P1.y - P0.y) +
      6 * u * t * (P2.y - P1.y) +
      3 * t * t * (P3.y - P2.y);
    const tangent = Math.atan2(dy, dx);
    return { x, y, tangent };
  }

  /**
   * Branch thickness profile — thick at the cut end, tapering to the tip.
   * Returns half-thickness at parameter t.
   */
  function branchHalfWidth(t: number) {
    return 14 - t * 9; // 14 → 5
  }

  /**
   * Build the branch silhouette as a filled SVG path. Sample the curve at
   * many points; for each, compute the perpendicular and offset by the
   * thickness; then trace one side forward and the other side back.
   */
  function buildBranchPath() {
    const SAMPLES = 60;
    const upper: Array<[number, number]> = [];
    const lower: Array<[number, number]> = [];
    for (let i = 0; i <= SAMPLES; i++) {
      const t = i / SAMPLES;
      const p = sampleBezier(t);
      const w = branchHalfWidth(t);
      const perp = p.tangent + Math.PI / 2;
      upper.push([p.x + Math.cos(perp) * w, p.y + Math.sin(perp) * w]);
      lower.push([p.x - Math.cos(perp) * w, p.y - Math.sin(perp) * w]);
    }
    const upperStr = upper.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L ');
    const lowerStr = lower
      .reverse()
      .map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`)
      .join(' L ');
    return `M ${upperStr} L ${lowerStr} Z`;
  }

  const branchPath = buildBranchPath();

  /**
   * The centerline runs through the middle of the silhouette, suggesting
   * the woody fiber. It's drawn as a stroked path along the bezier itself.
   */
  const centerlinePath = `M ${P0.x} ${P0.y} C ${P1.x} ${P1.y}, ${P2.x} ${P2.y}, ${P3.x} ${P3.y}`;

  /**
   * Six olive positions, irregularly spaced. Two clusters of three:
   * one near the base, one in the middle-tip area. Real olive branches
   * cluster their fruit; even spacing was the most generic visual choice.
   */
  const oliveTs = [0.16, 0.27, 0.38, 0.62, 0.74, 0.87];
  const STEM_LENGTH_BASE = 36;

  const oliveNodes = oliveTs.map((t, i) => {
    const onBranch = sampleBezier(t);
    // Olives hang downward from branch (perpendicular to tangent, pointing
    // toward bottom of canvas). Slight per-olive variance in stem length and
    // angle for a less mechanical look.
    const stemAngle = onBranch.tangent + Math.PI / 2 + (i % 2 === 0 ? -0.18 : 0.12);
    const stemLength = STEM_LENGTH_BASE + (i % 3) * 6;
    const x = onBranch.x + Math.cos(stemAngle) * stemLength;
    const y = onBranch.y + Math.sin(stemAngle) * stemLength;
    return {
      branchX: onBranch.x,
      branchY: onBranch.y,
      tangent: onBranch.tangent,
      x,
      y,
      stemAngle,
      // Alternate leaf side: above branch (-1) on even, below (+1) on odd
      leafSide: i % 2 === 0 ? -1 : 1,
    };
  });

  /**
   * Filler leaves at points where there's no olive — keeps the branch from
   * looking bare between fruit clusters and gives more sense of foliage.
   */
  const fillerLeafTs = [0.08, 0.48, 0.55, 0.95];
  const fillerLeaves = fillerLeafTs.map((t, i) => {
    const p = sampleBezier(t);
    const side = i % 2 === 0 ? -1 : 1;
    const length = 36 + (i % 2) * 8;
    const angle = p.tangent + (Math.PI / 2) * side + side * 0.4;
    return {
      baseX: p.x,
      baseY: p.y,
      tipX: p.x + Math.cos(angle) * length,
      tipY: p.y + Math.sin(angle) * length,
      delay: 1.0 + i * 0.08,
    };
  });

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
        {/* Branch silhouette — filled path with thickness variation */}
        <path
          d={branchPath}
          fill={branchLight}
          opacity={0.92}
          style={{
            opacity: isMounted ? 0.92 : 0,
            transition: 'opacity 1.4s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        />

        {/* Centerline — darker stroke through the middle, suggesting woody fiber */}
        <path
          d={centerlinePath}
          stroke={branchDark}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity={0.6}
          style={{
            strokeDasharray: 1700,
            strokeDashoffset: isMounted ? 0 : 1700,
            transition: 'stroke-dashoffset 1.8s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        />

        {/* Cut-end detail at base — small annual ring suggestion */}
        <g
          style={{
            opacity: isMounted ? 0.7 : 0,
            transition: 'opacity 0.6s ease-out 0.4s',
          }}
        >
          <ellipse cx={P0.x + 4} cy={P0.y - 2} rx="11" ry="14" fill={branchDark} opacity="0.5" />
          <ellipse cx={P0.x + 4} cy={P0.y - 2} rx="6" ry="9" fill={branchLight} opacity="0.85" />
          <ellipse cx={P0.x + 4} cy={P0.y - 2} rx="2.5" ry="4" fill={branchDark} opacity="0.6" />
        </g>

        {/* Tip flourish — small curl at the upper-right end */}
        <path
          d={`M ${P3.x} ${P3.y} q 18 -4, 28 8 q 4 8, -2 14`}
          stroke={branchDark}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity={0.7}
          style={{
            opacity: isMounted ? 0.7 : 0,
            transition: 'opacity 0.6s ease-out 1.4s',
          }}
        />

        {/* Filler leaves — between olive clusters */}
        {fillerLeaves.map((leaf, i) => (
          <g
            key={`filler-${i}`}
            style={{
              opacity: isMounted ? 0.9 : 0,
              transition: `opacity 0.7s ease-out ${leaf.delay}s`,
            }}
          >
            <Lanceolate
              baseX={leaf.baseX}
              baseY={leaf.baseY}
              tipX={leaf.tipX}
              tipY={leaf.tipY}
              halfWidth={11}
              fillTop={leafTop}
              fillUnder={leafUnder}
            />
          </g>
        ))}

        {/* Six olive groups */}
        {oliveNodes.map((node, i) => {
          const division = divisions[i];
          if (!division) return null;
          const isHovered = hoveredIdx === i;
          const growDelay = 0.7 + i * 0.13;

          // Primary leaf for this olive — emerges from the branch (not the
          // olive stem) on the alternate side.
          const leafLength = 56;
          const leafAngle =
            node.tangent + (Math.PI / 2) * node.leafSide + node.leafSide * 0.55;
          const leafTipX = node.branchX + Math.cos(leafAngle) * leafLength;
          const leafTipY = node.branchY + Math.sin(leafAngle) * leafLength;

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

                {/* Primary leaf — alternates above/below branch */}
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
                    tipX={leafTipX}
                    tipY={leafTipY}
                    halfWidth={13}
                    fillTop={leafTop}
                    fillUnder={leafUnder}
                  />
                </g>

                {/* Olive stem — short woody connector from branch to fruit */}
                <line
                  x1={node.branchX}
                  y1={node.branchY}
                  x2={node.x}
                  y2={node.y - 22}
                  stroke={oliveStem}
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity={0.9}
                  style={{
                    opacity: isMounted ? 0.9 : 0,
                    transition: `opacity 0.5s ease-out ${growDelay - 0.05}s`,
                  }}
                />

                {/* Olive — shadow side (drawn first, larger, behind) */}
                <ellipse
                  cx={node.x + 4}
                  cy={node.y + 2}
                  rx={isHovered ? 32 : 28}
                  ry={isHovered ? 42 : 38}
                  fill={oliveShadow}
                  opacity={0.85}
                  style={{
                    transition:
                      'rx 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), ry 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out',
                    opacity: isMounted ? 0.85 : 0,
                    animation: isMounted
                      ? `oliveGrow 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) ${growDelay}s backwards`
                      : 'none',
                    transformOrigin: `${node.x}px ${node.y}px`,
                  }}
                />

                {/* Olive — main body (on top of shadow, slightly offset) */}
                <ellipse
                  cx={node.x}
                  cy={node.y}
                  rx={isHovered ? 32 : 28}
                  ry={isHovered ? 42 : 38}
                  fill={isHovered ? oliveHoverFill : oliveFill}
                  style={{
                    transition:
                      'rx 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), ry 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), fill 0.4s ease-out, opacity 0.7s ease-out',
                    opacity: isMounted ? 1 : 0,
                    animation: isMounted
                      ? `oliveGrow 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) ${growDelay + 0.04}s backwards`
                      : 'none',
                    transformOrigin: `${node.x}px ${node.y}px`,
                  }}
                />

                {/* Oil-shine highlight — main bright catch */}
                <ellipse
                  cx={node.x - 8}
                  cy={node.y - 14}
                  rx="6"
                  ry="11"
                  fill="white"
                  opacity={isHovered ? 0.45 : 0.28}
                  style={{
                    transition: 'opacity 0.4s ease-out',
                    pointerEvents: 'none',
                  }}
                  transform={`rotate(-15 ${node.x - 8} ${node.y - 14})`}
                />

                {/* Secondary smaller highlight */}
                <ellipse
                  cx={node.x - 4}
                  cy={node.y + 8}
                  rx="2"
                  ry="4"
                  fill="white"
                  opacity={isHovered ? 0.3 : 0.18}
                  style={{ transition: 'opacity 0.4s ease-out', pointerEvents: 'none' }}
                />

                {/* Calyx — tiny olive crown at the top where stem joins fruit */}
                <path
                  d={`M ${node.x - 4} ${node.y - 36} Q ${node.x} ${node.y - 40}, ${node.x + 4} ${node.y - 36}`}
                  stroke={oliveStem}
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                  opacity={isMounted ? 0.7 : 0}
                  style={{
                    transition: `opacity 0.5s ease-out ${growDelay + 0.15}s`,
                  }}
                />

                {/* Roman numeral — below the olive */}
                <text
                  x={node.x}
                  y={node.y + 78}
                  textAnchor="middle"
                  fontSize="26"
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
                  x={node.x}
                  y={node.y + 102}
                  textAnchor="middle"
                  fontSize="13"
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
 * Lanceolate (lance-shaped) leaf — the silhouette of an olive leaf.
 *
 * Real olive leaves are long, narrow, pointed at both ends, with a visible
 * central vein and a two-tone color (lighter top, darker underside). This
 * helper draws one from a base attachment point outward to a tip.
 *
 * Two-tone effect: the leaf body is filled in `fillTop`; a thinner half-leaf
 * shape is laid over one side in `fillUnder`, suggesting the underside
 * catching less light.
 */
interface LanceolateProps {
  baseX: number;
  baseY: number;
  tipX: number;
  tipY: number;
  halfWidth?: number;
  fillTop: string;
  fillUnder: string;
}

function Lanceolate({
  baseX,
  baseY,
  tipX,
  tipY,
  halfWidth = 8,
  fillTop,
  fillUnder,
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
      {/* Top surface — full leaf body */}
      <path
        d={`M ${baseX} ${baseY} Q ${bx1} ${by1}, ${tipX} ${tipY} Q ${bx2} ${by2}, ${baseX} ${baseY} Z`}
        fill={fillTop}
        stroke={fillUnder}
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
      {/* Underside half — darker, on the perpendicular-2 side */}
      <path
        d={`M ${baseX} ${baseY} Q ${(baseX + bx2) / 2} ${(baseY + by2) / 2}, ${bx2} ${by2} Q ${(bx2 + tipX) / 2} ${(by2 + tipY) / 2}, ${tipX} ${tipY}`}
        fill={fillUnder}
        opacity="0.55"
        stroke="none"
      />
      {/* Central vein */}
      <line
        x1={baseX}
        y1={baseY}
        x2={tipX}
        y2={tipY}
        stroke={fillUnder}
        strokeWidth="0.8"
        opacity="0.7"
        strokeLinecap="round"
      />
    </g>
  );
}
