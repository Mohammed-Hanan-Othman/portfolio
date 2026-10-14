// ============================================================
// PROJECTS — the Featured Projects grid. Each entry from the
// content file renders as a card with Problem / Solution /
// Impact, technology tags, and Code + Live demo links.
// ============================================================
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Selected work"
      description="A sample of end-to-end projects spanning analysis, modeling, and data engineering."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-xl border border-border bg-card p-6"
          >
            <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>

            {/* Problem / Solution / Impact — the case-study body of the card */}
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-medium text-foreground">Problem</dt>
                <dd className="mt-0.5 text-muted-foreground">{p.problem}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Solution</dt>
                <dd className="mt-0.5 text-muted-foreground">{p.solution}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Impact</dt>
                <dd className="mt-0.5 text-muted-foreground">{p.impact}</dd>
              </div>
            </dl>

            {/* Technology tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* External links — update the URLs in portfolio-data.ts */}
            <div className="mt-6 flex gap-4 border-t border-border pt-4">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
                Live demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
