# Maltilda Bosibori — Developer Portfolio

A personal portfolio site built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. It showcases projects built during software development training at Nairobits Trust and Moringa School, plus the transition into customer experience work.

## Tech stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** for styling and theming (dark/light via `next-themes`)
- **Framer Motion** for scroll/hover animations
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # eslint
```

## Project structure

```
src/
  app/
    page.tsx                 Home page (assembles all sections)
    layout.tsx                Root layout: fonts, theme provider, nav, footer
    projects/[slug]/page.tsx  Dedicated case-study page per project
    sitemap.ts, robots.ts     SEO
  components/
    sections/                One file per homepage section
    icons/                    Brand icons (GitHub, LinkedIn) not bundled in lucide-react
  data/
    site.ts                   Name, roles, contact info, social/CV links
    projects.ts                All project case-study content
    skills.ts, timeline.ts     Skills grid + journey timeline content
```

## Content you should personalize before shipping this

This was built using real content pulled from Maltilda's GitHub repos (`Maltilda-Nyaboke`) wherever possible, but a few things are intentionally left as placeholders:

1. **`src/data/site.ts`**
   - `linkedinUrl` — currently a placeholder, add the real LinkedIn URL
   - `email` — currently `hello@maltildabosibori.dev`; swap for the real contact address
   - `phone` — currently a placeholder
   - `url` — set to the real production domain once deployed (used for metadata + sitemap)

2. **CV download**
   - The "Download CV" button links to `/Maltilda-Bosibori-CV.pdf`. Drop the real CV file into `public/Maltilda-Bosibori-CV.pdf` with that exact name.

3. **Screenshots**
   - Every project card and case-study page currently uses generated placeholder art (not real screenshots), since none were available for these projects. To swap in real ones, replace the `PlaceholderArt` usages in `src/components/project-card.tsx` and `src/app/projects/[slug]/page.tsx` with real `<Image>` components pointing at screenshots you add under `public/projects/<slug>/`.

4. **GitHub stats section**
   - Uses the public `github-readme-stats` and `ghchart.rshah.org` widgets pointed at the `Maltilda-Nyaboke` GitHub username (`src/data/site.ts`). These are live, third-party widgets — no API key needed, but they depend on that external service staying up.

## A note on project accuracy

Every project's description, feature list, and tech stack in `src/data/projects.ts` was written directly from that project's real GitHub README and source (not from assumptions). Two things worth knowing:

- **Recipe Hub** is marked as a **Team Project** — its GitHub link points to the repository actually owned by the collaborating teammate (Charles Okunzo), since Maltilda's own fork of it contains no source code.
- A "Netflix Clone" project was deliberately **left out**: its repository under her account shows no commits from her, so it couldn't be verified as her work.

If you get more detail from Maltilda directly (e.g. her actual contribution to Recipe Hub, or a Netflix Clone project she can verify), update `src/data/projects.ts` accordingly.

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. No environment variables are required — it's a fully static/server-rendered site with no database.
4. After the first deploy, update `site.url` in `src/data/site.ts` to the assigned domain and redeploy so SEO metadata and the sitemap are correct.

### Any other Node host

```bash
npm run build
npm run start
```

Or use `next.config.ts` with `output: "export"` if you want a fully static export (note: this disables `generateMetadata`'s dynamic OG behavior, which isn't used here anyway, so it's safe to enable if you need static hosting).
