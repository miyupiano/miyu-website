import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://miyuyukiiri.com",
      priority: 1,
    },
    {
      url: "https://miyuyukiiri.com/profile",
    },
    {
      url: "https://miyuyukiiri.com/performance",
    },
    {
      url: "https://miyuyukiiri.com/activities",
    },
    {
      url: "https://miyuyukiiri.com/contact",
    },
  ];
}