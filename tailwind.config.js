/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3C3B6E',
        'Secondary': '#B22234',
        "tertiary" : '#d71515'
     
      },
      fontWeight: {
        light: 300, 
      },
      lineHeight: {
        'extra-loose': '2.5',  
        'super-loose': '3', 
      },
      fontFamily: {
        forte: ['Forte', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
