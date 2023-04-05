/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        'purpleHeader': '#1D1D41',
        'purpleDefault': '#141332',
      },
    },
    fontFamily: {
      'poppins': ['poppins', 'sans-serif']
    },
    plugins: [],
  },
  plugins: [],  
}