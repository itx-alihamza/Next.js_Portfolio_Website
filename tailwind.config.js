/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        dark: "#1b1b1b", //black
        light: "#f5f5f5", //white
        primary: "#B63E96", //dark-pink  240,86,199
        primaryDark: "#58E6D9", //electric-pink 80,230,217
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgb(0,0,0,0.4) , #f5f5f5 2px, #f5f5f5 100px);",
        circularDark:
          "repeating-radial-gradient(rgb(225,225, 225,0.5) , #1b1b1b 8px, #1b1b1b 100px);",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
