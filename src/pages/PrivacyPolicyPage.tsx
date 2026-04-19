import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-charcoal text-white font-sans selection:bg-gold/30 selection:text-gold">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-6 relative">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Privacy <span className="text-gold">Policy</span></h1>
            <p className="text-gray-400 mb-12 text-lg">Last Updated: April 7, 2026</p>

            <div className="space-y-12 text-gray-300 leading-relaxed">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-gold">1.</span> Information We Collect
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">1.1. Personal Identifiable Information (PII)</h3>
                    <p>We collect information that identifies you as an individual or relates to an identifiable individual. This occurs when you interact with Saarth Digital through our inquiry forms, newsletter subscriptions, or project onboarding. This data includes:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>Contact Details:</strong> Your full name, professional email address, and phone number.</li>
                      <li><strong>Professional Identity:</strong> Your job title, company name, and industry.</li>
                      <li><strong>Geographic Information:</strong> Your business location or time zone to facilitate seamless project management across global regions.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">1.2. Technical and Usage Data</h3>
                    <p>To optimize the performance of https://saarthdigital.in/ and ensure a superior user experience, we automatically collect technical data when you visit our site. This includes:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>Device and Browser Analytics:</strong> Your IP address, browser type, operating system, and device identifiers.</li>
                      <li><strong>Navigation Patterns:</strong> Page views, time spent on specific sections, click-through rates, and the referral source that brought you to our agency.</li>
                      <li><strong>Diagnostic Data:</strong> Technical logs that help our developers identify and resolve site errors to maintain a 99.9% uptime for our digital resources.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">1.3. Client Project Data</h3>
                    <p>As a growth-focused studio, we require specific business insights to deliver high-ROI results. During the course of our partnership, we may collect:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>Business Strategy Assets:</strong> Marketing goals, target audience personas, and competitor lists provided during consultations.</li>
                      <li><strong>Technical Credentials:</strong> Temporary access to CMS platforms (like WordPress), hosting panels (like Hostinger), and analytics dashboards required for SEO audits and web development.</li>
                      <li><strong>Financial Information:</strong> Billing addresses and tax identification numbers (GST/VAT) necessary for secure invoicing and transaction processing.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">1.4. Cookies and Tracking Technologies</h3>
                    <p>We utilize industry-standard "cookies" and similar tracking technologies (such as web beacons and pixels) to personalize your experience. These tools allow us to remember your preferences for future visits, track the effectiveness of our own SEO and digital marketing campaigns, and deliver relevant content and advertisements based on your interests. You have the right to manage your cookie preferences through your browser settings at any time.</p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-gold">2.</span> How We Use Your Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">2.1. Delivering Digital Excellence</h3>
                    <p>The primary reason we collect your data is to provide the high-impact digital solutions you've requested. This includes:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li><strong>Custom Web Development:</strong> Utilizing your business details to architect responsive, high-performance websites on platforms like Hostinger or WordPress.</li>
                      <li><strong>Strategic SEO Implementation:</strong> Analyzing your industry data to build data-driven SEO roadmaps that improve your organic rankings on Google and Bing.</li>
                      <li><strong>AI & Automation Workflows:</strong> Using your operational data to build and train custom AI chatbots that enhance your customer service efficiency.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">2.2. Professional Communication & Project Management</h3>
                    <p>At Saarth Digital, we value transparent and timely communication. Your contact information allows us to provide project status updates, schedule strategy consultations, and respond to your inquiries with accuracy.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">2.3. Optimization of Agency Services</h3>
                    <p>We are constantly refining our own digital presence. We use aggregated, non-identifying technical data to monitor website performance and user behavior to identify areas for UX (User Experience) improvement.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">2.4. Marketing and Relationship Building</h3>
                    <p>To help your business stay ahead of digital trends, we may use your information to send curated newsletters featuring SEO tips, web design trends, and agency updates (you may opt-out at any time).</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">2.5. Administrative and Legal Compliance</h3>
                    <p>We use your data for essential administrative tasks, including processing payments, issuing professional tax invoices, and maintaining records for audit purposes and tax compliance.</p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-gold">3.</span> Data Security
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">3.1. Industry-Standard Encryption</h3>
                    <p>We treat your data with the highest level of technical care. All communication and data transfers through https://saarthdigital.in/ are secured using SSL/TLS (Secure Sockets Layer/Transport Layer Security) encryption.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">3.2. Secure Internal Protocols</h3>
                    <p>We implement strict internal access controls, including the Principle of Least Privilege, enterprise-grade encrypted password management tools, and Two-Factor Authentication (2FA) for all internal agency accounts.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">3.3. Data Retention and Disposal</h3>
                    <p>We do not hold onto your information longer than necessary. Once data is no longer required for project goals or legal compliance, it is securely deleted from our local and cloud-based storage systems.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">3.4. Proactive Monitoring & Breach Response</h3>
                    <p>We regularly monitor our digital infrastructure for vulnerabilities. In the highly unlikely event of a data breach, we are committed to notifying you and the relevant regulatory authorities within 72 hours.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">3.5. Global Compliance Standards</h3>
                    <p>Because Saarth Digital serves a global clientele including businesses in the USA and India, our security practices are designed to align with international standards.</p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-gold">4.</span> Third-Party Sharing
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">4.1. Zero-Sale Policy</h3>
                    <p>Saarth Digital operates on a foundation of professional integrity. We do not sell, rent, or trade your personal information or business data to third-party telemarketers or data brokers for their own commercial gain.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">4.2. Trusted Service Providers</h3>
                    <p>We partner with select third-party service providers who assist us in our operations, such as infrastructure partners (Hostinger, Google Cloud), analytics platforms, and secure payment processors.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">4.3. Legal and Regulatory Disclosure</h3>
                    <p>We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation or protect the rights of Saarth Digital.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">4.4. Business Transfers</h3>
                    <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business assets, ensuring the acquiring entity adheres to this Privacy Policy.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">4.5. Client-Authorized Integrations</h3>
                    <p>We may share data with third-party platforms at your explicit request, such as connecting your website to CRM systems or social media APIs.</p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-gold">5.</span> Cookie Policy and Tracking Technologies
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">5.1. Understanding Digital "Cookies"</h3>
                    <p>To provide a seamless and personalized experience, we use "cookies"—small text files placed on your device that allow us to remember your preferences and recognize return visits.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">5.2. How We Categorize Our Cookies</h3>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li><strong>Strictly Necessary Cookies:</strong> Essential for core technical functionality.</li>
                      <li><strong>Performance & Analytical Cookies:</strong> Help us identify which SEO strategies are working.</li>
                      <li><strong>Functional Cookies:</strong> Remember choices like language or region.</li>
                      <li><strong>Targeting & Marketing Cookies:</strong> Used to deliver relevant advertisements based on your interests.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">5.3. Web Beacons and Tracking Pixels</h3>
                    <p>We may use web beacons in our newsletters to measure the success of our email marketing campaigns and understand if a specific "Call to Action" is driving business growth.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">5.4. Your Power to Choose (Opt-Out)</h3>
                    <p>You have the right to accept or decline cookies through your browser settings. Please note that disabling certain cookies may limit your ability to use some interactive features on our website.</p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-gold">6.</span> Proprietary Rights & Copyright Protection
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">6.1. Ownership of Agency Assets</h3>
                    <p>All original content featured on https://saarthdigital.in/ is the exclusive intellectual property of Saarth Digital and is protected by Indian and International copyright laws.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">6.2. Prohibition of Unauthorized Reproduction</h3>
                    <p>We maintain a zero-tolerance policy regarding the unauthorized copying or "cloning" of our digital assets, including website templates, source code, and SEO strategies.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">6.3. Protection of Client Portfolio Work</h3>
                    <p>While final products belong to the client, the underlying framework and unique coding logic remain the property of Saarth Digital.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">6.4. Enforcement and Legal Recourse</h3>
                    <p>Saarth Digital actively monitors the web for plagiarism and reserves the right to issue DMCA notices and pursue legal action for damages.</p>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
