/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@szum-tech/design-system"
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  presets: [require("@szum-tech/design-system/tailwindcss/main-preset")]
};
