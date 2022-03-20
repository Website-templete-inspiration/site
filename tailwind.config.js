module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linkedin: '#0A66C2',
        instagram: '#E4405F',
        facebook: '#1877F2',
        twitter: '#1DA1F2',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
