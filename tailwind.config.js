/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {

    container:{
      center: true,
      padding: '2rem',
      
    },

    extend: 
    {
      fontFamily: {
        open: ['Open Sans', 'sans-serif'],
        gemunu: ['Gemunu Libre', 'sans-serif']
      },

      colors: {
        'my-red': '#BC1A45',
        'my-melon': '#FFD369',
        'my-grey': '#DDDDDD',
        'my-white': '#F7F7F7',
        
      },
    },
  },
  plugins: [],
}

