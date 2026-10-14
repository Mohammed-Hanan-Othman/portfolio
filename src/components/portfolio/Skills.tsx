// ============================================================
// SKILLS — two pill groups side by side: "Core" (abilities)
// and "Tools" (technologies). Both lists come from
// src/lib/portfolio-data.ts.
// ============================================================
import { Section } from "./Section";
import { coreSkills, toolSkills } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I bring to the table"
      muted
    >
      <div className="grid gap-10 md:grid-cols-2">
        {/* Left column: core abilities */}
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Core
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {coreSkills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        {/* Right column: tools & technologies */}
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Tools
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {toolSkills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
