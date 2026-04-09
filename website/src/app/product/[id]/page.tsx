import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          {/* Left: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
            <div className="flex-grow bg-surface-container-lowest rounded-xl overflow-hidden relative aspect-[4/5] group">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr1Ks8LAyyETY8AD8Q0Q9CE6csRjW_tvHQ7cA4eLIj57Zjde--cp0zsVzkAnVpPhANH7l6s_FSRyCA8cu_V4qUZhUCzy2_XoSVROWl_KBHPG6-D9Srr3A8ajZ8v8YOn-w0c8JlRLBYiQ8h-R38Nf_QWGZyEEvtBqsZauEFm2ZPzCQszEUB5Fk_wYyd_nfgdj_P4kyCEby_4Jyq1cGlnTxbeHd3zy6V17qIVY-rLeSvzLcQnU7B9dB1RJD7x-MOXLx_t84ktISFfNQ"
                alt="Product Image"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-6 right-6">
                <button className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-primary">zoom_in</span>
                </button>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto no-scrollbar md:w-24">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB77WEfh3B4x6s-f0bSvg0Kpfi3Mb6nDeLGJ1dRTQigqGBJZnAMIjiFlekZggZFTID4eH6KXtYml_faGB5mVJw8q_mqrfhOAxe3BRcXxdggSIKqPwj5w-kBJqR51Yzqd7XHgiDv6z67WpuYs8B706B2JBDB4vgzI0vgzAX_dGH5Y8M0mw-0jV3RTWkU5WYAQMy7Jv8oqwjHaL6JKh4uuagQj9z5B9t8sy5csgSfuRN3NhtW5rwSrwvg5iokQfrSYGrM__R7Pfqz3jQ",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAde4yyJrZJetXGHcP-0IWzeCcy8BvIo6OB1fH1UKIRSdMxXE6rfrWLGP8e_OrWqM_2496cDHp6XeXBQLaeNEaJ7j2FS8M-mdYuDoxxee4UNJ8JpUSeEzPuiQvdbG9zk4cBXocxvevepof18psrytV6ZywEne0dWVHci2Fgr9ENIw9DDzQcEpaZE1q24QRrT7sgDgW3iuNuiDTZIQoeRGVb9y7kGC_SOnnkNSv9oBWRr5sq0AbB7rV-xAY7zwS1Vrt0y9C5AwDB8PE",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDE9I-Ylffl5mBNZrKqrZ1FRELMGJglnjL4g-Ur9nsu8iM7MJzI7G8TLc2EvHY-f0A_HnIALJCl5X5sJSKs4_iZkpqzGH4d1crXRNjxD_LQUIHOIQVcwU3xsb9awpMvWfFGPQMi0JyCVilblEsKpTNK-oI-5y4PkvVm9-YlIBBf9SiO1yGiUZNwhpyOMLAF8tkhWgecS50vgGtC2NesZ6m2VO7ZFcuYLgPy9m7HIbhWkdRYPpNU3mbbVrSVz6O8bZU2Ixz953IPqSc",
              ].map((src, i) => (
                <div key={i} className={`flex-shrink-0 w-24 h-24 md:w-full aspect-square bg-surface-container-lowest rounded-lg p-1 border-2 ${i === 0 ? 'border-secondary' : 'border-transparent'}`}>
                  <div className="relative w-full h-full">
                    <Image src={src} alt="Thumbnail" fill className="object-cover rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <header className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded">Premium Series</span>
                <div className="flex items-center text-secondary">
                  {[1, 2, 3, 4].map((s) => (
                    <span key={s} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                  <span className="material-symbols-outlined text-sm">star_half</span>
                  <span className="ml-2 text-xs font-semibold text-on-surface-variant">(124 Reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tighter font-headline text-primary">Aethelgard Signature Acetate</h1>
              <p className="text-3xl font-headline font-bold text-primary">$285.00</p>
              <p className="text-on-surface-variant leading-relaxed">Experience surgical precision meets avant-garde style. Handcrafted from Italian acetate with reinforced titanium cores for unparalleled durability and comfort.</p>
            </header>

            {/* Lens Configurator */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Lens Selection</h3>
                <button className="text-secondary text-xs font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">info</span> Lens Guide
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-4 rounded-xl bg-surface-container-low border-2 border-secondary text-left group">
                  <div className="text-primary font-bold text-sm">Single Vision</div>
                  <div className="text-xs text-on-surface-variant">Distance or Reading</div>
                </button>
                <button className="p-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant text-left transition-all">
                  <div className="text-primary font-bold text-sm">Progressive</div>
                  <div className="text-xs text-on-surface-variant">All-in-one vision</div>
                </button>
              </div>
            </section>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="secondary" className="flex-1 py-4 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">shopping_cart</span> Add to Cart
              </Button>
              <Button className="flex-1 py-4">
                Buy Now
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">verified_user</span>
                <div className="text-xs font-medium">2 Year Warranty</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">local_shipping</span>
                <div className="text-xs font-medium">Free Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
