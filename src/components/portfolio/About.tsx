import { Braces, Database, Layers, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const highlights = [
  {
    Icon: Layers,
    title: ".NET full-stack development",
    body: "Building applications end to end with ASP.NET Core and Angular, from data model to UI.",
  },
  {
    Icon: Braces,
    title: "Backend & API engineering",
    body: "Designing REST APIs with C#, Web API and Entity Framework Core, documented via Swagger.",
  },
  {
    Icon: Database,
    title: "Database integration",
    body: "Relational schema design and data access across SQL Server and MySQL using EF Core and LINQ.",
  },
  {
    Icon: ShieldCheck,
    title: "Auth & clean code",
    body: "JWT authentication with role-based authorization, guided by OOP and SOLID principles.",
  },
];

const stats = [
  { value: "1+ Year", label: "Professional Experience" },
  { value: "5+", label: "Core Technology Areas" },
  { value: "Full Stack", label: "Backend + Frontend" },
  { value: "Problem Solver", label: "DSA & Software Engineering" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="About"
          title="A Software Engineer focused on practical, maintainable systems."
          description="I work across the .NET stack — writing C# services and Web APIs, modelling data with Entity Framework Core, and building Angular frontends that consume them. My focus is on readable code, sound architecture and secure access control, alongside continuous learning in Java, Spring Boot and Generative AI."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70}>
              <article className="glass-card h-full p-6 transition-colors hover:border-primary/40">
                <h.Icon size={20} className="text-primary" />
                <h3 className="mt-4 text-base font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="font-display text-xl font-semibold text-gradient">{s.value}</p>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
