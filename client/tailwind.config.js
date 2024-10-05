/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBg: '#1e1f21',
        darkorange: '#fc8024',
        cardgray:'#2d2e30'
      },
    },
  },
  plugins: [],
}

