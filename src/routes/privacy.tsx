import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { school, SITE_URL } from "@/lib/school";

const title = "Privacy Notice — Embakasi Benedicta Academy";
const description =
  "How Embakasi Benedicta Academy collects, uses and protects personal information submitted through this website.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/privacy` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    h: "Information we collect",
    p: "We collect the information you choose to give us through our contact form, admissions enquiry form, school visit booking form, WhatsApp messages, telephone calls and email correspondence. This typically includes the parent or guardian's name, telephone number, email address, the learner's name and the level of interest.",
  },
  {
    h: "How we use your information",
    p: "Information is used only to respond to your enquiry, arrange a school visit, process an application and communicate with you about the Academy. It is not sold or shared for marketing by third parties.",
  },
  {
    h: "Website usage and cookies",
    p: "This website may use essential cookies needed for the site to function. Any additional analytics or tracking will be described here before it is introduced.",
  },
  {
    h: "Photography and media consent",
    p: "Photographs of learners are published only with parental permission, and never with a learner's personal details.",
  },
  {
    h: "Data security",
    p: "Information submitted to the Academy is handled by authorised staff only and is protected against unauthorised access, alteration or disclosure.",
  },
  {
    h: "Your rights",
    p: "You may ask what information the Academy holds about you or your child, ask for it to be corrected, or ask for it to be deleted where the Academy is not required to keep it. Contact the school office to make a request.",
  },
  {
    h: "Retention",
    p: "Enquiry and application information is kept only as long as it is needed for the purpose it was given, or as required by law.",
  },
];

function PrivacyPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Legal"
        title="Privacy notice"
        description="How we handle the personal information you share with the Academy."
        crumbs={[{ name: "Privacy Notice" }]}
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
              Questions about this notice may be sent to{" "}
              <a href={`mailto:${school.email}`} className="text-primary underline-offset-4 hover:underline">
                {school.email}
              </a>{" "}
              or by telephone on {school.phone}.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
