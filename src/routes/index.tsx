// ============================================================
// HOME PAGE (/) — the entire portfolio is one long page.
// This file:
//   1. Defines the SEO metadata for the home page (title,
//      description, social-share tags, structured data).
//   2. Stacks the page sections in order: Hero → About →
//      Skills → Projects → Certifications → Resume → Contact,
//      with the Navbar on top and the Footer at the bottom.
// ============================================================
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

// SEO text — shown in browser tabs, Google results, and link previews.
const title = "Jason McCarthy — Data Scientist & Analyst";
const description =
  "Jason McCarthy is a Data Scientist and Analyst building end-to-end data solutions — from cleaning and modeling to visualization, storytelling, and reliable pipelines.";

export const Route = createFileRoute("/")({
  // Page-specific <head> tags (merged with the global ones in __root.tsx).
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      // Social-share previews (LinkedIn, X/Twitter, chat apps, ...)
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      // Structured data so search engines understand this is a person's profile.
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jason McCarthy",
          jobTitle: "Data Scientist & Analyst",
          email: "mailto:jasonmccarthy@gmail.com",
          description,
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
        {/* Page sections, top to bottom */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
