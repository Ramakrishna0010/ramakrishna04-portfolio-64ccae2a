import { Cpu, Database, GitBranch, Layout, Server, Sparkles } from "lucide-react";
import skillsPanel from "@/assets/panel-skills.jpg.asset.json";
import aiPanel from "@/assets/panel-ai.jpg.asset.json";
import { Reveal, SectionHeading } from "./Reveal";
import { CinematicVisual } from "./CinematicVisual";

const groups = [
  {
    Icon: Server,
    title: "Backend",
    items: [
      "C#",
      "ASP.NET Core",
      "ASP.NET MVC",
      "Web API",
      "REST APIs",
      "Entity Framework Core",
      "LINQ",
      "JWT Authentication",
    ],
  },
  {
    Icon: Layout,
    title: "Frontend",
    items: ["Angular", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    Icon: Database,
    title: "Database",
    items: ["SQL Server", "MySQL", "Database Design", "Entity Framework Core"],
  },
  {
    Icon: GitBranch,
    title: "Tools",
    items: ["Git", "GitHub", "Swagger", "Postman", "Visual Studio", "VS Code"],
  },
  {
    Icon: Cpu,
    title: "Engineering",
    items: [
      "OOP",
      "SOLID Principles",
      "REST Architecture",
      "Authentication & Authorization",
      "DSA",
      "Clean Code",
    ],
  },
];

const expanding = [
  "Java",
  "Spring Boot",
  "Python",
  "Generative AI",
  "Prompt Engineering",
  "LangChain",
  "RAG",
  "Azure",
];


export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I build with."
          description="Core professional technologies, grouped by where they sit in the application."
        />

        <Reveal delay={80} className="mt-10">
          <CinematicVisual
            src={skillsPanel.url}
            alt="Mettu Ramakrishna Reddy presenting his core technology stack: C#, ASP.NET Core, Angular, SQL Server, REST APIs, LINQ, Azure, Git and JWT"
            aspect="aspect-[16/10] sm:aspect-[3/2]"
            caption="Core stack · C# · ASP.NET Core · Angular · SQL"
            chips={[
              { label: "REST APIs", position: "left-4 top-6 sm:left-8 sm:top-10", depth: 30 },
              { label: "Entity Framework Core", position: "right-4 top-8 sm:right-10", depth: 22 },
              { label: "JWT Auth", position: "bottom-16 right-6 sm:bottom-20 sm:right-14", depth: 34 },
            ]}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <article className="glass-card h-full p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-primary">
                    <g.Icon size={18} />
                  </span>
                  <h3 className="text-base font-semibold">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border bg-surface-2/70 px-2.5 py-1.5 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          <Reveal delay={300}>
            <article className="h-full rounded-2xl border border-dashed border-violet/45 bg-violet/5 p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-violet/40 bg-violet/10 text-violet">
                  <Sparkles size={18} />
                </span>
                <h3 className="text-base font-semibold">Currently Learning</h3>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Actively learning — not presented as professional experience.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {expanding.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-violet/30 bg-violet/10 px-2.5 py-1.5 text-xs text-foreground/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-10">
          <CinematicVisual
            src={aiPanel.url}
            alt="Mettu Ramakrishna Reddy exploring AI engineering: Python, Generative AI, Prompt Engineering, LangChain and RAG"
            aspect="aspect-[16/10] sm:aspect-[3/2]"
            caption="Currently expanding · AI engineering"
            chips={[
              { label: "Prompt Engineering", position: "left-4 top-6 sm:left-8 sm:top-10", depth: 28 },
              { label: "LangChain", position: "right-5 top-10 sm:right-12", depth: 20 },
              { label: "RAG", position: "bottom-16 left-8 sm:bottom-20 sm:left-16", depth: 34 },
            ]}
          />
        </Reveal>

      </div>
    </section>
  );
}
