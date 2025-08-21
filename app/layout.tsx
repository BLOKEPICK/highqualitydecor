import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { playfair, inter } from './fonts';

export const metadata: Metadata = {
  title: 'High Quality Decor – Event Decor, Flowers, Film & Design',
  description: 'Elegant, family-first event decor across the United States: flowers, full decoration, invitation cards, entertainment, documentary photo/video, and graphic design.',
  metadataBase: new URL('https://highqualitydecor.com'),
  openGraph: {
    title: 'High Quality Decor',
    description: 'Elegant, family-first event decor across the United States.',
    url: 'https://highqualitydecor.com',
    siteName: 'High Quality Decor',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  alternates: { canonical: 'https://highqualitydecor.com' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
