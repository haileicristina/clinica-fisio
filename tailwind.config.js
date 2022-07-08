/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safeList: [
    {
      pattern: /from-(green|blue|gray|pink)-500/,
    },
    {
      pattern: /to-(green|blue|gray|pink)-800/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
