/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundColor: {
        'quaapay-indigo': 'hsla(245, 75%, 55%, 1)',
      },
      colors: {
        'quaapay-indigo': 'hsla(245, 75%, 55%, 1)',
      },
    },
  },
  plugins: [],
}

