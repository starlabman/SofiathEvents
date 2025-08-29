'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MessageCircle, Calendar, User, Send, Sparkles } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/22870154492?text=Bonjour! Je souhaite en savoir plus sur vos services d\'événements.', '_blank');
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-elegant relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-rose-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container-elegant relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gold-100 border border-gold-200 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-gold-600" />
            <span className="text-gold-700 font-semibold">Contactez-nous</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-dark mb-8">
            Créons Votre{' '}
            <span className="text-gradient-gold">
              Événement de Rêve
            </span>
          </h2>
          <p className="text-xl text-sage-600 max-w-4xl mx-auto leading-relaxed font-elegant">
            Prêt(e) à transformer votre vision en réalité ? Contactez-nous pour discuter 
            de votre projet et recevoir une proposition personnalisée.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-cream-200">
            <h3 className="text-3xl font-heading font-bold text-dark mb-8">
              Envoyez-nous votre demande
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-2">
                    Nom complet *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-400 w-5 h-5" />
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className="form-input pl-10"
                      placeholder="Votre nom"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-rose-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-400 w-5 h-5" />
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="form-input pl-10"
                      placeholder="votre@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-rose-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-sage-700 mb-2">
                  Téléphone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-400 w-5 h-5" />
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="form-input pl-10"
                    placeholder="+228 XX XX XX XX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 text-sage-400 w-5 h-5" />
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="form-textarea pl-10"
                    placeholder="Décrivez votre événement et vos besoins..."
                  />
                </div>
                {errors.message && (
                  <p className="text-rose-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 font-medium">
                    ✅ Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                  <p className="text-rose-700 font-medium">
                    ❌ Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full group"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="loading-spinner w-5 h-5 mr-2"></div>
                    Envoi en cours...
                  </div>
                ) : (
                  <>
                    <span>Envoyer ma demande</span>
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-heading font-bold text-dark mb-6">
                Contact direct
              </h3>
              <p className="text-lg text-sage-600 mb-8">
                Contactez-nous directement pour un échange plus rapide et personnalisé.
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-semibold text-dark flex items-center gap-2">
                <Phone className="w-5 h-5 text-gold-600" />
                Téléphones
              </h4>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-cream-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-dark text-lg">+228 70 15 4492</p>
                      <p className="text-sage-600 text-sm">Ligne principale</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="tel:+22870154492"
                        className="btn-secondary text-sm px-4 py-2"
                      >
                        Appeler
                      </a>
                      <button
                        onClick={openWhatsApp}
                        className="btn-whatsapp text-sm px-4 py-2"
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-cream-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-dark text-lg">+228 98 76 2081</p>
                      <p className="text-sage-600 text-sm">Ligne secondaire</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="tel:+22898762081"
                        className="btn-secondary text-sm px-4 py-2"
                      >
                        Appeler
                      </a>
                      <button
                        onClick={() => window.open('https://wa.me/22898762081', '_blank')}
                        className="btn-whatsapp text-sm px-4 py-2"
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-semibold text-dark flex items-center gap-2">
                <Mail className="w-5 h-5 text-gold-600" />
                Email
              </h4>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-cream-200">
                <div className="flex items-center justify-between">
                  <div>
                    <a
                      href="mailto:contact@sofiathevents.com?subject=Demande d'information - Sofiath Events"
                      className="font-semibold text-dark text-lg hover:text-gold-600 transition-colors"
                    >
                      contact@sofiathevents.com
                    </a>
                    <p className="text-sage-600 text-sm">Email professionnel</p>
                  </div>
                  <a
                    href="mailto:contact@sofiathevents.com?subject=Demande d'information - Sofiath Events"
                    className="btn-secondary text-sm px-4 py-2"
                  >
                    Envoyer un email
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-cream-200">
              <h4 className="text-xl font-heading font-semibold text-dark mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold-600" />
                Horaires de disponibilité
              </h4>
              <div className="space-y-2 text-sage-600">
                <p><span className="font-medium">Lundi - Vendredi :</span> 8h00 - 18h00</p>
                <p><span className="font-medium">Samedi :</span> 9h00 - 16h00</p>
                <p><span className="font-medium">Dimanche :</span> Sur rendez-vous</p>
              </div>
              <p className="text-sm text-sage-500 mt-4">
                * Réponse garantie sous 24h en semaine
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
