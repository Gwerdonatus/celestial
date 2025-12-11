"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* Cosmic background image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-top bg-no-repeat" 
        style={{ backgroundImage: "url('/cosmic.jpg')" }}>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70"></div>

      {/* Side vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none"></div>

      {/* HERO MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl tracking-wide leading-tight">
          Awaken Your Inner Power
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-lg">
          Discover tools, rituals, divine readings, and sacred knowledge that guide you 
          through protection, healing, manifestation, and ancestral connection.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <a
            href="/store"
            className="px-10 py-4 rounded-full bg-white/90 text-black shadow-xl hover:bg-white transition-all duration-300"
          >
            Explore Store
          </a>

          <a
            href="/readings"
            className="px-10 py-4 rounded-full border border-white/70 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Book a Reading
          </a>
        </div>
      </div>

      {/* Live glowing stars */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `pulse ${Math.random() * 2 + 1}s ease-in-out infinite alternate`,
            }}
          ></div>
        ))}
      </div>

      {/* Pulsing animation for stars */}
      <style jsx>{`
        @keyframes pulse {
          from { opacity: 0.2; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1.2); }
        }
      `}</style>

    </section>
  );
}
