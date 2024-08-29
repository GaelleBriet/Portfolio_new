/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        darkGradient: 'linear-gradient(180deg, #1A1A1A, #131313)',
      },
      backgroundSize: {
        'custom': '100% 200px',
      },
      backgroundPosition: {
        'custom': 'top, bottom',
      },
      backgroundRepeat: {
        'custom': 'no-repeat',
      },
      colors: {
        basic: {
          black: '#0D0D0D',
          white: '#FFFFFF',
          onyx: '#181818',
          darkGray: '#808080',
          mediumGray: 'rgba(128, 128, 128, 0.5)',
          lightGray: '#C5C5C5',
          lightBlue: 'rgba(63,100,234,0.43)',
          lightRed: 'rgba(233,63,64,0.43)',
          lightYellow: 'rgba(255,184,0,0.84)',
        },
        dark: {
          cardBorder: '#3383737',
          white_10: 'rgba(255,255,255,0.1)',
          white_25: 'rgba(255,255,255,0.25)',
          black_50: 'rgba(21,21,21,0.5)',
        },
        light: {
        mainBG: '#FBFBFFB',
        faintWhite: '#F3F3F3',
        cardBorder: '#EBEBEB',
        cardBG: '#F6F6F6',
        black_10: 'rgba(21,21,21,0.1)',
        },
      },
      fontFamily: {
          sans: ['Inter', 'sans-serif'],
          script: ['Nanum Pen Script', 'cursive'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-dark-gradient': {
          background: 'linear-gradient(180deg, #1A1A1A, #131313)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      });
    },
  ],
}

