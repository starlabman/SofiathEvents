# 🔍 QA Checklist Manuelle - Sofiath Events

## 📋 Checklist complète avant remise

### 1. 📱 Test Responsive (360px → 1440px)

#### Breakpoints à tester :
- **360px** (Mobile très petit)
- **480px** (Mobile)
- **768px** (Tablet)
- **1024px** (Desktop petit)
- **1440px** (Desktop grand)

#### Éléments à vérifier :
- [ ] Header : Navigation et logo s'adaptent
- [ ] Hero : Texte et boutons restent lisibles
- [ ] Services : Grille 2x2 → 1 colonne sur mobile
- [ ] Galerie : Images se redimensionnent correctement
- [ ] Contact : Formulaire reste utilisable
- [ ] Footer : Liens restent accessibles

#### Outils de test :
```bash
# Chrome DevTools
F12 → Device Toolbar → Sélectionner les breakpoints

# Firefox
F12 → Responsive Design Mode

# Safari
Développement → Entrée/sortie du mode responsive
```

### 2. 🔗 Test des liens et URLs

#### Liens WhatsApp :
- [ ] Header WhatsApp : `wa.me/22870154492`
- [ ] Contact WhatsApp 1 : `wa.me/22870154492`
- [ ] Contact WhatsApp 2 : `wa.me/22898762081`
- [ ] Footer WhatsApp : `wa.me/22870154492`

#### Liens téléphone :
- [ ] Contact Appeler 1 : `tel:+22870154492`
- [ ] Contact Appeler 2 : `tel:+22898762081`

#### Liens email :
- [ ] Contact Email : `mailto:contact@sofiathevents.com`

#### Liens réseaux sociaux :
- [ ] Footer Facebook : `facebook.com/sofiathevents`
- [ ] Footer Instagram : `instagram.com/sofiathevents`

#### Test de chaque lien :
1. Clic droit → "Ouvrir dans un nouvel onglet"
2. Vérifier que le lien s'ouvre correctement
3. Vérifier que le message WhatsApp est pré-rempli
4. Vérifier que l'email a un sujet pré-rempli

### 3. 📝 Test du formulaire de contact

#### Champs obligatoires :
- [ ] **Nom** : Validation 2 caractères minimum
- [ ] **Email** : Validation format email
- [ ] **Type d'événement** : Sélection obligatoire
- [ ] **Date** : Sélection obligatoire
- [ ] **Message** : Validation 10 caractères minimum

#### Tests de validation :
```bash
# Test 1 : Formulaire vide
- Cliquer "Envoyer" sans rien remplir
- Vérifier que les messages d'erreur apparaissent

# Test 2 : Données invalides
- Nom : "A" (trop court)
- Email : "invalid-email"
- Message : "Court"
- Vérifier les messages d'erreur spécifiques

# Test 3 : Données valides
- Remplir tous les champs correctement
- Cliquer "Envoyer"
- Vérifier le message de succès
- Vérifier que le formulaire se vide
```

#### Messages d'erreur à vérifier :
- [ ] "Le nom doit contenir au moins 2 caractères"
- [ ] "Adresse email invalide"
- [ ] "Veuillez sélectionner un type d'événement"
- [ ] "Veuillez sélectionner une date"
- [ ] "Le message doit contenir au moins 10 caractères"

### 4. 🔍 Test SEO

#### Meta tags à vérifier :
```bash
# Inspecter l'élément <head>
- Title : "Sofiath Events – Agence événementielle & traiteur premium"
- Description : "Organisation d'événements, service traiteur..."
- Keywords : "événementiel, traiteur, mariage, hôtesses..."
```

#### Open Graph à vérifier :
- [ ] `og:title` : "Sofiath Events – Agence événementielle & traiteur premium"
- [ ] `og:description` : Description complète
- [ ] `og:image` : `/images/og.jpg`
- [ ] `og:type` : "website"
- [ ] `og:locale` : "fr_FR"

#### Twitter Cards :
- [ ] `twitter:card` : "summary_large_image"
- [ ] `twitter:title` : Titre correct
- [ ] `twitter:description` : Description correcte
- [ ] `twitter:image` : Image correcte

#### Outils de test SEO :
```bash
# Google Rich Results Test
https://search.google.com/test/rich-results

# Facebook Sharing Debugger
https://developers.facebook.com/tools/debug/

# Twitter Card Validator
https://cards-dev.twitter.com/validator

# LinkedIn Post Inspector
https://www.linkedin.com/post-inspector/
```

### 5. ⚡ Test Performance Mobile 3G

#### Outils de test :
```bash
# Chrome DevTools
F12 → Performance → Throttling → "Slow 3G"

# Lighthouse (mobile)
npm run lighthouse:mobile

# PageSpeed Insights
https://pagespeed.web.dev/
```

