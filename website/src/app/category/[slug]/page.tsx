import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';
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
  const collection = await getCollection(slug);
  const categoryName = collection?.title || formatCategoryName(slug);
  const categoryDescription = collection?.description || 'Precision-crafted frames that blend clinical excellence with avant-garde design. Discover your perfect fit through our curated atelier collection.';
  const products = collection?.products.nodes || [];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-8 xl:px-10 max-w-[2200px] mx-auto w-full">
        {/* Breadcrumbs & Category Header */}
        <div className="mb-12">
          <nav className="flex text-sm font-label text-on-surface-variant mb-4 gap-2">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="material-symbols-outlined text-xs leading-none">chevron_right</span>
            <span className="text-primary font-semibold">{categoryName}</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tighter text-primary mb-2">{categoryName}</h1>
              <p className="text-on-surface-variant max-w-2xl">{categoryDescription}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-on-surface-variant">Sort by:</span>
              <button className="flex items-center justify-between gap-8 bg-surface-container-lowest px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow border border-outline-variant/10">
                <span className="font-semibold text-primary">Popularity</span>
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 xl:gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0 space-y-10">
            <section>
              <h3 className="font-headline font-bold text-lg mb-6 flex items-center justify-between">
                Price Range
                <span className="material-symbols-outlined text-outline">tune</span>
              </h3>
              <div className="space-y-4">
                <div className="h-1 bg-surface-container-high rounded-full relative">
                  <div className="absolute left-1/4 right-1/4 h-full bg-secondary"></div>
                  <div className="absolute left-1/4 -top-1.5 w-4 h-4 bg-white border-2 border-secondary rounded-full shadow-sm"></div>
                  <div className="absolute right-1/4 -top-1.5 w-4 h-4 bg-white border-2 border-secondary rounded-full shadow-sm"></div>
                </div>
                <div className="flex justify-between text-sm font-mono text-on-surface-variant">
                  <span>$50</span>
                  <span>$1500</span>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-headline font-bold text-lg mb-6">Gender</h3>
              <div className="space-y-3">
                {['Men\'s', 'Women\'s', 'Unisex'].map((gender) => (
                  <label key={gender} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary-container" 
                      defaultChecked={gender === 'Women\'s'}
                    />
                    <span className={`group-hover:text-primary transition-colors ${gender === 'Women\'s' ? 'text-primary font-semibold' : 'text-on-surface-variant'}`}>
                      {gender}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            <section>
              <h3 className="font-headline font-bold text-lg mb-6">Frame Type</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Full-Rim', 'Rimless', 'Semi-Rim', 'Cat-Eye'].map((type) => (
                  <button 
                    key={type} 
                    className={`py-3 px-4 rounded-xl text-sm transition-colors ${type === 'Rimless' ? 'bg-secondary-container/20 text-on-secondary-container border border-secondary/20 font-bold' : 'bg-surface-container-low font-medium hover:bg-surface-container-high'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h3 className="font-headline font-bold text-lg mb-6">Lens Specialization</h3>
              <div className="space-y-4">
                <div className="p-4 bg-primary text-on-primary rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-secondary-fixed">shield</span>
                    <span className="font-bold">Blue Light Filter</span>
                  </div>
                  <p className="text-[11px] opacity-70">Recommended for digital screens</p>
                </div>
                <div className="p-4 bg-surface-container-low rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-outline">wb_sunny</span>
                    <span className="font-bold">Photochromic</span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant">Lenses that darken in sunlight</p>
                </div>
              </div>
            </section>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-8">
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
              <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 p-10 text-center">
                <h2 className="text-2xl font-bold text-primary mb-3">No products in this collection yet</h2>
                <p className="text-on-surface-variant max-w-xl mx-auto mb-6">
                  Add products to the <span className="font-semibold text-primary">{slug}</span> Shopify collection and they will automatically appear here.
                </p>
              </div>
            )}

            {/* Pagination */}
            {products.length > 0 && (
              <div className="mt-16 flex justify-center items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-primary hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors font-medium">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors font-medium">3</button>
                <span className="px-2 text-outline-variant">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-primary hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
