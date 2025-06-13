import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export default function ProductCard({ id, name, description, image, category }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <Link to={`/product/${id}`} className="block">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-gray-50">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full capitalize">
              {category.replace('-', ' ')}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200">
            {name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>

          {/* View Details Link */}
          <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary-dark transition-colors duration-200">
            <span>View Details</span>
            <ArrowRight 
              size={16} 
              className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}