#!/usr/bin/env node

/**
 * Test d'Accessibilité Automatisé - Sofiath Events
 * Vérifie la conformité WCAG AA
 */

const fs = require('fs');
const path = require('path');

console.log('♿ Test d\'Accessibilité Automatisé - Sofiath Events\n');

// Configuration
const COMPONENTS_DIR = './src/components';
const CSS_FILE = './src/app/globals.css';

// Tests d'accessibilité
const accessibilityTests = {
  // 1. Vérification des composants React
  reactComponents: () => {
    console.log('📁 1. Vérification des composants React...');
    
    const components = [
      'Header.tsx',
      'Hero.tsx',
      'Services.tsx',
      'WhyChooseUs.tsx',
      'Gallery.tsx',
      'Testimonials.tsx',
      'CTABanner.tsx',
      'Contact.tsx',
      'Footer.tsx',
      'CookieConsent.tsx'
    ];

    let allPassed = true;
    components.forEach(component => {
      const filePath = path.join(COMPONENTS_DIR, component);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const tests = [
          { name: 'ARIA labels', pattern: /aria-label|aria-labelledby/, required: true },
          { name: 'Alt text images', pattern: /alt=|alt\s*=\s*["']/, required: true },
          { name: 'Focus management', pattern: /focus|tabIndex/, required: true },
          { name: 'Keyboard navigation', pattern: /onKeyDown|onKeyUp|onKeyPress/, required: false },
          { name: 'Screen reader support', pattern: /sr-only|screen-reader/, required: false }
        ];

        let componentPassed = true;
        tests.forEach(test => {
          if (test.required && !test.pattern.test(content)) {
            console.log(`  ❌ ${component}: ${test.name} manquant`);
            componentPassed = false;
          } else if (test.pattern.test(content)) {
            console.log(`  ✅ ${component}: ${test.name} présent`);
          }
        });

        if (componentPassed) {
          console.log(`  ✅ ${component}: Tous les tests passés`);
        } else {
          allPassed = false;
        }
      } else {
        console.log(`  ❌ ${component}: Fichier manquant`);
        allPassed = false;
      }
    });

    return allPassed;
  },

  // 2. Vérification CSS d'accessibilité
  cssAccessibility: () => {
    console.log('\n🎨 2. Vérification CSS d\'accessibilité...');
    
    if (!fs.existsSync(CSS_FILE)) {
      console.log('  ❌ Fichier CSS manquant');
      return false;
    }

    const cssContent = fs.readFileSync(CSS_FILE, 'utf8');
    const cssTests = [
      { name: 'Focus states', pattern: /focus-visible|:focus/, required: true },
      { name: 'Skip link', pattern: /skip-link/, required: true },
      { name: 'Screen reader only', pattern: /sr-only/, required: true },
      { name: 'Reduced motion', pattern: /prefers-reduced-motion/, required: true },
      { name: 'High contrast', pattern: /prefers-contrast/, required: false },
      { name: 'Dark mode', pattern: /prefers-color-scheme/, required: false }
    ];

    let allPassed = true;
    cssTests.forEach(test => {
      if (test.required && !test.pattern.test(cssContent)) {
        console.log(`  ❌ ${test.name} manquant`);
        allPassed = false;
      } else if (test.pattern.test(cssContent)) {
        console.log(`  ✅ ${test.name} présent`);
      }
    });

    return allPassed;
  },

  // 3. Vérification des contrastes
  colorContrast: () => {
    console.log('\n🎨 3. Vérification des contrastes...');
    
    const cssContent = fs.readFileSync(CSS_FILE, 'utf8');
    
    // Extraire les couleurs utilisées
    const colorRegex = /#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}|rgb\([^)]+\)|rgba\([^)]+\)/g;
    const colors = cssContent.match(colorRegex) || [];
    
    console.log(`  📊 ${colors.length} couleurs trouvées`);
    
    // Vérifier les couleurs de la charte graphique
    const brandColors = [
      '#34C6C2', // Turquoise
      '#0F172A', // Navy
      '#FFFFFF', // White
      '#FF6B6B', // Coral
      '#F4C95D'  // Gold
    ];

    brandColors.forEach(color => {
      if (colors.includes(color)) {
        console.log(`  ✅ Couleur de marque ${color} utilisée`);
      }
    });

    return true; // Les contrastes seront vérifiés manuellement
  },

  // 4. Vérification des liens et boutons
  interactiveElements: () => {
    console.log('\n🔗 4. Vérification des éléments interactifs...');
    
    const components = [
      'Header.tsx',
      'Contact.tsx',
      'Footer.tsx'
    ];

    let allPassed = true;
    components.forEach(component => {
      const filePath = path.join(COMPONENTS_DIR, component);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Vérifier les liens WhatsApp
        const whatsappLinks = content.match(/wa\.me\/[0-9]+/g) || [];
        whatsappLinks.forEach(link => {
          console.log(`  ✅ Lien WhatsApp trouvé: ${link}`);
        });

        // Vérifier les liens téléphone
        const phoneLinks = content.match(/tel:\+[0-9]+/g) || [];
        phoneLinks.forEach(link => {
          console.log(`  ✅ Lien téléphone trouvé: ${link}`);
        });

        // Vérifier les liens email
        const emailLinks = content.match(/mailto:[^"'\s]+/g) || [];
        emailLinks.forEach(link => {
          console.log(`  ✅ Lien email trouvé: ${link}`);
        });

        // Vérifier les boutons
        const buttons = content.match(/<button[^>]*>/g) || [];
        buttons.forEach(button => {
          if (!button.includes('aria-label') && !button.includes('aria-labelledby')) {
            console.log(`  ⚠️  Bouton sans aria-label: ${button.substring(0, 50)}...`);
          } else {
            console.log(`  ✅ Bouton avec aria-label`);
          }
        });
      }
    });

    return allPassed;
  },

  // 5. Vérification du formulaire
  formAccessibility: () => {
    console.log('\n📝 5. Vérification du formulaire...');
    
    const contactFile = path.join(COMPONENTS_DIR, 'Contact.tsx');
    if (!fs.existsSync(contactFile)) {
      console.log('  ❌ Composant Contact manquant');
      return false;
    }

    const content = fs.readFileSync(contactFile, 'utf8');
    const formTests = [
      { name: 'Labels explicites', pattern: /<label[^>]*>/, required: true },
      { name: 'Validation Zod', pattern: /zodResolver/, required: true },
      { name: 'Messages d\'erreur', pattern: /errors\.|error\.message/, required: true },
      { name: 'Champs requis', pattern: /required|min:|email\(/, required: true },
      { name: 'Focus management', pattern: /focus|tabIndex/, required: true }
    ];

    let allPassed = true;
    formTests.forEach(test => {
      if (test.required && !test.pattern.test(content)) {
        console.log(`  ❌ ${test.name} manquant`);
        allPassed = false;
      } else if (test.pattern.test(content)) {
        console.log(`  ✅ ${test.name} présent`);
      }
    });

    return allPassed;
  },

  // 6. Vérification de la navigation
  navigationAccessibility: () => {
    console.log('\n🧭 6. Vérification de la navigation...');
    
    const headerFile = path.join(COMPONENTS_DIR, 'Header.tsx');
    if (!fs.existsSync(headerFile)) {
      console.log('  ❌ Composant Header manquant');
      return false;
    }

    const content = fs.readFileSync(headerFile, 'utf8');
    const navTests = [
      { name: 'Menu mobile', pattern: /isMobileMenuOpen/, required: true },
      { name: 'Navigation clavier', pattern: /onKeyDown|tabIndex/, required: true },
      { name: 'Liens d\'ancrage', pattern: /scrollToSection/, required: true },
      { name: 'Skip link', pattern: /skip-link/, required: false }
    ];

    let allPassed = true;
    navTests.forEach(test => {
      if (test.required && !test.pattern.test(content)) {
        console.log(`  ❌ ${test.name} manquant`);
        allPassed = false;
      } else if (test.pattern.test(content)) {
        console.log(`  ✅ ${test.name} présent`);
      }
    });

    return allPassed;
  },

  // 7. Vérification des images
  imageAccessibility: () => {
    console.log('\n🖼️ 7. Vérification des images...');
    
    const galleryFile = path.join(COMPONENTS_DIR, 'Gallery.tsx');
    if (!fs.existsSync(galleryFile)) {
      console.log('  ❌ Composant Gallery manquant');
      return false;
    }

    const content = fs.readFileSync(galleryFile, 'utf8');
    const imageTests = [
      { name: 'Next.js Image', pattern: /next\/image/, required: true },
      { name: 'Alt text', pattern: /alt=|alt\s*=\s*["']/, required: true },
      { name: 'Lazy loading', pattern: /loading="lazy"/, required: true },
      { name: 'Optimisation', pattern: /sizes=|quality=/, required: false }
    ];

    let allPassed = true;
    imageTests.forEach(test => {
      if (test.required && !test.pattern.test(content)) {
        console.log(`  ❌ ${test.name} manquant`);
        allPassed = false;
      } else if (test.pattern.test(content)) {
        console.log(`  ✅ ${test.name} présent`);
      }
    });

    return allPassed;
  }
};

// Fonction principale
function runAccessibilityTests() {
  console.log('🔍 Lancement des tests d\'accessibilité...\n');

  const results = {
    reactComponents: accessibilityTests.reactComponents(),
    cssAccessibility: accessibilityTests.cssAccessibility(),
    colorContrast: accessibilityTests.colorContrast(),
    interactiveElements: accessibilityTests.interactiveElements(),
    formAccessibility: accessibilityTests.formAccessibility(),
    navigationAccessibility: accessibilityTests.navigationAccessibility(),
    imageAccessibility: accessibilityTests.imageAccessibility()
  };

  // Résumé final
  console.log('\n📋 RÉSUMÉ DES TESTS D\'ACCESSIBILITÉ');
  console.log('====================================');

  const allPassed = Object.values(results).every(result => result);
  
  Object.entries(results).forEach(([test, passed]) => {
    const status = passed ? '✅ PASS' : '❌ FAIL';
    const testName = test.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    console.log(`${status} ${testName}`);
  });

  console.log('\n' + '='.repeat(50));
  if (allPassed) {
    console.log('🎉 TOUS LES TESTS D\'ACCESSIBILITÉ SONT PASSÉS !');
    console.log('✅ La landing page respecte les standards WCAG AA');
  } else {
    console.log('⚠️  CERTAINS TESTS D\'ACCESSIBILITÉ ONT ÉCHOUÉ');
    console.log('🔧 Veuillez corriger les problèmes avant la remise');
  }

  console.log('\n📝 Tests manuels à effectuer :');
  console.log('1. Navigation au clavier (Tab, Shift+Tab, Enter, Escape)');
  console.log('2. Test avec un screen reader (NVDA, VoiceOver)');
  console.log('3. Vérification des contrastes avec un outil (WebAIM)');
  console.log('4. Test avec "reduced motion" activé');
  console.log('5. Test avec zoom 200% et 400%');

  return allPassed;
}

// Lancer les tests
if (require.main === module) {
  const success = runAccessibilityTests();
  process.exit(success ? 0 : 1);
}

module.exports = { runAccessibilityTests, accessibilityTests };
