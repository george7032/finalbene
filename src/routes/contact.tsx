import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/components/pages/ContactPage";
import { school, SITE_URL } from "@/lib/school";

const title = "Contact Us — Embakasi Benedicta Academy, Utawala";
const description =
  "Contact Embakasi Benedicta Academy in Utawala, next to Kimson Plaza. Call, email, message us on WhatsApp or book a school visit.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "School",
          name: school.name,
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
  component: ContactPage,
});
