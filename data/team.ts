export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  email?: string;
  phone?: string;
  avatarUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "0001",
    name: "BADEAKE Arnaud",
    role: "Manager",
    department: "Équipe Management & Communication",
    bio: "Manager de l'équipe",
    email: "arnaudbadeake@gmail.com",
    phone: "0344129247",
    avatarUrl: "/images/team/arnaud.png"
  },
  {
    id: "0002",
    name: "TODIZARA MIHA Marino",
    role: "IT Manager/ DevOps",
    department: "Équipe Cloud & DevOps",
    bio: "Responsable IT et DevOps",
    email: "marinomiha7@gmail.com",
    phone: "0380530748",
    avatarUrl: "/images/team/marinoh.png"
  },
  {
    id: "0003",
    name: "RAFANOMEZANTSOA Christian Fahendrena",
    role: "Développeur Web et Mo",
    department: "Équipe Développement & Solutions Digitales",
    bio: "Développeur Web et Mobile",
    email: "christianfahendrena@gmail.com",
    phone: "0387708450",
    avatarUrl: "/images/team/Fafana.png"
  },
  {
    id: "0004",
    name: "RANDRIANAIVOSOA Zafindravao Sophie",
    role: "Responsable communication / Assistante administrative",
    department: "Équipe Management & Communication",
    bio: "Responsable de la communication et assistante administrative",
    email: "sophierandria.crys@gmail.com",
    phone: "0345009283",
    avatarUrl: "/images/team/sophie.png"
  },
    {
    id: "0005",
    name: "RAKOTONDRAMANANA Narindra Tsiriniaina",
    role: "Développeur Web et Mobile",
    department: "Équipe Développement & Solutions Digitales",
    bio: "Développeur Web et Mobile",
    email: "narindraTsiry18@gmail.com",
    phone: "0387349943",
    avatarUrl: "/images/team/narindra.png"
  },
  {
    id: "0006",
    name: "RANDRIANARIVELO Tojoniaina",
    role: "Développeur Web et Mobile",
    department: "Équipe Développement & Solutions Digitales",
    bio: "Développeur Web et Mobile",
    email: "tojorandrianarivelo14@gmail.com",
    phone: "0389379350",
    avatarUrl: "/images/team/tojo.png"
  },
  {
    id: "0007",
    name: "BEFENO Steeven Cesard",
    role: "Développeur Web et Mobile",
    department: "Équipe Développement & Solutions Digitales",
    bio: "Développeur Web et Mobile",
    email: "befenosteeven@gmail.com",
    phone: "0328535118",
    avatarUrl: "/images/team/Hala.png"
  }
];
