import "./globals.css";
import Header from "../components/Header";

export const metadata = { title: "High Quality Decor", description: "Premium event styling and decor" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
