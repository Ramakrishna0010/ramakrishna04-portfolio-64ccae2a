import { GraduationCap, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const repos = [
  {
    name: "Car Wash Management System",
    body: "ASP.NET Core Web API + Angular full-stack application with JWT auth, EF Core and MySQL.",
    tags: ["C#", "Angular", "MySQL"],
  },
  {
    name: "Railway Management System",
    body: "Enterprise-style railway management application built on the ASP.NET MVC architecture.",
    tags: ["ASP.NET MVC", "C#", "SQL"],
  },
];

export function EducationAndPresence() {
  return (
    <section id="education" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Education" title="Academic background." />


        <Reveal className="mt-10">
          <article className="glass-card grid gap-5 p-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:p-8">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-primary">
              <GraduationCap size={22} />
            </span>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold">
                Bachelor of Technology — Computer Science &amp; Engineering
              </h3>
              <p className="mt-1 text-sm text-primary">Lovely Professional University</p>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">2022 – 2025</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Technical focus on programming fundamentals, object-oriented design, data
                structures and algorithms, databases and web application development.
              </p>
            </div>
          </article>
        </Reveal>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Developer Presence"
            title="Code and profiles."
            description="Where my work and professional profile live."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                Icon: Github,
                label: "View GitHub",
                handle: "Ramakrishna0010",
                href: "https://github.com/Ramakrishna0010",
              },
              {
                Icon: Linkedin,
                label: "View LinkedIn",
                handle: "mettu-ramakrishna-reddy",
                href: "https://www.linkedin.com/in/mettu-ramakrishna-reddy",
              },

            ].map((p, i) => (
              <Reveal key={p.label} delay={i * 70}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card group flex items-center gap-4 p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-primary">
                    <p.Icon size={20} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold">{p.label}</span>
                    <span className="block truncate font-mono text-[11px] text-muted-foreground">
                      {p.handle}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {repos.map((r, i) => (
              <Reveal key={r.name} delay={i * 70}>
                <article className="h-full rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-sm font-semibold">{r.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {r.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
