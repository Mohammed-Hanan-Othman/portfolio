// ============================================================
// HERO — the full-height intro at the top of the page.
// Shows: role label, big headline, tagline, and two buttons
// ("View my work" scrolls to projects, "Download resume").
// Content comes from src/lib/portfolio-data.ts.
// ============================================================
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16"
    >
      {/* Decorative soft-blue glow in the top-right corner (purely visual) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div className="mx-auto w-full max-w-6xl">
        {/* Small uppercase label above the headline */}
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          {profile.role}
        </p>
        {/* Main headline */}
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Hi, I'm {profile.name}. I turn data into decisions.
        </h1>
        {/* Supporting sentence from the content file */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {profile.tagline}
        </p>
        {/* Call-to-action buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View my work
            <ArrowRight className="h-4 w-4" />
          </a>
          {/* Serves public/resume.pdf — replace that file with the real resume */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Download className="h-4 w-4" />
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
