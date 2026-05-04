import { clsx } from 'clsx';

interface EaselBannerProps {
  className?: string;
}

/**
 * The Easel banner — a gallery wall in elevation.
 *
 * Composition: cream/bone gallery wall with thin picture rail running across the
 * top, two framed canvases hanging at slightly different sizes, a wooden easel
 * standing in the foreground holding a third small canvas, brass picture lights
 * directing onto the framed works, a low bench in the foreground (silhouette),
 * herringbone wood floor.
 *
 * Palette: bone walls, navy floor accents, ochre brass details, olive frames,
 * sky tones in the canvases as suggestion of subject matter without committing
 * to specific imagery.
 */
export function EaselBanner({ className }: EaselBannerProps) {
  return (
    <svg
      viewBox="0 0 1200 600"
      className={clsx('w-full h-auto', className)}
      preserveAspectRatio="xMidYMid slice"
      aria-label="Illustration of a gallery wall with framed paintings, an easel, and a bench"
    >
      <defs>
        <linearGradient id="easel-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FAF6EC" />
          <stop offset="1" stopColor="#F2EAD6" />
        </linearGradient>
        <linearGradient id="easel-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A6822E" stopOpacity="0.55" />
          <stop offset="1" stopColor="#5C4A2A" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="easel-canvas-1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B8D2E0" stopOpacity="0.85" />
          <stop offset="0.5" stopColor="#8FB8CE" stopOpacity="0.7" />
          <stop offset="1" stopColor="#FAF6EC" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="easel-canvas-2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EDE6D6" />
          <stop offset="0.6" stopColor="#C8A24A" stopOpacity="0.4" />
          <stop offset="1" stopColor="#A6822E" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="easel-canvas-3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B5C4A2" stopOpacity="0.7" />
          <stop offset="1" stopColor="#8FA67D" stopOpacity="0.85" />
        </linearGradient>
        <pattern id="easel-grain" x="0" y="0" width="240" height="240" patternUnits="userSpaceOnUse">
          <rect width="240" height="240" fill="transparent" />
          <circle cx="60" cy="50" r="0.5" fill="#0E1B2C" opacity="0.04" />
          <circle cx="140" cy="100" r="0.4" fill="#0E1B2C" opacity="0.05" />
          <circle cx="200" cy="180" r="0.5" fill="#0E1B2C" opacity="0.04" />
        </pattern>
      </defs>

      {/* Gallery wall */}
      <rect width="1200" height="450" fill="url(#easel-wall)" />

      {/* Floor */}
      <rect y="450" width="1200" height="150" fill="url(#easel-floor)" />

      {/* Floor herringbone pattern */}
      {Array.from({ length: 12 }, (_, i) => (
        <g key={i}>
          <line x1={i * 100} y1="450" x2={i * 100 + 60} y2="600" stroke="#3E3220" strokeWidth="0.4" opacity="0.3" />
          <line x1={i * 100 + 50} y1="450" x2={i * 100 + 110} y2="600" stroke="#3E3220" strokeWidth="0.4" opacity="0.3" />
        </g>
      ))}
      {[470, 510, 550, 590].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="1200" y2={y} stroke="#3E3220" strokeWidth="0.3" opacity="0.18" />
      ))}

      {/* Wall–floor shadow */}
      <rect y="445" width="1200" height="10" fill="#0E1B2C" opacity="0.12" />

      {/* Picture rail across top */}
      <rect y="80" width="1200" height="3" fill="#5C4A2A" opacity="0.7" />
      <rect y="84" width="1200" height="2" fill="#C8A24A" opacity="0.6" />

      {/* LEFT FRAMED PAINTING — landscape, sky/water palette */}
      <g transform="translate(220, 120)">
        {/* Hanging wires */}
        <line x1="100" y1="-37" x2="40" y2="0" stroke="#5C4A2A" strokeWidth="0.5" opacity="0.7" />
        <line x1="100" y1="-37" x2="160" y2="0" stroke="#5C4A2A" strokeWidth="0.5" opacity="0.7" />
        {/* Outer frame (olive-stained wood) */}
        <rect x="0" y="0" width="200" height="160" fill="#5C7251" stroke="#0E1B2C" strokeWidth="1" />
        {/* Inner frame (gilt) */}
        <rect x="8" y="8" width="184" height="144" fill="#C8A24A" stroke="#0E1B2C" strokeWidth="0.5" />
        {/* Canvas */}
        <rect x="14" y="14" width="172" height="132" fill="url(#easel-canvas-1)" />
        {/* Suggested landscape — horizon line */}
        <line x1="14" y1="80" x2="186" y2="80" stroke="#6FA0BA" strokeWidth="1.5" opacity="0.7" />
        {/* Distant hills */}
        <path d="M 14 80 Q 50 65, 90 75 Q 130 60, 186 75 L 186 80 Z" fill="#7BA8BF" opacity="0.55" />
        {/* Brushstroke suggestions */}
        <line x1="40" y1="100" x2="80" y2="100" stroke="#6FA0BA" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
        <line x1="100" y1="115" x2="155" y2="115" stroke="#6FA0BA" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
        {/* Picture light above */}
        <g transform="translate(100, -10)">
          <rect x="-12" y="-3" width="24" height="6" fill="#C8A24A" stroke="#5C4A2A" strokeWidth="0.5" />
          <line x1="0" y1="-3" x2="0" y2="-12" stroke="#5C4A2A" strokeWidth="1" />
          <ellipse cx="0" cy="3" rx="14" ry="3" fill="#FAF6EC" opacity="0.4" />
        </g>
      </g>

      {/* RIGHT FRAMED PAINTING — portrait orientation, warm/ochre palette */}
      <g transform="translate(820, 100)">
        {/* Hanging wire */}
        <line x1="80" y1="-17" x2="20" y2="10" stroke="#5C4A2A" strokeWidth="0.5" opacity="0.7" />
        <line x1="80" y1="-17" x2="140" y2="10" stroke="#5C4A2A" strokeWidth="0.5" opacity="0.7" />
        {/* Outer frame (gilt, more ornate) */}
        <rect x="0" y="0" width="160" height="200" fill="#C8A24A" stroke="#0E1B2C" strokeWidth="1" />
        {/* Frame inner moulding */}
        <rect x="6" y="6" width="148" height="188" fill="none" stroke="#5C4A2A" strokeWidth="0.6" />
        <rect x="10" y="10" width="140" height="180" fill="#A6822E" />
        {/* Canvas */}
        <rect x="14" y="14" width="132" height="172" fill="url(#easel-canvas-2)" />
        {/* Subject suggestion (portrait — head silhouette) */}
        <ellipse cx="80" cy="80" rx="22" ry="28" fill="#5C4A2A" opacity="0.45" />
        <path d="M 50 130 Q 60 105, 80 105 Q 100 105, 110 130 L 110 186 L 50 186 Z" fill="#5C4A2A" opacity="0.4" />
        {/* Picture light */}
        <g transform="translate(80, -10)">
          <rect x="-12" y="-3" width="24" height="6" fill="#C8A24A" stroke="#5C4A2A" strokeWidth="0.5" />
          <line x1="0" y1="-3" x2="0" y2="-12" stroke="#5C4A2A" strokeWidth="1" />
          <ellipse cx="0" cy="3" rx="14" ry="3" fill="#FAF6EC" opacity="0.4" />
        </g>
      </g>

      {/* CENTER EASEL — wooden tripod with smaller canvas */}
      <g transform="translate(540, 220)">
        {/* Tripod legs */}
        <line x1="60" y1="0" x2="0" y2="280" stroke="#3E3220" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="60" y1="0" x2="120" y2="280" stroke="#3E3220" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="60" y1="20" x2="60" y2="290" stroke="#3E3220" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        {/* Cross brace */}
        <line x1="20" y1="200" x2="100" y2="200" stroke="#3E3220" strokeWidth="2" />
        {/* Top finial */}
        <circle cx="60" cy="-5" r="4" fill="#5C4A2A" />
        {/* Canvas tray (small horizontal lip) */}
        <line x1="20" y1="170" x2="100" y2="170" stroke="#3E3220" strokeWidth="3" strokeLinecap="round" />
        {/* Canvas on easel */}
        <rect x="22" y="40" width="76" height="130" fill="url(#easel-canvas-3)" stroke="#3E3220" strokeWidth="1" />
        {/* Brushstroke suggestion on this canvas */}
        <path d="M 30 70 Q 50 60, 70 65 Q 85 70, 92 75" stroke="#5C7251" strokeWidth="1.5" fill="none" opacity="0.7" strokeLinecap="round" />
        <path d="M 30 100 Q 55 95, 80 100" stroke="#3E5236" strokeWidth="1" fill="none" opacity="0.55" strokeLinecap="round" />
        {/* Palette hanging on side */}
        <ellipse cx="115" cy="220" rx="22" ry="13" fill="#FAF6EC" stroke="#3E3220" strokeWidth="0.8" />
        <circle cx="125" cy="218" r="3" fill="#C8A24A" />
        <circle cx="115" cy="222" r="3" fill="#5C7251" />
        <circle cx="105" cy="218" r="3" fill="#6FA0BA" />
        <circle cx="115" cy="213" r="2" fill="#A6822E" />
      </g>

      {/* BENCH — silhouette in foreground center-right */}
      <g transform="translate(440, 480)">
        {/* Seat */}
        <rect x="0" y="0" width="240" height="14" fill="#3E3220" stroke="#0E1B2C" strokeWidth="0.8" rx="2" />
        {/* Legs */}
        <rect x="10" y="14" width="6" height="40" fill="#3E3220" />
        <rect x="224" y="14" width="6" height="40" fill="#3E3220" />
        {/* Cross stretcher */}
        <rect x="10" y="40" width="220" height="3" fill="#3E3220" />
        {/* Subtle highlight */}
        <line x1="6" y1="2" x2="234" y2="2" stroke="#C8A24A" strokeWidth="0.5" opacity="0.5" />
      </g>

      {/* Wall plaque numbers (small "I" and "II" labels next to paintings) */}
      <g fill="#5C4A2A" fontFamily="serif" fontSize="10" fontStyle="italic" opacity="0.7">
        <text x="225" y="295">I</text>
        <text x="990" y="315">II</text>
      </g>

      {/* Paper grain */}
      <rect width="1200" height="600" fill="url(#easel-grain)" opacity="0.4" />
    </svg>
  );
}
