import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/components/pages/AboutPage";
import { SITE_URL } from "@/lib/school";

const title = "About Us — Embakasi Benedicta Academy, Utawala";
const description =
  "Our mission, vision, values, story and leadership team at Embakasi Benedicta Academy, a private school in Utawala, Nairobi.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/about` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});
