import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "B-Tech Company | Solutions Numériques & Développement",
    short_name: "B-Tech Company",
    description:
      "B-Tech Company accompagne les entreprises et particuliers dans la création de sites web, applications mobiles, logiciels et solutions digitales sur mesure.",
    start_url: "/",
    display: "standalone",
    background_color: "#090d16",
    theme_color: "#090d16",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
