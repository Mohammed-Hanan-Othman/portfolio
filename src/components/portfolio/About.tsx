// ============================================================
// ABOUT — intro paragraph on the left, three highlight cards
// on the right. The paragraph text comes from the content file;
// the highlight cards are defined directly below.
// ============================================================
import { Section } from "./Section";
import { profile } from "@/lib/portfolio-data";

// Highlight cards — short value props shown next to the intro text.
const highlights = [
  { stat: "End-to-end", label: "From data cleaning to deployed pipelines" },
  { stat: "Analytics + Engineering", label: "Insight backed by reliable systems" },
  { stat: "Decision-first", label: "Models and dashboards built to drive action" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A data professional who ships complete solutions">
      <div className="grid gap-12 md:grid-cols-5">
        {/* Left column: intro paragraph (3/5 of the width on desktop) */}
        <p className="text-lg leading-relaxed text-muted-foreground md:col-span-3">
          {profile.intro}
        </p>
        {/* Right column: highlight cards (2/5 of the width) */}
        <div className="flex flex-col gap-6 md:col-span-2">
          {highlights.map((h) => (
            <div key={h.stat} className="rounded-lg border border-border bg-card p-5">
              <p className="text-base font-semibold text-foreground">{h.stat}</p>
              <p className="mt-1 text-sm text-muted-foreground">{h.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
