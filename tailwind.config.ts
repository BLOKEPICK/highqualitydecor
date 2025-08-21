import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        aurora: {
          night: '#0A0A0F',
          ink: '#121319',
          panel: '#141625',
          purple: '#6C2BD9',
          grape: '#5B21B6',
          lilac: '#C7B7F7',
          haze: '#B8B8C7',
          white: '#FCFCFF'
        }
      },
      boxShadow: {
        soft: '0 14px 36px rgba(0,0,0,.28)',
        ring: '0 0 0 6px rgba(108,43,217,.18)'
      },
      borderRadius: { xl3: '1.25rem', pill: '9999px' },
      fontFamily: {
        display: ['var(--font-marcellus)'],
        sans: ['var(--font-urbanist)']
      }
    }
  },
  plugins: []
}
export default config
