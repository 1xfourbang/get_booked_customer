module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'filson-medium': 'FilsonProMedium',
        'avenir-regular': 'AvenirNextRegular',
        'avenir-medium': 'AvenirNextMedium',
        'avenir-bold': 'AvenirNextBold',
      },
      backgroundImage: {
        'home-hero': "url('./assets/images/foreground.png')",
      },
      height: {
        18: '4.5rem',
        30: '7.5rem',
      },
      width: {
        60: '15rem',
      },
      maxWidth: {
        60: '15rem',
      },
      spacing: {
        13: '3.25rem',
      },
      fontSize: {
        5: ['1.25rem', '27px'],
        6.25: ['1.5625rem', '34px'],
        6.5: ['1.625rem', '36px'],
        6.75: ['1.6875rem', '37px'],
      },
      colors: {
        grey: '#E8E8E8',
        'grey-light': '#FAFAFA',
        'grey-medium': '#DDDDDD',
        primary: '#604AAF',
      },
      boxShadow: {
        light: '6px 3px 13px #0000000F',
      },
    },
  },
  plugins: [],
}
