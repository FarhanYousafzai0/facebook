/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F9E99',
        secondary: '#EFE9E0',
        accent: '#88CCC0',
        dark: '#083B3A',
        light: '#F0F7F4',
      },
    },
  },
  plugins: [],
}
