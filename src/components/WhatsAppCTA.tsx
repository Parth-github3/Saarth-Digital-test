import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const WhatsAppCTA = () => {
  const phoneNumber = "918160866015";
  const message = "Hello! Saarth Digital. I’m interested in a discovery call to discuss a customized digital strategy. Please let me know your availability.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors group focus:outline-none focus:ring-4 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-charcoal"
      title="Chat with us on WhatsApp"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" aria-hidden="true" />
      <span className="absolute right-full mr-4 bg-white text-charcoal px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-gray-100" aria-hidden="true">
        Chat with us!
      </span>
    </motion.a>
  );
};

export default WhatsAppCTA;
