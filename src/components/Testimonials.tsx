import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh D.",
    company: "Reva Neer Mineral Water",
    content: "Working with Sahil and the team at Saarth Digital was an absolute game-changer for our product launch. They completely revamped our digital presence and delivered an incredible label design for Reva Neer. Since they set up and optimized our Google Business Profile, we've been getting consistent local wholesale inquiries. Super responsive, highly creative, and just genuinely easy to work with!",
    rating: 5,
    category: "Local Business & Branding"
  },
  {
    name: "Michael T.",
    company: "Tech Consulting Group (USA)",
    content: "I was a bit hesitant about hiring an overseas agency at first, but Parth and Sahil completely blew me away. They built a custom, high-converting website for my business and integrated an AI chatbot that now handles our initial customer support queries 24/7. The AI actually sounds natural, and our lead conversion rate has jumped noticeably. If you want serious, scalable results, Saarth Digital is the real deal.",
    rating: 5,
    category: "US-Based Clients & AI Integration"
  },
  {
    name: "Priya S.",
    company: "Retail Boutique Owner",
    content: "Before Saarth Digital, our Instagram and Facebook pages were basically a ghost town. I knew we needed to be online, but I had no idea how to turn followers into actual sales. The team stepped in, completely overhauled our social apps, and started running targeted campaigns. We saw an immediate boost in traffic, and our monthly revenue has noticeably increased. They explain everything in plain language without throwing confusing tech jargon at you.",
    rating: 4,
    category: "Social Media & Revenue Growth"
  },
  {
    name: "Amit K.",
    company: "Director of Operations",
    content: "Honestly, hiring Saarth Digital is the best investment we've made for our business this year. We needed a complete digital makeover. They delivered a beautiful, lightning-fast website and set up all our social channels from scratch. The whole process was seamless. You can tell these guys actually care about your business growth and aren't just trying to sell you things you don't need.",
    rating: 5,
    category: "Web Design & Complete Digital Setup"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-charcoal-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Testimonials</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our <span className="text-gold">Clients Say</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Hear from the businesses we've helped scale and dominate their markets.
            </p>
          </motion.div>
        </div>

        <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                damping: 25,
                stiffness: 100
              }}
              className="bg-charcoal p-8 rounded-[2rem] border border-gold/10 hover:border-gold/30 transition-all group relative shrink-0 w-[85vw] md:w-auto snap-center"
            >
              <Quote className="absolute top-8 right-8 text-gold/10 w-12 h-12 group-hover:text-gold/20 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "fill-gold text-gold" : "text-gray-500"} 
                  />
                ))}
              </div>

              <div className="text-xs font-bold text-gold uppercase tracking-widest mb-3">
                {testimonial.category}
              </div>

              <p className="text-gray-300 mb-8 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center font-bold text-charcoal">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
