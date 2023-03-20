/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dongle: ["Dongle"],
      },
      colors: {
        orange1: "#FBA70E",
        pink1: "#F1B2B2",
        brown1: "#BD9E84",
        blue1: "#93AEC1",
        background: "#F0EAE0",
      },
    },
  },
  plugins: [],
};
