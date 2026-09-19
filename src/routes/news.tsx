import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarCheck,
  Download,
  FileText,
  GraduationCap,
  Bus,
  ClipboardList,
  Church,
} from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import Faq from "@/components/site/Faq";
import { AdmissionsCta } from "@/components/site/CtaGroup";
import { SITE_URL } from "@/lib/school";
const heroImage = "/images/hero-9.jpeg";

const title = "News & Events — Term III 2026 Calendar | Embakasi Benedicta Academy";
const description =
  "School news, announcements and the Term III 2026 calendar of events at Embakasi Benedicta Academy, Utawala — opening dates, assessments, trips, ceremonies and downloads.";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/news` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/news` }],
  }),
  component: NewsPage,
});

type Event = { event: string; involved: string; date: string; charges?: string };

const groups: { id: string; title: string; blurb: string; icon: typeof CalendarCheck; events: Event[] }[] = [
  {
    id: "opening",
    title: "Opening of term",
    blurb: "Reporting dates for boarders and day scholars.",
    icon: CalendarCheck,
    events: [
      { event: "Resumption — Boarders", involved: "Boarders", date: "24th August, 2026" },
      { event: "Resumption — Day Scholars", involved: "Day Scholars", date: "25th August, 2026" },
    ],
  },
  {
    id: "assessments",
    title: "Assessments",
    blurb: "Entry, mid term and end of term assessments for all learners.",
    icon: ClipboardList,
    events: [
      { event: "Entry Assessments", involved: "All", date: "26th – 31st August, 2026" },
      { event: "Mid Term Assessments", involved: "All", date: "21st – 25th September, 2026" },
      { event: "End of Term Assessments", involved: "All", date: "16th – 22nd October, 2026" },
    ],
  },
  {
    id: "national-assessments",
    title: "National assessments & pathway selection",
    blurb: "Dates for our Grade 6 and Grade 9 candidates.",
    icon: GraduationCap,
    events: [
      {
        event: "G9 Selection of Pathways / Senior Schools",
        involved: "G9 Candidates & Parents",
        date: "24th August – 11th September, 2026",
      },
      { event: "KPSEA Assessments", involved: "G6 Candidates", date: "26th – 29th October, 2026" },
      {
        event: "KJSEA Assessments",
        involved: "G9 Candidates",
        date: "26th October – 5th November, 2026",
      },
    ],
  },
  {
    id: "trips",
    title: "Educational trips",
    blurb: "Gravity educational trips, with charges payable to the school office.",
    icon: Bus,
    events: [
      {
        event: "Lower / Upper Gravity Educational Trip",
        involved: "Lower & Upper Primary",
        date: "19th September, 2026",
        charges: "KSh 2,500",
      },
      {
        event: "Junior & Senior Gravity Educational Trip",
        involved: "Junior & Senior School",
        date: "26th September, 2026",
        charges: "KSh 2,500",
      },
    ],
  },
  {
    id: "ceremonies",
    title: "Masses, ceremonies & closing",
    blurb: "Whole-school gatherings, graduation and closing day.",
    icon: Church,
    events: [
      { event: "Opening School Mass", involved: "All", date: "4th September, 2026" },
      {
        event: "Prayer Day / Closing Day",
        involved: "All & PG – G5, G7, G8, G10",
        date: "23rd October, 2026",
      },
      {
        event: "Graduation Day (PP2, G3, G6, G9)",
        involved: "Concerned Learners / Staff / Parents",
        date: "7th November, 2026",
        charges: "KSh 3,000",
      },
      {
        event: "Academic Clinic Day",
        involved: "Other grades (apart from candidates)",
        date: "10th November, 2026",
      },
    ],
  },
];

const categories = [
  "School News",
  "Announcements",
  "Activities",
  "Achievements",
  "Term Updates",
  "Events",
  "Educational Articles",
  "Photo Galleries",
];

