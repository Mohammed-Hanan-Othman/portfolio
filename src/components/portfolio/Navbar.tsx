// ============================================================
// NAVBAR — fixed top navigation bar.
// - Left: name (links back to the top)
// - Center (desktop): section links that smooth-scroll down
// - Right: dark/light theme toggle + mobile hamburger menu
// Gains a blurred background once the visitor scrolls.
// ============================================================
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { profile } from "@/lib/portfolio-data";

// Navigation links — each href matches a section's id on the page.
const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false); // mobile menu open/closed
  const [scrolled, setScrolled] = useState(false); // true after scrolling past the top

  // Track scroll position to switch the bar from transparent to blurred.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Site name — scrolls back to the hero */}
        <a href="#hero" className="text-base font-semibold tracking-tight text-foreground">
          {profile.name}
        </a>

        {/* Desktop section links (hidden on mobile) */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Dark/light theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-accent"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          {/* Hamburger button (mobile only) */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-accent md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu — closes when a link is tapped */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
