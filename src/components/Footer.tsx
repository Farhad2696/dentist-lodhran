import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../contactInfo';
import { WhatsAppIcon } from './WhatsAppIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              Dentist@Lodhran
            </h3>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">Dental clinic</p>
            <p className="text-gray-300 mb-6 leading-relaxed text-[15px]">
              Trusted dental care in Lodhran—preventive, restorative, and cosmetic dentistry with a
              focus on comfort and clear communication.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BD5A] p-2 rounded-full transition-all duration-300 hover:scale-110 text-white"
                title="WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon size={20} />
              </a>
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
                <span className="text-gray-300 text-sm">Bin Qasim Street, Near Gulaab Marble Factory<br />Lodhran, Punjab 59320<br />Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-teal-400 flex-shrink-0" />
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-gray-300 text-sm hover:text-teal-400 transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <WhatsAppIcon size={16} className="text-emerald-400 flex-shrink-0" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-emerald-400 transition-colors"
                >
                  WhatsApp {PHONE_DISPLAY}
                </a>
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
              © 2026 Dentist@Lodhran. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0 text-center md:text-right">
              Professional care · Modern equipment · Experienced team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;