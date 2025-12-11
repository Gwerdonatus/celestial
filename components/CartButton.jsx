"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import MiniCartDropdown from "./MiniCartDropdown";

export default function CartButton() {
  const { itemsCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href="/store/cart" className="relative inline-flex items-center gap-2 px-3 py-1">
        <span className="text-2xl">🛒</span>
        {itemsCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">
            {itemsCount}
          </span>
        )}
      </Link>

      {/* mini-cart dropdown */}
      <div className="absolute right-0 mt-2">
        {open && <MiniCartDropdown />}
      </div>
    </div>
  );
}
