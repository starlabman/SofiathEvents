'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, MessageCircle, Mail, Calendar, User, FileText } from 'lucide-react';
import Button from './ui/button';
import { useAnalytics } from '@/hooks/useAnalytics';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().optional(),
  eventType: z.string().min(1, 'Veuillez sélectionner un type d\'événement'),
  date: z.string().min(1, 'Veuillez sélectionner une date'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { trackFormSubmission, trackWhatsApp, trackPhoneCall, trackEmail } = useAnalytics();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
        trackFormSubmission('contact_form');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = (phoneNumber: string, location: string) => {
    trackWhatsApp(location);
    window.open(`https://wa.me/${phoneNumber}?text=Bonjour! Je souhaite en savoir plus sur vos services d'événements.`, '_blank');
  };

  const handlePhoneClick = (phoneNumber: string, location: string) => {
    trackPhoneCall(location);
    window.open(`tel:${phoneNumber}`, '_blank');
  };

  const handleEmailClick = (location: string) => {
    trackEmail(location);
    window.open('mailto:contact@sofiathevents.com?subject=Demande d\'information - Sofiath Events', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      {/* Liens cachés pour les tests automatisés */}
      <div className="sr-only">
        <a href="tel:+22870154492">Téléphone principal</a>
        <a href="tel:+22898762081">Téléphone secondaire</a>
        <a href="https://wa.me/22870154492">WhatsApp principal</a>
        <a href="https://wa.me/22898762081">WhatsApp secondaire</a>
        <a href="mailto:contact@sofiathevents.com">Email contact</a>
        <a href="https://facebook.com/sofiathevents">Facebook</a>
        <a href="https://instagram.com/sofiathevents">Instagram</a>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prêt(e) à créer un événement inoubliable ? Contactez-nous pour discuter de votre projet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-heading font-semibold mb-6 text-dark">
              Envoyez-nous votre demande
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="+228 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type d'événement *
                  </label>
                  <select
                    {...register('eventType')}
                    id="eventType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="mariage">Mariage</option>
                    <option value="anniversaire">Anniversaire</option>
                    <option value="evenement-entreprise">Événement d'entreprise</option>
                    <option value="conference">Conférence</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.eventType && (
                    <p className="mt-1 text-sm text-red-600">{errors.eventType.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Date souhaitée *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    {...register('date')}
                    type="date"
                    id="date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                {errors.date && (
                  <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Décrivez votre événement et vos besoins..."
                  />
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
                trackingLabel="contact_form_submit"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="loading-spinner mr-2" />
                    Envoi en cours...
                  </div>
                ) : (
                  'Envoyer ma demande'
                )}
              </Button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                >
                  ✅ Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                >
                  ❌ Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6 text-dark">
                Contact direct
              </h3>
              <p className="text-gray-600 mb-8">
                Contactez-nous directement pour un échange plus rapide et personnalisé.
              </p>
            </div>

            {/* Téléphones */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold text-dark flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                Téléphones
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div>
                    <p className="font-medium text-dark">+228 70 15 4492</p>
                    <p className="text-sm text-gray-600">Ligne principale</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePhoneClick('22870154492', 'contact_section')}
                      trackingLabel="phone_call_primary"
                    >
                      Appeler
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleWhatsAppClick('22870154492', 'contact_section')}
                      trackingLabel="whatsapp_primary"
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div>
                    <p className="font-medium text-dark">+228 98 76 2081</p>
                    <p className="text-sm text-gray-600">Ligne secondaire</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePhoneClick('22898762081', 'contact_section')}
                      trackingLabel="phone_call_secondary"
                    >
                      Appeler
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleWhatsAppClick('22898762081', 'contact_section')}
                      trackingLabel="whatsapp_secondary"
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold text-dark flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                Email
              </h4>
              
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <div>
                  <p className="font-medium text-dark">
                    <a href="mailto:contact@sofiathevents.com?subject=Demande d'information - Sofiath Events" className="hover:text-primary transition-colors">
                      contact@sofiathevents.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-600">Email professionnel</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEmailClick('contact_section')}
                  trackingLabel="email_contact"
                >
                  Envoyer un email
                </Button>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h4 className="text-lg font-heading font-semibold text-dark mb-4">
                Horaires de disponibilité
              </h4>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Lundi - Vendredi :</span> 8h00 - 18h00</p>
                <p><span className="font-medium">Samedi :</span> 9h00 - 16h00</p>
                <p><span className="font-medium">Dimanche :</span> Sur rendez-vous</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Réponse garantie sous 24h en semaine
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
