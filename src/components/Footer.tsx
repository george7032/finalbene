import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Mail, MapPin, MessageCircle, Music2, Phone, Youtube } from "lucide-react";

const logoImage = "/images/logo.png";
import { academicLevels, school, socialLinks, whatsappLink } from "@/lib/school";

const quickLinks = [
  { name: "Home", to: "/" as const },
  { name: "About Us", to: "/about" as const },
  { name: "Academics", to: "/academics" as const },
  { name: "Admissions", to: "/admissions" as const },
  { name: "Boarding", to: "/boarding" as const },
  { name: "School Life", to: "/school-life" as const },
  { name: "News & Events", to: "/news" as const },
  { name: "Gallery", to: "/gallery" as const },
  { name: "Contact Us", to: "/contact" as const },
];

const legalLinks = [
  { name: "Child Safeguarding", to: "/child-safeguarding" as const },
  { name: "Privacy Notice", to: "/privacy" as const },
  { name: "Terms of Use", to: "/terms" as const },
];

const icons: Record<string, typeof Facebook> = {
  Facebook,
  TikTok: Music2,
  YouTube: Youtube,
};

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="" className="h-12 w-12 rounded-lg bg-white object-contain p-1" />
              <div>
                <p className="text-lg font-bold">{school.name}</p>
                <p className="text-sm text-white/80">{school.tagline}</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85">
              A school in Utawala committed to strong academics, close learner support and character
              development from Kindergarten through to Senior School.
            </p>
            <p className="mt-4 rounded-lg border border-white/20 bg-white/10 p-3 text-xs leading-relaxed text-white/85">
              The Academy is committed to safeguarding and promoting the welfare of every learner.
            </p>
            <div className="mt-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Follow us</p>
              <div className="mt-3 flex gap-3">
                {socialLinks.map((s) => {
                  const Icon = icons[s.name] ?? Facebook;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/15 transition-colors hover:bg-white/25"
                    >
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">Quick links</h2>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link to={l.to} className="text-sm text-white/85 transition-colors hover:text-white hover:underline">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Academics">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">Academics</h2>
            <ul className="mt-4 space-y-2">
              {academicLevels.map((l) => (
                <li key={l.slug}>
                  <Link to={l.to} className="text-sm text-white/85 transition-colors hover:text-white hover:underline">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-white/70">Legal</h2>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((l) => (
                <li key={l.name}>
                  <Link to={l.to} className="text-sm text-white/85 transition-colors hover:text-white hover:underline">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {school.poBox}
                  <br />
                  {school.address}
                </span>
              </li>
              <li className="flex gap-2">
                <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={school.phoneHref} className="hover:underline">
                  {school.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <MessageCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  WhatsApp the Academy
                </a>
              </li>
              <li className="flex gap-2">
                <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`mailto:${school.email}`} className="break-all hover:underline">
                  {school.email}
                </a>
              </li>
              <li className="flex gap-2">
                <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Mon – Fri: 8:00 am – 5:00 pm
                  <br />
                  Sat: 8:00 am – 2:00 pm · Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/75">
          <p>© {new Date().getFullYear()} {school.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
