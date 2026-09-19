import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { school, whatsappLink } from "@/lib/school";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export function CtaGroup({
  variant = "light",
  className,
  compact = false,
}: {
  /** "light" = on dark background, "dark" = on light background */
  variant?: "light" | "dark";
  className?: string;
  compact?: boolean;
}) {
  const primary =
    variant === "light"
      ? "bg-white text-primary hover:bg-white/90"
      : "bg-primary text-primary-foreground hover:bg-primary-dark";
  const secondary =
    variant === "light"
      ? "border border-white/60 text-white hover:bg-white/15"
      : "border border-border text-foreground hover:bg-muted";

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Link to="/admissions" hash="enquiry" className={cn(base, primary)}>
        Enquire Now
      </Link>
      <Link to="/admissions" hash="visit" className={cn(base, secondary)}>
        Book a School Visit
      </Link>
      {!compact && (
        <Link to="/admissions" className={cn(base, secondary)}>
          Apply for Admission
        </Link>
      )}
      <a href={school.phoneHref} className={cn(base, secondary)}>
        <Phone aria-hidden="true" className="h-4 w-4" />
        Call Us
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, secondary)}
      >
        <MessageCircle aria-hidden="true" className="h-4 w-4" />
        WhatsApp Us
      </a>
    </div>
  );
}

export function AdmissionsCta({
  title = "Ready to take the next step?",
  description = "Speak with our admissions team, book a visit or begin your application.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-primary py-14 text-white md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/90">{description}</p>
        <CtaGroup className="mt-8 justify-center" />
      </div>
    </section>
  );
}
