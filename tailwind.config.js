/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-red-fade': 'radial-gradient(circle, rgba(255, 61, 61, 1) 0%, rgba(237, 221, 83, 0) 60%)',
      },
      fontFamily: {
        main : "SF UI Display",
      },
      colors: {
        primary: "#3b78ee",
        dark: "#030919",
        background: "#f4f6fa"
      },
    },
  },
  plugins: [],
};
