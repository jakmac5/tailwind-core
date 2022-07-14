/** @type {import('tailwindcss').Config} */
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
    extend: { // add new class here
      colors: { // add new colors
        primary: { // https://www.figma.com/file/3KWblDyKfzDyRVgJfPCofj/Dinga?node-id=445%3A13536
          60: '#386C7D',
          70: '#94A9AF',
          80: '#BDCED4',
          90: '#EDEFF0',
          100: '#F9FCFD'
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, // true(default) is disablig all default styles
  },
}
