#!/usr/bin/env node

/**
 * Test de Performance Automatisé - Sofiath Events
 * Vérifie les métriques de performance critiques
 */

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path'); // Added missing import for path

console.log('⚡ Test de Performance Automatisé - Sofiath Events\n');

// Configuration
const BASE_URL = 'http://localhost:3000';
const LIGHTHOUSE_CONFIG = {
  chromeFlags: '--headless --no-sandbox --disable-gpu',
  output: 'json',
  onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo']
};

async function runLighthouseTest() {
  try {
    console.log('🔍 Lancement du test Lighthouse...');
    
    // Vérifier que le serveur est en cours d'exécution
    try {
      execSync(`curl -s ${BASE_URL} > /dev/null`, { stdio: 'ignore' });
    } catch (error) {
      console.log('❌ Serveur non accessible. Lancez d\'abord : npm run dev');
      process.exit(1);
    }

    // Lancer Lighthouse
    const command = `npx lighthouse ${BASE_URL} --output=json --output-path=./lighthouse-report.json --chrome-flags="${LIGHTHOUSE_CONFIG.chromeFlags}" --only-categories=performance,accessibility,best-practices,seo`;
    
    execSync(command, { stdio: 'inherit' });

    // Analyser les résultats
    if (fs.existsSync('./lighthouse-report.json')) {
      const report = JSON.parse(fs.readFileSync('./lighthouse-report.json', 'utf8'));
      analyzeResults(report);
    } else {
      console.log('❌ Rapport Lighthouse non généré');
    }

  } catch (error) {
    console.log('❌ Erreur lors du test Lighthouse:', error.message);
  }
}

function analyzeResults(report) {
  console.log('\n📊 ANALYSE DES RÉSULTATS');
  console.log('========================');

  const scores = report.lighthouseResult.categories;
  const audits = report.lighthouseResult.audits;

  // Scores principaux
  console.log('\n🎯 Scores principaux :');
  console.log(`Performance: ${Math.round(scores.performance.score * 100)}/100`);
  console.log(`Accessibilité: ${Math.round(scores.accessibility.score * 100)}/100`);
  console.log(`Bonnes pratiques: ${Math.round(scores['best-practices'].score * 100)}/100`);
  console.log(`SEO: ${Math.round(scores.seo.score * 100)}/100`);

  // Métriques Web Vitals
  console.log('\n⚡ Métriques Web Vitals :');
  const metrics = {
    'First Contentful Paint': audits['first-contentful-paint'],
    'Largest Contentful Paint': audits['largest-contentful-paint'],
    'First Input Delay': audits['max-potential-fid'],
    'Cumulative Layout Shift': audits['cumulative-layout-shift'],
    'Speed Index': audits['speed-index']
  };

  Object.entries(metrics).forEach(([name, metric]) => {
    if (metric && metric.numericValue !== undefined) {
      const value = metric.numericValue;
      const unit = metric.numericUnit;
      const score = metric.score;
      const status = score >= 0.9 ? '✅' : score >= 0.5 ? '⚠️' : '❌';
      console.log(`${status} ${name}: ${value.toFixed(2)}${unit} (score: ${Math.round(score * 100)})`);
    }
  });

  // Optimisations critiques
  console.log('\n🔧 Optimisations critiques :');
  const criticalIssues = [
    'unused-css-rules',
    'unused-javascript',
    'unminified-css',
    'unminified-javascript',
    'unused-images',
    'render-blocking-resources',
    'unused-font-display'
  ];

  criticalIssues.forEach(issue => {
    const audit = audits[issue];
    if (audit && audit.score < 1) {
      const savings = audit.details?.items?.[0]?.wastedBytes;
      if (savings) {
        const savingsKB = (savings / 1024).toFixed(2);
        console.log(`⚠️  ${audit.title}: ${savingsKB}KB à optimiser`);
      }
    }
  });

  // Vérifications de sécurité
  console.log('\n🔒 Vérifications de sécurité :');
  const securityChecks = [
    'no-vulnerable-libraries',
    'external-anchors-use-rel-noopener',
    'geolocation-on-start',
    'notification-on-start'
  ];

  securityChecks.forEach(check => {
    const audit = audits[check];
    if (audit) {
      const status = audit.score === 1 ? '✅' : '❌';
      console.log(`${status} ${audit.title}`);
    }
  });

  // Recommandations
  console.log('\n💡 Recommandations :');
  const recommendations = scores.performance.auditRefs
    .filter(ref => ref.score < 0.9)
    .slice(0, 5)
    .map(ref => audits[ref.id]);

  recommendations.forEach(audit => {
    if (audit && audit.description) {
      console.log(`• ${audit.title}: ${audit.description}`);
    }
  });

  // Score global
  const overallScore = Math.round(
    (scores.performance.score + scores.accessibility.score + 
     scores['best-practices'].score + scores.seo.score) / 4 * 100
  );

  console.log('\n' + '='.repeat(50));
  console.log(`🎯 SCORE GLOBAL: ${overallScore}/100`);
  
  if (overallScore >= 90) {
    console.log('✅ Performance excellente ! Prêt pour la production.');
  } else if (overallScore >= 70) {
    console.log('⚠️  Performance correcte. Optimisations recommandées.');
  } else {
    console.log('❌ Performance insuffisante. Optimisations nécessaires.');
  }

  // Nettoyer le fichier de rapport
  if (fs.existsSync('./lighthouse-report.json')) {
    fs.unlinkSync('./lighthouse-report.json');
  }
}

