import { affiliateUrl } from '@/content/affiliates';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

/**
 * The crossing. A small illustrated moment on the Ithaca House page:
 * the ferry from Sami on Kefalonia across the channel to Ithaka.
 * Mostly atmosphere; the link goes to Ferryhopper for times and tickets.
 */
export function FerryCrossing() {
  const ferryUrl = affiliateUrl('ferryhopper', 'https://www.ferryhopper.com/');

  return (
    <ScrollReveal as="div" className="max-w-5xl mx-auto mb-16 lg:mb-20">
      <div className="bg-navy text-bone grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Illustration */}
        <div className="lg:col-span-7 relative bg-[#16263b] min-h-[260px]">
          <svg
            viewBox="0 0 520 320"
            className="w-full h-full"
            role="img"
            aria-label="Illustration of the ferry route from Sami on Kefalonia across the channel to Ithaka"
          >
            <defs>
              <pattern id="waves" width="28" height="14" patternUnits="userSpaceOnUse">
                <path d="M0 7 Q7 2 14 7 T28 7" fill="none" stroke="#8FB8CE" strokeOpacity="0.14" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="520" height="320" fill="url(#waves)" />

            {/* Kefalonia: east coast, Sami bay */}
            <path
              d="M0 20 C60 30 120 40 165 70 C200 95 190 130 205 150 C222 170 245 168 250 190 C255 215 220 235 200 260 C180 285 150 300 120 320 L0 320 Z"
              fill="#E9DFC9"
              fillOpacity="0.92"
            />
            {/* Ithaka: long narrow island to the east */}
            <path
              d="M392 18 C410 30 418 60 410 90 C402 118 420 140 432 165 C446 195 430 225 412 248 C398 266 404 290 392 310 C376 300 372 270 380 245 C388 220 372 195 362 172 C350 145 368 118 372 92 C376 62 372 34 392 18 Z"
              fill="#E9DFC9"
              fillOpacity="0.92"
            />

            {/* Route */}
            <path
              id="ferry-route"
              d="M250 182 C290 160 330 170 372 176"
              fill="none"
              stroke="#C9A24B"
              strokeWidth="1.6"
              strokeDasharray="5 6"
            />

            {/* Ports */}
            <circle cx="250" cy="182" r="4" fill="#C9A24B" />
            <circle cx="372" cy="176" r="4" fill="#C9A24B" />

            {/* Ferry */}
            <g>
              <g transform="translate(-9 -6)">
                <path d="M0 6 L18 6 L15 11 L3 11 Z" fill="#F4EEE2" />
                <rect x="5" y="2" width="8" height="4" fill="#F4EEE2" />
                <rect x="7" y="0" width="2" height="2" fill="#C9A24B" />
              </g>
              <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" keyPoints="0;1;1;0;0" keyTimes="0;0.42;0.5;0.92;1" calcMode="linear">
                <mpath href="#ferry-route" />
              </animateMotion>
            </g>

            {/* Labels */}
            <text x="60" y="200" fill="#1B2A3F" fontFamily="serif" fontStyle="italic" fontSize="22">Kefalonia</text>
            <text x="60" y="222" fill="#1B2A3F" fillOpacity="0.6" fontFamily="serif" fontSize="13">Κεφαλονιά</text>
            <text x="212" y="206" fill="#1B2A3F" fontFamily="sans-serif" fontSize="9" letterSpacing="2">SAMI</text>
            <text x="436" y="110" fill="#F4EEE2" fontFamily="serif" fontStyle="italic" fontSize="20">Ithaka</text>
            <text x="436" y="128" fill="#F4EEE2" fillOpacity="0.6" fontFamily="serif" fontSize="12">Ἰθάκη</text>
            <text x="300" y="150" fill="#C9A24B" fontFamily="sans-serif" fontSize="9" letterSpacing="2">THE CHANNEL</text>
          </svg>
        </div>

        {/* Copy */}
        <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center">
          <div className="font-sans text-[10px] uppercase tracking-eyebrow text-ochre mb-4">The crossing</div>
          <h3 className="font-display text-3xl lg:text-4xl leading-tight mb-5">
            Sami to Ithaka, <em className="italic text-sky">by sea</em>.
          </h3>
          <p className="font-serif text-[17px] text-bone/80 leading-relaxed mb-4">
            Ithaka has no airport. You land on Kefalonia, drive across the island to Sami, and take the ferry over the channel.
          </p>
          <p className="font-serif italic text-[17px] text-bone/65 leading-relaxed mb-7">
            Stand on the deck for it. Two islands in one trip, and the water between them.
          </p>
          <a
            href={ferryUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="self-start inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-caps text-ochre hover:text-bone border-b border-ochre/50 hover:border-bone pb-1 transition-colors"
          >
            Check ferry times <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
