
# Système d'Abonnement et d'Administration pour FlashBac

Ce document explique comment configurer et utiliser le système d'abonnement et d'administration intégré à l'application FlashBac.

## Configuration de Supabase

1. Créez un projet Supabase et configurez les variables d'environnement suivantes :
   - `VITE_SUPABASE_URL` : URL de votre projet Supabase
   - `VITE_SUPABASE_ANON_KEY` : Clé anonyme de votre projet Supabase

2. Exécutez le script SQL situé dans `src/sql/schema.sql` pour créer les tables et politiques de sécurité nécessaires.

## Fonctionnalités du système d'abonnement

### Accès Premium
Les sections suivantes nécessitent un abonnement premium :
- Fiches méthodologiques
- Mode examen
- Statistiques détaillées

### Prix de l'abonnement
L'abonnement est fixé à 7,99€ par mois.

### Procédure d'abonnement
1. L'utilisateur doit créer un compte ou se connecter
2. Il peut ensuite s'abonner via la page d'abonnement
3. Une fois abonné, il a accès à toutes les fonctionnalités premium

## Authentification

### Méthodes de connexion
- Email/mot de passe
- Google

### Compte administrateur par défaut
- Nom d'utilisateur : admin
- Mot de passe : admin

## Panel d'administration

Le panel d'administration offre les fonctionnalités suivantes :

### Gestion des utilisateurs
- Voir tous les utilisateurs
- Rechercher des utilisateurs
- Attribuer/retirer des rôles d'administrateur
- Activer/désactiver des abonnements
- Supprimer des utilisateurs

### Statistiques
- Nombre total d'utilisateurs
- Nombre d'abonnés
- Utilisateurs actifs aujourd'hui/ce mois
- Graphiques de croissance des utilisateurs
- Graphiques d'activité par matière

### Notifications
- Créer des notifications
- Programmer l'envoi de notifications
- Envoyer des notifications à tous les utilisateurs

## Intégration avec le système existant

Le système d'abonnement et d'administration s'intègre avec les fonctionnalités existantes de FlashBac :
- Les onglets verrouillés affichent un indicateur de cadenas
- Les tentatives d'accès aux fonctionnalités premium sans abonnement redirigent vers la page d'abonnement
- Les administrateurs ont accès à un bouton spécial pour accéder au panel d'administration

## Développement et extension

Pour étendre les fonctionnalités :
1. Ajoutez de nouvelles tables dans le schéma SQL selon les besoins
2. Créez de nouveaux composants pour les nouvelles fonctionnalités
3. Mettez à jour les politiques de sécurité Supabase pour contrôler l'accès

## Remarques pour la production

1. Remplacez la simulation d'abonnement par une intégration Stripe réelle
2. Configurez un système d'emails pour les notifications d'abonnement
3. Renforcez la sécurité du compte administrateur par défaut
4. Configurez des backups réguliers de la base de données
