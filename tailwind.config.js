/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homeImage': "url('assets/images/jason-leung-poI7DelFiVA-unsplash.jpg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
