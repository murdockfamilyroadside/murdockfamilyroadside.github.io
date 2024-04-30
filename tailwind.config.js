/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "app.js"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['IBM Plex Serif', 'serif'] // Adding 'IBM Plex Serif' as the default serif family
      }
    },
  },
  plugins: [],
}



