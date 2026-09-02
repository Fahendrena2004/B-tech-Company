import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://btech-company.com";
  const lastModified = new Date();

  const routes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/technologies",
    "/team",
    "/blog",
    "/contact",
    "/devis",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/devis" || route === "/services" ? 0.9 : 0.8,
  }));
}

