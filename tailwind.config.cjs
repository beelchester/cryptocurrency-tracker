/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat:["Montserrat","sans-serif"]
      },
      colors:{
        primaryBg:"#14161a",
        accent:"#ff5286",
      }
    },
  },
  plugins: [],
}
