/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        product: "0 0 15px #a2b8e34d"
      },
      colors: {
        main: "#00205c",
        hover: "#FADC6F"
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        fadeInUp: 'fadeInUp ease-out forwards',
        loadingBar: 'loadingBar 1.5s ease-in-out infinite',
        slideUp: 'slideUp 0.3s ease-out forwards',
        slideDown: 'slideDown 0.2s ease-out forwards',
      },
      keyframes: {
        slideUp: {
          '0%': {transform: 'translateY(100%)'},
          '100%': {transform: 'translateY(0)'},
        },
        slideDown: {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0%)'},
        },
        loadingBar: {
          '0%': {transform: 'translateX(-100%)'},
          '50%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(100%)'},
        },
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        fadeInUp: {
          '0%': {opacity: '0', transform: 'translateY(-5px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
      },
      fontFamily: {
        heading: ["Recoleta"],
        sans: ['AvenirNext'],
        heading_bold: ['Recoleta-Bold']
      }
    },
  },

  plugins: [],
}

