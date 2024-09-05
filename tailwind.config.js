/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily:  {
      'kuba' : ["Kumbh Sans"]
    },
    backgroundImage : {
      'ba': "url('')"
    },
    extend: {
      colors: {
        'darkgray' : 'hsl(0, 0%, 59%)'
      }
    },
  },
  plugins: [],
}

