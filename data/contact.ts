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
  email: "btechcompanymada@gmail.com",
  phone: "+261 34 05 821 06",
  whatsapp: "+261 34 05 821 06",
  address: "Madagascar (Localisation disponible prochainement)",
  hours: "Du lundi au vendredi : 08h00 - 18h00",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61593413722087",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  }
};