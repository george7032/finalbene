import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SelectField, TextAreaField, TextField } from "./Field";
import { openMailTo } from "./mailto";

const levels = ["Kindergarten", "Primary School", "Junior School", "Senior School"] as const;
const attendance = ["Day", "Boarding"] as const;

type Errors = Partial<Record<string, string>>;

const phoneOk = (v: string) => /^[+()\d\s-]{9,20}$/.test(v.trim());
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

export default function EnquiryForm() {
  const [values, setValues] = useState({
    parent: "",
    phone: "",
    email: "",
    learner: "",
    currentLevel: "",
    interestLevel: "",
    attendance: "",
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
    if (!values.currentLevel) e.currentLevel = "Please select the learner's current level.";
    if (!values.interestLevel) e.interestLevel = "Please select the level you are interested in.";
    if (!values.attendance) e.attendance = "Please select day or boarding.";
    if (values.message.trim().length < 10)
      e.message = "Please tell us a little more (at least 10 characters).";
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      openMailTo(`Admission Enquiry — ${values.learner}`, [
        ["Parent/Guardian", values.parent],
        ["Telephone", values.phone],
        ["Email", values.email],
        ["Learner", values.learner],
        ["Current school level", values.currentLevel],
        ["Level interested in", values.interestLevel],
        ["Day or boarding", values.attendance],
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
          Thank you. Your enquiry has been received. The Academy will contact you shortly.
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
        <SelectField label="Current school level" required value={values.currentLevel} onChange={set("currentLevel")} options={[...levels, "Not currently in school"]} error={errors.currentLevel} />
        <SelectField label="Level interested in" required value={values.interestLevel} onChange={set("interestLevel")} options={levels} error={errors.interestLevel} />
        <SelectField label="Day or boarding" required value={values.attendance} onChange={set("attendance")} options={attendance} error={errors.attendance} />
      </div>
      <TextAreaField label="Message" required value={values.message} onChange={set("message")} error={errors.message} placeholder="How can we help?" />
      <button
        type="submit"
        className="min-h-11 w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
      >
        Send Enquiry
      </button>
    </form>
  );
}
