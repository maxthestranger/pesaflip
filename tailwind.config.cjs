/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-1": "#20222E",
        "dark-2": "#1A1D26",
        "dark-3": "#13161D",
        "dark-4": "#252831",
        "dark-5": "#303342",
        "muted-1": "#5E647C",
        "muted-2": "#2F3244",
        "muted-3": "#3C3F4F",
        "primary": "#FD7344",
        "primary-hover": "#f5602a",
        "info": "#8846FF",
        "success": "#50AF31",
        "danger": "#E54140",
        "warning": "#4B69FF",
      },
      fontFamily: {
        "sans": ["Gilroy", "sans-serif"]
      }
    },
  },
  plugins: [],
}