import { Braces, Database, Layers, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const highlights = [
  {
    Icon: Layers,
    title: "Full-stack .NET",
    body: "ASP.NET Core + Angular applications, built end to end.",
  },
  {
    Icon: Braces,
    title: "Backend & APIs",
    body: "REST APIs in C# with Web API and Entity Framework Core.",
  },
  {
    Icon: Database,
    title: "Databases",
    body: "SQL schema design and data access with EF Core and LINQ.",
  },
  {
    Icon: ShieldCheck,
    title: "Secure & clean code",
    body: "JWT authentication, role-based authorization, OOP and SOLID.",
  },
];

const learning = ["Java", "Spring Boot", "Python", "Generative AI"];

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
          description="I build across the .NET stack: C# services and REST APIs with ASP.NET Core, data access with Entity Framework Core over SQL, and Angular frontends — secured with JWT authentication and role-based authorization, and written with OOP and SOLID principles in mind."
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

        <Reveal className="mt-4">
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-dashed border-violet/45 bg-violet/5 p-5">
            <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
              Currently expanding into
            </span>
            {learning.map((l) => (
              <span
                key={l}
                className="rounded-lg border border-violet/30 bg-violet/10 px-2.5 py-1 text-xs text-foreground/85"
              >
                {l}
              </span>
            ))}
          </div>
        </Reveal>


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
