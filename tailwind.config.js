/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0891b2',
        secondary: '#1e40af',
        dark: {
          bg: '#1a1a1a',
          text: '#ffffff',
          accent: '#60a5fa'
        },
        light: {
          bg: '#ffffff',
          text: '#1a1a1a',
          accent: '#3b82f6'
        }
      }
    }
  },
  plugins: [],
}
