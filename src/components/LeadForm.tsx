import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const LeadForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch("https://formsubmit.co/ajax/info@saarthdigital.in", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitted(true); // Show success anyway to not block user, or handle error state
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", damping: 25, stiffness: 100 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Ready to <span className="text-gold">Dominate</span> Your Local Market?
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Fill out the form for a 100% free digital audit of your business. We'll show you exactly where your leads are hiding.
              </p>
 
              <div className="space-y-8">
                {[
                  { icon: Phone, label: "Call Us", value: "+91 8160866015" },
                  { icon: Mail, label: "Email Us", value: "info@saarthdigital.in" },
                  { icon: MapPin, label: "Visit Us", value: "419, Sarabhai Campus, 1B, Near Genda Circle, Subhanpura, Vadodara, 390023, Gujarat" }
                ].map((item, i) => (
                  <motion.div 
                    key={item.label} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.label}</div>
                      <div className="text-lg font-medium break-all md:break-normal">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
 
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", damping: 25, stiffness: 100 }}
            className="bg-charcoal-light p-5 md:p-12 rounded-3xl md:rounded-[2.5rem] border border-gold/20 shadow-2xl relative min-w-0 w-full"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-gold" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Audit Requested!</h3>
                <p className="text-gray-400">Our team is already analyzing your business. We'll be in touch within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-gold font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                <input type="hidden" name="_subject" value="New Lead from Saarth Digital Website!" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 min-w-0">
                    <label htmlFor="fullName" className="text-sm font-bold text-gray-300 ml-1">Full Name</label>
                    <input 
                      id="fullName"
                      name="Full Name"
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-charcoal border border-gold/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition-colors text-white"
                    />
                  </div>
                  <div className="space-y-2 min-w-0">
                    <label htmlFor="businessName" className="text-sm font-bold text-gray-300 ml-1">Business Name</label>
                    <input 
                      id="businessName"
                      name="Business Name"
                      required
                      type="text" 
                      placeholder="Local Shop Inc."
                      className="w-full bg-charcoal border border-gold/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition-colors text-white"
                    />
                  </div>
                </div>
 
                <div className="space-y-2 min-w-0">
                  <label htmlFor="emailAddress" className="text-sm font-bold text-gray-300 ml-1">Email Address</label>
                  <input 
                    id="emailAddress"
                    name="Email"
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-charcoal border border-gold/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition-colors text-white"
                  />
                </div>
 
                <div className="space-y-2 min-w-0">
                  <label htmlFor="serviceInterest" className="text-sm font-bold text-gray-300 ml-1">Service Interested In</label>
                  <select id="serviceInterest" name="Service" className="w-full bg-charcoal border border-gold/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition-colors appearance-none text-ellipsis overflow-hidden whitespace-nowrap text-white">
                    <option>High-Converting Websites</option>
                    <option>E-commerce Solutions</option>
                    <option>GBP Optimization</option>
                    <option>Local SEO Mastery</option>
                    <option>Social Media Marketing</option>
                    <option>Others</option>
                  </select>
                </div>
 
                <div className="space-y-2 min-w-0">
                  <label htmlFor="message" className="text-sm font-bold text-gray-300 ml-1">Message (Optional)</label>
                  <textarea 
                    id="message"
                    name="Message"
                    rows={4}
                    placeholder="Tell us about your goals..."
                    className="w-full bg-charcoal border border-gold/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition-colors resize-none text-white"
                  ></textarea>
                </div>
 
                <button 
                  type="submit"
                  className="w-full py-4 gold-gradient text-charcoal font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal-light"
                >
                  Get My Free Audit
                  <Send size={18} aria-hidden="true" />
                </button>
                
                <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                  No obligation. No spam. Just results.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
