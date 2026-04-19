import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BLOG_POSTS } from '../constants/blog';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-charcoal text-white font-sans selection:bg-gold/30 selection:text-gold">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6 mb-20 relative">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Insights & <span className="text-gold">Strategies</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Actionable advice, industry trends, and proven strategies to help your local business dominate the digital landscape.
            </p>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-charcoal-light border border-gold/10 rounded-3xl overflow-hidden hover:border-gold/30 transition-colors group flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    width={640}
                    height={360}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-light to-transparent opacity-60" />
                </Link>
                
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-gold" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-gold" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`} className="block mb-4">
                    <h2 className="text-xl md:text-2xl font-bold group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gold/10">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
                      <User size={16} className="text-gold" />
                      {post.author}
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-gold hover:text-gold-light transition-colors p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-gold rounded-full"
                      aria-label={`Read more about ${post.title}`}
                    >
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
