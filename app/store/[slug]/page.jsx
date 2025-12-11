"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useCart } from "../../../context/CartContext";
import { client, urlFor } from "../../../lib/sanity";
import { singleProductQuery } from "../../../lib/queries";
import Image from "next/image";
import Link from "next/link";

import RelatedProducts from "../../../components/RelatedProducts";
import WhatsAppFloating from "../../../components/WhatsAppFloating";

export default function StoreDetailPage() {
  const params = useParams();
  const slug = params?.slug;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const { addToCart } = useCart();

  const sellerWhatsApp = "+447451295547";
  const sellerEmail = "queenayahe@outlook.com";

  useEffect(() => {
    if (!slug) return;
    const fetchProduct = async () => {
      try {
        const res = await client.fetch(singleProductQuery, { slug });
        setProduct(res);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, 1);
    setShowCartPopup(true);
  };

  const handleBuyNow = () => {
    setShowBuyModal(true);
  };

  const handleShare = () => {
    const productUrl = window.location.href;
    navigator.clipboard.writeText(productUrl);
    alert("Product link copied! Share it anywhere.");
  };

  if (loading) return <p className="text-center py-40 text-gray-500">Loading product...</p>;
  if (!product) return <p className="text-center py-40 text-gray-500">Product not found.</p>;

  return (
    <section className="bg-gray-50 min-h-screen px-4 md:px-12 py-16 relative">
      <div className="max-w-7xl mx-auto mb-6 flex items-center justify-between">
        <Link href="/store" className="text-yellow-500 font-medium hover:underline">
          ← Back to Store
        </Link>
        <Link href="/store/cart" className="text-sm text-gray-600 hidden md:inline">
          View Cart
        </Link>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row gap-6 p-4">
        <div className="relative w-full md:w-1/2 h-96">
          {product.image ? (
            <Image
              src={urlFor(product.image).width(1000).height(1000).url()}
              fill
              alt={product.title}
              className="object-cover rounded"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-yellow-500 text-2xl font-semibold mt-2">${product.price}</p>
            <p className="text-gray-600 mt-4">{product.description}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition w-full sm:w-auto"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-400 transition w-full sm:w-auto"
            >
              Buy Now
            </button>

            <button
              onClick={handleShare}
              className="px-6 py-3 border rounded-lg text-gray-700 hover:bg-gray-100 transition w-full sm:w-auto"
            >
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Buy Now Modal */}
      {showBuyModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full relative shadow-2xl pointer-events-auto">
            <button
              onClick={() => setShowBuyModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold"
            >
              ✕
            </button>

            <h2 className="text-gray-800 text-xl font-semibold mb-3">Contact Seller</h2>
            <p className="text-gray-700 mb-4">
              Complete your purchase via WhatsApp or Email
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${sellerWhatsApp.replace(/\D/g, '')}?text=Hello, I want to buy ${product.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-green-500 text-white font-semibold rounded-lg text-center hover:bg-green-600 transition"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${sellerEmail}?subject=Purchase Request for ${product.title}`}
                className="flex-1 px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg text-center hover:bg-blue-600 transition"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Add-to-cart popup */}
      {showCartPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-black opacity-20 pointer-events-auto" onClick={() => setShowCartPopup(false)} />
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative transform transition-all ease-out duration-300 scale-100 shadow-2xl pointer-events-auto">
            <button
              onClick={() => setShowCartPopup(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>
            <h3 className="text-lg font-semibold mb-2 text-black">{product.title} added to Cart</h3>
            <div className="flex gap-3">
              <Link href="/store/cart" className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-lg text-center">
                View Cart
              </Link>
              <button
                onClick={() => setShowCartPopup(false)}
                className="flex-1 px-4 py-2 border rounded-lg text-center bg-gray-300 text-black hover:bg-gray-400"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}

      <RelatedProducts currentSlug={slug} />
      <WhatsAppFloating number={sellerWhatsApp} />
    </section>
  );
}
