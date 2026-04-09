import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-8 max-w-[1920px] mx-auto">
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
              <p className="text-on-surface-variant max-w-2xl">
                Precision-crafted frames that blend clinical excellence with avant-garde design. Discover your perfect fit through our curated atelier collection.
              </p>
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

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-10">
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {[
                { name: 'Zeiss Atelier 01', price: '$345.00', sku: 'ZA-01', tag: 'Premium', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5E43BbA49-84YgRNOae36b50AQarRUtAapxF_v9cXOIutcbxh2tv0yrcPtimGfzpjF4HT1egTqud8MSlKHpRPJc2uCYyo5NFYJXTvdwjDdq0ZaRTJdURtP7TmEd_ZwTRjy7-i-lEckH6rRyjbtTbz1yothTGOvgGi7bAJzKw2soTeaEcUmM8Z_-Kz76b6vW5Vdh9s7XlVXvPniFtoWzrcK8E_1Eh7lwEYjbwNnmSHQobLx8q_6I54cYicmn_7Aff3LWVRq9Tmyz8' },
                { name: 'Prism Clarity', price: '$189.00', sku: 'PC-202', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe3J20bXtbEptbAEIa2eszKvyVLMGPpc2Ow4vTdA-WUmspwfQIT_bfhLOBQyRVt7jv8GUSplbhwcED9lzZzxV0tlWfVUoqq-ZPc3J2Rj14xLHpaU1HqVmqzgs7WKWl_khdabrq4ivqOyNtpegDO39wwQCv_sh2TLjip6UqWvsxp5BFS-buVdvCgdCRiuBS5bv0EN5gJmH_SnzoEy1BXESxPINq0w0DNYkQvaXTo6eSo6YViNGXeoWGEs0vUEqzPkus9u3JIWw6olY' },
                { name: 'The Executive', price: '$420.00', sku: 'EX-99', tag: 'Best Seller', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpobrdU-q9tHk05EuSDgfr7SAmtMIpjiltWa--cv7TkZRaororMlgDczckp1Df5-4gjg801znpfSiVwW37vtIpequYIoFaqIHedjTnyk-5ssvV2OsyaqB28ganetx8-skQKJ3sDcwrm4bYry7vUQEwN3kMrnfeC1kosX_aEq8FiS7Suu0w4CkEj39xaxaBWfiuSPpzQgiWcDkuGO8YLgfXTPwZWQJZLeiD_N9mUx0V1du7w1uRx5j_Ww4UeWAoGgDn2kIpMTQsU-A' },
                { name: 'Aura Round', price: '$510.00', sku: 'AR-05', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn3YsrfuRfOxOVU9AeE3KbiDNhWGjY4-Ardp14KwEYXWCEku7OHjI9kShvsBwLzQUNzbY795jP1DAvKZboSP0R2Bw_6INxKYUl3xhWUH087m4WcVuBMAMxQobcX38UOE-BXsx2LymAMOPvDV4dsUtfYcer1f443tLZweZ_yS-U39TfkrJfh5T2CNNCzBRr3Mw_wgYlhJ762lkZ4YyKKypUcue3vg2C46iKVO5D1Y8sGPozjad8np2ReLWvOFFz2CjwaKRxuVLz9XA' },
                { name: 'Cyber Guard', price: '$125.00', sku: 'CG-01', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7_bPSJCffZyQndISlz0--e7KWaJzXFVFxB_iVnloOCuznTOnFtlbQUUME-y3BcSLlkm2arqWtAXZh4txtF2_exv3o737odaf_zWF-khMiHQ6SaaskvDsA_xxI-1XO4jDxRP7YH4CtKRY2rnJqTr-1SgnoEPKaXXtx5320ezFtrOdT2VGPNkjHNMLV6B_N-mIedf6gFvqZrMHz8HitkdoMt85SRp664H2ygXT-1Fjplu7IeqP-Bsqyme6wzOkFg9ABU5F3KJ91Vx4' },
                { name: 'Ether Rimless', price: '$299.00', sku: 'ER-01', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhIA6I00I_KVbfD9j8dAPe6EsiI1lynQbL4g_QBCTnEdGAVx9e8LMT3Leb7o-yPen2ShswLVtGHdhpityvwtBod6NLT7a4NvAIiHZIvEkV-7B88XVGTcTTgZdyicAYhkHz2ErenlvGlICTR0ylrZtbpZDwSOzO_J5lQN7n3LNJ_XV8d2JSCEE8SImnhP-Gz6zBEGOaWcqO1XjZY5fk1O41215crupxFVwZTckX5AMVXCNAh2wuRRzjoozvziIsqkQxsgMrOA5RjlA' },
              ].map((product, i) => (
                <ProductCard 
                  key={i}
                  id={String(i)}
                  name={product.name}
                  price={product.price}
                  sku={product.sku}
                  tag={product.tag}
                  image={product.image}
                />
              ))}
            </div>

            {/* Pagination */}
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
