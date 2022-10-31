/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#d5d5d5",
        footer: "#242424",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
