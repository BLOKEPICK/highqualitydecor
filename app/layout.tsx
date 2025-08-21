
import type { Metadata } from 'next'
import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-playfair' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://highqualitydecor.com'),
  title: 'High Quality Decor — Luminosa',
  description: 'Light, elegant décor studio for family events across the U.S.',
  openGraph: { title: 'High Quality Decor', description: 'Premium décor for unforgettable moments.', type: 'website' },
  icons: { icon: '/logo.svg' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
