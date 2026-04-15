import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { getCollection } from '@/lib/shopify';

function formatCategoryName(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function formatPrice(amount: string) {
  return `₹${parseFloat(amount).toLocaleString('en-IN')}`;
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let collection = null;
  let error = false;

  try {
    collection = await getCollection(slug);
  } catch (e) {
    console.error('Failed to fetch collection:', e);
    error = true;
  }

  const categoryName = collection?.title || formatCategoryName(slug);
  const categoryDescription = collection?.description || 'Precision-crafted frames that blend clinical excellence with avant-garde design. Ranchi\'s premier destination for luxury eyewear.';
  const products = collection?.products.nodes || [];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-32">
        {/* Deep Header */}
        <section className="relative h-[400px] flex items-center overflow-hidden mb-12">
          <div className="absolute inset-0 z-0">
            {collection?.image ? (
              <Image src={collection.image.url} alt={categoryName} fill className="object-cover opacity-20 scale-105" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-primary/5 dark:from-slate-900" />
            )}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full">
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-teal-600 mb-6">
              <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
              <span className="w-1 h-1 rounded-full bg-outline-variant" />
              <span className="text-outline">Collections</span>
              <span className="w-1 h-1 rounded-full bg-outline-variant" />
              <span className="text-primary">{categoryName}</span>
            </nav>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary mb-6 animate-fade-in-up">
              {categoryName}
            </h1>
            <p className="text-on-surface-variant max-w-2xl text-lg font-medium leading-relaxed opacity-80 animate-fade-in-up delay-100 italic">
              &ldquo;{categoryDescription}&rdquo;
            </p>
          </div>
        </section>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-72 flex-shrink-0">
              <div className="sticky top-32 space-y-12">
                <section>
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-outline">Filter By</h3>
                    <button className="text-[10px] font-bold text-teal-600 uppercase border-b border-teal-600/20">Reset All</button>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="group">
                      <h4 className="font-bold text-primary mb-5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        Price Range
                      </h4>
                      <div className="px-2 space-y-4">
                        <div className="h-[2px] bg-outline-variant/30 rounded-full relative">
                          <div className="absolute left-0 right-1/2 h-full bg-primary" />
                          <div className="absolute left-0 -top-1.5 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-lg cursor-pointer" />
                          <div className="absolute right-1/2 -top-1.5 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-lg cursor-pointer" />
                        </div>
                        <div className="flex justify-between text-[11px] font-black text-outline uppercase tracking-tight">
                          <span>₹1,000</span>
                          <span>₹15,000+</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-primary mb-5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        Frame Style
                      </h4>
                      <div className="space-y-3">
                        {['Classic Rectangle', 'Modern Aviator', 'Retro Wayfarer', 'Cat Eye Vogue', 'Rimless Minimal'].map((style) => (
                          <label key={style} className="flex items-center justify-between py-1 group cursor-pointer">
                            <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">{style}</span>
                            <div className="w-5 h-5 rounded-full border-2 border-outline-variant group-hover:border-primary transition-colors flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" />
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 rounded-3xl bg-primary text-on-primary">
                      <span className="material-symbols-outlined text-teal-300 mb-4">clinical_notes</span>
                      <h4 className="font-bold mb-2">Need a Prescription?</h4>
                      <p className="text-xs opacity-70 mb-6 leading-relaxed">Book a professional eye test at our Ranchi clinic for perfect accuracy.</p>
                      <Link href="/eye-test">
                        <Button variant="secondary" size="sm" className="w-full text-[10px] rounded-xl font-black uppercase">Book Now</Button>
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </aside>

            {/* Product Listing */}
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-12 pb-6 border-b border-outline-variant/20">
                <span className="text-[10px] font-black text-outline uppercase tracking-widest">{products.length} Designs Found</span>
                <div className="flex items-center gap-6">
                  <span className="hidden md:block text-[10px] font-black text-outline uppercase tracking-widest">Sort:</span>
                  <select className="bg-transparent text-sm font-bold text-primary focus:outline-none cursor-pointer">
                    <option>Featured First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                  </select>
                </div>
              </div>

              {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.handle}
                      name={product.title}
                      price={formatPrice(product.priceRange.minVariantPrice.amount)}
                      sku={product.id.split('/').pop() || ''}
                      image={product.images.nodes[0]?.url || ''}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-24 text-center bg-surface-container-low rounded-[3rem] border-2 border-dashed border-outline-variant/30">
                  <span className="material-symbols-outlined text-6xl text-outline-variant mb-6">inventory_2</span>
                  <h2 className="text-2xl font-bold text-primary mb-3">Looking for something specific?</h2>
                  <p className="text-on-surface-variant max-w-sm mx-auto mb-8">
                    We are currently updating the <span className="text-teal-600 font-bold">{categoryName}</span> collection. Please check back soon or explore other styles.
                  </p>
                  <Link href="/category/eyeglasses">
                    <Button variant="outline" className="rounded-full">Explore Bestsellers</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
