import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/product/ProductCard';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct, getRecommendedProducts } from '@/lib/shopify';
import Link from 'next/link';
import { ShopifyProduct } from '@/types/shopify';

function formatPrice(amount: string) {
  return `₹${parseFloat(amount).toLocaleString('en-IN')}`;
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let product = null;
  let recommendedProducts: ShopifyProduct[] = [];

  try {
    product = await getProduct(id);
    if (product) {
      recommendedProducts = await getRecommendedProducts(product.id);
    }
  } catch (e) {
    console.error('Error fetching product details:', e);
  }

  if (!product) {
    notFound();
  }

  const images = product.images.nodes;
  const primaryImage = images[0];
  const productDescription = product.description || 'Premium eyewear crafted for comfort, clarity, and everyday confidence. Visit our Ranchi store for professional fitting and assistance.';

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-outline mb-12">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="w-1 h-1 rounded-full bg-outline-variant" />
            <Link href="/category/eyeglasses" className="hover:text-primary transition-colors">Catalogue</Link>
            <span className="w-1 h-1 rounded-full bg-outline-variant" />
            <span className="text-primary">{product.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 mb-32">
            {/* Gallery Section */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {images.length > 0 ? (
                  images.map((image, index) => (
                    <div 
                      key={image.url} 
                      className={`relative bg-white rounded-[2.5rem] overflow-hidden border border-outline-variant/10 group ${index === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}
                    >
                      <Image
                        src={image.url}
                        alt={image.altText || product.title}
                        fill
                        className="object-contain p-12 transition-transform duration-1000 group-hover:scale-110"
                        priority={index === 0}
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 aspect-[16/9] bg-surface-container-low rounded-[2.5rem] flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-outline-variant">image_not_supported</span>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info Section */}
            <div className="lg:col-span-12 xl:col-span-5">
              <div className="sticky top-32 space-y-10">
                <header className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 text-[10px] font-black uppercase tracking-widest rounded-full">
                      Authentic
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-outline">
                      SKU: {product.id.split('/').pop()}
                    </span>
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-primary leading-tight">
                    {product.title}
                  </h1>
                  
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-black text-primary tracking-tighter">
                      {formatPrice(product.priceRange.minVariantPrice.amount)}
                    </span>
                    <span className="text-sm font-bold text-outline uppercase tracking-widest">In Stock</span>
                  </div>
                </header>

                <div className="space-y-6 border-y border-outline-variant/20 py-10">
                  <p className="text-on-surface-variant text-lg leading-relaxed font-medium">
                    {productDescription}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: 'box', label: 'Anti-Glare coating' },
                      { icon: 'shield', label: 'UV400 Protection' },
                      { icon: 'verified', label: '1 Year Warranty' },
                      { icon: 'local_shipping', label: 'Fast Delivery' },
                    ].map((feat) => (
                      <div key={feat.label} className="flex items-center gap-3 text-xs font-bold text-primary">
                        <span className="material-symbols-outlined text-teal-600 text-[18px]">{feat.icon}</span>
                        {feat.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Purchase Actions */}
                <div className="space-y-4">
                  <Button size="lg" className="w-full rounded-2xl py-6 flex items-center justify-center gap-3 shadow-xl shadow-primary/20">
                    <span className="material-symbols-outlined">shopping_cart</span>
                    Add to Cart
                  </Button>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1 rounded-2xl py-5 border-2 hover:bg-surface-container">
                      Compare
                    </Button>
                    <Link href={`https://wa.me/91XXXXXXXXXX?text=Hi, I am interested in ${product.title}`} className="flex-1">
                      <Button variant="secondary" className="w-full rounded-2xl py-5 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-100 border-none">
                        <span className="material-symbols-outlined">chat</span>
                        WhatsApp Inquiry
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Store Location Info */}
                <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-teal-600">store</span>
                    <div>
                      <h4 className="font-bold text-sm mb-1 text-primary">Pick up available in Ranchi</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Usually ready in 24 hours. Visit us for complimentary adjustments and cleaning.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Section */}
          {recommendedProducts.length > 0 && (
            <section className="border-t border-outline-variant/20 pt-24">
              <div className="flex items-end justify-between mb-16">
                <div>
                  <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest mb-3 block">Complete your Look</span>
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary">Recommended for You</h2>
                </div>
                <Link href="/category/eyeglasses">
                  <Button variant="tertiary" className="font-black text-[10px] uppercase border-b-2 border-primary rounded-none pb-1">View Catalogue</Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {recommendedProducts.slice(0, 4).map((recProduct) => (
                  <ProductCard
                    key={recProduct.id}
                    id={recProduct.handle}
                    name={recProduct.title}
                    price={formatPrice(recProduct.priceRange.minVariantPrice.amount)}
                    sku={recProduct.id.split('/').pop() || ''}
                    image={recProduct.images.nodes[0]?.url || ''}
                  />
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
