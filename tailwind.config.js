/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#23BE0A', 
        customGray: '#131313', 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}