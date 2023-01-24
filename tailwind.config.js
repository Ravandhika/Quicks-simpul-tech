/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    // "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: "Lato, cursive",
      },
    },
  },
  plugins: [],
};
