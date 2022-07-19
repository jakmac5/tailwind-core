/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors') // import colors from tailwind

module.exports = {
  important: false, // (default: false) true can add !important to all utility classes.
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: { // set styles to all .container classes
      center: true,
      padding: "1.5rem",
    },
    colors: { // set colors
      'tahiti': {
        light: '#67e8f9',
        DEFAULT: '#06b6d4',
        dark: '#0e7490',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: { // add new class here
      colors: { // add new colors
        primary: { // https://www.figma.com/file/3KWblDyKfzDyRVgJfPCofj/Dinga?node-id=445%3A13536
          60: '#386C7D',
          70: '#94A9AF',
          80: '#BDCED4',
          90: '#EDEFF0',
          100: '#F9FCFD'
        },
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, // true(default) is disablig all default styles
  },
}
