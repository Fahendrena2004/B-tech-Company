export type ProjectCategory = "Web" | "Mobile" | "Logiciels" | "Design" ;

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  materials?: string[];
  kpiMetric?: string;
  kpiLabel?: string;
  demoUrl?: string;
  githubUrl?: string;
  isPlaceholder: boolean;
  status: "Livrable" | "En développement" | "Planifié";
  gradient: string;
  imageUrl: string;
  aspectRatio?: "square" | "portrait" | "video";
}

export const portfolioCategories = [
  "Tous",
  "Web",
  "Mobile",
  "Logiciels",
  "Design"
] as const;

export const portfolioProjects: ProjectItem[] = [
  {
    id: "gestion-scolaire",
    title: "Gestion Scolaire",
    category: "Logiciels",
    tagline: "Plateforme de pilotage administratif et académique",
    description: "Une application de gestion scolaire qui centralise les opérations essentielles d'un établissement : paiements, inscriptions, réinscriptions, notes et organisation académique.",
    features: [
      "Suivi des paiements de scolarité",
      "Inscriptions et réinscriptions des étudiants",
      "Gestion et consultation des notes",
      "Configuration de la structure académique"
    ],
    technologies: ["NextJS", "Laravel 13", "MySql"],
    kpiMetric: "4 modules",
    kpiLabel: "Gestion centralisée",
    isPlaceholder: false,
    status: "Livrable",
    gradient: "from-indigo-600/30 via-blue-600/20 to-cyan-500/20",
    imageUrl: "/images/portoflio/GestionEcole.png",
    aspectRatio: "video"
  },
  {
    id: "site-vitrine-faneva",
    title: "Site Vitrine SEO Faneva",
    category: "Web",
    tagline: "Visibilité digitale, référencement et publicité en ligne",
    description: "Un site vitrine pensé pour valoriser l'activité de Faneva, améliorer sa présence dans les moteurs de recherche et soutenir ses campagnes publicitaires digitales.",
    features: [
      "Pages de présentation claires et adaptées à tous les écrans",
      "Structure optimisée pour le référencement naturel (SEO)",
      "Mise en avant des services et appels à l'action",
      "Base prête pour les campagnes publicitaires en ligne"
    ],
    technologies: ["Next.js", "Site Vitrine & SEO", "Publicité digitale"],
    kpiMetric: "SEO + Pub",
    kpiLabel: "Visibilité en ligne",
    isPlaceholder: false,
    status: "Livrable",
    gradient: "from-blue-600/30 via-cyan-500/20 to-emerald-500/20",
    imageUrl: "/images/portoflio/SiteFaneva.png",
    aspectRatio: "video"
  },
  {
    id: "gestion-location-appartement",
    title: "Gestion Location Appartement",
    category: "Web",
    tagline: "Plateforme immobilière & Suivi locatif",
    description: "Une application web d'aide à la recherche d'appartements et de suivi complet de la gestion locative (baux, loyers, demandes locataires).",
    features: [
      "Recherche & réservation d'appartements disponibles",
      "Suivi des contrats de location & échéances de loyer",
      "Gestion des demandes locataires & bailleurs",
      "Tableau de bord de gestion immobilière"
    ],
    technologies: ["Next.js", "Laravel", "MySQL"],
    kpiMetric: "Immobilier",
    kpiLabel: "En cours",
    isPlaceholder: false,
    status: "En développement",
    gradient: "from-teal-600/30 via-emerald-600/20 to-cyan-500/20",
    imageUrl: "/images/portoflio/Hotel.jpg",
    aspectRatio: "video"
  },
  {
    id: "gestion-quincaillerie-fianarantsoa",
    title: "Vente & Gestion Quincaillerie (Fianarantsoa)",
    category: "Logiciels",
    tagline: "Centralisation des ventes, du stock et de la facturation",
    description: "Plateforme logicielle complète pour une quincaillerie à Fianarantsoa, centralisant la gestion des ventes, du stock de matériaux et la facturation automatique.",
    features: [
      "Centralisation des ventes et encaissements en caisse",
      "Gestion dynamique des stocks & matériaux",
      "Facturation automatique & édition de reçus/devis",
      "Suivi des rapports de ventes et caisse"
    ],
    technologies: ["Next.js", "Laravel", "MySQL"],
    kpiMetric: "Gestion & Stock",
    kpiLabel: "En cours",
    isPlaceholder: false,
    status: "En développement",
    gradient: "from-amber-600/30 via-orange-600/20 to-blue-600/20",
    imageUrl: "/images/portoflio/quancailleri.jpg",
    aspectRatio: "video"
  },
  {
    id: "projet-logiciel-1",
    title: "ERP Gestion Hôtelière & Réservations",
    category: "Logiciels",
    tagline: "Système de gestion personnalisé pour entreprise",
    description: "Logiciel métier complet automatisant les réservations, la facturation et l'analyse de données en temps réel pour établissement hôtelier.",
    features: [
      "Tableau de bord statistique interactif",
      "Gestion sécurisée des accès et rôles",
      "Génération automatisée de rapports PDF"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Vue.js"],
    kpiMetric: "-35% Temps",
    kpiLabel: "Gain Opérationnel",
    isPlaceholder: false,
    status: "En développement",
    gradient: "from-indigo-600/30 to-blue-600/20",
    imageUrl: "/images/portoflio/gestion_erp.jpg",
    aspectRatio: "video"
  }
];
