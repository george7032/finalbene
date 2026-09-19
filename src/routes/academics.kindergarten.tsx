import { createFileRoute } from "@tanstack/react-router";
import AcademicPage, { type AcademicPageConfig } from "@/components/site/AcademicPage";
import { SITE_URL } from "@/lib/school";
const image = "/images/kindergarten.jpeg";
const gallery1 = "/images/kindergarten.jpg";
const gallery2 = "/images/kindergarten5.jpg";
const gallery3 = "/images/kindergarten10.jpg";

const title = "Kindergarten (PP1 & PP2) in Utawala — Embakasi Benedicta Academy";
const description =
  "Kindergarten at Embakasi Benedicta Academy, Utawala: PP1 and PP2 learning areas, skills, teaching approach, assessment and facilities for our youngest learners.";

export const Route = createFileRoute("/academics/kindergarten")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/academics/kindergarten` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/academics/kindergarten` }],
  }),
  component: () => <AcademicPage config={config} />,
});

const config: AcademicPageConfig = {
  name: "Kindergarten",
  image,
  gallery: [
    { src: gallery1, alt: "Kindergarten learners building with colourful blocks in class" },
    { src: gallery2, alt: "Kindergarten children enjoying outdoor play with their teacher" },
    { src: gallery3, alt: "Teacher reading a story to a circle of kindergarten learners" },
  ],
  intro:
    "PP1 and PP2 — a gentle, joyful first experience of school where young children feel safe, seen and excited to learn.",
  grades: "PP1 and PP2",
  curriculum: "Competency-based education",
  assessmentSummary: "Continuous, observation-based progress records and portfolios",
  description: [
    "Kindergarten at Embakasi Benedicta Academy is where the love of learning begins. Our youngest learners settle into routines, make friends and discover that school is a place where they belong.",
    "Learning is delivered through guided play, songs, storytelling, educational games, art, movement, exploration and hands-on activities, with plenty of interaction between teachers and learners.",
  ],
  learningAreas: [
    "Language Activities",
    "Mathematical Activities",
    "Environmental Activities",
    "Psychomotor and Creative Activities",
    "Religious Education Activities",
  ],
  skills: [
    "Listening and speaking",
    "Reading and writing readiness",
    "Early numeracy",
    "Creativity and self-expression",
    "Fine and gross motor coordination",
    "Social and emotional skills",
    "Personal hygiene and independence",
    "Positive values and behaviour",
  ],
  learningApproach: [
    "Guided play",
    "Songs and storytelling",
    "Educational games",
    "Art and movement",
    "Exploration and hands-on activities",
    "Interaction with teachers and other learners",
  ],
  assessment: [
    "Teacher observation",
    "Oral activities",
    "Practical tasks",
    "Learner portfolios",
    "Simple individual and group activities",
    "Continuous progress records",
  ],
  support: [
    "Close teacher observation of every child's progress",
    "Extra help with speech, language and early reading where needed",
    "Settling-in support for children new to school",
    "Regular feedback to parents on progress and next steps",
  ],
  facilities: [
    "Age-appropriate classrooms",
    "Reading and activity corners",
    "Outdoor play area",
    "Learning manipulatives",
    "Creative arts materials",
    "Child-friendly washrooms",
  ],
  coCurricular: [
    "Music and movement",
    "Art and craft",
    "Storytelling",
    "Outdoor games",
    "Educational trips",
  ],
  faqs: [
    {
      question: "What age can my child start Kindergarten?",
      answer:
        "Entry ages and the grades offered are confirmed by the Academy office. Please contact admissions for the current arrangement.",
    },
    {
      question: "How is my child assessed at this age?",
      answer:
        "Through teacher observation, oral activities, practical tasks and portfolios kept over time — never through formal examinations.",
    },
    {
      question: "Is there time for play?",
      answer:
        "Yes. Play is part of the learning, not a break from it — including supervised time in our outdoor spaces and amusement park.",
    },
    {
      question: "How will I know how my child is doing?",
      answer:
        "Teachers share regular updates with parents and are available to meet and discuss your child's progress.",
    },
  ],
};
