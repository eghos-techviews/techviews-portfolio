/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#fdf6ee',
          100: '#f8e9d4',
          200: '#f0ceaa',
          300: '#e5ad76',
          400: '#d98a47',
          500: '#c2732a',
          600: '#a85c20',
          700: '#8a4719',
          800: '#6e3615',
          900: '#4e2610',
          950: '#2e1508',
        },
        cream: {
          50:  '#fdfaf4',
          100: '#faf5ea',
          200: '#f5ecda',
          300: '#eddfc4',
          400: '#e0cc9f',
          500: '#cfb474',
        },
        ink: {
          900: '#160e06',
          800: '#261608',
          700: '#3d2410',
          600: '#5c3820',
          500: '#7a5030',
          400: '#9a6e48',
          300: '#b8926a',
          200: '#d4b898',
          100: '#ecddd0',
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

