module.exports = {
  purge: ["./src/**/*.{html,js}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {},
      colors: {
        primary: "#4f3cc9",
        "primary-Dark": "#4232aa",
        secondary: "ffffff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
