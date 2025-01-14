import ProductCard from './ProductCard';
import CategoryCard from './CategoryCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { useState, useRef } from 'react';

export default function ProductsSection() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const isMouseDown = useRef(false); // Mouse basılı olup olmadığını takip et
    const startX = useRef(0); // Başlangıç X koordinatı
    const scrollLeftOffset = useRef(0); // Kaydırma başlangıçtaki offset değeri

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    // Sağa kaydırma
    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    // Sola kaydırma
    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    // Mouse ile kaydırma işlemi başlatıldığında
    const handleMouseDown = (e: React.MouseEvent) => {
        isMouseDown.current = true;
        startX.current = e.clientX; // Başlangıç X koordinatını kaydet
        scrollLeftOffset.current = sliderRef.current ? sliderRef.current.scrollLeft : 0;
    };

    // Mouse ile kaydırma işlemi devam ederken
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isMouseDown.current) return; // Eğer fare basılı değilse işlemi yapma
        const xDiff = e.clientX - startX.current; // Fare hareketi
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = scrollLeftOffset.current - xDiff; // Kaydırma
        }
    };

    // Mouse ile kaydırma işlemi sona erdiğinde
    const handleMouseUp = () => {
        isMouseDown.current = false;
    };

    // Mouse ile kaydırma işlemi sona erdiğinde
    const handleMouseLeave = () => {
        isMouseDown.current = false;
    };

    // Mobilde dokunmatik kaydırma işlemleri
    const handleTouchStart = (e: React.TouchEvent) => {
        isMouseDown.current = true;
        startX.current = e.touches[0].clientX; // Başlangıç X koordinatını kaydet
        scrollLeftOffset.current = sliderRef.current ? sliderRef.current.scrollLeft : 0;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isMouseDown.current) return; // Eğer fare basılı değilse işlemi yapma
        const xDiff = e.touches[0].clientX - startX.current; // Dokunmatik hareketi
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = scrollLeftOffset.current - xDiff; // Kaydırma
        }
    };

    const handleTouchEnd = () => {
        isMouseDown.current = false;
    };

    return (
        <section id="products" className="max-w-7xl mx-auto py-16 px-6">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-8">Ürünlerimiz</h2>

            {/* Kategoriler */}
            <div className="relative">
                {/* Sol Ok */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-amber-600 text-white p-4 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-opacity z-10"
                >
                    ←
                </button>

                {/* Kategoriler */}
                <div
                    ref={sliderRef}
                    className="flex space-x-8 overflow-hidden"
                    style={{ width: 'calc(100% )' }} // Genişlik ayarı (oklar için boşluk bırakma)
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            name={category.name}
                            description={category.description}
                            onClick={() => setSelectedCategory(category.id)}
                            className="flex-shrink-0 flex-grow-0 basis-1/5" // Flexbox ile %25 genişlik ayarlama
                        />
                    ))}
                </div>

                {/* Sağ Ok */}
                <button
                    onClick={scrollRight}
                    className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-amber-600 text-white p-4 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-opacity z-10"
                >
                    →
                </button>
            </div>

            {/* Ürünler */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
}
