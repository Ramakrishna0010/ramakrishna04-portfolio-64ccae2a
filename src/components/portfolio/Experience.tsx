import { Reveal, SectionHeading } from "./Reveal";

const tech = [
  "C#",
  "ASP.NET Core",
  "ASP.NET MVC",
  "Web API",
  "Angular",
  "Entity Framework Core",
  "SQL",
  "REST APIs",
  "JWT Authentication",
  "Git",
  "Swagger",
  "Postman",
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been engineering."
          description="Professional software development experience across backend services and full-stack web applications."
        />

        <div className="relative mt-12 pl-6 sm:pl-8">
          <span
            aria-hidden
            className="absolute top-2 bottom-6 left-0 w-px bg-gradient-to-b from-primary via-violet/50 to-transparent"
          />

          <Reveal className="relative">
            <span
              aria-hidden
              className="absolute top-8 -left-6 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-primary/15 sm:-left-8"
            />
            <article className="glass-card p-6 sm:p-8">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold sm:text-xl">Software Engineer</h3>
                  <p className="mt-1 text-sm text-primary">Capgemini</p>
                </div>
                <span className="shrink-0 rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                  Aug 26, 2025 — Sep 4, 2026
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Working on software development and full-stack engineering across the .NET stack —
                implementing backend logic and Web APIs in C# and ASP.NET Core, building
                Angular-based frontends, and integrating relational databases through Entity
                Framework Core. Day-to-day work involves REST API design, JWT-based authentication,
                API testing with Swagger and Postman, and collaborative development with Git.
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-surface-2/60 p-5">
                <h4 className="text-sm font-semibold">
                  Project — Railway Management System{" "}
                  <span className="font-normal text-muted-foreground">(ASP.NET MVC)</span>
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {[
                    "Enterprise-style railway management application built with ASP.NET MVC.",
                    "Structured the application around the MVC architecture, separating controllers, models and views.",
                    "Implemented backend logic and database interaction for core management workflows.",
                    "Worked in a team-based development setup applying web application and API concepts.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
