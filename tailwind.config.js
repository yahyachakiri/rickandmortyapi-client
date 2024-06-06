/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        "gray-character": "#9E9E9E",
        gray: "#3D3D3D",
        white: "white",
        red: "#fc5454",
      },
    },
  },
  plugins: [],
};
