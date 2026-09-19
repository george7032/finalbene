import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { school, SITE_URL } from "@/lib/school";

const title = "Terms of Use — Embakasi Benedicta Academy";
const description =
  "Terms governing the use of the Embakasi Benedicta Academy website, its content and external links.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/terms` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/terms` }],
  }),
  component: TermsPage,
});

const sections = [
  {
    h: "Use of this website",
    p: "This website is provided for information about Embakasi Benedicta Academy. By using it you agree to use it lawfully and not to interfere with its operation or security.",
  },
  {
    h: "Content",
    p: "We aim to keep the information on this website accurate and current. Details that have not yet been confirmed by the Academy are clearly marked as such and should be verified with the school office before being relied upon.",
  },
  {
    h: "Intellectual property",
    p: "The text, photographs, logo and design of this website belong to the Academy and may not be copied or reused without written permission.",
  },
  {
    h: "External links",
    p: "Links to other websites, including social media pages, are provided for convenience. The Academy is not responsible for the content of external sites.",
  },
  {
    h: "Accuracy and liability",
    p: "While we take care to provide accurate information, the Academy accepts no liability for loss arising from reliance on website content. Formal information is issued directly by the school office.",
  },
];

function TermsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        description="The terms that apply when you use this website."
        crumbs={[{ name: "Terms of Use" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-bold text-foreground">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.p}</p>
            </div>
          ))}
          <div>
            <h2 className="text-xl font-bold text-foreground">Contact</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {school.name}, {school.address}. Telephone {school.phone}, email{" "}
              <a href={`mailto:${school.email}`} className="text-primary underline-offset-4 hover:underline">
                {school.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
