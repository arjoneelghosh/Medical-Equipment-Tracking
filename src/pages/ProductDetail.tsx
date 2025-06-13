import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, Package, Shield, Award } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const category = categories.find(c => c.id === product?.category);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Product not found</h1>
          <Link to="/catalog" className="text-primary hover:text-primary-dark">
            ← Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/catalog" className="text-gray-500 hover:text-primary">
              Catalog
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-primary capitalize">
              {category?.name}
            </span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/catalog"
            className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Catalog
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Product Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Category Badge */}
            <div>
              <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full capitalize">
                {category?.name}
              </span>
            </div>

            {/* Product Name & Description */}
            <div>
              <h1 className="text-4xl font-light text-gray-900 mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Package className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Premium Quality</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Sterile Packaging</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Certified</p>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-light text-gray-900 mb-6">Specifications</h2>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                    <span className="font-medium text-gray-900">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Request Quote Button */}
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
              >
                <Mail className="mr-3" size={20} />
                Request Quote & Information
              </Link>
              <p className="text-sm text-gray-500 text-center mt-3">
                Get personalized pricing and detailed product information
              </p>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                      <p className="text-gray-600 text-sm">{relatedProduct.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}