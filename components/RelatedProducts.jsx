"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "../lib/sanity";

export default function RelatedProducts({ currentSlug }) {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const q = `*[_type == "product" && slug.current != $slug] | order(_createdAt desc)[0...4]`;
    client.fetch(q, { slug: currentSlug }).then(setRelated).catch(console.error);
  }, [currentSlug]);

  if (!related || related.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map((p) => (
          <Link href={`/store/${p.slug.current}`} key={p._id} className="bg-white p-3 rounded shadow hover:shadow-md">
            <div className="w-full h-40 relative mb-2">
              {p.image ? (
                <Image src={urlFor(p.image).width(400).height(400).url()} alt={p.title} fill className="object-cover rounded" />
              ) : (
                <div className="bg-gray-100 w-full h-full rounded" />
              )}
            </div>
            <p className="text-sm font-medium">{p.title}</p>
            <p className="text-yellow-500 font-semibold">${p.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
