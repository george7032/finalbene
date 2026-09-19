import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaGroup, AdmissionsCta } from "@/components/site/CtaGroup";
import Faq from "@/components/site/Faq";
import { SITE_URL } from "@/lib/school";
const heroImage = "/images/hero-6.jpeg";

const title = "Boarding — Embakasi Benedicta Academy, Utawala";
const description =
  "Boarding at Embakasi Benedicta Academy in Utawala: supervision, daily routine, study time, wellbeing and parent communication.";

export const Route = createFileRoute("/boarding")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/boarding` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/boarding` }],
  }),
  component: BoardingPage,
});


const commitments = [
  { t: "Supervision", d: "Boarders are supervised by staff throughout the school day and in the evenings." },
  { t: "Study time", d: "Structured preparation and study time so that boarders keep up with their learning." },
  { t: "Mentorship", d: "Pastoral care and mentorship so that every boarder has an adult they can talk to." },
  { t: "Parent communication", d: "Regular contact with parents about wellbeing, progress and any concerns." },
  { t: "Safety and safeguarding", d: "Clear safeguarding procedures apply to boarding as they do across the Academy." },
  { t: "Rest and recreation", d: "Time for play, activities and rest so that boarding life stays balanced." },
];

const faqs = [
  {
    question: "Does the Academy offer boarding?",
    answer:
      "Boarding availability, the levels it is open to and the facilities provided are confirmed directly by the Academy. Please contact the admissions office for the current position before making plans.",
  },
  {
    question: "How are boarders supervised?",
    answer:
      "Boarders are supervised by staff during the school day and in the evenings, with structured study time and pastoral support. Exact staffing arrangements are confirmed by the Academy.",
  },
  {
    question: "How do parents stay in touch?",
    answer:
      "The Academy communicates with boarding parents regularly about wellbeing and progress, and parents may contact the school office at any time.",
  },
  {
    question: "What should a boarder bring?",
    answer:
      "A checklist of required items is issued by the Academy on enrolment. Please request it from the admissions office.",
  },
];

function BoardingPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Boarding"
        title="Day and boarding at the Academy"
        description="A structured, supervised and caring environment for learners who board — with study, rest and wellbeing in balance."
        image={heroImage}
        imageAlt="Embakasi Benedicta Academy campus"
        crumbs={[{ name: "Boarding" }]}
      >
        <CtaGroup compact />
      </PageHero>

      <Section>
        <SectionHeading
          title="What boarders can expect"
          description="Our commitments to every learner who boards with us."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {commitments.map((c) => (
            <div key={c.t} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>


      <Section>
        <Faq items={faqs} title="Boarding questions" />
      </Section>

      <AdmissionsCta
        title="Enquire about boarding"
        description="Talk to our admissions team about boarding places, routines and requirements."
      />
    </Layout>
  );
}
