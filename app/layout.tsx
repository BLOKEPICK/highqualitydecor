import type { Metadata } from 'next'
import './globals.css'
import { Cinzel, Manrope } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400','600','700'], variable: '--font-cinzel' })
const manrope = Manrope({ subsets: ['latin'], weight: ['400','600','700'], variable: '--font-manrope' })

export const metadata: Metadata = {
  metadataBase: new URL('https://highqualitydecor.com'),
  title: 'High Quality Decor — Serenade',
  description: 'A light, editorial event décor studio for family moments across the U.S.',
  openGraph: { title: 'High Quality Decor', description: 'Premium décor for unforgettable moments.', type: 'website' },
  icons: { icon: '/logo.svg' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
