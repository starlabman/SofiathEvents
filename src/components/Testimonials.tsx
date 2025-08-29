'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      text: "Un mariage féérique grâce à Sofiath Events. Tout était parfait, de la décoration à l'organisation en passant par le service traiteur. Une équipe professionnelle qui a su transformer nos rêves en réalité !",
      author: "Amina K.",
      role: "Mariée",
      rating: 5,
      avatar: "AK",
      color: "from-[#34C6C2] to-[#34C6C2]/80"
    },
    {
      text: "Le service traiteur a conquis tous nos invités. Une équipe professionnelle et attentionnée qui a su créer une expérience gastronomique exceptionnelle. Les plats étaient délicieux et la présentation impeccable.",
      author: "Eric D.",
      role: "Organisateur d'événement",
      rating: 5,
      avatar: "ED",
      color: "from-[#FF6B6B] to-[#FF6B6B]/80"
    },
    {
      text: "Organisation impeccable pour notre gala d'entreprise. Sofiath Events a su répondre à toutes nos attentes avec créativité et professionnalisme. Un partenaire de confiance pour tous nos événements !",
      author: "Société InnovTech",
      role: "Entreprise",
      rating: 5,
      avatar: "SI",
      color: "from-[#F4C95D] to-[#F4C95D]/80"
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-6 h-6 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-80 h-80 bg-[#34C6C2]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF6B6B]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#F4C95D]/10 border border-[#F4C95D]/20 rounded-full px-6 py-3 mb-8">
            <Quote className="w-5 h-5 text-[#F4C95D]" />
            <span className="text-[#F4C95D] font-semibold">Témoignages</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900 mb-8">
            Ce que disent nos{' '}
            <span className="bg-gradient-to-r from-[#F4C95D] to-[#FF6B6B] bg-clip-text text-transparent">
              clients
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez les témoignages de nos clients satisfaits qui ont vécu des événements inoubliables
          </p>
        </div>

        {/* Testimonials Slider */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Testimonial */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 lg:p-16 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-[#34C6C2]/10">
                <Quote className="w-16 h-16" />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-2">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="text-center mb-12">
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light italic">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${testimonials[currentIndex].color} text-white font-bold text-xl mb-4`}>
                  {testimonials[currentIndex].avatar}
                </div>
                <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-gray-600 font-medium">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-gray-600 hover:text-[#34C6C2]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-gray-600 hover:text-[#34C6C2]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#34C6C2] scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#34C6C2] mb-2">500+</div>
            <div className="text-gray-600">Événements organisés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF6B6B] mb-2">98%</div>
            <div className="text-gray-600">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F4C95D] mb-2">5.0</div>
            <div className="text-gray-600">Note moyenne</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
