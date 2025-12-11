// app/layout.js
import "./globals.css";
import { CartProvider } from "../context/CartContext"; // import your cart context
import Footer from "../components/Footer"; // import the footer component

export const metadata = {
  title: "Celestial Ancestral | Spiritual Store & Sacred Tools",
  description:
    "Crystals, incense, jewelry, and ancestral wisdom for your spiritual journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          {/* Main content */}
          <main className="flex-1">{children}</main>

          {/* Sticky footer */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
