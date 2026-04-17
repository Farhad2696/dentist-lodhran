import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../contactInfo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BrandName } from './BrandName';

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
      <div className="bg-gradient-to-r from-teal-700 to-cyan-700 text-white py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-y-1 text-sm font-medium">
          <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-1.5 hover:opacity-90"
              title="Call clinic"
            >
              <Phone size={14} aria-hidden />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-90"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon size={14} className="text-white" />
              <span>WhatsApp</span>
            </a>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>Bin Qasim Street, Near Gulaab Marble Factory</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span className='text-red-600 font-medium'>Open 24 Hours</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[4.25rem]">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                <BrandName variant="header" />
              </h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-0.5">
                Dental clinic
              </p>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-teal-700 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-slate-50">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-teal-700 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-slate-50">
                  About
                </button>
                <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-teal-700 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-slate-50">
                  Services
                </button>
                <button onClick={() => scrollToSection('gallery')} className="text-slate-700 hover:text-teal-700 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-slate-50">
                  Gallery
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-teal-700 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-slate-50">
                  Contact
                </button>
                <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-md shadow-teal-900/10">
                  Contact us
                </button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-teal-700"
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
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-teal-700 block px-3 py-2 text-base font-medium w-full text-left rounded-lg">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-teal-700 block px-3 py-2 text-base font-medium w-full text-left rounded-lg">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-teal-700 block px-3 py-2 text-base font-medium w-full text-left rounded-lg">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-slate-700 hover:text-teal-700 block px-3 py-2 text-base font-medium w-full text-left rounded-lg">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-teal-700 block px-3 py-2 text-base font-medium w-full text-left rounded-lg">
                Contact
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white block px-3 py-2 mx-3 rounded-lg text-base font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 text-center shadow-md">
                Contact us
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;