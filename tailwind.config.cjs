const { tailwindConfig } = require("@storefront-ui/react/tailwind-config");
module.exports = {
  presets: [tailwindConfig],
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html",
    "./node_modules/@storefront-ui/react/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
    colors:{
      'primary-blue':"rgb(21 128 61)",
      'primary-blue-hover':'rgb(22 101 52)',
      'primary-light':"rgb(220 252 231)",
      "white":"#ffff",
      "danger-red":"",
      "success-green":"",
      "warning-yellow":""

    }
  },
  plugins: [],
};
