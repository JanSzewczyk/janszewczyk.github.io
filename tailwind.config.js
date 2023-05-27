/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@szum-tech/design-system/**/*.js"
  ],
  theme: {
    extend: {
      height: {
        screen: "100dvh"
      },
      minHeight: {
        screen: "100dvh"
      },
      maxHeight: {
        screen: "100dvh"
      }
    }
  },
  plugins: [],
  presets: [require("@szum-tech/design-system/theme/main-preset")]
};
