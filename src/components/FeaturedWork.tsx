import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants/projects';

const FeaturedWork = () => {
  // Show only the first 3 projects on the home page
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section id="work" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gold">Featured</span> Work
            </h2>
            <p className="text-gray-400 text-lg">
              A glimpse into the digital systems we've built to help local businesses dominate their markets.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/work" 
              className="group flex items-center gap-2 text-gold font-bold hover:gap-3 transition-all"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-charcoal-light rounded-[2rem] overflow-hidden border border-gold/10 hover:border-gold/30 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="hidden md:flex absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center backdrop-blur-[2px]">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gold text-charcoal rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-[10px] font-bold text-gold uppercase tracking-widest mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-gold transition-colors"
                >
                  View Demo
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
