import { ShopifyProductsResponse, ShopifyCollectionResponse, ShopifyProductResponse, ShopifyCartResponse } from '@/types/shopify';

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const apiVersion = process.env.SHOPIFY_API_VERSION || '2024-01';

const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;

interface GraphQLResponse<T> {
  data: T;
  errors?: { message: string }[];
}

async function shopifyFetch<T>({
  query,
  variables = {},
  cache = 'force-cache'
}: {
  query: string;
  variables?: Record<string, any>;
  cache?: RequestCache;
}): Promise<GraphQLResponse<T>> {
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': accessToken!,
      },
      body: JSON.stringify({ query, variables }),
      cache,
      next: { revalidate: 60 },
    });

    if (!result.ok) {
      throw new Error(`Shopify API error: ${result.status} ${result.statusText}`);
    }

    const body: GraphQLResponse<T> = await result.json();

    if (body.errors) {
      console.error('Shopify GraphQL Errors:', body.errors);
      throw new Error(body.errors[0].message);
    }

    return body;
  } catch (error) {
    console.error('Error fetching from Shopify:', error);
    throw error;
  }
}

export async function getProducts() {
  const res = await shopifyFetch<ShopifyProductsResponse>({
    query: `
      query getProducts {
        products(first: 20, sortKey: CREATED_AT, reverse: true) {
          nodes {
            id
            title
            handle
            availableForSale
            variants(first: 1) {
              nodes {
                id
              }
            }
            images(first: 1) {
              nodes {
                url
                altText
                width
                height
              }
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    `,
  });

  return res.data.products.nodes;
}

export async function getCollection(handle: string) {
  const res = await shopifyFetch<ShopifyCollectionResponse>({
    query: `
      query getCollection($handle: String!) {
        collection(handle: $handle) {
          id
          title
          handle
          description
          products(first: 20) {
            nodes {
              id
              title
              handle
              availableForSale
              variants(first: 1) {
                nodes {
                  id
                }
              }
              images(first: 1) {
                nodes {
                  url
                  altText
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    `,
    variables: { handle },
  });

  return res.data.collection;
}

export async function getProduct(handle: string) {
  const res = await shopifyFetch<ShopifyProductResponse>({
    query: `
      query getProduct($handle: String!) {
        product(handle: $handle) {
          id
          title
          handle
          description
          descriptionHtml
          availableForSale
          images(first: 6) {
            nodes {
              url
              altText
              width
              height
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 10) {
            nodes {
              id
              title
              availableForSale
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    `,
    variables: { handle },
  });

  return res.data.product;
}

export async function getRecommendedProducts(productId: string) {
  const res = await shopifyFetch<ShopifyProductsResponse>({
    query: `
      query getRecommendedProducts($productId: ID!) {
        productRecommendations(productId: $productId) {
          id
          title
          handle
          availableForSale
          images(first: 1) {
            nodes {
              url
              altText
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    `,
    variables: { productId },
  });

  return (res.data as any).productRecommendations || [];
}

export async function createCart() {
  const res = await shopifyFetch<ShopifyCartResponse>({
    query: `
      mutation cartCreate {
        cartCreate {
          cart {
            id
            checkoutUrl
          }
        }
      }
    `,
    cache: 'no-store'
  });

  return res.data.cartCreate.cart;
}

export async function addToCart(cartId: string, variantId: string) {
  const res = await shopifyFetch<ShopifyCartResponse>({
    query: `
      mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart {
            id
            checkoutUrl
            lines(first: 100) {
              nodes {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    product {
                      title
                      handle
                    }
                    image {
                      url
                    }
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      cartId,
      lines: [
        {
          merchandiseId: variantId,
          quantity: 1,
        },
      ],
    },
    cache: 'no-store'
  });

  return res.data.cartLinesAdd.cart;
}

export async function getCart(cartId: string) {
  const res = await shopifyFetch<ShopifyCartResponse>({
    query: `
      query getCart($cartId: ID!) {
        cart(id: $cartId) {
          id
          checkoutUrl
          lines(first: 100) {
            nodes {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    title
                    handle
                  }
                  image {
                    url
                  }
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: { cartId },
    cache: 'no-store'
  });

  return res.data.cart;
}

export async function updateCartLines(cartId: string, lines: { id: string, quantity: number }[]) {
  const res = await shopifyFetch<ShopifyCartResponse>({
    query: `
      mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
        cartLinesUpdate(cartId: $cartId, lines: $lines) {
          cart {
            id
            checkoutUrl
            lines(first: 100) {
              nodes {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    product {
                      title
                      handle
                    }
                    image {
                      url
                    }
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: { cartId, lines },
    cache: 'no-store'
  });

  return res.data.cartLinesUpdate.cart;
}

export async function removeCartLines(cartId: string, lineIds: string[]) {
  const res = await shopifyFetch<ShopifyCartResponse>({
    query: `
      mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
          cart {
            id
            checkoutUrl
            lines(first: 100) {
              nodes {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    product {
                      title
                      handle
                    }
                    image {
                      url
                    }
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: { cartId, lineIds },
    cache: 'no-store'
  });

  return res.data.cartLinesRemove.cart;
}
