export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  avatarUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  isPlaceholder: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Jean Dupont",
    role: "Lead Développeur Web & Fullstack",
    department: "Pôle Développement Web",
    bio: "Spécialiste dans la conception d'architectures web modernes, performantes et scalables avec Next.js et Laravel. Fort de 8 ans d'expérience.",
    isPlaceholder: false,
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    avatarUrl: "/images/team-1.jpg"
  },
  {
    id: "member-2",
    name: "Alice Rakoto",
    role: "Développeuse Mobile & Frontend",
    department: "Pôle Mobile & UI",
    bio: "Passionnée par la création d'interfaces intuitives et d'applications mobiles réactives offrant une expérience utilisateur fluide.",
    isPlaceholder: false,
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    avatarUrl: "/images/team-2.jpg"
  },
  {
    id: "member-3",
    name: "Marc Andria",
    role: "Développeur Backend & Base de données",
    department: "Pôle Systèmes & Logiciels",
    bio: "Expert en modélisation de bases de données, sécurité applicative et développement d'APIs robustes sous PHP & Laravel.",
    isPlaceholder: false,
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    avatarUrl: "/images/team-3.jpg"
  },
  {
    id: "member-4",
    name: "Sophie Rasoa",
    role: "UI/UX Designer & Graphiste",
    department: "Pôle Création & Design",
    bio: "Créatrice d'identités visuelles percutantes, de maquettes ergonomiques Figma et spécialisée en design d'objets (Arts de la table, décoration).",
    isPlaceholder: false,
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    avatarUrl: "/images/team-4.jpg"
  }
];

