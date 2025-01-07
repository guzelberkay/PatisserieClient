import { useState } from 'react';

const navItems = [
    { href: '#products', label: 'Ürünlerimiz' },
    { href: '#about', label: 'Hakkımızda' },
    { href: '#contact', label: 'İletişim' },
];

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Menü açma ve kapama fonksiyonu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Menü öğesine tıklama ve yönlendirme yapma
    const handleMenuItemClick = (href: string) => {
        setIsMenuOpen(false); // Menü tıklanarak kapanacak

        // Yönlendirme ve kaydırma işlemi
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="p-6 bg-white shadow-md">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-amber-900">
                    {/* Logo buraya gelecek */}
                </div>

                {/* Menü açma butonu (mobilde) */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-3xl text-amber-900"
                >
                    ☰
                </button>
            </div>

            {/* Menü öğeleri */}
            <ul
                className={`lg:flex flex-col lg:flex-row gap-8 mt-4 lg:mt-0 p-4 bg-white absolute lg:relative w-full lg:w-auto top-0 left-0 transition-transform ${
                    isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
                } lg:transform-none lg:block`}
            >
                {navItems.map(({ href, label }) => (
                    <li key={href} className="relative group">
                        <a
                            href={href}
                            className="text-2xl font-semibold text-amber-900 transition-all duration-300 hover:text-amber-700"
                            onClick={(e) => {
                                e.preventDefault(); // Sayfa yeniden yüklenmesin
                                handleMenuItemClick(href); // Yönlendirme ve kaydırma işlemi
                            }}
                        >
                            {label}
                        </a>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-900 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
