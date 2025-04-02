/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'floww-primary': '#966B9D',
        'floww-secondary': '#C98686',
        'floww-accent': '#F2B880',
        'floww-light': '#FFF4EC',
        'floww-dark': '#2C2C54',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
