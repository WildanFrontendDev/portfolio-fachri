/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#122D4F',
        'white': '#F9F7E4',
      },
      colors: {
        'primary': '#122D4F',
        'white': '#F9F7E4',
      },
      fontFamily: {
        'lora': ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
}