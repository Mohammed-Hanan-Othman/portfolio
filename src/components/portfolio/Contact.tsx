// ============================================================
// CONTACT — final section with the call-to-action headline and
// a button that opens the visitor's email app addressed to
// Jason. Email + headline come from src/lib/portfolio-data.ts.
// ============================================================
import { Mail, ArrowRight } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/40 px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Contact
        </p>
        {/* Call-to-action headline from the content file */}
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {profile.contactCta}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          I'm open to roles, freelance projects, and collaborations. Drop me a line and I'll get
          back to you.
        </p>
        {/* mailto: button opens the visitor's email client */}
        <div className="mt-8">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
