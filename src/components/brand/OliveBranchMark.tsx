import { clsx } from 'clsx';

interface OliveBranchMarkProps {
  size?: number;
  className?: string;
  /**
   * Number of olives on the branch. Defaults to 5 (one per active+near division).
   * Increase to 6 if you ever launch a sixth division publicly.
   */
  olives?: number;
}

/**
 * The Likoudis Ventures brand mark.
 *
 * An olive branch arching from lower-left to mid-right, with five olives
 * spaced along it and four small leaves rising from the underside.
 *
 * Color is inherited via `currentColor` so the mark adapts to context —
 * sky-blue on the navy hero, navy on cream surfaces, etc.
 */
export function OliveBranchMark({
  size = 30,
  className,
  olives = 5,
}: OliveBranchMarkProps) {
  // Olive positions along the branch curve
  const olivePositions = [
    { cx: 14, cy: 28, rotate: -25 },
    { cx: 22, cy: 25, rotate: -15 },
    { cx: 32, cy: 24, rotate: -5 },
    { cx: 42, cy: 25, rotate: 8 },
    { cx: 50, cy: 27, rotate: 20 },
    { cx: 56, cy: 30, rotate: 30 }, // Reserved for sixth olive
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
      {/* The branch */}
      <path
        d="M8 30 Q 22 22, 52 26"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Olives */}
      {olivePositions.map((pos, i) => (
        <ellipse
          key={i}
          cx={pos.cx}
          cy={pos.cy}
          rx="2.6"
          ry="3.6"
          fill="currentColor"
          transform={`rotate(${pos.rotate} ${pos.cx} ${pos.cy})`}
        />
      ))}

      {/* Leaves */}
      <path d="M18 22 Q 16 18, 19 17" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M28 21 Q 27 17, 30 16" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M38 21 Q 38 17, 41 16" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M46 22 Q 47 18, 49 18" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}
