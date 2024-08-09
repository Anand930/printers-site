/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        CustomBlue: {
          1: "rgb(37, 99, 235)",
          2: "rgba(59, 130, 246, 0.5)",
          3: "rgb(37 99 235)",
        },
      },
      fontFamily: {
        display: "lexend",
      },
      
    },
  },
  plugins: [],
};
