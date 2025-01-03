

interface ProductCardProps {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
}

export default function ProductCard({ name, description, price, imageUrl }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
                <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
                <div className="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1 rounded-bl-lg">
                    {price}
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-serif font-semibold text-amber-900">{name}</h3>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );
}