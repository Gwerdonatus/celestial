"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Transparent cosmic-glass effect */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md border-b border-white/10"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Desktop Navigation - Left */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide font-light">
          <a href="/readings" className="text-white/80 hover:text-white transition">Readings</a>
          <a href="/services" className="text-white/80 hover:text-white transition">Services</a>
        </nav>

        {/* Logo with aura */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-3xl opacity-70 bg-linear-to-r from-purple-500 via-blue-400 to-teal-300 animate-pulse-slow"></div>
            <h1 className="relative text-white tracking-[0.25em] text-lg font-light drop-shadow-xl">
              ANCESTRAL CELESTIALS
            </h1>
          </div>
        </div>

        {/* Desktop Navigation - Right */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide font-light">
          <a href="/store" className="text-white/80 hover:text-white transition">Store</a>
          <a href="/testimonies" className="text-white/80 hover:text-white transition">Testimonies</a>
          <a href="/community" className="text-white/80 hover:text-white transition">Community</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white z-50"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-white/10 transition-all duration-300 ease-in-out ${
          open ? "max-h-screen opacity-100 py-8" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-white text-lg font-light">
          <a href="/readings" className="hover:text-purple-400 transition-colors">Readings</a>
          <a href="/services" className="hover:text-purple-400 transition-colors">Services</a>
          <a href="/store" className="hover:text-purple-400 transition-colors">Store</a>
          <a href="/testimonies" className="hover:text-purple-400 transition-colors">Testimonies</a>
          <a href="/community" className="hover:text-purple-400 transition-colors">Community</a>
        </div>
      </div>
    </header>
  );
}
