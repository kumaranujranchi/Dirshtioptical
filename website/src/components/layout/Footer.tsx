import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 mt-auto">
      <div className="bg-slate-100 dark:bg-slate-900 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
          <div className="col-span-1">
            <span className="text-xl font-bold font-headline mb-6 block text-slate-900 dark:text-slate-50">Drishti Optical</span>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Precise vision, curated style. Your destination for premium ocular healthcare and world-class eyewear.
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-teal-600 transition-colors">public</span>
              <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-teal-600 transition-colors">share</span>
              <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-teal-600 transition-colors">mail</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/blog" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-sm">Contact</Link></li>
              <li><Link href="/shipping" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-sm">Shipping & Returns</Link></li>
              <li><Link href="/privacy" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/faq" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Categories</h4>
            <ul className="space-y-4">
              <li><Link href="/category/eyeglasses" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-sm">Eyeglasses</Link></li>
              <li><Link href="/category/sunglasses" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-sm">Sunglasses</Link></li>
              <li><Link href="/category/contact-lenses" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-sm">Contact Lenses</Link></li>
              <li><Link href="/category/computer-glasses" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-sm">Computer Glasses</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Newsletter</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Get updates on new collections and eye health tips.</p>
            <div className="flex">
              <input 
                className="bg-white dark:bg-slate-800 border-none rounded-l-md w-full focus:ring-1 focus:ring-teal-600 text-sm px-4 py-2 text-slate-900 dark:text-slate-100 placeholder-slate-400" 
                placeholder="Email Address" 
                type="email"
              />
              <button className="bg-teal-600 text-white px-4 rounded-r-md hover:bg-teal-700 transition-colors">
                <span className="material-symbols-outlined align-middle">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center text-slate-500 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} Drishti Optical. Crafted for Precision.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
