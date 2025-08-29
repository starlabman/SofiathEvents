'use client';

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/api/placeholder/1200/800/34C6C2/0F172A?text=Dîner+de+gala',
    alt: 'Dîner de gala — Sofiath Events',
    ratio: '3:2',
    category: 'Événements'
  },
  {
    id: 2,
    src: '/api/placeholder/800/1000/FF6B6B/FFFFFF?text=Mariage+élégant',
    alt: 'Mariage élégant — Sofiath Events',
    ratio: '4:5',
    category: 'Mariages'
  },
  {
    id: 3,
    src: '/api/placeholder/1200/800/F4C95D/0F172A?text=Service+traiteur',
    alt: 'Service traiteur premium — Sofiath Events',
    ratio: '3:2',
    category: 'Gastronomie'
  },
  {
    id: 4,
    src: '/api/placeholder/800/1000/34C6C2/FFFFFF?text=Réception+entreprise',
    alt: 'Réception d\'entreprise — Sofiath Events',
    ratio: '4:5',
    category: 'Entreprise'
  },
  {
    id: 5,
    src: '/api/placeholder/1200/800/FF6B6B/0F172A?text=Anniversaire+chic',
    alt: 'Anniversaire chic — Sofiath Events',
    ratio: '3:2',
    category: 'Événements'
  },
  {
    id: 6,
    src: '/api/placeholder/800/1000/F4C95D/FFFFFF?text=Décoration+florale',
    alt: 'Décoration florale — Sofiath Events',
    ratio: '4:5',
    category: 'Décoration'
  },
  {
    id: 7,
    src: '/api/placeholder/1200/800/34C6C2/0F172A?text=Cérémonie+mariage',
    alt: 'Cérémonie de mariage — Sofiath Events',
    ratio: '3:2',
    category: 'Mariages'
  },
  {
    id: 8,
    src: '/api/placeholder/800/1000/FF6B6B/FFFFFF?text=Buffet+gastronomique',
    alt: 'Buffet gastronomique — Sofiath Events',
    ratio: '4:5',
    category: 'Gastronomie'
  },
  {
    id: 9,
    src: '/api/placeholder/1200/800/F4C95D/0F172A?text=Événement+corporate',
    alt: 'Événement corporate — Sofiath Events',
    ratio: '3:2',
    category: 'Entreprise'
  },
  {
    id: 10,
    src: '/api/placeholder/800/1000/34C6C2/FFFFFF?text=Réception+privée',
    alt: 'Réception privée — Sofiath Events',
    ratio: '4:5',
    category: 'Événements'
  },
  {
    id: 11,
    src: '/api/placeholder/1200/800/FF6B6B/0F172A?text=Déjeuner+affaires',
    alt: 'Déjeuner d\'affaires — Sofiath Events',
    ratio: '3:2',
    category: 'Entreprise'
  },
  {
    id: 12,
    src: '/api/placeholder/800/1000/F4C95D/FFFFFF?text=Cocktail+dînatoire',
    alt: 'Cocktail dînatoire — Sofiath Events',
    ratio: '4:5',
    category: 'Gastronomie'
  }
];

const categories = ['Tous', 'Événements', 'Mariages', 'Gastronomie', 'Entreprise', 'Décoration'];

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

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#F4C95D]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#34C6C2]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF6B6B]/10 border border-[#FF6B6B]/20 rounded-full px-6 py-3 mb-8">
            <Filter className="w-5 h-5 text-[#FF6B6B]" />
            <span className="text-[#FF6B6B] font-semibold">Notre Galerie</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900 mb-8">
            Nos{' '}
            <span className="bg-gradient-to-r from-[#FF6B6B] to-[#F4C95D] bg-clip-text text-transparent">
              Réalisations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
                  ? 'bg-gradient-to-r from-[#FF6B6B] to-[#FF6B6B]/90 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <h3 className="font-heading font-bold text-slate-900 mb-2">
                        {image.alt.split('—')[0]}
                      </h3>
                      <p className="text-sm text-gray-600">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-10"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-10"
              >
                <ChevronRight className="w-12 h-12" />
              </button>

              {/* Image */}
              <img
                src={filteredImages[currentIndex].src}
                alt={filteredImages[currentIndex].alt}
                className="max-w-full max-h-full object-contain rounded-2xl"
              />

              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                <h3 className="font-heading font-bold text-slate-900 mb-2">
                  {filteredImages[currentIndex].alt.split('—')[0]}
                </h3>
                <p className="text-sm text-gray-600">{filteredImages[currentIndex].category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
