/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'searchbar': "url('/src/images/books.jpg')",
      },
      width: {
        '30': '30%'
      }
    },
  },
  plugins: [],
}