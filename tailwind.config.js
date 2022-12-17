/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      // 'phone': '640px',
      // => @media (min-width: 640px) { ... }

      'tablet': '540px',
      // => @media (min-width: 640px) { ... }

      'laptop': '940px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1200px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}