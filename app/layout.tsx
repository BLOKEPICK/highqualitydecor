
import type { Metadata } from 'next'
import './globals.css'
import { Marcellus, Urbanist } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NavDock from '@/components/NavDock'

// FIX: specify weight '400' for Marcellus (it's single-weight)
const marcellus = Marcellus({ subsets: ['latin'], weight: '400', variable: '--font-marcellus' })
const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' })

export const metadata: Metadata = {
  metadataBase: new URL('https://highqualitydecor.com'),
  title: 'High Quality Decor — Aurora Luxe',
  description: 'Premium décor studio for family events: floral, invitations, entertainment, and documentary services.',
  openGraph: { title: 'High Quality Decor', description: 'Premium décor for unforgettable moments.', type: 'website' },
  icons: { icon: '/logo.svg' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${marcellus.variable} ${urbanist.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <NavDock />
      </body>
    </html>
  )
}
