'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Filter, Sparkles } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/api/placeholder/1200/800/F59E0B/FDFCFA?text=Mariage+Élégant',
    alt: 'Mariage Élégant — Sofiath Events',
    ratio: '3:2',
    category: 'Mariages',
    description: 'Cérémonie de mariage romantique avec décoration florale'
  },
  {
    id: 2,
    src: '/api/placeholder/800/1000/EC4899/FFFFFF?text=Réception+Privée',
    alt: 'Réception Privée — Sofiath Events',
    ratio: '4:5',
    category: 'Événements',
    description: 'Réception privée avec service traiteur premium'
  },
  {
    id: 3,
    src: '/api/placeholder/1200/800/F59E0B/FDFCFA?text=Service+Traiteur',
    alt: 'Service Traiteur Premium — Sofiath Events',
    ratio: '3:2',
    category: 'Gastronomie',
    description: 'Buffet gastronomique avec présentation élégante'
  },
  {
    id: 4,
    src: '/api/placeholder/800/1000/2D392D/FFFFFF?text=Événement+Corporate',
    alt: 'Événement Corporate — Sofiath Events',
    ratio: '4:5',
    category: 'Entreprise',
    description: 'Événement d\'entreprise professionnel'
  },
  {
    id: 5,
    src: '/api/placeholder/1200/800/EC4899/FDFCFA?text=Anniversaire+Chic',
    alt: 'Anniversaire Chic — Sofiath Events',
    ratio: '3:2',
    category: 'Événements',
    description: 'Célébration d\'anniversaire élégante'
  },
  {
    id: 6,
    src: '/api/placeholder/800/1000/F59E0B/FFFFFF?text=Décoration+Florale',
    alt: 'Décoration Florale — Sofiath Events',
    ratio: '4:5',
    category: 'Décoration',
    description: 'Arrangements floraux personnalisés'
  },
  {
    id: 7,
    src: '/api/placeholder/1200/800/2D392D/FDFCFA?text=Cérémonie+Civil',
    alt: 'Cérémonie Civile — Sofiath Events',
    ratio: '3:2',
    category: 'Mariages',
    description: 'Cérémonie civile intime et romantique'
  },
  {
    id: 8,
    src: '/api/placeholder/800/1000/EC4899/FFFFFF?text=Cocktail+Dînatoire',
    alt: 'Cocktail Dînatoire — Sofiath Events',
    ratio: '4:5',
    category: 'Gastronomie',
    description: 'Cocktail dînatoire avec canapés raffinés'
  },
  {
    id: 9,
    src: '/api/placeholder/1200/800/F59E0B/FDFCFA?text=Conférence+Entreprise',
    alt: 'Conférence Entreprise — Sofiath Events',
    ratio: '3:2',
    category: 'Entreprise',
    description: 'Conférence d\'entreprise avec service complet'
  },
  {
    id: 10,
    src: '/api/placeholder/800/1000/2D392D/FFFFFF?text=Gala+Charité',
    alt: 'Gala de Charité — Sofiath Events',
    ratio: '4:5',
    category: 'Événements',
    description: 'Gala de charité avec service premium'
  },
  {
    id: 11,
    src: '/api/placeholder/1200/800/EC4899/FDFCFA?text=Déjeuner+Affaires',
    alt: 'Déjeuner d\'Affaires — Sofiath Events',
    ratio: '3:2',
    category: 'Entreprise',
    description: 'Déjeuner d\'affaires professionnel'
  },
  {
    id: 12,
    src: '/api/placeholder/800/1000/F59E0B/FFFFFF?text=Pâtisseries+Artisanales',
    alt: 'Pâtisseries Artisanales — Sofiath Events',
    ratio: '4:5',
    category: 'Gastronomie',
    description: 'Pâtisseries artisanales faites maison'
  }
];

const categories = ['Tous', 'Mariages', 'Événements', 'Gastronomie', 'Entreprise', 'Décoration'];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const filteredImages = selectedCategory === 'Tous' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);
    
    setCurrentIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    const filteredImages = selectedCategory === 'Tous' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);
    
    setCurrentIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const filteredImages = selectedCategory === 'Tous' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Handle keyboard events for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, selectedCategory]);

  // Handle click outside lightbox to close
  const handleLightboxClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  return (
    <section id="gallery" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gold-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-50 rounded-full blur-3xl"></div>
      </div>

      <div className="container-elegant relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gold-100 border border-gold-200 rounded-full px-6 py-3 mb-8">
            <Filter className="w-5 h-5 text-gold-600" />
            <span className="text-gold-700 font-semibold">Notre Galerie</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-dark mb-8">
            Nos{' '}
            <span className="text-gradient-gold">
              Réalisations
            </span>
          </h2>
          <p className="text-xl text-sage-600 max-w-4xl mx-auto leading-relaxed font-elegant">
            Découvrez la magie de nos événements à travers une sélection de nos plus belles réalisations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg'
                  : 'bg-cream-100 text-sage-600 hover:bg-cream-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className={`aspect-${image.ratio === '3:2' ? 'video' : 'square'} relative`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                      <h3 className="font-heading font-bold text-dark mb-2">
                        {image.alt.split('—')[0]}
                      </h3>
                      <p className="text-sm text-sage-600 mb-2">{image.category}</p>
                      <p className="text-xs text-sage-500">{image.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-dark text-xs font-medium px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={handleLightboxClick}
          >
            <div className="relative max-w-6xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gold-300 transition-colors duration-300 z-10 bg-black/50 rounded-full p-2"
                aria-label="Fermer la galerie"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-300 transition-colors duration-300 z-10 bg-black/50 rounded-full p-3"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-300 transition-colors duration-300 z-10 bg-black/50 rounded-full p-3"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              <img
                src={filteredImages[currentIndex].src}
                alt={filteredImages[currentIndex].alt}
                className="max-w-full max-h-full object-contain rounded-2xl"
              />

              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="font-heading font-bold text-dark mb-2 text-xl">
                  {filteredImages[currentIndex].alt.split('—')[0]}
                </h3>
                <p className="text-sage-600 mb-2 font-medium">{filteredImages[currentIndex].category}</p>
                <p className="text-sage-500 text-sm">{filteredImages[currentIndex].description}</p>
                
                {/* Image counter */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-cream-200">
                  <span className="text-sm text-sage-500">
                    {currentIndex + 1} / {filteredImages.length}
                  </span>
                  <div className="flex items-center gap-2 text-sage-500">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm">Sofiath Events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
