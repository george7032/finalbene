/**
 * Single source of truth for school information used across the site.
 *
 * IMPORTANT: Anything not verified by the Academy must not be published —
 * leave it out rather than inventing a value.
 */

export const school = {
  name: "Embakasi Benedicta Academy",
  shortName: "Benedicta Academy",
  tagline: "A nurturing space for young minds",
  /** Verified location as supplied by the Academy. */
  address: "Utawala, next to Kimson Plaza, Nairobi, Kenya",
  /** Postal address as supplied by the Academy. */
  poBox: "P.O. Box 47717 – 00100, Nairobi, Kenya",
  /** Existing published contact details carried over from the Academy's own site. */
  phone: "+254 110 380 560",
  phoneHref: "tel:+254110380560",
  whatsapp: "254110380560",
  email: "marketingebenedictaacademy@gmail.com",
  /** Operating hours as supplied by the Academy. */
  hours: [
    { days: "Monday – Friday", time: "8:00 am – 5:00 pm" },
    { days: "Saturday", time: "8:00 am – 2:00 pm" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

export const whatsappMessage =
  "Hello Embakasi Benedicta Academy. I would like to enquire about admission.";

export function whatsappLink(message: string = whatsappMessage) {
  return `https://wa.me/${school.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100094652748920",
  },
  { name: "TikTok", href: "https://www.tiktok.com/@embakasi.benedict" },
  { name: "YouTube", href: "https://www.youtube.com/@benedictaschool" },
] as const;

export const academicLevels = [
  {
    slug: "kindergarten",
    to: "/academics/kindergarten" as const,
    name: "Kindergarten",
    summary:
      "A warm, play-rich start to school where young learners build confidence, language and curiosity.",
    focus: "Play-based learning, language, numeracy and social skills",
  },
  {
    slug: "primary",
    to: "/academics/primary" as const,
    name: "Primary School",
    summary:
      "Strong academic foundations paired with character development, talent discovery and practical learning.",
    focus: "Literacy, numeracy, enquiry, character and talents",
  },
  {
    slug: "junior",
    to: "/academics/junior" as const,
    name: "Junior School",
    summary:
      "Learners grow into independent thinkers through science, technology, projects and leadership.",
    focus: "Independent learning, science, technology and leadership",
  },
  {
    slug: "senior",
    to: "/academics/senior" as const,
    name: "Senior School",
    summary:
      "A mature, future-focused stage preparing learners for further study and the world of work.",
    focus: "Specialisation, career guidance and academic rigour",
  },
] as const;

export const SITE_URL = "https://bloom-forge-verse.lovable.app";
