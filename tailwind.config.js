/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['"DM Sans"', "sans-serif"],
      icon: ['"Material Icons"'],
    },
    gridTemplateRows: {
      "2-auto": "repeat(2, minmax(0, auto))",
      "bingo": "repeat(5, minmax(0, 1fr))",
    },
    gridTemplateColumns: {
      "bingo": "repeat(5, minmax(0, 1fr))",
    },
    extend: {},
  },
  plugins: [],
}