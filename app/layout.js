import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-poppins"
});

export const metadata = {
  title: "Nuevo Sitio | Next.js + Vercel",
  description: "Base mínima para iniciar un proyecto moderno con Next.js en Vercel.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Nuevo Sitio",
    description: "Base mínima con Next.js (App Router)",
    type: "website"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
