/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['index.html'],
  content: ['index.html',"./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'primary': '#36BDFD',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}
