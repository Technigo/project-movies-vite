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
      "green-800": "#595E53",
      "green-900": "#323C27",
      "green-950": "#272C22",
    },
    fontFamily: {
      main: ["Albert Sans", "sans-serif"],
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2050px",
    },
    extend: {
      aspectRatio: {
        "2/3": "2/3",
      },
      height: {
        "sidebar-height-2xl": "calc(100vh - 5rem)",
        "sidebar-height-xl": "calc(100vh - 2rem)",
      },
      gridTemplateRows: {
        "0fr": "0fr",
        "1fr": "1fr",
      },
      transitionProperty: {
        "grid-template-rows": "grid-template-rows",
      },
    },
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
