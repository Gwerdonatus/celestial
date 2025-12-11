"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Alicia Morgan",
    story:
      "I came here during one of the hardest moments of my life. I ordered a protection candle and booked a reading. The explanation I received was so gentle, so spiritually rich, that I cried afterward. My home feels calmer now—lighter. Something shifted. I'm deeply grateful.",
    hasImage: true,
    img: "/images/avatar1.jpg",
  },
  {
    name: "Daniel Foster",
    story:
      "My order arrived faster than expected and the energy cleansing kit worked wonders. I used the step-by-step guide on the website and the peace that followed was unreal. My sleep improved the same night.",
    hasImage: false,
  },
  {
    name: "Sophia Barnes",
    story:
      "I’ve bought spiritual items online before, but NOTHING felt as authentic as what I received here. The sweet smell, the way everything was packaged, the handwritten affirmation… it felt alive. It felt intentional.",
    hasImage: true,
    img: "/images/avatar2.jpg",
  },
  {
    name: "Michael Adams",
    story:
      "This community restored my spiritual connection. I followed the moon ritual guide posted in the community and something awakened in me. I feel balanced again.",
    hasImage: false,
  },
  {
    name: "Jenna Lawson",
    story:
      "The road opener oil I bought worked within 3 days. I’m not exaggerating—my finances shifted. A debt I had been chasing for months suddenly cleared. This place is blessed.",
    hasImage: true,
    img: "/images/avatar3.jpg",
  },
  {
    name: "Christopher Reed",
    story:
      "What surprised me most wasn't the product—it was the ENERGY. You can feel the intention. The items feel like they were truly prepared by someone who understands spiritual work deeply.",
    hasImage: false,
  },
  {
    name: "Emily Carter",
    story:
      "I booked a spiritual reading last month and the accuracy shocked me. Details about my childhood trauma… things I've never told anyone. That reading helped me forgive myself.",
    hasImage: true,
    img: "/images/avatar4.jpg",
  },
  {
    name: "Jason Miller",
    story:
      "I use the cleansing spray every morning now. My anxiety dropped dramatically. I didn’t even know spiritual hygiene could feel this good.",
    hasImage: false,
  },
  {
    name: "Natalie Hughes",
    story:
      "My package had such beautiful energy. When I opened it, my whole room felt warm. I’ve never experienced that before. I instantly knew the items were blessed.",
    hasImage: true,
    img: "/images/avatar5.jpg",
  },
  {
    name: "Anthony White",
    story:
      "The manifestation candle brought results in ways I didn’t expect. My relationship improved, my confidence improved, and opportunities opened. I’m still shocked.",
    hasImage: false,
  },
  {
    name: "Lily Henderson",
    story:
      "This community feels like home. I learn something new every time I visit. The teachings are powerful but gentle—like guidance from someone who genuinely cares.",
    hasImage: true,
    img: "/images/avatar6.jpg",
  },
  {
    name: "Ethan Walker",
    story:
      "The ancestral connection guide changed everything for me. I connected with my roots for the first time. My dreams have become clearer.",
    hasImage: false,
  },
  {
    name: "Grace Bennett",
    story:
      "The crystals I ordered are the purest I’ve ever held. Heavy energy that had been lingering in my home disappeared within days.",
    hasImage: true,
    img: "/images/avatar7.jpg",
  },
  {
    name: "Ryan Parker",
    story:
      "The financial breakthrough ritual worked in just one week. I don’t understand how… but it worked. My life is different now.",
    hasImage: false,
  },
  {
    name: "Ava Collins",
    story:
      "Every product from here comes with this soft, grounding energy. It’s like holding a small piece of nature.",
    hasImage: true,
    img: "/images/avatar8.jpg",
  },
  {
    name: "Jacob Rogers",
    story:
      "I was skeptical but curious. I ordered a protection set. The day it arrived, I slept peacefully for the first time in months. That’s all the proof I needed.",
    hasImage: false,
  },
  {
    name: "Hannah Mitchell",
    story:
      "The moon water instructions changed my nightly routine. My dreams became comforting instead of chaotic. I’m learning myself again.",
    hasImage: true,
    img: "/images/avatar9.jpg",
  },
  {
    name: "Robert King",
    story:
      "Everything here feels spiritually clean and powerful. I’ve never felt safer ordering sacred tools online.",
    hasImage: false,
  },
  {
    name: "Olivia Brooks",
    story:
      "The reading made me understand my inner child and finally let go of guilt I’ve carried for years.",
    hasImage: true,
    img: "/images/avatar10.jpg",
  },
  {
    name: "Brandon Scott",
    story:
      "I’m not a spiritual person, but the cleansing kit changed the entire atmosphere of my apartment. Even visitors noticed.",
    hasImage: false,
  },
];

// ------------------------------------------------------
// PAGE STARTS HERE
// ------------------------------------------------------

export default function TestimonialsPage() {
  const [current, setCurrent] = useState(0);

  // ✅ FIXED AUTO-ROTATE USING useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-[#C7A27C] to-[#8A6746] text-brown-900">
      
      {/* Top Carousel */}
      <div className="relative w-full h-64 overflow-hidden">
        {testimonials.slice(0, 4).map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: current === i ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/carousel${i + 1}.jpg')`,
            }}
          >
            <div className="bg-black/40 p-6 rounded-xl text-white text-center max-w-xl">
              <p className="text-lg italic">“{t.story}”</p>
              <p className="mt-2 font-semibold">— {t.name}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Heading */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-[#4b2e19] tracking-wide">
          Voices of Our Spiritual Community
        </h1>
        <p className="text-[#5a3a22] max-w-2xl mx-auto mt-3">
          These are real stories from people who found healing, clarity, protection, and transformation
          through our spiritual tools and teachings.
        </p>
      </div>

      {/* Testimonial Grid */}
      <div className="grid md:grid-cols-2 gap-8 px-6 pb-16 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <Card
            key={index}
            className="bg-[#E7D3B3]/70 backdrop-blur-sm border-[#B09067] shadow-md"
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14 ring-2 ring-[#7a563a]">
                  {t.hasImage ? (
                    <AvatarImage src={t.img} />
                  ) : (
                    <AvatarFallback className="bg-[#7a563a] text-white font-bold">
                      {t.name.charAt(0)}
                    </AvatarFallback>
                  )}
                </Avatar>
                <p className="font-semibold text-[#4b2e19]">{t.name}</p>
              </div>
              <p className="text-[#4b2e19] leading-relaxed italic">“{t.story}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
