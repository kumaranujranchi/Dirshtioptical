import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-nav dark:bg-slate-950/70 border-b border-outline-variant/10">
      <nav className="flex justify-between items-center px-8 py-4 max-w-[1920px] mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-teal-600 dark:text-teal-400 font-headline">
          Drishti Optical
        </Link>
        
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/category/eyeglasses" className="text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400 pb-1 font-headline font-semibold tracking-tight">
            Eyeglasses
          </Link>
          <Link href="/category/sunglasses" className="text-on-surface hover:text-secondary transition-colors font-headline font-semibold tracking-tight">
            Sunglasses
          </Link>
          <Link href="/category/contact-lenses" className="text-on-surface hover:text-secondary transition-colors font-headline font-semibold tracking-tight">
            Contact Lenses
          </Link>
          <Link href="/eye-test" className="text-on-surface hover:text-secondary transition-colors font-headline font-semibold tracking-tight">
            Eye Test
          </Link>
        </div>

        <div className="flex items-center space-x-5">
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-all duration-300 ease-in-out active:scale-95">
            <span className="material-symbols-outlined">person</span>
          </button>
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-all duration-300 ease-in-out active:scale-95">
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-all duration-300 ease-in-out active:scale-95">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
