import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { school, whatsappLink } from "@/lib/school";

export default function ContactInfo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const label = tone === "light" ? "text-white/70" : "text-muted-foreground";
  const value = tone === "light" ? "text-white" : "text-foreground";
  const icon = tone === "light" ? "text-accent-yellow" : "text-primary";

  return (
    <ul className="space-y-5">
      <li className="flex gap-3">
        <MapPin aria-hidden="true" className={`mt-0.5 h-5 w-5 shrink-0 ${icon}`} />
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wide ${label}`}>Address</p>
          <p className={`text-sm ${value}`}>{school.poBox}</p>
          <p className={`text-sm ${value}`}>{school.address}</p>
        </div>
      </li>
      <li className="flex gap-3">
        <Phone aria-hidden="true" className={`mt-0.5 h-5 w-5 shrink-0 ${icon}`} />
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wide ${label}`}>Telephone</p>
          <a href={school.phoneHref} className={`text-sm underline-offset-4 hover:underline ${value}`}>
            {school.phone}
          </a>
        </div>
      </li>
      <li className="flex gap-3">
        <MessageCircle aria-hidden="true" className={`mt-0.5 h-5 w-5 shrink-0 ${icon}`} />
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wide ${label}`}>WhatsApp</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm underline-offset-4 hover:underline ${value}`}
          >
            Message the Academy
          </a>
        </div>
      </li>
      <li className="flex gap-3">
        <Mail aria-hidden="true" className={`mt-0.5 h-5 w-5 shrink-0 ${icon}`} />
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wide ${label}`}>Email</p>
          <a
            href={`mailto:${school.email}`}
            className={`break-all text-sm underline-offset-4 hover:underline ${value}`}
          >
            {school.email}
          </a>
        </div>
      </li>
      <li className="flex gap-3">
        <Clock aria-hidden="true" className={`mt-0.5 h-5 w-5 shrink-0 ${icon}`} />
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wide ${label}`}>Operating Hours</p>
          <ul className={`mt-1 space-y-0.5 text-sm ${value}`}>
            {school.hours.map((h) => (
              <li key={h.days} className="flex flex-wrap justify-between gap-x-3">
                <span>{h.days}</span>
                <span className={label === "text-muted-foreground" ? "text-muted-foreground" : "text-white/80"}>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </ul>
  );
}
