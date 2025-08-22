import Header from "@/components/Header";

export const metadata = {
  title: "High Quality Decor",
  description: "Base neutra con header responsive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
