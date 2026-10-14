// ============================================================
// CERTIFICATIONS — grid of credential cards, each with an
// award icon, title, and issuer. Entries come from
// src/lib/portfolio-data.ts.
// ============================================================
import { Award } from "lucide-react";
import { Section } from "./Section";
import { certifications } from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Credentials & education"
      muted
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((c) => (
          <div
            key={c.title}
            className="flex items-start gap-4 rounded-xl border border-border bg-card p-6"
          >
            {/* Icon chip */}
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Award className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{c.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
