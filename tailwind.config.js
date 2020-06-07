/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      heading: ['Josefin Sans', 'sans-serif'],
      body: ['PT Sans', 'sans-serif'],
      leon: ['LeonSans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#2f2653',
        secondary: '#8cd5f5',
        lilac: '#79738e',
        sky: '#DDF5F8',
        cream: '#F7F3E5',
        pink: '#FCCFCB',
      },
      fontSize: {
        '1vw': '1vw',
        '1.25vw': '1.25vw',
        '1.5vw': '1.5vw',
        '1.75vw': '1.75vw',
        '2vw': '2vw',
        '2.5vw': '2.5vw',
        '3vw': '3vw',
        '3.5vw': '3.5vw',
        '4vw': '4vw',
        '4.5vw': '4.5vw',
        '5vw': '5vw',
      },
      zIndex: {
        '-1': -1,
        1: 1,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        110: 110,
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
    ],
  },
};
