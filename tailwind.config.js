/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: ['hover'],
      screens: {
        'custom': '560px',
      }
      
    },
  },
  plugins: [],
};

export default config;
