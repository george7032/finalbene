import { createFileRoute } from "@tanstack/react-router";
import AcademicPage, { type AcademicPageConfig } from "@/components/site/AcademicPage";
import { SITE_URL } from "@/lib/school";
const image = "/images/administration.jpg";
const gallery1 = "/images/primary12.jpg";
const gallery2 = "/images/primary11.jpg";
const gallery3 = "/images/primary15.jpg";

const title = "Primary School (Grades 1–6) in Utawala — Embakasi Benedicta Academy";
const description =
  "Lower Primary (Grades 1–3) and Upper Primary (Grades 4–6) at Embakasi Benedicta Academy, Utawala: learning areas, skills, teaching approach, assessment and facilities.";

export const Route = createFileRoute("/academics/primary")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/academics/primary` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/academics/primary` }],
  }),
  component: () => <AcademicPage config={config} />,
});

const config: AcademicPageConfig = {
  name: "Primary School",
  image,
  gallery: [
    { src: gallery1, alt: "Primary School pupils eagerly raising hands in class" },
    { src: gallery2, alt: "Primary School pupils reading together in the school library" },
    { src: gallery3, alt: "Primary School pupils doing a group science activity" },
  ],
  intro:
    "Lower Primary (Grades 1–3) and Upper Primary (Grades 4–6) — strong foundations, practical learning and character development.",
  grades: "Grades 1 to 6",
  curriculum: "Competency-based education",
  assessmentSummary:
    "Continuous competency-based assessment, with national assessment where applicable",
  description: [
    "In Lower Primary, learners build strong foundations in reading, writing and numeracy through activity-based, practical lessons that draw on the world around them.",
    "In Upper Primary, learning deepens through inquiry, experiments, research and projects, with practical agriculture and nutrition activities and the use of technology in learning.",
  ],
  stages: [
    {
      name: "Lower Primary",
      grades: "Grades 1 to 3",
      learningAreas: [
        "English Activities",
        "Kiswahili Language Activities",
        "Mathematical Activities",
        "Environmental Activities",
        "Creative Activities",
        "Religious Education",
      ],
    },
    {
      name: "Upper Primary",
      grades: "Grades 4 to 6",
      learningAreas: [
        "English",
        "Kiswahili or Kenya Sign Language",
        "Mathematics",
        "Science and Technology",
        "Agriculture and Nutrition",
        "Social Studies",
        "Creative Arts",
        "Religious Education",
      ],
    },
  ],
  learningAreas: [],
  skills: [
    "Reading, writing and comprehension",
    "Communication",
    "Numeracy and mathematical reasoning",
    "Problem-solving",
    "Scientific inquiry",
    "Creativity and innovation",
    "Research and digital skills",
    "Environmental responsibility",
    "Collaboration and leadership",
    "Practical life skills",
  ],
  learningApproach: [
    "Activity-based lessons and guided reading and writing",
    "Use of practical learning materials",
    "Pair and group work, with individual and group projects",
    "Songs, stories and demonstrations",
    "Experiments, demonstrations and inquiry-based learning",
    "Research activities, presentations and discussions",
    "Practical agriculture and nutrition activities",
    "Integration of technology in learning",
  ],
  assessment: [
    "Oral questions and responses",
    "Written exercises and assignments",
    "Practical activities and tasks",
    "Projects and presentations",
    "Portfolios",
    "Teacher observation",
    "Continuous competency-based assessment",
    "National assessment where applicable",
  ],
  support: [
    "Close monitoring of literacy and numeracy progress",
    "Extra help for learners who need to catch up",
    "Talent identification through clubs and co-curricular activities",
    "Regular feedback to parents on progress and next steps",
  ],
  facilities: [
    "Classrooms",
    "Reading areas or library",
    "ICT resources or laboratory",
    "Science learning resources",
    "Agriculture learning area",
    "Creative arts materials",
    "Outdoor learning spaces and sports field",
    "Boarding facilities",
  ],
  coCurricular: [
    "Sports and soccer",
    "Music, dance and drama",
    "Art and creative arts",
    "Debate and journalism",
    "Environmental club",
    "Scouts",
    "Chess",
    "Ballet",
  ],
  faqs: [
    {
      question: "What is the difference between Lower and Upper Primary?",
      answer:
        "Lower Primary (Grades 1–3) focuses on foundational literacy, numeracy and confidence. Upper Primary (Grades 4–6) introduces distinct subjects such as Science and Technology, Agriculture and Nutrition and Social Studies, with more research and project work.",
    },
    {
      question: "How are learners assessed?",
      answer:
        "Through continuous competency-based assessment: written work, practical tasks, projects, presentations, portfolios and teacher observation, plus national assessment where applicable.",
    },
    {
      question: "Are digital skills taught?",
      answer:
        "Yes. Learners use ICT resources as part of their learning, building digital literacy alongside reading, writing and numeracy.",
    },
    {
      question: "Can primary learners board?",
      answer:
        "Boarding availability is confirmed by the Academy. Please see the Boarding page or contact the admissions office.",
    },
  ],
};
