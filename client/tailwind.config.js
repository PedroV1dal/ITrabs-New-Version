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
      },
      width: {
        600: '37.5rem',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}