import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import ContactInfo from "@/components/site/ContactInfo";
import { SITE_URL } from "@/lib/school";

const title = "Child Safeguarding — Embakasi Benedicta Academy";
const description =
  "Our commitment to learner safety, staff responsibilities, reporting concerns, online safety and wellbeing at Embakasi Benedicta Academy.";

export const Route = createFileRoute("/child-safeguarding")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/child-safeguarding` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/child-safeguarding` }],
  }),
  component: SafeguardingPage,
});

const items: { h: string; p: string }[] = [
  {
    h: "Our safeguarding commitment",
    p: "Embakasi Benedicta Academy is committed to the safety, welfare and dignity of every learner. Safeguarding is the responsibility of every member of staff and underpins everything we do.",
  },
  {
    h: "Learner safety",
    p: "Learners are supervised throughout the school day. Access to the campus is controlled and learners are released only to authorised parents or guardians.",
  },
  {
    h: "Staff responsibilities",
    p: "All staff are expected to act in the best interests of learners, to maintain professional boundaries and to report any concern about a child's welfare immediately.",
  },
  {
    h: "Reporting a concern",
    p: "Any parent, learner, member of staff or visitor who has a concern about a child's welfare should report it to the school office without delay. Concerns are treated seriously and confidentially.",
  },
  {
    h: "Visitor procedures",
    p: "All visitors report to the school office, are signed in and are accompanied while on the campus. Visitors are not left unsupervised with learners.",
  },
  {
    h: "Online safety",
    p: "Where learners use digital devices at school, use is supervised and age-appropriate. We encourage parents to supervise online activity at home.",
  },
  {
    h: "Anti-bullying",
    p: "Bullying of any kind is not tolerated. Learners are encouraged to speak to a trusted adult, and every report is followed up.",
  },
  {
    h: "Learner wellbeing",
    p: "Pastoral care, guidance and counselling support learners' emotional as well as academic development.",
  },
  {
    h: "Photography and media consent",
    p: "Photographs of learners are published only with parental permission. Learner personal details are never published alongside images.",
  },
  {
    h: "Communication with parents",
    p: "Parents are informed promptly of any incident affecting their child's welfare and are partners in agreeing next steps.",
  },
];

function SafeguardingPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our commitment"
        title="Child safeguarding"
        description="The safety and wellbeing of every learner comes before everything else."
        crumbs={[{ name: "Child Safeguarding" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          {items.map((i) => (
            <div key={i.h}>
              <h2 className="text-xl font-bold text-foreground">{i.h}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{i.p}</p>
            </div>
          ))}
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground">Safeguarding contact</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Safeguarding concerns may be reported directly to the school office.
            </p>
            <div className="mt-6">
              <ContactInfo />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
