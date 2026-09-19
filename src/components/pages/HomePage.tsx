import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Home as HomeIcon,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaGroup, AdmissionsCta } from "@/components/site/CtaGroup";
import ContactInfo from "@/components/site/ContactInfo";
import { academicLevels } from "@/lib/school";
const hero6 = "/images/hero-6.jpeg";
const skating = "/images/skating.jpg";
const senior = "/images/senior.jpg";
const hero7 = "/images/hero-7.jpeg";
const hero8 = "/images/hero-8.jpeg";
const upper = "/images/hero10.jpg";
const kindergartenImg = "/images/kindergarten.jpg";
const jss = "/images/jss.jpeg";
const park1 = "/images/park1.jpeg";
const hero10 = "/images/soccer2.jpg";
const computerLab = "/images/computerlab.jpg";
const scienceLab = "/images/laboratory.jpg";
const diningHall = "/images/dining.jpg";

const heroImages = [
  { src: upper, alt: "Learners in class at Embakasi Benedicta Academy" },
  { src: hero6, alt: "The Embakasi Benedicta Academy campus in Utawala" },
  { src: hero8, alt: "Learners reading in the school library" },
  { src: hero7, alt: "The green learning environment at the Academy" },
];

const levelImages: Record<string, string> = {
  kindergarten: kindergartenImg,
  primary: upper,
  junior: senior,
  senior: jss,
};

const reasons = [
  { icon: BookOpen, t: "Strong academic programmes", d: "Well-structured teaching from Kindergarten to Senior School, with clear expectations at every stage." },
  { icon: GraduationCap, t: "Committed teachers", d: "Teachers who know every learner by name and track progress closely throughout the term." },
  { icon: HeartHandshake, t: "Individual learner support", d: "Difficulties are identified early and supported, so no learner is quietly left behind." },
  { icon: Sparkles, t: "Character development", d: "Respect, responsibility and integrity are taught and expected every day." },
  { icon: ShieldCheck, t: "A safe environment", d: "A secure campus, supervised learners and clear safeguarding practice." },
  { icon: Users, t: "Co-curricular life", d: "Sport, clubs, music and the arts so that every learner finds their strength." },
];



