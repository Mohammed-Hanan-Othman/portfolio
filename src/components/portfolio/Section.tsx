// ============================================================
// SECTION — shared layout wrapper used by most page sections.
// Renders the small uppercase eyebrow label, the section title,
// an optional description, and the section content below.
// Set `muted` to give the section a soft tinted background
// (used to visually alternate sections down the page).
// ============================================================
import type { ReactNode } from "react";

type SectionProps = {
  id: string; // anchor id — must match the navbar links (e.g. "about" → #about)
  eyebrow: string; // small uppercase label above the title
  title: string; // main section heading
  description?: string; // optional paragraph under the title
  children: ReactNode; // the section's content
  muted?: boolean; // true = tinted background
};

export function Section({ id, eyebrow, title, description, children, muted }: SectionProps) {
  return (
    <section id={id} className={muted ? "bg-secondary/40 px-6 py-24" : "px-6 py-24"}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
