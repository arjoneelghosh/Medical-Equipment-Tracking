import { motion } from 'framer-motion';
import { ArrowRight, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ultrasonicSizes = [
  { size: '5L', title: 'Ultrasonic Cleaner – 5 Liters' },
  { size: '12L', title: 'Ultrasonic Cleaner – 12 Liters' },
  { size: '18L', title: 'Ultrasonic Cleaner – 18 Liters' },
  { size: '30L', title: 'Ultrasonic Cleaner – 30 Liters' },
  { size: '50L', title: 'Ultrasonic Cleaner – 50 Liters' },
  { size: '75L', title: 'Ultrasonic Cleaner – 75 Liters' },
  { size: '100L', title: 'Ultrasonic Cleaner – 100 Liters' },
  { size: '180L', title: 'Ultrasonic Cleaner – 180 Liters' },
  { size: '250L', title: 'Ultrasonic Cleaner – 250 Liters' },
  { size: '350L', title: 'Ultrasonic Cleaner – 350 Liters' }
];

const performanceChemicals = [
  {
    name: 'Alkaline Cleaning Agent',
    description: 'Effective on surgical tools, glassware, and general disinfection',
    type: 'Alkaline Formula'
  },
  {
    name: 'Organic Acid Cleaner',
    description: 'Specialized for removing mineral deposits and organic residues',
    type: 'Organic Formula'
  },
  {
    name: 'Neutral pH Cleaner',
    description: 'Gentle yet effective cleaning for delicate instruments',
    type: 'Neutral Formula'
  },
  {
    name: 'Enzymatic Cleaner',
    description: 'Bio-active cleaning solution for protein and blood removal',
    type: 'Enzymatic Formula'
  }
];

export default function MedicalDevices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-secondary to-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-light mb-4">Medical Devices</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Professional ultrasonic cleaning systems and performance chemicals for healthcare facilities
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Single Tank Ultrasonic Cleaners Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Single Tank Ultrasonic Cleaners</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional-grade ultrasonic cleaning systems available in multiple capacities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {ultrasonicSizes.map((item, index) => (
              <motion.div
                key={item.size}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg"
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.size}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    High-performance ultrasonic cleaner ideal for surgical instruments and lab use.
                  </p>
                  <button className="w-full bg-primary text-white py-3 px-6 rounded-xl font-medium hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl group-hover:scale-105 transform duration-200">
                    Request Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Multi Tank & Custom Built Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
                  alt="Multi Tank Ultrasonic System"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-4xl font-light text-gray-900 mb-4">
                    Multi Tank & Custom Built Ultrasonic Systems
                  </h2>
                  <div className="w-16 h-1 bg-primary mb-6"></div>
                </div>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  From 18L to 250L, we build multi-tank ultrasonic cleaning systems for specialized medical needs.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Custom tank configurations</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Automated cleaning cycles</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Integration with existing workflows</span>
                  </div>
                </div>
                
                <button className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl group">
                  <Mail className="mr-3" size={20} />
                  Contact for Custom Build
                  <ArrowRight className="ml-3 transform group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Performance Chemicals Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Performance Chemicals</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wide range of organic acid and alkaline chemicals for optimal cleaning performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {performanceChemicals.map((chemical, index) => (
              <motion.div
                key={chemical.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="flex">
                  <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                    <div className="w-16 h-20 bg-blue-600 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-12 bg-blue-500 rounded opacity-80"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                        {chemical.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {chemical.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {chemical.description}
                    </p>
                    <div className="flex space-x-3">
                      <button className="flex items-center text-primary hover:text-primary-dark font-medium text-sm transition-colors">
                        <FileText size={16} className="mr-2" />
                        Request Data Sheet
                      </button>
                      <button className="flex items-center text-gray-600 hover:text-primary font-medium text-sm transition-colors">
                        <Mail size={16} className="mr-2" />
                        Contact Supplier
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chemical Drums Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-light text-gray-900 mb-2">Bulk Chemical Supply</h3>
                <p className="text-gray-600">Available in drums and custom packaging for high-volume facilities</p>
              </div>
              <div className="flex space-x-4">
                <div className="w-16 h-20 bg-blue-600 rounded-lg"></div>
                <div className="w-16 h-20 bg-blue-500 rounded-lg"></div>
                <div className="w-16 h-20 bg-blue-400 rounded-lg"></div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16 bg-gradient-to-r from-secondary to-primary text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl font-light mb-4">Need Custom Solutions?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our team of experts can design and build ultrasonic cleaning systems tailored to your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Expert Consultation
            <ArrowRight className="ml-3" size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}