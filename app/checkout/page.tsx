'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, CreditCard, Package, Truck } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const totalPrice = getTotalPrice();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <Package className="w-24 h-24 mx-auto text-neon-pink" />
          <h1 className="text-4xl font-bold text-white">No Items to Checkout</h1>
          <Link
            href="/products"
            className="inline-block px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-neon-pink/50 transition-all duration-300"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full backdrop-blur-lg bg-white/10 rounded-2xl p-12 border border-white/20 text-center space-y-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Order Placed Successfully!</h1>
          <p className="text-white/70 text-lg">
            Thank you for your purchase. Your order has been confirmed and will be shipped soon.
          </p>
          <div className="space-y-4 pt-6">
            <div className="backdrop-blur-md bg-white/5 rounded-lg p-4">
              <p className="text-white/70 text-sm">Order Total</p>
              <p className="text-3xl font-bold text-neon-pink">${(totalPrice * 1.1).toFixed(2)}</p>
            </div>
            <Link
              href="/products"
              className="inline-block w-full py-4 px-8 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-neon-pink/50 transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-12 text-glow">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Shipping Information */}
              <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-6 h-6 text-neon-cyan" />
                  <h2 className="text-2xl font-bold text-white">Shipping Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-neon-cyan transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-neon-cyan transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-neon-cyan transition-colors"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-neon-cyan transition-colors"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-neon-cyan transition-colors"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-neon-cyan transition-colors"
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6 text-neon-cyan" />
                  <h2 className="text-2xl font-bold text-white">Payment Information</h2>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-neon-cyan transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-neon-cyan transition-colors"
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-neon-cyan transition-colors"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-8 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-neon-pink/50 transition-all duration-300 hover:scale-105 btn-glow"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 sticky top-24 space-y-6">
              <h2 className="text-2xl font-bold text-white">Order Summary</h2>

              <div className="space-y-4 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-white/70">
                    <span className="flex-1 truncate">{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-white/20 pt-6">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Shipping</span>
                  <span className="text-neon-cyan">Free</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Tax (10%)</span>
                  <span>${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-2xl font-bold text-white border-t border-white/20 pt-6">
                <span>Total</span>
                <span className="text-neon-pink">${(totalPrice * 1.1).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
