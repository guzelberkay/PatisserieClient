import { SITE_CONFIG } from '../constants/config';

export default function HeroSection() {
    return (
        <div className="relative h-[600px]">
            <img
                src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1600"
                alt="Traditional Turkish Baklava"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex items-center justify-center">
                <div className="text-center text-white max-w-3xl px-6">
                    <h2 className="text-6xl font-serif font-bold mb-6">{SITE_CONFIG.name}</h2>
                    <p className="text-2xl mb-8">{SITE_CONFIG.description}</p>
                    <a
                        href="#products"
                        className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full
                     font-semibold hover:bg-amber-700 transition-colors"
                    >
                        Ürünlerimize Göz Atın
                    </a>
                </div>
            </div>
        </div>
    );
}