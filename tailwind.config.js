/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#000000',
        background: '#ebfff4',
        primary: '#a352fe',
        secondary: '#a4ffce',
        accent: '#d56401'
      }
    }
  },
  plugins: []
}
