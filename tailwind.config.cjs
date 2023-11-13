/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        atlantis: {
          50: "#fbffe6",
          100: "#f3ffc8",
          200: "#e6fe98",
          300: "#d1fa5c",
          400: "#baf02b",
          500: "#94cc0b",
          600: "#78ac04",
          700: "#5b8209",
          800: "#49670d",
          900: "#3d5710",
          950: "#1f3003",
        },
        jacksons: {
          50: "#edefff",
          100: "#dde2ff",
          200: "#c2c7ff",
          300: "#9da3ff",
          400: "#7b77ff",
          500: "#6957fd",
          600: "#5b38f3",
          700: "#4e2bd7",
          800: "#3f26ad",
          900: "#372789",
          950: "#21174f",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
