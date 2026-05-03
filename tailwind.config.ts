import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // v4 palette — Santorini sky on Kefalonia restraint
        navy: {
          DEFAULT: '#0E1B2C',
          deep: '#081320',
          ink: '#1A2638',
        },
        sky: {
          DEFAULT: '#8FB8CE',
          deep: '#6FA0BA',
          light: '#B8D2E0',
        },
        olive: {
          DEFAULT: '#8FA67D',
          light: '#B5C4A2',
          glow: '#C9D7B8',
        },
        ochre: {
          DEFAULT: '#C8A24A',
          deep: '#A6822E',
        },
        bone: '#FAF6EC',
        cream: '#F2EAD6',
        linen: '#EDE6D6',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Display sizes for hero typography
        'display-xl': ['clamp(48px, 6.5vw, 92px)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        'display-lg': ['clamp(40px, 5vw, 68px)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(32px, 4vw, 52px)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        'eyebrow': '0.3em',
        'tag': '0.25em',
        'caps': '0.2em',
      },
      maxWidth: {
        'prose-narrow': '600px',
        'container': '1320px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out backwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
