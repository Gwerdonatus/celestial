"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // load initial from localStorage so cart persists across refresh
  const [cart, setCart] = useState(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("cart") : null;
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  // returns total items (sum of quantities)
  const itemsCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  // add product: dedupe by _id, increment quantity if exists
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((p) => p._id === product._id);
      if (existing) {
        return prev.map((p) =>
          p._id === product._id ? { ...p, quantity: (p.quantity || 1) + qty } : p
        );
      }
      // store minimal product info to keep localStorage small
      const toAdd = {
        _id: product._id,
        title: product.title,
        price: product.price,
        image: product.image, // keep original object to render via urlFor
        quantity: qty,
      };
      return [...prev, toAdd];
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prev) =>
      prev
        .map((item) => (item._id === productId ? { ...item, quantity } : item))
        .filter((i) => i.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item._id !== productId));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, itemsCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
