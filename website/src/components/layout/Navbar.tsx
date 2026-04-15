'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Eyeglasses', href: '/category/eyeglasses' },
    { name: 'Sunglasses', href: '/category/sunglasses' },
    { name: 'Contact Lenses', href: '/category/contact-lenses' },
    { name: 'Eye Test', href: '/eye-test' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav py-2 border-b border-outline-variant/20 shadow-sm' 
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="flex justify-between items-center px-6 md:px-12 max-w-[1920px] mx-auto">
        <Link 
          href="/" 
          className="text-2xl font-bold tracking-tighter text-teal-600 dark:text-teal-400 font-headline flex items-center gap-2 group"
        >
          <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">visibility</span>
          <span>Drishti Optical</span>
        </Link>
        
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`relative py-1 font-headline font-semibold tracking-tight transition-colors text-sm uppercase ${
                isActive(link.href)
                  ? 'text-teal-600 dark:text-teal-400'
                  : 'text-on-surface/80 hover:text-teal-600 dark:hover:text-teal-400'
              }`}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-600 dark:bg-teal-400 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="hidden sm:flex p-2 hover:bg-surface-container-high rounded-full transition-all active:scale-95">
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>
          <button className="p-2 hover:bg-surface-container-high rounded-full transition-all active:scale-95">
            <span className="material-symbols-outlined text-[22px]">person_outline</span>
          </button>
          <Link href="/cart" className="relative p-2 hover:bg-surface-container-high rounded-full transition-all active:scale-95">
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            <span className="absolute top-1 right-1 w-4 h-4 bg-teal-600 text-[10px] text-white flex items-center justify-center rounded-full font-bold">0</span>
          </Link>
          
          <button 
            className="lg:hidden p-2 hover:bg-surface-container-high rounded-full transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-[70px] bg-surface z-40 transition-transform duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold font-headline ${
                isActive(link.href) ? 'text-teal-600' : 'text-on-surface'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-outline-variant/30 my-4" />
          <Link href="/account" className="text-xl font-medium text-on-surface-variant flex items-center gap-3">
            <span className="material-symbols-outlined">person</span> My Account
          </Link>
          <Link href="/wishlist" className="text-xl font-medium text-on-surface-variant flex items-center gap-3">
            <span className="material-symbols-outlined">favorite</span> Wishlist
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
