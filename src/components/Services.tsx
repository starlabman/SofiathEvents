'use client';

import React from 'react';
import { Calendar, Utensils, Users, GlassWater, ArrowRight, Heart, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Mariages & Cérémonies',
      description: 'Créez votre jour J de rêve avec notre expertise en organisation de mariages. De la cérémonie à la réception, chaque détail est pensé pour vous.',
      color: 'from-rose-400 to-rose-500',
      bgColor: 'bg-rose-50',
      features: ['Cérémonie civile & religieuse', 'Réception personnalisée', 'Décoration florale', 'Photographie & vidéo']
    },
    {
      icon: Utensils,
      title: 'Service Traiteur Premium',
      description: 'Dégustez une cuisine raffinée et créative, préparée avec des ingrédients frais et locaux. Une expérience gastronomique inoubliable.',
      color: 'from-gold-400 to-gold-500',
      bgColor: 'bg-gold-50',
      features: ['Cuisine française & locale', 'Buffets & service à table', 'Options végétariennes', 'Pâtisseries artisanales']
    },
    {
      icon: Users,
      title: 'Hôtesses & Service',
      description: 'Une équipe professionnelle et attentionnée pour assurer un service impeccable et créer une ambiance chaleureuse.',
      color: 'from-sage-400 to-sage-500',
      bgColor: 'bg-sage-50',
      features: ['Hôtesses qualifiées', 'Service en salle', 'Accueil personnalisé', 'Gestion des invités']
    },
    {
      icon: GlassWater,
      title: 'Location & Décoration',
      description: 'Matériel de qualité et décoration sur mesure pour sublimer votre événement et créer l\'atmosphère parfaite.',
      color: 'from-cream-400 to-cream-500',
      bgColor: 'bg-cream-50',
      features: ['Vaisselle & couverts', 'Mobilier élégant', 'Décoration florale', 'Éclairage d\'ambiance']
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gold-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-rose-50 rounded-full blur-3xl"></div>
      </div>

      <div className="container-elegant relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gold-100 border border-gold-200 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-gold-600" />
            <span className="text-gold-700 font-semibold">Nos Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-dark mb-8">
            Services{' '}
            <span className="text-gradient-gold">
              Premium
            </span>
          </h2>
          <p className="text-xl text-sage-600 max-w-4xl mx-auto leading-relaxed font-elegant">
            Découvrez notre gamme complète de services haut de gamme pour créer 
            des événements inoubliables qui reflètent votre style et vos attentes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl border border-cream-200 transition-all duration-500 hover:-translate-y-2">
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
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-dark mb-6 group-hover:text-gold-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sage-600 leading-relaxed text-lg mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                          <span className="text-sage-600 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Learn more link */}
                    <div className="flex items-center text-gold-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
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
            className="btn-primary group"
          >
            <span className="relative z-10">Demander un Devis Personnalisé</span>
            <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
