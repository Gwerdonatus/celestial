"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">

        {/* Left Section: Logo / Site Name */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold tracking-wide">Spiritual Hub</h2>
          <p className="text-gray-400 text-sm max-w-xs">
            Explore spiritual readings, services, and community stories. Connect with like-minded people and embrace your spiritual journey.
          </p>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-sm text-gray-300 uppercase tracking-wider">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm">
            <a href="/readings" className="hover:text-[#D4B185] transition-colors">Readings</a>
            <a href="/services" className="hover:text-[#D4B185] transition-colors">Services</a>
            <a href="/store" className="hover:text-[#D4B185] transition-colors">Store</a>
            <a href="/testimonies" className="hover:text-[#D4B185] transition-colors">Testimonies</a>
            <a href="/community" className="hover:text-[#D4B185] transition-colors">Community</a>
          </div>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-sm text-gray-300 uppercase tracking-wider">Follow Us</h3>
          <div className="flex gap-5 text-lg">
            <a href="/" className="hover:text-[#D4B185] transition-colors"><FaFacebookF /></a>
            <a href="/" className="hover:text-[#D4B185] transition-colors"><FaTwitter /></a>
            <a href="/" className="hover:text-[#D4B185] transition-colors"><FaInstagram /></a>
            <a href="/" className="hover:text-[#D4B185] transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-800 text-center text-sm py-6 text-gray-400">
        &copy; {new Date().getFullYear()} Spiritual Hub. All rights reserved.
      </div>
    </footer>
  );
}
