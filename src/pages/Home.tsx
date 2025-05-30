import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import CategoryCard from '../components/CategoryCard';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src= "/2.png"
                alt="SurgMedi"
                className="h-24 mx-auto mb-8"
              />
              <h1 className="text-4xl md:text-6xl font-light mb-6">
                Healthcare & Hygiene
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Premium Medical Supplies for Healthcare Professionals
              </p>
              <Link
                to="/catalog"
                className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Explore Catalog
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-12">Our Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">About SurgMedi</h2>
              <p className="text-gray-600 mb-6">
                SurgMedi is a leading provider of high-quality medical supplies and equipment.
                We are committed to delivering excellence in healthcare through our comprehensive
                range of products that meet the highest standards of quality and safety.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-primary hover:text-primary-dark"
              >
                Learn more about us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg"
                alt="About SurgMedi"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions about our products? We're here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}