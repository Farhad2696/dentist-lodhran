import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+92 345 7318721</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>Bin Qasim Street, Near Gulaab Marble Factory</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>Mon-Sat: 9AM-9PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
                    
              <h1 className="flex flex-col text-3xl font-bold bg-gradient-to-r from-teal-700 to-red-500 bg-clip-text text-transparent leading-tight">
                <span className='mb-[-14px]'>Dentist</span>
                <span className="pl-[3.4ch] text-xl">@Lodhran</span>
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  Gallery
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </button>
                <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-md">
                  Book Appointment
                </button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-teal-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium w-full text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium w-full text-left">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium w-full text-left">
                Contact
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white block px-3 py-2 mx-3 rounded-md text-base font-medium hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 text-center shadow-md">
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;