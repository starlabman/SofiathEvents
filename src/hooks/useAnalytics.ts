'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const consent = localStorage.getItem('cookie-consent');
      if (consent === 'accepted') {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }
    }
  };

  const trackPageView = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const consent = localStorage.getItem('cookie-consent');
      if (consent === 'accepted') {
        window.gtag('config', 'G-XXXXXXX', {
          page_path: url,
        });
      }
    }
  };

  const trackCTA = (ctaType: string, location: string) => {
    trackEvent('click', 'CTA', `${ctaType}_${location}`);
  };

  const trackFormSubmission = (formType: string) => {
    trackEvent('submit', 'Form', formType);
  };

  const trackWhatsApp = (location: string) => {
    trackEvent('click', 'WhatsApp', location);
  };

  const trackPhoneCall = (location: string) => {
    trackEvent('click', 'Phone', location);
  };

  const trackEmail = (location: string) => {
    trackEvent('click', 'Email', location);
  };

  const trackSocialMedia = (platform: string, location: string) => {
    trackEvent('click', 'Social', `${platform}_${location}`);
  };

  const trackGalleryInteraction = (action: string, imageIndex: number) => {
    trackEvent(action, 'Gallery', `image_${imageIndex}`);
  };

  const trackTestimonialView = (testimonialIndex: number) => {
    trackEvent('view', 'Testimonial', `testimonial_${testimonialIndex}`);
  };

  const trackServiceView = (serviceName: string) => {
    trackEvent('view', 'Service', serviceName);
  };

  return {
    trackEvent,
    trackPageView,
    trackCTA,
    trackFormSubmission,
    trackWhatsApp,
    trackPhoneCall,
    trackEmail,
    trackSocialMedia,
    trackGalleryInteraction,
    trackTestimonialView,
    trackServiceView,
  };
};
