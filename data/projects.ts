export type ProjectCategory = "Web" | "Mobile" | "Logiciels" | "Design";

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
  status: "Bientôt disponible" | "En développement" | "Planifié";
  gradient: string;
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
    id: "projet-web-1",
    title: "Projet Web à venir",
    category: "Web",
    tagline: "Plateforme web moderne & haute performance",
    description: "Une solution web sur mesure conçue avec une architecture moderne, un design épuré et une rapidité de chargement exemplaire.",
    features: [
      "Interface utilisateur réactive",
      "Optimisation SEO de premier ordre",
      "Panneau d'administration sécurisé"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel"],
    isPlaceholder: true,
    status: "Bientôt disponible",
    gradient: "from-blue-600/30 to-cyan-500/20"
  },
  {
    id: "projet-mobile-1",
    title: "Application Mobile prochainement",
    category: "Mobile",
    tagline: "Expérience mobile fluide et intuitive",
    description: "Conception d'une application mobile ergonomique répondant aux standards actuels d'utilisabilité et de réactivité.",
    features: [
      "Navigation intuitive et fluide",
      "Gestion des notifications",
      "Mode hors-ligne optimisé"
    ],
    technologies: ["React", "TypeScript", "API REST"],
    isPlaceholder: true,
    status: "En développement",
    gradient: "from-cyan-600/30 to-blue-500/20"
  },
  {
    id: "projet-logiciel-1",
    title: "Logiciel métier en préparation",
    category: "Logiciels",
    tagline: "Système de gestion personnalisé pour entreprise",
    description: "Outil logiciel sur-mesure facilitant l'automatisation des opérations quotidiennes et l'analyse de données stratégiques.",
    features: [
      "Tableau de bord statistique en direct",
      "Gestion sécurisée des accès utilisateurs",
      "Génération automatisée de rapports"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    isPlaceholder: true,
    status: "Planifié",
    gradient: "from-indigo-600/30 to-blue-600/20"
  },
  {
    id: "projet-design-1",
    title: "Création graphique & Identité",
    category: "Design",
    tagline: "Charte graphique, UI/UX & supports visuels",
    description: "Conception complète d'un univers visuel moderne et d'interfaces élégantes pour booster l'impact de marque.",
    features: [
      "Identité de marque et logo vectoriel",
      "Maquettage UI/UX haute fidélité",
      "Déclinaisons publicitaires digitales & print"
    ],
    technologies: ["Figma", "Design Graphique", "Charte Visuelle"],
    isPlaceholder: true,
    status: "Bientôt disponible",
    gradient: "from-violet-600/30 to-cyan-500/20"
  },
  {
    id: "projet-web-2",
    title: "Nouvelle réalisation Web",
    category: "Web",
    tagline: "Site vitrine & e-commerce de nouvelle génération",
    description: "Un site web institutionnel conçu pour valoriser l'image de marque et convertir les visiteurs en clients fidèles.",
    features: [
      "Design ultra-soigné et accessible",
      "Formulaire interactif avec validation",
      "Fluidité multi-écrans garantie"
    ],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    isPlaceholder: true,
    status: "Bientôt disponible",
    gradient: "from-sky-600/30 to-blue-700/20"
  },
  {
    id: "projet-logiciel-2",
    title: "Solution numérique sur mesure",
    category: "Logiciels",
    tagline: "Architecture logicielle robuste et évolutive",
    description: "Développement d'un socle applicatif modulaire pour répondre aux défis numériques contemporains.",
    features: [
      "Architecture modulaire et scalable",
      "Sécurité des échanges de données",
      "Suivi et monitoring applicatif"
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Git"],
    isPlaceholder: true,
    status: "En développement",
    gradient: "from-blue-700/30 to-teal-500/20"
  }
];

