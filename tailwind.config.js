module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './public/index.html',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
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
        'home-hero-mobile': "url('./assets/images/foreground_mobile.png')",
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
        3: ['.75rem', '16px'],
        3.75: ['15px', '19px'],
        4.5: ['1.125rem', '25px'],
        5: ['1.25rem', '27px'],
        5.5: ['1.375rem', '30px'],
        6.25: ['1.5625rem', '34px'],
        6.5: ['1.625rem', '36px'],
        6.75: ['1.6875rem', '37px'],
        7: ['1.75rem', '28px'],
        10: ['2.5rem', '55px'],
        12.5: ['3.125rem', '68px'],
        24.25: ['6.0625rem', '99px'],
      },
      inset: {
        screen: '100vh',
      },
      colors: {
        grey: '#E8E8E8',
        'grey-lighter': '#EFEFEF',
        'grey-light': '#FAFAFA',
        'grey-medium': '#DDDDDD',
        'grey-dark': '#707070',
        'grey-darker': '#A0A0A0',
        'grey-placeholder': '#898989',
        primary: '#604AAF',
        'red-primary': '#DE1F1F',
        'blue-primary': '#476FCC',
      },
      boxShadow: {
        light: '6px 3px 13px #0000000F',
        header: '0 3px 6px #00000014',
        card: '0px 3px 6px #00000029',
      },
    },
  },
  plugins: [],
}
