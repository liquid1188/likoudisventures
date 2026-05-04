import { clsx } from 'clsx';

interface CollectionBannerProps {
  className?: string;
}

/**
 * The Likoudis Collection banner — a viewing-room scene from a small auction
 * house or private dealer's showroom.
 *
 * Composition: three plinths of different heights in a row, each carrying a
 * curated object — a Byzantine icon on the left (lowest plinth), a Greek
 * amphora at center (tallest plinth), an olive-wood box with brass detail on
 * the right (medium plinth). Above the row, a thin gallery hanging line.
 * Numbered card tags on each object — "I", "II", "III" — like lot numbers.
 * Faint moulding line above; herringbone wood floor in foreground.
 *
 * Palette: deep navy ground, warm bone plinths, ochre-gilt icon, olive accents
 * on amphora, brass on olive-wood box. The auction-catalog register.
 */
export function CollectionBanner({ className }: CollectionBannerProps) {
  return (
    <svg
      viewBox="0 0 1200 600"
      className={clsx('w-full h-auto', className)}
      preserveAspectRatio="xMidYMid slice"
      aria-label="Illustration of three plinths in an auction viewing room with curated objects"
    >
      <defs>
        <linearGradient id="col-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0E1B2C" />
          <stop offset="0.7" stopColor="#1A2638" />
          <stop offset="1" stopColor="#0E1B2C" />
        </linearGradient>
        <radialGradient id="col-light" cx="50%" cy="40%" r="50%">
          <stop offset="0" stopColor="#C8A24A" stopOpacity="0.18" />
          <stop offset="1" stopColor="#C8A24A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="col-plinth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FAF6EC" />
          <stop offset="1" stopColor="#EDE6D6" />
        </linearGradient>
        <linearGradient id="col-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5C4A2A" stopOpacity="0.7" />
          <stop offset="1" stopColor="#3E3220" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="col-amphora" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3E3220" />
          <stop offset="0.5" stopColor="#1A2638" />
          <stop offset="1" stopColor="#0E1B2C" />
        </linearGradient>
        <pattern id="col-grain" x="0" y="0" width="240" height="240" patternUnits="userSpaceOnUse">
          <rect width="240" height="240" fill="transparent" />
          <circle cx="60" cy="50" r="0.5" fill="#FAF6EC" opacity="0.04" />
          <circle cx="140" cy="100" r="0.4" fill="#FAF6EC" opacity="0.05" />
          <circle cx="200" cy="180" r="0.5" fill="#FAF6EC" opacity="0.04" />
          <circle cx="30" cy="210" r="0.4" fill="#FAF6EC" opacity="0.05" />
        </pattern>
      </defs>

      {/* Wall */}
      <rect width="1200" height="500" fill="url(#col-wall)" />

      {/* Spotlight glow over center plinth */}
      <ellipse cx="600" cy="280" rx="420" ry="200" fill="url(#col-light)" />

      {/* Floor */}
      <rect y="500" width="1200" height="100" fill="url(#col-floor)" />

      {/* Wood-floor herringbone */}
      {Array.from({ length: 12 }, (_, i) => (
        <g key={i}>
          <line x1={i * 100} y1="500" x2={i * 100 + 50} y2="600" stroke="#1A2638" strokeWidth="0.4" opacity="0.45" />
          <line x1={i * 100 + 40} y1="500" x2={i * 100 + 90} y2="600" stroke="#1A2638" strokeWidth="0.4" opacity="0.45" />
        </g>
      ))}

      {/* Wall–floor shadow */}
      <rect y="495" width="1200" height="8" fill="#000" opacity="0.3" />

      {/* Upper crown moulding line */}
      <line x1="0" y1="100" x2="1200" y2="100" stroke="#A6822E" strokeWidth="0.7" opacity="0.4" />
      <line x1="0" y1="105" x2="1200" y2="105" stroke="#C8A24A" strokeWidth="0.5" opacity="0.3" />

      {/* Hanging line — picture rail (where catalog cards/ribbons could hang) */}
      <line x1="100" y1="160" x2="1100" y2="160" stroke="#C8A24A" strokeWidth="0.8" opacity="0.55" />

      {/* LEFT PLINTH — shortest, with Byzantine icon */}
      <g>
        {/* Plinth */}
        <rect x="220" y="370" width="160" height="130" fill="url(#col-plinth)" stroke="#0E1B2C" strokeWidth="1" />
        {/* Top moulding */}
        <rect x="215" y="365" width="170" height="8" fill="#FAF6EC" stroke="#0E1B2C" strokeWidth="0.7" />
        {/* Base */}
        <rect x="215" y="500" width="170" height="6" fill="#FAF6EC" stroke="#0E1B2C" strokeWidth="0.7" />
        {/* Lot number plaque */}
        <rect x="285" y="450" width="30" height="22" fill="#C8A24A" stroke="#5C4A2A" strokeWidth="0.5" />
        <text x="300" y="466" textAnchor="middle" fontFamily="serif" fontSize="13" fill="#0E1B2C" fontStyle="italic">
          I
        </text>

        {/* BYZANTINE ICON on plinth */}
        <g transform="translate(280, 250)">
          {/* Icon frame (gilt) */}
          <rect x="0" y="0" width="60" height="80" fill="#C8A24A" stroke="#5C4A2A" strokeWidth="1" />
          {/* Inner panel */}
          <rect x="5" y="5" width="50" height="70" fill="#A6822E" />
          {/* Halo */}
          <circle cx="30" cy="28" r="14" fill="none" stroke="#FAF6EC" strokeWidth="1.2" opacity="0.85" />
          <circle cx="30" cy="28" r="13" fill="#C8A24A" opacity="0.5" />
          {/* Saint's head/hood */}
          <path d="M 18 28 Q 18 18, 30 18 Q 42 18, 42 28 Q 42 42, 30 42 Q 18 42, 18 28 Z" fill="#3E3220" />
          {/* Face shadow */}
          <ellipse cx="30" cy="32" rx="6" ry="7" fill="#A6822E" opacity="0.85" />
          {/* Robe */}
          <path d="M 14 42 L 12 70 L 48 70 L 46 42 Q 38 50, 30 50 Q 22 50, 14 42 Z" fill="#3E3220" />
          {/* Cross at top */}
          <line x1="30" y1="6" x2="30" y2="14" stroke="#FAF6EC" strokeWidth="0.8" />
          <line x1="26" y1="9" x2="34" y2="9" stroke="#FAF6EC" strokeWidth="0.8" />
        </g>

        {/* Spotlight on icon */}
        <ellipse cx="300" cy="290" rx="55" ry="60" fill="#C8A24A" opacity="0.07" />
      </g>

      {/* CENTER PLINTH — tallest, with Greek amphora */}
      <g>
        {/* Plinth */}
        <rect x="540" y="320" width="180" height="180" fill="url(#col-plinth)" stroke="#0E1B2C" strokeWidth="1" />
        {/* Top moulding */}
        <rect x="535" y="315" width="190" height="9" fill="#FAF6EC" stroke="#0E1B2C" strokeWidth="0.7" />
        {/* Base moulding */}
        <rect x="535" y="500" width="190" height="6" fill="#FAF6EC" stroke="#0E1B2C" strokeWidth="0.7" />
        {/* Lot plaque */}
        <rect x="615" y="450" width="30" height="22" fill="#C8A24A" stroke="#5C4A2A" strokeWidth="0.5" />
        <text x="630" y="466" textAnchor="middle" fontFamily="serif" fontSize="13" fill="#0E1B2C" fontStyle="italic">
          II
        </text>

        {/* GREEK AMPHORA on plinth */}
        <g transform="translate(595, 165)">
          {/* Body */}
          <path
            d="M 35 150 Q 5 145, 5 110 Q 5 75, 18 50 Q 25 35, 25 25 L 45 25 Q 45 35, 52 50 Q 65 75, 65 110 Q 65 145, 35 150 Z"
            fill="url(#col-amphora)"
            stroke="#0E1B2C"
            strokeWidth="0.8"
          />
          {/* Neck */}
          <path d="M 25 25 L 22 5 L 48 5 L 45 25 Z" fill="url(#col-amphora)" stroke="#0E1B2C" strokeWidth="0.8" />
          {/* Lip/rim */}
          <ellipse cx="35" cy="5" rx="14" ry="3" fill="#1A2638" stroke="#0E1B2C" strokeWidth="0.7" />
          {/* Handles (curved) */}
          <path d="M 25 25 Q 12 32, 14 55 Q 16 68, 22 70" fill="none" stroke="#0E1B2C" strokeWidth="2.5" />
          <path d="M 45 25 Q 58 32, 56 55 Q 54 68, 48 70" fill="none" stroke="#0E1B2C" strokeWidth="2.5" />
          {/* Black-figure decoration band */}
          <ellipse cx="35" cy="100" rx="32" ry="3" fill="none" stroke="#C8A24A" strokeWidth="0.5" opacity="0.7" />
          <ellipse cx="35" cy="115" rx="32" ry="3" fill="none" stroke="#C8A24A" strokeWidth="0.5" opacity="0.7" />
          {/* Suggested figure motif */}
          <g opacity="0.65">
            <ellipse cx="35" cy="80" rx="3" ry="4" fill="#C8A24A" />
            <line x1="35" y1="84" x2="35" y2="95" stroke="#C8A24A" strokeWidth="1.2" />
            <line x1="29" y1="90" x2="41" y2="90" stroke="#C8A24A" strokeWidth="0.9" />
          </g>
          {/* Olive sprig motif on shoulder */}
          <g transform="translate(20, 60)" opacity="0.7">
            <path d="M 0 0 Q 12 -3, 24 0" stroke="#8FA67D" strokeWidth="0.7" fill="none" />
            <ellipse cx="6" cy="-1" rx="2.5" ry="0.9" fill="#8FA67D" transform="rotate(-15 6 -1)" />
            <ellipse cx="14" cy="-2" rx="2.5" ry="0.9" fill="#8FA67D" />
            <ellipse cx="22" cy="-1" rx="2.5" ry="0.9" fill="#8FA67D" transform="rotate(15 22 -1)" />
          </g>
          {/* Highlight */}
          <line x1="12" y1="90" x2="12" y2="135" stroke="#FAF6EC" strokeWidth="0.6" opacity="0.3" />
        </g>

        {/* Spotlight on amphora */}
        <ellipse cx="630" cy="245" rx="80" ry="100" fill="#C8A24A" opacity="0.08" />
      </g>

      {/* RIGHT PLINTH — medium, with olive-wood box */}
      <g>
        {/* Plinth */}
        <rect x="860" y="350" width="170" height="150" fill="url(#col-plinth)" stroke="#0E1B2C" strokeWidth="1" />
        <rect x="855" y="345" width="180" height="8" fill="#FAF6EC" stroke="#0E1B2C" strokeWidth="0.7" />
        <rect x="855" y="500" width="180" height="6" fill="#FAF6EC" stroke="#0E1B2C" strokeWidth="0.7" />
        {/* Lot plaque */}
        <rect x="930" y="450" width="30" height="22" fill="#C8A24A" stroke="#5C4A2A" strokeWidth="0.5" />
        <text x="945" y="466" textAnchor="middle" fontFamily="serif" fontSize="12" fill="#0E1B2C" fontStyle="italic">
          III
        </text>

        {/* OLIVE-WOOD BOX with brass detail */}
        <g transform="translate(890, 270)">
          {/* Box body */}
          <path d="M 0 30 L 110 30 L 110 75 L 0 75 Z" fill="#A6822E" stroke="#3E3220" strokeWidth="0.8" />
          {/* Box lid (slightly wider) */}
          <path d="M -4 12 L 114 12 L 114 32 L -4 32 Z" fill="#C8A24A" stroke="#3E3220" strokeWidth="0.8" />
          <path d="M -4 12 L 8 0 L 102 0 L 114 12 Z" fill="#C8A24A" stroke="#3E3220" strokeWidth="0.8" />
          {/* Wood-grain lines */}
          <path d="M 5 40 Q 30 38, 60 42 Q 90 40, 105 42" stroke="#5C4A2A" strokeWidth="0.4" fill="none" opacity="0.6" />
          <path d="M 5 50 Q 30 49, 60 52 Q 90 50, 105 52" stroke="#5C4A2A" strokeWidth="0.4" fill="none" opacity="0.55" />
          <path d="M 5 60 Q 30 58, 60 62 Q 90 60, 105 62" stroke="#5C4A2A" strokeWidth="0.4" fill="none" opacity="0.5" />
          {/* Brass clasp */}
          <rect x="50" y="20" width="10" height="14" fill="#C8A24A" stroke="#5C4A2A" strokeWidth="0.5" />
          <circle cx="55" cy="27" r="1.5" fill="#5C4A2A" />
          {/* Brass corners */}
          {[
            [-2, 14],
            [108, 14],
            [-2, 70],
            [108, 70],
          ].map(([x, y], i) => (
            <rect key={i} x={x} y={y} width="6" height="6" fill="#C8A24A" stroke="#5C4A2A" strokeWidth="0.4" />
          ))}
          {/* Subtle highlight */}
          <line x1="0" y1="35" x2="0" y2="72" stroke="#FAF6EC" strokeWidth="0.6" opacity="0.3" />
        </g>

        {/* Spotlight */}
        <ellipse cx="945" cy="320" rx="60" ry="70" fill="#C8A24A" opacity="0.06" />
      </g>

      {/* Numbered hanging tags from picture rail (hint of catalog flow) */}
      {[
        { x: 300, num: 'I' },
        { x: 630, num: 'II' },
        { x: 945, num: 'III' },
      ].map((t, i) => (
        <g key={i} transform={`translate(${t.x}, 160)`}>
          <line x1="0" y1="0" x2="0" y2="20" stroke="#C8A24A" strokeWidth="0.5" opacity="0.55" />
          <rect x="-10" y="20" width="20" height="14" fill="#FAF6EC" stroke="#5C4A2A" strokeWidth="0.5" opacity="0.85" />
          <text x="0" y="31" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#0E1B2C" fontStyle="italic">
            {t.num}
          </text>
        </g>
      ))}

      {/* Paper grain */}
      <rect width="1200" height="600" fill="url(#col-grain)" opacity="0.5" />
    </svg>
  );
}
