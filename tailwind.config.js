/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'tablet': '540px',
      'laptop': '940px',
      'desktop': '1200px',
    },
  },
  plugins: [],
}