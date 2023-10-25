/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
        '256': '64rem',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
        'consolas': ['Consolas', 'mono']
      },
      animation: {
        blink: 'blink 1s steps(1, start) infinite'
      },
      keyframes: {
        blink: {
          '50%': {opacity: 0.0},
          '100%': {opacity: 1.0}
        }
      }
    },
  },
  plugins: [],
}

