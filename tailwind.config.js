const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'base': colors.slate[800],
      'background': colors.slate[900],
      'primary-accent': colors.orange[500],
      'secondary-accent': colors.pink[600],
      'white': colors.white,
      'black': colors.black
    }
  },
  plugins: [],
  darkMode: 'class',
}