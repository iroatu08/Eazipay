/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#11453B',
        'secondary': '#FFA143'
      },
      fontFamily: {
        aeonik: ["Aeonik"],
        mademellow: ["MADE Mellow"]
      },
      fontWeight: {
        bold: 'bold',
        light: 300
      }
    },
  },
  plugins: [],
}

