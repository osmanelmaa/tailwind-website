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
        gemunu: ['Gemunu Libre', 'sans-serif'],
        montserrat :['Montserrat', 'sans-serif']
      },

      colors: {
        
        'my-fontcolor': '#716F79',
        'my-grey': '#E0E0E0',
        'my-white': '#F7F7F7',
        'my-blue':'#AEBDF0',
        
      },
    },
  },
  plugins: [],
}

