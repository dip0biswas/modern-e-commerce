'use client';

import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { useToast } from './Toast';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    showToast(`${product.name} added to cart!`);
  };

  return (
    <div className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-6 border border-white/20 hover:border-neon-pink/50 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-pink/30 hover:-translate-y-3 overflow-hidden">
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" />
      
      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          {product.discount}% OFF
        </div>
      )}

      <Link href={`/products/${product.id}`}>
        <div className="relative w-full h-64 mb-4 rounded-2xl overflow-hidden ring-2 ring-white/10 group-hover:ring-neon-cyan/50 transition-all duration-300">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 right-3 bg-gradient-to-r from-neon-pink to-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Details
          </div>
        </div>
      </Link>
      
      <div className="space-y-3 relative z-10">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-white/50 text-sm">{product.brand}</span>
        </div>

        <div className="flex justify-between items-start">
          <h3 className="text-white font-bold text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-neon-cyan group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
            <span>{product.rating}</span>
            <Star className="w-3 h-3 fill-current" />
          </div>
          <span className="text-white/50 text-xs">({product.reviews.toLocaleString('en-IN')})</span>
        </div>
        
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-neon-pink font-black text-2xl">₹{product.price.toLocaleString('en-IN')}</span>
          </div>
          {product.originalPrice && (
            <div className="flex items-center gap-2">
              <span className="text-white/40 text-sm line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-green-400 text-sm font-semibold">
                Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
              </span>
            </div>
          )}
        </div>
        
        <button
          onClick={handleAddToCart}
          className="w-full mt-4 py-3.5 px-6 bg-gradient-to-r from-neon-pink via-purple-500 to-neon-purple text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-neon-pink/60 transition-all duration-300 hover:scale-105 relative overflow-hidden group/btn"
        >
          <span className="relative z-10">Add to Cart</span>
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
