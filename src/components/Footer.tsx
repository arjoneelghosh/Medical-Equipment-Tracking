import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/2.png" alt="SurgMedi" className="h-12 w-auto mb-4" />
            <p className="text-gray-300">Healthcare & Hygiene</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/catalog" className="text-gray-300 hover:text-white">Catalog</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>A-25, FF, BPTP Amstoria, Sector-102, Dwarka Expressway, Gurugram (Hr.)</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91-7988076558</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <div className="flex flex-col">
                  <span>satpal.singh@surgmedi.com</span>
                  <span>info.surgmedi@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} SurgMedi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}