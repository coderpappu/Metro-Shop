/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      josefin: ["Josefin Sans","sans-serif"],
      roboto: ["Roboto","sans-serif"]
    },
    backgroundImage:{
      banner: "url('https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/themes/metro/assets/img/banner.jpg')"
    }
  },
  plugins: [],
}
