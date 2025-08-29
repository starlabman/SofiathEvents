'use client';

import React from 'react';
import { Calendar, Utensils, Users, GlassWater, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: 'Événementiel',
      description: 'Organisation complète de vos événements (mariages, anniversaires, galas, conférences) avec créativité et élégance.',
      color: 'from-[#34C6C2] to-[#34C6C2]/80',
      bgColor: 'bg-[#34C6C2]/10',
    },
    {
      icon: Utensils,
      title: 'Service Traiteur',
      description: 'Des plats raffinés et savoureux, alliant gastronomie et présentation haut de gamme.',
      color: 'from-[#FF6B6B] to-[#FF6B6B]/80',
      bgColor: 'bg-[#FF6B6B]/10',
    },
    {
      icon: Users,
      title: 'Hôtesses d\'accueil',
      description: 'Un accueil chaleureux et professionnel pour marquer vos invités dès leur arrivée.',
      color: 'from-[#F4C95D] to-[#F4C95D]/80',
      bgColor: 'bg-[#F4C95D]/10',
    },
    {
      icon: GlassWater,
      title: 'Location de couverts & accessoires',
      description: 'Matériel chic : verres, assiettes, nappes, décorations premium.',
      color: 'from-slate-600 to-slate-500',
      bgColor: 'bg-slate-100',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#34C6C2]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FF6B6B]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#34C6C2]/10 border border-[#34C6C2]/20 rounded-full px-6 py-3 mb-8">
            <span className="text-[#34C6C2] font-semibold">Nos Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900 mb-8">
            Solutions{' '}
            <span className="bg-gradient-to-r from-[#34C6C2] to-[#FF6B6B] bg-clip-text text-transparent">
              Premium
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de services haut de gamme pour transformer vos événements en moments inoubliables
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2">
                {/* Hover border effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
                <div className="relative bg-white rounded-3xl p-8 lg:p-10">
                  {/* Icon */}
                  <div className="mb-8">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${service.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-10 h-10 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 mb-6 group-hover:text-[#34C6C2] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      {service.description}
                    </p>
                    
                    {/* Learn more link */}
                    <div className="flex items-center text-[#34C6C2] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span>En savoir plus</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="group relative inline-flex items-center px-12 py-5 bg-gradient-to-r from-[#34C6C2] to-[#34C6C2]/90 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#34C6C2]/25"
          >
            <span className="relative z-10">Demander un devis personnalisé</span>
            <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#34C6C2]/80 to-[#34C6C2]/60 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
