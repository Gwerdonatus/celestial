import "./globals.css";
import { CartProvider } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Celestial Ancestral | Spiritual Store & Sacred Tools",
  description:
    "Crystals, incense, jewelry, and ancestral wisdom for your spiritual journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-black">
      <body className="flex flex-col min-h-screen bg-black text-white">
        <CartProvider>
          {/* Universal Header */}
          <Header />

          {/* Page content – pushed below fixed header */}
          <main
            className="flex-1 bg-black transition-all duration-300"
            style={{ paddingTop: "var(--header-height)" }}
          >
            {children}
          </main>

          {/* Universal Footer */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
