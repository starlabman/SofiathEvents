'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Avis', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/22870154492?text=Bonjour! Je souhaite en savoir plus sur vos services d\'événements.', '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div>
              <h1 className={`text-2xl lg:text-3xl font-heading font-bold transition-colors duration-300 ${
                isScrolled ? 'text-[#34C6C2]' : 'text-white'
              }`}>
                Sofiath Events
              </h1>
              <p className={`text-xs lg:text-sm font-body transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                L'art de sublimer vos moments
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`font-medium transition-colors duration-300 hover:text-[#34C6C2] ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop WhatsApp Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={openWhatsApp}
              className={`inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border-2 focus:ring-[#34C6C2] px-4 py-2 text-sm rounded-md ${
                isScrolled
                  ? 'border-[#34C6C2] text-[#34C6C2] hover:bg-[#34C6C2] hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-[#34C6C2]'
              }`}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="text-left font-medium text-slate-900 hover:text-[#34C6C2] transition-colors duration-300"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border-2 focus:ring-[#34C6C2] px-4 py-2 text-sm rounded-md border-[#34C6C2] text-[#34C6C2] hover:bg-[#34C6C2] hover:text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
