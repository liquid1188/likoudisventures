import { clsx } from 'clsx';

interface OliveBranchMarkProps {
  /** Display width in px (height matches viewBox aspect). Default 44. */
  size?: number;
  className?: string;
  /** Number of olives to render (1–6). Default 6. */
  olives?: number;
}

/**
 * Compact, static olive branch — for nav, footer, small editorial contexts.
 *
 * Design notes:
 *   - Leaves are lanceolate (long, narrow, pointed at both ends) with a visible
 *     central vein, the way real olive leaves grow. The earlier round-ellipse
 *     stand-ins read as generic foliage, not olive specifically.
 *   - Olives are oval, paired with a small highlight, sized to read as fruit
 *     rather than dots even at small sizes.
 *   - Line weight increased so the silhouette holds at 18–20px in nav.
 *   - Two-tone color hint: a faint silver-grey leaf underside (uses
 *     currentColor at lower opacity) suggests the way real olive leaves catch
 *     light, without committing to specific tones — caller controls color via
 *     `text-*` classes the same as before.
 *   - The interactive 6-olive centerpiece is OliveBranchInteractive.
 */
export function OliveBranchMark({
  size = 44,
  className,
  olives = 6,
}: OliveBranchMarkProps) {
  // Each entry: leaf attachment point, leaf rotation, leaf side (above/below
  // the branch), and the olive paired with that node.
  const nodes = [
    { lx: 14, ly: 32, lrot: -55, leafSide: 'below', ox: 13, oy: 36, orot: -25 },
    { lx: 22, ly: 27, lrot: 55, leafSide: 'above', ox: 21, oy: 22, orot: 18 },
    { lx: 31, ly: 25, lrot: -65, leafSide: 'below', ox: 30, oy: 30, orot: -10 },
    { lx: 40, ly: 24, lrot: 65, leafSide: 'above', ox: 39, oy: 19, orot: 12 },
    { lx: 48, ly: 25, lrot: -50, leafSide: 'below', ox: 47, oy: 30, orot: -8 },
    { lx: 55, ly: 28, lrot: 50, leafSide: 'above', ox: 53, oy: 23, orot: 22 },
  ].slice(0, olives);

  return (
    <svg
      width={size}
      height={size * (54 / 70)}
      viewBox="0 0 70 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('shrink-0', className)}
      role="img"
      aria-label="Likoudis Ventures olive branch mark"
    >
      {/* Main stem — slight upward arc, sturdier than before */}
      <path
        d="M 4 38 Q 20 26, 42 24 T 66 28"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />

      {/* Stem starting flourish (small base curl, suggests the cut end) */}
      <path
        d="M 4 38 Q 1 40, 2 43"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Leaves — lance-shaped, alternating above and below the branch */}
      {nodes.map((n, i) => {
        const leafLength = 13;
        const leafWidth = 3.6;
        // Anchor leaf at attachment point, rotate it, then describe a lanceolate
        // shape pointing outward.
        const tipX = n.lx + Math.cos((n.lrot * Math.PI) / 180) * leafLength;
        const tipY = n.ly + Math.sin((n.lrot * Math.PI) / 180) * leafLength;
        const midX = (n.lx + tipX) / 2;
        const midY = (n.ly + tipY) / 2;
        // Perpendicular for leaf-belly curve
        const perpRot = ((n.lrot + 90) * Math.PI) / 180;
        const bx = midX + Math.cos(perpRot) * leafWidth;
        const by = midY + Math.sin(perpRot) * leafWidth;
        const bx2 = midX - Math.cos(perpRot) * leafWidth;
        const by2 = midY - Math.sin(perpRot) * leafWidth;

        return (
          <g key={`leaf-${i}`}>
            {/* Leaf body */}
            <path
              d={`M ${n.lx} ${n.ly} Q ${bx} ${by}, ${tipX} ${tipY} Q ${bx2} ${by2}, ${n.lx} ${n.ly} Z`}
              fill="currentColor"
              fillOpacity="0.92"
              stroke="currentColor"
              strokeWidth="0.6"
              strokeLinejoin="round"
            />
            {/* Central vein — slightly lighter, suggests the leaf's spine */}
            <line
              x1={n.lx}
              y1={n.ly}
              x2={tipX}
              y2={tipY}
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.35"
              strokeLinecap="round"
            />
          </g>
        );
      })}

      {/* Olives — oval fruit with a small highlight, sized to read at small scale */}
      {nodes.map((n, i) => (
        <g key={`olive-${i}`}>
          <ellipse
            cx={n.ox}
            cy={n.oy}
            rx="2.6"
            ry="3.4"
            fill="currentColor"
            transform={`rotate(${n.orot} ${n.ox} ${n.oy})`}
          />
          {/* Stem nub connecting olive to branch */}
          <line
            x1={n.lx}
            y1={n.ly}
            x2={n.ox}
            y2={n.oy}
            stroke="currentColor"
            strokeWidth="0.7"
            opacity="0.75"
            strokeLinecap="round"
          />
          {/* Highlight — a single light dot to give olives volume */}
          <ellipse
            cx={n.ox - 0.6}
            cy={n.oy - 1}
            rx="0.5"
            ry="0.7"
            fill="currentColor"
            opacity="0.35"
          />
        </g>
      ))}
    </svg>
  );
}
