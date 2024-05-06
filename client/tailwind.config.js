/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
        secondary: colors.gray,
        accent: colors.neutral,
        info: colors.indigo,
        warning: colors.amber,
        error: colors.red,
      },
      borderRadius: {
        normal: '3px',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      fontFamily: {
        heading: ['Ubuntu', 'sans-serif'],
        text: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
