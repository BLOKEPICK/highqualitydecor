
import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#6F2DBD',
          plum: '#53208F',
          lavender: '#EDE7F6',
          blush: '#F9F7FB',
          ink: '#1A1A1A',
          gray: '#6B7280'
        }
      },
      borderRadius: { xl3:'1.25rem', pill:'9999px' },
      boxShadow: {
        soft: '0 12px 30px rgba(17,24,39,.08)',
        inner: 'inset 0 1px 0 rgba(17,24,39,.06)'
      },
      fontFamily: {
        display: ['var(--font-playfair)'],
        sans: ['var(--font-inter)']
      }
    }
  },
  plugins: []
}
export default config
