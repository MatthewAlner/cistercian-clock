const colors = require('tailwindcss/colors');

module.exports = {
  prefix: '',
  purge: {
    content: ['./src/**/*.{html,ts}'],
  },
  darkMode: 'class',
  theme: {
    colors: {
      gray: colors.trueGray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
