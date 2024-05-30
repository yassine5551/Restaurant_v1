/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "newsImage": "url('./assets/getInTouch_img.png')",
      },
      colors: {
        primary: "#EA6D27",
        secondary: "#101A24",
        smT: "#5C6574",
        cardsColor: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
