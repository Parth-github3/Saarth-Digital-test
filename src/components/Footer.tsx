import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal border-t border-gold/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img 
                src="/logo.png" 
                alt="Saarth Digital Logo" 
                width={140}
                height={42}
                className="h-[42px] w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden flex items-center gap-2">
                <div className="w-8 h-8 gold-gradient rounded flex items-center justify-center font-display font-bold text-charcoal">
                  S
                </div>
                <span className="font-display font-bold text-lg tracking-tighter">
                  SAARTH <span className="text-gold">DIGITAL</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering local businesses to thrive in the digital age. We build the systems that drive your growth.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1Cn37cYNjw/" },
                { Icon: Twitter, label: "Twitter", href: "#" },
                { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/saarth.digital?igsh=MWR5eXd3cXdmcWRzdQ==" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" }
              ].map(({ Icon, label, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  aria-label={label} 
                  className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold transition-colors">Website Design</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">E-commerce Stores</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">GBP Optimization</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Local SEO</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Social Media</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/work" className="hover:text-gold transition-colors">Our Work</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Get local marketing tips delivered to your inbox.</p>
            <div className="flex gap-2">
              <label htmlFor="newsletterEmail" className="sr-only">Email address for newsletter</label>
              <input 
                id="newsletterEmail"
                type="email" 
                placeholder="Email" 
                className="bg-charcoal-light border border-gold/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold w-full text-white"
              />
              <button aria-label="Subscribe to newsletter" className="bg-gold text-charcoal p-2 rounded-lg hover:bg-gold-dark transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal">
                <ArrowUp size={18} className="rotate-45" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Saarth Digital. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link to="/privacy" className="hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold rounded-sm">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold rounded-sm">Terms of Service</Link>
          </div>
          <button 
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-charcoal-light border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <ArrowUp size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
