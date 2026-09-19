import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
const logoImage = "/images/logo.png";
import { academicLevels, school, whatsappLink } from "@/lib/school";

const navigation = [
  { name: "Home", href: "/" as const },
  { name: "About Us", href: "/about" as const },
  { name: "Academics", href: "/academics" as const, children: academicLevels },
  { name: "Admissions", href: "/admissions" as const },
  { name: "Boarding", href: "/boarding" as const },
  { name: "School Life", href: "/school-life" as const },
  { name: "News & Events", href: "/news" as const },
  { name: "Gallery", href: "/gallery" as const },
  { name: "Contact Us", href: "/contact" as const },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 shadow-soft backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="hidden items-center justify-between gap-4 border-b border-border py-2 md:flex">
          <div className="flex items-center gap-6">
            <a
              href={school.phoneHref}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              {school.phone}
            </a>
            <a
              href={`mailto:${school.email}`}
              className="hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary lg:flex"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              {school.email}
            </a>
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>

        <div className="flex items-center justify-between gap-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="Embakasi Benedicta Academy logo"
              className="h-12 w-12 object-contain"
            />
            <span>
              <span className="block text-base font-bold leading-tight text-foreground md:text-lg">
                Embakasi Benedicta Academy
              </span>
              <span className="block text-xs text-muted-foreground md:text-sm">
                {school.tagline}
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center xl:flex">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setAcademicsOpen(true)}
                  onMouseLeave={() => setAcademicsOpen(false)}
                >
                  <Link
                    to={item.href}
                    onFocus={() => setAcademicsOpen(true)}
                    aria-expanded={academicsOpen}
                    className={`flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors hover:bg-muted ${
                      isActive(item.href) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.name}
                    <ChevronDown aria-hidden="true" className="h-4 w-4" />
                  </Link>
                  {academicsOpen && (
                    <ul className="absolute left-0 top-full z-50 w-56 rounded-lg border border-border bg-popover p-2 shadow-hover">
                      {item.children.map((child) => (
                        <li key={child.slug}>
                          <Link
                            to={child.to}
                            className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                            onClick={() => setAcademicsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors hover:bg-muted ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden xl:block">
            <Link
              to="/admissions"
              hash="enquiry"
              className="inline-flex min-h-11 items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Enquire Now
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="min-h-11 min-w-11 rounded-lg p-2 text-foreground transition-colors hover:bg-muted xl:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}

          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border py-4 xl:hidden">
            <nav aria-label="Mobile" className="flex flex-col">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-md px-2 py-3 text-base font-medium transition-colors hover:bg-muted ${
                      isActive(item.href) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <ul className="ml-4 border-l border-border pl-3">
                      {item.children.map((child) => (
                        <li key={child.slug}>
                          <Link
                            to={child.to}
                            onClick={() => setIsMenuOpen(false)}
                            className="block rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
              <Link
                to="/admissions"
                hash="enquiry"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Enquire Now
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                WhatsApp Us
              </a>
              <a
                href={school.phoneHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
