const colors = require('tailwindcss/colors');
const dTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.js', './pages/**/*.js'],
  theme: {
    screens: { xs: '475px', ...dTheme.screens },
    extend: {
      fontFamily: {
        sans: ['Inter', ...dTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...dTheme.fontFamily.mono],
      },
      colors: { ...colors, gray: colors.blueGray },
      fill: theme => ({ none: 'none', ...dTheme.colors }),
      strokeColor: { none: 'none' },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
