import Layout from "@/components/Layout";
import { Eye, Heart, Target } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { AdmissionsCta } from "@/components/site/CtaGroup";

const kimImage = "/images/kim.jpeg";
const catherineImage = "/images/catherine.jpeg";
const ndegwaImage = "/images/ndegwa.jpeg";
const heroImage = "/images/hero-6.jpeg";

const pillars = [
  {
    icon: Target,
    title: "Our mission",
    body: "To provide a well-taught, well-supported education that develops confident, capable and compassionate learners in a safe environment.",
  },
  {
    icon: Eye,
    title: "Our vision",
    body: "To be a school that parents in Utawala trust for academic strength, character formation and genuine care for every child.",
  },
  {
    icon: Heart,
    title: "Our values",
    body: "Excellence, integrity, compassion, responsibility and respect — taught, modelled and expected every day.",
  },
];

const leadership = [
  {
    img: kimImage,
    name: "Mr. Kimani J. Mbugua",
    role: "Director and Founder",
    bio: "Provides the strategic direction of the Academy and holds the school to high standards of teaching and care.",
  },
  {
    img: catherineImage,
    name: "Ms. Catherine Ngure",
    role: "General Manager",
    bio: "Leads daily operations, staff coordination and the smooth running of academic and administrative activities.",
  },
  {
    img: ndegwaImage,
    name: "P. J. Ndegwa",
    role: "Head Teacher",
    bio: "Leads the academic programme and ensures every learner receives attention, guidance and support.",
  },
];

const facts = [
  { label: "Official school name", value: "Embakasi Benedicta Academy" },
  { label: "Location", value: "Utawala, next to Kimson Plaza, Nairobi" },
];

export default function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About us"
        title="About Embakasi Benedicta Academy"
        description="A school in Utawala where children are known individually, taught well and expected to grow in character as well as in knowledge."
        image={heroImage}
        imageAlt="The Embakasi Benedicta Academy campus in Utawala"
        crumbs={[{ name: "About Us" }]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <c.icon aria-hidden="true" className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">{c.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          title="Our story"
          description="The Academy was founded to give families in Utawala a school that combines serious academic work with warmth and care."
        />
        <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
          <p className="leading-relaxed">
            Embakasi Benedicta Academy grew out of a simple conviction: that children learn best when
            they are taught well, known personally and encouraged daily. From the beginning the school
            has focused on strong classroom teaching, close contact with parents and a safe, orderly
            environment.
          </p>
          <p className="leading-relaxed">
            Today the Academy serves families across Utawala and the surrounding area, offering
            learning from Kindergarten through Primary and Junior School to Senior School, supported
            by facilities that include classrooms, a library, green outdoor spaces and a distinctive
            on-site kids amusement park.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="School facts"
          description="We publish only what the Academy has confirmed."
        />
        <dl className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
          {facts.map((f) => (
            <div
              key={f.label}
              className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3"
            >
              <dt className="text-sm font-medium text-foreground">{f.label}</dt>
              <dd className="text-right text-sm text-muted-foreground">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section muted>
        <SectionHeading title="Our leadership team" />
        <div className="grid gap-8 md:grid-cols-3">
          {leadership.map((p) => (
            <article key={p.name} className="rounded-2xl border border-border bg-card p-8 text-center">
              <img
                src={p.img}
                alt={`${p.name}, ${p.role}`}
                loading="lazy"
                className="mx-auto h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mt-6 text-xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-1 font-semibold text-primary">{p.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
            </article>
          ))}
        </div>
      </Section>

      <AdmissionsCta
        title="Come and see the Academy"
        description="Book a school visit and meet the team behind our learners' progress."
      />
    </Layout>
  );
}
