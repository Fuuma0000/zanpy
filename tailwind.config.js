/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial"],
      },
      colors: {
        form: "#EFEDED",
        test: "#706F6F",
        loginBotton: "#84ED82",
        main_green: "#A0E99E",
        sub_color: "#D9F8D9",
      },
    },
  },
  plugins: [],
};
