export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    number: "Étape 01",
    title: "Analyse",
    subtitle: "Comprendre le besoin du client",
    description: "Écoute active, cadrage des objectifs métiers, recueil des exigences fonctionnelles et définition précise du périmètre du projet.",
    iconName: "Search",
    details: [
      "Étude des besoins et contraintes",
      "Définition des objectifs et cibles",
      "Élaboration du cahier des charges"
    ]
  },
  {
    step: "02",
    number: "Étape 02",
    title: "Conception",
    subtitle: "Définir la structure et l'expérience utilisateur",
    description: "Création de l'architecture de l'information, modélisation des bases de données et conception des maquettes ergonomiques (UI/UX).",
    iconName: "LayoutTemplate",
    details: [
      "Arborescence et parcours utilisateur",
      "Wireframes et maquettes interactives",
      "Validation de l'identité visuelle"
    ]
  },
  {
    step: "03",
    number: "Étape 03",
    title: "Développement",
    subtitle: "Développer la solution",
    description: "Programmation du front-end et du back-end avec des technologies modernes, respect des bonnes pratiques et code propre.",
    iconName: "Code2",
    details: [
      "Intégration responsive et accessible",
      "Développement des fonctionnalités et APIs",
      "Suivi d'avancement transparent"
    ]
  },
  {
    step: "04",
    number: "Étape 04",
    title: "Tests",
    subtitle: "Tester les fonctionnalités et la qualité",
    description: "Assurance qualité rigoureuse : vérification des performances, compatibilité multi-navigateurs, tests sur mobiles et sécurité.",
    iconName: "CheckCircle2",
    details: [
      "Contrôle qualité fonctionnel",
      "Tests de rapidité et de réactivité",
      "Correction et ajustements minutieux"
    ]
  },
  {
    step: "05",
    number: "Étape 05",
    title: "Livraison",
    subtitle: "Déployer la solution",
    description: "Mise en production sécurisée, configuration des serveurs, nom de domaine et paramétrage du référencement.",
    iconName: "Rocket",
    details: [
      "Déploiement sur serveur haute performance",
      "Configuration SSL et sécurité",
      "Transmission des accès et documentation"
    ]
  },
  {
    step: "06",
    number: "Étape 06",
    title: "Accompagnement",
    subtitle: "Assurer le suivi et les améliorations",
    description: "Support technique, maintenance préventive et conseils pour faire évoluer votre solution au rythme de votre croissance.",
    iconName: "Headphones",
    details: [
      "Assistance technique réactive",
      "Sauvegardes et mises à jour régulières",
      "Évolutions fonctionnelles continues"
    ]
  }
];

