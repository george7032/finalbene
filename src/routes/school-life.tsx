import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { AdmissionsCta } from "@/components/site/CtaGroup";
import { SITE_URL } from "@/lib/school";
const heroImage = "/images/hero-10.jpeg";
const parkImage = "/images/play.jpg";
const karate = "/images/karate.jpg";
const chess = "/images/chess.jpg";
const taekwondo = "/images/taekwondo.jpg";
const swimming = "/images/park2.jpeg";
const skating = "/images/skating.jpg";
const urbanDance = "/images/urbandance.jpg";
const musicImg = "/images/music.jpg";
const frenchImg = "/images/french.jpg";
const germanImg = "/images/german.jpg";

const activityImages = [
  { img: karate, t: "Karate", alt: "Learners practising karate in the school hall" },
  { img: taekwondo, t: "Taekwondo", alt: "Learners practising taekwondo kicks" },
  { img: chess, t: "Chess", alt: "Learners playing chess in the chess club" },
  { img: swimming, t: "Swimming", alt: "Learners in a swimming lesson" },
  { img: skating, t: "Skating", alt: "Learners skating with helmets and protective pads" },
  { img: urbanDance, t: "Urban dance", alt: "Learners in an urban dance session" },
  { img: musicImg, t: "Music", alt: "Learners playing instruments in a music lesson" },
  { img: parkImage, t: "Supervised play", alt: "Children playing in the kids amusement park" },
];

const languages = [
  {
    img: frenchImg,
    t: "French",
    alt: "A French language lesson in progress",
    d: "Learners build everyday French through greetings, vocabulary, simple conversation, reading and writing.",
  },
  {
    img: germanImg,
    t: "German",
    alt: "A German language lesson in progress",
    d: "Learners are introduced to German with spoken practice, vocabulary and written work suited to their level.",
  },
];

const title = "School Life — Embakasi Benedicta Academy, Utawala";
const description =
  "Sports, clubs, music, arts, leadership, trips and celebrations at Embakasi Benedicta Academy in Utawala — plus our distinctive kids amusement park.";

export const Route = createFileRoute("/school-life")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/school-life` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/school-life` }],
  }),
  component: SchoolLifePage,
});

const activities = [
  { t: "Sports", d: "Physical education and team games that build fitness, discipline and teamwork." },
  { t: "Clubs and societies", d: "Interest-based clubs where learners explore new skills with their peers." },
  { t: "Music and performance", d: "Singing, instruments and performance opportunities that build confidence." },
  { t: "Arts and creativity", d: "Drawing, craft and creative work that develops imagination and patience." },
  { t: "Talent development", d: "Teachers identify individual strengths and give learners room to grow them." },
  { t: "Leadership", d: "Learner leadership roles that teach responsibility, service and communication." },
  { t: "Educational trips", d: "Learning beyond the classroom through carefully planned educational visits." },
  { t: "Competitions", d: "Opportunities to represent the Academy and measure progress against others." },
  { t: "School events and celebrations", d: "Assemblies, parents' days and celebrations that bring our community together." },
  { t: "Outdoor activity", d: "Daily active play and outdoor learning on our campus grounds." },
  { t: "Learner wellbeing", d: "Pastoral care, mentorship and a culture where every learner is known by name." },
];

function SchoolLifePage() {
  return (
    <Layout>
      <PageHero
        eyebrow="School Life"
        title="Life at the Academy"
        description="Learning does not stop at the classroom door. Sport, the arts, leadership and friendship shape the whole child."
        image={heroImage}
        imageAlt="Learners taking part in school activities at Embakasi Benedicta Academy"
        crumbs={[{ name: "School Life" }]}
      />

      <Section>
        <SectionHeading
          title="Co-curricular activities"
          description="A broad programme so that every learner finds something they love and something they are good at."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <div key={a.t} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{a.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted ariaLabel="Clubs and activities in pictures">
        <SectionHeading
          title="Clubs and activities in pictures"
          description="Martial arts, sport, games and performance run alongside the academic timetable."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activityImages.map((a) => (
            <figure key={a.t} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={a.img} alt={a.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="p-4 text-center text-sm font-semibold text-foreground">{a.t}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Foreign languages"
          title="French and German"
          description="Learners are introduced to French and German, building confidence in listening, speaking, reading and writing another language."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {languages.map((l) => (
            <div key={l.t} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={l.img} alt={l.alt} loading="lazy" className="aspect-[16/9] w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{l.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={parkImage}
              alt="Children playing in the kids amusement park at Embakasi Benedicta Academy"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="One distinctive facility"
              title="Our kids amusement park"
              description="Structured, supervised play is part of how younger learners build confidence, coordination and friendships. Our on-site amusement park is one of the facilities that supports this — alongside our classrooms, library and grounds."
            />
            <Link
              to="/park"
              className="inline-flex min-h-11 items-center rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              More about the amusement park
            </Link>
          </div>
        </div>
      </Section>

      <AdmissionsCta title="Come and experience school life" description="Book a visit and see a normal school day at the Academy." />
    </Layout>
  );
}
