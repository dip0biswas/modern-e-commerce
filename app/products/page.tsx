'use client';

import { useState, useMemo } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { FilterSidebar } from '@/components/FilterSidebar';
import { ArrowUpDown } from 'lucide-react';

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    category: 'All',
    brand: 'All',
    priceRange: [0, 300000] as [number, number],
    rating: 0
  });
  const [sortBy, setSortBy] = useState('featured');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const categoryMatch = filters.category === 'All' || product.category === filters.category;
      const brandMatch = filters.brand === 'All' || product.brand === filters.brand;
      const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const ratingMatch = product.rating >= filters.rating;

      return categoryMatch && brandMatch && priceMatch && ratingMatch;
    });

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount':
        filtered.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      case 'popularity':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-glow">
            Our Products
          </h1>
          <p className="text-xl text-white/70">
            {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <FilterSidebar onFilterChange={setFilters} />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="mb-6 flex justify-end">
              <div className="backdrop-blur-xl bg-white/10 rounded-xl p-3 border border-white/20 flex items-center gap-3">
                <ArrowUpDown className="w-5 h-5 text-white/70" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="featured" className="bg-gray-900">Featured</option>
                  <option value="popularity" className="bg-gray-900">Popularity</option>
                  <option value="price-low" className="bg-gray-900">Price: Low to High</option>
                  <option value="price-high" className="bg-gray-900">Price: High to Low</option>
                  <option value="rating" className="bg-gray-900">Customer Rating</option>
                  <option value="discount" className="bg-gray-900">Discount</option>
                </select>
              </div>
            </div>

            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-white/70 text-xl">No products match your filters</p>
                <p className="text-white/50 mt-2">Try adjusting your filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
