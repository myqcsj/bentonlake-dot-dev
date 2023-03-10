/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'layered-waves-1': "url('/backgrounds/layered_waves_1.svg')",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}