module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'maze-orange': '#FE5C3A'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
