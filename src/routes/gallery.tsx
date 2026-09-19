import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { AdmissionsCta } from "@/components/site/CtaGroup";
import { SITE_URL } from "@/lib/school";
const heroImage = "/images/hero-8.jpeg";
const upper = "/images/administration.jpg";
const kindergartenImg = "/images/kindergarten.jpeg";
const jss = "/images/jss.jpeg";
const hero6 = "/images/hero-6.jpeg";
const hero7 = "/images/park4.jpg";
const hero9 = "/images/soccer2.jpg";
const hero10 = "/images/hero-10.jpeg";
const park1 = "/images/park1.jpeg";
const park2 = "/images/park2.jpeg";
const park3 = "/images/park3.jpeg";
const computerLab = "/images/computerlab.jpg";
const scienceLab = "/images/laboratory.jpg";
const diningHall = "/images/dining.jpg";
const karate = "/images/karate.jpg";
const chess = "/images/chess.jpg";
const taekwondo = "/images/taekwondo.jpg";
const swimming = "/images/hero-9.jpeg";
const skating = "/images/skating.jpg";
const urbanDance = "/images/urbandance.jpg";
const music = "/images/music.jpg";
const french = "/images/french.jpg";
const german = "/images/german.jpg";

const title = "Gallery — Embakasi Benedicta Academy, Utawala";
const description =
  "Photographs of learning, facilities, sport, clubs and school life at Embakasi Benedicta Academy in Utawala.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/gallery` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/gallery` }],
  }),
  component: GalleryPage,
});

type Item = { src: string; alt: string; caption: string };

const groups: { title: string; description: string; items: Item[] }[] = [
  {
    title: "Learning and classrooms",
    description: "Everyday teaching and learning across our school levels.",
    items: [
      { src: upper, alt: "Learners in a primary classroom", caption: "Primary classroom" },
      { src: kindergartenImg, alt: "Kindergarten learners at play-based learning", caption: "Kindergarten" },
      { src: jss, alt: "Junior school learners in a lesson", caption: "Junior School" },
      { src: hero6, alt: "The Academy campus in Utawala", caption: "Our campus" },
    ],
  },
  {
    title: "Facilities",
    description: "The spaces that support learning, health and wellbeing.",
    items: [
      { src: computerLab, alt: "Learners working in the computer laboratory", caption: "Computer laboratory" },
      { src: scienceLab, alt: "Learners carrying out an experiment in the science laboratory", caption: "Science laboratory" },
      { src: diningHall, alt: "Learners having a meal in the school dining hall", caption: "Dining facility" },
      { src: hero7, alt: "Green outdoor space on the campus", caption: "Outdoor spaces" },
    ],
  },
  {
    title: "Co-curricular activities",
    description: "Sport, martial arts, performance and clubs beyond the classroom.",
    items: [
      { src: karate, alt: "Learners practising karate in the school hall", caption: "Karate" },
      { src: taekwondo, alt: "Learners practising taekwondo", caption: "Taekwondo" },
      { src: chess, alt: "Learners playing chess in the chess club", caption: "Chess" },
      { src: swimming, alt: "Learners in a swimming lesson", caption: "Swimming" },
      { src: skating, alt: "Learners skating with helmets and pads", caption: "Skating" },
      { src: urbanDance, alt: "Learners in an urban dance session", caption: "Urban dance" },
      { src: music, alt: "Learners in a music lesson with instruments", caption: "Music" },
      { src: hero10, alt: "Learners taking part in school activities", caption: "School activities" },
    ],
  },
  {
    title: "Foreign languages",
    description: "French and German lessons at the Academy.",
    items: [
      { src: french, alt: "A French language lesson in progress", caption: "French" },
      { src: german, alt: "A German language lesson in progress", caption: "German" },
    ],
  },
  {
    title: "School life and the amusement park",
    description: "Events, celebrations and supervised play on our grounds.",
    items: [
      { src: hero9, alt: "A school event at the Academy", caption: "School events" },
      { src: park1, alt: "Children in the kids amusement park", caption: "Amusement park" },
      { src: park2, alt: "Play equipment in the kids amusement park", caption: "Supervised play" },
      { src: park3, alt: "Children enjoying the amusement park rides", caxption: "Rides" },
    ],
  },
];

function GalleryPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Gallery"
        title="Our school in pictures"
        description="A look at learning, facilities, sport and school life at the Academy."
        image={heroImage}
        imageAlt="Learners at Embakasi Benedicta Academy"
        crumbs={[{ name: "Gallery" }]}
      />

      {groups.map((g, i) => (
        <Section key={g.title} muted={i % 2 === 1}>
          <SectionHeading title={g.title} description={g.description} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {g.items.map((item) => (
              <figure
                key={item.caption + item.src}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="p-4 text-center text-sm font-semibold text-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      ))}

      <AdmissionsCta
        title="See it for yourself"
        description="Book a school visit and walk through the Academy with us."
      />
    </Layout>
  );
}
