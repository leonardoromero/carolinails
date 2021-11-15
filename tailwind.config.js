module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#E19FB1',
        primaryBg: '#F2F1F0',
        primaryFocus: '#FADECF',
        secondary: '#F9CC6A',
        secondaryBg: '#FADEDA',
        secondaryFocus: '#D1D9DA',
        detail1: '#E7AF7D',
        detail2: '#4D4E4C',
        detail3: '#BC8A6F',
        detail4: '#2E3B49'
      },
      fontFamily: {
        century: "'century-gothic', serif",
        josefin: "'josefin-sans', serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

