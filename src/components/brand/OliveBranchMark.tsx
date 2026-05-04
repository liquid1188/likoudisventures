import { clsx } from 'clsx';

interface OliveBranchMarkProps {
  /** Display width in px. Default 44. */
  size?: number;
  className?: string;
  /** Number of olives to render (1–5). Default 5. */
  olives?: number;
}

/**
 * The static olive branch mark — used in nav, footer, and division headers.
 *
 * This is the SIMPLIFIED version of the interactive homepage centerpiece
 * (`OliveBranchInteractive`). They share the same composition:
 *   - Single graceful upward-curving arc
 *   - Five olives evenly spaced along the arc, with the centerpiece
 *     olive sitting at the apex (one olive in the middle, two flanking
 *     on each side). One olive per division of the house.
 *   - Each olive node has a matched pair of leaves (one up-and-out,
 *     one down-and-out)
 *   - Leaves on the left half lean leftward; leaves on the right half
 *     lean rightward; the centerpiece olive's leaves are vertical
 *     so the mark is mirror-symmetric about its center axis.
 *
 * Differences from the interactive:
 *   - No hover, no animation, no division-link mapping
 *   - No leaf veins (would not hold at small sizes)
 *   - No olive highlights (would not hold at small sizes)
 *   - Pure single-color rendering via `currentColor` so the caller
 *     controls tone via `text-*` Tailwind classes
 *
 * The `olives` prop lets callers render fewer olives for compact contexts.
 */
export function OliveBranchMark({
  size = 44,
  className,
  olives = 5,
}: OliveBranchMarkProps) {
  // Same bezier as the interactive version, scaled into a 70 × 54 viewBox.
  // P0 = (5, 32), P1 = (35, 12), P2 = (65, 32). Arc symmetric about x=35.
  const P0 = { x: 5, y: 32 };
  const P1 = { x: 35, y: 12 };
  const P2 = { x: 65, y: 32 };

  function sampleBezier(t: number) {
    const u = 1 - t;
    const x = u * u * P0.x + 2 * u * t * P1.x + t * t * P2.x;
    const y = u * u * P0.y + 2 * u * t * P1.y + t * t * P2.y;
    return { x, y };
  }

  // Five evenly spaced t values, symmetric about t=0.5 (apex).
  // The middle olive (i=2) sits at the apex and gets vertical leaves.
  const oliveTs = [0.1, 0.3, 0.5, 0.7, 0.9].slice(0, olives);
  const STEM_LENGTH = 5;
  const LEAF_LENGTH = 7;

  const oliveNodes = oliveTs.map((t, i) => {
    const onBranch = sampleBezier(t);
    // Lean: -1 = lean left, +1 = lean right, 0 = vertical (centerpiece)
    const lean = i < 2 ? -1 : i > 2 ? 1 : 0;
    return {
      branchX: onBranch.x,
      branchY: onBranch.y,
      x: onBranch.x,
      y: onBranch.y + STEM_LENGTH,
      lean,
    };
  });

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
      {/* Branch arc */}
      <path
        d={`M ${P0.x} ${P0.y} Q ${P1.x} ${P1.y} ${P2.x} ${P2.y}`}
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />

      {/* Symmetric end flourishes */}
      <path
        d={`M ${P0.x} ${P0.y} q -2.5 -0.5, -3.5 1`}
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d={`M ${P2.x} ${P2.y} q 2.5 -0.5, 3.5 1`}
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Five olive nodes */}
      {oliveNodes.map((node, i) => {
        const upLeafTipX = node.branchX + node.lean * 0.55 * LEAF_LENGTH;
        const upLeafTipY = node.branchY - 0.85 * LEAF_LENGTH;
        const downLeafTipX = node.branchX - node.lean * 0.4 * LEAF_LENGTH;
        const downLeafTipY = node.branchY + 0.7 * LEAF_LENGTH;

        return (
          <g key={i}>
            {/* Up-and-out leaf */}
            <SimpleLeaf
              baseX={node.branchX}
              baseY={node.branchY}
              tipX={upLeafTipX}
              tipY={upLeafTipY}
              halfWidth={1.4}
            />
            {/* Down-and-out leaf */}
            <SimpleLeaf
              baseX={node.branchX}
              baseY={node.branchY}
              tipX={downLeafTipX}
              tipY={downLeafTipY}
              halfWidth={1.4}
            />
            {/* Olive stem */}
            <line
              x1={node.branchX}
              y1={node.branchY}
              x2={node.x}
              y2={node.y - 1}
              stroke="currentColor"
              strokeWidth="0.7"
              strokeLinecap="round"
              opacity="0.85"
            />
            {/* Olive */}
            <ellipse
              cx={node.x}
              cy={node.y}
              rx="2.3"
              ry="3"
              fill="currentColor"
            />
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Simplified leaf for the static mark — no vein, single color via
 * currentColor. Pointed at base and tip, curved sides.
 */
interface SimpleLeafProps {
  baseX: number;
  baseY: number;
  tipX: number;
  tipY: number;
  halfWidth: number;
}

function SimpleLeaf({ baseX, baseY, tipX, tipY, halfWidth }: SimpleLeafProps) {
  const midX = (baseX + tipX) / 2;
  const midY = (baseY + tipY) / 2;
  const angleRad = Math.atan2(tipY - baseY, tipX - baseX);
  const perpAngle = angleRad + Math.PI / 2;
  const bx1 = midX + Math.cos(perpAngle) * halfWidth;
  const by1 = midY + Math.sin(perpAngle) * halfWidth;
  const bx2 = midX - Math.cos(perpAngle) * halfWidth;
  const by2 = midY - Math.sin(perpAngle) * halfWidth;

  return (
    <path
      d={`M ${baseX} ${baseY} Q ${bx1} ${by1}, ${tipX} ${tipY} Q ${bx2} ${by2}, ${baseX} ${baseY} Z`}
      fill="currentColor"
      fillOpacity="0.92"
      stroke="currentColor"
      strokeWidth="0.4"
      strokeLinejoin="round"
    />
  );
}
