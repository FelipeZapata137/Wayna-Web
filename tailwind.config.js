/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wayna: {
          green: "#0A6C28",
          dark: "#1E293B",
        },
      },
    },
  },
  plugins: [],
}