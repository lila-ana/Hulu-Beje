/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyBlue:"#05445E",
        blueGrotto:"#189AB4",
        blueGreen:"#75E6DA",
        babyBlue:"#D4F1F4",
        babyBlue_75: 'rgba(137,207,240, 0.50)'
      },
      fontFamily: {
        lobster: ["Lobster", "cursive"],
        varela: ['Varela Round', "sans-serif"],
        sans: ['Montserrat', "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        dela: ["Dela Gothic One", "cursive"],
        abril:["Abril Fatface", "cursive"],
        poppins: ['poppins', 'sans-serif'],
        poller: ['Poller One', 'serif'],
    }
    },
  },
  plugins: [],
}

