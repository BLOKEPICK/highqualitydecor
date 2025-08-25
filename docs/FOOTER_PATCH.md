# Footer — cómo agregarlo al layout

1) Copia `components/Footer.jsx` a tu carpeta `components/`.
2) Abre `app/layout.js` y añade la importación:
   ```js
   import Footer from "../components/Footer";
   ```

3) Dentro del JSX del layout, **debajo de `{children}`**, coloca:
   ```jsx
   <Footer />
   ```

Ejemplo (esquemático):
```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />  {/* <- aquí */}
      </body>
    </html>
  );
}
```
