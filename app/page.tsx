import Link from 'next/link';
import { ArrowRight, Sparkles, ShoppingBag } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 px-6 py-3 rounded-full border border-white/20">
            <Sparkles className="w-5 h-5 text-neon-cyan" />
            <span className="text-white/90">Welcome to the Future of Shopping</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white text-glow animate-float">
            NeonShop
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Experience premium tech and accessories with stunning visual effects. 
            Where innovation meets design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products"
              className="group relative flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-neon-pink via-purple-500 to-neon-purple text-white font-bold rounded-full hover:shadow-2xl hover:shadow-neon-pink/70 transition-all duration-300 hover:scale-110 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <ShoppingBag className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Shop Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
              <div className="absolute inset-0 -z-0 blur-2xl bg-neon-pink/50 group-hover:bg-neon-pink/80 transition-all" />
            </Link>
            
            <Link
              href="/products"
              className="group px-10 py-5 backdrop-blur-xl bg-white/10 text-white font-bold rounded-full border-2 border-white/30 hover:border-neon-cyan hover:bg-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-neon-cyan/40 hover:scale-105"
            >
              <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-neon-cyan group-hover:to-purple-400 group-hover:bg-clip-text transition-all">Explore Collection</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Why Choose NeonShop?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 hover:border-neon-cyan/50 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-cyan/30 hover:-translate-y-3 group"
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-neon-pink via-purple-500 to-neon-purple flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:shadow-neon-pink/70 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-neon-cyan group-hover:to-purple-400 group-hover:bg-clip-text transition-all">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'Hand-picked products with exceptional quality and performance standards.',
  },
  {
    icon: ShoppingBag,
    title: 'Fast Delivery',
    description: 'Quick and secure shipping to your doorstep with real-time tracking.',
  },
  {
    icon: ArrowRight,
    title: 'Easy Returns',
    description: '30-day hassle-free returns and exchanges on all products.',
  },
];
