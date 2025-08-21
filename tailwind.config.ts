import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        hqd: {
          purple: '#6F2DBD',
          noir: '#111217',
          lavender: '#EDE4FF'
        }
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.07)'
      },
      borderRadius: {
        xl2: '1rem',
        xl3: '1.25rem'
      }
    }
  },
  plugins: []
}
export default config
