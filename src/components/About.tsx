import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';
import { CLINIC_HERO_IMAGE } from '../clinicImages';

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: '5000+', label: 'Happy Patients' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Clock, number: '24/7', label: 'Emergency Care' },
    { icon: Heart, number: '100%', label: 'Care Quality' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-3">About us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            About Dentist@Lodhran
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Serving Lodhran with modern dentistry, clear communication, and care tailored to each
            patient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={CLINIC_HERO_IMAGE}
              alt="Dentist@Lodhran dental clinic interior"
              className="rounded-lg shadow-xl w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Modern Dental Care in Lodhran
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Dentist@Lodhran, we combine cutting-edge dental technology with personalized care to ensure every patient receives the best possible treatment. Our team of experienced professionals is dedicated to making your dental experience comfortable and effective.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We specialize in preventive, restorative, and cosmetic dentistry, using the latest techniques and equipment to deliver outstanding results. Your oral health is our passion, and your comfort is our priority.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center">
                <Heart className="text-teal-600" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Patient-Centered Care</h4>
                <p className="text-gray-600">Every treatment plan is tailored to your unique needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;