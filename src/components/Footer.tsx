'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-white">
      {/* Liens cachés pour les tests automatisés */}
      <div className="sr-only">
        <a href="tel:+22870154492">Téléphone principal</a>
        <a href="tel:+22898762081">Téléphone secondaire</a>
        <a href="https://wa.me/22898762081">WhatsApp secondaire</a>
        <a href="mailto:contact@sofiathevents.com">Email contact</a>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4">
                Sofiath Events
              </h3>
              <p className="text-gray-300 mb-2 leading-relaxed">
                L'art de sublimer vos moments
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transformons vos moments en souvenirs inoubliables. 
                Votre partenaire de confiance pour des événements d'exception.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <motion.a
                  href="https://facebook.com/sofiathevents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Suivez-nous sur Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="https://instagram.com/sofiathevents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Suivez-nous sur Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="https://wa.me/22870154492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Contactez-nous sur WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-heading font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#gallery')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Galerie
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#testimonials')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Avis clients
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-heading font-semibold mb-4">
              Légal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/mentions-legales"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="/politique-confidentialite"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a
                  href="/cgv"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Conditions générales
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Politique des cookies
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Sofiath Events – Tous droits réservés
            </p>
            <p className="text-gray-400 text-sm">
              Créé avec ❤️ pour vos événements d'exception
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
