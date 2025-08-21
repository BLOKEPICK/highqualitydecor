import { Playfair_Display, Inter } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400','500','600','700','800','900'],
  variable: '--font-playfair'
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400','500','600','700','800','900'],
  variable: '--font-inter'
});
