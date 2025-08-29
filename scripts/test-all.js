#!/usr/bin/env node

/**
 * Test Complet - Sofiath Events
 * Lance tous les tests automatisés
 */

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Test Complet - Sofiath Events');
console.log('================================\n');

// Configuration
const TESTS = [
  { name: 'QA Checklist', command: 'npm run qa', critical: true },
  { name: 'Accessibilité', command: 'npm run accessibility', critical: true },
  { name: 'Performance', command: 'npm run performance', critical: false },
  { name: 'Build', command: 'npm run build', critical: true },
  { name: 'Linting', command: 'npm run lint', critical: false },
  { name: 'Type Check', command: 'npm run type-check', critical: false }
];

// Fonction pour exécuter un test
function runTest(test) {
  console.log(`\n🔍 Lancement du test: ${test.name}`);
  console.log('─'.repeat(50));
  
  try {
    const startTime = Date.now();
    execSync(test.command, { stdio: 'inherit' });
    const duration = Date.now() - startTime;
    
    console.log(`\n✅ ${test.name} - RÉUSSI (${duration}ms)`);
    return { success: true, duration, critical: test.critical };
  } catch (error) {
    console.log(`\n❌ ${test.name} - ÉCHOUÉ`);
    if (test.critical) {
      console.log('⚠️  Test critique échoué - Arrêt des tests');
      return { success: false, critical: true };
    } else {
      console.log('⚠️  Test non-critique échoué - Continuation');
      return { success: false, critical: false };
    }
  }
}

// Fonction principale
async function runAllTests() {
  console.log('📋 Plan de test :');
  TESTS.forEach((test, index) => {
    const critical = test.critical ? '🔴' : '🟡';
    console.log(`${index + 1}. ${critical} ${test.name} ${test.critical ? '(critique)' : '(optionnel)'}`);
  });

  console.log('\n🚀 Démarrage des tests...\n');

  const results = [];
  let hasCriticalFailure = false;

  for (const test of TESTS) {
    const result = runTest(test);
    results.push({ ...test, ...result });

    if (result.critical && !result.success) {
      hasCriticalFailure = true;
      break;
    }
  }

  // Résumé final
  console.log('\n' + '='.repeat(60));
  console.log('📊 RÉSUMÉ FINAL DES TESTS');
  console.log('='.repeat(60));

  const passed = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  const criticalFailed = results.filter(r => r.critical && !r.success).length;

  console.log(`\n📈 Statistiques :`);
  console.log(`✅ Tests réussis: ${passed}/${results.length}`);
  console.log(`❌ Tests échoués: ${failed}/${results.length}`);
  console.log(`🔴 Tests critiques échoués: ${criticalFailed}`);

  console.log(`\n📋 Détail des résultats :`);
  results.forEach((result, index) => {
    const status = result.success ? '✅' : '❌';
    const critical = result.critical ? '🔴' : '🟡';
    const duration = result.duration ? `(${result.duration}ms)` : '';
    console.log(`${index + 1}. ${status} ${critical} ${result.name} ${duration}`);
  });

  // Recommandations
  console.log('\n💡 Recommandations :');
  
  if (hasCriticalFailure) {
    console.log('🔴 Tests critiques échoués - Correction nécessaire avant la remise');
    console.log('📝 Actions à effectuer :');
    console.log('1. Corriger les erreurs critiques');
    console.log('2. Re-lancer les tests critiques');
    console.log('3. Vérifier que tous les tests passent');
  } else if (failed > 0) {
    console.log('🟡 Tests non-critiques échoués - Optimisations recommandées');
    console.log('📝 Actions à effectuer :');
    console.log('1. Corriger les erreurs non-critiques si possible');
    console.log('2. Optimiser les performances');
    console.log('3. Améliorer la qualité du code');
  } else {
    console.log('✅ Tous les tests sont passés !');
    console.log('🎉 La landing page est prête pour la production');
  }

  // Tests manuels à effectuer
  console.log('\n📝 Tests manuels à effectuer :');
  console.log('1. Test responsive (360px → 1440px)');
  console.log('2. Test de tous les liens (WhatsApp, tel:, mailto:)');
  console.log('3. Test du formulaire (validation, messages d\'erreur)');
  console.log('4. Test SEO (title, description, OG)');
  console.log('5. Test performance mobile 3G');
  console.log('6. Test accessibilité (tabbing, focus visibles)');
  console.log('7. Test sur différents navigateurs (Chrome, Firefox, Safari, Edge)');
  console.log('8. Test sur différents appareils (mobile, tablette, desktop)');

  // Générer un rapport
  const report = {
    timestamp: new Date().toISOString(),
    totalTests: results.length,
    passedTests: passed,
    failedTests: failed,
    criticalFailures: criticalFailed,
    results: results.map(r => ({
      name: r.name,
      success: r.success,
      critical: r.critical,
      duration: r.duration
    }))
  };

  fs.writeFileSync('./test-report.json', JSON.stringify(report, null, 2));
  console.log('\n📄 Rapport détaillé sauvegardé dans test-report.json');

  // Code de sortie
  const exitCode = hasCriticalFailure ? 1 : 0;
  console.log(`\n🏁 Code de sortie: ${exitCode}`);
  
  return exitCode;
}

// Lancer les tests
if (require.main === module) {
  runAllTests().then(exitCode => {
    process.exit(exitCode);
  }).catch(error => {
    console.error('❌ Erreur lors de l\'exécution des tests:', error);
    process.exit(1);
  });
}

module.exports = { runAllTests };
