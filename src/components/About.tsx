import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { icon: Target, label: "Targeted Leads", value: "50k+" },
    { icon: Zap, label: "Growth Rate", value: "3x" },
    { icon: TrendingUp, label: "ROI Focused", value: "100%" },
    { icon: Award, label: "Local Awards", value: "12" }
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", damping: 25, stiffness: 100 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-gold/20 aspect-video">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                preload="none"
                poster="/hero.webp"
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              >
                <source src="/abouthome.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10" />
            
            <div className="absolute -bottom-6 -right-6 bg-gold p-6 md:p-8 rounded-3xl text-charcoal z-20 max-w-[160px]">
              <div className="text-lg md:text-xl font-bold leading-tight uppercase tracking-tight">Helping Businesses Go Digital</div>
            </div>
          </motion.div>
 
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", damping: 25, stiffness: 100 }}
            >
              <div className="text-gold font-bold uppercase tracking-widest text-sm mb-4">About Saarth Digital</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Driven by <span className="text-gold">Passion</span>. Defined by <span className="text-gold">Results</span>.
              </h2>
              <div className="space-y-4 text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                <p>
                  Behind every great brand is a story of collaboration. The name "Saarth" isn't just a catchy word—it represents the shared vision of our founders, <span className="text-white font-bold">Sahil and Parth</span>.
                </p>
                <p>
                  We built this company on a simple premise: Digital growth shouldn't feel like a guessing game. We don't just deliver services; we partner with you.
                </p>
                <p>
                  Whether you are a growing local business looking to dominate your neighborhood or a US-based company aiming to scale, we craft tailor-made digital strategies.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-6 md:gap-8 mb-10">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={stat.label} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", damping: 20 }}
                    className="space-y-1"
                  >
                    <div className="flex items-center gap-2 text-gold">
                      <stat.icon size={18} aria-hidden="true" />
                      <span className="text-xl md:text-2xl font-bold text-white">{stat.value}</span>
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <Link 
                to="/about"
                className="inline-block px-8 py-4 bg-charcoal-light border border-gold/30 hover:border-gold text-white font-bold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal"
              >
                Learn Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
