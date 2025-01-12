interface ProductCardProps {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
}

export default function ProductCard({ name, description, price, imageUrl }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow w-full max-w-xl">
            {/* Görsel Alanı */}
            <div className="relative">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-96 object-cover" // Görsel yüksekliğini artırdık (h-64: 256px)
                />
                <div className="absolute top-0 right-0 bg-amber-600 text-white px-4 py-2 rounded-bl-lg text-lg font-bold">
                    {price}
                </div>
            </div>
            {/* İçerik Alanı */}
            <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-amber-900">{name}</h3> {/* Başlık boyutunu büyüttük */}
                <p className="text-gray-700 mt-4 text-base">{description}</p> {/* Metni daha büyük ve okunabilir hale getirdik */}
            </div>
        </div>
    );
}
