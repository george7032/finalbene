import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, GraduationCap, Palette, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { AdmissionsCta } from "@/components/site/CtaGroup";
import { SITE_URL, school, whatsappLink } from "@/lib/school";
const heroImage = "/images/upper.jpeg";
const kindergartenImg = "/images/kindergarten.jpeg";
const lowerPrimaryImg = "/images/hero-9.jpeg";
const upperPrimaryImg = "/images/upper.jpeg";
const juniorImg = "/images/jss.jpeg";
const seniorImg = "/images/hero-6.jpeg";

const title = "Our Curriculum — Kindergarten to Senior School | Embakasi Benedicta Academy";
const description =
  "Explore the competency-based curriculum at Embakasi Benedicta Academy in Utawala, Nairobi — Kindergarten, Lower Primary, Upper Primary, Junior School and Senior School (STEM & Social Sciences).";

export const Route = createFileRoute("/academics/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/academics` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/academics` }],
  }),
  component: AcademicsPage,
});

type Level = {
  id: string;
  name: string;
  grades: string;
  image: string;
  to: "/academics/kindergarten" | "/academics/primary" | "/academics/junior" | "/academics/senior";
  summary: string;
  highlights: string[];
  featured?: boolean;
};

const levels: Level[] = [
  {
    id: "kindergarten",
    name: "Kindergarten",
    grades: "PP1 and PP2",
    image: kindergartenImg,
    to: "/academics/kindergarten",
    summary:
      "A warm, play-rich start to school where young learners build confidence, language and curiosity.",
    highlights: [
      "Language Activities",
      "Mathematical Activities",
      "Environmental Activities",
      "Psychomotor and Creative Activities",
      "Religious Education Activities",
    ],
    featured: true,
  },
  {
    id: "lower-primary",
    name: "Lower Primary",
    grades: "Grades 1 to 3",
    image: lowerPrimaryImg,
    to: "/academics/primary",
    summary:
      "Strong foundations in reading, writing and numeracy through activity-based, practical learning.",
    highlights: [
      "English Activities",
      "Kiswahili Language Activities",
      "Mathematical Activities",
      "Environmental Activities",
      "Creative Activities",
    ],
  },
  {
    id: "upper-primary",
    name: "Upper Primary",
    grades: "Grades 4 to 6",
    image: upperPrimaryImg,
    to: "/academics/primary",
    summary:
      "Inquiry, projects and practical learning that deepen literacy, numeracy and scientific thinking.",
    highlights: [
      "Science and Technology",
      "Agriculture and Nutrition",
      "Social Studies",
      "Creative Arts",
      "Mathematics",
    ],
  },
  {
    id: "junior-school",
    name: "Junior School",
    grades: "Grades 7 to 9",
    image: juniorImg,
    to: "/academics/junior",
    summary:
      "Learners grow into independent thinkers through science, technology, projects and leadership.",
    highlights: [
      "Integrated Science",
      "Pre-Technical Studies",
      "Creative Arts and Sports",
      "Social Studies",
      "Career guidance",
    ],
  },
  {
    id: "senior-school",
    name: "Senior School",
    grades: "Grades 10 to 12",
    image: seniorImg,
    to: "/academics/senior",
    summary:
      "Learners begin specialising according to their interests, abilities and future aspirations, through two pathways.",
    highlights: ["STEM pathway", "Social Sciences pathway"],
    featured: true,
  },
];

const pillars = [
  {
    icon: BookOpen,
    t: "Academic achievement",
    d: "Learner-centred teaching that builds literacy, numeracy and strong subject knowledge.",
  },
  {
    icon: Sparkles,
    t: "Practical skills",
    d: "Hands-on, interactive learning in classrooms, laboratories and outdoor spaces.",
  },
  {
    icon: Palette,
    t: "Creativity",
    d: "Art, music, drama, sport and clubs where every talent has a place to grow.",
  },
  {
    icon: GraduationCap,
    t: "Character formation",
    d: "Values, discipline and leadership that shape the whole child, not just the grade.",
  },
];

function LevelCard({ level }: { level: Level }) {
  return (
    <Link
      to={level.to}
      id={level.id}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 scroll-mt-24 hover:-translate-y-1 hover:shadow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative h-48 overflow-hidden sm:h-56">
        <img
          src={level.image}
          alt={`${level.name} learners at Embakasi Benedicta Academy`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/25 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
            {level.grades}
          </p>
          <h3 className="mt-2 text-xl font-bold text-background sm:text-2xl">{level.name}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">{level.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {level.highlights.map((h) => (
            <li
              key={h}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
            >
              {h}
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Explore {level.name}
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}

function AcademicsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Academics"
        title="Our Curriculum"
        description="Embakasi Benedicta Academy provides a competency-based education that supports academic achievement, practical skills, creativity, character formation and the holistic development of every learner."
        image={heroImage}
        imageAlt="Learners in class at Embakasi Benedicta Academy"
        crumbs={[{ name: "Academics" }]}
      />

      <Section>
        <SectionHeading
          eyebrow="Our approach"
          title="Learning that develops the whole child"
          description="The curriculum is delivered through learner-centred, practical and interactive learning experiences designed to nurture each learner's abilities and interests."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.t} className="rounded-2xl border border-border bg-card p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <p.icon aria-hidden="true" className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Learning levels"
          title="Choose a level to explore"
          description="Each level has its own page with learning areas, skills, teaching approach, assessment methods, facilities and clubs."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {levels.map((level) => (
            <LevelCard key={level.id} level={level} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/admissions"
            hash="visit"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Book a School Visit
          </Link>
          <Link
            to="/admissions"
            hash="enquiry"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Make an enquiry
          </Link>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Discover the right learning journey for your child at Embakasi Benedicta Academy.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Call/WhatsApp:{" "}
            <a
              href={school.phoneHref}
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              0110 380 560
            </a>
          </p>
          <p className="mt-1 text-base text-muted-foreground">Location: {school.address}</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </Section>

      <AdmissionsCta />
    </Layout>
  );
}
