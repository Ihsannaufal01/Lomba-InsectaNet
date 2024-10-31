/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'GreenMint':'#66bb6a',
        'BrownForest':'#795548',
        'Ungu':'#9575cd',
      }
    },
  },
  plugins: [],
}

