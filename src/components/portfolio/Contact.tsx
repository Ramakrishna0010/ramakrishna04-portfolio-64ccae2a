import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { sendContactEmail } from "@/lib/contact.functions";



const details = [
  {
    Icon: Mail,
    label: "Email",
    value: "ramakrishnamettu4@gmail.com",
    href: "mailto:ramakrishnamettu4@gmail.com",
  },
  { Icon: Phone, label: "Phone", value: "9010314115", href: "tel:9010314115" },
  { Icon: MapPin, label: "Location", value: "Hyderabad, Telangana" },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "mettu-ramakrishna-reddy",
    href: "https://www.linkedin.com/in/mettu-ramakrishna-reddy",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "Ramakrishna0010",
    href: "https://github.com/Ramakrishna0010",
  },
];

const fields = [
  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
  { id: "email", label: "Email", type: "email", placeholder: "you@company.com" },
  { id: "subject", label: "Subject", type: "text", placeholder: "What's this about?" },
] as const;

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const send = useServerFn(sendContactEmail);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    try {
      await send({ data: values });
      toast.success("Message sent", { description: "Thanks — I'll get back to you soon." });
      setValues({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Contact form send failed", err);
      toast.error("Couldn't send your message", {
        description: "Please try again, or email ramakrishnamettu4@gmail.com directly.",
      });
    } finally {
      setSending(false);
    }
  }

    } finally {
      setSending(false);
    }
  }


  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="orb absolute bottom-0 left-1/3 h-72 w-72 bg-violet/15" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Contact
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Let&apos;s build something <span className="text-gradient">useful together.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="glass-card h-full p-6 sm:p-8">
              <ul className="space-y-5">
                {details.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-surface-2 text-primary">
                      <Icon size={16} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                        {label}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="block truncate text-sm break-all transition-colors hover:text-primary"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="block text-sm">{value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="glass-card h-full p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {fields.map((f, i) => (
                  <div key={f.id} className={i === 2 ? "sm:col-span-2" : undefined}>
                    <label htmlFor={f.id} className="text-xs font-medium text-muted-foreground">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      value={values[f.id]}
                      onChange={(e) => setValues((v) => ({ ...v, [f.id]: e.target.value }))}
                      className="mt-1.5 w-full rounded-xl border border-border bg-surface-2/70 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/25"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about the role or project…"
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                    className="mt-1.5 w-full resize-y rounded-xl border border-border bg-surface-2/70 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/25"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="glow-ring mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto sm:px-8"
              >
                {sending ? "Sending…" : "Send Message"}
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                Your message is delivered straight to my inbox. I usually reply within a day.
              </p>

            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:flex sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mettu Ramakrishna Reddy
        </p>
        <p className="font-mono text-[11px] text-muted-foreground">
          Software Engineer · .NET Full Stack Developer
        </p>
      </div>
    </footer>
  );
}
