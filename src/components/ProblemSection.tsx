import React from 'react';
import { motion } from 'motion/react';
import { XCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    "Your business is hard to find on Google",
    "Customers can’t quickly understand what you offer",
    "No proper website or outdated design",
    "No easy way to contact you instantly",
    "You rely only on Instagram or word of mouth"
  ];

  return (
    <section id="solution" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-gold font-bold uppercase tracking-widest text-sm mb-4 flex items-center justify-center gap-2">
              <AlertTriangle size={16} />
              The Reality Check
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              You’re <span className="text-gold">Losing Customers</span> Without Realizing It
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side: Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", damping: 25, stiffness: 100 }}
            className="p-8 md:p-12 rounded-[2.5rem] border border-white/5 bg-white/2"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
              <span className="text-gray-400">What’s Going Wrong?</span>
            </h3>
            <ul className="space-y-6">
              {problems.map((problem, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <XCircle className="text-gray-400 mt-1 shrink-0 group-hover:text-red-400/50 transition-colors" size={20} />
                  <span className="text-gray-300 text-lg leading-tight">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
 
          {/* Right Side: Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", damping: 25, stiffness: 100 }}
            className="p-8 md:p-12 rounded-[2.5rem] border border-gold/20 bg-gold/5 relative group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <CheckCircle2 size={120} className="text-gold" />
            </div>
            
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gold">
              Here’s How We Fix It
            </h3>
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <p className="text-white text-lg font-medium leading-relaxed">
                  We build a simple, powerful system that makes your business easy to find, easy to trust, and easy to contact.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  From a high-converting website to Google visibility and WhatsApp integration — everything is designed to bring you more calls, more inquiries, and more paying customers.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-gold font-bold hover:underline group focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
              >
                Get your free audit today
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  →
                </motion.span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Strong Closing Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center px-4"
        >
          <div className="inline-block px-6 py-4 md:px-8 md:py-4 rounded-2xl bg-charcoal-light border border-gold/10 shadow-xl">
            <p className="text-lg md:text-2xl font-bold text-white italic leading-tight">
              "If your customers can’t find you or contact you easily, <span className="text-gold">they will choose your competitor.</span>"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
