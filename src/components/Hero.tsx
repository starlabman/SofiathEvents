'use client';

import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#34C6C2]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF6B6B]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#F4C95D]/10 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div  aria-hidden="true" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-[#F4C95D]" />
            <span className="text-white/90 font-medium">Agence événementielle premium</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
            Transformons vos{' '}
            <span className="bg-gradient-to-r from-[#34C6C2] to-[#F4C95D] bg-clip-text text-transparent">
              moments
            </span>{' '}
            en souvenirs{' '}
            <span className="bg-gradient-to-r from-[#FF6B6B] to-[#F4C95D] bg-clip-text text-transparent">
              inoubliables
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Confiez-nous vos événements, nous les rendons magiques avec créativité, élégance et professionnalisme.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToContact}
              className="group relative w-full sm:w-auto text-lg px-10 py-5 bg-gradient-to-r from-[#34C6C2] to-[#34C6C2]/90 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#34C6C2]/25"
            >
              <span className="relative z-10">Réservez maintenant</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#34C6C2]/80 to-[#34C6C2]/60 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={scrollToServices}
              className="group w-full sm:w-auto text-lg px-10 py-5 border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-semibold rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Découvrir nos services
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#34C6C2] mb-2">500+</div>
              <div className="text-white/70 text-sm">Événements réussis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF6B6B] mb-2">98%</div>
              <div className="text-white/70 text-sm">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4C95D] mb-2">5+</div>
              <div className="text-white/70 text-sm">Années d'expérience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToServices}
          className="group flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm mb-2 font-medium">Découvrir</span>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;