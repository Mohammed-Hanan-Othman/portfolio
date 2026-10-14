// ============================================================
// FOOTER — bottom bar with name/role on the left and email +
// copyright on the right. Values come from
// src/lib/portfolio-data.ts; the year is generated automatically.
// ============================================================
import { Mail } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Left: name and role */}
        <div className="text-center sm:text-left">
          <p className="text-base font-semibold text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
        </div>
        {/* Right: email link and copyright line */}
        <div className="flex flex-col items-center gap-3 sm:items-end">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
