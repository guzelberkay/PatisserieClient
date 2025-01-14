import { SITE_CONFIG } from '../constants/config';
import whatsapp from "../images/whatsapp.ico"; // WhatsApp simgesini doğru şekilde içe aktardığınızdan emin olun

export default function WhatsAppButton() {
    const message = "Merhaba! Pasta ürünleriniz hakkında bilgi almak istiyorum. Hangi ürünü sorabilirim?";
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition-all duration-300 z-50 flex items-center justify-center gap-3"
            aria-label="WhatsApp ile iletişime geçin"
        >
            <img
                src={whatsapp}  // WhatsApp simgesini doğru şekilde buraya ekleyin
                alt="WhatsApp"
                className="h-12 w-12 object-contain" // Simgeyi profesyonel boyutlarda ve uyumlu hale getirdik
            />
            <span className="hidden md:inline font-medium text-lg">Bize Ulaşın</span> {/* Yazıyı büyüttük */}
        </a>
    );
}
