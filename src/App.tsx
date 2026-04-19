/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import WhatsAppCTA from './components/WhatsAppCTA';
import CustomCursor from './components/CustomCursor';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));

const Loader = () => (
  <div className="min-h-screen bg-charcoal flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold origin-left"
        style={{ scaleX, zIndex: 100 }}
      />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/work" element={<ProjectsPage />} />
        </Routes>
      </Suspense>
      <WhatsAppCTA />
    </BrowserRouter>
  );
}


