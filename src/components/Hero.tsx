import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Zap, MapPin, MessageCircle } from 'lucide-react';

const Hero = () => {
  const trustItems = [
    { icon: Star, text: "Built for Local Businesses" },
    { icon: Zap, text: "3–5 Day Delivery" },
    { icon: MapPin, text: "Local Market Expertise" },
    { icon: MessageCircle, text: "WhatsApp First Approach" }
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gold/5 rounded-full blur-[80px] md:blur-[120px]"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gold/10 rounded-full blur-[60px] md:blur-[100px]"
        />
        
        {/* Flowing Gold Waves */}
        <div className="absolute inset-0 opacity-40">
          <svg className="absolute w-[300%] md:w-full h-full -left-[100%] md:left-0" preserveAspectRatio="none" viewBox="0 0 1440 800">
            <motion.path
              animate={{
                d: [
                  "M0,300 C280,200 420,400 720,300 C1020,200 1160,400 1440,300 L1440,800 L0,800 Z",
                  "M0,300 C280,400 420,200 720,300 C1020,400 1160,200 1440,300 L1440,800 L0,800 Z",
                  "M0,300 C280,200 420,400 720,300 C1020,200 1160,400 1440,300 L1440,800 L0,800 Z"
                ]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              fill="url(#gold-wave-1)"
            />
            <motion.path
              animate={{
                d: [
                  "M0,450 C280,550 420,350 720,450 C1020,550 1160,350 1440,450 L1440,800 L0,800 Z",
                  "M0,450 C280,350 420,550 720,450 C1020,350 1160,550 1440,450 L1440,800 L0,800 Z",
                  "M0,450 C280,550 420,350 720,450 C1020,550 1160,350 1440,450 L1440,800 L0,800 Z"
                ]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              fill="url(#gold-wave-2)"
            />
            <defs>
              <linearGradient id="gold-wave-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#F9E29C" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#AA8A2E" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="gold-wave-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#AA8A2E" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#F9E29C" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Star size={14} fill="currentColor" />
            #1 Local Growth Agency
          </motion.div>
          
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                }
              }
            }}
            className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6"
          >
            {"We Build ".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, display: 'none' },
                  visible: { opacity: 1, display: 'inline' }
                }}
              >
                {char}
              </motion.span>
            ))}
            <span className="text-gold">
              {"Lead Machines".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, display: 'none' },
                    visible: { opacity: 1, display: 'inline' }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {" For Local Business.".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, display: 'none' },
                  visible: { opacity: 1, display: 'inline' }
                }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ 
                duration: 0.8, 
                repeat: 3, 
                times: [0, 0.5, 0.5, 1],
                ease: "linear"
              }}
              className="inline-block w-[4px] h-[0.9em] bg-gold ml-1 align-middle"
            />
          </motion.h1>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed"
          >
            Stop chasing leads. Start attracting them. We specialize in turning local businesses into market leaders through high-performance websites and strategic local SEO.
          </motion.p>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gold hover:bg-gold-dark text-charcoal font-bold rounded-xl flex items-center justify-center gap-2 transition-all group focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal"
            >
              Scale Your Business
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-charcoal-light border border-gold/30 hover:border-gold text-white font-bold rounded-xl flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal"
            >
              View Our Services
            </a>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-wrap gap-x-8 gap-y-4"
          >
            {trustItems.map((item) => (
              <motion.div
                key={item.text}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                <item.icon size={18} className="text-gold" />
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-gold/20 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
            <img 
              src="/hero.webp" 
              alt="Digital Growth" 
              width={1200}
              height={800}
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
          </div>
          
          {/* Floating Stats Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-charcoal-light border border-gold/30 p-4 md:p-6 rounded-2xl shadow-2xl z-20 max-w-[180px]"
          >
            <div className="text-gold font-display text-xl md:text-2xl font-bold mb-1">Growth Systems</div>
            <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-bold leading-tight">Simple Systems That Drive Growth</div>
          </motion.div>
 
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-charcoal-light border border-gold/30 p-4 md:p-6 rounded-2xl shadow-2xl z-20 max-w-[200px]"
          >
            <div className="text-gold font-bold text-sm mb-1 italic">"Results Over Vanity"</div>
            <div className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider leading-tight">Designed for Results, Not Just Looks</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
