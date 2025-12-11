"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { client as sanityClient, urlFor } from "@/lib/sanity";

export default function CommunityLearningPage() {
  const [posts, setPosts] = useState([]);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  // Load posts
  useEffect(() => {
    const fetchPosts = async () => {
      const query = `
        *[_type == "communityPost"] | order(publishedAt desc){
          _id,
          title,
          caption,
          image,
          video,
          steps,
          publishedAt,
          author->{
            name,
            avatar
          }
        }
      `;
      const data = await sanityClient.fetch(query);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  // SAFELY set window size after mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  // Until window size loads, return a blank screen (avoids SSR window errors)
  if (!viewport.width) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-200">
        <p>Loading...</p>
      </div>
    );
  }

  const leaves = Array.from({ length: 12 });
  const sparkles = Array.from({ length: 20 });
  const butterflies = Array.from({ length: 6 });
  const orbs = Array.from({ length: 10 });

  return (
    <div className="min-h-screen bg-linear-to-b from-green-200 via-green-400 to-green-600 relative overflow-hidden p-6 flex justify-center">
      {/* Sun rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-yellow-200 rounded-full opacity-30 blur-3xl pointer-events-none"></div>

      {/* Grass */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-green-800 via-green-700 to-transparent pointer-events-none"></div>

      {/* Mist */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl pointer-events-none"></div>

      {/* Falling Leaves */}
      {leaves.map((_, i) => (
        <motion.div
          key={`leaf-${i}`}
          className="absolute w-8 h-8 bg-green-600 rounded-full opacity-90 shadow-lg"
          initial={{
            x: Math.random() * viewport.width,
            y: -50,
            rotate: Math.random() * 360,
            scale: 0.8 + Math.random() * 0.6,
          }}
          animate={{
            y: viewport.height + 50,
            rotate: [0, 360],
            opacity: [0.9, 0.5, 0.9],
          }}
          transition={{
            duration: 10 + Math.random() * 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Floating sparkles */}
      {sparkles.map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute rounded-full bg-yellow-200 opacity-70"
          style={{
            width: `${4 + Math.random() * 4}px`,
            height: `${4 + Math.random() * 4}px`,
          }}
          initial={{
            x: Math.random() * viewport.width,
            y: Math.random() * viewport.height,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * viewport.width,
            y: Math.random() * viewport.height,
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Floating glowing orbs */}
      {orbs.map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-3 h-3 rounded-full bg-white/70 shadow-lg"
          initial={{
            x: Math.random() * viewport.width,
            y: Math.random() * viewport.height,
          }}
          animate={{
            x: [
              Math.random() * viewport.width,
              Math.random() * viewport.width,
            ],
            y: [
              Math.random() * viewport.height,
              Math.random() * viewport.height,
            ],
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Floating butterflies */}
      {butterflies.map((_, i) => (
        <motion.div
          key={`butterfly-${i}`}
          className="absolute w-6 h-6 bg-pink-400 rounded-full opacity-90"
          initial={{
            x: Math.random() * viewport.width,
            y: Math.random() * viewport.height,
            rotate: Math.random() * 360,
          }}
          animate={{
            x: [
              Math.random() * viewport.width,
              Math.random() * viewport.width,
              Math.random() * viewport.width,
            ],
            y: [
              Math.random() * viewport.height,
              Math.random() * viewport.height,
              Math.random() * viewport.height,
            ],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="w-full max-w-4xl space-y-8 relative z-10">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-green-900 mb-2 tracking-wide">
            🌿 Spiritual Community Hub
          </h1>
          <h2 className="text-lg text-green-800 font-medium">
            Learn, grow, and become your best self through spiritual teachings.
          </h2>
        </motion.div>

        {/* Posts */}
        {posts.length === 0 ? (
          <p className="text-center text-green-900 mt-8">Loading teachings...</p>
        ) : (
          posts.map((post) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-green-50/70 border-green-400 backdrop-blur-md shadow-xl hover:shadow-green-400/40 transition-shadow mb-6">
                <CardContent className="p-5 space-y-4 relative z-10">
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-14 h-14"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Avatar className="w-14 h-14 ring-2 ring-green-600">
                        {post.author?.avatar ? (
                          <AvatarImage src={urlFor(post.author.avatar).url()} />
                        ) : (
                          <AvatarFallback className="text-green-700 font-bold">
                            {post.author?.name?.charAt(0) || "A"}
                          </AvatarFallback>
                        )}
                      </Avatar>
                    </motion.div>
                    <div>
                      <p className="font-semibold text-green-900 text-lg">
                        {post.author?.name}
                      </p>
                      <p className="text-green-800 text-xs">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <h2 className="text-2xl font-bold text-green-900">{post.title}</h2>
                  <p className="text-green-800 text-sm leading-relaxed">
                    {post.caption}
                  </p>

                  {/* Steps */}
                  {post.steps && post.steps.length > 0 && (
                    <ol className="list-decimal list-inside text-green-700 text-sm space-y-1 border-l border-green-600 pl-4 pt-2">
                      {post.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  )}

                  {/* Media */}
                  {post.image && (
                    <img
                      src={urlFor(post.image).url()}
                      className="rounded-xl w-full border border-green-400 mt-3 shadow-md"
                    />
                  )}

                  {post.video && (
                    <video
                      className="rounded-xl w-full border border-green-400 mt-3 shadow-md"
                      controls
                      src={post.video}
                    />
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
