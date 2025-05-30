import { useState } from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/categories';

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Category Filter */}
      <div className="mb-8">
        <h1 className="text-3xl font-light mb-6">Product Catalog</h1>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === 'all'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories
          .filter((category) => selectedCategory === 'all' || category.id === selectedCategory)
          .map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="text-primary hover:text-primary-dark font-medium">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}