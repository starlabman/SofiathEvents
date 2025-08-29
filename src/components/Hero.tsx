'use client';

import React from 'react';
import { ChevronDown, Sparkles, Heart, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-elegant">
      {/* Background with elegant pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cream-200 rounded-full blur-2xl opacity-30"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-gold-300 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-rose-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-cream-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gold-200 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 text-gold-600" />
            <span className="text-sage-700 font-medium">Agence Événementielle Premium</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-dark mb-8 leading-tight">
            Créons Ensemble vos{' '}
            <span className="text-gradient-gold">
              Moments Magiques
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-sage-600 mb-12 max-w-4xl mx-auto leading-relaxed font-elegant">
            Transformons vos rêves en réalité avec notre expertise événementielle haut de gamme. 
            Mariages, événements d'entreprise, célébrations privées - chaque moment devient inoubliable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToContact}
              className="btn-primary group"
            >
              <span className="relative z-10">Demander un Devis</span>
              <Calendar className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={scrollToServices}
              className="btn-secondary group"
            >
              Découvrir nos Services
              <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-600 mb-2">500+</div>
              <div className="text-sage-600 text-sm font-medium">Événements Réussis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-500 mb-2">98%</div>
              <div className="text-sage-600 text-sm font-medium">Clients Satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sage-600 mb-2">5+</div>
              <div className="text-sage-600 text-sm font-medium">Années d'Expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-600 mb-2">24/7</div>
              <div className="text-sage-600 text-sm font-medium">Support Disponible</div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sage-500">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-400" />
              <span className="text-sm font-medium">Service Personnalisé</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-500" />
              <span className="text-sm font-medium">Qualité Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-sage-400" />
              <span className="text-sm font-medium">Planning Flexible</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToServices}
          className="group flex flex-col items-center text-sage-500 hover:text-gold-600 transition-colors duration-300"
        >
          <span className="text-sm mb-2 font-medium">Découvrir</span>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
