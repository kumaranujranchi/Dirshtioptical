'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ShopifyCart } from '@/types/shopify';

interface CartContextType {
  cart: ShopifyCart | null;
  isLoading: boolean;
  addToCart: (variantId: string) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  removeFromCart: (lineId: string) => Promise<void>;
  itemCount: number;
  savedItems: any[];
  saveForLater: (lineId: string) => Promise<void>;
  moveToCart: (item: any) => Promise<void>;
  removeSavedItem: (itemId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [savedItems, setSavedItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize cart and saved items from localStorage or API
  useEffect(() => {
    async function initCart() {
      const savedCartId = localStorage.getItem('shopify_cart_id');
      const savedForLater = localStorage.getItem('shopify_saved_items');
      
      if (savedForLater) {
        try {
          setSavedItems(JSON.parse(savedForLater));
        } catch (e) {
          console.error('Failed to parse saved items');
        }
      }
      
      try {
        if (savedCartId) {
          const res = await fetch(`/api/cart?cartId=${savedCartId}`);
          if (res.ok) {
            const fetchedCart = await res.json();
            if (fetchedCart) {
              setCart(fetchedCart);
              setIsLoading(false);
              return;
            }
          }
        }
        
        // If no cart or invalid cart, create a new one
        const res = await fetch('/api/cart', {
          method: 'POST',
          body: JSON.stringify({ action: 'create' }),
          headers: { 'Content-Type': 'application/json' },
        });
        
        if (res.ok) {
          const newCart = await res.json();
          localStorage.setItem('shopify_cart_id', newCart.id);
          setCart(newCart);
        }
      } catch (error) {
        console.error('Failed to initialize cart:', error);
      } finally {
        setIsLoading(false);
      }
    }

    initCart();
  }, []);

  // Persist saved items
  useEffect(() => {
    localStorage.setItem('shopify_saved_items', JSON.stringify(savedItems));
  }, [savedItems]);

  const handleAddToCart = async (variantId: string) => {
    if (!cart?.id) return;
    
    setIsLoading(true);
    try {
      const res = await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({ action: 'add', cartId: cart.id, variantId }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (res.ok) {
        const updatedCart = await res.json();
        setCart(updatedCart);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateQuantity = async (lineId: string, quantity: number) => {
    if (!cart?.id) return;
    
    if (quantity <= 0) {
      return handleRemoveFromCart(lineId);
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({ action: 'update', cartId: cart.id, lineId, quantity }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (res.ok) {
        const updatedCart = await res.json();
        setCart(updatedCart);
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveFromCart = async (lineId: string) => {
    if (!cart?.id) return;

    setIsLoading(true);
    try {
      const res = await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({ action: 'remove', cartId: cart.id, lineIds: [lineId] }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (res.ok) {
        const updatedCart = await res.json();
        setCart(updatedCart);
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveForLater = async (lineId: string) => {
    const itemToSave = cart?.lines.nodes.find(node => node.id === lineId);
    if (!itemToSave) return;

    // Add to saved items
    setSavedItems(prev => {
      const exists = prev.find(item => item.merchandise.id === itemToSave.merchandise.id);
      if (exists) return prev;
      return [...prev, itemToSave];
    });

    // Remove from cart
    await handleRemoveFromCart(lineId);
  };

  const handleMoveToCart = async (savedItem: any) => {
    await handleAddToCart(savedItem.merchandise.id);
    setSavedItems(prev => prev.filter(item => item.merchandise.id !== savedItem.merchandise.id));
  };

  const handleRemoveSavedItem = (itemId: string) => {
    setSavedItems(prev => prev.filter(item => item.id !== itemId));
  };

  const itemCount = cart?.lines.nodes.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <CartContext.Provider value={{ 
      cart, 
      isLoading, 
      addToCart: handleAddToCart, 
      updateQuantity: handleUpdateQuantity,
      removeFromCart: handleRemoveFromCart,
      itemCount,
      savedItems,
      saveForLater: handleSaveForLater,
      moveToCart: handleMoveToCart,
      removeSavedItem: handleRemoveSavedItem
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
