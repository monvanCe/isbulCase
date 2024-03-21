/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#194599',
        lightBlue: '#0a58ca',
        softBlue: '#2253af',
        orange: '#de5b2b',
        grayBorder: '#e5e7eb',
        grayBackground: '#f8f8f8',
      },
    },
  },
  plugins: [],
};
