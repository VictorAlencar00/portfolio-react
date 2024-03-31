/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
],
  theme: {
    extend: {
      colors: {
        'aboutBg': 'rgb(45, 45, 45)',
        'aboutContainerBg': 'rgb(25, 25, 25)',
        'aboutContentBg': 'rgb(33, 33, 33)'
      },
      boxShadow: {
       'aboutContentBoxShadow': '0px 0px 10px 3px rgb(13, 12, 12)'
      }
    },
  },
  plugins: [],
}

