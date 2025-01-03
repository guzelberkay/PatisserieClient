
import ProductCard from './ProductCard';
import CategoryCard from './CategoryCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import {useState} from "react";

export default function ProductsSection() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
        <section id="products" className="max-w-7xl mx-auto py-16 px-6">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-8">Ürünlerimiz</h2>

            {/* Categories */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        name={category.name}
                        description={category.description}
                        onClick={() => setSelectedCategory(category.id)}
                    />
                ))}
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
}