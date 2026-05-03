'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { divisions } from '@/content/divisions';
import { clsx } from 'clsx';

interface OliveBranchInteractiveProps {
  /**
   * Color theme — controls colors of branch, olives, leaves, and labels.
   */
  theme?: 'on-navy' | 'on-cream';
  /**
   * Reveal animation on mount.
   */
  animate?: boolean;
}

/**
 * The interactive centerpiece. Each olive is a clickable gateway to one of the six divisions.
 *
 * Layout: large SVG branch with six olives spaced along it. Hovering an olive reveals
 * a label in serif type with the division name and Greek subtitle. Clicking navigates
 * to the division page. The branch draws in on mount, olives grow one by one.
 *
 * The whole thing has a gentle living animation — the branch sways subtly.
 */
export function OliveBranchInteractive({
  theme = 'on-navy',
  animate = true,
}: OliveBranchInteractiveProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) {
      setIsMounted(true);
      return;
    }
    // Tiny delay so the SVG renders before animations start
    const t = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(t);
  }, [animate]);

  const isOnNavy = theme === 'on-navy';
  const branchColor = isOnNavy ? 'text-olive-glow' : 'text-olive-deep';
  const oliveColor = isOnNavy ? '#C9D7B8' : '#5E6E47';
  const oliveHoverColor = isOnNavy ? '#FAF6EC' : '#0E1B2C';
  const labelColor = isOnNavy ? 'text-bone' : 'text-navy';
  const greekColor = isOnNavy ? 'text-ochre' : 'text-ochre-deep';

  // Six olives along the curve, evenly distributed
  const olivePositions = [
    { x: 130, y: 240, rotate: -32, label: 'top-right' as const },
    { x: 280, y: 175, rotate: -18, label: 'top-right' as const },
    { x: 450, y: 145, rotate: -6, label: 'top' as const },
    { x: 620, y: 158, rotate: 8, label: 'bottom' as const },
    { x: 790, y: 195, rotate: 22, label: 'bottom-left' as const },
    { x: 935, y: 250, rotate: 36, label: 'bottom-left' as const },
  ];

  return (
    <div ref={containerRef} className="relative w-full">
      <svg
        viewBox="0 0 1100 480"
        className={clsx(
          'w-full h-auto',
          branchColor,
          isMounted && animate && 'animate-olive-sway'
        )}
        style={{ filter: isOnNavy ? 'drop-shadow(0 4px 24px rgba(143, 184, 206, 0.15))' : undefined }}
        role="group"
        aria-label="Six divisions of Likoudis Ventures, arranged on an olive branch"
      >
        {/* Branch */}
        <path
          d="M 60 290 Q 240 200, 480 165 Q 720 145, 980 270 Q 1020 285, 1050 310"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 1800,
            strokeDashoffset: isMounted ? 0 : 1800,
            transition: 'stroke-dashoffset 2.2s cubic-bezier(0.65, 0, 0.35, 1)',
            opacity: 0.85,
          }}
        />

        {/* Decorative leaves between olives */}
        {[
          { d: 'M 200 195 Q 175 155, 205 130', delay: 0.4 },
          { d: 'M 360 152 Q 350 110, 385 95', delay: 0.6 },
          { d: 'M 530 130 Q 530 90, 565 80', delay: 0.8 },
          { d: 'M 700 138 Q 715 100, 750 95', delay: 1.0 },
          { d: 'M 870 175 Q 895 140, 925 145', delay: 1.2 },
        ].map((leaf, i) => (
          <path
            key={i}
            d={leaf.d}
            stroke="currentColor"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            style={{
              opacity: isMounted ? 0.55 : 0,
              transition: `opacity 0.8s ease-out ${leaf.delay}s`,
            }}
          />
        ))}

        {/* Olives — each is a clickable group */}
        {olivePositions.map((pos, i) => {
          const division = divisions[i];
          if (!division) return null;
          const isHovered = hoveredIdx === i;
          const growDelay = 0.6 + i * 0.13;

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
              >
                {/* Hover halo */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isHovered ? 56 : 42}
                  fill={oliveColor}
                  opacity={isHovered ? 0.18 : 0}
                  style={{
                    transition: 'r 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out',
                  }}
                />

                {/* Outer accent ring on hover */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="38"
                  fill="none"
                  stroke={oliveHoverColor}
                  strokeWidth="1.5"
                  opacity={isHovered ? 0.6 : 0}
                  style={{
                    transition: 'opacity 0.4s ease-out',
                    strokeDasharray: '4 6',
                  }}
                />

                {/* The olive itself */}
                <ellipse
                  cx={pos.x}
                  cy={pos.y}
                  rx={isHovered ? 18 : 16}
                  ry={isHovered ? 26 : 23}
                  fill={isHovered ? oliveHoverColor : oliveColor}
                  transform={`rotate(${pos.rotate} ${pos.x} ${pos.y})`}
                  style={{
                    opacity: isMounted ? 1 : 0,
                    transformOrigin: `${pos.x}px ${pos.y}px`,
                    transformBox: 'fill-box',
                    transition: `
                      rx 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                      ry 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                      fill 0.4s ease-out,
                      opacity 0.7s ease-out ${growDelay}s
                    `,
                    animation: isMounted ? `oliveGrow 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) ${growDelay}s backwards` : 'none',
                  }}
                />

                {/* Highlight on the olive */}
                <ellipse
                  cx={pos.x - 4}
                  cy={pos.y - 6}
                  rx="3"
                  ry="5"
                  fill="white"
                  opacity={isHovered ? 0.35 : 0.18}
                  transform={`rotate(${pos.rotate} ${pos.x} ${pos.y})`}
                  style={{
                    transition: 'opacity 0.4s ease-out',
                    pointerEvents: 'none',
                  }}
                />

                {/* Number marker — Roman numeral above each olive */}
                <text
                  x={pos.x}
                  y={pos.y - 42}
                  textAnchor="middle"
                  className="font-display"
                  fontSize="14"
                  fontStyle="italic"
                  fill="currentColor"
                  opacity={isHovered ? 1 : 0.6}
                  style={{ transition: 'opacity 0.4s ease-out', pointerEvents: 'none' }}
                >
                  {division.number}
                </text>
              </g>
            </Link>
          );
        })}
      </svg>

      {/* Label area — appears below the branch when an olive is hovered */}
      <div
        className="absolute left-0 right-0 -bottom-4 lg:-bottom-2 flex justify-center pointer-events-none"
        aria-live="polite"
      >
        <div
          className={clsx(
            'transition-all duration-500 text-center',
            hoveredIdx !== null ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          )}
        >
          {hoveredIdx !== null && divisions[hoveredIdx] && (
            <>
              <div className={clsx('font-display text-2xl lg:text-4xl', labelColor)}>
                {divisions[hoveredIdx].name}
              </div>
              <div className={clsx('font-serif italic text-sm lg:text-base mt-1', greekColor)}>
                {divisions[hoveredIdx].greek} ·{' '}
                <span className={isOnNavy ? 'text-bone/60' : 'text-navy/60'}>
                  {divisions[hoveredIdx].tagline}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Default label when nothing is hovered */}
      <div
        className={clsx(
          'absolute left-0 right-0 -bottom-4 lg:-bottom-2 flex justify-center pointer-events-none transition-all duration-500',
          hoveredIdx === null && isMounted ? 'opacity-70' : 'opacity-0'
        )}
      >
        <div className={clsx('text-center font-sans text-[10px] uppercase tracking-eyebrow', labelColor)}>
          Hover or tap each olive · six divisions
        </div>
      </div>
    </div>
  );
}
