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
        'hero-img': 'url("/src/assets/hero-img.jpg")',
        'view-back': 'url("/src/assets/images/View.jpg")'
      },
      colors:{
        primary:"#50B498",
        secondary:"#9CDBA6",
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  
}

