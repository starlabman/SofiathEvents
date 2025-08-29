'use client';

import React from 'react';
import { 
  Award, 
  Heart, 
  Sparkles, 
  Shield 
} from 'lucide-react';

const advantages = [
  {
    id: 1,
    title: 'Expérience & savoir-faire',
    description: 'Plus de 10 ans d\'expertise dans l\'organisation d\'événements premium. Notre équipe maîtrise parfaitement tous les aspects de l\'événementiel.',
    icon: Award,
    color: 'primary'
  },
  {
    id: 2,
    title: 'Service personnalisé',
    description: 'Chaque événement est unique. Nous créons des expériences sur mesure qui reflètent parfaitement votre vision et vos attentes.',
    icon: Heart,
    color: 'secondary'
  },
  {
    id: 3,
    title: 'Qualité premium & souci du détail',
    description: 'Nous sélectionnons avec soin chaque fournisseur et accordons une attention particulière à chaque détail pour un résultat impeccable.',
    icon: Sparkles,
    color: 'accent'
  },
  {
    id: 4,
    title: 'Satisfaction garantie',
    description: 'Votre satisfaction est notre priorité absolue. Nous nous engageons à dépasser vos attentes et à créer des moments inoubliables.',
    icon: Shield,
    color: 'primary'
  }
];

const WhyChooseUs = () => {
  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary';
      case 'secondary':
        return 'text-secondary';
      case 'accent':
        return 'text-accent';
      default:
        return 'text-primary';
    }
  };

  const getBgGradient = (color: string) => {
    switch (color) {
      case 'primary':
        return 'from-primary/10 to-primary/5';
      case 'secondary':
        return 'from-secondary/10 to-secondary/5';
      case 'accent':
        return 'from-accent/10 to-accent/5';
      default:
        return 'from-primary/10 to-primary/5';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-dark mb-6">
            Pourquoi{' '}
            <span className="text-gradient">nous choisir</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez ce qui fait de Sofiath Events votre partenaire de confiance pour des événements exceptionnels
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={advantage.id}
                className="group relative"
              >
                <div className={`
                  bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl 
                  border border-gray-100 transition-all duration-300
                  group-hover:border-primary/20 group-hover:shadow-glow
                  relative overflow-hidden
                `}>
                  {/* Background Gradient */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${getBgGradient(advantage.color)} 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  `} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`
                        w-16 h-16 rounded-xl flex items-center justify-center
                        bg-gradient-to-br from-gray-50 to-gray-100
                        group-hover:scale-110 transition-all duration-300
                        group-hover:shadow-lg
                      `}>
                        <IconComponent 
                          className={`w-8 h-8 ${getIconColor(advantage.color)} transition-all duration-300 group-hover:scale-110`}
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {advantage.description}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`
                        w-2 h-2 rounded-full ${getIconColor(advantage.color).replace('text-', 'bg-')} opacity-60
                      `} />
                    </div>
                    
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <div className={`
                        w-1 h-1 rounded-full ${getIconColor(advantage.color).replace('text-', 'bg-')} opacity-40
                      `} />
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-300" />
                </div>

                {/* Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Prêt à créer votre événement de rêve ?
          </p>
          <button
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-xl shadow-lg hover:shadow-glow transform hover:-translate-y-1 transition-all duration-300"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Commencer votre projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
