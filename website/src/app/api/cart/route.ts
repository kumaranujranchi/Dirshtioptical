import { NextRequest, NextResponse } from 'next/server';
import { createCart, addToCart, getCart, updateCartLines, removeCartLines } from '@/lib/shopify';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const cartId = searchParams.get('cartId');

  if (!cartId) {
    return NextResponse.json({ error: 'Cart ID is required' }, { status: 400 });
  }

  try {
    const cart = await getCart(cartId);
    return NextResponse.json(cart);
  } catch (error) {
    console.error('API Error (GET /api/cart):', error);
    return NextResponse.json({ error: 'Failed to fetch cart' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, cartId, variantId, lineId, quantity, lineIds } = body;

    if (action === 'create') {
      const cart = await createCart();
      return NextResponse.json(cart);
    }

    if (action === 'add') {
      if (!cartId || !variantId) {
        return NextResponse.json({ error: 'Cart ID and Variant ID are required' }, { status: 400 });
      }
      const cart = await addToCart(cartId, variantId);
      return NextResponse.json(cart);
    }

    if (action === 'update') {
      if (!cartId || !lineId || quantity === undefined) {
        return NextResponse.json({ error: 'Cart ID, Line ID and Quantity are required' }, { status: 400 });
      }
      const cart = await updateCartLines(cartId, [{ id: lineId, quantity: Number(quantity) }]);
      return NextResponse.json(cart);
    }

    if (action === 'remove') {
      if (!cartId || !lineIds) {
        return NextResponse.json({ error: 'Cart ID and Line IDs are required' }, { status: 400 });
      }
      const cart = await removeCartLines(cartId, lineIds);
      return NextResponse.json(cart);
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('API Error (POST /api/cart):', error);
    return NextResponse.json({ error: 'Operation failed' }, { status: 500 });
  }
}
