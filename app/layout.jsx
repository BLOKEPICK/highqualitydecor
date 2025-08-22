import './globals.css'
import { Bodoni_Moda, Inter } from 'next/font/google'

const bodoni = Bodoni_Moda({ subsets: ['latin'], weight: ['600','700'], variable: '--font-bodoni' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-inter' })

export const metadata = {
  title: 'High Quality Decor — Diseño de eventos con estilo y detalle',
  description: 'Eventos premium: flores, decoración, invitaciones, venues, entretenimiento, fotografía y video.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${bodoni.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
