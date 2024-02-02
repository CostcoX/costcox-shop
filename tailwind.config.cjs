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
  },
  plugins: [require("@tailwindcss/typography")],
};
