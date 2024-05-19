/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EA6D27",
        secondary: "#101A24",
        smT: "#5C6574",
      },
    },
  },
  plugins: [],
};
