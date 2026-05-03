import { clsx } from 'clsx';

interface IonianMapProps {
  className?: string;
}

/**
 * Hand-drawn line illustration of Kefalonia and Ithaca in the Ionian Sea.
 * Used on the homepage and About page as a visual heritage anchor.
 *
 * Stylized — not geographically exact. Captures the relationship between the
 * two islands (Kefalonia large to the west, Ithaca smaller to the east, both
 * curving north-south).
 */
export function IonianMap({ className }: IonianMapProps) {
  return (
    <svg
      viewBox="0 0 400 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('w-full h-auto', className)}
      aria-label="Map of Kefalonia and Ithaca in the Ionian Sea"
    >
      {/* Compass rose top-left */}
      <g transform="translate(40, 50)" stroke="currentColor" strokeWidth="0.7" opacity="0.4">
        <circle cx="0" cy="0" r="14" fill="none" />
        <path d="M 0 -14 L 1.5 0 L 0 14 L -1.5 0 Z" fill="currentColor" opacity="0.5" />
        <path d="M -14 0 L 0 -1.5 L 14 0 L 0 1.5 Z" fill="currentColor" opacity="0.3" />
        <text x="0" y="-18" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="serif" fontStyle="italic">N</text>
      </g>

      {/* Latitude/longitude reference lines (very faint) */}
      <line x1="0" y1="100" x2="400" y2="100" stroke="currentColor" strokeWidth="0.3" opacity="0.15" strokeDasharray="2 4" />
      <line x1="0" y1="180" x2="400" y2="180" stroke="currentColor" strokeWidth="0.3" opacity="0.15" strokeDasharray="2 4" />
      <line x1="160" y1="0" x2="160" y2="280" stroke="currentColor" strokeWidth="0.3" opacity="0.15" strokeDasharray="2 4" />
      <line x1="280" y1="0" x2="280" y2="280" stroke="currentColor" strokeWidth="0.3" opacity="0.15" strokeDasharray="2 4" />

      {/* Kefalonia — larger island, west */}
      <path
        d="M 110 60
           Q 140 50, 175 65
           Q 195 75, 200 110
           Q 205 140, 195 175
           Q 180 215, 145 230
           Q 115 240, 90 220
           Q 70 195, 75 160
           Q 80 125, 95 95
           Q 100 75, 110 60 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.05"
      />

      {/* Kefalonia interior detail — mountain */}
      <path
        d="M 130 130 L 145 110 L 160 135 L 170 120 L 180 140"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Ithaca — smaller island, east of Kefalonia */}
      <path
        d="M 240 100
           Q 250 95, 258 110
           Q 263 135, 255 165
           Q 250 185, 258 200
           Q 265 215, 258 230
           Q 250 240, 240 230
           Q 232 215, 235 195
           Q 238 175, 232 155
           Q 228 130, 235 110
           Q 238 100, 240 100 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.05"
      />

      {/* Kioni — small marker on Ithaca, where Likoudis Villas is */}
      <circle cx="252" cy="135" r="3" fill="currentColor" />
      <circle cx="252" cy="135" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />

      {/* Labels */}
      <text x="148" y="155" textAnchor="middle" fontFamily="serif" fontSize="13" fontStyle="italic" fill="currentColor">
        Κεφαλονιά
      </text>
      <text x="148" y="170" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.6" letterSpacing="0.1em">
        KEFALONIA
      </text>

      <text x="247" y="170" textAnchor="middle" fontFamily="serif" fontSize="11" fontStyle="italic" fill="currentColor">
        Ἰθάκη
      </text>
      <text x="247" y="183" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.6" letterSpacing="0.1em">
        ITHACA
      </text>

      <text x="278" y="135" textAnchor="start" fontFamily="serif" fontSize="9" fontStyle="italic" fill="currentColor" opacity="0.7">
        · Kioni
      </text>

      {/* "Ionian Sea" label */}
      <text x="340" y="60" textAnchor="middle" fontFamily="serif" fontSize="10" fontStyle="italic" fill="currentColor" opacity="0.5">
        Ionian
      </text>
      <text x="340" y="73" textAnchor="middle" fontFamily="serif" fontSize="10" fontStyle="italic" fill="currentColor" opacity="0.5">
        Sea
      </text>

      {/* Sea wave marks */}
      {[
        { x: 320, y: 110 },
        { x: 350, y: 130 },
        { x: 320, y: 200 },
        { x: 350, y: 220 },
        { x: 30, y: 130 },
        { x: 30, y: 200 },
      ].map((wave, i) => (
        <path
          key={i}
          d={`M ${wave.x} ${wave.y} q 4 -2, 8 0 q 4 2, 8 0`}
          stroke="currentColor"
          strokeWidth="0.6"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
        />
      ))}
    </svg>
  );
}
