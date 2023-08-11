/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'Fira':['Fira Sans', 'sans-serif'],
        'Roboto':['Roboto', 'sans-serif'],
        'Grotesque':['Grotesque MT Std Bold Extended']
      },
      screens:{
        'lg':'1280px',
        '2xl':'1430px',
        '3xl':'1920px'
      },
      
    },
  },
  plugins: [],
}
