import { Instagram, MapPin, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../constants/config';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-amber-200 mb-4">{SITE_CONFIG.description}</p>
            <div className="flex gap-4">
              <a href={SITE_CONFIG.social.instagram} className="hover:text-amber-300">
                <Instagram />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Konum</h3>
            <div className="flex items-start gap-2 text-amber-200">
              <MapPin className="mt-1" />
              <p>{SITE_CONFIG.location}</p>
            </div>
            <div className="flex items-start gap-2 text-amber-200 mt-2">
              <Clock className="mt-1" />
              <p>{SITE_CONFIG.hours}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">İletişim</h3>
            <p className="text-amber-200">
              Ürünlerimiz hakkında sorularınız mı var? Doğrudan bizimle sohbet etmek için WhatsApp butonuna tıklayın!
            </p>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-12 pt-6 text-center text-amber-300">
          <p>&copy; {new Date().getFullYear()} Developed by CORTEXSOFT</p>
        </div>
      </div>
    </footer>
  );
}