import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CLINIC_HERO_IMAGE } from '../clinicImages';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-teal-950"
      style={{
        backgroundImage: `url(${CLINIC_HERO_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950/92 via-teal-900/85 to-slate-900/90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200/90 mb-4">
            Dentist@Lodhran
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Your smile is our
            <span className="text-cyan-300 block mt-1">priority</span>
          </h1>
          <p className="text-lg md:text-xl text-teal-50/95 mb-10 leading-relaxed max-w-2xl mx-auto">
            Trusted dental care in Lodhran—thoughtful treatment, modern standards, and a calm,
            patient-focused environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white px-8 py-3.5 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-teal-950/40"
            >
              <span>Contact us</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-sm border border-white/40 text-white hover:bg-white hover:text-teal-900 px-8 py-3.5 rounded-xl text-base md:text-lg font-semibold transition-all duration-300"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;