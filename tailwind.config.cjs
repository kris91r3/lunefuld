/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbeige: "#D3C8C5",
        beige: "#ede9e8",
        darkgreen: "#718355",
        green: "#97a97c",
        middlegreen: "#b5c99a",
        lightgreen: "#cfe1b9",
        easteryellow: "#FFC356",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
