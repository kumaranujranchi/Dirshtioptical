import { ShopifyProductsResponse, ShopifyCollectionResponse, ShopifyProductResponse } from '@/types/shopify';

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
  variables?: Record<string, string>;
  cache?: RequestCache;
}): Promise<GraphQLResponse<T>> {
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

  const body: GraphQLResponse<T> = await result.json();

  if (body.errors) {
    throw new Error(body.errors[0].message);
  }

  return body;
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
