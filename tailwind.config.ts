import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // v4 palette — preserved
        navy: { DEFAULT: '#0E1B2C', deep: '#081320', ink: '#1A2638' },
        sky: { DEFAULT: '#8FB8CE', deep: '#6FA0BA', light: '#B8D2E0' },
        olive: { DEFAULT: '#8FA67D', light: '#B5C4A2', glow: '#C9D7B8', deep: '#5C7251' },
        ochre: { DEFAULT: '#C8A24A', deep: '#A6822E' },
        bone: '#FAF6EC',
        cream: '#F2EAD6',
        linen: '#EDE6D6',
      },
      fontFamily: {
        // Display: Fraunces — for hero/monumental moments
        display: ['var(--font-fraunces)', 'Cormorant Garamond', 'Georgia', 'serif'],
        // Serif: Cormorant — body italics, prose
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        // Sans: Inter — UI, nav, eyebrows
        sans: ['var(--font-inter)', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        monumental: ['clamp(56px, 9vw, 144px)', { lineHeight: '0.94', letterSpacing: '-0.03em' }],
        editorial: ['clamp(44px, 6.5vw, 96px)', { lineHeight: '0.98', letterSpacing: '-0.022em' }],
        'display-xl': ['clamp(40px, 5.5vw, 76px)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(32px, 4.2vw, 56px)', { lineHeight: '1.08', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(26px, 3vw, 40px)', { lineHeight: '1.15', letterSpacing: '-0.008em' }],
      },
      letterSpacing: {
        eyebrow: '0.32em',
        tag: '0.24em',
        caps: '0.18em',
      },
      maxWidth: {
        measure: '680px',
        editorial: '1180px',
        container: '1400px',
      },
      animation: {
        'fade-up': 'fadeUp 1.1s cubic-bezier(0.2, 0.8, 0.2, 1) backwards',
        'fade-in': 'fadeIn 1.4s ease-out backwards',
        reveal: 'reveal 1.6s cubic-bezier(0.16, 1, 0.3, 1) backwards',
        'olive-sway': 'oliveSway 6s ease-in-out infinite',
        'olive-grow': 'oliveGrow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) backwards',
        'branch-draw': 'branchDraw 1.8s cubic-bezier(0.65, 0, 0.35, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(40px)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        oliveSway: {
          '0%, 100%': { transform: 'rotate(0deg) translateY(0)' },
          '50%': { transform: 'rotate(0.4deg) translateY(-2px)' },
        },
        oliveGrow: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        branchDraw: {
          '0%': { strokeDashoffset: '300' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
