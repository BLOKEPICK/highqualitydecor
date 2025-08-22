import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "High Quality Decor",
  description: "Sitio en construcción — base con menú (header)",
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
