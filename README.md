# Floww Expansion - Application de gestion

Cette application web aide à gérer l'expansion de la marque Floww (bijoux artisanaux mauriciens avec des fleurs naturelles stabilisées) vers la Belgique et l'Europe.

## À propos de Floww

Floww est une marque mauricienne spécialisée dans la création de boucles d'oreilles artisanales avec des fleurs naturelles stabilisées. Après un succès local à Maurice, l'entreprise cherche à s'étendre en Europe, en commençant par la Belgique.

## Objectifs de l'application

Cette application a été conçue pour faciliter et piloter cette expansion internationale en suivant quatre axes stratégiques :

1. **Marketing** : Gestion des campagnes, ROI par canal, suivi des investissements.
2. **Commercial** : Gestion des partenaires B2B, suivi des prospects et négociations.
3. **Logistique** : Suivi des expéditions internationales et des formalités douanières.
4. **Financier** : Suivi des marges, des coûts et de la rentabilité par marché.

## Modules principaux

- **Dashboard** : Vue d'ensemble avec les principaux KPIs
- **Partners** : Gestion des partenaires commerciaux (concept stores, boutiques d'hôtels)
- **Marketing** : Suivi des campagnes et investissements marketing
- **Logistics** : Gestion des expéditions internationales
- **Finance** : Suivi financier et comptable
- **Sales** : Gestion des ventes B2C et B2B

## Caractéristiques techniques

- **Frontend** : React avec TypeScript
- **UI Framework** : Tailwind CSS avec composants Tremor pour les visualisations
- **Routing** : React Router
- **Gestion d'état** : Context API React

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/Spysailor/floww-expansion-app.git
cd floww-expansion-app

# Installer les dépendances
npm install

# Lancer l'application en développement
npm run dev

# Construire pour la production
npm run build
```

## Déploiement

L'application est configurée pour être déployée sur Netlify ou Vercel.

```bash
# Construction pour production
npm run build

# Déploiement vers Netlify (nécessite CLI Netlify)
netlify deploy --prod
```

## Prochaines étapes

1. **Internationalisation** : Ajout du support multilingue (FR, EN, NL)
2. **Intégration API** : Connexion avec les API des transporteurs
3. **Mobile** : Version responsive optimisée pour les appareils mobiles

## Contribution

Les contributions sont les bienvenues. Veuillez consulter le fichier CONTRIBUTING.md pour plus d'informations.

## Licence

MIT
