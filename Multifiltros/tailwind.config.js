/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'red-custom': '#EB4648',
        'blue-custom': '#050e61',
      },
      boxShadow: {
        'shadow-custom': 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
      },
      fontSize: {
        '2.5xl': '28px'
      },
      screens: {
        'base' : '500px',
        '1xl' : '1090px',
        'medium' : '1180px',
        '2xl' : '1160px',
        '3xl': '1600px',
        '4xl': '1950px',
        '5xl' : '1580px',
        '6xl' : '1480px'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

