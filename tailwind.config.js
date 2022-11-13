/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['index.html'],
  content: ['index.html', './dist/*.html'],
  theme: {
    fontFamily: {
      'karla': ['Karla', 'sans-serif']
    },
    lineHeight: {
      'extra-loose': '1.4'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '1rem',
        lg: '45px',
        xl: '5rem'
      },
    },
    extend: {
      colors: {
        'primary': '#36BDFD',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  // safelist: [
  //   '!duration-0',
  //   '!delay-0',
  //   'html.js :where([class*="taos:"]:not(.taos-init))'
  // ]
}
