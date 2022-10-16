/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        128: "32.0rem"
      },
      letterSpacing: {
        1: "0.25rem",
        2: "0.5rem",
        8: "2.0rem"
      }
    }
  },
  plugins: [require("tailwind-scrollbar")]
};
