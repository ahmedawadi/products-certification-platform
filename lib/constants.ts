export const FRENCH_TEXTS = {
  // Authentication
  auth: {
    login: "Connexion",
    logout: "Se déconnecter",
    email: "Email",
    password: "Mot de passe",
    loginButton: "Se connecter",
    loginSuccess: "Connexion réussie",
    loginError: "Erreur de connexion",
    invalidCredentials: "Email ou mot de passe incorrect.",
    welcome: "Bienvenue",
    loginDescription: "Connectez-vous à votre compte pour accéder à la plateforme",
    profile: "Profil",
  },

  // Products
  products: {
    title: "Produits",
    newProduct: "Nouveau produit",
    editProduct: "Modifier le produit",
    createProduct: "Créer le produit",
    productName: "Nom du produit",
    productDescription: "Description",
    productPrice: "Prix (€)",
    productCreated: "Produit créé",
    productUpdated: "Produit modifié",
    productDeleted: "Produit supprimé",
    deleteProduct: "Supprimer le produit",
    deleteConfirmation: "Êtes-vous sûr de vouloir supprimer ce produit ?",
    deleteWarning: "Cette action est irréversible.",
    noProducts: "Aucun produit trouvé",
    createFirstProduct: "Créer votre premier produit",
    loading: "Chargement des produits...",
    error: "Erreur lors du chargement des produits",
    modify: "Modifier",
    cancel: "Annuler",
    delete: "Supprimer",
    previous: "Précédent",
    next: "Suivant",
    page: "Page",
    of: "sur",
  },

  // Dashboard
  dashboard: {
    title: "Tableau de bord",
    welcome: "Bonjour",
    stats: {
      totalProducts: "Total Produits",
      totalValue: "Valeur Totale",
      averagePrice: "Prix Moyen",
      categories: "Catégories",
      productsInCatalog: "Produits dans votre catalogue",
      totalCatalogValue: "Valeur totale du catalogue",
      averagePricePerProduct: "Prix moyen par produit",
      productCategories: "Catégories de produits",
    },
    recentProducts: "Produits Récents",
    quickActions: "Actions Rapides",
    addNewProduct: "Nouveau Produit",
    addNewProductDesc: "Ajouter un nouveau produit au catalogue",
    viewAllProducts: "Voir Tous les Produits",
    viewAllProductsDesc: "Gérer votre catalogue complet",
  },

  // Navigation
  navigation: {
    dashboard: "Tableau de bord",
    products: "Produits",
    settings: "Paramètres",
    productManagement: "Gestion des produits",
    platformTitle: "Plateforme Produits",
  },

  // Common
  common: {
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
    save: "Enregistrer",
    cancel: "Annuler",
    edit: "Modifier",
    delete: "Supprimer",
    add: "Ajouter",
    close: "Fermer",
    confirm: "Confirmer",
    back: "Retour",
    redirecting: "Redirection...",
    comingSoon: "Disponible prochainement",
  },

  // Settings
  settings: {
    title: "Paramètres",
    description: "Les paramètres seront disponibles prochainement.",
  },

  // Errors
  errors: {
    generic: "Une erreur est survenue",
    network: "Erreur de connexion réseau",
    unauthorized: "Non autorisé",
    notFound: "Ressource non trouvée",
    serverError: "Erreur serveur",
  },
} as const
