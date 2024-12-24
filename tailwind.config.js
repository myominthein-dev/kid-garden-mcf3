/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: ["Montserrat", "Padauk", "sans-serif"],
    },
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [flowbite()],
};
