import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ser: {
          ivory: '#FAF7F2',
          linen: '#F4F1EB',
          ink: '#1A1A1A',
          plum: '#5E2CA5',
          lavender: '#E9E1F8',
          gold: '#CFAF6A',
          gray: '#6B7280'
        }
      },
      borderRadius: { xl3: '1.25rem', pill: '9999px' },
      boxShadow: {
        soft: '0 14px 36px rgba(17,24,39,.12)',
        inner: 'inset 0 1px 0 rgba(17,24,39,.06)'
      },
      fontFamily: {
        display: ['var(--font-cinzel)'],
        sans: ['var(--font-manrope)']
      }
    }
  },
  plugins: []
}
export default config