export default function HomePage() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((p) => (p + 1) % heroImages.length), 6000);
    return () => clearInterval(id);
  }, []);

  const next = () => setSlide((p) => (p + 1) % heroImages.length);
  const prev = () => setSlide((p) => (p - 1 + heroImages.length) % heroImages.length);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate min-h-[560px] md:min-h-[640px] overflow-hidden bg-primary-dark text-white">
        <div className="absolute inset-0">
          {heroImages.map((image, i) => (
            <img
              key={image.src}
              src={image.src}
              alt={i === slide ? image.alt : ""}
              aria-hidden={i === slide ? undefined : true}
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                i === slide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/25"
          />
        </div>

        <div className="container relative mx-auto flex min-h-[560px] md:min-h-[640px] items-center px-4 py-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-yellow">
              Utawala, Nairobi
            </p>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Embakasi Benedicta Academy
              <span className="mt-2 block text-xl font-semibold text-white/90 md:text-3xl">
                A nurturing space for young minds
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              Quality teaching, close learner support and strong character development — from
              Kindergarten through Primary and Junior School to Senior School.
            </p>
            <CtaGroup className="mt-8" />
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroImages.map((image, i) => (
            <button
              key={image.src}
              onClick={() => setSlide(i)}
              aria-label={`Show photograph ${i + 1}`}
              aria-current={i === slide}
              className={`h-2.5 w-2.5 rounded-full transition-all ${i === slide ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
        <button
          onClick={prev}
          aria-label="Previous photograph"
          className="absolute left-3 top-1/2 z-10 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30 md:flex"
        >
          <ChevronLeft aria-hidden="true" className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          aria-label="Next photograph"
          className="absolute right-3 top-1/2 z-10 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30 md:flex"
        >
          <ChevronRight aria-hidden="true" className="h-6 w-6" />
        </button>
      </section>

      {/* Introduction */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-4xl">
            An education built on care and high expectations
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Embakasi Benedicta Academy is a school in Utawala, next to Kimson Plaza, where learners
            are known individually and taught well. We combine a structured academic programme with
            close pastoral care, so that children grow in knowledge, confidence and character.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            About the Academy
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Academic levels */}
      <Section muted>
        <SectionHeading
          eyebrow="Academics"
          title="Kindergarten, Primary, Junior and Senior School"
          description="A continuous learning journey, with teaching matched to each stage of a child's development."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {academicLevels.map((level) => (
            <article key={level.slug} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={levelImages[level.slug]}
                  alt={`${level.name} at Embakasi Benedicta Academy`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-foreground">{level.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{level.summary}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-primary">
                  {level.focus}
                </p>
                <Link
                  to={level.to}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Learn more
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Why choose */}
      <Section>
        <SectionHeading
          eyebrow="Why us"
          title="Why choose Embakasi Benedicta Academy?"
          description="What parents can expect from us, every term."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.t} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <r.icon aria-hidden="true" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{r.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Day and boarding */}
      <Section muted>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Day and boarding"
              title="Two ways to join the Academy"
              description="Families can choose day attendance or boarding, subject to availability confirmed by the Academy."
            />
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="flex items-center gap-2 font-semibold text-foreground">
                  <HomeIcon aria-hidden="true" className="h-5 w-5 text-primary" />
                  Day learners
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A full school day of structured lessons, activities and supervised play, with
                  learners returning home each evening.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="flex items-center gap-2 font-semibold text-foreground">
                  <ShieldCheck aria-hidden="true" className="h-5 w-5 text-primary" />
                  Boarders
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Supervised routines, structured evening study and pastoral care, with regular
                  communication with parents.
                </p>
              </div>
            </div>
            <Link
              to="/boarding"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              About boarding
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={hero6}
              alt="The Embakasi Benedicta Academy campus"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Facilities */}
      <Section>
        <SectionHeading
          eyebrow="Facilities"
          title="A learning environment that supports every child"
          description="Classrooms, a library, computer and science laboratories, a dining facility, green outdoor spaces and a distinctive on-site kids amusement park."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: upper, t: "Classrooms", alt: "A classroom at the Academy" },
            { img: hero8, t: "Library", alt: "The school library" },
            { img: computerLab, t: "Computer laboratory", alt: "Learners working in the computer laboratory" },
            { img: scienceLab, t: "Science laboratory", alt: "Learners carrying out an experiment in the science laboratory" },
            { img: diningHall, t: "Dining facility", alt: "Learners having a meal in the school dining hall" },
            { img: skating, t: "Outdoor spaces", alt: "Green outdoor space on the campus" },
          ].map((f) => (
            <figure key={f.t} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={f.img} alt={f.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="p-4 text-center font-semibold text-foreground">{f.t}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/facilities"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            See all facilities
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* School life */}
      <Section muted>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={hero10}
              alt="Learners taking part in activities at the Academy"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="School life"
              title="Sport, clubs, music and leadership"
              description="Learning continues beyond the classroom. Our co-curricular programme helps learners discover talents, build friendships and grow in confidence — including supervised play in our kids amusement park."
            />
            <div className="flex flex-wrap gap-3">
              <Link
                to="/school-life"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                Explore school life
              </Link>
              <Link
                to="/park"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <img src={park1} alt="" aria-hidden="true" className="h-6 w-6 rounded object-cover" />
                Kids amusement park
              </Link>
            </div>
          </div>
        </div>
      </Section>


      {/* News and events */}
      <Section muted>
        <SectionHeading
          eyebrow="Community"
          title="Latest news and upcoming events"
          description="Current announcements and events from the Academy."
        />
        <div className="mx-auto max-w-3xl rounded-xl border border-dashed border-border bg-card p-8 text-center">
          <CalendarDays aria-hidden="true" className="mx-auto mb-4 h-10 w-10 text-primary" />
          <p className="text-muted-foreground">
            No current news or upcoming events have been published yet.
          </p>
          <Link
            to="/news"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            News and events
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </Section>


      <AdmissionsCta
        title="Enrol your child at Embakasi Benedicta Academy"
        description="Send an enquiry, book a school visit or begin your application today."
      />

      {/* Contact */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Contact" title="Visit or contact the Academy" />
            <ContactInfo />
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-foreground">Find us</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Embakasi Benedicta Academy, Utawala, next to Kimson Plaza, Nairobi.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Contact page and directions
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
