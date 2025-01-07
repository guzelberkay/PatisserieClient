import ProductCard from './ProductCard';
import CategoryCard from './CategoryCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { useState, useRef } from 'react';

export default function ProductsSection() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);

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
                    style={{width: 'calc(100% )'}} // Genişlik ayarı (oklar için boşluk bırakma)
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>


    );
}
