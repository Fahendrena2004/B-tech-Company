export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  gradient: string;
  badge: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "developpement-web",
    title: "Développement Web",
    shortDescription: "Création d'applications web modernes et performantes adaptées aux besoins spécifiques des utilisateurs.",
    fullDescription: "Nous concevons et développons des applications web sur mesure, rapides, scalables et sécurisées. De l'architecture logicielle à l'intégration des interfaces, nous utilisons les technologies modernes pour offrir des expériences digitales fluides et robustes.",
    iconName: "Globe",
    features: [
      "Architectures modernes (Next.js, React)",
      "APIs robustes et sécurisées (Laravel, Node.js)",
      "Interfaces réactives et ergonomiques",
      "Performances et optimisation du temps de chargement",
      "Sécurité et respect des standards web"
    ],
    deliverables: [
      "Application web responsive et clé en main",
      "Back-office de gestion administrateur",
      "Documentation technique et guide de prise en main"
    ],
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    badge: "Web App"
  },
  {
    id: "developpement-mobile",
    title: "Développement Mobile",
    shortDescription: "Conception d'applications mobiles modernes et intuitives.",
    fullDescription: "Donnez vie à vos idées sur smartphone grâce à des applications mobiles natives et multiplateformes intuitives. Nous privilégions une expérience utilisateur soignée, une navigation fluide et des performances optimales.",
    iconName: "Smartphone",
    features: [
      "Applications multiplateformes (iOS et Android)",
      "Interfaces tactiles et ergonomiques",
      "Synchronisation des données en temps réel",
      "Notifications push et intégrations natives",
      "Architecture optimisée pour la vitesse"
    ],
    deliverables: [
      "Application mobile prête au déploiement",
      "Intégration des APIs et bases de données",
      "Suivi des tests sur différents modèles d'appareils"
    ],
    gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
    badge: "iOS & Android"
  },
  {
    id: "creation-sites-web",
    title: "Création de Sites Web",
    shortDescription: "Création de sites web professionnels, modernes, responsive et adaptés à l'image de chaque entreprise.",
    fullDescription: "Un site web est la vitrine de votre entreprise. Nous créons des sites vitrines, institutionnels et e-commerce sur mesure, reflétant fidèlement votre identité de marque tout en maximisant votre visibilité.",
    iconName: "Layout",
    features: [
      "Design sur mesure et responsive design (mobile-first)",
      "Optimisation SEO pour le référencement naturel",
      "Vitesse de chargement ultra-rapide",
      "Formulaires interactifs et intégration de vos contacts",
      "Gestion de contenu intuitive"
    ],
    deliverables: [
      "Site web moderne adapté à tous les écrans",
      "Configuration SEO et balisage sémantique",
      "Assistance à la mise en ligne et hébergement"
    ],
    gradient: "from-sky-500/20 via-indigo-500/10 to-transparent",
    badge: "Vitrines & E-commerce"
  },
  {
    id: "developpement-logiciels",
    title: "Développement de Logiciels",
    shortDescription: "Création de logiciels personnalisés répondant aux besoins spécifiques des entreprises.",
    fullDescription: "Automatisez vos processus internes et optimisez votre productivité avec des logiciels métiers sur mesure. Nous analysons vos flux de travail pour concevoir des outils fiables, évolutifs et sécurisés.",
    iconName: "Code2",
    features: [
      "Logiciels de gestion et d'automatisation des processus",
      "Bases de données relationnelles optimisées (MySQL)",
      "Gestion des rôles, droits d'accès et traçabilité",
      "Évolutivité et intégration avec vos outils existants",
      "Tableaux de bord d'analyse et rapports de performance"
    ],
    deliverables: [
      "Logiciel sur mesure déployé dans votre environnement",
      "Formation et accompagnement des utilisateurs",
      "Contrat de maintenance et d'assistance"
    ],
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    badge: "Sur mesure"
  },
  {
    id: "design-graphique",
    title: "Design Graphique",
    shortDescription: "Création de logos, affiches, bannières et supports de communication visuelle.",
    fullDescription: "Valorisez votre image de marque avec des créations graphiques percutantes et modernes. De l'identité visuelle complète aux supports publicitaires imprimés et numériques, notre studio graphique donne du relief à vos messages.",
    iconName: "Palette",
    features: [
      "Création de logos et chartes graphiques complètes",
      "Affiches publicitaires, flyers et dépliants",
      "Bannières et visuels pour les réseaux sociaux",
      "Design d'interfaces UI/UX (maquettes Figma)",
      "Supports d'impression haute définition"
    ],
    deliverables: [
      "Fichiers sources et exports vectoriels (SVG, PNG, PDF HD)",
      "Guide d'utilisation de la charte graphique",
      "Déclinaisons adaptées aux formats digitaux et print"
    ],
    gradient: "from-blue-600/20 via-cyan-400/10 to-transparent",
    badge: "Identité & Visuels"
  },
  {
    id: "solutions-numeriques",
    title: "Solutions Numériques",
    shortDescription: "Création de solutions digitales adaptées aux besoins et aux objectifs de chaque client.",
    fullDescription: "Nous accompagnons votre transition numérique en développant des solutions digitales complètes et innovantes. Qu'il s'agisse de digitalisation de services, d'intégration d'outils cloud ou de conseil technologique, nous construisons l'avenir numérique de votre activité.",
    iconName: "Cpu",
    features: [
      "Audit et conseil en stratégie technologique",
      "Intégration d'outils et de services cloud",
      "Digitalisation des flux administratifs et commerciaux",
      "Maintenance proactive et support continu",
      "Accompagnement personnalisé à chaque étape"
    ],
    deliverables: [
      "Plan de transformation digitale personnalisé",
      "Outils et plateformes configurés",
      "Support technique dédié"
    ],
    gradient: "from-cyan-600/20 via-sky-500/10 to-transparent",
    badge: "Innovation & Conseil"
  }
];

