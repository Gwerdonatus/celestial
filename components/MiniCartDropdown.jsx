"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { urlFor } from "../lib/sanity"; // adjust path if needed

export default function MiniCartDropdown() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className="w-72 bg-white shadow-lg rounded-lg p-4">
        <p className="text-sm text-gray-600">Your cart is empty</p>
        <Link href="/store" className="block mt-3 text-yellow-500">Continue shopping</Link>
      </div>
    );
  }

  const subtotal = cart.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);

  return (
    <div className="w-80 bg-white shadow-lg rounded-lg p-4 animate-fade-in">
      <h4 className="font-semibold mb-2">Cart</h4>
      <ul className="space-y-2 max-h-56 overflow-auto">
        {cart.map((item) => (
          <li key={item._id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {item.image ? (
                <div className="w-12 h-12 relative">
                  <Image
                    src={urlFor(item.image).width(200).height(200).url()}
                    alt={item.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 bg-gray-100 rounded" />
              )}
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">${item.price} • x{item.quantity}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => updateQuantity(item._id, (item.quantity || 1) - 1)}
                  className="px-2 py-1 bg-gray-100 rounded"
                >
                  −
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item._id, (item.quantity || 1) + 1)}
                  className="px-2 py-1 bg-gray-100 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-xs text-red-500"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-3 border-t pt-3 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Subtotal</p>
          <p className="font-semibold">${subtotal.toFixed(2)}</p>
        </div>

        <div className="flex flex-col gap-2">
          <Link href="/store/cart" className="px-3 py-2 bg-yellow-500 text-white rounded text-sm">
            View Cart
          </Link>
          <a
            href={`https://wa.me/2348012345678?text=Hello, I want to checkout`}
            className="px-3 py-2 bg-green-500 text-white rounded text-sm"
            target="_blank"
            rel="noreferrer"
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
}
