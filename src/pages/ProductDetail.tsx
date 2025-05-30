import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();

  // This would typically fetch product data based on ID
  // For now using static data as an example
  const product = {
    name: 'Example Product',
    description: 'Detailed product description would go here. This is a placeholder description that would typically contain comprehensive information about the product, its uses, and key features.',
    image: 'https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg',
    specifications: {
      'Material': 'Medical Grade',
      'Sterilization': 'ETO',
      'Packaging': 'Individual Sterile Pack',
      'Storage': 'Store in cool, dry place',
      'Shelf Life': '3 years',
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12"
      >
        {/* Product Image */}
        <div className="relative h-[400px] md:h-[600px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-3xl font-light mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-8">{product.description}</p>

          {/* Specifications */}
          <div className="mb-8">
            <h2 className="text-xl font-light mb-4">Specifications</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex border-b border-gray-200 py-3 last:border-0">
                  <span className="font-medium w-1/3">{key}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Request Quote Button */}
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            <Mail className="mr-2" size={20} />
            Request Quote
          </Link>
        </div>
      </motion.div>
    </div>
  );
}