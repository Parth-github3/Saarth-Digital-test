import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const Navbar = () => {
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
    { name: 'Services', href: '#services' },
    { name: 'Our solution', href: '#solution' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Our Work', href: '/work' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-charcoal border-b border-gold/20 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Saarth Digital Logo" 
            width={160}
            height={52}
            className="h-10 md:h-[52px] w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback if image is not found
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden flex items-center gap-2">
            <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center font-display font-bold text-charcoal text-xl">
              S
            </div>
            <span className="font-display font-bold text-xl tracking-tighter">
              SAARTH <span className="text-gold">DIGITAL</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href.startsWith('#') ? `/${link.href}` : link.href}
              className="text-sm font-medium text-gray-300 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="px-5 py-2.5 bg-gold hover:bg-gold-dark text-charcoal font-bold rounded-full text-sm transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal"
          >
            Get Free Audit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold rounded-md p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>
    </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm md:hidden"
              style={{ zIndex: 60 }}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-charcoal border-l border-gold/20 p-8 md:hidden flex flex-col"
              style={{ zIndex: 70 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="flex justify-end mb-8">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold rounded-md p-1"
                  aria-label="Close navigation menu"
                >
                  <X size={32} aria-hidden="true" />
                </button>
              </div>
              
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                      className="text-2xl font-display font-bold text-white hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-8"
                >
                  <Link
                    to="/#contact"
                    className="w-full py-4 bg-gold text-charcoal font-bold rounded-xl text-center flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Free Audit
                    <ArrowRight size={20} aria-hidden="true" />
                  </Link>
                </motion.div>
              </div>

              <div className="mt-auto text-center">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Saarth Digital © 2026</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
