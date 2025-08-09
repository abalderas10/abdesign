/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        neutral: '#94a3b8',
        white: '#e2e8f0',
        black: '#0e141b',
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        serif: ['"Gabarito Variable"', 'ui-serif', 'serif'],
      },
      letterSpacing: {
        tightest: '-2px',
        tighter: '-1px',
        tight: '-0.25px',
      },
      animation: {
        'slide-in': 'slide-in 600ms ease both',
      },
      keyframes: {
        'slide-in': {
          '10%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
