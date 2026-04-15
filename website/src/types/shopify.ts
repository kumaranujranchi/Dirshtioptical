export interface ShopifyImage {
  url: string;
  altText?: string;
  width?: number;
  height?: number;
}

export interface ShopifyPrice {
  amount: string;
  currencyCode: string;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  availableForSale: boolean;
  images: {
    nodes: ShopifyImage[];
  };
  priceRange: {
    minVariantPrice: ShopifyPrice;
  };
  variants: {
    nodes: ShopifyProductVariant[];
  };
  collections?: {
    nodes: ShopifyCollection[];
  };
}

export interface ShopifyProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: ShopifyPrice;
  compareAtPrice?: ShopifyPrice;
}

export interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
  description?: string;
  image?: ShopifyImage;
  products: {
    nodes: ShopifyProduct[];
  };
}

export interface ShopifyProductsResponse {
  products: {
    nodes: ShopifyProduct[];
  };
}

export interface ShopifyProductResponse {
  product: ShopifyProduct | null;
}

export interface ShopifyCollectionResponse {
  collection: ShopifyCollection | null;
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  lines: {
    nodes: ShopifyCartLine[];
  };
}

export interface ShopifyCartLine {
  id: string;
  quantity: number;
  merchandise: ShopifyProductVariant & {
    product: {
      title: string;
      handle: string;
    };
    image: ShopifyImage;
  };
}

export interface ShopifyCartResponse {
  cartCreate: {
    cart: ShopifyCart;
  };
  cartLinesAdd: {
    cart: ShopifyCart;
  };
  cartLinesUpdate: {
    cart: ShopifyCart;
  };
  cartLinesRemove: {
    cart: ShopifyCart;
  };
  cart: ShopifyCart | null;
}
