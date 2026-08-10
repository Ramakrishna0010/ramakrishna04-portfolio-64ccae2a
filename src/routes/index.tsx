import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { FeaturedProject } from "@/components/portfolio/FeaturedProject";
import { Services } from "@/components/portfolio/Services";
import { EducationAndPresence } from "@/components/portfolio/EducationAndPresence";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { Toaster } from "@/components/ui/sonner";

const title = "Mettu Ramakrishna Reddy | Software Engineer";
const description =
  "Software Engineer specializing in C#, ASP.NET Core, Angular, REST APIs, SQL, and full-stack web development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mettu Ramakrishna Reddy",
          jobTitle: "Software Engineer",
          email: "mailto:ramakrishnamettu4@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
          sameAs: [
            "https://github.com/Ramakrishna0010",
            "https://www.linkedin.com/in/mettu-ramakrishna-reddy",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <FeaturedProject />
        <Services />
        <EducationAndPresence />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
