export type ProjectCategory = "Web" | "Mobile" | "Logiciels" | "Design" | "Décoration & Vaisselle";

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  isPlaceholder: boolean;
  status: "Livrable" | "En développement" | "Planifié";
  gradient: string;
  imageUrl?: string;
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
    id: "projet-web-1",
    title: "E-Commerce Luxe Madagascar",
    category: "Web",
    tagline: "Plateforme web moderne & haute performance",
    description: "Une solution e-commerce sur mesure pour une marque de luxe, offrant un design épuré, un tunnel d'achat optimisé et une rapidité de chargement exemplaire (98/100 Lighthouse).",
    features: [
      "Interface utilisateur réactive",
      "Optimisation SEO de premier ordre",
      "Panneau d'administration sécurisé"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    isPlaceholder: false,
    status: "Livrable",
    gradient: "from-blue-600/30 to-cyan-500/20",
    imageUrl: "/images/portfolio-web-1.jpg"
  },
  {
    id: "projet-mobile-1",
    title: "App Livraison Express",
    category: "Mobile",
    tagline: "Expérience mobile fluide et intuitive",
    description: "Application mobile de livraison permettant le suivi en temps réel des commandes, avec plus de 10 000 utilisateurs actifs quotidiens.",
    features: [
      "Navigation intuitive et fluide",
      "Gestion des notifications Push",
      "Mode hors-ligne optimisé"
    ],
    technologies: ["React Native", "TypeScript", "Node.js"],
    isPlaceholder: false,
    status: "Livrable",
    gradient: "from-cyan-600/30 to-blue-500/20",
    imageUrl: "/images/portfolio-mobile-1.jpg"
  },
  {
    id: "projet-logiciel-1",
    title: "ERP Gestion Hôtelière",
    category: "Logiciels",
    tagline: "Système de gestion personnalisé pour entreprise",
    description: "Logiciel métier complet automatisant les réservations, la facturation et l'analyse de données pour une chaîne hôtelière.",
    features: [
      "Tableau de bord statistique en direct",
      "Gestion sécurisée des accès utilisateurs",
      "Génération automatisée de rapports"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Vue.js"],
    isPlaceholder: false,
    status: "Livrable",
    gradient: "from-indigo-600/30 to-blue-600/20",
    imageUrl: "/images/portfolio-logiciel-1.jpg"
  },
  {
    id: "projet-design-1",
    title: "Rebranding Startup Tech",
    category: "Design",
    tagline: "Charte graphique, UI/UX & supports visuels",
    description: "Refonte complète de l'identité visuelle d'une startup, incluant un logo vectoriel moderne, un design system et des maquettes d'application.",
    features: [
      "Identité de marque et logo vectoriel",
      "Maquettage UI/UX haute fidélité",
      "Déclinaisons publicitaires digitales & print"
    ],
    technologies: ["Figma", "Adobe Illustrator", "Prototypage"],
    isPlaceholder: false,
    status: "Livrable",
    gradient: "from-violet-600/30 to-cyan-500/20",
    imageUrl: "/images/portfolio-design-1.jpg"
  },
  {
    id: "projet-deco-1",
    title: "Collection 'Terroir' - Arts de la Table",
    category: "Décoration & Vaisselle",
    tagline: "Design d'objets, modélisation 3D et catalogue",
    description: "Conception complète d'une gamme de vaisselle haut de gamme. De l'esquisse 3D à l'identité visuelle pour le lancement en boutique et e-commerce.",
    features: [
      "Modélisation 3D d'objets et textures",
      "Direction artistique de la collection",
      "Scénographie photographique & e-commerce"
    ],
    technologies: ["Blender", "Design Produit", "Direction Artistique"],
    isPlaceholder: false,
    status: "Livrable",
    gradient: "from-amber-600/30 to-orange-500/20",
    imageUrl: "/images/portfolio-deco-1.jpg"
  },
  {
    id: "projet-web-2",
    title: "Portail Immobilier Premium",
    category: "Web",
    tagline: "Site vitrine & moteur de recherche avancé",
    description: "Une plateforme immobilière avec filtres avancés et visite virtuelle 3D intégrée, multipliant par 3 les prises de contact.",
    features: [
      "Moteur de recherche multicritères",
      "Intégration d'API cartographique",
      "Formulaires interactifs dynamiques"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Prisma"],
    isPlaceholder: false,
    status: "Livrable",
    gradient: "from-sky-600/30 to-blue-700/20",
    imageUrl: "/images/portfolio-web-2.jpg"
  }
];

