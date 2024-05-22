/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "verde": "#39b183",
        "verde-dark": "#339e75",
        "verde-light": "#42c291",
        "lila": "#9661db",
        "lila-dark": "#884cd6",
        "lila-light": "#a476e0",
        "amarillo": "#f6bd32",
        "amarillo-dark": "#f5b51a",
        "amarillo-light": "#f7c54a",
        "azul": "#057be5",
        "azul-dark": "#046ecc",
        "azul-light": "#0a88fa",
      }
    },
  },
  plugins: [],
}

