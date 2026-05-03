import { clsx } from 'clsx';

interface OliveBranchMarkProps {
  size?: number;
  className?: string;
  olives?: number;
}

/**
 * Compact, static olive branch — for nav, footer, small contexts.
 * The interactive centerpiece version is OliveBranchInteractive.
 */
export function OliveBranchMark({
  size = 30,
  className,
  olives = 6,
}: OliveBranchMarkProps) {
  const olivePositions = [
    { cx: 13, cy: 30, rotate: -28 },
    { cx: 21, cy: 26, rotate: -16 },
    { cx: 30, cy: 24, rotate: -5 },
    { cx: 39, cy: 25, rotate: 8 },
    { cx: 47, cy: 27, rotate: 18 },
    { cx: 53, cy: 30, rotate: 30 },
  ].slice(0, olives);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('shrink-0', className)}
      role="img"
      aria-label="Likoudis Ventures olive branch mark"
    >
      <path
        d="M6 32 Q 22 22, 54 28"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      {olivePositions.map((pos, i) => (
        <ellipse
          key={i}
          cx={pos.cx}
          cy={pos.cy}
          rx="2.5"
          ry="3.5"
          fill="currentColor"
          transform={`rotate(${pos.rotate} ${pos.cx} ${pos.cy})`}
        />
      ))}
      <path d="M17 24 Q 14 19, 18 17" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M27 22 Q 25 17, 29 16" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M36 22 Q 35 17, 39 16" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M45 24 Q 45 19, 49 18" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}
