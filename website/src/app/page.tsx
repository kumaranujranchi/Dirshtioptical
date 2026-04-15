import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/product/ProductCard';
import Image from 'next/image';
import Link from 'next/link';
import { getCollection, getProducts } from '@/lib/shopify';
import { ShopifyCollection, ShopifyProduct } from '@/types/shopify';

const HOMEPAGE_COLLECTION_HANDLE = 'home-page';

const STATIC_PRODUCTS = [
  { id: '1', name: 'Zenith Matte Black', price: '₹3,999', sku: 'DR-2024-ZMB', tag: 'NEW', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASRpwQYf-ojU7loc3X2swKs6TiuRIkf6sJ_3EU7bDOMjb7IABviOhoGsrAv8IO5zBUEbd6p_Wanxiwg0qMY7DQ9T_AZ4ToLtM5fNdNZVsQRBVWR8JQ5zewqC1NnyVoqmuBILV18lBFslopJN1MUcwkTD9ChRKEyLlWfwdjW4O6mbuYROgasdPupCT-37ZJX2myrnyjRwO1qP9kXPnjs58Ywwi65BHw4UCkBMPR2bEWU7LNnLoXkYHD49GnlujgdquB80VXXeMAnoo' },
  { id: '2', name: 'Luna Rose Gold', price: '₹5,499', sku: 'DR-2024-LRG', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADy06P8nvdXuKWLwuvYfrasgHePB7JCCq_Hbg8IMEl8YqnsW_KUSkAJqweYTVgx-dknKsMYSxavy_z3lA9Hvx__LSOUlxIqUhaoexK6eqZXFBjyWmKBcegSDqz7lhgIRFvC5SPFZzMLAFagtGz5pH6gLXHIi3Fu5KbAvw7L7tanLLLPwyQ8q27lQImFi0Be1S6gzecW-6INOh_GJsH8so231gnCC1jfn1-8kPQeZSneeKRVijEC2GxW1FDMo4VDYyqG8wmroLDrOE' },
  { id: '3', name: 'Aura Crystal Clear', price: '₹4,299', sku: 'DR-2024-ACC', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdGUZoFG3sBKiH4BdilS4N-AFwP4uov-RU2JRzn9tLAxNp--_RajBBhkVfz0lp9uFiUTo8eUCF00kRpReNQAJngm-_b7jZG6cc-c-CKQm5foP0QKPhe-064bok_GLTKbIa88HMVt54TMiyyskX6_Ha8aDsSBkUW4kzQ4PjK1d5AGvZoAS3oS0-MNKUDhLxidGZ5g0Wx_DcvI3r5JdFH_bqfHy1eJf1hl9QMhLS2Du4YjeVbdZ_qE-INmybBtjdf0PhAwDaHxtRJew' },
  { id: '4', name: 'Amber Tortoise', price: '₹4,899', sku: 'DR-2024-AMT', tag: 'BESTSELLER', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxgmkprVbLwHdIvlVt1G29sOjrbPW57qV9dT7fu8lfIH7I1fv3Sr-s15jM0kOW49IF16H36R46El_q6Xu0y9pg4EHQv-LdMUIG2hK7usVxjnTC0wTckN3P7-QYNAtgmFKO3Gbh6kAlJMGvksKkHClA4O0k4PYJIhf1bCuFoKyjlAEUrcetC-BKnb7Ue3j2NrkFC10VyBLtPlZKRFf2HMwdJPxPEZ1BX6D0BFaoHvZnOrHNiHgHHMWN5HzLNwp0fMWpIpsT7LrTXOA' },
];

export default async function Home() {
  let shopifyProducts: ShopifyProduct[] = [];
  let homepageCollection: ShopifyCollection | null = null;

  try {
    homepageCollection = await getCollection(HOMEPAGE_COLLECTION_HANDLE);
    if (homepageCollection?.products.nodes.length) {
      shopifyProducts = homepageCollection.products.nodes;
    } else {
      shopifyProducts = await getProducts();
    }
  } catch (error) {
    console.warn('Shopify fetch failed on Home Page, using static data as fallback.', error);
  }

  const useShopify = shopifyProducts.length > 0;

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-surface-container-low">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcMD3Gt8nnHzPIYpijLWwzWhCiglTFQVrPQgHNwHEDT_O0dN4jxOp0ybepopdayriQkLSArXxvVps0dUclZfXHVB1mZzLMkLkIQ9V0lM7nggnRKYJiu-WTV2FMyWV0W7s4ZoSVVCqqs15HKFCTTxqeX5kg0YYoS6akct-ToLQC8r6mcjcYuJJNuhadMJTOB-CgK7qP1dTrtbTkLDOCzae95DZgOJ1c_hRV_Sfz4Bevaky4MYqevjsqcx_GOaiPuQO7oiyXmoBIGFQ"
              alt="Drishti Optical Premium Eyewear"
              fill
              className="object-cover opacity-90 scale-105 animate-subtle-zoom"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container/40 backdrop-blur-md border border-secondary/20 rounded-full mb-8 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">Autumn Collection 2024</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-primary leading-[0.95] mb-8 animate-fade-in-up delay-100">
                Precision Eye Care <br /> 
                <span className="text-teal-600">Curated Style.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-on-surface-variant/80 mb-12 leading-relaxed font-medium max-w-xl animate-fade-in-up delay-200">
                Discover Ranchi&apos;s most premium collection of eyewear and professional ocular healthcare.
              </p>
              
              <div className="flex flex-wrap gap-6 animate-fade-in-up delay-300">
                <Link href="/category/eyeglasses">
                  <Button size="lg" className="rounded-full px-10">Shop Collections</Button>
                </Link>
                <Link href="/eye-test">
                  <Button variant="outline" size="lg" className="rounded-full px-10 border-2">Book Eye Test</Button>
                </Link>
              </div>
              
              <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg border-t border-outline-variant/30 pt-8 animate-fade-in-up delay-400">
                {[
                  { label: 'Verified Partners', value: '40+' },
                  { label: 'Happy Patients', value: '10k+' },
                  { label: 'Years Experience', value: '25+' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-primary font-headline">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-widest text-outline font-bold mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-12 bg-primary text-on-primary">
          <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between items-center gap-8">
            {[
              { icon: 'nest_eco_leaf', text: 'Anti-Glare & Blue Cut' },
              { icon: 'speed', text: '1-Hour Express Service' },
              { icon: 'verified_user', text: '1 Year Warranty' },
              { icon: 'home_health', text: 'Free Home Eye Test' }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-teal-300">{feature.icon}</span>
                <span className="text-sm font-bold uppercase tracking-widest">{feature.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Bento Grid */}
        <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-4">Explore our Worlds</h2>
              <p className="text-on-surface-variant font-medium">Fine craftsmanship meets innovative lens technology in every pair we curate.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-4 h-[900px] md:h-[700px]">
            <Link href="/category/eyeglasses" className="md:col-span-7 md:row-span-2 relative group overflow-hidden rounded-3xl bg-surface-container-lowest border border-outline-variant/20">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6phIaSW5H6p1Exlb7YHBFbVKvOCmjYKAcdS2OdnJVpSgHcwKL7iyj7egLvANBgaOHPuAxRTPurmS5JmhNv_hhErkz-AZ32zJc9nh9LSAUu004THNf7KN_Z5JQgIEu7XEDVF8u7VAasSkXiRBRv1gFhTaYNuMhx9zgmZB5dUPJQHx8ub78canuOmTiQTThkwTXGulS-XtAmuHcvv1r83pj1CQpeDVLJqkAAAJ7300HZsH-xNRFwcdBkZq9ThP4AMsdYPHZuG935Yg"
                alt="Eyeglasses Collection"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-teal-300 text-xs font-bold uppercase tracking-widest mb-2">Prescription Ready</span>
                <h3 className="text-4xl font-bold text-white mb-2">Eyeglasses</h3>
                <p className="text-white/70 max-w-sm font-medium">Over 2000+ frames designed for comfort and clarity.</p>
              </div>
            </Link>
            
            <Link href="/category/sunglasses" className="md:col-span-5 relative group overflow-hidden rounded-3xl bg-surface-container-lowest border border-outline-variant/20">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF-BxVfFIUj97mZOqetsn_aKgqY_opqQmagdg24C-9t1rbECexFntiKC7ljAWNXHa2F4ejVviibrXRg5RavviTcsZyOab-hUA1sDc9kvSiWxNK080RxFj8YxPs7Jhn0TG1FhNefXbPLDDtXRLiouXcGM2AWs_iHNIq7sryggZTPGHYh0yWhRptX3llqgdRHy-WnuIp1eOr-SEuokqNJoZ6CFLWwwxxadYyJ9x9Xv-U8LqqYwV3dkDLVAXe6JAHLCgXP0ue8xl3_2w"
                alt="Sunglasses Collection"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-bold text-white mb-2">Sunglasses</h3>
                <p className="text-white/70 font-medium">UV400 protection with unmatched style.</p>
              </div>
            </Link>

            <Link href="/category/contact-lenses" className="md:col-span-3 relative group overflow-hidden rounded-3xl bg-surface-container-lowest border border-outline-variant/20">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChi6M0VsJdVH6IiNPPaRsuBKw6Jp1g3CnJQSLx9KyeSNfNMZcEshvI5Yk-6RhWBzjQiuOPPD1TN9PDu1PPjxowz9P-s5kMseHNozMvaZ-2ZgAu2QgjMuuKatI7rvHGkQ7S60-tIcXQUNqK9PU8TDU0Qcb-p7OAobMU0yBf4yUVmWqk9UiqYxqSdG10GyDPvnDIaKYOlQLqNxU5VyDeHBuBAn9wTqbssZS0V816UGO9KCQB71TqRu6lD76YALQui1wpnxfrj0kqXL4"
                alt="Contact Lenses"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors flex flex-col justify-end p-8">
                <h3 className="text-xl font-bold text-white flex items-center justify-between">
                  Contact Lenses
                  <span className="material-symbols-outlined">arrow_forward</span>
                </h3>
              </div>
            </Link>

            <Link href="/category/computer-glasses" className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-surface-container-lowest border border-outline-variant/20">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBJ1y1ZeG9q5_lxGY53VCZiOLD5B3PaBAsSt1Zl-VXjhXtVOHluX_GhFCzz8dzoDjsocbMLdmTebRYnGTMwCvAXqYgy_Qjf7jXjrcZ1b8L2lkaftQmZk7hxh0N6ecRRixa7qf8CedCaghsaWD8SYGZLb7MWQywQgnfHugirGa1CV5s9NEe5kygoVe5pMOGcBrJ_Mu5UYNxZz1JPbEE8vG-HbrPwvZ6jn7Pa4rLF1hqb2B3eTqvYrieNXGRMr_zC7KbGhMlbD3j5Us"
                alt="Digital Protection"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <h3 className="text-base font-bold text-white">Digital Pro</h3>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-32 bg-surface-container-low border-y border-outline-variant/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-teal-600 text-xs font-bold tracking-widest uppercase mb-3 block">Handpicked for you</span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary">
                  {homepageCollection?.title || 'Bestsellers this Week'}
                </h2>
                {homepageCollection?.description && (
                  <p className="text-on-surface-variant mt-4 font-medium max-w-2xl">{homepageCollection.description}</p>
                )}
              </div>
              <Link href="/category/eyeglasses">
                <Button variant="tertiary" className="group">
                  Explore Catalogue 
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">east</span>
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              {useShopify
                ? shopifyProducts.slice(0, 4).map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.handle}
                      name={product.title}
                      price={`₹${parseFloat(product.priceRange.minVariantPrice.amount).toLocaleString('en-IN')}`}
                      sku={product.id.split('/').pop() || ''}
                      image={product.images.nodes[0]?.url || ''}
                    />
                  ))
                : STATIC_PRODUCTS.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      sku={product.sku}
                      tag={product.tag}
                      image={product.image}
                    />
                  ))
              }
            </div>
          </div>
        </section>

        {/* Eye Test CTA */}
        <section className="relative h-[650px] overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHQIt49ImTD8-pM4LJhStVhkEpTMPvRfwSqbCG9IaX4cIzWHhiCpqgD3EKgrHMpEdkZMxxEbQxWDGxIEyDeMEftuu_n8OpBV0yN8nvMJUrb3S0JK1o1SrSq_C93lC7W3VIAMQd8WzyKAXx4oxascJT8HJqR-o2V0wEnboRqw8QI68LW-H-uCXzTjZSDAxI4B82pjCzT_NFVHpA6fUYrxNVqyCDJlUGcEGZoxmo6sskxqFwN-R5R-BXuv85ljSLvntwrgwyBdizsCc"
              alt="Professional Eye Checkup"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/45 backdrop-blur-[1px]"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 md:px-12">
            <span className="text-teal-300 text-sm font-bold tracking-[0.3em] uppercase mb-6">Clinic & Opticians</span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 max-w-4xl tracking-tighter leading-tight font-headline">
              Expert Eye Care. <br /> Perfect Prescriptions.
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl font-medium leading-relaxed">
              Our state-of-the-art diagnostic clinic in Ranchi ensures your eyes receive the care they deserve. Book a comprehensive eye test today.
            </p>
            <Link href="/eye-test">
              <Button size="lg" variant="secondary" className="rounded-full px-12 py-6 text-lg border-2 border-white/20 hover:scale-105">
                Book My Free Slot
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
