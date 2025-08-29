import type { Metadata } from "next";
import Script from 'next/script';
import CookieConsent from '@/components/CookieConsent';
import "./globals.css";

export const metadata: Metadata = {
  title: "Sofiath Events – Agence événementielle & traiteur premium",
  description: "Organisation d'événements, service traiteur, hôtesses d'accueil et location de couverts. Transformons vos moments en souvenirs inoubliables.",
  keywords: "événementiel, traiteur, mariage, hôtesses, location couverts, Lomé, Togo",
  authors: [{ name: "Sofiath Events" }],
  creator: "Sofiath Events",
  publisher: "Sofiath Events",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sofiath-events.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sofiath Events – Agence événementielle & traiteur premium",
    description: "Organisation d'événements, service traiteur, hôtesses d'accueil et location de couverts. Transformons vos moments en souvenirs inoubliables.",
    url: 'https://sofiath-events.com',
    siteName: 'Sofiath Events',
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Sofiath Events - Agence événementielle & traiteur premium',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sofiath Events – Agence événementielle & traiteur premium",
    description: "Organisation d'événements, service traiteur, hôtesses d'accueil et location de couverts. Transformons vos moments en souvenirs inoubliables.",
    images: ['/images/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G-XXXXXXX', // Placeholder for Google Analytics
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body>
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
        
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>

        {/* Google Analytics with consent management */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Default consent state (denied until user accepts)
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            
            // Check for existing consent
            const consent = localStorage.getItem('cookie-consent');
            if (consent === 'accepted') {
              gtag('consent', 'update', {
                'analytics_storage': 'granted'
              });
            }
            
            gtag('config', 'G-XXXXXXX', {
              page_title: document.title,
              page_location: window.location.href,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>

        <main id="main-content">
          {children}
        </main>
        
        <CookieConsent />
      </body>
    </html>
  );
}
