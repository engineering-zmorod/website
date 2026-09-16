# Zmorod Hassan — Structural Engineering

Static site for Zmorod Hassan Structural Engineering. Hebrew, RTL.

## URLs

| Where | URL |
|---|---|
| Local dev | http://localhost:4321/website/ |
| Live (GitHub Pages) | https://engineering-zmorod.github.io/website/ |

> Note the `/website/` suffix — it comes from `base` in `astro.config.mjs`.
> `localhost:4321/` on its own returns 404. Dev matches production on purpose.

## Commands

Run from the project root.

```bash
npm run dev            # start dev server (detaches, keeps running)
npm run build          # build to dist/ — run before pushing
npm run preview        # serve the built dist/ locally
```

Dev server control:

```bash
npx astro dev stop && npx astro dev   # restart
npx astro dev status                  # running? which PID?
npx astro dev logs                    # tail output
npx astro dev stop                    # stop
```

Editing `.astro`, `.css` or content hot-reloads automatically.
**Restart is only needed after changing `astro.config.mjs`** — it isn't watched.

## Deploying

Push to `main`. That's the whole process.

```bash
npm run build                      # catch build errors first
git add -A
git commit -m "..."
git push
```

GitHub Actions builds and deploys to Pages in ~1 minute.
Watch runs at [Actions](https://github.com/engineering-zmorod/website/actions).

- Only `main` deploys — push any other branch to work without publishing.
- If the build fails, nothing deploys and the previous version stays live.

## Stack

| | |
|---|---|
| [Astro](https://astro.build) 7 | static output, zero JS by default |
| [Tailwind](https://tailwindcss.com) 4 | via `@tailwindcss/vite` |
| [GSAP](https://gsap.com) + ScrollTrigger | scroll animation |
| [Lenis](https://lenis.darkroom.engineering) | smooth scroll, synced to ScrollTrigger |
| [Heebo](https://fonts.google.com/specimen/Heebo) | Hebrew + Latin type |

Brand tokens (`navy-*`, `gold-*`) come from the client's logo and live in
`src/styles/global.css`. Use them instead of hex codes.

**RTL:** use Tailwind logical properties — `ms-*`/`me-*`, `ps-*`/`pe-*`,
`start-*`/`end-*` — never `ml-*`/`pl-*`. Keeps layouts correct if an LTR
language is added later.

## Layout

```
src/
  layouts/Layout.astro    <html lang="he" dir="rtl">, fonts, GSAP + Lenis init
  pages/                  one file per route
  styles/global.css       Tailwind import + brand tokens
  components/             (empty for now)
public/                   copied verbatim to dist/ — favicon, .nojekyll
assets/                   source images (logos)
.github/workflows/        Pages deploy
```