// Test de taille des assets
function checkAssetSizes() {
  console.log('\n📦 Vérification de la taille des assets...');
  
  const buildDir = './.next';
  if (!fs.existsSync(buildDir)) {
    console.log('❌ Dossier .next non trouvé. Lancez d\'abord : npm run build');
    return;
  }

  // Vérifier la taille des fichiers JS
  const jsFiles = [];
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.js')) {
        jsFiles.push({ path: filePath, size: stat.size });
      }
    });
  }

  scanDirectory(buildDir);

  // Analyser les tailles
  const totalSize = jsFiles.reduce((sum, file) => sum + file.size, 0);
  const totalSizeKB = (totalSize / 1024).toFixed(2);

  console.log(`📊 Taille totale JS: ${totalSizeKB}KB`);
  
  if (totalSize > 500 * 1024) { // 500KB
    console.log('⚠️  Taille JS importante. Considérer le code splitting.');
  } else {
    console.log('✅ Taille JS optimale.');
  }

  // Fichiers les plus volumineux
  const largestFiles = jsFiles
    .sort((a, b) => b.size - a.size)
    .slice(0, 3);

  console.log('\n📈 Fichiers les plus volumineux :');
  largestFiles.forEach(file => {
    const sizeKB = (file.size / 1024).toFixed(2);
    const relativePath = file.path.replace(buildDir, '');
    console.log(`• ${relativePath}: ${sizeKB}KB`);
  });
}

// Test de temps de chargement
async function testLoadTime() {
  console.log('\n⏱️  Test de temps de chargement...');
  
  try {
    const startTime = Date.now();
    execSync(`curl -s ${BASE_URL} > /dev/null`);
    const loadTime = Date.now() - startTime;
    
    console.log(`📊 Temps de chargement: ${loadTime}ms`);
    
    if (loadTime < 1000) {
      console.log('✅ Temps de chargement excellent !');
    } else if (loadTime < 3000) {
      console.log('⚠️  Temps de chargement correct.');
    } else {
      console.log('❌ Temps de chargement lent.');
    }
  } catch (error) {
    console.log('❌ Impossible de tester le temps de chargement');
  }
}

// Fonction principale
async function main() {
  try {
    await runLighthouseTest();
    checkAssetSizes();
    await testLoadTime();
    
    console.log('\n🎉 Test de performance terminé !');
    console.log('\n📝 Prochaines étapes :');
    console.log('1. Vérifier les recommandations ci-dessus');
    console.log('2. Optimiser les assets si nécessaire');
    console.log('3. Re-lancer le test après optimisations');
    
  } catch (error) {
    console.log('❌ Erreur lors du test de performance:', error.message);
    process.exit(1);
  }
}

// Lancer le test
if (require.main === module) {
  main();
}

module.exports = { runLighthouseTest, checkAssetSizes, testLoadTime };
