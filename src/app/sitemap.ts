import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
