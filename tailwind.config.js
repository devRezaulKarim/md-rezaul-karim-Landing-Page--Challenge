/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundColor: {
        "dark-gray": "#383838",
      },
    },
  },
  plugins: [],
};
