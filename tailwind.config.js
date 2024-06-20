/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#28a096",
        plight: "#a8e0db",
        pdark: "#145853",
        dark: "#000",
        lightDark: "#363636",
        light: "#f1f1f1",
      },
    },
  },
  plugins: [],
};
