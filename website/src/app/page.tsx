import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/product/ProductCard';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '@/lib/shopify';
import { ShopifyProduct } from '@/types/shopify';

const STATIC_PRODUCTS = [
  { id: '1', name: 'Zenith Matte Black', price: '₹3,999', sku: 'DR-2024-ZMB', tag: 'NEW', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASRpwQYf-ojU7loc3X2swKs6TiuRIkf6sJ_3EU7bDOMjb7IABviOhoGsrAv8IO5zBUEbd6p_Wanxiwg0qMY7DQ9T_AZ4ToLtM5fNdNZVsQRBVWR8JQ5zewqC1NnyVoqmuBILV18lBFslopJN1MUcwkTD9ChRKEyLlWfwdjW4O6mbuYROgasdPupCT-37ZJX2myrnyjRwO1qP9kXPnjs58Ywwi65BHw4UCkBMPR2bEWU7LNnLoXkYHD49GnlujgdquB80VXXeMAnoo' },
  { id: '2', name: 'Luna Rose Gold', price: '₹5,499', sku: 'DR-2024-LRG', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADy06P8nvdXuKWLwuvYfrasgHePB7JCCq_Hbg8IMEl8YqnsW_KUSkAJqweYTVgx-dknKsMYSxavy_z3lA9Hvx__LSOUlxIqUhaoexK6eqZXFBjyWmKBcegSDqz7lhgIRFvC5SPFZzMLAFagtGz5pH6gLXHIi3Fu5KbAvw7L7tanLLLPwyQ8q27lQImFi0Be1S6gzecW-6INOh_GJsH8so231gnCC1jfn1-8kPQeZSneeKRVijEC2GxW1FDMo4VDYyqG8wmroLDrOE' },
  { id: '3', name: 'Aura Crystal Clear', price: '₹4,299', sku: 'DR-2024-ACC', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdGUZoFG3sBKiH4BdilS4N-AFwP4uov-RU2JRzn9tLAxNp--_RajBBhkVfz0lp9uFiUTo8eUCF00kRpReNQAJngm-_b7jZG6cc-c-CKQm5foP0QKPhe-064bok_GLTKbIa88HMVt54TMiyyskX6_Ha8aDsSBkUW4kzQ4PjK1d5AGvZoAS3oS0-MNKUDhLxidGZ5g0Wx_DcvI3r5JdFH_bqfHy1eJf1hl9QMhLS2Du4YjeVbdZ_qE-INmybBtjdf0PhAwDaHxtRJew' },
  { id: '4', name: 'Amber Tortoise', price: '₹4,899', sku: 'DR-2024-AMT', tag: 'BESTSELLER', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxgmkprVbLwHdIvlVt1G29sOjrbPW57qV9dT7fu8lfIH7I1fv3Sr-s15jM0kOW49IF16H36R46El_q6Xu0y9pg4EHQv-LdMUIG2hK7usVxjnTC0wTckN3P7-QYNAtgmFKO3Gbh6kAlJMGvksKkHClA4O0k4PYJIhf1bCuFoKyjlAEUrcetC-BKnb7Ue3j2NrkFC10VyBLtPlZKRFf2HMwdJPxPEZ1BX6D0BFaoHvZnOrHNiHgHHMWN5HzLNwp0fMWpIpsT7LrTXOA' },
];

export default async function Home() {
  let shopifyProducts: ShopifyProduct[] = [];
  try {
    shopifyProducts = await getProducts();
  } catch {
    // Silently fall back to static products
  }

  const useShopify = shopifyProducts.length > 0;
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[870px] flex items-center overflow-hidden bg-surface-container-low">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcMD3Gt8nnHzPIYpijLWwzWhCiglTFQVrPQgHNwHEDT_O0dN4jxOp0ybepopdayriQkLSArXxvVps0dUclZfXHVB1mZzLMkLkIQ9V0lM7nggnRKYJiu-WTV2FMyWV0W7s4ZoSVVCqqs15HKFCTTxqeX5kg0YYoS6akct-ToLQC8r6mcjcYuJJNuhadMJTOB-CgK7qP1dTrtbTkLDOCzae95DZgOJ1c_hRV_Sfz4Bevaky4MYqevjsqcx_GOaiPuQO7oiyXmoBIGFQ"
              alt="Model with eyewear"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase rounded mb-6">NEW COLLECTION 2024</span>
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-primary leading-[1.1] mb-6">See the World Clearly with Drishti Optical</h1>
              <p className="text-xl text-on-surface-variant mb-10 leading-relaxed font-body">Premium Eyewear | Free Eye Test | Fast Delivery</p>
              <div className="flex flex-wrap gap-4">
                <Button>Shop Now</Button>
                <Button variant="secondary">Book Eye Test</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Bento Grid */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[700px]">
            <Link href="/category/eyeglasses" className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-surface-container-lowest">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6phIaSW5H6p1Exlb7YHBFbVKvOCmjYKAcdS2OdnJVpSgHcwKL7iyj7egLvANBgaOHPuAxRTPurmS5JmhNv_hhErkz-AZ32zJc9nh9LSAUu004THNf7KN_Z5JQgIEu7XEDVF8u7VAasSkXiRBRv1gFhTaYNuMhx9zgmZB5dUPJQHx8ub78canuOmTiQTThkwTXGulS-XtAmuHcvv1r83pj1CQpeDVLJqkAAAJ7300HZsH-xNRFwcdBkZq9ThP4AMsdYPHZuG935Yg"
                alt="Eyeglasses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Eyeglasses</h3>
                <p className="text-white/80 text-sm font-body">Precision crafted for every face shape.</p>
              </div>
            </Link>
            
            <Link href="/category/sunglasses" className="md:col-span-2 relative group overflow-hidden rounded-xl bg-surface-container-lowest">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF-BxVfFIUj97mZOqetsn_aKgqY_opqQmagdg24C-9t1rbECexFntiKC7ljAWNXHa2F4ejVviibrXRg5RavviTcsZyOab-hUA1sDc9kvSiWxNK080RxFj8YxPs7Jhn0TG1FhNefXbPLDDtXRLiouXcGM2AWs_iHNIq7sryggZTPGHYh0yWhRptX3llqgdRHy-WnuIp1eOr-SEuokqNJoZ6CFLWwwxxadYyJ9x9Xv-U8LqqYwV3dkDLVAXe6JAHLCgXP0ue8xl3_2w"
                alt="Sunglasses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Sunglasses</h3>
                <p className="text-white/80 text-sm font-body">UV protection meets runway style.</p>
              </div>
            </Link>

            <Link href="/category/contact-lenses" className="relative group overflow-hidden rounded-xl bg-surface-container-lowest">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChi6M0VsJdVH6IiNPPaRsuBKw6Jp1g3CnJQSLx9KyeSNfNMZcEshvI5Yk-6RhWBzjQiuOPPD1TN9PDu1PPjxowz9P-s5kMseHNozMvaZ-2ZgAu2QgjMuuKatI7rvHGkQ7S60-tIcXQUNqK9PU8TDU0Qcb-p7OAobMU0yBf4yUVmWqk9UiqYxqSdG10GyDPvnDIaKYOlQLqNxU5VyDeHBuBAn9wTqbssZS0V816UGO9KCQB71TqRu6lD76YALQui1wpnxfrj0kqXL4"
                alt="Contact Lenses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">Contact Lenses</h3>
              </div>
            </Link>

            <Link href="/category/computer-glasses" className="relative group overflow-hidden rounded-xl bg-surface-container-lowest">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBJ1y1ZeG9q5_lxGY53VCZiOLD5B3PaBAsSt1Zl-VXjhXtVOHluX_GhFCzz8dzoDjsocbMLdmTebRYnGTMwCvAXqYgy_Qjf7jXjrcZ1b8L2lkaftQmZk7hxh0N6ecRRixa7qf8CedCaghsaWD8SYGZLb7MWQywQgnfHugirGa1CV5s9NEe5kygoVe5pMOGcBrJ_Mu5UYNxZz1JPbEE8vG-HbrPwvZ6jn7Pa4rLF1hqb2B3eTqvYrieNXGRMr_zC7KbGhMlbD3j5Us"
                alt="Computer Glasses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">Computer Glasses</h3>
              </div>
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-extrabold tracking-tight text-primary">Featured Frames</h2>
                <p className="text-on-surface-variant mt-2 font-body">The Digital Curator&apos;s Choice</p>
              </div>
              <Button variant="tertiary" className="pb-1 border-b-2 border-primary rounded-none">View All</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
        <section className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHQIt49ImTD8-pM4LJhStVhkEpTMPvRfwSqbCG9IaX4cIzWHhiCpqgD3EKgrHMpEdkZMxxEbQxWDGxIEyDeMEftuu_n8OpBV0yN8nvMJUrb3S0JK1o1SrSq_C93lC7W3VIAMQd8WzyKAXx4oxascJT8HJqR-o2V0wEnboRqw8QI68LW-H-uCXzTjZSDAxI4B82pjCzT_NFVHpA6fUYrxNVqyCDJlUGcEGZoxmo6sskxqFwN-R5R-BXuv85ljSLvntwrgwyBdizsCc"
              alt="Eye Test Clinic"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 max-w-3xl font-headline">Professional Eye Care for Your Vision Health</h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl font-body">Our expert optometrists use state-of-the-art technology to ensure your prescription is perfect and your eyes are healthy.</p>
            <Button size="lg" variant="secondary">Book Your Free Eye Checkup</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
