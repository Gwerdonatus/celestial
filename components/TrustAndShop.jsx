"use client";

import Image from "next/image";

export default function TrustAndShop() {
  const trustCards = [
    { icon: "🌍", title: "Worldwide Delivery", desc: "We ship authentic spiritual materials to every corner of the globe." },
    { icon: "🕊️", title: "Pure & Trusted", desc: "All items are handpicked and ethically sourced for your practice." },
    { icon: "💳", title: "Secure Payments", desc: "Pay safely using Paystack, card, or digital wallets." },
    { icon: "💌", title: "Fast & Reliable", desc: "Orders are processed immediately for quick delivery." },
  ];

  const steps = [
    { step: "1", title: "Browse & Select", desc: "Choose from our spiritual tools, rituals, and sacred materials." },
    { step: "2", title: "Pay Securely", desc: "Use Paystack, card, or wallet to pay safely and instantly." },
    { step: "3", title: "Receive Worldwide", desc: "Fast, safe, and reliable delivery to your door anywhere in the world." },
  ];

  const featuredProducts = [
    { name: "Sage Smudge Stick", img: "/smudgestick.jpg", price: "$15" },
    { name: "Crystal Healing Set", img: "/crystalset.jpg", price: "$45" },
    { name: "Spiritual Candle", img: "/candle.jpg", price: "$12" },
  ];

  return (
    <section className="relative bg-black text-white px-6 md:px-12 py-16 overflow-hidden">
      
      {/* Starry Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className={`absolute bg-white rounded-full opacity-${Math.floor(Math.random() * 50 + 10)} w-[${Math.floor(Math.random() * 3 + 1)}px] h-[${Math.floor(Math.random() * 3 + 1)}px] animate-pulse`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* TRUST CARDS */}
      <div className="relative max-w-7xl mx-auto mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 z-10">
        {trustCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-300 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <div className="relative max-w-4xl mx-auto mb-16 text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-lg">{step.step}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <div className="relative max-w-7xl mx-auto text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-64">
                <Image src={product.img} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-purple-400 font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
