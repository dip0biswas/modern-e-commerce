'use client';

import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <Link href="/products" className="text-neon-cyan hover:underline">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-white hover:text-neon-cyan transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20">
            <div className="relative w-full h-96 lg:h-[600px] rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 space-y-6">
              <div>
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-neon-pink to-neon-purple text-white text-sm font-semibold rounded-full mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {product.name}
                </h1>
                <p className="text-3xl font-bold text-neon-pink">
                  ${product.price}
                </p>
              </div>

              <div className="border-t border-white/20 pt-6">
                <h2 className="text-xl font-semibold text-white mb-3">Description</h2>
                <p className="text-white/70 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full py-4 px-8 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-neon-pink/50 transition-all duration-300 hover:scale-105 btn-glow flex items-center justify-center gap-2"
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </>
                )}
              </button>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                <div className="backdrop-blur-md bg-white/5 rounded-lg p-4">
                  <h3 className="text-white/70 text-sm mb-1">Free Shipping</h3>
                  <p className="text-white font-semibold">On orders over $50</p>
                </div>
                <div className="backdrop-blur-md bg-white/5 rounded-lg p-4">
                  <h3 className="text-white/70 text-sm mb-1">Warranty</h3>
                  <p className="text-white font-semibold">1 Year Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
