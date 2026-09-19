import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/pages/HomePage";
import { school, SITE_URL } from "@/lib/school";

const title = "School in Utawala | Embakasi Benedicta Academy";
const description =
  "Embakasi Benedicta Academy is a private school in Utawala, Nairobi offering Kindergarten, Primary, Junior and Senior School education with day and boarding options.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "School",
          name: school.name,
          description,
          url: SITE_URL,
          telephone: school.phone,
          email: school.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Utawala, next to Kimson Plaza",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});
