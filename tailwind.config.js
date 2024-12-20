/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4DA57E",
        secondary: "#383838",
        accent: "#FF5722",
        lightGray: "#f7fafc",
        darkGray: "#768194",
      },
      animation: {
        "slide-up": "slideUp 1s ease-out",
        "slide-left": "slideLeft 0.5s ease-out",
      },
      keyframes: {
        slideUp: {
          "0%": {
            transform: "translateY(200%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideLeft: { 
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
