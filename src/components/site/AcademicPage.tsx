import { Link } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaGroup, AdmissionsCta } from "@/components/site/CtaGroup";
import Faq, { type FaqItem } from "@/components/site/Faq";


export type AcademicStage = {
  name: string;
  grades: string;
  learningAreas: string[];
};

export type AcademicPageConfig = {
  name: string;
  image: string;
  /** Three photos shown in the gallery section. */
  gallery?: { src: string; alt: string }[];
  intro: string;
  description: string[];
  /** Optional "At a glance" values — omitted values are simply not shown. */
  grades?: string;
  curriculum?: string;
  assessmentSummary?: string;
  dayOrBoarding?: string;
  learningApproach: string[];
  learningAreas: string[];
  /** Optional sub-stages (e.g. Lower and Upper Primary) shown instead of one list. */
  stages?: AcademicStage[];
  skills?: string[];
  assessment?: string[];
  pathways?: { name: string; description: string }[];
  support: string[];
  facilities: string[];
  coCurricular: string[];
  faqs: FaqItem[];
};

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted-foreground">
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function AcademicPage({ config }: { config: AcademicPageConfig }) {
  return (
    <Layout>
      <PageHero
        eyebrow="Academics"
        title={config.name}
        description={config.intro}
        image={config.image}
        imageAlt={`Learners at ${config.name}, Embakasi Benedicta Academy`}
        crumbs={[{ name: "Academics", to: "/academics" }, { name: config.name }]}
      >
        <CtaGroup compact />
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              About {config.name}
            </h2>
            {config.description.map((p) => (
              <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            {config.pathways && config.pathways.length > 0 && (
              <>
                <h3 className="mt-10 text-xl font-bold text-foreground">Pathways offered</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {config.pathways.map((p) => (
                    <div key={p.name} className="rounded-xl border border-border bg-card p-5">
                      <h4 className="text-lg font-bold text-foreground">{p.name}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {config.stages && config.stages.length > 0 ? (
              <>
                <h3 className="mt-10 text-xl font-bold text-foreground">Learning areas</h3>
                <div className="mt-4 space-y-6">
                  {config.stages.map((stage) => (
                    <div key={stage.name} className="rounded-xl border border-border bg-card p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        {stage.grades}
                      </p>
                      <h4 className="mt-1 text-lg font-bold text-foreground">{stage.name}</h4>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {stage.learningAreas.map((item) => (
                          <li
                            key={item}
                            className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              config.learningAreas.length > 0 && (
                <>
                  <h3 className="mt-10 text-xl font-bold text-foreground">Learning areas</h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {config.learningAreas.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )
            )}

            {config.skills && config.skills.length > 0 && (
              <>
                <h3 className="mt-10 text-xl font-bold text-foreground">
                  Skills learners develop
                </h3>
                <Chips items={config.skills} />
              </>
            )}

            <h3 className="mt-10 text-xl font-bold text-foreground">Our learning approach</h3>
            <Bullets items={config.learningApproach} />

            {config.assessment && config.assessment.length > 0 && (
              <>
                <h3 className="mt-10 text-xl font-bold text-foreground">Assessment methods</h3>
                <Bullets items={config.assessment} />
              </>
            )}

            <h3 className="mt-10 text-xl font-bold text-foreground">Learner support</h3>
            <Bullets items={config.support} />

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/admissions"
                hash="visit"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                Book a School Visit
              </Link>
              <Link
                to="/academics"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Back to our curriculum
              </Link>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground">At a glance</h3>
              <dl className="mt-4 space-y-4 text-sm">
                {[
                  { label: "Grades offered", value: config.grades },
                  { label: "Curriculum", value: config.curriculum },
                  { label: "Assessment", value: config.assessmentSummary },
                  { label: "Day or boarding", value: config.dayOrBoarding },
                ]
                  .filter((row) => row.value)
                  .map((row) => (
                    <div key={row.label}>
                      <dt className="font-medium text-foreground">{row.label}</dt>
                      <dd className="mt-1 text-muted-foreground">{row.value}</dd>
                    </div>
                  ))}
              </dl>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground">Facilities used</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {config.facilities.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link
                to="/facilities"
                className="mt-4 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                See our facilities
              </Link>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground">Co-curricular activities</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {config.coCurricular.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link
                to="/school-life"
                className="mt-4 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Explore school life
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      {config.gallery && config.gallery.length > 0 && (
        <Section>
          <SectionHeading
            title={`Life at ${config.name}`}
            description="A glimpse of learning in action at the Academy."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {config.gallery.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="h-56 w-full rounded-xl border border-border object-cover"
              />
            ))}
          </div>
        </Section>
      )}

      <Section muted>
        <SectionHeading
          title="Working together with parents"
          description="Parents are partners in every stage of learning at the Academy."
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {[
            {
              t: "Regular communication",
              d: "Updates on progress, learning and school events so no parent is left guessing.",
            },
            {
              t: "Parent meetings",
              d: "Opportunities to meet teachers, review learner progress and agree on next steps.",
            },
            {
              t: "Learning at home",
              d: "Practical guidance on supporting reading, revision and character growth at home.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Faq items={config.faqs} />
      </Section>

      <AdmissionsCta
        title={`Join ${config.name} at Embakasi Benedicta Academy`}
        description="Send an enquiry, book a school visit or begin your application today."
      />
    </Layout>
  );
}
