import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ArrowLeft, Sparkles, Plus, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS, ADD_ONS } from '@/src/constants/pricing';
import { cn } from '@/src/lib/utils';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const phoneNumber = "918160866015";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsApp = (planName: string) => {
    const message = `Hello Saarth Digital! I'm interested in the ${planName} plan.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSelectedPlan(null);
  };

  const handleEmail = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If contact element is not on this page, redirect to home with hash
      window.location.href = '/#contact';
    }
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen bg-charcoal relative">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-gold-light mb-12 font-bold transition-colors group focus:outline-none focus:ring-2 focus:ring-gold rounded-sm">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Back to Home
          </Link>

          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="gold-text-gradient">Pricing Plans</span></h1>
            <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
              Detailed breakdown of all our packages. From basic presence to full-scale digital dominance, we have a plan for every local business.
            </p>
          </div>

          {/* Main Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 pt-6 md:pt-0">
            {PRICING_PLANS.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "relative p-5 md:p-8 rounded-3xl md:rounded-[2rem] bg-charcoal-light border transition-all duration-500 flex flex-col",
                  plan.featured ? "border-gold shadow-[0_0_40px_rgba(212,175,55,0.1)] mt-6 md:mt-0" : "border-gold/10 hover:border-gold/30",
                  plan.marketingFeatured && "border-purple-500/50"
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-charcoal text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1 whitespace-nowrap shadow-lg">
                    <Sparkles size={12} /> Most Popular
                  </div>
                )}
                
                <div className="mb-5 md:mb-8">
                  <div className={cn(
                    "text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-2 px-2.5 py-1 rounded-full inline-block",
                    plan.marketingFeatured ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" : "bg-gold/10 text-gold border border-gold/20"
                  )}>
                    {plan.badge}
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-[10px] md:text-xs text-gray-400 font-medium mb-2 md:mb-4">{plan.who}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl md:text-4xl font-bold">{plan.price}</span>
                    {plan.priceSub && <span className="text-gray-400 text-[10px] md:text-sm">{plan.priceSub}</span>}
                  </div>
                  <p className="text-[9px] md:text-[10px] text-gray-400 mt-1">{plan.domainInfo}</p>
                </div>

                <div className="flex-1">
                  <ul className="space-y-2 md:space-y-4 mb-5 md:mb-8">
                    {plan.features.length > 0 ? (
                      plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 md:gap-3 text-[11px] md:text-sm text-gray-300">
                          <Check size={12} className="text-gold mt-0.5 shrink-0 md:w-4 md:h-4" />
                          {feat}
                        </li>
                      ))
                    ) : (
                      plan.categories?.map((cat, i) => (
                        <div key={i} className="mb-3 md:mb-6">
                          <div className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 md:mb-3 border-b border-gold/10 pb-1">{cat.title}</div>
                          {cat.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 md:gap-3 text-[11px] md:text-sm text-gray-300 mb-1.5 md:mb-3">
                              <Check size={12} className="text-gold mt-0.5 shrink-0 md:w-4 md:h-4" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </div>
                      ))
                    )}
                    {plan.notIncluded?.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 md:gap-3 text-[11px] md:text-sm text-gray-500">
                        <X size={12} className="text-gray-600 mt-0.5 shrink-0 md:w-4 md:h-4" aria-hidden="true" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 md:pt-6 border-t border-gold/5">
                  <div className="text-[8px] md:text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-2 md:mb-4">
                    Delivery: {plan.delivery}
                  </div>
                  <button
                    onClick={() => setSelectedPlan(plan.name)}
                    className={cn(
                      "w-full py-2.5 md:py-4 rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal",
                      plan.featured ? "gold-gradient text-charcoal" : "bg-charcoal border border-gold/20 text-white hover:border-gold"
                    )}
                  >
                    Select Plan
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="mb-24">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Powerful <span className="text-gold">Add-ons</span></h2>
              <p className="text-gray-400">Customize your package with these specialized services designed to give your business an extra edge.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ADD_ONS.map((addon, i) => (
                <div key={i} className="p-6 rounded-2xl bg-charcoal-light border border-gold/10 hover:border-gold/30 transition-all flex justify-between items-start group">
                  <div>
                    <h4 className="font-bold text-white mb-1 group-hover:text-gold transition-colors">{addon.name}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{addon.desc}</p>
                  </div>
                  <div className="text-gold font-bold text-sm whitespace-nowrap ml-4">
                    {addon.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ/Contact CTA */}
          <div className="bg-gold/5 border border-gold/20 rounded-[3rem] p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Package?</h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
              Every business is unique. If our standard plans don't fit your specific needs, let's talk and build a custom strategy for you.
            </p>
            <button
              onClick={() => setSelectedPlan("Custom Package")}
              className="px-10 py-4 gold-gradient text-charcoal font-bold rounded-xl inline-flex items-center gap-2 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal"
            >
              Contact Us Now
            </button>
          </div>
        </div>
      </main>

      {/* Selection Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlan(null)}
              className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-charcoal-light border border-gold/20 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="pricing-modal-title"
            >
              <div className="absolute top-0 right-0 p-6">
                <button 
                  onClick={() => setSelectedPlan(null)} 
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded-md p-1"
                  aria-label="Close modal"
                >
                  <X size={24} aria-hidden="true" />
                </button>
              </div>

              <div className="text-center mb-8">
                <h3 id="pricing-modal-title" className="text-2xl font-bold mb-2">How would you like to proceed?</h3>
                <p className="text-gray-400">Choose your preferred way to contact us about the <span className="text-gold font-bold">{selectedPlan}</span> plan.</p>
              </div>

              <div className="grid gap-4">
                <button
                  onClick={() => handleWhatsApp(selectedPlan)}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all group focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-charcoal-light"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-white shrink-0">
                    <MessageCircle size={24} fill="currentColor" aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white group-hover:text-[#25D366] transition-colors">WhatsApp Chat</div>
                    <div className="text-xs text-gray-400">Instant response & quick discussion</div>
                  </div>
                </button>

                <button
                  onClick={handleEmail}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-gold/10 border border-gold/20 hover:bg-gold/20 transition-all group focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal-light"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center text-charcoal shrink-0">
                    <Mail size={24} aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white group-hover:text-gold transition-colors">Email Inquiry</div>
                    <div className="text-xs text-gray-400">Detailed requirements & formal quote</div>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default PricingPage;
