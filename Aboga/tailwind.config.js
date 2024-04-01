/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '1xl' : '1023px',
        '3xl': '1600px',
        '4xl': '1950px',
      },
    },
    fontFamily: {
      'gotamedium': ['GothamMedium', 'sans-serif',]
    }
  },
  plugins: [],
}

