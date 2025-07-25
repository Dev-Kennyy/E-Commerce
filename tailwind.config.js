/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: "poppins, sans-serif",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
