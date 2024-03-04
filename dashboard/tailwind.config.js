/** @type {import('tailwindcss').Config} */
const palette = import ('./palette.js')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:palette
    },
  },
  plugins: [],
}