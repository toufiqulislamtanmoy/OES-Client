/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: '#65C3C8',
        secondary: '#6C63FF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        Kaushan: ['Kaushan Script', 'cursive'],
        Poppins: ['Poppins', 'sans-serif'],
        Pacifico: ['Pacifico', 'cursive'],
        Rubik: ['Rubik Vinyl', 'cursive'],
        Russo: ['Russo One', 'sans-serif'],
        Libre: ['Libre Baskerville', 'serif']
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}