#### Métriques à vérifier :
- [ ] **First Contentful Paint (FCP)** : < 1.8s
- [ ] **Largest Contentful Paint (LCP)** : < 2.5s
- [ ] **First Input Delay (FID)** : < 100ms
- [ **Cumulative Layout Shift (CLS)** : < 0.1
- [ ] **Speed Index** : < 3.4s

#### Optimisations à vérifier :
- [ ] Images optimisées (WebP/AVIF)
- [ ] Polices préchargées
- [ ] CSS/JS minifiés
- [ ] Compression gzip/brotli
- [ ] Cache configuré

### 6. ♿ Test Accessibilité

#### Navigation clavier :
```bash
# Test de tabbing
1. Appuyer sur Tab pour naviguer
2. Vérifier l'ordre logique
3. Vérifier que tous les éléments sont focusables
4. Vérifier que les focus states sont visibles
```

#### Focus states à vérifier :
- [ ] Outline 3px solid turquoise
- [ ] Offset de 2px
- [ ] Border-radius de 4px
- [ ] Visible sur tous les éléments interactifs

#### Skip link :
- [ ] Appuyer sur Tab au chargement
- [ ] Le skip link doit apparaître en premier
- [ ] Clic sur skip link → va au contenu principal

#### Screen reader :
```bash
# Test avec NVDA (Windows) ou VoiceOver (Mac)
1. Naviguer avec les flèches
2. Vérifier que les images ont des alt text
3. Vérifier que les boutons ont des labels
4. Vérifier que les formulaires sont annoncés
```

#### ARIA labels à vérifier :
- [ ] Boutons de navigation mobile
- [ ] Boutons de fermeture (X)
- [ ] Icônes sans texte
- [ ] Formulaires complexes

#### Contraste :
- [ ] Texte principal : AA (4.5:1)
- [ ] Texte grand : AA (3:1)
- [ ] Éléments UI : AA (3:1)

### 7. 🔒 Test de sécurité

#### Headers de sécurité :
```bash
# Vérifier avec curl
curl -I https://sofiathevents.com

# Headers attendus :
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Strict-Transport-Security: max-age=31536000
- Content-Security-Policy: présent
```

#### Test XSS :
- [ ] Essayer d'injecter du JavaScript dans les champs
- [ ] Vérifier que le CSP bloque les injections

#### Test CSRF :
- [ ] Vérifier que le formulaire a une protection CSRF

### 8. 📊 Test du tracking

#### Google Analytics :
```bash
# Vérifier dans les DevTools
F12 → Network → Filtrer "google-analytics"
- Vérifier que gtag est chargé
- Vérifier que les événements sont envoyés
```

#### Événements à vérifier :
- [ ] Page view au chargement
- [ ] Clic sur CTA "Réservez maintenant"
- [ ] Clic sur CTA "Découvrir nos services"
- [ ] Clic sur WhatsApp
- [ ] Clic sur téléphone
- [ ] Clic sur email
- [ ] Soumission du formulaire

#### Consentement cookies :
- [ ] Bannière apparaît au premier visite
- [ ] Bouton "Accepter" active le tracking
- [ ] Bouton "Refuser" désactive le tracking
- [ ] Choix mémorisé dans localStorage

### 9. 🎨 Test visuel

#### Design cohérent :
- [ ] Couleurs respectent la charte graphique
- [ ] Typographie cohérente
- [ ] Espacements harmonieux
- [ ] Animations fluides

#### Animations :
- [ ] Framer Motion fonctionne
- [ ] Animations respectent "reduced motion"
- [ ] Pas de clignotement ou de saut

#### Images :
- [ ] Toutes les images se chargent
- [ ] Optimisation next/image active
- [ ] Lazy loading fonctionne
- [ ] Alt text présent

### 10. 🧪 Test fonctionnel

#### Navigation :
- [ ] Liens d'ancrage fonctionnent
- [ ] Scroll smooth activé
- [ ] Header sticky fonctionne
- [ ] Menu mobile s'ouvre/ferme

#### Galerie :
- [ ] Images se chargent
- [ ] Lightbox fonctionne
- [ ] Navigation entre images
- [ ] Fermeture avec Escape

#### Témoignages :
- [ ] Slider auto-fonctionne
- [ ] Pause au hover
- [ ] Navigation manuelle
- [ ] Étoiles s'affichent

#### CTA Banner :
- [ ] Glow effect fonctionne
- [ ] Bouton redirige vers contact
- [ ] Animation fluide

## ✅ Checklist finale

### Avant la remise, vérifier :
- [ ] Tous les tests automatisés passent : `npm run qa`
- [ ] Build de production réussi : `npm run build`
- [ ] Audit Lighthouse > 90 : `npm run audit`
- [ ] Tests manuels effectués
- [ ] Documentation mise à jour
- [ ] Code commité et pushé

### En cas de problème :
1. Identifier le problème
2. Corriger le code
3. Re-tester la fonctionnalité
4. Re-lancer les tests automatisés
5. Documenter la correction

---

**🎉 Si tous les tests passent, la landing page est prête pour la production !**
