export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,png}",
  ],
  theme: {
    extend: {
      colors: {
        LightGreen: '#DCE9E2',
        EsmeraldGreen: '#00856F',
        Purple: '#6E0085',
        White: '#FFFFFF',
        Gray: '#D9D9D9',
      },
      width: {
        600: '37.5rem',
        30: '30%',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      minHeight: {
        80: '80vh'
      },
      flex: {
        2: '2',
      },
    },
  },
  plugins: [],
}