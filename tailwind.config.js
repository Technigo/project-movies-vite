/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.25rem",
      DEFAULT: "0.5rem",
      md: "0.75rem",
      lg: "2rem",
      full: "9999px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      "green-100": "#E8EBDE",
      "green-200": "#E3E9D1",
      "green-600": "#B6D53A",
      "green-900": "#323C27",
      "green-950": "#272C22",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, theme }) {
      addBase({
        "*:focus-visible": {
          outline: `2px solid ${theme("colors.green-950")}`,
          outlineOffset: "2px",
        },
      });
    }),
  ],
};
