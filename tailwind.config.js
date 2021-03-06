module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'logo': '0px 4px 20px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        'roboto': ['Roboto'],
        'spartan': ['Spartan'],
        'poppins': ['Poppins'],
      },
      fontSize: {
        'xxxl': '200px'
      },
      colors: {
        primary: '#F55078',
        secondary: '#F3A1B5',
        black: '#263238',
      },
      zIndex: {
        '-1': '-1',
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500'
      },
      width: {
        '120': '120%',
        'screen-10': '10vw',
        'screen-20': '20vw',
        'screen-30': '30vw',
        'screen-40': '40vw',
        'screen-50': '50vw',
        'screen-60': '60vw',
        'screen-70': '70vw',
        'screen-80': '80vw',
        'screen-90': '90vw',
      },
      height : {
        'screen-10': '10vh',
        'screen-20': '20vh',
        'screen-30': '30vh',
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-80': '80vh',
        'screen-90': '90vh',
        'screen-150': '150vh'
      },
      maxWidth: {
        '120': '120%'
      },
      minWidth: {
        '15': '15rem',
        '20': '20rem',
        '30': '30rem',
        '40': '40rem',
        '50': '50rem',
        '60': '60rem'
      },
      top: {
        '4/5': '45%'
      },
      inset: {
        '4/5': '45%'
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backdropGrayscale: {
        50: '.5',
      },
      grayscale: {
        80: '80%',
      },
      animation: {
        lampEffect: 'lampEffect .4s linear 1 forwards',
        marqueeEffect: 'marqueeEffect 500s linear infinite'
      },
      keyframes: {
        lampEffect: {
          '0%': {
            opacity: 0
          },
          '20%': {
            opacity: .5
          },
          '30%': {
            opacity: 0
          },
          '50%': {
            opacity: 1
          },
          '70%': {
            opacity: .2
          },
          '100%': {
            opacity: 1
          }
        
        },
        marqueeEffect: {
          '0%': {
            transform: 'translateX(-3%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        }
      }
    },
  },
  variants: {
    extend: {
      padding: ['group-hover'],
      width: ['hover','group-hover'],
      transitionProperty: ['hover', 'focus'],
      animation: ['hover', 'focus']
    },
  },
  plugins: [],
}
