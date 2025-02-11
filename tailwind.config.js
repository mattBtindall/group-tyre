/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
],
  theme: {
    extend: {
      colors: {
        'turquoise': '#0173af',
        'secondary': '#424242',
        'red': '#E93323',
        'red-light': '#FBD6D3',
        'red-medium': '#FD7469',
        'reg-yellow': '#FFD200',
        'gauge-dark-green': '#617540',
        'gauge-light-green': '#87A259',
        'gauge-dark-orange': '#ED7E30',
        'gauge-yellow': '#F7E164',
        'gauge-red': '#E63A33',
        'essentials-purple': '#884ea0',
        'essentials-blue': '#2e86c1',
        'essentials-green': '#229954',
        'essentials-yellow': '#f4d03f',
        'essentials-orange': '#e67e22',
        'essentials-navy': '#2e4053',
      },
      fontFamily: {
        'reddit-sans': '"Reddit Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        'number-plate': 'NumberPlate, monospace'
      },
      spacing: {
        '128': '32rem',
        '160': '40rem',
        '172': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '256': '64rem',
      },
      screens: {
        '3xl': '1729px',
        '4xl': '2048px'
      }
    },
  },
  plugins: [],
}

