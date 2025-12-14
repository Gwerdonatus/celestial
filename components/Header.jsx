"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: scrolled
          ? "var(--header-height-scrolled)"
          : "var(--header-height)",
      }}
    >
      {/* WATER GLASS */}
      <div
        className={`absolute inset-0 transition-all duration-500 border-b border-white/10 ${
          scrolled
            ? "bg-white/10 backdrop-blur-xl"
            : "bg-white/5 backdrop-blur-md"
        }`}
      />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LEFT NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-light tracking-wide text-white/80">
          <a href="/readings" className="hover:text-white transition">
            Readings
          </a>
          <a href="/services" className="hover:text-white transition">
            Services
          </a>
        </nav>

        {/* LOGO (CLICKABLE) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" aria-label="Go to homepage">
            <div className="relative group cursor-pointer flex items-center justify-center">
              {/* RAINBOW BEAM */}
              <div
                className={`absolute -inset-x-24 -inset-y-8 rounded-full blur-3xl
                bg-[conic-gradient(at_top,_#ff0080,_#ff8c00,_#ffd700,_#00ffcc,_#0099ff,_#7a5cff,_#ff0080)]
                transition-all duration-700
                ${
                  scrolled
                    ? "opacity-40"
                    : "opacity-80 animate-spin-slow"
                }
                ${mounted ? "animate-logo-intro" : ""}`}
              />

              {/* INNER GLOW */}
              <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl opacity-60 group-hover:opacity-90 transition" />

              {/* TEXT */}
              <h1 className="relative text-white text-sm md:text-lg font-light tracking-[0.3em]
                drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]
                group-hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.6)]
                transition-all duration-300">
                ANCESTRAL CELESTIALS
              </h1>

              {/* SHIMMER LINE */}
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
              </span>
            </div>
          </Link>
        </div>

        {/* RIGHT NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-light tracking-wide text-white/80">
          <a href="/store" className="hover:text-white transition">
            Store
          </a>
          <a href="/testimonies" className="hover:text-white transition">
            Testimonies
          </a>
          <a href="/community" className="hover:text-white transition">
            Community
          </a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white z-50"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ${
          open
            ? "max-h-screen opacity-100 py-8"
            : "max-h-0 opacity-0 overflow-hidden"
        } bg-black/70 backdrop-blur-xl border-t border-white/10`}
      >
        <div className="flex flex-col items-center gap-6 text-white text-lg font-light">
          <a href="/readings">Consultation</a>
          <a href="/services">Services</a>
          <a href="/store">Store</a>
          <a href="/testimonies">Testimonies</a>
          <a href="/community">Community</a>
        </div>
      </div>
    </header>
  );
}
