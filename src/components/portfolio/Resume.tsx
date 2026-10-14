// ============================================================
// RESUME BANNER — a wide card between Certifications and
// Contact with a "Download resume" button.
// The button serves public/resume.pdf — replace that file
// with the real resume (keep the same file name).
// ============================================================
import { Download } from "lucide-react";

export function Resume() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:p-10">
          {/* Left: banner text */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Want the full picture?
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Download my resume for a detailed overview of my experience, projects, and technical
              skills.
            </p>
          </div>
          {/* Right: download button (serves public/resume.pdf) */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
