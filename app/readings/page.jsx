"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Wand2 } from "lucide-react";

export default function SpiritualReadingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [readingType, setReadingType] = useState("");
  const [details, setDetails] = useState("");

  const readings = [
    // Premium
    { label: "Introductory Reading — Free", price: 0 },
    { label: "Full Life Reading — $75", price: 75 },
    { label: "Twin Flame Connection — $40", price: 40 },
    { label: "Life Path & Destiny Blueprint — $35", price: 35 },
    { label: "Past Life Karma Clearing — $40", price: 40 },
    { label: "Shadow Work & Inner Healing Reading — $30", price: 30 },

    // Love
    { label: "Love Reading — $25", price: 25 },
    { label: "What Your Person Feels Reading — $30", price: 30 },
    { label: "Relationship Outcome Reading — $20", price: 20 },
    { label: "Reconciliation / No-Contact Reading — $25", price: 25 },
    { label: "Soulmate Scan — $20", price: 20 },

    // Energy
    { label: "Chakra & Aura Scan — $20", price: 20 },
    { label: "Spirit Guide Message — $25", price: 25 },
    { label: "Yes/No 5-Card Pull — $15", price: 15 },
    { label: "Energy Blockage Scan — $20", price: 20 },

    // Life Direction
    { label: "Career Reading — $25", price: 25 },
    { label: "Finance Path Reading — $30", price: 30 },
    { label: "Purpose & Alignment Reading — $35", price: 35 },
  ];

  const whatsappURL = () => {
    const base = "https://wa.me/2348066690846";
    const msg = `Hello, my name is ${name}. I would like to request the *${readingType}*. Here are my details: ${details}. My email is ${email}.`;
    return `${base}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen relative text-white p-6 flex items-center justify-center overflow-hidden">
      {/* Deep Cosmic Background */}
      <div className="absolute inset-0 -z-20 bg-black"></div>
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40"></div>

      {/* Animated Nebula Glow */}
      <div className="absolute inset-0 -z-10 animate-pulse bg-[radial-gradient(circle_at_center,rgba(128,0,255,0.25),transparent_60%)]"></div>

      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", scale: 0 }}
            animate={{ scale: [0, 1, 0], opacity: [0.2, 1, 0] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl"
      >
        <Card className="bg-white/10 backdrop-blur-2xl border-white/20 shadow-2xl rounded-3xl p-2">
          <CardContent className="p-8 space-y-6">
            <div className="text-center space-y-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mx-auto mb-2"
              >
                <Wand2 className="w-14 h-14 text-purple-300 drop-shadow-xl" />
              </motion.div>
              <h1 className="text-3xl font-bold text-purple-200">Connect for a Spiritual Consultation</h1>
              <p className="text-gray-300 text-sm">Choose your reading and send your request or speak with a priestess</p>
            </div>

            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/10 text-white placeholder-gray-400"
            />

            <Input
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 text-white placeholder-gray-400"
            />

            {/* Reading List */}
            <Select onValueChange={(v) => setReadingType(v)}>
              <SelectTrigger className="bg-white/10 text-white border-white/20">
                <SelectValue placeholder="Select Reading Type" />
              </SelectTrigger>
              <SelectContent className="bg-black/80 text-white border-white/20 max-h-60 overflow-y-auto">
                {readings.map((r) => (
                  <SelectItem key={r.label} value={r.label}>
                    {r.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Textarea
              placeholder="Describe your situation or intention..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="bg-white/10 text-white placeholder-gray-400 min-h-[120px]"
            />

            <Button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg rounded-xl shadow-lg shadow-purple-900/40"
              onClick={() => window.open(whatsappURL(), "_blank")}
              disabled={!name || !email || !readingType}
            >
              Contact on WhatsApp
            </Button>

            <p className="text-center text-gray-400 text-xs">A pre-filled message will be sent to WhatsApp.</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}