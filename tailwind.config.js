/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1777px'
      },
      content: {
        'link': 'url("/src/assets/pattern.png")',
        'quikaShape': 'url("/src/assets/pattern.svg")'
      },
    },
  },
  plugins: [require("daisyui")],
}

