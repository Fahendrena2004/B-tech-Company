export interface TechnologyItem {
  name: string;
  category: "Frontend" | "Backend" | "Base de données" | "Design & Outils";
  description: string;
  proficiency: string;
  iconName: string;
  gradient: string;
  tags: string[];
}

export const technologiesData: TechnologyItem[] = [
  // Frontend
  {
    name: "Next.js",
    category: "Frontend",
    description: "Framework React de pointe pour des applications web ultra-rapides, rendu hybride (SSR/SSG) et SEO optimal.",
    proficiency: "Avancé",
    iconName: "Zap",
    gradient: "from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-400",
    tags: ["App Router", "SSR", "Optimisation SEO"]
  },
  {
    name: "React",
    category: "Frontend",
    description: "Bibliothèque standard pour la construction d'interfaces utilisateur interactives, composables et performantes.",
    proficiency: "Avancé",
    iconName: "Code",
    gradient: "from-cyan-500 to-blue-600",
    tags: ["Hooks", "Composants", "Single Page Apps"]
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Sur-ensemble typé de JavaScript garantissant un code robuste, maintenable et sans failles logiques.",
    proficiency: "Avancé",
    iconName: "FileCode2",
    gradient: "from-blue-600 to-blue-800",
    tags: ["Type Safety", "Refactoring", "Productivité"]
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "Langage fondamental du web moderne pour dynamiser les interfaces et créer des interactions fluides.",
    proficiency: "Avancé",
    iconName: "Braces",
    gradient: "from-amber-400 to-yellow-600",
    tags: ["ES6+", "DOM", "Async/Await"]
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Framework CSS utilitaire permettant de concevoir des designs sur-mesure, modernes et parfaitement responsives.",
    proficiency: "Avancé",
    iconName: "Paintbrush",
    gradient: "from-sky-400 to-cyan-600",
    tags: ["Utility-first", "Responsive", "Design System"]
  },

  // Backend
  {
    name: "Laravel",
    category: "Backend",
    description: "Framework PHP moderne, élégant et puissant pour la création d'APIs sécurisées et de logiques métier complexes.",
    proficiency: "Avancé",
    iconName: "Server",
    gradient: "from-red-500 to-rose-700",
    tags: ["MVC", "Eloquent ORM", "APIs RESTful"]
  },
  {
    name: "PHP",
    category: "Backend",
    description: "Langage serveur robuste et éprouvé alimentant une part majeure des architectures web mondiales.",
    proficiency: "Avancé",
    iconName: "Terminal",
    gradient: "from-indigo-400 to-blue-600",
    tags: ["PHP 8+", "POO", "Backend"]
  },

  // Database
  {
    name: "MySQL",
    category: "Base de données",
    description: "Système de gestion de base de données relationnelle fiable, rapide et sécurisé pour vos données critiques.",
    proficiency: "Avancé",
    iconName: "Database",
    gradient: "from-blue-500 to-amber-600",
    tags: ["SQL", "Relations", "Indexation", "Transactions"]
  },

  // Tools & Design
  {
    name: "Figma",
    category: "Design & Outils",
    description: "Outil collaboratif de design d'interfaces pour la création de wireframes, prototypes interactifs et design systems.",
    proficiency: "Avancé",
    iconName: "Palette",
    gradient: "from-purple-500 via-pink-500 to-amber-500",
    tags: ["UI/UX", "Prototypage", "Design System"]
  },
  {
    name: "Git",
    category: "Design & Outils",
    description: "Système de contrôle de version distribué pour un suivi rigoureux et collaboratif du code source.",
    proficiency: "Avancé",
    iconName: "GitBranch",
    gradient: "from-orange-500 to-red-600",
    tags: ["Version Control", "Branches", "Workflow"]
  },
  {
    name: "GitHub",
    category: "Design & Outils",
    description: "Plateforme d'hébergement de code, revue de code, intégration continue et collaboration technique.",
    proficiency: "Avancé",
    iconName: "Github",
    gradient: "from-zinc-700 to-zinc-900",
    tags: ["CI/CD", "Collaboration", "Open Source"]
  }
];

export const techCategories = [
  "Tous",
  "Frontend",
  "Backend",
  "Base de données",
  "Design & Outils"
] as const;

