import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ArrowRight, Sparkles, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '@/src/constants/pricing';
import { cn } from '@/src/lib/utils';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const phoneNumber = "918160866015";

  // Show only first 3 plans as requested
  const displayPlans = PRICING_PLANS.slice(0, 3);

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
    }
    setSelectedPlan(null);
  };

  return (
    <section id="pricing" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold uppercase tracking-widest text-sm mb-4"
          >
            Pricing Plans
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Transparent Pricing for <span className="text-gold">Every Stage</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Choose a package that fits your business needs. No hidden costs, just clear value designed to scale your local presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 pt-6 md:pt-0">
          {displayPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                damping: 25,
                stiffness: 100
              }}
              className={cn(
                "relative p-5 md:p-8 rounded-3xl md:rounded-[2rem] bg-charcoal-light border transition-all duration-500 flex flex-col",
                plan.featured ? "border-gold md:scale-105 z-10 shadow-[0_0_40px_rgba(212,175,55,0.15)] mt-6 md:mt-0" : "border-gold/10 hover:border-gold/30",
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
                      <div key={i} className="mb-3 md:mb-4">
                        <div className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 md:mb-2">{cat.title}</div>
                        {cat.items.slice(0, 2).map((item, j) => (
                          <li key={j} className="flex items-start gap-2 md:gap-3 text-[11px] md:text-sm text-gray-300 mb-1.5 md:mb-2">
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
                  Get Started
                  <ArrowRight size={14} className="md:w-4 md:h-4" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal-light border border-gold/30 hover:border-gold text-white font-bold rounded-xl transition-all group focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal"
          >
            Explore All Plans
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Selection Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 flex items-center justify-center px-6" style={{ zIndex: 100 }}>
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
              aria-labelledby="modal-title"
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
                <h3 id="modal-title" className="text-2xl font-bold mb-2">How would you like to proceed?</h3>
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
    </section>
  );
};

export default PricingSection;
