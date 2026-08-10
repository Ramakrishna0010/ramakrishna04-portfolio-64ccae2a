import { Boxes, Braces, Cloud, Database, KeyRound, Layout, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  {
    Icon: Boxes,
    title: "Full-Stack Web Development",
    body: "Build responsive web applications using modern frontend and backend technologies.",
  },
  {
    Icon: Braces,
    title: ".NET Backend Development",
    body: "Develop scalable REST APIs and backend systems using C#, ASP.NET Core, Entity Framework Core and SQL databases.",
  },
  {
    Icon: Layout,
    title: "Angular Development",
    body: "Create responsive and maintainable single-page applications using Angular and TypeScript.",
  },
  {
    Icon: Database,
    title: "API & Database Integration",
    body: "Design REST APIs, connect applications to relational databases, and implement reliable data-access layers.",
  },
  {
    Icon: KeyRound,
    title: "Authentication & Authorization",
    body: "Implement secure authentication and role-based authorization using technologies such as JWT.",
  },
  {
    Icon: Sparkles,
    title: "AI / GenAI Integration",
    body: "Explore and integrate Generative AI capabilities into applications — LLM workflows, RAG and AI-powered features.",
  },
];

const interests = [
  {
    title: "Backend Engineering",
    body: "Java, Spring Boot, REST APIs, databases and system design.",
    Icon: Braces,
  },
  {
    title: "Cloud & Modern Development",
    body: "Azure and cloud-based application development.",
    Icon: Cloud,
  },
  {
    title: "AI Engineering",
    body: "Generative AI, Python, LangChain, RAG and AI-powered applications.",
    Icon: Sparkles,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you."
          description="Practical engineering work across the .NET and Angular stack."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 55}>
              <article className="glass-card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <s.Icon size={20} className="text-primary" />
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Direction"
            title="Career & technical interests."
            description="Where I'm actively growing next."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {interests.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <article className="h-full rounded-2xl border border-border bg-surface p-6">
                  <s.Icon size={18} className="text-violet" />
                  <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
