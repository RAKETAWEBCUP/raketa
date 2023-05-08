/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: "#e2e8f0",
        softLight: "#94a3b8",
        dark: "#0F172A",
        darkNav: "#1E293B",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      backgroundImage: {
        // 'hero-pattern':
        //   "url('/public/images/Frame 1.svg')",
        'blanck':
          "url('/public/blank.gif')",
        'blak':
        "url('/public/black.gif')",
      },
    },
  },
  plugins: [],
}