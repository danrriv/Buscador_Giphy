/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customCyan: 'rgba(6, 182, 212, 0.4)',
      },
      boxShadow: {
        cyan: '0 4px 10px rgba(6, 182, 212, 0.4)',
      }
    }
  },
  plugins: [],
}