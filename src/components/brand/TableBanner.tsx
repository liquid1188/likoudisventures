import { clsx } from 'clsx';

interface TableBannerProps {
  className?: string;
}

/**
 * The Table banner — a Mediterranean still life on a wooden counter.
 *
 * Composition: warm wooden counter with a tall olive-oil bottle, a honey jar
 * with a wooden dipper, a clay bowl of olives, a small loaf of bread, and an
 * oil-pourer with a curved spout. Hanging strings of dried herbs and a window
 * suggested at the back letting in light.
 *
 * Palette: warm cream wall, ochre wood counter, olive bottle (deep), honey
 * amber, bread crust, terracotta clay — a Greek pantry shelf in light.
 */
export function TableBanner({ className }: TableBannerProps) {
  return (
    <svg
      viewBox="0 0 1200 600"
      className={clsx('w-full h-auto', className)}
      preserveAspectRatio="xMidYMid slice"
      aria-label="Illustration of a Mediterranean still life with olive oil, honey, olives, and bread"
    >
      <defs>
        <linearGradient id="tb-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EDE6D6" />
          <stop offset="1" stopColor="#F2EAD6" />
        </linearGradient>
        <linearGradient id="tb-counter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A6822E" stopOpacity="0.85" />
          <stop offset="1" stopColor="#5C4A2A" />
        </linearGradient>
        <linearGradient id="tb-window" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C8A24A" stopOpacity="0.55" />
          <stop offset="1" stopColor="#FAF6EC" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="tb-oil-bottle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5C7251" />
          <stop offset="1" stopColor="#3F5236" />
        </linearGradient>
        <linearGradient id="tb-honey" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C8A24A" />
          <stop offset="1" stopColor="#A6822E" />
        </linearGradient>
        <pattern id="tb-grain" x="0" y="0" width="240" height="240" patternUnits="userSpaceOnUse">
          <rect width="240" height="240" fill="transparent" />
          <circle cx="60" cy="50" r="0.5" fill="#0E1B2C" opacity="0.04" />
          <circle cx="140" cy="100" r="0.4" fill="#0E1B2C" opacity="0.05" />
          <circle cx="200" cy="180" r="0.5" fill="#0E1B2C" opacity="0.04" />
          <circle cx="30" cy="210" r="0.4" fill="#0E1B2C" opacity="0.05" />
        </pattern>
      </defs>

      {/* Wall */}
      <rect width="1200" height="430" fill="url(#tb-wall)" />

      {/* Counter — warm wood */}
      <rect y="430" width="1200" height="170" fill="url(#tb-counter)" />

      {/* Wood-grain lines on counter */}
      {[450, 470, 495, 525, 555, 580].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="1200" y2={y} stroke="#3E3220" strokeWidth="0.5" opacity="0.3" />
      ))}
      {/* Wood plank vertical seams */}
      {[200, 480, 740, 1000].map((x, i) => (
        <line key={i} x1={x} y1="430" x2={x} y2="600" stroke="#3E3220" strokeWidth="0.4" opacity="0.35" />
      ))}

      {/* Wall–counter shadow */}
      <rect y="425" width="1200" height="8" fill="#0E1B2C" opacity="0.18" />

      {/* Window in back wall (left side) */}
      <g>
        <rect x="80" y="80" width="180" height="220" fill="url(#tb-window)" stroke="#5C4A2A" strokeWidth="2" />
        {/* Window mullions */}
        <line x1="170" y1="80" x2="170" y2="300" stroke="#5C4A2A" strokeWidth="1.5" />
        <line x1="80" y1="190" x2="260" y2="190" stroke="#5C4A2A" strokeWidth="1.5" />
        {/* Sill */}
        <rect x="70" y="298" width="200" height="6" fill="#3E3220" />
        {/* Suggestion of countryside through window */}
        <path d="M 80 230 Q 130 215, 170 225 Q 220 215, 260 230 L 260 295 L 80 295 Z" fill="#8FA67D" opacity="0.45" />
        <ellipse cx="135" cy="218" rx="6" ry="9" fill="#5C7251" opacity="0.6" />
        <ellipse cx="218" cy="220" rx="5" ry="8" fill="#5C7251" opacity="0.6" />
        {/* Distant sun */}
        <circle cx="220" cy="135" r="14" fill="#C8A24A" opacity="0.5" />
      </g>

      {/* Hanging dried herbs and garlic, top of frame */}
      <g transform="translate(720, 50)">
        {/* String */}
        <line x1="0" y1="0" x2="0" y2="60" stroke="#5C4A2A" strokeWidth="0.7" />
        {/* Herb bundle */}
        <path d="M -18 60 Q 0 90, 18 60" fill="#5C7251" stroke="#3F5236" strokeWidth="0.6" opacity="0.85" />
        {[-12, -6, 0, 6, 12].map((x, i) => (
          <line key={i} x1={x} y1="60" x2={x * 0.8} y2={88 - Math.abs(x) * 0.5} stroke="#3F5236" strokeWidth="0.6" opacity="0.85" />
        ))}
        {/* Tied wrap */}
        <ellipse cx="0" cy="62" rx="12" ry="3" fill="#A6822E" />
      </g>
      <g transform="translate(820, 50)">
        <line x1="0" y1="0" x2="0" y2="50" stroke="#5C4A2A" strokeWidth="0.7" />
        {/* Garlic bulb */}
        <ellipse cx="0" cy="62" rx="11" ry="14" fill="#FAF6EC" stroke="#5C4A2A" strokeWidth="0.7" />
        <line x1="-8" y1="55" x2="8" y2="55" stroke="#5C4A2A" strokeWidth="0.4" opacity="0.7" />
        <line x1="-9" y1="65" x2="9" y2="65" stroke="#5C4A2A" strokeWidth="0.4" opacity="0.6" />
        <line x1="0" y1="48" x2="0" y2="76" stroke="#5C4A2A" strokeWidth="0.5" opacity="0.5" />
      </g>

      {/* OIL BOTTLE — tall, narrow shoulders, on counter */}
      <g transform="translate(380, 280)">
        {/* Shadow */}
        <ellipse cx="35" cy="153" rx="40" ry="6" fill="#0E1B2C" opacity="0.3" />
        {/* Bottle body */}
        <path
          d="M 12 20 Q 12 12, 28 12 L 42 12 Q 58 12, 58 20 L 58 35 Q 58 50, 65 60 L 65 145 Q 65 150, 60 150 L 10 150 Q 5 150, 5 145 L 5 60 Q 12 50, 12 35 Z"
          fill="url(#tb-oil-bottle)"
          stroke="#0E1B2C"
          strokeWidth="0.8"
        />
        {/* Cork */}
        <rect x="22" y="0" width="26" height="14" fill="#5C4A2A" rx="1" />
        <rect x="22" y="0" width="26" height="14" fill="none" stroke="#3E3220" strokeWidth="0.5" rx="1" />
        {/* Highlight */}
        <line x1="14" y1="65" x2="14" y2="140" stroke="#B5C4A2" strokeWidth="1.2" opacity="0.5" />
        {/* Label */}
        <rect x="13" y="80" width="44" height="40" fill="#FAF6EC" stroke="#5C4A2A" strokeWidth="0.5" />
        <text x="35" y="95" textAnchor="middle" fontFamily="serif" fontSize="6" fill="#0E1B2C" fontStyle="italic">
          Likoudis
        </text>
        <line x1="20" y1="100" x2="50" y2="100" stroke="#A6822E" strokeWidth="0.4" />
        <text x="35" y="110" textAnchor="middle" fontFamily="sans-serif" fontSize="4" fill="#0E1B2C" letterSpacing="0.5">
          OLIVE OIL
        </text>
        <text x="35" y="116" textAnchor="middle" fontFamily="serif" fontSize="3.5" fill="#5C4A2A" fontStyle="italic">
          Kefalonia
        </text>
      </g>

      {/* HONEY JAR with dipper */}
      <g transform="translate(540, 360)">
        {/* Shadow */}
        <ellipse cx="35" cy="103" rx="38" ry="5" fill="#0E1B2C" opacity="0.25" />
        {/* Jar body */}
        <path
          d="M 5 30 Q 5 20, 15 20 L 55 20 Q 65 20, 65 30 L 65 95 Q 65 100, 60 100 L 10 100 Q 5 100, 5 95 Z"
          fill="url(#tb-honey)"
          stroke="#5C4A2A"
          strokeWidth="0.8"
        />
        {/* Lid */}
        <rect x="5" y="13" width="60" height="10" fill="#3E3220" stroke="#0E1B2C" strokeWidth="0.6" rx="1" />
        <line x1="10" y1="18" x2="60" y2="18" stroke="#A6822E" strokeWidth="0.4" opacity="0.7" />
        {/* Honey surface visible at top */}
        <ellipse cx="35" cy="33" rx="29" ry="4" fill="#A6822E" />
        {/* Wooden dipper sticking out */}
        <line x1="48" y1="15" x2="65" y2="-15" stroke="#5C4A2A" strokeWidth="3.5" strokeLinecap="round" />
        <ellipse cx="65" cy="-15" rx="3" ry="3" fill="#5C4A2A" />
        {/* Dipper grooves */}
        <line x1="60" y1="-8" x2="63" y2="-13" stroke="#3E3220" strokeWidth="0.6" />
        <line x1="58" y1="-3" x2="61" y2="-8" stroke="#3E3220" strokeWidth="0.6" />
        {/* Highlight */}
        <line x1="12" y1="35" x2="12" y2="90" stroke="#FAF6EC" strokeWidth="1" opacity="0.4" />
      </g>

      {/* OLIVE BOWL — clay terracotta */}
      <g transform="translate(700, 410)">
        {/* Shadow */}
        <ellipse cx="55" cy="58" rx="60" ry="5" fill="#0E1B2C" opacity="0.25" />
        {/* Bowl body */}
        <path d="M 0 15 Q 0 50, 55 55 Q 110 50, 110 15 Z" fill="#A6822E" stroke="#5C4A2A" strokeWidth="0.8" />
        {/* Inner shadow */}
        <ellipse cx="55" cy="15" rx="55" ry="8" fill="#5C4A2A" opacity="0.4" />
        {/* Olives in bowl */}
        {[
          { x: 22, y: 12, color: '#5C7251' },
          { x: 38, y: 8, color: '#3F5236' },
          { x: 52, y: 10, color: '#5C7251' },
          { x: 67, y: 9, color: '#3F5236' },
          { x: 82, y: 12, color: '#5C7251' },
          { x: 30, y: 18, color: '#3F5236' },
          { x: 48, y: 20, color: '#5C7251' },
          { x: 65, y: 18, color: '#3F5236' },
          { x: 80, y: 20, color: '#5C7251' },
          { x: 40, y: 26, color: '#3F5236' },
          { x: 60, y: 28, color: '#5C7251' },
          { x: 75, y: 26, color: '#3F5236' },
        ].map((o, i) => (
          <ellipse key={i} cx={o.x} cy={o.y} rx="5" ry="6" fill={o.color} stroke="#0E1B2C" strokeWidth="0.4" opacity="0.95" />
        ))}
        {/* Olive highlights */}
        {[
          { x: 21, y: 10 },
          { x: 51, y: 8 },
          { x: 81, y: 10 },
        ].map((h, i) => (
          <ellipse key={i} cx={h.x} cy={h.y} rx="1" ry="1.5" fill="#B5C4A2" opacity="0.7" />
        ))}
        {/* Decorative rim band */}
        <line x1="2" y1="13" x2="108" y2="13" stroke="#3E3220" strokeWidth="0.5" opacity="0.6" />
        <line x1="0" y1="2" x2="110" y2="2" stroke="#5C4A2A" strokeWidth="0.5" opacity="0.7" />
      </g>

      {/* BREAD LOAF */}
      <g transform="translate(870, 415)">
        {/* Shadow */}
        <ellipse cx="60" cy="62" rx="70" ry="5" fill="#0E1B2C" opacity="0.22" />
        {/* Loaf — rounded boule */}
        <path d="M 0 35 Q 0 5, 60 0 Q 120 5, 120 35 Q 120 60, 60 60 Q 0 60, 0 35 Z" fill="#C8A24A" stroke="#5C4A2A" strokeWidth="0.8" />
        {/* Crust score marks */}
        <path d="M 30 12 Q 60 5, 90 12" stroke="#5C4A2A" strokeWidth="0.6" fill="none" opacity="0.7" />
        <path d="M 24 22 Q 60 14, 96 22" stroke="#5C4A2A" strokeWidth="0.6" fill="none" opacity="0.65" />
        <path d="M 22 32 Q 60 24, 98 32" stroke="#5C4A2A" strokeWidth="0.6" fill="none" opacity="0.6" />
        {/* Highlight */}
        <ellipse cx="40" cy="12" rx="20" ry="4" fill="#FAF6EC" opacity="0.35" />
      </g>

      {/* OIL POURER — small, on left */}
      <g transform="translate(280, 430)">
        {/* Shadow */}
        <ellipse cx="22" cy="63" rx="30" ry="4" fill="#0E1B2C" opacity="0.22" />
        {/* Body */}
        <path d="M 5 60 Q 5 15, 22 15 Q 40 15, 40 60 Q 40 65, 35 65 L 10 65 Q 5 65, 5 60 Z" fill="#1A2638" stroke="#0E1B2C" strokeWidth="0.6" />
        {/* Spout */}
        <path d="M 38 25 Q 50 22, 55 12 L 50 15 Q 48 22, 38 30" fill="#1A2638" stroke="#0E1B2C" strokeWidth="0.6" />
        {/* Handle */}
        <path d="M 5 30 Q -10 35, -10 50 Q -10 55, 5 55" fill="none" stroke="#0E1B2C" strokeWidth="2" />
        {/* Brass collar */}
        <rect x="3" y="14" width="40" height="3" fill="#C8A24A" />
        {/* Highlight */}
        <line x1="10" y1="22" x2="10" y2="55" stroke="#FAF6EC" strokeWidth="0.7" opacity="0.4" />
      </g>

      {/* Olive sprig laid on counter, foreground right */}
      <g transform="translate(1020, 510) rotate(-12)">
        <path d="M 0 0 Q 50 -8, 100 -5" stroke="#5C7251" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {[
          { x: 18, y: -2, rot: -25 },
          { x: 36, y: -6, rot: 18 },
          { x: 54, y: -8, rot: -22 },
          { x: 72, y: -7, rot: 22 },
          { x: 88, y: -6, rot: -20 },
        ].map((leaf, i) => (
          <ellipse
            key={i}
            cx={leaf.x}
            cy={leaf.y}
            rx="8"
            ry="2.5"
            fill="#8FA67D"
            opacity="0.85"
            transform={`rotate(${leaf.rot} ${leaf.x} ${leaf.y})`}
          />
        ))}
        <ellipse cx="42" cy="-3" rx="2.4" ry="3.2" fill="#5C7251" />
        <ellipse cx="65" cy="-5" rx="2.4" ry="3.2" fill="#5C7251" />
      </g>

      {/* Paper grain */}
      <rect width="1200" height="600" fill="url(#tb-grain)" opacity="0.45" />
    </svg>
  );
}
