/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-img': 'url("./src/assets/hero-img.png")',
      },
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
  plugins: [
    require('flowbite/plugin')
  ],
  
}

