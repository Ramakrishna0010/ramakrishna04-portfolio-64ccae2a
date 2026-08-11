import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroPanel from "@/assets/panel-hero.jpg.asset.json";
import resume from "@/assets/resume.pdf.asset.json";
import { Reveal } from "./Reveal";
import { CinematicVisual } from "./CinematicVisual";

const RESUME_URL = resume.url;



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
              I&apos;m Mettu Ramakrishna Reddy — a Software Engineer specializing in C#, ASP.NET
              Core, Angular, REST APIs, Entity Framework Core, and SQL databases. I build practical
              full-stack applications with a focus on clean architecture, secure authentication, and
              maintainable code.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
              <a
                href={RESUME_URL}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold transition-colors hover:bg-primary/20"
              >
                <Download size={16} />
                Download Resume
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
          <CinematicVisual
            src={heroPanel.url}
            alt="Mettu Ramakrishna Reddy, Software Engineer, at his desk in a modern development workspace"
            aspect="aspect-[4/5]"
            priority
            imageClassName="object-[55%_center]"
            caption="Hyderabad, India · Open to opportunities"
            chips={[
              { label: ".NET Full Stack", position: "left-4 top-6 sm:left-6 sm:top-8", depth: 30 },
              { label: "C# · Angular · SQL", position: "right-4 top-10 sm:right-6", depth: 20 },
            ]}
          />
        </Reveal>


      </div>
    </section>
  );
}
