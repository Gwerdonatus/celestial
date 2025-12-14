"use client";

import { GiCrystalWand, GiMagicSwirl, GiOpenBook } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      name: "Readings & Guidance",
      icon: <GiOpenBook className="w-12 h-12 text-purple-400" />,
      description:
        "Our readings provide clarity and spiritual guidance for those seeking answers in life, love, and work. Ideal for individuals at a crossroads or seeking deeper understanding of their life's path.",
      link: "/readings",
      buttonText: "Book a Reading",
    },
    {
      name: "Cleansing & Energy Healing",
      icon: <GiCrystalWand className="w-12 h-12 text-teal-400" />,
      description:
        "Remove negative energies and restore balance with our cleansing and energy healing services. Perfect for anyone feeling blocked, drained, or in need of spiritual renewal.",
      link: "/readings",
      buttonText: "Schedule Cleansing",
    },
    {
      name: "Spells & Rituals",
      icon: <GiMagicSwirl className="w-12 h-12 text-pink-400" />,
      description:
        "Custom spells and rituals to manifest your desires, protect your home, or attract positivity. Suitable for seekers who believe in the power of intention and magic.",
      link: "/readings",
      buttonText: "Consult a Spellcaster",
    },
    {
      name: "Spiritual Coaching & Support",
      icon: <FaHandsHelping className="w-12 h-12 text-yellow-400" />,
      description:
        "Receive guidance to strengthen your spiritual practice, understand your gifts, and navigate life challenges with confidence. Perfect for anyone exploring spirituality deeply.",
      link: "/readings",
      buttonText: "Get Coaching",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 md:px-20 font-sans">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 tracking-wide text-purple-300">
        Our Spiritual Services
      </h1>

      <p className="max-w-3xl mx-auto text-center text-lg mb-16 text-gray-300">
        Explore our holistic spiritual offerings. Each service is crafted to bring clarity, healing, and alignment to your mind, body, and soul. Whether you seek guidance, energy balance, or spiritual empowerment, our services are designed for seekers who want to elevate their journey.
      </p>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black border border-gray-800 rounded-xl p-8 flex flex-col items-start gap-6 hover:border-purple-500 transition-colors"
          >
            <div className="flex items-center gap-4">
              {service.icon}
              <h2 className="text-2xl font-semibold text-purple-300">{service.name}</h2>
            </div>
            <p className="text-gray-300">{service.description}</p>
            <Link href={service.link}>
              <button className="mt-2 px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                {service.buttonText}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
