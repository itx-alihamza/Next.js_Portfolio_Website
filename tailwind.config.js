/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
    },
  },
  plugins: [],
};
