/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#08003ab3",
        primary1: "#000f38",
        primary2: "#212ea0",
        primary3: "#676767",
        primary4: "#ebecfe",
      },
      backgroundImage: {
        Hero: "url(./src/assets/hero.png);",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      dxl: "1536px",
    },
  },
  plugins: [],
};
