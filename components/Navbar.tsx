'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Sparkles, Search } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { SearchBar } from './SearchBar';
import { useState } from 'react';

const Navbar = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gradient-to-r from-black/40 via-purple-900/20 to-black/40 border-b border-white/10 shadow-2xl shadow-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-neon-pink animate-pulse" />
                <div className="absolute inset-0 blur-xl bg-neon-pink/50 group-hover:bg-neon-pink/80 transition-all" />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-neon-pink via-purple-400 to-neon-cyan bg-clip-text text-transparent hover:scale-105 transition-transform">
                NeonShop
              </span>
            </Link>
            
            {/* Desktop Search */}
            <div className="hidden md:block flex-1 max-w-xl mx-8">
              <SearchBar />
            </div>
            
            <div className="flex items-center space-x-1">
              {/* Mobile Search Button */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="md:hidden px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link 
                href="/" 
                className={`hidden md:block relative px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  isActive('/') 
                    ? 'text-white bg-white/10 shadow-lg shadow-neon-cyan/30' 
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
                {isActive('/') && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />}
              </Link>
              <Link 
                href="/products" 
                className={`hidden md:block relative px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  isActive('/products') 
                    ? 'text-white bg-white/10 shadow-lg shadow-neon-cyan/30' 
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Products
                {isActive('/products') && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />}
              </Link>
              <Link 
                href="/cart" 
                className={`relative px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-300 group ${
                  isActive('/cart') 
                    ? 'text-white bg-white/10 shadow-lg shadow-neon-pink/30' 
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  {totalItems > 0 && (
                    <span className="bg-gradient-to-r from-neon-pink to-purple-500 text-white text-xs font-bold rounded-full h-5 min-w-[20px] px-1.5 flex items-center justify-center shadow-lg shadow-neon-pink/50 animate-pulse">
                      {totalItems}
                    </span>
                  )}
                </div>
                {isActive('/cart') && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-neon-pink to-transparent" />}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search Overlay */}
      {showSearch && (
        <div className="md:hidden fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl">
          <div className="p-4 pt-24">
            <SearchBar onClose={() => setShowSearch(false)} />
          </div>
          <button
            onClick={() => setShowSearch(false)}
            className="absolute top-24 right-4 text-white/70 hover:text-white"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
