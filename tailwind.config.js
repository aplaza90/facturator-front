import flowbite from 'flowbite-react/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,}',
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        facturator: {
          50: '#f2f8f9',
          100: '#deeaef',
          200: '#c1d7e0',
          400: '#6495ac',
          500: '#497a91',
          600: '#3f647b',
          700: '#385366',
          800: '#344856',
          900: '#2f3e4a',
          950: '#161f27'
        },
        woodsmoke: {
          50: '#f7f7f8',
          100: '#ededf1',
          200: '#d8d9df',
          300: '#b6b7c3',
          400: '#8e90a2',
          500: '#707287',
          600: '#5a5b6f',
          700: '#4a4a5a',
          800: '#3f404d',
          900: '#383842',
          950: '#101013'
        }
      }
    }
  },
  plugins: [
    flowbite.plugin()
  ]
}
