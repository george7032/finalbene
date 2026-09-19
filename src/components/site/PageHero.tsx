import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

type Crumb = { name: string; to?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  crumbs = [],
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-primary-dark text-white">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/35"
          />
        </>
      )}
      <div className="container relative mx-auto px-4 py-14 md:py-20">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-white/80">
              <li>
                <Link to="/" className="hover:text-white hover:underline">
                  Home
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.name} className="flex items-center gap-1">
                  <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
                  {c.to ? (
                    <Link to={c.to} className="hover:text-white hover:underline">
                      {c.name}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white">
                      {c.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-yellow">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
