import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfServicePage = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Terms of <span className="text-gold">Service</span></h1>
            <p className="text-gray-400 mb-12 text-lg">Last Updated: April 7, 2026</p>

            <div className="space-y-12 text-gray-300 leading-relaxed">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-gold">1.</span> Acceptance of Terms
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">1.1. A Binding Agreement</h3>
                    <p>By accessing, browsing, or utilizing the services provided by Saarth Digital, including our website, digital marketing consultations, and web development resources, you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service. This agreement constitutes a binding legal contract between you and Saarth Digital. If you do not agree to these terms, we kindly ask that you discontinue the use of our website and services immediately.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">1.2. Electronic Consent</h3>
                    <p>In the digital age, your use of our platform serves as your electronic signature. Whether you are inquiring about a new SEO strategy, reviewing a web design portfolio, or engaging with our AI-driven business solutions, your continued interaction signifies your ongoing acceptance of our operational guidelines and privacy protocols.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">1.3. Eligibility and Authority</h3>
                    <p>By accepting these terms, you represent and warrant that:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>You are at least 18 years of age or the age of legal majority in your jurisdiction.</li>
                      <li>You possess the legal authority to enter into this agreement, either for yourself or on behalf of a corporate entity.</li>
                      <li>All information provided to Saarth Digital during the inquiry or onboarding process is accurate, current, and complete.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">1.4. Modifications to Terms</h3>
                    <p>The digital landscape evolves rapidly, and so do our services. Saarth Digital reserves the right to update or modify these Terms of Service at any time without prior individual notice. Any changes will be reflected by the "Last Updated" date at the top of this page. Your continued use of the site following any modifications constitutes your acceptance of the revised terms. We encourage you to review this section periodically to stay informed of our latest business practices.</p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-gold">2.</span> Services Provided
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">2.1. Scope of Digital Solutions</h3>
                    <p>Saarth Digital is a full-service business growth Company. We specialize in bridging the gap between traditional business models and the modern digital landscape. Our core services include, but are not limited to:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li><strong>Custom Web Design & Development:</strong> Crafting high-conversion, responsive websites tailored to user experience (UX) and brand identity. This includes landing page optimization, e-commerce integration, and performance tuning.</li>
                      <li><strong>Search Engine Optimization (SEO):</strong> Implementing data-driven strategies to improve organic visibility. Our focus includes local SEO for brick-and-mortar businesses, technical SEO audits, and high-authority link-building.</li>
                      <li><strong>Digital Marketing & Lead Generation:</strong> Executing targeted campaigns across social media and search engines to drive qualified traffic and maximize ROI.</li>
                      <li><strong>AI & Automation Integration:</strong> Deploying intelligent AI chatbots and workflow automation tools to streamline customer interactions and operational efficiency.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">2.2. Service Agreements and Proposals</h3>
                    <p>While these Terms of Service provide a general framework, the specific deliverables, project timelines, and cost structures for any engagement will be outlined in a dedicated Service Agreement or Project Proposal. In the event of a conflict between these Terms and a specific Service Agreement, the terms of the individual Service Agreement shall prevail.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">2.3. Project Timelines and Milestones</h3>
                    <p>At Saarth Digital, we pride ourselves on efficiency. Estimated delivery dates are provided as a guide based on the current project scope. However, timelines are subject to change based on client feedback cycles, third-party API dependencies, or changes in project requirements. We remain committed to transparent communication regarding any adjustments to the delivery schedule.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">2.4. Revision Policy</h3>
                    <p>To ensure the final product meets your vision, we include a set number of revision rounds as specified in your initial proposal. Revisions are defined as minor adjustments to the existing scope. Requests that fall outside the original project brief (New Feature Requests) will be evaluated and quoted as additional work to ensure project integrity and fair compensation.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">2.5. Third-Party Services</h3>
                    <p>Our services may involve the integration of third-party platforms (e.g., Hostinger, WordPress plugins, Google Workspace, or Payment Gateways). While we facilitate these integrations, Saarth Digital is not responsible for the independent uptime, policy changes, or technical failures of these third-party providers.</p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-gold">3.</span> Intellectual Property
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">3.1. Ownership of Final Deliverables</h3>
                    <p>At Saarth Digital, we believe in empowering our clients. Upon receipt of final payment, all rights, titles, and interests in the "Final Deliverables" (specifically the finalized website design, approved logos, and custom-written copy) are transferred to the Client. This grants you the full authority to use, modify, and host your digital assets as you see fit for your business operations.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">3.2. Preliminary Work and Rejected Concepts</h3>
                    <p>To maintain our creative integrity, Saarth Digital retains ownership of all preliminary designs, sketches, unused code snippets, and rejected concepts developed during the project lifecycle. These materials remain the intellectual property of Saarth Digital and may not be used, shared, or reproduced by the Client without explicit written consent. This ensures that our unique creative process and "agency-internal" strategies remain protected.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">3.3. Client-Provided Assets and Indemnity</h3>
                    <p>The Client warrants that all text, graphics, photos, designs, trademarks, or other artwork provided to Saarth Digital for inclusion in a project are owned by the Client, or that the Client has received permission from the rightful owner to use them. By providing these assets, you grant Saarth Digital a non-exclusive license to use them solely for the completion of your project. The Client agrees to indemnify and hold Saarth Digital harmless from any claims or legal actions resulting from the unauthorized use of third-party assets provided by the Client.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">3.4. Portfolio Rights and Self-Promotion</h3>
                    <p>We take immense pride in the growth of our clients. Unless otherwise agreed upon in a signed Non-Disclosure Agreement (NDA), Saarth Digital reserves the right to showcase the completed project, including screenshots, URLs, and a description of the services provided, in our professional portfolio, on social media, and in marketing materials. This "Showcase Right" is vital for our agency's transparency and helps demonstrate the real-world results we achieve for businesses like yours.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">3.5. Third-Party Licenses and Open-Source Software</h3>
                    <p>Our digital solutions often utilize third-party tools, including WordPress themes, premium plugins, or open-source libraries. While the custom configuration and design belong to the Client (per Section 3.1), the underlying software remains subject to the licenses of their respective owners. Saarth Digital will provide the Client with information regarding any necessary ongoing license renewals for third-party software used in their project.</p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-gold">4.</span> Client Responsibilities
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">4.1. Provision of Project Collateral</h3>
                    <p>To maintain the momentum of your digital growth, the Client agrees to provide all necessary "Project Collateral" including but not limited to high-resolution logos, brand guidelines, product photography, and professional copy within the timeframe agreed upon during the onboarding phase. Saarth Digital is not responsible for project delays caused by the late delivery or poor quality of client-provided assets.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">4.2. Administrative Access and Permissions</h3>
                    <p>For the successful implementation of SEO strategies, web development, or AI integrations, the Client must provide Saarth Digital with the necessary administrative access to third-party platforms. This may include:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Hosting and Domain Control Panels (e.g., Hostinger, GoDaddy).</li>
                      <li>Content Management Systems (CMS) like WordPress.</li>
                      <li>Analytics and Search Console tools.</li>
                      <li>Social Media Business Suites. All credentials shared are handled with strict confidentiality and in accordance with our Privacy Policy.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">4.3. Communication and Feedback Loops</h3>
                    <p>Effective digital marketing and design require iterative feedback. The Client agrees to designate a single point of contact authorized to make binding decisions. To prevent project bottlenecks, we request that feedback on design drafts, content, or technical milestones be provided within 48 to 72 hours of the request. Delays in feedback may result in a rescheduling of the project's final delivery date.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">4.4. Content Accuracy and Final Proofing</h3>
                    <p>While Saarth Digital strives for perfection, the final responsibility for the accuracy of website content, contact information, and promotional pricing rests with the Client. Before a website or campaign goes "Live," the Client is required to perform a final review and provide a formal "Sign-Off." Saarth Digital is not liable for errors discovered after the final approval has been granted.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">4.5. Compliance with Local Laws</h3>
                    <p>The Client is responsible for ensuring that their business model, products, and the content they wish to publish comply with all local and international regulations. This includes industry-specific disclosures, copyright laws, and consumer protection acts relevant to the Client's specific trade or location.</p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-gold">5.</span> Limitation of Liability
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">5.1. Standard of Professional Care</h3>
                    <p>Saarth Digital provides all services with a commitment to professional excellence and industry standard practices. However, our services are provided on an "as is" and "as available" basis. While we strive for 100% accuracy and peak performance in our web design and marketing campaigns, we do not warrant that our services will be entirely error-free or uninterrupted.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">5.2. Performance and Ranking Fluctuations</h3>
                    <p>The digital landscape is governed by third-party algorithms (e.g., Google, Meta, LinkedIn). Because Saarth Digital does not own or control these platforms, we cannot be held liable for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Sudden fluctuations in organic search rankings (SEO).</li>
                      <li>Changes in the cost-per-click (CPC) or performance of paid advertising campaigns.</li>
                      <li>Policy changes or account suspensions by third-party platforms that affect the Client's digital presence.</li>
                    </ul>
                    <p className="mt-2">We provide strategic expertise to navigate these changes, but we do not guarantee specific financial returns or permanent search positions.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">5.3. Third-Party Infrastructure and Hosting</h3>
                    <p>Saarth Digital often integrates third-party tools, APIs, and hosting providers (such as Hostinger or AWS) to deliver our solutions. We are not responsible for any direct or indirect damages resulting from server downtime, data breaches on third-party platforms, or the technical failure of external plugins and software that are beyond our proprietary code.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">5.4. Limitation of Financial Liability</h3>
                    <p>To the maximum extent permitted by applicable law, the total liability of Saarth Digital (including its founders, employees, and contractors) for any claim arising out of or relating to our services whether in contract, tort, or otherwise shall not exceed the total amount actually paid by the Client to Saarth Digital for the specific service or project milestone in question during the three (3) months preceding the claim.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">5.5. Exclusion of Consequential Damages</h3>
                    <p>In no event shall Saarth Digital be liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of profits, loss of business opportunity, loss of data, or business interruption, even if we have been advised of the possibility of such damages.</p>
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

export default TermsOfServicePage;
