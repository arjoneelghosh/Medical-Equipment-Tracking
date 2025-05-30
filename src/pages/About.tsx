import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Award, Users, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6">About SurgMedi</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Leading provider of premium medical supplies and equipment, committed to excellence in healthcare
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded with a vision to revolutionize healthcare supply chains, SurgMedi has grown to become
                a trusted partner for healthcare institutions across India. Our commitment to quality,
                innovation, and customer service has established us as a leader in the medical supply industry.
              </p>
              <p className="text-gray-600">
                We understand the critical nature of medical supplies in healthcare delivery. That's why we
                maintain the highest standards in our product selection, quality control, and customer support
                processes.
              </p>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg"
                alt="SurgMedi Facility"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Quality Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in our product selection and quality control processes.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers' needs drive every decision we make and every action we take.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Reliability</h3>
              <p className="text-gray-600">
                We ensure consistent supply and dependable service for our healthcare partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-6">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions about our products or services? Our team is here to help.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Gurugram, India</p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+91 123 456 7890</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contact@surgmedi.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}