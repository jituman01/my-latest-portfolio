/** @type {import('tailwindcss').Config} */
module.exports = {
  // Eita add kora khub jaruri, naile manually dark mode switch hobe na
  darkMode: 'class', 
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      theme: {
  extend: {
    animation: {
      'border-beam': 'spin 7s linear infinite', // আগের সেকশনের জন্য
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      scaleIn: {
        '0%': { opacity: '0', transform: 'scale(0.9)' },
        '100%': { opacity: '1', transform: 'scale(1)' },
      },
      elasticPop: {
        '0%': { transform: 'scale(0)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' }
      }
    }
  }
}
    },
  },
  plugins: [],
}