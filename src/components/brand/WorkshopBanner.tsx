import { clsx } from 'clsx';

interface WorkshopBannerProps {
  className?: string;
}

/**
 * The Workshop banner — the elevation of a 19th-century craftsman's shopfront.
 *
 * Composition: a shop facade with a pediment, a hanging sign on a wrought-iron
 * bracket reading "WORKSHOP · BY APPOINTMENT," two windows flanking a central
 * paneled door, the silhouettes of tools (calipers, square, plane, chisel) on
 * a wall glimpsed through one window. Cobblestones below the door.
 *
 * Palette: navy ground, bone facade, ochre sign accents, olive door — the
 * register of a printed trade announcement.
 */
export function WorkshopBanner({ className }: WorkshopBannerProps) {
  return (
    <svg
      viewBox="0 0 1200 600"
      className={clsx('w-full h-auto', className)}
      preserveAspectRatio="xMidYMid slice"
      aria-label="Illustration of a 19th-century craftsman workshop shopfront"
    >
      <defs>
        <linearGradient id="ws-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0E1B2C" />
          <stop offset="0.6" stopColor="#1A2638" />
          <stop offset="1" stopColor="#1A2638" />
        </linearGradient>
        <linearGradient id="ws-facade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FAF6EC" />
          <stop offset="1" stopColor="#EDE6D6" />
        </linearGradient>
        <linearGradient id="ws-window" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1A2638" />
          <stop offset="1" stopColor="#0E1B2C" />
        </linearGradient>
        <pattern id="ws-grain" x="0" y="0" width="240" height="240" patternUnits="userSpaceOnUse">
          <rect width="240" height="240" fill="transparent" />
          <circle cx="60" cy="50" r="0.5" fill="#FAF6EC" opacity="0.04" />
          <circle cx="140" cy="100" r="0.4" fill="#FAF6EC" opacity="0.05" />
          <circle cx="200" cy="180" r="0.5" fill="#FAF6EC" opacity="0.04" />
          <circle cx="30" cy="210" r="0.4" fill="#FAF6EC" opacity="0.05" />
        </pattern>
      </defs>

      {/* Night sky / dark ground */}
      <rect width="1200" height="600" fill="url(#ws-sky)" />

      {/* Distant building silhouettes */}
      <path
        d="M 0 320 L 100 320 L 100 280 L 180 280 L 180 310 L 280 310 L 280 290 L 360 290 L 360 320 L 0 320 Z"
        fill="#0E1B2C"
        opacity="0.7"
      />
      <path
        d="M 800 310 L 900 310 L 900 285 L 1000 285 L 1000 320 L 1100 320 L 1100 295 L 1200 295 L 1200 320 L 800 320 Z"
        fill="#0E1B2C"
        opacity="0.7"
      />

      {/* Cobblestone street */}
      <rect y="540" width="1200" height="60" fill="#0E1B2C" />
      {Array.from({ length: 20 }, (_, i) => (
        <ellipse
          key={i}
          cx={30 + i * 60}
          cy={555 + (i % 2) * 18}
          rx="22"
          ry="6"
          fill="#1A2638"
          stroke="#0E1B2C"
          strokeWidth="0.5"
          opacity="0.85"
        />
      ))}
      {Array.from({ length: 19 }, (_, i) => (
        <ellipse
          key={i}
          cx={60 + i * 60}
          cy={580 + (i % 2) * 12}
          rx="22"
          ry="6"
          fill="#1A2638"
          stroke="#0E1B2C"
          strokeWidth="0.5"
          opacity="0.85"
        />
      ))}

      {/* Main facade — large rectangle */}
      <rect x="350" y="180" width="500" height="360" fill="url(#ws-facade)" stroke="#0E1B2C" strokeWidth="1.2" />

      {/* Stone-block joints on facade */}
      {[230, 280, 330, 380, 430, 480].map((y, i) => (
        <line key={i} x1="350" y1={y} x2="850" y2={y} stroke="#1A2638" strokeWidth="0.3" opacity="0.25" />
      ))}
      {[450, 550, 650, 750].map((x, i) => (
        <line key={i} x1={x} y1="220" x2={x} y2="540" stroke="#1A2638" strokeWidth="0.3" opacity="0.2" />
      ))}

      {/* Pediment — triangular top */}
      <path d="M 350 180 L 600 110 L 850 180 Z" fill="url(#ws-facade)" stroke="#0E1B2C" strokeWidth="1.2" />
      <path d="M 380 175 L 600 130 L 820 175" fill="none" stroke="#A6822E" strokeWidth="1" opacity="0.75" />
      {/* Tympanum ornament — small olive sprig */}
      <g transform="translate(600, 165)">
        <path d="M -22 0 Q 0 -8, 22 0" stroke="#5C7251" strokeWidth="1" fill="none" strokeLinecap="round" />
        <ellipse cx="-12" cy="-3" rx="5" ry="1.6" fill="#8FA67D" transform="rotate(-15 -12 -3)" />
        <ellipse cx="0" cy="-5" rx="5" ry="1.6" fill="#8FA67D" />
        <ellipse cx="12" cy="-3" rx="5" ry="1.6" fill="#8FA67D" transform="rotate(15 12 -3)" />
      </g>

      {/* Frieze with date */}
      <rect x="370" y="200" width="460" height="28" fill="#1A2638" />
      <text x="600" y="220" textAnchor="middle" fill="#C8A24A" fontFamily="serif" fontSize="14" letterSpacing="3" fontStyle="italic">
        ESTABLISHED · 2026
      </text>

      {/* Left window */}
      <g>
        <rect x="385" y="260" width="120" height="160" fill="url(#ws-window)" stroke="#0E1B2C" strokeWidth="1" />
        <rect x="385" y="260" width="120" height="160" fill="none" stroke="#A6822E" strokeWidth="0.6" opacity="0.5" />
        {/* Window cross */}
        <line x1="445" y1="260" x2="445" y2="420" stroke="#FAF6EC" strokeWidth="1.5" opacity="0.7" />
        <line x1="385" y1="340" x2="505" y2="340" stroke="#FAF6EC" strokeWidth="1.5" opacity="0.7" />
        {/* Tools silhouette inside left window */}
        <g opacity="0.55" stroke="#C8A24A" fill="none" strokeLinecap="round">
          {/* Calipers */}
          <line x1="400" y1="285" x2="400" y2="320" strokeWidth="1.4" />
          <line x1="400" y1="285" x2="408" y2="285" strokeWidth="1.4" />
          <line x1="408" y1="285" x2="408" y2="318" strokeWidth="1.4" />
          {/* Square */}
          <path d="M 470 290 L 495 290 L 495 315" strokeWidth="1.4" />
          {/* Hand-plane */}
          <rect x="395" y="370" width="40" height="14" stroke="#C8A24A" strokeWidth="1.2" fill="none" />
          <line x1="412" y1="372" x2="418" y2="382" strokeWidth="1.2" />
          {/* Chisel */}
          <line x1="465" y1="375" x2="495" y2="375" strokeWidth="1.6" />
          <line x1="495" y1="375" x2="500" y2="378" strokeWidth="1.4" />
        </g>
      </g>

      {/* Right window */}
      <g>
        <rect x="695" y="260" width="120" height="160" fill="url(#ws-window)" stroke="#0E1B2C" strokeWidth="1" />
        <rect x="695" y="260" width="120" height="160" fill="none" stroke="#A6822E" strokeWidth="0.6" opacity="0.5" />
        <line x1="755" y1="260" x2="755" y2="420" stroke="#FAF6EC" strokeWidth="1.5" opacity="0.7" />
        <line x1="695" y1="340" x2="815" y2="340" stroke="#FAF6EC" strokeWidth="1.5" opacity="0.7" />
        {/* Glow from inside (lit workshop) */}
        <ellipse cx="755" cy="340" rx="55" ry="65" fill="#C8A24A" opacity="0.18" />
      </g>

      {/* Central door — olive painted */}
      <g>
        <rect x="540" y="280" width="120" height="260" fill="#5C7251" stroke="#0E1B2C" strokeWidth="1" />
        {/* Door panels */}
        <rect x="555" y="295" width="90" height="100" fill="none" stroke="#0E1B2C" strokeWidth="0.7" opacity="0.6" />
        <rect x="555" y="410" width="90" height="115" fill="none" stroke="#0E1B2C" strokeWidth="0.7" opacity="0.6" />
        {/* Door knob (brass) */}
        <circle cx="630" cy="455" r="3" fill="#C8A24A" />
        <circle cx="630" cy="455" r="3" fill="none" stroke="#5C4A2A" strokeWidth="0.4" />
        {/* Doorstep */}
        <rect x="535" y="540" width="130" height="6" fill="#1A2638" stroke="#0E1B2C" strokeWidth="0.6" />
      </g>

      {/* Hanging sign bracket */}
      <g>
        {/* Bracket arm */}
        <path d="M 850 230 L 945 230" stroke="#1A2638" strokeWidth="3" />
        <path d="M 850 230 L 870 250" stroke="#1A2638" strokeWidth="2" />
        {/* Decorative scroll on bracket */}
        <path d="M 945 230 Q 950 235, 945 240" fill="none" stroke="#C8A24A" strokeWidth="1.2" />
        {/* Hanging chain */}
        <line x1="930" y1="230" x2="930" y2="250" stroke="#1A2638" strokeWidth="1" />
        <line x1="900" y1="230" x2="900" y2="250" stroke="#1A2638" strokeWidth="1" />
        {/* Sign board */}
        <rect x="875" y="250" width="80" height="65" fill="#FAF6EC" stroke="#0E1B2C" strokeWidth="1" />
        <rect x="875" y="250" width="80" height="65" fill="none" stroke="#A6822E" strokeWidth="0.6" opacity="0.7" />
        {/* Sign text */}
        <text x="915" y="275" textAnchor="middle" fill="#0E1B2C" fontFamily="serif" fontSize="11" letterSpacing="1.5" fontWeight="bold">
          THE
        </text>
        <text x="915" y="293" textAnchor="middle" fill="#0E1B2C" fontFamily="serif" fontSize="13" letterSpacing="1.5" fontStyle="italic">
          Workshop
        </text>
        <line x1="885" y1="298" x2="945" y2="298" stroke="#A6822E" strokeWidth="0.5" opacity="0.7" />
        <text x="915" y="310" textAnchor="middle" fill="#0E1B2C" fontFamily="sans-serif" fontSize="6" letterSpacing="1.5">
          BY APPOINTMENT
        </text>
      </g>

      {/* Lamp post — left side */}
      <g transform="translate(280, 380)">
        <line x1="0" y1="0" x2="0" y2="160" stroke="#1A2638" strokeWidth="2.5" />
        {/* Top finial */}
        <circle cx="0" cy="-5" r="3" fill="#C8A24A" />
        {/* Lantern */}
        <path d="M -12 -22 L 12 -22 L 9 -8 L -9 -8 Z" fill="#FAF6EC" stroke="#0E1B2C" strokeWidth="0.8" />
        <ellipse cx="0" cy="-15" rx="6" ry="4" fill="#C8A24A" opacity="0.85" />
        {/* Glow */}
        <circle cx="0" cy="-15" r="38" fill="#C8A24A" opacity="0.1" />
      </g>

      {/* Paper grain */}
      <rect width="1200" height="600" fill="url(#ws-grain)" opacity="0.5" />
    </svg>
  );
}
