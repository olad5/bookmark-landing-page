module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors: {
        primary: {
          softBlue: 'hsl(231,69%,60%)',
          softRed: 'hsl(0,94%,66%)',
        },
        neutral: {
          grayishBlue: 'hsl(229,8%,60%)',
          veryDarkBlue: 'hsl(229,31%,21%)',
        },
      }
    },
  },
  plugins: [],
}


