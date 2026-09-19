import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaGroup } from "@/components/site/CtaGroup";
import ContactInfo from "@/components/site/ContactInfo";
import VisitForm from "@/components/site/forms/VisitForm";
import { TextAreaField, TextField } from "@/components/site/forms/Field";
import { openMailTo } from "@/components/site/forms/mailto";
import { school } from "@/lib/school";
const heroImage = "/images/hero-7.jpeg";

const phoneOk = (v: string) => /^[+()\d\s-]{9,20}$/.test(v.trim());
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

function ContactForm() {
  const [values, setValues] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof values) => (v: string) => setValues((p) => ({ ...p, [k]: v }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (values.name.trim().length < 2) err.name = "Please enter your name.";
    if (!phoneOk(values.phone)) err.phone = "Please enter a valid telephone number.";
    if (!emailOk(values.email)) err.email = "Please enter a valid email address.";
    if (values.subject.trim().length < 3) err.subject = "Please enter a subject.";
    if (values.message.trim().length < 10) err.message = "Please enter your message.";
    setErrors(err);
    if (Object.keys(err).length === 0) {
      openMailTo(values.subject, [
        ["Name", values.name],
        ["Telephone", values.phone],
        ["Email", values.email],
        ["Message", values.message],
      ]);
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div role="status" className="rounded-xl border border-accent-green/40 bg-accent-green/10 p-6 text-center">
        <CheckCircle2 aria-hidden="true" className="mx-auto mb-3 h-10 w-10 text-accent-green" />
        <p className="text-lg font-semibold text-foreground">
          Thank you. Your message has been received. The Academy will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Your name" required value={values.name} onChange={set("name")} error={errors.name} />
        <TextField label="Telephone number" type="tel" required value={values.phone} onChange={set("phone")} error={errors.phone} />
        <TextField label="Email address" type="email" required value={values.email} onChange={set("email")} error={errors.email} />
        <TextField label="Subject" required value={values.subject} onChange={set("subject")} error={errors.subject} />
      </div>
      <TextAreaField label="Message" required value={values.message} onChange={set("message")} error={errors.message} />
      <button
        type="submit"
        className="min-h-11 w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="Contact the Academy"
        description="We are in Utawala, next to Kimson Plaza. Call, message or visit us — we are glad to hear from you."
        image={heroImage}
        imageAlt="Embakasi Benedicta Academy in Utawala"
        crumbs={[{ name: "Contact Us" }]}
      >
        <CtaGroup />
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" title="Contact information" />
            <ContactInfo />
            <div className="mt-8 rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Find us on the map</h3>
              <p className="mt-2 text-sm text-muted-foreground">{school.address}.</p>
            </div>
          </div>
          <div>
            <SectionHeading align="left" title="Send us a message" />
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          title="Book a school visit"
          description="Choose a date and time that suits you and we will confirm your visit."
        />
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 md:p-8">
          <VisitForm />
        </div>
      </Section>
    </Layout>
  );
}
