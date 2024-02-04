/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      backgroundColor: {
        'custom-yellow': 'rgb(251,209,76)',
        'custom-purple': 'rgb(155, 26, 228)',
        'custom-green': 'rgb(0, 210, 211)',
        'custom-dark-purple': 'rgb(34, 0, 53)'
      },
    },
    plugins: [],
  }
}