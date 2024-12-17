import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'md': '849px',
      'lg': '1106px',
      'xl': '1362px',
      '2xl': '1617px'
    },
    extend: {}
  },
  plugins: []
} satisfies Config
