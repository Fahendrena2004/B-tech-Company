export type ProjectCategory = "Web" | "Mobile" | "Logiciels" | "Design" | "Décoration & Vaisselle";

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
  "Design",
  "Décoration & Vaisselle"
] as const;

export const portfolioProjects: ProjectItem[] = [
  {
    id: "projet-deco-1",
    title: "Collection 'Terroir' — Arts de la Table",
    category: "Décoration & Vaisselle",
    tagline: "Design d'objets, façonnage terracotta & céramique émaillée",
    description: "Conception sur-mesure d'une collection d'art de la table d'exception. Alliance de terracotta brute et de poteries en grès émaillé aux finitions faites main, sublimée par une modélisation 3D photoréaliste et une scénographie studio.",
    features: [
      "Assiettes & bols artisanaux terracotta",
      "Émail haute résistance & contact alimentaire",
      "Modélisation 3D et rendus d'éclairage chaud",
      "Scénographie photographique e-commerce"
    ],
    technologies: ["Design Produit", "Blender 3D", "Direction Artistique"],
    materials: ["Terracotta cuite", "Grès émaillé", "Bois d'acacia"],
    kpiMetric: "Pièces Émaillées Main",
    kpiLabel: "Collection Éditioriale",
    isPlaceholder: false,
    status: "Livrable",
    gradient: "from-amber-600/30 via-orange-500/20 to-amber-900/40",
    imageUrl: "/images/portfolio-deco-1.jpg",
    aspectRatio: "portrait"
  },
  {
    id: "projet-web-1",
    title: "E-Commerce Luxe Madagascar",
    category: "Web",
    tagline: "Plateforme web moderne & haute performance",
    description: "Une solution e-commerce sur mesure pour une marque de luxe, offrant un design épuré, un tunnel d'achat optimisé et une rapidité de chargement exemplaire (98/100 Lighthouse).",
    features: [
      "Interface utilisateur réactive & fluide",
      "Optimisation SEO de premier ordre",
      "Panneau d'administration sécurisé"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    kpiMetric: "98/100",
    kpiLabel: "Score Lighthouse",
    isPlaceholder: false,
    status: "Livrable",
    gradient: "from-blue-600/30 to-cyan-500/20",
    imageUrl: "/images/portfolio-web-1.jpg",
    aspectRatio: "video"
  },
  {
    id: "projet-mobile-1",
    title: "App Livraison Express",
    category: "Mobile",
    tagline: "Expérience mobile fluide et intuitive",
    description: "Application mobile de livraison permettant le suivi en temps réel des commandes avec carte temps-réel, poussées de notifications et paiement sécurisé.",
    features: [
      "Navigation intuitive tactile",
      "Gestion des notifications Push",
      "Suivi cartographique temps réel"
    ],
    technologies: ["React Native", "TypeScript", "Node.js"],
    kpiMetric: "+10k Users",
    kpiLabel: "Actifs / Jour",
    isPlaceholder: false,
    status: "Livrable",
    gradient: "from-cyan-600/30 to-blue-500/20",
    imageUrl: "/images/portfolio-mobile-1.jpg",
    aspectRatio: "portrait"
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
    kpiMetric: "-45% Temps",
    kpiLabel: "Gain Opérationnel",
    isPlaceholder: false,
    status: "Livrable",
    gradient: "from-indigo-600/30 to-blue-600/20",
    imageUrl: "/images/services.jpeg",
    aspectRatio: "video"
  },
  {
    id: "projet-design-1",
    title: "Rebranding & Studio Visuel Tech",
    category: "Design",
    tagline: "Charte graphique, UI/UX & supports visuels",
    description: "Refonte complète de l'identité visuelle d'une entreprise innovante, incluant un logo vectoriel moderne, un design system complet et des maquettes d'application réactives.",
    features: [
      "Identité de marque & logo vectoriel HD",
      "Design system UI/UX complet",
      "Déclinaisons publicitaires digitales & print"
    ],
    technologies: ["Figma", "Adobe Illustrator", "Prototypage 3D"],
    kpiMetric: "100% Vectoriel",
    kpiLabel: "Design System",
    isPlaceholder: false,
    status: "Livrable",
    gradient: "from-violet-600/30 to-cyan-500/20",
    imageUrl: "/images/Apropos.jpeg",
    aspectRatio: "video"
  },
  {
    id: "projet-deco-2",
    title: "Vases & Ornements 'Minéral' — Décoration",
    category: "Décoration & Vaisselle",
    tagline: "Pièces uniques sculptées en céramique brute",
    description: "Série d'éléments de décoration intérieure façonnés à la main. Lignes organiques minérales et compositions architecturales pour environnements résidentiels et commerciaux de haut standing.",
    features: [
      "Formes sculpturale organiques",
      "Texture minérale brute & patine naturelle",
      "Scénographie d'intérieur & luminaires"
    ],
    technologies: ["Design d'Objet", "Rendu 3D Studio", "Direction Artistique"],
    materials: ["Grès cérame", "Pigments naturels"],
    kpiMetric: "Série Limitée",
    kpiLabel: "Design Minéral",
    isPlaceholder: false,
    status: "Livrable",
    gradient: "from-orange-600/30 via-amber-700/20 to-orange-950/40",
    imageUrl: "/images/portfolio-deco-1.jpg",
    aspectRatio: "portrait"
  }
];


