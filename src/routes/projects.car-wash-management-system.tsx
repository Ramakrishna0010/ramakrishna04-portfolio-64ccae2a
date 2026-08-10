import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Contact";
import { Reveal } from "@/components/portfolio/Reveal";
import { architecture, features, stack } from "@/components/portfolio/project-data";

const title = "Car Wash Management System — Case Study | Mettu Ramakrishna Reddy";
const description =
  "Case study of a full-stack Car Wash Management System built with ASP.NET Core Web API, Angular, Entity Framework Core, MySQL and JWT authentication.";

export const Route = createFileRoute("/projects/car-wash-management-system")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects/car-wash-management-system" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects/car-wash-management-system" }],
  }),
  component: CaseStudy,
});

const sections = [
  {
    heading: "Problem",
    body: "Car wash operations involve several moving parts — customers and their vehicles, incoming wash orders, assigned washers, and payments. Handling these manually or across disconnected tools makes it hard to track order state, control who can do what, and keep records consistent.",
  },
  {
    heading: "Solution",
    body: "A single full-stack web application that brings customers, vehicles, orders, payments, users and washers into one system. An Angular single-page frontend consumes a secured ASP.NET Core Web API, with role-based access deciding what each type of user can see and do.",
  },
  {
    heading: "Architecture",
    body: "The application follows a layered design: the Angular SPA talks to REST controllers in the Web API, controllers delegate to service/business-logic classes in C#, and data access runs through Entity Framework Core against a MySQL database.",
  },
  {
    heading: "Technology",
    body: "ASP.NET Core Web API and C# on the backend, Entity Framework Core over MySQL for persistence, JWT authentication with role-based authorization for security, Angular and TypeScript on the frontend, MailKit for email, and Swagger and Postman for API documentation and testing.",
  },
];

function CaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 grid-backdrop [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]" />
          <div className="orb absolute -top-20 right-0 h-72 w-72 bg-primary/20" />
        </div>

        <article className="relative mx-auto max-w-4xl px-5">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} /> Back to portfolio
          </Link>

          <Reveal className="mt-6">
            <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Case Study
            </span>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Car Wash <span className="text-gradient">Management System</span>
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A full-stack web application designed to manage car wash operations — customers,
              vehicles, orders, payments, users and washers.
            </p>
          </Reveal>

          <div className="mt-12 space-y-4">
            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 60}>
                <section className="glass-card p-6 sm:p-8">
                  <h2 className="text-lg font-semibold">{s.heading}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-4">
            <section className="glass-card p-6 sm:p-8">
              <h2 className="text-lg font-semibold">Architecture flow</h2>
              <ol className="mt-6 space-y-2.5">
                {architecture.map((a, i) => (
                  <li key={a.label}>
                    <div className="rounded-xl border border-border bg-surface-2/70 px-4 py-3">
                      <p className="text-sm font-medium">{a.label}</p>
                      <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                        {a.detail}
                      </p>
                    </div>
                    {i < architecture.length - 1 ? (
                      <div aria-hidden className="ml-6 h-4 w-px bg-primary/40" />
                    ) : null}
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>

          <Reveal className="mt-4">
            <section className="glass-card p-6 sm:p-8">
              <h2 className="text-lg font-semibold">Technology stack</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-3">
                {Object.entries(stack).map(([group, items]) => (
                  <div key={group}>
                    <p className="text-xs font-semibold text-primary">{group}</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {items.map((t) => (
                        <li
                          key={t}
                          className="rounded-lg border border-border bg-surface px-2.5 py-1.5 text-xs text-muted-foreground"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal className="mt-4">
            <section className="glass-card p-6 sm:p-8">
              <h2 className="text-lg font-semibold">Key features</h2>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal className="mt-4">
            <section className="glass-card p-6 sm:p-8">
              <h2 className="text-lg font-semibold">Result</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The result is a working full-stack application where each operational entity —
                customer, vehicle, order, payment, washer — is managed through secured REST
                endpoints and a single Angular interface, with access governed by JWT-based roles
                and data persisted through Entity Framework Core.
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                A live demo and public repository link will be added here once available.
              </p>
            </section>
          </Reveal>
        </article>
      </main>
      <Footer />
    </div>
  );
}
