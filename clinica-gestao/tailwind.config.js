/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#d1d5db", // Cor personalizada
        ring: "#7080a0",   // Definição de cor para o "ring" (ajuste conforme necessário)
      },
    },
  },
  plugins: [],
}
