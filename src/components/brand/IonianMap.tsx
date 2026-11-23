import { clsx } from 'clsx';

interface IonianMapProps {
  className?: string;
}

/**
 * Line drawing of Kefalonia and Ithaka in the Ionian Sea. Stylized, not
 * geographically exact: Kefalonia large to the west, Ithaka smaller beside it.
 */
export function IonianMap({ className }: IonianMapProps) {
  return (
    <svg
      viewBox="40 40 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('w-full h-auto', className)}
      role="img"
      aria-label="Map of Kefalonia and Ithaka in the Ionian Sea"
    >
      <g transform="translate(70, 72)" stroke="currentColor" strokeWidth="0.8" opacity="0.45">
        <circle cx="0" cy="0" r="12" fill="none" />
        <path d="M 0 -12 L 1.5 0 L 0 12 L -1.5 0 Z" fill="currentColor" opacity="0.6" />
        <text x="0" y="-16" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none" fontFamily="var(--font-inter), sans-serif">N</text>
      </g>

      <path
        d="M 110 60 Q 140 50, 175 65 Q 195 75, 200 110 Q 205 140, 195 175 Q 180 215, 145 230 Q 115 240, 90 220 Q 70 195, 75 160 Q 80 125, 95 95 Q 100 75, 110 60 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="currentColor"
        fillOpacity="0.07"
      />
      <path
        d="M 240 100 Q 250 95, 258 110 Q 263 135, 255 165 Q 250 185, 258 200 Q 265 215, 258 230 Q 250 240, 240 230 Q 232 215, 235 195 Q 238 175, 232 155 Q 228 130, 235 110 Q 238 100, 240 100 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="currentColor"
        fillOpacity="0.07"
      />

      <text x="140" y="148" textAnchor="middle" fontFamily="var(--font-cormorant), serif" fontSize="17" fontStyle="italic" fill="currentColor">Κεφαλονιά</text>
      <text x="140" y="166" textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="11" fill="currentColor">Kefalonia</text>

      <text x="288" y="160" textAnchor="start" fontFamily="var(--font-cormorant), serif" fontSize="15" fontStyle="italic" fill="currentColor">Ἰθάκη</text>
      <text x="288" y="176" textAnchor="start" fontFamily="var(--font-inter), sans-serif" fontSize="11" fill="currentColor">Ithaka</text>
      <line x1="262" y1="165" x2="283" y2="165" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />

      <text x="320" y="88" textAnchor="middle" fontFamily="var(--font-cormorant), serif" fontSize="13" fontStyle="italic" fill="currentColor" opacity="0.6">Ionian Sea</text>
    </svg>
  );
}
