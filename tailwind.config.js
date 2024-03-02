module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#090f3b",
        // primary: "#D73728",
        blue: "#090f3b",
        "blue-dark": "#0a1439",
        "blue-light": '#1a1f5c',
        gold: "#ffcb04",
        "gold-2": "#fed701"
        // primary: "#D73728"
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        argentinum: ["Argentum Sans", "sans-serif"],
      },
      keyframes: {
        around: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
    require("prettier-plugin-tailwindcss")
  ],
};
