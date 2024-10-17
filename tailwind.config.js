/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // Just-in-Time mode for faster builds in development
  content: [
    "./src/index.html", 
    "./src/**/*.{js,jsx,ts,tsx}" // Ensures Tailwind scans all relevant files
  ],
  theme: {
    extend: {
      margin: {
        marrow: "85rem", // Custom margin value
      },
    },
  },
  plugins: [],
};
