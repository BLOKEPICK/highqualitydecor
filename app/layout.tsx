import type { Metadata } from 'next'
import './globals.css'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['400','500','600','700'] })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  metadataBase: new URL('https://highqualitydecor.com'),
  title: 'High Quality Decor — Premium Family Events',
  description: 'Elegant décor, floral design, invitations, entertainment, and documentary services.',
  openGraph: { title: 'High Quality Decor', description: 'Premium décor for unforgettable moments.', type: 'website' },
  icons: { icon: '/logo.svg' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
