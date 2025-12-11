"use client";

export default function WhatsAppFloating({ number = "2348012345678" }) {
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-6 z-50 flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
    >
      <span className="text-xl">💬</span>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
