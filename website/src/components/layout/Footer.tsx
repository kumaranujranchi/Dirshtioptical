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
              {[
                { 
                  name: 'facebook', 
                  href: '#', 
                  path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' 
                },
                { 
                  name: 'instagram', 
                  href: '#', 
                  path: 'M12.315 2c2.43 0 2.784.01 3.8.058 1.016.048 1.565.214 1.933.356.49.19.84.418 1.208.786.368.368.596.718.786 1.208.142.368.308.917.356 1.933.048 1.016.058 1.371.058 3.8 0 2.43-.01 2.784-.058 3.8-.048 1.016-.214 1.565-.356 1.933-.19.49-.418.84-.786 1.208-.368.368-.718.596-1.208.786-.368.142-.917.308-1.933.356-1.016.048-1.371.058-3.8.058-2.43 0-2.784-.01-3.8-.058-1.016-.048-1.565-.214-1.933-.356-.49-.19-.84-.418-1.208-.786-.368-.368-.596-.718-.786-1.208-.142-.368-.308-.917-.356-1.933-.048-1.016-.058-1.371-.058-3.8 0-2.43.01-2.784.058-3.8.048-1.016.214-1.565.356-1.933.19-.49.418-.84.786-1.208.368-.368.718-.596 1.208-.786.368-.142.917-.308 1.933-.356 1.016-.048 1.371-.058 3.8-.058zm-.315-2c-2.472 0-2.782.01-3.753.055-1.025.047-1.722.21-2.333.447-.63.245-1.163.57-1.696 1.103-.533.534-.858 1.066-1.103 1.696-.237.61-.401 1.308-.448 2.333-.044.97-.055 1.28-.055 3.753 0 2.472.01 2.782.055 3.753.047 1.025.21 1.722.447 2.333.245.63.57 1.163 1.103 1.696.534.533 1.066.858 1.696 1.103.61.237 1.308.401 2.333.448.97.044 1.28.055 3.753.055 2.472 0 2.782-.01 3.753-.055 1.025-.047 1.722-.21 2.333-.447.63-.245 1.163-.57 1.696-1.103.533-.534.858-1.066 1.103-1.696.237-.61.401-1.308.448-2.333.044-.97.055-1.28.055-3.753 0-2.472-.01-2.782-.055-3.753-.047-1.025-.21-1.722-.447-2.333-.245-.63-.57-1.163-1.103-1.696-.534-.533-1.066-.858-1.696-1.103-.61-.237-1.308-.401-2.333-.448-.97-.044-1.28-.055-3.753-.055zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16.162a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z' 
                },
                { 
                  name: 'youtube', 
                  href: '#', 
                  path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' 
                },
                { 
                  name: 'whatsapp', 
                  href: 'https://wa.me/919334412345', 
                  path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.422.002 12.054c0 2.12.554 4.189 1.602 6.033L0 24l6.105-1.602a11.832 11.832 0 005.94 1.597h.005c6.634 0 12.043-5.422 12.046-12.056a11.84 11.84 0 00-3.53-8.513' 
                },
              ].map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-teal-600 hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
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
