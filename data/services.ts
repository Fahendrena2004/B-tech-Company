export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  gradient: string;
  accentColor: string;
  badge: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "site-web-ecommerce",
    title: "Site Web & E-commerce",
    subtitle: "Développement Web & Applications",
    shortDescription:
      "Création de sites vitrines, plateformes e-commerce et applications web sur mesure, performantes et optimisées SEO.",
    fullDescription:
      "Nous concevons des sites web modernes, des boutiques en ligne et des applications web complètes (SaaS, ERP, portails clients). De l'architecture Next.js/Laravel à l'intégration paiement, nous assurons performance, sécurité et évolutivité.",
    iconName: "Globe",
    features: [
      "Sites vitrines & institutionnels responsive",
      "Boutiques e-commerce (paiement, catalogue)",
      "Applications web métier (SaaS, ERP, CRM)",
      "Optimisation SEO et temps de chargement",
      "APIs REST et intégrations tierces",
    ],
    deliverables: [
      "Site / application web clé en main",
      "Back-office administrateur",
      "Documentation technique et formation",
    ],
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    accentColor: "blue",
    badge: "Web & E-commerce",
  },
  {
    id: "application-mobile",
    title: "Application Mobile",
    subtitle: "Android & iOS",
    shortDescription:
      "Développement d'applications mobiles natives et multiplateformes pour Android et iOS, fluides et intuitives.",
    fullDescription:
      "Donnez vie à votre idée sur smartphone. Nous développons des applications mobiles performantes pour Android et iOS avec React Native ou natif, intégration des notifications push, APIs et synchronisation en temps réel.",
    iconName: "Smartphone",
    features: [
      "Applications multiplateformes (Android & iOS)",
      "Interfaces tactiles ergonomiques et modernes",
      "Synchronisation des données en temps réel",
      "Notifications push et fonctionnalités natives",
      "Publication sur App Store & Google Play",
    ],
    deliverables: [
      "Application mobile prête au déploiement",
      "Intégration APIs et bases de données",
      "Tests multi-appareils et suivi de qualité",
    ],
    gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
    accentColor: "cyan",
    badge: "Android & iOS",
  },
  {
    id: "cloud-hebergement",
    title: "Cloud & Hébergement",
    subtitle: "Infrastructure & DevOps",
    shortDescription:
      "Solutions d'hébergement cloud sécurisées, gestion de serveurs, déploiement CI/CD et infrastructure scalable.",
    fullDescription:
      "Nous gérons votre infrastructure cloud de A à Z : configuration de serveurs VPS/dédiés, hébergement haute disponibilité, certificats SSL, sauvegardes automatiques, pipelines CI/CD et monitoring continu pour une disponibilité maximale.",
    iconName: "Cloud",
    features: [
      "Hébergement VPS et serveurs dédiés",
      "Configuration SSL, domaines et DNS",
      "Déploiement automatisé CI/CD (GitHub Actions)",
      "Sauvegardes automatiques et restauration",
      "Monitoring et alertes de disponibilité",
    ],
    deliverables: [
      "Infrastructure cloud configurée et sécurisée",
      "Pipeline de déploiement automatisé",
      "Tableau de bord de monitoring",
    ],
    gradient: "from-sky-500/20 via-indigo-500/10 to-transparent",
    accentColor: "sky",
    badge: "Cloud & DevOps",
  },
  {
    id: "design-ui-ux",
    title: "Design UI/UX",
    subtitle: "Identité visuelle & Interfaces",
    shortDescription:
      "Conception d'interfaces utilisateur modernes, identité visuelle, maquettes Figma, logos et supports graphiques.",
    fullDescription:
      "Nous créons des expériences visuelles qui marquent les esprits. Du logo à la charte graphique complète, des maquettes Figma aux supports print et digitaux — notre studio design allie esthétique et ergonomie pour sublimer votre marque.",
    iconName: "Palette",
    features: [
      "Maquettes UI/UX et prototypes Figma",
      "Création de logos et chartes graphiques",
      "Affiches, flyers et supports publicitaires",
      "Visuels réseaux sociaux et bannières web",
      "Design d'interfaces responsive mobile-first",
    ],
    deliverables: [
      "Fichiers sources vectoriels (SVG, PNG, PDF HD)",
      "Guide d'utilisation de la charte graphique",
      "Maquettes interactives et prêtes au développement",
    ],
    gradient: "from-blue-600/20 via-cyan-400/10 to-transparent",
    accentColor: "purple",
    badge: "UI/UX & Graphisme",
  },
  {
    id: "montage-video",
    title: "Montage Vidéo",
    subtitle: "Production & Post-production",
    shortDescription:
      "Montage vidéo professionnel pour vos publicités, présentations, réseaux sociaux, motion design et animations.",
    fullDescription:
      "Donnez vie à votre message avec des vidéos percutantes. Nous assurons le montage professionnel, l'habillage graphique, le motion design, les sous-titres et l'optimisation des formats pour chaque plateforme (YouTube, Instagram, TikTok, LinkedIn).",
    iconName: "Video",
    features: [
      "Montage et étalonnage vidéo professionnel",
      "Motion design et animations graphiques",
      "Publicités et vidéos promotionnelles",
      "Sous-titres, voix-off et habillage sonore",
      "Formats optimisés pour toutes les plateformes",
    ],
    deliverables: [
      "Vidéos exportées en HD/4K multi-formats",
      "Fichiers sources du projet de montage",
      "Versions adaptées par plateforme (YouTube, Reels…)",
    ],
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    accentColor: "indigo",
    badge: "Vidéo & Motion",
  },
];
