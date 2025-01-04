/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-orange-500",
    "bg-orange-400",
    "bg-blue-500",
    "bg-red-500",
    "bg-lime-500",
    "bg-lime-400",
    "bg-fuchsia-500",
    "text-lime-600",
    "text-fuchsia-600",
    "text-orange-600",

    // Add more colors as needed
  ],

  theme: {
    fontFamily: {
      sans: ["Montserrat", "Padauk", "sans-serif"],
    },
    extend: {
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
      },
    },
  },
  plugins: [flowbite()],
};
