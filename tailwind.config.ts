import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hqd: {
          plum: '#5B218F',
          purple: '#6F2DBD',
          noir: '#0C0D12',
          ink: '#12131A',
          panel: '#151722',
          lilac: '#CDBAF2',
          fog: '#9FA3B2'
        }
      },
      boxShadow: {
        soft: '0 14px 36px rgba(0,0,0,.28)',
        ring: '0 0 0 6px rgba(111,45,189,.15)'
      },
      borderRadius: { xl3: '1.25rem' },
      fontFamily: {
        display: ['var(--font-fraunces)'],
        sans: ['var(--font-jakarta)']
      }
    }
  },
  plugins: []
}
export default config
