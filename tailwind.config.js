/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Source Code Pro', 'monospace'],
        title: ['Press Start 2P', 'system-ui'],
      },
      colors: {

        'text-pri': '#DFEFFB',
        'text-sec': '#041420',
        'bg-pri': '#040D1B',
        'bg-sec': '#E4EDFB',
        'pri': '#81BBEE',
        'sec': '#EB6B76',
        'accent': '#E2B82C',

      },
    },
  },
  plugins: [],
};
