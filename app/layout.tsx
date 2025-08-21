import type { Metadata } from 'next'
import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://highqualitydecor.com'),
  title: 'High Quality Decor | Elegant Family Events',
  description: 'Premium event décor, bouquets, invitations, entertainment, and documentary services. Nationwide in the U.S.',
  openGraph: {
    title: 'High Quality Decor',
    description: 'Elegant décor for unforgettable family moments.',
    url: 'https://highqualitydecor.com',
    type: 'website'
  },
  icons: { icon: '/logo.svg' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-[var(--font-inter)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
