import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '@/lib/shopify';

function formatPrice(amount: string) {
  return `₹${parseFloat(amount).toLocaleString('en-IN')}`;
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const images = product.images.nodes;
  const primaryImage = images[0];
  const productDescription = product.description || 'Premium eyewear crafted for comfort, clarity, and everyday confidence.';
  const variantCount = product.variants?.nodes.length || 0;

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
            <div className="flex-grow bg-surface-container-lowest rounded-xl overflow-hidden relative aspect-[4/5] group">
              {primaryImage ? (
                <Image
                  src={primaryImage.url}
                  alt={primaryImage.altText || product.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-surface-container text-on-surface-variant">
                  No image available
                </div>
              )}
              <div className="absolute top-6 right-6">
                <button className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-primary">zoom_in</span>
                </button>
              </div>
            </div>

            {images.length > 1 && (
              <div className="flex md:flex-col gap-4 overflow-x-auto no-scrollbar md:w-24">
                {images.map((image, index) => (
                  <div key={`${image.url}-${index}`} className={`flex-shrink-0 w-24 h-24 md:w-full aspect-square bg-surface-container-lowest rounded-lg p-1 border-2 ${index === 0 ? 'border-secondary' : 'border-transparent'}`}>
                    <div className="relative w-full h-full">
                      <Image
                        src={image.url}
                        alt={image.altText || `${product.title} ${index + 1}`}
                        fill
                        sizes="96px"
                        className="object-cover rounded-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <header className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded">
                  {product.availableForSale ? 'In Stock' : 'Sold Out'}
                </span>
                {variantCount > 0 && (
                  <span className="text-xs font-semibold text-on-surface-variant">
                    {variantCount} option{variantCount === 1 ? '' : 's'} available
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-extrabold tracking-tighter font-headline text-primary">{product.title}</h1>
              <p className="text-3xl font-headline font-bold text-primary">
                {formatPrice(product.priceRange.minVariantPrice.amount)}
              </p>
              <p className="text-on-surface-variant leading-relaxed">{productDescription}</p>
            </header>

            {product.variants?.nodes.length > 0 && (
              <section className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Available Options</h3>
                  <span className="text-secondary text-xs font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">inventory_2</span>
                    Shopify variants
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {product.variants.nodes.slice(0, 4).map((variant, index) => (
                    <div
                      key={variant.id}
                      className={`p-4 rounded-xl text-left transition-all ${index === 0 ? 'bg-surface-container-low border-2 border-secondary' : 'bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low'}`}
                    >
                      <div className="text-primary font-bold text-sm">{variant.title}</div>
                      <div className="text-xs text-on-surface-variant">
                        {variant.availableForSale ? 'Available' : 'Currently unavailable'}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="secondary" className="flex-1 py-4 flex items-center justify-center gap-2" disabled={!product.availableForSale}>
                <span className="material-symbols-outlined">shopping_cart</span>
                {product.availableForSale ? 'Add to Cart' : 'Unavailable'}
              </Button>
              <Button className="flex-1 py-4" disabled={!product.availableForSale}>
                Buy Now
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">verified_user</span>
                <div className="text-xs font-medium">Authentic Shopify Product</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">local_shipping</span>
                <div className="text-xs font-medium">Storefront Synced</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
