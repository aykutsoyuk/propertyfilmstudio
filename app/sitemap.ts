import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://propertyfilmstudio.com";

  return [
    {
      url: siteUrl,
      alternates: { languages: { "pt-PT": siteUrl, en: `${siteUrl}/en` } },
    },
    {
      url: `${siteUrl}/en`,
      alternates: { languages: { "pt-PT": siteUrl, en: `${siteUrl}/en` } },
    },
  ];
}
