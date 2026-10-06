'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { products } from '@/data/products';
import { Product } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

interface SearchBarProps {
  onClose?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim().length > 0) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for products, brands, categories..."
          className="w-full pl-12 pr-12 py-3.5 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-neon-cyan focus:bg-white/15 transition-all"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {showResults && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full backdrop-blur-2xl bg-black/80 border border-white/20 rounded-2xl shadow-2xl shadow-purple-500/20 max-h-[600px] overflow-y-auto z-50">
          <div className="p-3">
            <div className="text-white/50 text-sm mb-3 px-2">
              {results.length} {results.length === 1 ? 'result' : 'results'} found
            </div>
            <div className="space-y-2">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  onClick={() => {
                    clearSearch();
                    onClose?.();
                  }}
                  className="flex gap-4 p-3 rounded-xl hover:bg-white/10 transition-all group"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ring-2 ring-white/10 group-hover:ring-neon-cyan/50 transition-all">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm group-hover:text-neon-cyan transition-colors truncate">
                      {product.name}
                    </h3>
                    <p className="text-white/50 text-xs mt-0.5">{product.brand}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-neon-pink font-bold">₹{product.price.toLocaleString('en-IN')}</span>
                      {product.originalPrice && (
                        <>
                          <span className="text-white/40 text-sm line-through">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                          <span className="text-green-400 text-xs font-semibold">
                            {product.discount}% OFF
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center">
                        <span className="text-yellow-400 text-xs">★</span>
                        <span className="text-white/70 text-xs ml-1">{product.rating}</span>
                      </div>
                      <span className="text-white/40 text-xs">({product.reviews.toLocaleString('en-IN')} reviews)</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {showResults && results.length === 0 && query.trim() && (
        <div className="absolute top-full mt-2 w-full backdrop-blur-2xl bg-black/80 border border-white/20 rounded-2xl shadow-2xl p-8 text-center">
          <p className="text-white/70">No products found for "{query}"</p>
          <p className="text-white/50 text-sm mt-2">Try different keywords</p>
        </div>
      )}
    </div>
  );
};
