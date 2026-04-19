import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ProblemSection from '../components/ProblemSection';
import About from '../components/About';
import FeaturedWork from '../components/FeaturedWork';
import Testimonials from '../components/Testimonials';
import LeadForm from '../components/LeadForm';
import Footer from '../components/Footer';
import PricingSection from '../components/PricingSection';

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Remove hash from URL to prevent auto-scroll on reload
        window.history.replaceState(null, '', window.location.pathname);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-charcoal selection:bg-gold selection:text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ProblemSection />
        
        {/* Process Section */}
        <section id="process" className="py-24 bg-charcoal-light/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", damping: 25, stiffness: 100 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-gold">3-Step System</span> to Fix Your Growth</h2>
              <p className="text-gray-400 max-w-xl mx-auto">Simple. Effective. Transparent. Here is how we take your business to the next level.</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Audit & Strategy", desc: "We analyze your current presence and identify the biggest growth opportunities." },
                { step: "02", title: "Implementation", desc: "Our experts build your lead machine, from high-converting sites to SEO." },
                { step: "03", title: "Scale & Optimize", desc: "We continuously monitor and refine your campaigns to maximize ROI." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, type: "spring", damping: 20 }}
                  className="relative p-8 rounded-3xl bg-charcoal border border-gold/10"
                >
                  <div className="text-6xl font-display font-black text-gold/10 absolute top-4 right-8 select-none">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FeaturedWork />

        <About />
        <Testimonials />
        
        <PricingSection />

        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
