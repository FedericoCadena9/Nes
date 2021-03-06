
//tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./**/*.html',
  './views/**/*.js'],
  theme: {

    fontSize: {
      'xxs': '.5rem',
      'xtin':'.6rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '5-6xl': '3.5rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },

    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },

    extend: {
      spacing: { 
        '31rem': '31rem',
        '18': '4.5rem',
        '425': '425px',   
      },
      colors: {
        'primary-050': '#FFF5F6',
        'primary-100': '#FEEAED',
        'primary-200': '#FECBD2',
        'primary-300': '#FDABB7',
        'primary-400': '#FB6D81',
        'primary-500': '#F92E4B',
        'primary-600': '#E02944',
        'primary-700': '#BB2338',
        'primary-800': '#951C2D',
        'primary-900': '#7A1725',
        'secondary-400': '#506486',
        'secondary-500': '#112546',
        'background': '#F8F8F8',
        'background-2': '#F5F7FB'
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
}