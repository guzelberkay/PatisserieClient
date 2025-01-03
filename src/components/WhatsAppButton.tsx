
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../constants/config';

export default function WhatsAppButton() {
  const message = "Hi! I'm interested in your pasta products.";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
      <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg
                 hover:bg-green-600 transition-colors z-50 flex items-center gap-2"
          aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden md:inline">Bize Ulaşın</span>
      </a>
  );
}