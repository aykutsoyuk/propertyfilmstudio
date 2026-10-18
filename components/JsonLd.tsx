import { getTranslations } from "next-intl/server";
import {
  EMAIL,
  INSTAGRAM_URL,
  LAST_UPDATED,
  SITE_NAME,
  SITE_URL,
  YOUTUBE_URL,
} from "@/content/site";

const CITIES = ["Braga", "Guimarães", "Porto"];

// Entity mapping for search engines and LLMs: business, person, site and page.
export async function JsonLd({ locale }: { locale: string }) {
  const tMeta = await getTranslations({ locale, namespace: "meta" });
  const tServices = await getTranslations({ locale, namespace: "services" });
  const tAbout = await getTranslations({ locale, namespace: "about" });
  const tSchema = await getTranslations({ locale, namespace: "schema" });

  const services = tServices.raw("items") as { title: string; body: string }[];
  const pageUrl = locale === "en" ? `${SITE_URL}/en` : SITE_URL;
  const inLanguage = locale === "en" ? "en" : "pt-PT";
  const sameAs = [INSTAGRAM_URL, YOUTUBE_URL].filter((url) => url.startsWith("http"));

  const orgId = `${SITE_URL}/#organization`;
  const personId = `${SITE_URL}/#aykut`;
  const siteId = `${SITE_URL}/#website`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": orgId,
        name: SITE_NAME,
        url: SITE_URL,
        description: tMeta("description"),
        email: EMAIL,
        image: `${SITE_URL}/images/projects/bom-jesus-poster.jpeg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Braga",
          addressCountry: "PT",
        },
        areaServed: CITIES.map((name) => ({ "@type": "City", name })),
        knowsLanguage: ["pt-PT", "en"],
        founder: { "@id": personId },
        ...(sameAs.length ? { sameAs } : {}),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: tServices("heading"),
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.body,
              provider: { "@id": orgId },
              areaServed: CITIES,
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "Aykut Soyuk",
        jobTitle: tSchema("jobTitle"),
        description: tAbout("paragraph1"),
        worksFor: { "@id": orgId },
        homeLocation: { "@type": "City", name: "Braga" },
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: ["pt-PT", "en"],
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: tMeta("title"),
        description: tMeta("description"),
        inLanguage,
        isPartOf: { "@id": siteId },
        about: { "@id": orgId },
        dateModified: LAST_UPDATED,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
