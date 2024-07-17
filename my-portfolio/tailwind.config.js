/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#050505',
        secondary: '#131c19',
        tertiary: '#2a2b2d',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
