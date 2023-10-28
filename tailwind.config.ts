import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.75rem',
      },
      colors: {
        primary: '#5865F2',
        secondary: '#2B2D31',
        background: '#1E1F22',
      },
    }
  },
  plugins: [],
}
export default config
