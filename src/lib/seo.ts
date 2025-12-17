export interface SchemaGeneratorProps {
  type: "Article" | "VideoObject" | "Organization" | "WebSite" | "Place";
  data: any;
  url: string;
}

export const SITE_URL = process.env.PUBLIC_SITE_URL;
export const ORGANIZATION_NAME = "Community Tech Centers";
export const ORGANIZATION_LOGO = `${SITE_URL}/logo/ctc-logo.webp`;

export function generateArticleSchema(article: any, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author || ORGANIZATION_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION_NAME,
      logo: {
        "@type": "ImageObject",
        url: ORGANIZATION_LOGO,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function generateVideoSchema(video: any, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: [video.thumbnail],
    uploadDate: video.publishedAt,
    duration: video.duration
      ? `PT${video.duration.replace(":", "M")}S`
      : undefined, // Approximation if original ISO not available
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION_NAME,
      logo: {
        "@type": "ImageObject",
        url: ORGANIZATION_LOGO,
      },
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORGANIZATION_NAME,
    url: SITE_URL,
    logo: ORGANIZATION_LOGO,
    sameAs: [
      "https://www.facebook.com/CTCCambodia",
      "https://twitter.com/CTCCambodia",
      "https://www.linkedin.com/company/ctc-cambodia",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+855-12345678",
      contactType: "Community Tech Center Cambodia",
      areaServed: "KH",
      availableLanguage: ["en", "km"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Phnom Penh",
      addressCountry: "Cambodia",
    },
  };
}

export function generatePlaceSchema(place: any, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: place.name,
    description: place.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: place.location || "Phnom Penh",
      addressCountry: "KH",
    },
    url: url,
  };
}

export function generateWebSiteSchema(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORGANIZATION_NAME,
    url: url,
    description:
      "Community Tech Center - Empowering communities through technology.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
