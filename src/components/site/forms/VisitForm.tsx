import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SelectField, TextAreaField, TextField } from "./Field";
import { openMailTo } from "./mailto";

const levels = ["Kindergarten", "Primary School", "Junior School", "Senior School"] as const;

type Errors = Partial<Record<string, string>>;

const phoneOk = (v: string) => /^[+()\d\s-]{9,20}$/.test(v.trim());
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

export default function VisitForm() {
  const [values, setValues] = useState({
    parent: "",
    phone: "",
    email: "",
    learner: "",
    level: "",
    date: "",
    time: "",
    visitors: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof values) => (v: string) =>
    setValues((prev) => ({ ...prev, [k]: v }));

  function validate() {
    const e: Errors = {};
    if (values.parent.trim().length < 2) e.parent = "Please enter the parent or guardian name.";
    if (!phoneOk(values.phone)) e.phone = "Please enter a valid telephone number.";
    if (!emailOk(values.email)) e.email = "Please enter a valid email address.";
    if (values.learner.trim().length < 2) e.learner = "Please enter the learner's name.";
    if (!values.level) e.level = "Please select the level you are interested in.";
    if (!values.date) e.date = "Please choose a preferred visit date.";
    if (!values.time) e.time = "Please choose a preferred visit time.";
    const n = Number(values.visitors);
    if (!values.visitors || Number.isNaN(n) || n < 1 || n > 20)
      e.visitors = "Please enter the number of visitors (1–20).";
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      openMailTo(`School Visit Request — ${values.learner}`, [
        ["Parent/Guardian", values.parent],
        ["Telephone", values.phone],
        ["Email", values.email],
        ["Learner", values.learner],
        ["Level interested in", values.level],
        ["Preferred visit date", values.date],
        ["Preferred visit time", values.time],
        ["Number of visitors", values.visitors],
        ["Message", values.message],
      ]);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-xl border border-accent-green/40 bg-accent-green/10 p-6 text-center"
      >
        <CheckCircle2 aria-hidden="true" className="mx-auto mb-3 h-10 w-10 text-accent-green" />
        <p className="text-lg font-semibold text-foreground">
          Thank you. Your visit request has been received. The Academy will contact you shortly to
          confirm the date and time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Parent/Guardian name" required value={values.parent} onChange={set("parent")} error={errors.parent} />
        <TextField label="Telephone number" type="tel" required value={values.phone} onChange={set("phone")} error={errors.phone} placeholder="+254…" />
        <TextField label="Email address" type="email" required value={values.email} onChange={set("email")} error={errors.email} />
        <TextField label="Learner name" required value={values.learner} onChange={set("learner")} error={errors.learner} />
        <SelectField label="Level interested in" required value={values.level} onChange={set("level")} options={levels} error={errors.level} />
        <TextField label="Preferred visit date" type="date" required value={values.date} onChange={set("date")} error={errors.date} />
        <TextField label="Preferred visit time" type="time" required value={values.time} onChange={set("time")} error={errors.time} />
        <TextField label="Number of visitors" type="number" required value={values.visitors} onChange={set("visitors")} error={errors.visitors} />
      </div>
      <TextAreaField label="Message (optional)" value={values.message} onChange={set("message")} placeholder="Anything you would like us to know before your visit" />
      <button
        type="submit"
        className="min-h-11 w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
      >
        Request a School Visit
      </button>
    </form>
  );
}
