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
    name: "Nom du membre",
    role: "Lead Développeur Web & Fullstack",
    department: "Pôle Développement Web",
    bio: "Spécialiste dans la conception d'architectures web modernes, performantes et scalables avec Next.js et Laravel.",
    isPlaceholder: true,
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: "member-2",
    name: "Nom du membre",
    role: "Développeur Mobile & Frontend",
    department: "Pôle Mobile & UI",
    bio: "Passionné par la création d'interfaces intuitives et d'applications mobiles réactives offrant une expérience utilisateur fluide.",
    isPlaceholder: true,
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: "member-3",
    name: "Nom du membre",
    role: "Développeur Backend & Base de données",
    department: "Pôle Systèmes & Logiciels",
    bio: "Expert en modélisation de bases de données, sécurité applicative et développement d'APIs robustes sous PHP & Laravel.",
    isPlaceholder: true,
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: "member-4",
    name: "Nom du membre",
    role: "UI/UX Designer & Graphiste",
    department: "Pôle Création & Design",
    bio: "Créateur d'identités visuelles percutantes, de maquettes ergonomiques Figma et de supports de communication modernes.",
    isPlaceholder: true,
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com"
  }
];

