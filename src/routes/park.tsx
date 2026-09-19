import { createFileRoute } from "@tanstack/react-router";
import ParkPage from "@/components/pages/ParkPage";
import { SITE_URL } from "@/lib/school";

const title = "Kids Amusement Park — Embakasi Benedicta Academy, Utawala";
const description =
  "The kids amusement park at Embakasi Benedicta Academy in Utawala — one of the facilities that supports safe, supervised active play for our learners.";

export const Route = createFileRoute("/park")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/park` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/park` }],
  }),
  component: ParkPage,
});
