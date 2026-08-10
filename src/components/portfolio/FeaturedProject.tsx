import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Github } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import {
  architecture,
  features,
  githubRepoUrl,
  liveDemoUrl,
  problem,
  solution,
  stack,
} from "./project-data";

export function FeaturedProject() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Featured Project"
          title="Car Wash Management System"
          description="A full-stack web application designed to manage car wash operations — customers, vehicles, orders, payments, users and washers."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            { label: "Problem", body: problem },
            { label: "Solution", body: solution },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 70}>
              <article className="glass-card h-full p-6">
                <h3 className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  {b.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4">

          <article className="glass-card overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="border-b border-border p-6 sm:p-8 lg:border-r lg:border-b-0">
                <h3 className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  Architecture
                </h3>
                <ol className="mt-5 space-y-2.5">
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
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  Technology Stack
                </h3>
                <div className="mt-5 space-y-4">
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

                <h3 className="mt-7 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  Key Features
                </h3>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/projects/car-wash-management-system"
                    className="glow-ring group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    View Project
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                  {githubRepoUrl ? (
                    <a
                      href={githubRepoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:bg-accent"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  ) : null}
                  {liveDemoUrl ? (
                    <a
                      href={liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:bg-accent"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>
                  ) : null}
                </div>

              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
