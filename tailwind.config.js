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
      },
      colors: {
        black: "rgb(var(--black) / <alpha-value>)",
        gray: {
          DEFAULT: "rgb(var(--gray) / <alpha-value>)",
          50: "rgb(var(--gray-50) / <alpha-value>)",
          100: "rgb(var(--gray-100) / <alpha-value>)",
          200: "rgb(var(--gray-200) / <alpha-value>)",
          300: "rgb(var(--gray-300) / <alpha-value>)",
          400: "rgb(var(--gray-400) / <alpha-value>)",
          500: "rgb(var(--gray-500) / <alpha-value>)",
          600: "rgb(var(--gray-600) / <alpha-value>)",
          700: "rgb(var(--gray-700) / <alpha-value>)",
          800: "rgb(var(--gray-800) / <alpha-value>)",
          900: "rgb(var(--gray-900) / <alpha-value>)"
        },
        primary: "rgb(var(--primary) / <alpha-value>)",
        typography: "rgb(var(--typography) / <alpha-value>)",
        transparent: "transparent",
        white: "rgb(var(--white) / <alpha-value>)"
      }
    }
  },
  plugins: [require("tailwind-scrollbar")]
};
