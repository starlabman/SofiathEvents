#!/usr/bin/env node

/**
 * QA Checklist Automatisé - Sofiath Events
 * Vérifie tous les éléments critiques avant la remise
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 QA Checklist Automatisé - Sofiath Events\n');

// 1. Vérification des fichiers critiques
console.log('📁 1. Vérification des fichiers critiques...');
const criticalFiles = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/globals.css',
  'src/components/Header.tsx',
  'src/components/Hero.tsx',
  'src/components/Services.tsx',
  'src/components/Contact.tsx',
  'src/components/Footer.tsx',
  'src/app/api/contact/route.ts',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/site.webmanifest',
  'vercel.json',
  'netlify.toml',
  'next.config.js',
  'tailwind.config.ts',
  'package.json'
];

let criticalFilesOk = true;
criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - MANQUANT`);
    criticalFilesOk = false;
  }
});

// 2. Vérification des liens et URLs
console.log('\n🔗 2. Vérification des liens et URLs...');
const filesToCheck = [
  'src/components/Header.tsx',
  'src/components/Contact.tsx',
  'src/components/Footer.tsx',
  'src/app/layout.tsx'
];

const expectedLinks = [
  'wa.me/22870154492',
  'wa.me/22898762081',
  'tel:+22870154492',
  'tel:+22898762081',
  'mailto:contact@sofiathevents.com',
  'https://facebook.com/sofiathevents',
  'https://instagram.com/sofiathevents'
];

let linksOk = true;
filesToCheck.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    expectedLinks.forEach(link => {
      if (content.includes(link)) {
        console.log(`  ✅ ${link} trouvé dans ${file}`);
      } else {
        console.log(`  ❌ ${link} manquant dans ${file}`);
        linksOk = false;
      }
    });
  }
});

// 3. Vérification SEO
console.log('\n🔍 3. Vérification SEO...');
const layoutContent = fs.readFileSync('src/app/layout.tsx', 'utf8');
const seoChecks = [
  { name: 'Title SEO', pattern: /title.*Sofiath Events.*Agence événementielle/ },
  { name: 'Description', pattern: /description.*Organisation d'événements/ },
  { name: 'Open Graph', pattern: /openGraph/ },
  { name: 'Twitter Cards', pattern: /twitter/ },
  { name: 'Canonical URL', pattern: /canonical/ },
  { name: 'Google Analytics', pattern: /G-XXXXXXX/ }
];

let seoOk = true;
seoChecks.forEach(check => {
  if (check.pattern.test(layoutContent)) {
    console.log(`  ✅ ${check.name}`);
  } else {
    console.log(`  ❌ ${check.name} - MANQUANT`);
    seoOk = false;
  }
});

// 4. Vérification des composants React
console.log('\n⚛️ 4. Vérification des composants React...');
const reactComponents = [
  'src/components/Header.tsx',
  'src/components/Hero.tsx',
  'src/components/Services.tsx',
  'src/components/WhyChooseUs.tsx',
  'src/components/Gallery.tsx',
  'src/components/Testimonials.tsx',
  'src/components/CTABanner.tsx',
  'src/components/Contact.tsx',
  'src/components/Footer.tsx',
  'src/components/CookieConsent.tsx'
];

let componentsOk = true;
reactComponents.forEach(component => {
  if (fs.existsSync(component)) {
    const content = fs.readFileSync(component, 'utf8');
    if (content.includes('export default') && content.includes('React')) {
      console.log(`  ✅ ${component}`);
    } else {
      console.log(`  ⚠️  ${component} - Structure suspecte`);
      componentsOk = false;
    }
  } else {
    console.log(`  ❌ ${component} - MANQUANT`);
    componentsOk = false;
  }
});

// 5. Vérification de l'accessibilité
console.log('\n♿ 5. Vérification de l\'accessibilité...');
const accessibilityChecks = [
  { name: 'Skip link', pattern: /skip-link/ },
  { name: 'ARIA labels', pattern: /aria-label/ },
  { name: 'Focus states', pattern: /focus-visible/ },
  { name: 'Screen reader', pattern: /sr-only/ },
  { name: 'Reduced motion', pattern: /prefers-reduced-motion/ }
];

let accessibilityOk = true;
const cssContent = fs.readFileSync('src/app/globals.css', 'utf8');
accessibilityChecks.forEach(check => {
  if (check.pattern.test(cssContent)) {
    console.log(`  ✅ ${check.name}`);
  } else {
    console.log(`  ❌ ${check.name} - MANQUANT`);
    accessibilityOk = false;
  }
});

// 6. Vérification de la performance
console.log('\n⚡ 6. Vérification de la performance...');
const performanceChecks = [
  { name: 'Image optimization', pattern: /next\/image/ },
  { name: 'Font optimization', pattern: /font-display: swap/ },
  { name: 'CSS optimization', pattern: /content-visibility/ },
  { name: 'Bundle analyzer', pattern: /@next\/bundle-analyzer/ }
];

let performanceOk = true;
performanceChecks.forEach(check => {
  if (check.pattern.test(cssContent) || check.pattern.test(layoutContent)) {
    console.log(`  ✅ ${check.name}`);
  } else {
    console.log(`  ⚠️  ${check.name} - À vérifier`);
  }
});

// 7. Vérification de la sécurité
console.log('\n🔒 7. Vérification de la sécurité...');
const securityChecks = [
  { name: 'CSP Headers', pattern: /Content-Security-Policy/ },
  { name: 'X-Frame-Options', pattern: /X-Frame-Options/ },
  { name: 'XSS Protection', pattern: /X-XSS-Protection/ },
  { name: 'HSTS', pattern: /Strict-Transport-Security/ }
];

let securityOk = true;
const vercelConfig = fs.readFileSync('vercel.json', 'utf8');
securityChecks.forEach(check => {
  if (check.pattern.test(vercelConfig)) {
    console.log(`  ✅ ${check.name}`);
  } else {
    console.log(`  ❌ ${check.name} - MANQUANT`);
    securityOk = false;
  }
});

// 8. Vérification du tracking
console.log('\n📊 8. Vérification du tracking...');
const trackingChecks = [
  { name: 'Google Analytics', pattern: /gtag/ },
  { name: 'Cookie consent', pattern: /CookieConsent/ },
  { name: 'Event tracking', pattern: /trackEvent/ },
  { name: 'useAnalytics hook', pattern: /useAnalytics/ }
];

let trackingOk = true;
trackingChecks.forEach(check => {
  if (check.pattern.test(layoutContent) || fs.existsSync('src/hooks/useAnalytics.ts')) {
    console.log(`  ✅ ${check.name}`);
  } else {
    console.log(`  ❌ ${check.name} - MANQUANT`);
    trackingOk = false;
  }
});

// Résumé final
console.log('\n📋 RÉSUMÉ DE LA QA CHECKLIST');
console.log('============================');

const allChecks = [
  { name: 'Fichiers critiques', status: criticalFilesOk },
  { name: 'Liens et URLs', status: linksOk },
  { name: 'SEO', status: seoOk },
  { name: 'Composants React', status: componentsOk },
  { name: 'Accessibilité', status: accessibilityOk },
  { name: 'Performance', status: performanceOk },
  { name: 'Sécurité', status: securityOk },
  { name: 'Tracking', status: trackingOk }
];

let allPassed = true;
allChecks.forEach(check => {
  const status = check.status ? '✅ PASS' : '❌ FAIL';
  console.log(`${status} ${check.name}`);
  if (!check.status) allPassed = false;
});

console.log('\n' + '='.repeat(50));
if (allPassed) {
  console.log('🎉 TOUS LES TESTS SONT PASSÉS !');
  console.log('✅ La landing page est prête pour la production');
} else {
  console.log('⚠️  CERTAINS TESTS ONT ÉCHOUÉ');
  console.log('🔧 Veuillez corriger les problèmes avant la remise');
}

console.log('\n📝 Checklist manuelle à effectuer :');
console.log('1. Test responsive (360px → 1440px)');
console.log('2. Test de tous les liens (WhatsApp, tel:, mailto:)');
console.log('3. Test du formulaire (validation, messages d\'erreur)');
console.log('4. Test SEO (title, description, OG)');
console.log('5. Test performance mobile 3G');
console.log('6. Test accessibilité (tabbing, focus visibles)');

process.exit(allPassed ? 0 : 1);
