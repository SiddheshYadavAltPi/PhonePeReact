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
      'background':'#ebe0ff'
    },
    // fontFamily:{
    //   'Ubuntux':'Ubuntu',
    // }
  },
  plugins: [],
}
