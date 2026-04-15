'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';

export default function CartPage() {
  const { cart, isLoading, itemCount, updateQuantity, removeFromCart, savedItems, saveForLater, moveToCart, removeSavedItem } = useCart();
  const [localLoading, setLocalLoading] = useState<string | null>(null);

  const subtotal = cart?.lines.nodes.reduce((total, item) => {
    return total + (parseFloat(item.merchandise.price.amount) * item.quantity);
  }, 0) || 0;

  const formatPrice = (amount: string) => {
    return `₹${parseFloat(amount).toLocaleString('en-IN')}`;
  };

  const handleUpdate = async (lineId: string, quantity: number) => {
    setLocalLoading(lineId);
    try {
      await updateQuantity(lineId, quantity);
    } finally {
      setLocalLoading(null);
    }
  };

  const handleRemove = async (lineId: string) => {
    setLocalLoading(lineId);
    try {
      await removeFromCart(lineId);
    } finally {
      setLocalLoading(null);
    }
  };

  const handleSave = async (lineId: string) => {
    setLocalLoading(lineId);
    try {
      await saveForLater(lineId);
    } finally {
      setLocalLoading(null);
    }
  };

  if (isLoading && !cart) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-40 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm font-black uppercase tracking-widest text-outline">Loading your curation...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-40 pb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <header className="mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary mb-4">
              Shopping Cart
            </h1>
            <p className="text-on-surface-variant font-medium text-lg">
              {itemCount} {itemCount === 1 ? 'item' : 'items'} in your clinical selection.
            </p>
          </header>

          {itemCount > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Cart Items */}
              <div className="lg:col-span-8 space-y-8">
                {cart?.lines.nodes.map((item) => (
                  <div key={item.id} className={`flex flex-col sm:flex-row gap-8 pb-8 border-b border-outline-variant/20 transition-opacity ${localLoading === item.id ? 'opacity-50 pointer-events-none' : ''}`}>
                    <div className="w-full sm:w-48 aspect-square relative bg-surface-container-low rounded-[2rem] overflow-hidden flex-shrink-0">
                      <Image
                        src={item.merchandise.image.url}
                        alt={item.merchandise.product.title}
                        fill
                        className="object-contain p-6"
                      />
                    </div>
                    
                    <div className="flex-grow flex flex-col justify-between py-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <Link href={`/product/${item.merchandise.product.handle}`} className="group">
                            <h3 className="text-2xl font-bold text-primary group-hover:text-teal-600 transition-colors">
                              {item.merchandise.product.title}
                            </h3>
                          </Link>
                          <p className="text-sm font-bold text-outline uppercase tracking-widest mt-1">
                            {item.merchandise.title !== 'Default Title' ? item.merchandise.title : 'Standard Edition'}
                          </p>
                        </div>
                        <p className="text-xl font-black text-primary">
                          {formatPrice(item.merchandise.price.amount)}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-6 mt-8">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center bg-surface-container-low rounded-xl border border-outline-variant/10 p-1">
                            <button 
                              onClick={() => handleUpdate(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center text-primary hover:bg-white rounded-lg transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm">remove</span>
                            </button>
                            <span className="w-10 text-center text-sm font-black text-primary">{item.quantity}</span>
                            <button 
                              onClick={() => handleUpdate(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-primary hover:bg-white rounded-lg transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm">add</span>
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <button 
                            onClick={() => handleSave(item.id)}
                            className="text-[10px] font-black uppercase tracking-widest text-teal-600 hover:text-primary transition-colors flex items-center gap-1.5"
                          >
                            <span className="material-symbols-outlined text-[14px]">bookmark</span>
                            Save for Later
                          </button>
                          <button 
                            onClick={() => handleRemove(item.id)}
                            className="text-[10px] font-black uppercase tracking-widest text-red-400 hover:text-red-600 transition-colors flex items-center gap-1.5"
                          >
                            <span className="material-symbols-outlined text-[14px]">delete</span>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-4">
                <div className="sticky top-32 bg-white rounded-[3rem] p-10 border border-outline-variant/20 shadow-xl shadow-primary/5 space-y-8">
                  <h2 className="text-2xl font-bold text-primary tracking-tight">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span className="font-medium">Subtotal</span>
                      <span className="font-bold">{formatPrice(subtotal.toString())}</span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span className="font-medium">Shipping</span>
                      <span className="text-teal-600 font-bold uppercase text-xs tracking-widest">Calculated at checkout</span>
                    </div>
                    <div className="h-px bg-outline-variant/20 my-6" />
                    <div className="flex justify-between items-end">
                      <span className="font-bold text-primary">Total</span>
                      <div className="text-right">
                        <p className="text-3xl font-black text-primary tracking-tighter line-clamp-1">
                          {formatPrice(subtotal.toString())}
                        </p>
                        <p className="text-[10px] font-bold text-outline uppercase tracking-tight">Inc. all taxes</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <Link href={cart?.checkoutUrl || '#'}>
                      <Button size="lg" className="w-full rounded-2xl py-6 flex items-center justify-center gap-3 shadow-xl shadow-primary/20 bg-primary text-on-primary">
                        <span className="material-symbols-outlined text-lg">lock</span>
                        Proceed to Checkout
                      </Button>
                    </Link>
                    <Link href="/category/eyeglasses">
                      <Button variant="outline" className="w-full rounded-2xl py-5 flex items-center justify-center gap-2 border-2">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>

                  <div className="flex items-center gap-3 justify-center pt-4 opacity-40 grayscale">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Secure Shopify Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-32 text-center bg-surface-container-low rounded-[4rem] border-2 border-dashed border-outline-variant/30">
              <span className="material-symbols-outlined text-7xl text-outline-variant mb-6">shopping_basket</span>
              <h2 className="text-3xl font-bold text-primary mb-4">Your selection is empty.</h2>
              <p className="text-on-surface-variant max-w-sm mx-auto mb-10 text-lg leading-relaxed">
                Discover Ranchi's most exclusive collection of clinical frames and sunglasses.
              </p>
              <Link href="/category/eyeglasses">
                <Button size="lg" className="rounded-full shadow-2xl">Start Exploring</Button>
              </Link>
            </div>
          )}

          {/* Saved for Later Section */}
          {savedItems.length > 0 && (
            <section className="mt-32">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-4xl font-bold text-primary tracking-tight">Saved for Later</h2>
                  <p className="text-on-surface-variant mt-2 font-medium">Items you've bookmarked for your next visit.</p>
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-outline">{savedItems.length} items</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {savedItems.map((item) => (
                  <div key={item.id} className="group bg-surface-container-lowest border border-outline-variant/10 rounded-[2.5rem] p-6 transition-all hover:shadow-2xl hover:shadow-primary/5">
                    <div className="flex gap-6">
                      <div className="w-24 h-24 relative bg-surface-container-low rounded-2xl overflow-hidden flex-shrink-0">
                        <Image
                          src={item.merchandise.image.url}
                          alt={item.merchandise.product.title}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-primary line-clamp-1">{item.merchandise.product.title}</h4>
                        <p className="text-[10px] font-black text-outline uppercase tracking-widest mt-1">
                          {formatPrice(item.merchandise.price.amount)}
                        </p>
                        
                        <div className="flex items-center gap-4 mt-4">
                          <button 
                            onClick={() => moveToCart(item)}
                            className="text-[10px] font-black uppercase tracking-widest text-teal-600 hover:text-primary transition-colors"
                          >
                            Move to Cart
                          </button>
                          <button 
                            onClick={() => removeSavedItem(item.id)}
                            className="text-[10px] font-black uppercase tracking-widest text-outline hover:text-red-400 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
