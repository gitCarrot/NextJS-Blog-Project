/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dribbble: "#EA4C89",
        instagram: "#E4405F",
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: "class",
}
