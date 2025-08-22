import type { Metadata } from 'next'
import './globals.css'
import { Cormorant_Garamond, Poppins } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600','700'],
  variable: '--font-cormorant'
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'High Quality Decor — Diseño de eventos con estilo y detalle',
  description: 'Eventos premium: flores, decoración, invitaciones, venues, entretenimiento, fotografía y video.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
