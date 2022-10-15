/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    colors: {
      'primary':'#6739b7',
      'background':'#ebe0ff',
      'dark_primary':'#522c94',
      'dark_secondary':'#8f4fff',
      'dark_ternary':'#e2d1ff',
      'dark_background':'#2b194d'
    },
    // fontFamily:{
    //   'Ubuntux':'Ubuntu',
    // }
  },
  plugins: [],
}
