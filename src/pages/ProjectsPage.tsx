import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowRight, Globe, Layout, ShoppingBag, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PROJECTS, Project } from '../constants/projects';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-charcoal text-white font-sans selection:bg-gold/30 selection:text-gold">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20 relative">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Our <span className="text-gold">Work</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              A showcase of the digital systems we've built to help businesses scale. From local shops to complex e-commerce platforms.
            </p>
          </motion.div>
        </section>

        {/* Filters */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-gold text-charcoal' 
                    : 'bg-charcoal-light border border-gold/10 text-gray-400 hover:border-gold/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-charcoal-light border border-gold/10 rounded-[2rem] overflow-hidden hover:border-gold/30 transition-all flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="hidden md:flex absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center backdrop-blur-[2px]">
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-gold text-charcoal rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
                      >
                        <ExternalLink size={24} />
                      </a>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-charcoal/80 backdrop-blur-md border border-gold/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-gold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold font-bold text-sm hover:gap-3 transition-all"
                    >
                      View Live Demo
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 mt-32 text-center">
          <div className="bg-gold/5 border border-gold/20 p-12 md:p-16 rounded-[3rem] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to be our next <span className="text-gold">Success Story?</span></h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto relative z-10">
              Let's build a high-converting digital system for your business that actually drives growth.
            </p>
            <a 
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-charcoal font-bold rounded-xl transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal relative z-10"
            >
              Start Your Project
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
