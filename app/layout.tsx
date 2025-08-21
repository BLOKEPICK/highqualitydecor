import type { Metadata } from 'next'
import './globals.css'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  metadataBase: new URL('https://highqualitydecor.com'),
  title: 'High Quality Decor — Premium Family Events',
  description: 'Elegant décor, floral design, invitations, entertainment, and documentary services.',
  openGraph: { title: 'High Quality Decor', description: 'Premium décor for unforgettable moments.', type: 'website' },
  icons: { icon: '/logo.svg' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
