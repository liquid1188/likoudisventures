import { clsx } from 'clsx';

interface StudioBannerProps {
  className?: string;
}

/**
 * The Studio banner — a top-down view of an editor's desk.
 *
 * Composition: a sheet of paper with margin rules and faint grid lines, a fountain
 * pen and inkwell, a stack of three books with gilt spines, a coffee cup on a
 * saucer, and a sprig of olive in the corner. The desk surface is warm bone with
 * a slightly darker leather blotter framing the paper.
 *
 * Palette pulled from locked v4 tokens: bone, cream, navy, ochre, olive, sky.
 */
export function StudioBanner({ className }: StudioBannerProps) {
  return (
    <svg
      viewBox="0 0 1200 600"
      className={clsx('w-full h-auto', className)}
      preserveAspectRatio="xMidYMid slice"
      aria-label="Illustration of an editor's desk with paper, fountain pen, books, and coffee"
    >
      <defs>
        <linearGradient id="studio-desk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1A2638" />
          <stop offset="1" stopColor="#0E1B2C" />
        </linearGradient>
        <linearGradient id="studio-blotter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5C4A2A" stopOpacity="0.55" />
          <stop offset="1" stopColor="#3E3220" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="studio-paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FAF6EC" />
          <stop offset="1" stopColor="#F2EAD6" />
        </linearGradient>
        <linearGradient id="studio-coffee" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3E2818" />
          <stop offset="1" stopColor="#1F1409" />
        </linearGradient>
        <pattern id="studio-grain" x="0" y="0" width="240" height="240" patternUnits="userSpaceOnUse">
          <rect width="240" height="240" fill="transparent" />
          <circle cx="60" cy="50" r="0.5" fill="#FAF6EC" opacity="0.04" />
          <circle cx="140" cy="100" r="0.4" fill="#FAF6EC" opacity="0.05" />
          <circle cx="200" cy="180" r="0.5" fill="#FAF6EC" opacity="0.04" />
          <circle cx="30" cy="210" r="0.4" fill="#FAF6EC" opacity="0.05" />
        </pattern>
      </defs>

      {/* Desk surface (deep navy-leather) */}
      <rect width="1200" height="600" fill="url(#studio-desk)" />

      {/* Leather blotter — large rectangle taking center */}
      <rect x="240" y="100" width="720" height="450" fill="url(#studio-blotter)" rx="3" />
      <rect x="240" y="100" width="720" height="450" fill="none" stroke="#A6822E" strokeWidth="1.2" opacity="0.5" rx="3" />

      {/* Sheet of paper laid on blotter */}
      <g>
        <rect x="320" y="150" width="450" height="350" fill="url(#studio-paper)" stroke="#0E1B2C" strokeWidth="0.6" opacity="0.96" />
        {/* Margin rule (left vertical red line) */}
        <line x1="370" y1="150" x2="370" y2="500" stroke="#A6822E" strokeWidth="0.7" opacity="0.55" />
        {/* Horizontal grid rules (faint) */}
        {Array.from({ length: 12 }, (_, i) => (
          <line
            key={i}
            x1="320"
            y1={185 + i * 26}
            x2="770"
            y2={185 + i * 26}
            stroke="#0E1B2C"
            strokeWidth="0.3"
            opacity="0.18"
          />
        ))}
        {/* Suggested handwriting on first lines (small ink dashes) */}
        {[185, 211, 237].map((y, i) => (
          <g key={i}>
            <line x1="385" y1={y - 4} x2={490 + i * 30} y2={y - 4} stroke="#0E1B2C" strokeWidth="1.1" opacity="0.5" strokeLinecap="round" />
            <line x1="385" y1={y - 1} x2={420 + i * 25} y2={y - 1} stroke="#0E1B2C" strokeWidth="0.9" opacity="0.4" strokeLinecap="round" />
          </g>
        ))}
      </g>

      {/* Fountain pen — diagonal across paper, lower right of paper */}
      <g transform="translate(560, 380) rotate(28)">
        {/* Cap */}
        <rect x="0" y="-5" width="60" height="10" fill="#0E1B2C" rx="2" />
        <rect x="0" y="-5" width="60" height="10" fill="none" stroke="#A6822E" strokeWidth="0.8" rx="2" opacity="0.8" />
        {/* Barrel */}
        <rect x="60" y="-5" width="100" height="10" fill="#1A2638" rx="2" />
        {/* Gold band */}
        <rect x="58" y="-6" width="4" height="12" fill="#C8A24A" />
        {/* Nib */}
        <path d="M 160 -4 L 185 0 L 160 4 Z" fill="#C8A24A" />
        <line x1="170" y1="0" x2="183" y2="0" stroke="#3E3220" strokeWidth="0.5" />
      </g>

      {/* Inkwell — bottom right of paper */}
      <g transform="translate(700, 460)">
        {/* Base shadow */}
        <ellipse cx="20" cy="36" rx="22" ry="3" fill="#0E1B2C" opacity="0.3" />
        {/* Body */}
        <path
          d="M 0 30 L 0 10 Q 0 5, 5 5 L 35 5 Q 40 5, 40 10 L 40 30 Q 40 35, 35 35 L 5 35 Q 0 35, 0 30 Z"
          fill="#1A2638"
          stroke="#C8A24A"
          strokeWidth="0.8"
        />
        {/* Cork stopper */}
        <rect x="14" y="-2" width="12" height="8" fill="#A6822E" rx="1" />
        {/* Highlight */}
        <line x1="6" y1="10" x2="6" y2="28" stroke="#FAF6EC" strokeWidth="0.6" opacity="0.3" />
      </g>

      {/* Stack of books — left side of blotter */}
      <g transform="translate(265, 350)">
        {/* Bottom book (largest) */}
        <rect x="0" y="80" width="160" height="22" fill="#0E1B2C" stroke="#C8A24A" strokeWidth="0.8" rx="1" />
        <line x1="20" y1="86" x2="60" y2="86" stroke="#C8A24A" strokeWidth="0.7" opacity="0.85" />
        <line x1="20" y1="91" x2="50" y2="91" stroke="#C8A24A" strokeWidth="0.5" opacity="0.6" />
        <line x1="20" y1="96" x2="58" y2="96" stroke="#C8A24A" strokeWidth="0.5" opacity="0.6" />

        {/* Middle book */}
        <rect x="10" y="55" width="150" height="25" fill="#5C4A2A" stroke="#C8A24A" strokeWidth="0.8" rx="1" />
        <line x1="30" y1="62" x2="80" y2="62" stroke="#C8A24A" strokeWidth="0.7" opacity="0.85" />
        <line x1="30" y1="67" x2="65" y2="67" stroke="#C8A24A" strokeWidth="0.5" opacity="0.6" />

        {/* Top book */}
        <rect x="5" y="30" width="140" height="25" fill="#1A2638" stroke="#C8A24A" strokeWidth="0.8" rx="1" />
        <line x1="25" y1="38" x2="70" y2="38" stroke="#C8A24A" strokeWidth="0.7" opacity="0.85" />
        <line x1="25" y1="43" x2="55" y2="43" stroke="#C8A24A" strokeWidth="0.5" opacity="0.6" />
      </g>

      {/* Coffee cup with saucer — top right of desk, off the blotter */}
      <g transform="translate(1010, 200)">
        {/* Saucer */}
        <ellipse cx="55" cy="92" rx="80" ry="14" fill="#FAF6EC" stroke="#0E1B2C" strokeWidth="0.6" />
        <ellipse cx="55" cy="90" rx="70" ry="10" fill="#F2EAD6" />
        {/* Cup body */}
        <path
          d="M 15 50 L 25 90 Q 25 95, 30 95 L 80 95 Q 85 95, 85 90 L 95 50 Z"
          fill="#FAF6EC"
          stroke="#0E1B2C"
          strokeWidth="0.7"
        />
        {/* Cup rim */}
        <ellipse cx="55" cy="50" rx="40" ry="7" fill="url(#studio-coffee)" stroke="#0E1B2C" strokeWidth="0.6" />
        {/* Coffee surface highlight */}
        <ellipse cx="48" cy="48" rx="14" ry="2" fill="#5C4A2A" opacity="0.6" />
        {/* Handle */}
        <path
          d="M 90 60 Q 110 60, 110 75 Q 110 85, 92 82"
          fill="none"
          stroke="#0E1B2C"
          strokeWidth="0.7"
        />
        {/* Steam wisps */}
        <path d="M 38 45 Q 35 30, 42 18 Q 45 8, 40 -5" stroke="#FAF6EC" strokeWidth="0.8" fill="none" opacity="0.35" strokeLinecap="round" />
        <path d="M 55 45 Q 58 30, 52 18 Q 50 8, 56 -5" stroke="#FAF6EC" strokeWidth="0.8" fill="none" opacity="0.3" strokeLinecap="round" />
        <path d="M 72 45 Q 70 32, 76 22 Q 78 12, 73 0" stroke="#FAF6EC" strokeWidth="0.8" fill="none" opacity="0.3" strokeLinecap="round" />
      </g>

      {/* Olive sprig — bottom left corner of desk */}
      <g transform="translate(80, 470) rotate(-15)">
        {/* Stem */}
        <path d="M 0 0 Q 50 -15, 110 -10" stroke="#5C7251" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Leaves */}
        {[
          { x: 18, y: -4, rot: -25 },
          { x: 36, y: -10, rot: 20 },
          { x: 54, y: -13, rot: -20 },
          { x: 72, y: -14, rot: 25 },
          { x: 90, y: -13, rot: -22 },
        ].map((leaf, i) => (
          <ellipse
            key={i}
            cx={leaf.x}
            cy={leaf.y}
            rx="9"
            ry="2.8"
            fill="#8FA67D"
            opacity="0.85"
            transform={`rotate(${leaf.rot} ${leaf.x} ${leaf.y})`}
          />
        ))}
        {/* Olive berries */}
        <ellipse cx="42" cy="-6" rx="2.5" ry="3.5" fill="#5C7251" />
        <ellipse cx="68" cy="-9" rx="2.5" ry="3.5" fill="#5C7251" />
        <ellipse cx="98" cy="-7" rx="2.5" ry="3.5" fill="#5C7251" />
      </g>

      {/* Wax-seal stamp accent — bottom right */}
      <g transform="translate(1080, 460)">
        <circle cx="0" cy="0" r="22" fill="#A6822E" opacity="0.85" />
        <circle cx="-2" cy="-2" r="22" fill="none" stroke="#5C4A2A" strokeWidth="0.5" opacity="0.6" />
        <text x="0" y="5" textAnchor="middle" fill="#FAF6EC" fontFamily="serif" fontSize="14" fontStyle="italic" opacity="0.85">
          LV
        </text>
      </g>

      {/* Paper grain overlay */}
      <rect width="1200" height="600" fill="url(#studio-grain)" opacity="0.5" />
    </svg>
  );
}
