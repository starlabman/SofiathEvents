'use client';

import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    
    // Mettre à jour le consentement GA4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-md mx-auto">
      <div className="flex items-start space-x-3">
        <Cookie className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-sm text-gray-700 mb-3">
            Nous utilisons des cookies pour améliorer votre expérience. 
            En continuant à naviguer, vous acceptez l'utilisation de cookies.
          </p>
          <div className="flex space-x-2">
            <button
              onClick={handleDecline}
              className="px-3 py-1 text-xs text-gray-600 hover:text-gray-800 transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="px-3 py-1 text-xs bg-primary text-white rounded hover:bg-primary/90 transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
