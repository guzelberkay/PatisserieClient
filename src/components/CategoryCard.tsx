interface CategoryCardProps {
    name: string;
    description: string;
    onClick: () => void;
    className?: string; // className özelliğini opsiyonel olarak ekliyoruz
}

export default function CategoryCard({
                                         name,
                                         description,
                                         onClick,
                                         className, // className'ı prop olarak alıyoruz
                                     }: CategoryCardProps) {
    return (
        <button
            onClick={onClick}
            className={`bg-white rounded-lg shadow-md p-6 text-left hover:shadow-lg hover:scale-105 transition-all w-[320px] min-h-[240px] ${className}`}
        >
            <h3 className="text-2xl font-serif font-bold text-amber-900">{name}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
        </button>
    );
}
