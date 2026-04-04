import React from 'react';
import { Smile, Shield, Sparkles, Wrench, Baby, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Regular checkups, cleanings, and preventive treatments to maintain optimal oral health.',
      features: ['Regular Checkups', 'Professional Cleaning', 'Fluoride Treatments', 'Oral Cancer Screening']
    },
    {
      icon: Wrench,
      title: 'Restorative Dentistry',
      description: 'Comprehensive treatments to restore damaged teeth and improve function.',
      features: ['Dental Fillings', 'Crowns & Bridges', 'Root Canal Therapy', 'Dental Implants']
    },
    {
      icon: Sparkles,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our advanced cosmetic dental procedures.',
      features: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Makeover', 'Bonding & Contouring']
    },
    {
      icon: Baby,
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children in a comfortable, friendly environment.',
      features: ['Child-Friendly Care', 'Preventive Treatments', 'Education Programs', 'Emergency Care']
    },
    {
      icon: Smile,
      title: 'Orthodontics',
      description: 'Straighten your teeth with traditional braces or modern clear aligners.',
      features: ['Traditional Braces', 'Clear Aligners', 'Retainers', 'Bite Correction']
    },
    {
      icon: Users,
      title: 'Family Dentistry',
      description: 'Comprehensive dental care for the entire family under one roof.',
      features: ['All Ages Welcome', 'Family Packages', 'Convenient Hours', 'Insurance Accepted']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Our dental services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Preventive, restorative, and cosmetic care—from routine visits to advanced treatment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-white to-teal-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group border border-teal-100">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;