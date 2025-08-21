import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hqd: {
          purple: '#6F2DBD',
          plum: '#53208F',
          noir: '#0B0B10',
          ink: '#12131A',
          smoke: '#1B1C25',
          lavender: '#D9CCF2',
          silver: '#C9C9D1'
        }
      },
      boxShadow: {
        soft: '0 12px 30px rgba(0,0,0,.22)',
        inner: 'inset 0 1px 0 rgba(255,255,255,0.06)'
      },
      borderRadius: {
        xl3: '1.25rem'
      },
      fontFamily: {
        display: ['var(--font-cormorant)'],
        sans: ['var(--font-manrope)']
      }
    }
  },
  plugins: []
}
export default config
