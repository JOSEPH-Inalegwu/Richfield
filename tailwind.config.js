/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
    extend: {
      colors: {
        'base-100': '#f0f0f0', 
      },
    },
    container: {
      center: true
    }
  },
  plugins: [],
}

