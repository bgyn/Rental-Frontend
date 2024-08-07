/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#50B498",
        secondary:"#9CDBA6",
      },
      fontFamily:{
        kanit: ["Kanit","sans-serif"],
        averia: ["Averia Serif Libre", "serif"],
      },
    },
  },
  plugins: [],
}

