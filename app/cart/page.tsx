'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center">
            <ShoppingBag className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Your Cart is Empty</h1>
          <p className="text-white/70 text-lg">
            Start shopping to add items to your cart
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-neon-pink/50 transition-all duration-300 hover:scale-105"
          >
            Browse Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-12 text-glow">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-neon-pink/50 transition-all"
              >
                <div className="flex gap-6">
                  <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-grow space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {item.name}
                        </h3>
                        <p className="text-white/70 text-sm">{item.category}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3 backdrop-blur-md bg-white/10 rounded-lg px-4 py-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-white hover:text-neon-cyan transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-semibold min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-white hover:text-neon-cyan transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-2xl font-bold text-neon-pink">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-white/50 text-sm">
                          ${item.price} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 sticky top-24 space-y-6">
              <h2 className="text-2xl font-bold text-white">Order Summary</h2>

              <div className="space-y-3 border-b border-white/20 pb-6">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Shipping</span>
                  <span className="text-neon-cyan">Free</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Tax</span>
                  <span>${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-2xl font-bold text-white">
                <span>Total</span>
                <span className="text-neon-pink">${(totalPrice * 1.1).toFixed(2)}</span>
              </div>

              <Link
                href="/checkout"
                className="w-full block text-center py-4 px-8 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-neon-pink/50 transition-all duration-300 hover:scale-105 btn-glow"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/products"
                className="w-full block text-center py-3 text-white hover:text-neon-cyan transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
