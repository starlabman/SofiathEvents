# 🚀 Guide de Déploiement - Sofiath Events

## 📋 Prérequis

- Compte GitHub avec le code source
- Compte Vercel ou Netlify
- Domaine `sofiathevents.com` (optionnel)

## 🎯 Option 1 : Déploiement Vercel (Recommandé)

### 1. Connexion à Vercel
```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login
```

### 2. Déploiement automatique
1. **Connecter le repository GitHub** :
   - Aller sur [vercel.com](https://vercel.com)
   - Cliquer "New Project"
   - Importer le repository GitHub
   - Vercel détecte automatiquement Next.js

2. **Configuration automatique** :
   - Framework : Next.js (détecté automatiquement)
   - Build Command : `npm run build` (automatique)
   - Output Directory : `.next` (automatique)
   - Install Command : `npm install` (automatique)

### 3. Variables d'environnement
Dans les paramètres du projet Vercel :
```
NEXT_PUBLIC_SITE_URL=https://sofiathevents.com
NEXT_PUBLIC_GA_ID=G-XXXXXXX
```

### 4. Déploiement manuel
```bash
# Dans le dossier du projet
vercel

# Pour la production
vercel --prod
```

## 🎯 Option 2 : Déploiement Netlify

### 1. Connexion à Netlify
1. Aller sur [netlify.com](https://netlify.com)
2. Cliquer "New site from Git"
3. Connecter le repository GitHub

### 2. Configuration build
```
Build command: npm run build
Publish directory: .next
Node version: 18
```

### 3. Variables d'environnement
Dans Site settings > Environment variables :
```
NEXT_PUBLIC_SITE_URL=https://sofiathevents.com
NEXT_PUBLIC_GA_ID=G-XXXXXXX
```

### 4. Déploiement manuel
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy --prod
```

## 🌐 Configuration du Domaine

### 1. Achat du domaine
- **Registrar recommandé** : OVH, Namecheap, ou Google Domains
- **Domaine** : `sofiathevents.com`
- **Durée** : 1-2 ans minimum

### 2. Configuration DNS

#### Pour Vercel :
1. Dans le dashboard Vercel, aller dans "Settings" > "Domains"
2. Ajouter `sofiathevents.com`
3. Vercel fournit les nameservers à configurer :

```
Nameserver 1: ns1.vercel-dns.com
Nameserver 2: ns2.vercel-dns.com
Nameserver 3: ns3.vercel-dns.com
Nameserver 4: ns4.vercel-dns.com
```

#### Pour Netlify :
1. Dans le dashboard Netlify, aller dans "Domain settings"
2. Ajouter `sofiathevents.com`
3. Configurer les nameservers :

```
Nameserver 1: dns1.p01.nsone.net
Nameserver 2: dns2.p01.nsone.net
Nameserver 3: dns3.p01.nsone.net
Nameserver 4: dns4.p01.nsone.net
```

### 3. Configuration alternative (CNAME)
Si vous ne pouvez pas changer les nameservers :

#### Vercel :
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### Netlify :
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

### 4. Redirection www vers racine
Configuré automatiquement dans `vercel.json` et `netlify.toml`

## 🔒 SSL et Sécurité

### SSL automatique
- **Vercel** : SSL automatique avec Let's Encrypt
- **Netlify** : SSL automatique avec Let's Encrypt
- **Durée** : 90 jours, renouvellement automatique

### Headers de sécurité
Configurés automatiquement :
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Strict-Transport-Security: max-age=31536000`
- `Content-Security-Policy` (CSP)

## 📊 Monitoring et Analytics

### 1. Google Analytics 4
- ID : `G-XXXXXXX` (à remplacer par le vrai ID)
- Configuré avec consentement cookies
- Tracking des événements personnalisés

### 2. Vercel Analytics (optionnel)
```bash
npm install @vercel/analytics
```

### 3. Monitoring de performance
- **Vercel** : Analytics intégrés
- **Netlify** : Analytics optionnels
- **Lighthouse** : Audit automatique

## 🔄 Déploiement continu

### GitHub Actions (optionnel)
Créer `.github/workflows/deploy.yml` :
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🧪 Tests de déploiement

### 1. Test local
```bash
npm run build
npm run start
```

### 2. Test de production
```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod
```

### 3. Audit Lighthouse
```bash
npm run audit
```

## 📱 Optimisations post-déploiement

### 1. Compression
- **Gzip** : Activé automatiquement
- **Brotli** : Activé automatiquement

### 2. Cache
- **Images** : 1 an
- **CSS/JS** : 1 an
- **API** : Pas de cache

### 3. CDN
- **Vercel** : Edge Network global
- **Netlify** : CDN global

## 🚨 Dépannage

### Erreurs communes

#### Build échoue
```bash
# Vérifier les dépendances
npm install

# Vérifier TypeScript
npm run type-check

# Vérifier le linting
npm run lint
```

#### Domaine ne fonctionne pas
1. Vérifier les nameservers (24-48h de propagation)
2. Vérifier les enregistrements DNS
3. Tester avec `dig` ou `nslookup`

#### SSL ne fonctionne pas
1. Attendre 24h pour la génération automatique
2. Vérifier que le domaine pointe vers le bon serveur
3. Forcer le renouvellement si nécessaire

## 📞 Support

### Vercel
- Documentation : [vercel.com/docs](https://vercel.com/docs)
- Support : [vercel.com/support](https://vercel.com/support)

### Netlify
- Documentation : [docs.netlify.com](https://docs.netlify.com)
- Support : [netlify.com/support](https://netlify.com/support)

### Domaine
- Contactez votre registrar pour les problèmes DNS
- Vérifiez la propagation avec [whatsmydns.net](https://whatsmydns.net)

---

## ✅ Checklist de déploiement

- [ ] Code source sur GitHub
- [ ] Déploiement Vercel/Netlify configuré
- [ ] Variables d'environnement définies
- [ ] Domaine configuré (si applicable)
- [ ] SSL activé
- [ ] Google Analytics configuré
- [ ] Audit Lighthouse > 90
- [ ] Tests de fonctionnalités
- [ ] Monitoring activé

**🎉 Votre site Sofiath Events est maintenant en ligne !**
