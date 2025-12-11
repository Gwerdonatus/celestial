// app/store/cart/page.jsx  (or wherever your CartPage lives)
"use client";

import Link from "next/link";
import { useCart } from "../../../context/CartContext";
import Image from "next/image";
import { urlFor } from "../../../lib/sanity";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  // <-- UPDATE: your real contacts
  const sellerWhatsApp = "447451295547"; // no plus sign, international format
  const sellerEmail = "queenayahe@outlook.com";

  if (!cart || cart.length === 0) {
    return (
      <div className="text-center py-40 text-gray-700 bg-linear-to-b from-celestial-50 to-celestial-100 min-h-screen">
        <p className="text-xl font-medium mb-4">Your cart is empty 🛒</p>
        <Link
          href="/store"
          className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-400 transition"
        >
          Go back to store
        </Link>
      </div>
    );
  }

  const subtotal = cart.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);

  // New helper: build the WhatsApp prefilled message for all cart items
  const buildWhatsAppMessage = () => {
    const lines = [
      "Hello! I want to buy the following items from the cart:",
      "",
    ];

    cart.forEach((item, idx) => {
      const qty = item.quantity || 1;
      const total = ((item.price || 0) * qty).toFixed(2);
      lines.push(
        `${idx + 1}. ${item.title} x${qty} — $${total}`
      );
    });

    lines.push("", `Subtotal: $${subtotal.toFixed(2)}`, "", "Please guide me on next steps.");
    return encodeURIComponent(lines.join("\n"));
  };

  const handleWhatsAppCheckout = () => {
    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${sellerWhatsApp}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-celestial-50 to-celestial-100 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-celestial-700">
          Your Cart
        </h1>

        <ul className="space-y-6">
          {cart.map((item) => (
            <li
              key={item._id}
              className="flex justify-between items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 relative">
                  {item.image ? (
                    <Image
                      src={urlFor(item.image).width(400).height(400).url()}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-gray-100 rounded-lg" />
                  )}
                </div>

                <div>
                  <p className="text-lg font-semibold text-gray-900">{item.title}</p>
                  <p className="text-yellow-600 font-bold">${item.price}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item._id, (item.quantity || 1) - 1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                      −
                    </button>
                    <span className="px-2 font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, (item.quantity || 1) + 1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-3">
                <p className="text-sm text-gray-500">Total</p>
                <p className="text-lg font-semibold text-gray-900">
                  ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                </p>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 transition"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white p-6 rounded-xl shadow-lg">
          <div>
            <p className="text-sm text-gray-500">Subtotal</p>
            <p className="text-3xl font-bold text-celestial-700">${subtotal.toFixed(2)}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Prefilled WhatsApp */}
            <button
              onClick={handleWhatsAppCheckout}
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-400 transition"
            >
              Checkout via WhatsApp
            </button>

            {/* Email fallback */}
            <a
              href={`mailto:${sellerEmail}?subject=Purchase Request for Cart Items`}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-400 transition"
            >
              Checkout via Email
            </a>

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-500 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
