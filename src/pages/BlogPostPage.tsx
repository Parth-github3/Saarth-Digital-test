import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BLOG_POSTS } from '../constants/blog';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-charcoal text-white font-sans selection:bg-gold/30 selection:text-gold">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6 relative">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light mb-8 font-bold transition-colors group focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center gap-1.5">
                <Calendar size={16} className="text-gold" />
                {post.date}
              </div>
              <div className="w-1 h-1 rounded-full bg-gold/30" />
              <div className="flex items-center gap-1.5">
                <Clock size={16} className="text-gold" />
                {post.readTime}
              </div>
              <div className="w-1 h-1 rounded-full bg-gold/30" />
              <div className="flex items-center gap-1.5">
                <User size={16} className="text-gold" />
                {post.author}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-10">
              {post.title}
            </h1>

            <div className="rounded-3xl overflow-hidden border border-gold/20 mb-12 shadow-2xl">
              <img 
                src={post.image} 
                alt={post.title} 
                width={1200}
                height={675}
                className="w-full h-auto max-h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-ul:text-gray-300 prose-li:marker:text-gold">
              <Markdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </Markdown>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
