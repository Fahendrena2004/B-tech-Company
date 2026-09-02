export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  hours: string;
  socials: {
    facebook: string;
    linkedin: string;
    github: string;
  };
}

export const contactData: ContactInfo = {
  email: "contact@btech-company.com",
  phone: "+261 34 00 000 00",
  whatsapp: "+261 34 00 000 00",
  address: "Madagascar (Localisation disponible prochainement)",
  hours: "Du lundi au vendredi : 08h00 - 18h00",
  socials: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  }
};

