import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-teal-600 font-headline flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">visibility</span>
              <span>Drishti Optical</span>
            </Link>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
              Providing precision eye care and premium fashion eyewear since 1995. Your vision is our expertise.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'youtube', 'linked_camera'].map((icon) => (
                <a key={icon} href="#" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-primary mb-8 font-headline uppercase tracking-widest text-xs">Explore</h4>
            <ul className="grid grid-cols-1 gap-4">
              {[
                { name: 'About Our Clinic', href: '/about' },
                { name: 'Eye Health Blog', href: '/blog' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Store Locator', href: '/stores' },
                { name: 'Book Eye Test', href: '/eye-test' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-on-surface-variant hover:text-teal-600 transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Collections */}
          <div>
            <h4 className="font-bold text-primary mb-8 font-headline uppercase tracking-widest text-xs">Collections</h4>
            <ul className="grid grid-cols-1 gap-4">
              {[
                { name: 'Eyeglasses', href: '/category/eyeglasses' },
                { name: 'Sunglasses', href: '/category/sunglasses' },
                { name: 'Contact Lenses', href: '/category/contact-lenses' },
                { name: 'Computer Glasses', href: '/category/computer-glasses' },
                { name: 'Premium Brands', href: '/category/premium' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-on-surface-variant hover:text-teal-600 transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-primary mb-2 font-headline uppercase tracking-widest text-xs">Get in Touch</h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-teal-600">location_on</span>
                <p className="text-sm text-on-surface-variant">Main Road, Ranchi, Jharkhand <br /> Pin - 834001</p>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-teal-600">call</span>
                <p className="text-sm text-on-surface-variant">+91 93344 12345</p>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-teal-600">mail</span>
                <p className="text-sm text-on-surface-variant">care@drishtioptical.com</p>
              </div>
            </div>
            
            <div className="mt-4 p-4 rounded-xl bg-surface-container-high/40 border border-outline-variant/30">
              <p className="text-xs font-bold text-primary mb-2 uppercase tracking-tight">Open Hours</p>
              <p className="text-xs text-on-surface-variant">Mon - Sat: 10:00 AM - 08:30 PM</p>
              <p className="text-xs text-secondary mt-1">Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-on-surface-variant font-medium">
            © {currentYear} Drishti Optical. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] uppercase tracking-widest font-bold text-outline hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[10px] uppercase tracking-widest font-bold text-outline hover:text-primary transition-colors">Terms of Use</Link>
            <Link href="/sitemap" className="text-[10px] uppercase tracking-widest font-bold text-outline hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