const documents = [
  {
    name: "Term III 2026 Newsletter",
    category: "Newsletter",
    date: "August 2026",
    description:
      "Our termly newsletter with the welcome message, key dates, assessments, trips, ceremonies and reminders for parents.",
    href: "/images/eba-newsletter-term-3-2026.pdf",
  },
];

const parentFaqs = [
  {
    question: "How does the Academy communicate with parents?",
    answer:
      "Through notices, the termly newsletter, parent meetings and direct contact from the school office. Parents may also call, email or message the Academy at any time.",
  },
  {
    question: "Are the trip charges compulsory?",
    answer:
      "Educational trips carry the charges shown above and are paid through the school office. Please speak to the office if you need to discuss payment.",
  },
  {
    question: "Who do I contact about my child's progress?",
    answer:
      "Start with your child's class teacher through the school office, who will arrange a meeting or a call.",
  },
  {
    question: "How do I report an absence?",
    answer:
      "Please inform the school office by telephone or WhatsApp as early as possible on the day of absence.",
  },
];

function EventTable({ events }: { events: Event[] }) {
  const showCharges = events.some((e) => e.charges);
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] text-left text-sm">
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="px-4 py-3 font-semibold text-foreground">Event</th>
            <th scope="col" className="px-4 py-3 font-semibold text-foreground">Who is involved</th>
            <th scope="col" className="px-4 py-3 font-semibold text-foreground">Date</th>
            {showCharges && (
              <th scope="col" className="px-4 py-3 font-semibold text-foreground">Charges</th>
            )}
          </tr>
        </thead>
        <tbody>
          {events.map((e) => (
            <tr key={e.event} className="border-b border-border last:border-0">
              <td className="px-4 py-3 font-medium text-foreground">{e.event}</td>
              <td className="px-4 py-3 text-muted-foreground">{e.involved}</td>
              <td className="px-4 py-3 text-muted-foreground">{e.date}</td>
              {showCharges && (
                <td className="px-4 py-3 text-muted-foreground">{e.charges ?? "—"}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function NewsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Community"
        title="News and events"
        description="Current news, announcements and the Term III 2026 calendar of events at the Academy."
        image={heroImage}
        imageAlt="A school event at Embakasi Benedicta Academy"
        crumbs={[{ name: "News & Events" }]}
      />

      <Section>
        <SectionHeading
          eyebrow="Calendar"
          title="Term III, 2026 calendar of events"
          description="Grouped by type so you can find the dates that matter to your child at a glance."
        />
        <div className="mx-auto max-w-5xl space-y-8">
          {groups.map((g) => (
            <section
              key={g.id}
              id={g.id}
              aria-labelledby={`${g.id}-title`}
              className="overflow-hidden rounded-2xl border border-border bg-card scroll-mt-24"
            >
              <div className="flex items-start gap-4 border-b border-border bg-muted p-5 sm:p-6">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <g.icon aria-hidden="true" className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <h3 id={`${g.id}-title`} className="text-lg font-bold text-foreground sm:text-xl">
                    {g.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{g.blurb}</p>
                </div>
              </div>
              <EventTable events={g.events} />
            </section>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          title="Downloads"
          description="School documents you can download and keep."
        />
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {documents.map((d) => (
            <article key={d.name} className="rounded-2xl border border-border bg-card p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <FileText aria-hidden="true" className="h-5 w-5 text-primary" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary">
                {d.category} · {d.date}
              </p>
              <h3 className="mt-1 text-lg font-bold text-foreground">{d.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.description}</p>
              <a
                href={d.href}
                download
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                Download newsletter (PDF)
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="What we publish"
          description="Every item we publish carries a title, date, category, featured image and, where relevant, an event date and photo gallery."
        />
        <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <li
              key={c}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
            >
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <Section muted>
        <Faq items={parentFaqs} title="Parent questions" />
      </Section>

      <AdmissionsCta
        title="Want to be part of our community?"
        description="Enquire today or book a visit to the Academy."
      />
    </Layout>
  );
}
