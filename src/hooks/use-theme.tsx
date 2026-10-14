// ============================================================
// THEME HOOK — powers the dark/light toggle in the navbar.
// - First visit: follows the visitor's system preference.
// - After toggling: the choice is saved in the browser
//   (localStorage) and restored on the next visit.
// Works by adding/removing the "dark" class on <html>, which
// switches the color tokens defined in src/styles.css.
// ============================================================
import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

// Decide the starting theme: saved choice first, then system preference.
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light"; // server-side render default
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  // Apply the real initial theme once the page loads in the browser.
  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
  }, []);

  // Whenever the theme changes: toggle the CSS class and save the choice.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
