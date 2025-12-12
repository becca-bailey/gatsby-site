/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F2F4F2",
        text: "#2C3A47",
        primary: "#6D214F",
        accent: "#3B3B98",
        magenta: "#6D214F",
        gray: "#CAD3C8",
        white: "#FFFFFF",
        grayTransparent: "rgba(202, 211, 211, 0.7)",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        serif: ["Lora", "serif"],
        header: ["Rubik", "sans-serif"],
        body: ["Lora", "serif"],
      },
      fontSize: {
        base: "19px",
      },
      lineHeight: {
        base: "1.75",
      },
      screens: {
        small: "600px",
        medium: "900px",
      },
    },
  },
  plugins: [],
}

