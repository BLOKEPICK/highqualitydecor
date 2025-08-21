import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hqd: {
          purple: '#6F2DBD',
          noir: '#0D0E12',
          ink: '#111217',
          lavender: '#EDE4FF',
          pearl: '#FAFAFF'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.12)',
        glow: '0 0 0 6px rgba(111,45,189,.12)'
      },
      borderRadius: {
        xl3: '1.25rem'
      },
      fontFamily: {
        display: ['var(--font-playfair)'],
        sans: ['var(--font-inter)']
      },
      backgroundImage: {
        'noise': "url('/ornaments/noise.png')"
      }
    }
  },
  plugins: []
}
export default config
