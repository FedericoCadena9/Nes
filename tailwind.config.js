
//tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');
let plugin = require('tailwindcss/plugin')


module.exports = {
  content: ['./**/*.html',
  './views/**/*.js'],
  theme: {

    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1025px',
      'xl': '1280px',
      '2xl': '1536px',
    },

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
        "secondary-50": "#DEE8F7",
        "secondary-100": "#B9CDEE",
        "secondary-200": "#789FDE",
        "secondary-300": "#326DCD",
        "secondary-400": "#224A8C",
        "secondary-500": "#112546",
        "secondary-600": "#0E1F39",
        "secondary-700": "#0A1629",
        "secondary-800": "#070F1D",
        "secondary-900": "#03070C",
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
    plugin(function ({ addVariant }) {
      addVariant('nine', '&:nth-child(9)')
    })

  ],
}