
const tailwindcss = require("tailwindcss");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        turners: ["Lato"], 
      },
    },
    colors: {
  
      red100: "#E83335",
      red200: "#C53030",
      red300: "#C53030",

      gray100: "#595959",
      gray200: "#555555",
      smoke: "#F5F5F5",
      gainsboro: "#DCDCDC",

      white: "#FFFFFF",
      black: "#000000",
      titanium: "#C6C5C0",
    },
  },


  plugins: [tailwindcss("daisyui")],
};
