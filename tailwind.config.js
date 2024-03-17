/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#08003ab3",
      },
      backgroundImage: {
        Hero: "url(./src/assets/hero.png);",
      },
    },
  },
  plugins: [],
};
