import { motion } from 'framer-motion';
import { Category } from '../types';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <Link to={`/catalog?category=${category.id}`}>
        <div className="h-48 overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
          <p className="text-gray-600">{category.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}