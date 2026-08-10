import { Award, BadgeCheck, GraduationCap, Star, Trophy } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const items = [
  { Icon: BadgeCheck, title: "Microsoft Azure AI Fundamentals", detail: "AI-900" },
  { Icon: BadgeCheck, title: "Microsoft Azure Fundamentals", detail: "AZ-900" },
  { Icon: Award, title: "Data Analytics Essentials", detail: "Cisco · March 2024" },
  { Icon: GraduationCap, title: "DSA Training", detail: "GeeksforGeeks · June 2023 – July 2023" },
  { Icon: Star, title: "5-Star in Java", detail: "HackerRank" },
  { Icon: Trophy, title: "100 Days Badge", detail: "LeetCode" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Certifications & Achievements"
          title="Verified credentials."
          description="Certifications and platform achievements earned alongside my engineering work."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => (
            <Reveal key={c.title} delay={i * 55}>
              <article className="glass-card flex h-full items-start gap-3 p-5 transition-colors hover:border-primary/40">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-primary">
                  <c.Icon size={18} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold">{c.title}</h3>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">{c.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
