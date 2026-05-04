import { clsx } from 'clsx';

interface OliveBranchMarkProps {
  /** Display width in px (height auto from viewBox ratio). Default 44. */
  size?: number;
  className?: string;
  /** Number of olive nodes to render (1–6). Default 6. */
  olives?: number;
}

/**
 * Compact static olive branch — the canonical mark used in nav, footer, and
 * small editorial contexts.
 *
 * DESIGN BRIEF
 *
 * This is a logo mark, not botanical illustration. Priorities, in order:
 *   1. Recognizable at a glance as an olive branch
 *   2. Symmetric, clean, deliberate
 *   3. Consistent with the interactive centerpiece on the homepage
 *
 * Anatomy:
 *   - One graceful arc as the branch — single line, even stroke weight.
 *   - Six olive nodes evenly spaced along the arc.
 *   - At each node: a pair of mirrored lanceolate leaves (one rising up
 *     from the branch, one descending below) at matching angles to their
 *     branch axis. The mirror is the source of the symmetric feel.
 *   - At each node: a single olive sitting slightly below the leaf pair,
 *     attached to the branch by a short stem.
 *   - Single color throughout, driven by `currentColor`. No two-tones, no
 *     shadow olives, no highlight catches, no central veins, no calyx
 *     detail. Botanical accuracy was actively reduced to make the mark
 *     read as a mark.
 */
export function OliveBranchMark({
  size = 44,
  className,
  olives = 6,
}: OliveBranchMarkProps) {
  // Six evenly-spaced node parameters along the branch arc, expressed as t
  // values in [0, 1] for the quadratic bezier sampler below.
  const nodeTs = [0.12, 0.28, 0.44, 0.6, 0.76, 0.92].slice(0, olives);

  // Branch curve: P0 → control → P2 (quadratic bezier).
  // Slight upward arc, with the apex slightly past the midpoint.
  const P0 = { x: 4, y: 36 };
  const P1 = { x: 35, y: 16 };
  const P2 = { x: 66, y: 26 };

  function sampleBezier(t: number) {
    const u = 1 - t;
    const x = u * u * P0.x + 2 * u * t * P1.x + t * t * P2.x;
    const y = u * u * P0.y + 2 * u * t * P1.y + t * t * P2.y;
    const dx = 2 * u * (P1.x - P0.x) + 2 * t * (P2.x - P1.x);
    const dy = 2 * u * (P1.y - P0.y) + 2 * t * (P2.y - P1.y);
    return { x, y, tangent: Math.atan2(dy, dx) };
  }

  const LEAF_LENGTH = 9;
  const LEAF_HALF_WIDTH = 2.4;
  const LEAF_PERP_OFFSET = 0.55; // radians the leaf is rotated away from pure perpendicular, so leaves angle slightly forward
  const OLIVE_RX = 1.9;
  const OLIVE_RY = 2.5;
  const OLIVE_DROP = 4.5; // distance the olive hangs below the branch

  return (
    <svg
      width={size}
      height={size * (50 / 70)}
      viewBox="0 0 70 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('shrink-0', className)}
      role="img"
      aria-label="Likoudis Ventures olive branch mark"
    >
      {/* The branch — one clean stroked arc */}
      <path
        d={`M ${P0.x} ${P0.y} Q ${P1.x} ${P1.y}, ${P2.x} ${P2.y}`}
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />

      {nodeTs.map((t, i) => {
        const node = sampleBezier(t);
        const perp = node.tangent + Math.PI / 2; // pointing "below" the branch

        // Two leaves mirrored across the branch axis. Each is rotated
        // slightly forward (toward the tip) by LEAF_PERP_OFFSET so they
        // angle gracefully rather than sticking out perpendicular.
        const upperAngle = node.tangent - Math.PI / 2 + LEAF_PERP_OFFSET;
        const lowerAngle = node.tangent + Math.PI / 2 - LEAF_PERP_OFFSET;

        const upperTip = {
          x: node.x + Math.cos(upperAngle) * LEAF_LENGTH,
          y: node.y + Math.sin(upperAngle) * LEAF_LENGTH,
        };
        const lowerTip = {
          x: node.x + Math.cos(lowerAngle) * LEAF_LENGTH,
          y: node.y + Math.sin(lowerAngle) * LEAF_LENGTH,
        };

        // Olive sits below the branch, at a short stem hanging from the node.
        const oliveCx = node.x + Math.cos(perp) * OLIVE_DROP;
        const oliveCy = node.y + Math.sin(perp) * OLIVE_DROP;
        const oliveAngleDeg = (perp * 180) / Math.PI - 90;

        return (
          <g key={i}>
            {/* Upper leaf */}
            <Lanceolate
              baseX={node.x}
              baseY={node.y}
              tipX={upperTip.x}
              tipY={upperTip.y}
              halfWidth={LEAF_HALF_WIDTH}
            />
            {/* Lower leaf — mirror image */}
            <Lanceolate
              baseX={node.x}
              baseY={node.y}
              tipX={lowerTip.x}
              tipY={lowerTip.y}
              halfWidth={LEAF_HALF_WIDTH}
            />
            {/* Olive stem */}
            <line
              x1={node.x}
              y1={node.y}
              x2={oliveCx}
              y2={oliveCy}
              stroke="currentColor"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.85"
            />
            {/* Olive */}
            <ellipse
              cx={oliveCx}
              cy={oliveCy}
              rx={OLIVE_RX}
              ry={OLIVE_RY}
              fill="currentColor"
              transform={`rotate(${oliveAngleDeg} ${oliveCx} ${oliveCy})`}
            />
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Lanceolate leaf — a single lens-shaped leaf, pointed at both ends.
 * Filled in `currentColor`. No central vein, no underside shading; this is
 * the logo simplification — botanical detail was actively removed.
 */
interface LanceolateProps {
  baseX: number;
  baseY: number;
  tipX: number;
  tipY: number;
  halfWidth: number;
}

function Lanceolate({ baseX, baseY, tipX, tipY, halfWidth }: LanceolateProps) {
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
      d={`M ${baseX.toFixed(2)} ${baseY.toFixed(2)} Q ${bx1.toFixed(2)} ${by1.toFixed(2)}, ${tipX.toFixed(2)} ${tipY.toFixed(2)} Q ${bx2.toFixed(2)} ${by2.toFixed(2)}, ${baseX.toFixed(2)} ${baseY.toFixed(2)} Z`}
      fill="currentColor"
    />
  );
}
