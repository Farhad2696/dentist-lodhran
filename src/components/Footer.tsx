import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Dentist@Lodhran</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted dental care provider in Lodhran. We are committed to delivering exceptional dental care with a gentle touch, using the latest technology and techniques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 p-2 rounded-full transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 p-2 rounded-full transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 p-2 rounded-full transition-all duration-300 hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-teal-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Bin Qasim Street, Near Gulaab Marble Factory<br />Lodhran, Punjab <br />Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+92 345 7318721</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@dentistlodhran.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Dentist@Lodhran. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Professional Dental Care | Modern Equipment | Experienced Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;