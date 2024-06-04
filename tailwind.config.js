/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B71C1C",
        neutral: "#FAFAFA",
        dark: "#212121",
      },
      fontFamily: {
        manrope: "'Manrope', 'sans-serif'",
        poppins: "'Poppins', 'sans-serif'",
      },
    },
  },
  plugins: [],
}