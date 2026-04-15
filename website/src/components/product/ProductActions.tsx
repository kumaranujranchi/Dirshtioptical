'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import { useRouter } from 'next/navigation';

interface ProductActionsProps {
  productTitle: string;
  variantId: string;
}

const ProductActions = ({ productTitle, variantId }: ProductActionsProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    if (isAdding) return;
    setIsAdding(true);
    try {
      await addToCart(variantId);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    } catch (error) {
      console.error('Failed to add to cart:', error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-4">
      <Button 
        size="lg" 
        className={`w-full rounded-2xl py-6 flex items-center justify-center gap-3 shadow-xl transition-all duration-300 ${
          isAdded ? 'bg-teal-600 text-white shadow-teal-100' : 'shadow-primary/20'
        }`}
        onClick={handleAddToCart}
        disabled={isAdding}
      >
        <span className={`material-symbols-outlined ${isAdding ? 'animate-spin' : ''}`}>
          {isAdding ? 'sync' : (isAdded ? 'check_circle' : 'shopping_cart')}
        </span>
        {isAdding ? 'Adding...' : (isAdded ? 'Added to Cart!' : 'Add to Cart')}
      </Button>
      
      <div className="flex gap-4">
        <Button variant="outline" className="flex-1 rounded-2xl py-5 border-2 hover:bg-surface-container">
          Compare
        </Button>
        <Link href={`https://wa.me/919334412345?text=Hi, I am interested in ${productTitle}`} className="flex-1">
          <Button variant="secondary" className="w-full rounded-2xl py-5 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-100 border-none">
            <span className="material-symbols-outlined">chat</span>
            WhatsApp Inquiry
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductActions;
