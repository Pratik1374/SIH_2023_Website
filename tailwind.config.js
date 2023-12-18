/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'loginGraident' : "url('../assets/loginPageGradient.svg')"
      }
    },
    fontFamily: {
      popLight: ["Poppins"]
    }
  },
  plugins: [],
}

