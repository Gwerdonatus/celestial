"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "../../lib/sanity";
import { allProductsQuery, categoryQuery } from "../../lib/queries";

export default function StorePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await client.fetch(allProductsQuery);
        const categoryData = await client.fetch(categoryQuery);

        setProducts(productData || []);
        setCategories(["All", ...(categoryData?.map((c) => c.title) || [])]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filtered = products.filter((product) => {
    const productCategory = product.category || "";
    const productTitle = product.title || "";

    const matchCategory =
      selectedCategory === "All" || productCategory === selectedCategory;

    const matchSearch = productTitle
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className="bg-gray-50 min-h-screen px-4 md:px-12 py-12 text-gray-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Shop Spiritual Items</h1>
        <p className="text-gray-600 text-md md:text-lg">
          Authentic crystals, herbs, candles, oils, incense & more
        </p>
      </div>

      {/* Search + Categories */}
      <div className="max-w-7xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        {/* Horizontal Category Scroll */}
        <div className="flex gap-3 overflow-x-auto mt-4 pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium border transition
                ${
                  selectedCategory === cat
                    ? "bg-yellow-500 text-white border-yellow-500"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <Link
              href={`/store/${p.slug}`}
              key={p.slug || p._id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative w-full h-64">
                {p.image ? (
                  <Image
                    src={urlFor(p.image).url()}
                    alt={p.title || "Product"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{p.title || "No Title"}</h3>
                <p className="text-yellow-500 font-medium">
                  ${p.price ?? "N/A"}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-gray-500 text-center">
            No items found.
          </p>
        )}
      </div>
    </section>
  );
}
