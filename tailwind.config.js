/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        'md-2': '1180px',
      },
      colors: {
        primary: '#282525', 
        secondary: '#cdb0a1', 
        background: '#fffdfb',  
        customBrown: '#433930',
        background2: '#e7d3c8',
        accent: '#f3e9e3',
      },
    },
  },
  plugins: [],
};