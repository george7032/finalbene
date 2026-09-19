import { createFileRoute } from "@tanstack/react-router";
import AcademicPage, { type AcademicPageConfig } from "@/components/site/AcademicPage";
import { SITE_URL } from "@/lib/school";
const image = "/images/jss.jpeg";
const gallery1 = "/images/laboratory.jpg";
const gallery2 = "/images/accro.jpg";
const gallery3 = "/images/junior16.jpg";

const title = "Junior School (Grades 7–9) in Utawala — Embakasi Benedicta Academy";
const description =
  "Junior School at Embakasi Benedicta Academy, Utawala: Grades 7–9 learning areas, skills, laboratory and technical work, assessment and KJSEA preparation.";

export const Route = createFileRoute("/academics/junior")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/academics/junior` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/academics/junior` }],
  }),
  component: () => <AcademicPage config={config} />,
});

const config: AcademicPageConfig = {
  name: "Junior School",
  image,
  gallery: [
    { src: gallery1, alt: "Junior School learners working on laptops in the computer lab" },
    { src: gallery2, alt: "Junior School students carrying out a chemistry experiment" },
    { src: gallery3, alt: "Junior School learners collaborating on a group project" },
  ],
  intro:
    "Grades 7 to 9 — learners grow into independent thinkers through science, technology, projects and leadership.",
  grades: "Grades 7 to 9",
  curriculum: "Competency-based education",
  assessmentSummary:
    "Continuous assessment, with the Kenya Junior School Education Assessment at the end of Grade 9",
  description: [
    "Junior School is where learners begin to take charge of their own learning. Laboratory investigations, technical activities and research projects build confidence, discipline and curiosity.",
    "Career guidance and talent identification run alongside academics, so that learners approach Grade 9 pathway selection with a clear sense of their strengths and interests.",
  ],
  learningAreas: [
    "English",
    "Kiswahili or Kenya Sign Language",
    "Mathematics",
    "Integrated Science",
    "Social Studies",
    "Pre-Technical Studies",
    "Agriculture and Nutrition",
    "Creative Arts and Sports",
    "Religious Education",
  ],
  skills: [
    "Critical thinking and problem-solving",
    "Scientific investigation",
    "Technical and practical skills",
    "Digital literacy",
    "Communication and presentation",
    "Creativity",
    "Leadership and teamwork",
    "Career awareness",
    "Responsible citizenship",
  ],
  learningApproach: [
    "Laboratory investigations",
    "Practical and technical activities",
    "Research and projects",
    "Group discussions",
    "Problem-based learning",
    "Digital learning",
    "Presentations",
    "Career guidance and talent identification",
  ],
  assessment: [
    "Written assignments and tests",
    "Practical assessments",
    "Projects",
    "Presentations",
    "Portfolios",
    "Teacher observation",
    "Continuous assessment",
    "Kenya Junior School Education Assessment at the end of Grade 9",
  ],
  support: [
    "Career guidance and pathway selection support in Grade 9",
    "Subject-specific help from teachers and revision sessions",
    "Talent identification through clubs, sports and creative arts",
    "Regular progress feedback to parents and learners",
  ],
  facilities: [
    "Science laboratory",
    "ICT laboratory",
    "Pre-technical learning resources",
    "Library",
    "Agriculture learning area",
    "Creative arts facilities",
    "Sports facilities",
    "Boarding facilities",
  ],
  coCurricular: [
    "Sports",
    "Creative arts",
    "Debate and public speaking",
    "STEM club",
    "Environment club",
    "Leadership",
    "Journalism",
    "Community service",
  ],
  faqs: [
    {
      question: "How do learners choose a pathway?",
      answer:
        "Grade 9 learners and their parents are guided through pathway and senior school selection by our teachers, drawing on the learner's performance, interests and strengths.",
    },
    {
      question: "Is there a national assessment?",
      answer:
        "Yes. Learners sit the Kenya Junior School Education Assessment at the end of Grade 9, alongside continuous school-based assessment.",
    },
    {
      question: "What practical work is involved?",
      answer:
        "Learners carry out laboratory investigations, pre-technical activities, agriculture and nutrition practicals and research projects.",
    },
    {
      question: "Is boarding available for Junior School?",
      answer:
        "Boarding facilities support Junior School learners. Availability and requirements are confirmed by the Academy office.",
    },
  ],
};
