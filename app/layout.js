import "./globals.css";
import Header from "@/components/Header";

// Asegura breakpoints correctos en móviles
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "High Quality Decor",
  description: "Base con header y soporte móvil correcto.",
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
