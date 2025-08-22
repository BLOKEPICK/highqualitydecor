import "./globals.css";
import Header from "@/components/Header";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "High Quality Decor",
  description: "Slide-in mobile menu con fondo opaco forzado.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
