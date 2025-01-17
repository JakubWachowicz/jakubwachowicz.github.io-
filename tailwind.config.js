/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily:{
      myname: ["Syncopate"]
    },
    extend: {},
  },
  plugins: [],

  animation: {
    "background-shine": "background-shine 2s linear infinite"
  },
  keyframes: {
    "background-shine": {
      "from": {
        "backgroundPosition": "0 0"
      },
      "to": {
        "backgroundPosition": "-200% 0"
      }
    }
  }

}

