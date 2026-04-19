import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Target, Users, TrendingUp, ShieldCheck, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const differentiators = [
    {
      icon: Target,
      title: "Strategy First, Always",
      desc: "We don't jump into execution blindly. Every decision is backed by logic, data, and clear intent."
    },
    {
      icon: Users,
      title: "Human-Centered Marketing",
      desc: "No robotic content. No generic messaging. We help your brand connect genuinely."
    },
    {
      icon: TrendingUp,
      title: "Results Over Vanity Metrics",
      desc: "We don't chase likes—we chase revenue, leads, and real growth."
    },
    {
      icon: ShieldCheck,
      title: "Transparency at Every Step",
      desc: "You'll always know what we're doing, why we're doing it, and how it impacts your business."
    },
    {
      icon: Globe,
      title: "Local + Global Expertise",
      desc: "From dominating local search to scaling internationally—we understand both worlds."
    }
  ];

  return (
    <div className="min-h-screen bg-charcoal text-white font-sans selection:bg-gold/30 selection:text-gold">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32 relative">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              More Than an Agency — <br />
              <span className="text-gold">Your Growth Partner</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We don't just build websites or run campaigns. We build systems that grow your business—predictably, sustainably, and profitably.
            </p>
          </motion.div>
        </section>

        {/* Our Story */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Where It All <span className="text-gold">Started</span></h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Behind every great brand is a story—and ours begins with a simple frustration.
                </p>
                <p>
                  We saw too many businesses struggling online. Confused by complex strategies. Wasting money on marketing that didn't deliver. Stuck guessing what works.
                </p>
                <p>
                  That's why Saarth Digital was built.
                </p>
                <p>
                  The name "Saarth" represents direction, purpose, and meaningful growth. Founded by Sahil and Parth, this agency was never meant to be just another service provider—it was meant to be a reliable growth partner.
                </p>
                <p>
                  From local businesses trying to dominate their area to international clients scaling aggressively, our goal has always been the same:
                </p>
                <ul className="list-none space-y-2 mt-4 font-bold text-white">
                  <li className="flex items-center gap-2"><ArrowRight className="text-gold" size={20} /> Remove confusion.</li>
                  <li className="flex items-center gap-2"><ArrowRight className="text-gold" size={20} /> Deliver clarity.</li>
                  <li className="flex items-center gap-2"><ArrowRight className="text-gold" size={20} /> Drive real results.</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border border-gold/20 shadow-[0_0_50px_rgba(212,175,55,0.1)] aspect-square md:aspect-auto md:h-full"
            >
              <img 
                src="/about.webp" 
                alt="About Saarth Digital" 
                width={800}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Beliefs & How We Work */}
        <section className="bg-charcoal-light py-24 mb-32 border-y border-gold/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Digital Growth Shouldn't Feel Like a <span className="text-gold">Gamble</span></h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>We built this company on a simple premise: Digital growth shouldn't feel like a guessing game.</p>
                  <p>Most agencies focus on deliverables—websites, posts, ads. We focus on outcomes: <strong>More leads, Better conversions, Higher revenue.</strong></p>
                  <p>We don't just "complete projects." We build growth ecosystems where every piece—from your website to your social media to AI automation—works together.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6">We Work <span className="text-gold">With You</span>, Not For You</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>When you partner with Saarth Digital, you're not hiring a vendor. You're gaining a team that thinks like business owners, acts like growth strategists, and executes like specialists.</p>
                  <p>We take time to understand your market, your audience, and your goals. And then we build a tailor-made strategy that actually makes sense for your business.</p>
                  <p className="font-bold text-white">No copy-paste templates. No unnecessary complexity. Just smart, focused execution.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Businesses Choose <span className="text-gold">Saarth Digital</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-charcoal-light p-8 rounded-2xl border border-gold/10 hover:border-gold/30 transition-colors"
              >
                <diff.icon className="text-gold mb-6" size={32} />
                <h3 className="text-xl font-bold mb-3">{diff.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{diff.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission & Promise */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
              className="bg-gold/5 border border-gold/20 p-10 rounded-3xl"
            >
              <h2 className="text-3xl font-bold mb-6 text-gold">Our Mission</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>Our mission is simple: To make digital growth clear, accessible, and profitable for every business owner.</p>
                <p>Whether you're running a local storefront or scaling a global brand, we remove the technical overwhelm and replace it with systems that actually work.</p>
                <p>We handle the digital side—so you can focus on what you do best: running your business.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-charcoal-light border border-white/10 p-10 rounded-3xl"
            >
              <h2 className="text-3xl font-bold mb-6">What You Can Expect</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>We don't believe in overpromising. We believe in delivering. When you work with Saarth Digital, you get:</p>
                <ul className="list-disc pl-5 space-y-2 text-white font-medium">
                  <li>Complete transparency</li>
                  <li>Honest communication</li>
                  <li>Zero fluff strategies</li>
                  <li>A team that treats your business like their own</li>
                </ul>
                <p className="pt-2">Every decision we make is focused on one goal: Turning your online presence into a consistent revenue engine.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="bg-charcoal-light p-12 md:p-16 rounded-[3rem] border border-gold/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Let's Build Something That <span className="text-gold">Actually Grows</span></h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
              If you're tired of guessing and ready to scale with clarity, strategy, and confidence—you're in the right place. Let's build a system that works for your business.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-charcoal font-bold rounded-xl transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal relative z-10"
            >
              Let's Talk Strategy
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
