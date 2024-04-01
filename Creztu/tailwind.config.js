/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'regal-orange': '#EF5A0F',
      }, 
      screens: {
        'xs' : '460px',
        '1xl' : '1000px',
        '3xl' : '1400px'
      },     
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
