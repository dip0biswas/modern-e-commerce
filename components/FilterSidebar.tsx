'use client';

import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { products } from '@/data/products';

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }) => {
  const [showMobile, setShowMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000]);
  const [minRating, setMinRating] = useState<number>(0);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  const brands = ['All', ...Array.from(new Set(products.map(p => p.brand)))];

  const applyFilters = () => {
    onFilterChange({
      category: selectedCategory,
      brand: selectedBrand,
      priceRange,
      rating: minRating
    });
    setShowMobile(false);
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedBrand('All');
    setPriceRange([0, 300000]);
    setMinRating(0);
    onFilterChange({
      category: 'All',
      brand: 'All',
      priceRange: [0, 300000],
      rating: 0
    });
  };

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-white font-bold mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-neon-pink to-purple-500 text-white'
                  : 'text-white/70 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-white font-bold mb-3">Brand</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                selectedBrand === brand
                  ? 'bg-gradient-to-r from-neon-pink to-purple-500 text-white'
                  : 'text-white/70 hover:bg-white/10'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-white font-bold mb-3">Price Range</h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="300000"
            step="5000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full accent-neon-pink"
          />
          <div className="text-white/70 text-sm">
            ₹0 - ₹{priceRange[1].toLocaleString('en-IN')}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-white font-bold mb-3">Minimum Rating</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1, 0].map((rating) => (
            <button
              key={rating}
              onClick={() => setMinRating(rating)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                minRating === rating
                  ? 'bg-gradient-to-r from-neon-pink to-purple-500 text-white'
                  : 'text-white/70 hover:bg-white/10'
              }`}
            >
              {rating === 0 ? 'All Ratings' : `${rating}★ & above`}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={applyFilters}
          className="flex-1 py-3 px-4 bg-gradient-to-r from-neon-pink to-purple-500 text-white font-bold rounded-lg hover:shadow-xl transition-all"
        >
          Apply
        </button>
        <button
          onClick={clearFilters}
          className="px-4 py-3 backdrop-blur-xl bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all"
        >
          Clear
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setShowMobile(true)}
        className="md:hidden fixed bottom-4 right-4 z-40 p-4 bg-gradient-to-r from-neon-pink to-purple-500 text-white rounded-full shadow-2xl shadow-neon-pink/50"
      >
        <Filter className="w-6 h-6" />
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden md:block backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Filters</h2>
        </div>
        <FilterContent />
      </div>

      {/* Mobile Overlay */}
      {showMobile && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/90 backdrop-blur-xl overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Filters</h2>
              <button
                onClick={() => setShowMobile(false)}
                className="p-2 text-white/70 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </>
  );
};
