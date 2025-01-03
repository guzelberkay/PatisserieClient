interface CategoryCardProps {
  name: string;
  description: string;
  onClick: () => void;
}

export default function CategoryCard({ name, description, onClick }: CategoryCardProps) {
  return (
      <button
          onClick={onClick}
          className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-shadow"
      >
        <h3 className="text-xl font-serif font-bold text-amber-900">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </button>
  );
}