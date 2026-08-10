import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import profile from "@/assets/headshot.jpg.asset.json";
import { Reveal } from "./Reveal";

const quickLinks = [
  { href: "https://github.com/Ramakrishna0010", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/mettu-ramakrishna-reddy",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "mailto:ramakrishnamettu4@gmail.com", label: "Email", Icon: Mail },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-backdrop [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
        <div className="orb absolute -top-24 left-[-10%] h-72 w-72 bg-primary/25" />
        <div
          className="orb absolute top-24 right-[-8%] h-80 w-80 bg-violet/20"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Software Engineer · .NET Full Stack Developer
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
              Building scalable, secure, and{" "}
              <span className="text-gradient">modern web applications.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              I&apos;m Mettu Ramakrishna Reddy — a Software Engineer building full-stack
              applications with ASP.NET Core, C#, Angular, REST APIs, Entity Framework Core, SQL
              databases and secure authentication. Currently expanding into Java, Spring Boot,
              Python and Generative AI.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#projects"
                className="glow-ring group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface-2 px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:bg-accent"
              >
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-8 flex items-center gap-3">
              {quickLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={180} className="mx-auto w-full max-w-xs sm:max-w-sm">
          <div className="relative">
            <ProfilePhoto
              src={profile.url}
              alt="Portrait of Mettu Ramakrishna Reddy, Software Engineer"
            />
            <div className="glass-card absolute -bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 px-4 py-2.5 whitespace-nowrap">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
                Hyderabad, India · Open to opportunities
              </span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
