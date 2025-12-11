"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail } from "lucide-react";
import Image from "next/image";

export default function PaymentPopup({ open, onClose }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="relative bg-white dark:bg-celestial-900 rounded-3xl shadow-xl w-[90%] max-w-md p-6 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            className="absolute right-3 top-3 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-celestial-700"
            onClick={onClose}
          >
            <X className="w-5 h-5 text-black dark:text-white" />
          </button>

          {/* Title */}
          <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
            Complete Your Purchase
          </h2>

          <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
            You will continue your payment securely on WhatsApp.
            After payment, you’ll fill your delivery information.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold shadow-md"
            >
              <Image
                src="/whatsapp-icon.png"
                width={22}
                height={22}
                alt="WhatsApp"
              />
              Pay via WhatsApp
            </a>

            <a
              href="mailto:example@gmail.com"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-semibold shadow-md"
            >
              <Mail className="w-5 h-5" />
              Contact via Email
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
