import { clsx } from 'clsx';

interface IonianSeascapeProps {
  className?: string;
  variant?: 'wide' | 'tall';
}

/**
 * SVG illustration of an Ionian Sea seascape — a high-key, restrained line/wash
 * drawing of a coastal village climbing a hillside above a harbor.
 *
 * Acts as the placeholder photography for Ithaca House until real photos exist.
 * Even after photos arrive, this illustration can be kept as a section decoration —
 * it sets a register that's confident, hand-drawn, and not stock.
 */
export function IonianSeascape({ className, variant = 'wide' }: IonianSeascapeProps) {
  const viewBox = variant === 'tall' ? '0 0 600 800' : '0 0 1200 600';

  return (
    <svg
      viewBox={viewBox}
      className={clsx('w-full h-auto', className)}
      preserveAspectRatio="xMidYMid slice"
      aria-label="Illustration of an Ionian seaside village"
    >
      <defs>
        <linearGradient id="sky-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B8D2E0" stopOpacity="0.4" />
          <stop offset="1" stopColor="#FAF6EC" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="water-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8FB8CE" stopOpacity="0.6" />
          <stop offset="1" stopColor="#6FA0BA" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="hill-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B5C4A2" stopOpacity="0.5" />
          <stop offset="1" stopColor="#8FA67D" stopOpacity="0.85" />
        </linearGradient>
        <pattern id="paper-grain" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <rect width="200" height="200" fill="transparent" />
          <circle cx="50" cy="40" r="0.5" fill="#0E1B2C" opacity="0.04" />
          <circle cx="120" cy="80" r="0.5" fill="#0E1B2C" opacity="0.05" />
          <circle cx="170" cy="160" r="0.5" fill="#0E1B2C" opacity="0.04" />
        </pattern>
      </defs>

      {variant === 'wide' ? (
        <>
          {/* Sky */}
          <rect width="1200" height="350" fill="url(#sky-grad)" />

          {/* Distant mountain — Kefalonia silhouette */}
          <path
            d="M 0 280 Q 200 200, 400 240 Q 600 220, 800 260 Q 1000 230, 1200 280 L 1200 350 L 0 350 Z"
            fill="#7BA8BF"
            opacity="0.4"
          />

          {/* Hillside with village (right side) */}
          <path
            d="M 600 350 Q 700 300, 800 290 Q 950 270, 1100 310 Q 1180 330, 1200 350 L 1200 600 L 600 600 Z"
            fill="url(#hill-grad)"
          />

          {/* Olive trees on hillside (small triangular sketches) */}
          {[
            { x: 720, y: 320 },
            { x: 760, y: 300 },
            { x: 820, y: 285 },
            { x: 870, y: 295 },
            { x: 920, y: 280 },
            { x: 970, y: 285 },
            { x: 1030, y: 300 },
            { x: 1080, y: 310 },
            { x: 700, y: 360 },
            { x: 850, y: 330 },
            { x: 950, y: 320 },
            { x: 1010, y: 340 },
          ].map((tree, i) => (
            <g key={i}>
              <line x1={tree.x} y1={tree.y + 8} x2={tree.x} y2={tree.y + 16} stroke="#5E6E47" strokeWidth="0.7" />
              <ellipse cx={tree.x} cy={tree.y + 4} rx="6" ry="8" fill="#7A8B5F" opacity="0.7" />
            </g>
          ))}

          {/* Village houses — small cubes climbing the hill */}
          {[
            { x: 720, y: 400, w: 45, h: 32 },
            { x: 780, y: 380, w: 50, h: 35 },
            { x: 850, y: 365, w: 42, h: 30 },
            { x: 910, y: 360, w: 48, h: 33 },
            { x: 980, y: 380, w: 40, h: 28 },
            { x: 1040, y: 400, w: 50, h: 35 },
            { x: 770, y: 440, w: 55, h: 38 },
            { x: 840, y: 425, w: 50, h: 35 },
            { x: 920, y: 420, w: 45, h: 32 },
            { x: 1000, y: 430, w: 55, h: 38 },
            { x: 700, y: 480, w: 60, h: 42 },
            { x: 800, y: 475, w: 55, h: 40 },
            { x: 880, y: 470, w: 50, h: 38 },
            { x: 970, y: 475, w: 55, h: 40 },
            { x: 1060, y: 485, w: 60, h: 42 },
          ].map((h, i) => (
            <g key={i}>
              <rect x={h.x} y={h.y} width={h.w} height={h.h} fill="#FAF6EC" stroke="#0E1B2C" strokeWidth="0.6" opacity="0.95" />
              {/* Roof */}
              <path
                d={`M ${h.x - 2} ${h.y} L ${h.x + h.w / 2} ${h.y - h.h * 0.35} L ${h.x + h.w + 2} ${h.y} Z`}
                fill="#A6822E"
                opacity="0.85"
              />
              {/* Window */}
              <rect x={h.x + h.w / 2 - 3} y={h.y + h.h / 2 - 3} width="6" height="6" fill="#0E1B2C" opacity="0.5" />
            </g>
          ))}

          {/* Sea — middle band */}
          <rect y="350" width="1200" height="200" fill="url(#water-grad)" />

          {/* Sea ripples */}
          {[
            { y: 380, opacity: 0.3 },
            { y: 420, opacity: 0.25 },
            { y: 460, opacity: 0.2 },
            { y: 500, opacity: 0.18 },
            { y: 540, opacity: 0.15 },
          ].map((line, i) => (
            <g key={i}>
              {[100, 250, 400, 550, 700, 850, 1000, 1150].map((x, j) => (
                <path
                  key={j}
                  d={`M ${x} ${line.y} q 8 -3, 16 0 q 8 3, 16 0`}
                  stroke="#FAF6EC"
                  strokeWidth="0.8"
                  fill="none"
                  opacity={line.opacity}
                  strokeLinecap="round"
                />
              ))}
            </g>
          ))}

          {/* Foreground — beach/dock (lower right) */}
          <path
            d="M 600 540 Q 700 545, 800 550 Q 900 555, 1000 555 Q 1100 555, 1200 555 L 1200 600 L 600 600 Z"
            fill="#EFE5C8"
            opacity="0.8"
          />

          {/* A boat in the harbor */}
          <g transform="translate(400, 480)">
            <path d="M 0 10 L 60 10 L 55 25 L 5 25 Z" fill="#FAF6EC" stroke="#0E1B2C" strokeWidth="0.6" />
            <line x1="30" y1="10" x2="30" y2="-15" stroke="#0E1B2C" strokeWidth="0.8" />
            <path d="M 30 -15 L 30 -2 L 50 -8 Z" fill="#FAF6EC" stroke="#0E1B2C" strokeWidth="0.6" />
            <line x1="30" y1="-12" x2="30" y2="-18" stroke="#A6822E" strokeWidth="0.5" />
          </g>

          {/* Second smaller boat */}
          <g transform="translate(180, 510)">
            <path d="M 0 8 L 40 8 L 36 18 L 4 18 Z" fill="#FAF6EC" stroke="#0E1B2C" strokeWidth="0.5" opacity="0.9" />
            <line x1="20" y1="8" x2="20" y2="-8" stroke="#0E1B2C" strokeWidth="0.6" />
          </g>

          {/* Paper grain overlay */}
          <rect width="1200" height="600" fill="url(#paper-grain)" opacity="0.6" />
        </>
      ) : (
        // Tall variant — fewer elements, vertical composition
        <>
          <rect width="600" height="500" fill="url(#sky-grad)" />
          <rect y="500" width="600" height="200" fill="url(#water-grad)" />
          <path
            d="M 0 400 Q 150 320, 300 340 Q 450 350, 600 380 L 600 500 L 0 500 Z"
            fill="url(#hill-grad)"
          />
          {/* Houses + olive trees scaled to portrait */}
          {[
            { x: 100, y: 410, w: 50, h: 38 },
            { x: 180, y: 390, w: 60, h: 45 },
            { x: 280, y: 370, w: 55, h: 42 },
            { x: 380, y: 380, w: 50, h: 38 },
            { x: 470, y: 400, w: 55, h: 42 },
          ].map((h, i) => (
            <g key={i}>
              <rect x={h.x} y={h.y} width={h.w} height={h.h} fill="#FAF6EC" stroke="#0E1B2C" strokeWidth="0.6" />
              <path
                d={`M ${h.x - 2} ${h.y} L ${h.x + h.w / 2} ${h.y - h.h * 0.35} L ${h.x + h.w + 2} ${h.y} Z`}
                fill="#A6822E"
              />
            </g>
          ))}
          {[200, 250, 350, 420, 500].map((x, i) => (
            <g key={i}>
              <ellipse cx={x} cy={345 - i * 5} rx="7" ry="9" fill="#7A8B5F" opacity="0.7" />
            </g>
          ))}
          <rect width="600" height="800" fill="url(#paper-grain)" opacity="0.6" />
        </>
      )}
    </svg>
  );
}
