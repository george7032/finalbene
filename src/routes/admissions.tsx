import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaGroup } from "@/components/site/CtaGroup";
import Faq from "@/components/site/Faq";
import EnquiryForm from "@/components/site/forms/EnquiryForm";
import VisitForm from "@/components/site/forms/VisitForm";
import ContactInfo from "@/components/site/ContactInfo";
import { school, SITE_URL } from "@/lib/school";
const heroImage = "/images/upper.jpeg";

const title = "Admissions — Embakasi Benedicta Academy, Utawala";
const description =
  "Enrol your child at Embakasi Benedicta Academy in Utawala. Follow our five-step admissions journey: enquire, visit, apply, assessment and enrolment.";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/admissions` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/admissions` }],
  }),
  component: AdmissionsPage,
});

const steps = [
  {
    n: "Step 1",
    t: "Make an enquiry or book a school visit",
    d: "Our admission process begins with an enquiry or a school visit. Send the enquiry form below, call the school or message us on WhatsApp, and we will arrange a convenient time for you to come and see the Academy.",
  },
  {
    n: "Step 2",
    t: "Meet the admissions team",
    d: "Parents meet with our admissions team to discuss the learner's needs, preferred pathway, subject options, and whether your child will join as a day scholar or a boarder.",
  },
  {
    n: "Step 3",
    t: "Complete the application form",
    d: "Fill in the application form at the school office, or download the form below, complete it and send it to the school email.",
  },
  {
    n: "Step 4",
    t: "Submit the required documents",
    d: "Attach the learner's birth certificate, the most recent school report where applicable, a parent or guardian identification document and passport-size photographs.",
  },
  {
    n: "Step 5",
    t: "Application review and placement",
    d: "The admissions team reviews the application and confirms the learner's placement, including a short placement assessment where it is needed.",
  },
  {
    n: "Step 6",
    t: "Fees, reporting and enrolment",
    d: "Once placement is confirmed, you receive guidance on fees, reporting requirements and enrolment — and we welcome your family to the Academy.",
  },
];

const faqs = [
  {
    question: "When can I apply?",
    answer:
      "Enquiries are welcome throughout the year. Intake dates and available places for each term are confirmed by the admissions office — please contact us for the current position.",
  },
  {
    question: "What documents are required?",
    answer:
      "The exact document list for each level is confirmed by the admissions office. Parents are generally asked to provide the learner's birth certificate, a previous school report where applicable, and a parent or guardian identification document.",
  },
  {
    question: "Is there an assessment?",
    answer:
      "Yes. A short placement assessment helps us understand your child's current level so that teaching and support are matched to their needs. It is not an examination to pass or fail.",
  },
  {
    question: "What are the fees?",
    answer:
      "Fee information is issued directly by the Academy office on request. We do not publish fees on the website until they are confirmed for the current academic year.",
  },
  {
    question: "Do you offer boarding?",
    answer:
      "Boarding availability and eligibility are confirmed by the Academy. Please see the Boarding page and contact the admissions office for current details.",
  },
];

function AdmissionsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Admissions"
        title="Join the Embakasi Benedicta Academy family"
        description="A clear, supportive admissions journey from your first enquiry to your child's first day."
        image={heroImage}
        imageAlt="Learners at Embakasi Benedicta Academy"
        crumbs={[{ name: "Admissions" }]}
      >
        <CtaGroup />
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="How to join"
          title="Our admission process, step by step"
          description="Six straightforward steps, with our admissions team beside you at every stage."
        />
        <ol className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.n} className="relative rounded-xl border border-border bg-card p-6">
              <span
                aria-hidden="true"
                className="absolute right-5 top-5 text-3xl font-bold text-primary/15"
              >
                {i + 1}
              </span>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">{s.n}</p>
              <h3 className="mt-2 text-lg font-bold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-card p-6 text-center sm:p-8">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <FileText aria-hidden="true" className="h-6 w-6 text-primary" />
          </span>
          <h3 className="mt-4 text-xl font-bold text-foreground">
            Download the application form
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Download the application form, complete it and submit it to the school email at{" "}
            <a
              href={`mailto:${school.email}`}
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              {school.email}
            </a>{" "}
            — or deliver it to the school office in Utawala.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/images/eba-application-form.pdf"
              download
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Download application form (PDF)
            </a>
            <a
              href={`mailto:${school.email}?subject=${encodeURIComponent("Learner application — Embakasi Benedicta Academy")}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              Email the completed form
            </a>
          </div>
        </div>
      </Section>


      <Section muted>
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold text-foreground">Entry requirements</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Entry requirements for each level are set by the Academy.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Required documents</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Learner's birth certificate</li>
              <li>Most recent school report, where applicable</li>
              <li>Parent or guardian identification document</li>
              <li>Passport-size photographs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Fees and prospectus</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Fee structures and the school prospectus are issued on request by the Academy office.
            </p>
          </div>
        </div>
      </Section>

      <Section id="enquiry">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Step 1"
              title="Make an admissions enquiry"
              description="Tell us about your child and we will get back to you with the information you need."
            />
            <EnquiryForm />
          </div>
          <div id="visit">
            <SectionHeading
              align="left"
              eyebrow="Step 2"
              title="Book a school visit"
              description="Choose a date and time that suits you. We will confirm your visit by telephone or email."
            />
            <VisitForm />
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Speak with admissions</h2>
            <p className="mt-3 text-muted-foreground">
              Prefer to talk? Call, message or email the Academy directly — we are here to help.
            </p>
            <CtaGroup variant="dark" className="mt-6" compact />
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <ContactInfo />
            <p className="sr-only">{school.name} admissions contact information</p>
          </div>
        </div>
      </Section>

      <Section>
        <Faq items={faqs} title="Admissions questions" />
      </Section>
    </Layout>
  );
}
