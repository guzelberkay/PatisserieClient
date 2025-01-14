import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { SITE_CONFIG } from '../constants/config';
import Logo from '../images/Logo.ico';

export default function Header() {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [prevScrollY, setPrevScrollY] = useState(0); // Önceki scroll pozisyonu

    useEffect(() => {
        const handleScroll = () => {
            // Sadece mobilde çalışması için ekran genişliğini kontrol et
            if (window.innerWidth <= 768) {
                const currentScrollY = window.scrollY;

                // Kullanıcı sayfayı aşağı kaydırıyorsa, header'ı gizle
                if (currentScrollY > prevScrollY && currentScrollY > 50) {
                    setIsHeaderVisible(false);
                } else {
                    setIsHeaderVisible(true);
                }

                // Önceki scroll pozisyonunu güncelle
                setPrevScrollY(currentScrollY);
            }
        };

        // Scroll olayı ekleyelim
        window.addEventListener('scroll', handleScroll);

        // Cleanup: Scroll olayı temizle
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY]);

    return (
        <header
            className={`bg-amber-50 py-4 px-6 shadow-sm sticky top-0 z-50 transition-transform duration-300 ${
                isHeaderVisible ? 'transform-none' : '-translate-y-full'
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{ height: '100%', maxHeight: '15vh', objectFit: 'contain' }} // Logo boyutunu büyüttüm
                    />

                    <div>
                        <h1 className="text-2xl font-serif font-bold text-amber-900">{SITE_CONFIG.name}</h1>
                        <p className="text-xl font-semibold text-amber-800 hover:text-amber-600 transition-colors duration-300 transform hover:scale-110">
                            {SITE_CONFIG.tagline}
                        </p>
                    </div>
                </div>
                <Navigation />
            </div>
        </header>
    );
}
