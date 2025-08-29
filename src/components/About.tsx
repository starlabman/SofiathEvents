'use client';

import React from 'react';
import { Heart, Award, Users, Star, Sparkles, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion & Créativité",
      description: "Chaque événement est une œuvre d'art unique, créée avec passion et attention aux moindres détails.",
      color: "from-rose-400 to-rose-500"
    },
    {
      icon: Award,
      title: "Excellence & Qualité",
      description: "Nous visons l'excellence dans chaque aspect de nos services, de la planification à l'exécution.",
      color: "from-gold-400 to-gold-500"
    },
    {
      icon: Users,
      title: "Service Personnalisé",
      description: "Votre vision devient la nôtre. Nous créons des expériences sur mesure qui reflètent votre style.",
      color: "from-sage-400 to-sage-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Événements Réussis", icon: Star },
    { number: "98%", label: "Clients Satisfaits", icon: Heart },
    { number: "5+", label: "Années d'Expérience", icon: Award },
    { number: "24/7", label: "Support Disponible", icon: Target }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-elegant relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-rose-100 rounded-full blur-3xl opacity-20"></div>

      <div className="container-elegant relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gold-100 border border-gold-200 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-gold-600" />
            <span className="text-gold-700 font-semibold">À Propos de Nous</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-dark mb-8">
            L'Art de{' '}
            <span className="text-gradient-gold">Sublimer</span>{' '}
            vos Moments
          </h2>
          <p className="text-xl text-sage-600 max-w-4xl mx-auto leading-relaxed font-elegant">
            Depuis plus de 5 ans, Sofiath Events transforme vos rêves en réalité. 
            Notre expertise dans l'événementiel haut de gamme nous permet de créer 
            des expériences inoubliables qui marquent les esprits.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-heading font-bold text-dark">
                Notre Histoire
              </h3>
              <p className="text-lg text-sage-600 leading-relaxed">
                Fondée avec la vision de créer des événements extraordinaires, Sofiath Events 
                est née de la passion pour l'art de recevoir et du désir de transformer 
                chaque célébration en un moment magique.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed">
                Notre équipe d'experts combine créativité, professionnalisme et attention 
                aux détails pour vous offrir une expérience événementielle incomparable, 
                du premier contact jusqu'au dernier moment de votre célébration.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h4 className="text-2xl font-heading font-semibold text-dark">
                Nos Valeurs
              </h4>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-cream-200">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center flex-shrink-0`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-heading font-semibold text-dark mb-2">
                        {value.title}
                      </h5>
                      <p className="text-sage-600 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image/Stats */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-cream-200">
              <div className="aspect-square bg-gradient-to-br from-gold-50 to-cream-100 rounded-2xl flex items-center justify-center mb-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-dark mb-2">
                    Expertise Premium
                  </h4>
                  <p className="text-sage-600">
                    Plus de 500 événements réussis
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-cream-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-heading font-bold text-gold-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-sage-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-rose-200 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold-200 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-cream-200 max-w-4xl mx-auto">
            <h3 className="text-3xl font-heading font-bold text-dark mb-6">
              Prêt à Créer Votre Événement de Rêve ?
            </h3>
            <p className="text-lg text-sage-600 mb-8 max-w-2xl mx-auto">
              Laissez-nous transformer votre vision en réalité. 
              Contactez-nous pour discuter de votre projet et recevoir une proposition personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Demander un Devis
              </button>
              <button className="btn-secondary">
                Découvrir nos Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
