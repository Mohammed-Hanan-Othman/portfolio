# Jason McCarthy — Portfolio

A modern, minimalist portfolio website for Jason McCarthy, Data Scientist & Analyst.
Soft blue/white design with an elegant dark mode, fully responsive, SEO-optimized.

Built with **React 19 + TanStack Start** (server-rendered), **Tailwind CSS v4**, and **TypeScript**.

---

## Project structure (where things live)

```
src/
├── routes/
│   ├── __root.tsx            # Global layout: fonts, site-wide SEO meta, 404/error screens
│   ├── index.tsx             # The home page — stacks all sections + page SEO metadata
│   └── sitemap[.]xml.ts      # Sitemap served at /sitemap.xml
├── components/portfolio/     # One file per page section (Navbar, Hero, About, ...)
├── hooks/use-theme.tsx       # Dark/light theme toggle logic
├── lib/portfolio-data.ts     # *** ALL SITE CONTENT LIVES HERE ***
└── styles.css                # Color system (light + dark palettes)
public/
├── resume.pdf                # Resume file — replace with the real PDF
└── robots.txt                # Search-engine crawler rules
```

**To update any text, project, skill, or certification on the site, edit only
`src/lib/portfolio-data.ts`.** Components read from that file, so no other changes are needed.

---

## Running locally

You need [Bun](https://bun.sh) installed (or use npm — both work).

```bash
# 1. Install dependencies
bun install

# 2. Start the dev server
bun run dev
```

Then open **http://localhost:8080** — the site reloads automatically as you edit files.

### Other useful commands

```bash
bun run build      # Production build (outputs to .output/)
bun run preview    # Preview the production build locally
bun run lint       # Check code style
```

---

## Deploying to Netlify (free)

The repo includes a ready-made `netlify.toml`, so deployment takes a minute:

1. Push this project to a GitHub/GitLab repository.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Pick the repository. Netlify auto-detects the settings from `netlify.toml`
   (build command `bun install && bun run build`, publish directory `.output/public`).
4. Click **Deploy**. Every push to the main branch redeploys automatically.

### Deploying with the Netlify CLI instead

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

## Before going live — things to personalize

- Replace `public/resume.pdf` with the real resume (keep the same file name).
- Update the project `github` / `demo` links in `src/lib/portfolio-data.ts`
  (they currently point to placeholders).
- Once you have a public URL, update the canonical/OG URLs in
  `src/routes/index.tsx` and the `BASE_URL` in `src/routes/sitemap[.]xml.ts`.
