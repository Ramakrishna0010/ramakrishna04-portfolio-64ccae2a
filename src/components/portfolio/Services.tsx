import { Boxes, Braces, Database, KeyRound, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const items = [
  {
    Icon: Boxes,
    title: "Full-Stack Applications",
    body: "Building end-to-end applications using ASP.NET Core and Angular.",
  },
  {
    Icon: Braces,
    title: "Backend & APIs",
    body: "Developing REST APIs using C#, ASP.NET Core and Entity Framework Core.",
  },
  {
    Icon: Database,
    title: "Database-Driven Applications",
    body: "Building applications backed by SQL Server and MySQL.",
  },
  {
    Icon: KeyRound,
    title: "Secure Applications",
    body: "Implementing JWT authentication and role-based authorization.",
  },
  {
    Icon: Sparkles,
    title: "AI-Powered Applications",
    body: "Exploring Generative AI, RAG, LangChain and LLM-based application development.",
  },
];

export function Services() {
  return (
    <section id="what-i-build" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="What I Build"
          title="The kind of software I work on."
          description="Practical engineering work across the .NET and Angular stack."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <Reveal key={s.title} delay={i * 55}>
              <article className="glass-card h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <s.Icon size={20} className="text-primary" />
                <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
