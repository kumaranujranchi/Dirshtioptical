'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/CartContext';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  discountPrice?: string;
  image: string;
  sku: string;
  tag?: string;
  variantId?: string;
}

const ProductCard = ({ id, name, price, discountPrice, image, sku, tag, variantId }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!variantId || isAdding) return;
    
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
    <div className="group relative flex flex-col bg-surface-container-lowest border border-outline-variant/10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
      {/* Image Container */}
      <Link href={`/product/${id}`} className="relative aspect-[4/5] block overflow-hidden bg-white m-2 rounded-[1.6rem]">
        {tag && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-primary text-on-primary px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
              {tag}
            </span>
          </div>
        )}
        
        <button 
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass-nav flex items-center justify-center text-primary transition-all active:scale-90 hover:bg-primary hover:text-white"
        >
          <span className={`material-symbols-outlined text-[20px] ${isFavorite ? 'fill-1' : ''}`} style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }}>
            favorite
          </span>
        </button>

        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <Link href={`/product/${id}`}>
            <h4 className="font-bold text-lg text-primary mb-1 group-hover:text-teal-600 transition-colors line-clamp-1">{name}</h4>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-outline uppercase tracking-tighter">{sku}</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant" />
            <span className="text-[10px] font-bold text-secondary uppercase">Available</span>
          </div>
        </div>
        
        <div className="mt-auto flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xl font-black text-primary tracking-tighter">{price}</span>
            {discountPrice && (
              <span className="text-xs text-outline line-through">{discountPrice}</span>
            )}
          </div>
          
          <button 
            onClick={handleAddToCart}
            disabled={isAdding || !variantId}
            className={`flex items-center justify-center w-12 h-12 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50 disabled:pointer-events-none ${
              isAdded ? 'bg-teal-600 text-white shadow-teal-200' : 'bg-primary text-on-primary shadow-primary/10 hover:bg-teal-600'
            }`}
          >
            <span className={`material-symbols-outlined text-[22px] ${isAdding ? 'animate-spin' : ''}`}>
              {isAdding ? 'sync' : (isAdded ? 'check_circle' : 'shopping_bag')}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
