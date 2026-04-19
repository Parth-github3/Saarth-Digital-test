import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Layout, MapPin, Search, Share2, ShoppingBag, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    title: "High-Converting Websites",
    description: "Custom-built websites designed with one goal: turning visitors into paying customers for your local business.",
    icon: Layout,
    features: ["Mobile Responsive", "Speed Optimized", "SEO Ready"]
  },
  {
    title: "E-commerce Solutions",
    description: "Launch your online store with ease. We build powerful, secure, and user-friendly e-commerce platforms.",
    icon: ShoppingBag,
    features: ["Secure Payments", "Inventory Management", "Sales Tracking"]
  },
  {
    title: "GBP Optimization",
    description: "Dominate the local map pack. We optimize your Google Business Profile to ensure you're the first choice locally.",
    icon: MapPin,
    features: ["Review Strategy", "Local Citations", "Map Ranking"]
  },
  {
    title: "Local SEO Mastery",
    description: "Rank for the keywords that matter. We put your business in front of people actively searching for your services.",
    icon: Search,
    features: ["Keyword Research", "On-Page SEO", "Backlink Building"]
  },
  {
    title: "Social Media Marketing",
    description: "Build a community and stay top-of-mind. We manage your social presence to drive engagement and leads.",
    icon: Share2,
    features: ["Content Strategy", "Ad Management", "Brand Building"]
  }
];

// Duplicate 3 times for seamless infinite scrolling in both directions
const allServices = [...services, ...services, ...services];

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const itemWidth = 352; 
    const setWidth = itemWidth * services.length;

    if (el.scrollLeft === 0) {
      el.scrollLeft = setWidth;
    }

    let animationFrameId: number;
    let lastTimestamp: number;

    const scroll = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isInteracting && !isDragging) {
        el.scrollLeft += (60 * deltaTime) / 1000;
        
        if (el.scrollLeft >= setWidth * 2) {
          el.scrollLeft -= setWidth;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInteracting, isDragging]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el || isDragging) return;

    const itemWidth = 352;
    const setWidth = itemWidth * services.length;

    if (el.scrollLeft <= 0) {
      el.scrollLeft += setWidth;
    } else if (el.scrollLeft >= setWidth * 2) {
      el.scrollLeft -= setWidth;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    setIsInteracting(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsInteracting(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsInteracting(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = scrollRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    el.scrollLeft = scrollLeft - walk;
  };

  const scrollBy = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const itemWidth = 352;
    const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
    el.scrollTo({
      left: el.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="services" className="py-24 bg-charcoal-light/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold uppercase tracking-widest text-sm mb-4"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Services Built for <span className="text-gold">Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We don't just provide services; we provide solutions that impact your bottom line. Every strategy is tailored to your local market.
          </motion.p>
        </div>
      </div>

      <div className="relative group/container">
        {/* Gradient Overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />

        {/* Navigation Arrows */}
        <button
          onClick={() => scrollBy('left')}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-charcoal/80 border border-gold/20 flex items-center justify-center text-gold opacity-0 group-hover/container:opacity-100 transition-all hover:bg-gold hover:text-charcoal focus:outline-none hidden md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scrollBy('right')}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-charcoal/80 border border-gold/20 flex items-center justify-center text-gold opacity-0 group-hover/container:opacity-100 transition-all hover:bg-gold hover:text-charcoal focus:outline-none hidden md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>

        <div 
          ref={scrollRef}
          className={cn(
            "flex overflow-x-auto scrollbar-hide touch-pan-x select-none",
            isDragging ? "cursor-grabbing" : "cursor-grab"
          )}
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => setIsInteracting(false)}
          onScroll={handleScroll}
        >
          {allServices.map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              className="w-[320px] mx-4 group p-6 rounded-3xl bg-charcoal border border-gold/10 hover:border-gold/40 transition-all duration-500 relative overflow-hidden flex flex-col shrink-0"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-gold" size={20} />
              </div>
              
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="text-gold" size={24} />
              </div>
              
              <h3 className="text-lg font-bold mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-xs leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-1.5">
                {service.features.map((feature) => (
                  <li key={feature} className="text-[10px] font-bold text-gray-400 flex items-center gap-1.5">
                    <div className="w-0.5 h-0.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
